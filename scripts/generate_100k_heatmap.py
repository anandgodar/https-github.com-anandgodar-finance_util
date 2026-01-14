#!/usr/bin/env python3
"""
Generate a viral heat map showing "The Real Value of $100k" across US states.
This visualization compares net pay after federal, state, and FICA taxes.

Output: High-resolution PNG image ready for Reddit/Twitter sharing.
"""

import json
import math
from typing import Dict, Tuple

# State tax data (matching SalaryCalculator component exactly)
# Format: {'name': str, 'rate': float, 'stdDeduction': float, 'brackets': [(limit, rate), ...] or None}
STATE_TAX_DATA = {
    'AL': {'name': 'Alabama', 'rate': 0.05, 'stdDeduction': 2500, 'brackets': [(500, 0.02), (3000, 0.04), (None, 0.05)]},
    'AK': {'name': 'Alaska', 'rate': 0.00, 'stdDeduction': 0},
    'AZ': {'name': 'Arizona', 'rate': 0.025, 'stdDeduction': 14600},
    'AR': {'name': 'Arkansas', 'rate': 0.044, 'stdDeduction': 2320, 'brackets': [(5000, 0.02), (10000, 0.03), (None, 0.044)]},
    'CA': {'name': 'California', 'rate': 0.093, 'stdDeduction': 5363, 'brackets': [
        (10412, 0.01), (24684, 0.02), (38959, 0.04), (54081, 0.06), (68350, 0.08),
        (349137, 0.093), (418961, 0.103), (698271, 0.113), (None, 0.123)
    ]},
    'CO': {'name': 'Colorado', 'rate': 0.044, 'stdDeduction': 14600},
    'CT': {'name': 'Connecticut', 'rate': 0.05, 'stdDeduction': 15000, 'brackets': [
        (10000, 0.03), (50000, 0.05), (100000, 0.055), (200000, 0.06), (250000, 0.065), (500000, 0.069), (None, 0.0699)
    ]},
    'DE': {'name': 'Delaware', 'rate': 0.066, 'stdDeduction': 3250, 'brackets': [
        (2000, 0.00), (5000, 0.022), (10000, 0.039), (20000, 0.048), (25000, 0.052), (60000, 0.0555), (None, 0.066)
    ]},
    'FL': {'name': 'Florida', 'rate': 0.00, 'stdDeduction': 0},
    'GA': {'name': 'Georgia', 'rate': 0.0549, 'stdDeduction': 12000},
    'HI': {'name': 'Hawaii', 'rate': 0.0825, 'stdDeduction': 2200, 'brackets': [
        (2400, 0.014), (4800, 0.032), (9600, 0.044), (14400, 0.055), (19200, 0.064), (24000, 0.068),
        (36000, 0.072), (48000, 0.076), (150000, 0.079), (175000, 0.0825), (200000, 0.09), (None, 0.11)
    ]},
    'ID': {'name': 'Idaho', 'rate': 0.058, 'stdDeduction': 14600},
    'IL': {'name': 'Illinois', 'rate': 0.0495, 'stdDeduction': 2775},
    'IN': {'name': 'Indiana', 'rate': 0.0305, 'stdDeduction': 1000},
    'IA': {'name': 'Iowa', 'rate': 0.057, 'stdDeduction': 0, 'brackets': [(6000, 0.044), (30000, 0.0482), (None, 0.057)]},
    'KS': {'name': 'Kansas', 'rate': 0.057, 'stdDeduction': 3500, 'brackets': [(15000, 0.031), (30000, 0.0525), (None, 0.057)]},
    'KY': {'name': 'Kentucky', 'rate': 0.04, 'stdDeduction': 3160},
    'LA': {'name': 'Louisiana', 'rate': 0.0425, 'stdDeduction': 4500, 'brackets': [(12500, 0.0185), (50000, 0.035), (None, 0.0425)]},
    'ME': {'name': 'Maine', 'rate': 0.0715, 'stdDeduction': 14600, 'brackets': [(26050, 0.058), (61600, 0.0675), (None, 0.0715)]},
    'MD': {'name': 'Maryland', 'rate': 0.0475, 'stdDeduction': 2550, 'brackets': [
        (1000, 0.02), (2000, 0.03), (3000, 0.04), (100000, 0.0475), (125000, 0.05), (150000, 0.0525), (250000, 0.055), (None, 0.0575)
    ]},
    'MA': {'name': 'Massachusetts', 'rate': 0.05, 'stdDeduction': 4400},
    'MI': {'name': 'Michigan', 'rate': 0.0425, 'stdDeduction': 5600},
    'MN': {'name': 'Minnesota', 'rate': 0.0705, 'stdDeduction': 14575, 'brackets': [
        (30070, 0.0535), (98760, 0.068), (193240, 0.0785), (None, 0.0985)
    ]},
    'MS': {'name': 'Mississippi', 'rate': 0.05, 'stdDeduction': 0, 'brackets': [(10000, 0.00), (None, 0.05)]},
    'MO': {'name': 'Missouri', 'rate': 0.048, 'stdDeduction': 14600, 'brackets': [
        (1207, 0.00), (2414, 0.02), (3621, 0.025), (4828, 0.03), (6035, 0.035), (7242, 0.04), (8449, 0.045), (None, 0.048)
    ]},
    'MT': {'name': 'Montana', 'rate': 0.059, 'stdDeduction': 0, 'brackets': [(20500, 0.047), (None, 0.059)]},
    'NE': {'name': 'Nebraska', 'rate': 0.0584, 'stdDeduction': 7900, 'brackets': [
        (3820, 0.0246), (22130, 0.0351), (35000, 0.0501), (None, 0.0584)
    ]},
    'NV': {'name': 'Nevada', 'rate': 0.00, 'stdDeduction': 0},
    'NH': {'name': 'New Hampshire', 'rate': 0.00, 'stdDeduction': 0},
    'NJ': {'name': 'New Jersey', 'rate': 0.0637, 'stdDeduction': 1000, 'brackets': [
        (20000, 0.014), (35000, 0.0175), (40000, 0.035), (75000, 0.05525), (500000, 0.0637), (1000000, 0.0897), (None, 0.1075)
    ]},
    'NM': {'name': 'New Mexico', 'rate': 0.059, 'stdDeduction': 14600, 'brackets': [(5500, 0.017), (11000, 0.032), (16000, 0.047), (None, 0.059)]},
    'NY': {'name': 'New York', 'rate': 0.065, 'stdDeduction': 8000, 'brackets': [
        (8500, 0.04), (11700, 0.045), (13900, 0.0525), (21400, 0.0585), (80650, 0.0625), (215400, 0.0685),
        (1077550, 0.0965), (5000000, 0.103), (None, 0.109)
    ]},
    'NC': {'name': 'North Carolina', 'rate': 0.045, 'stdDeduction': 14250},
    'ND': {'name': 'North Dakota', 'rate': 0.025, 'stdDeduction': 0, 'brackets': [
        (44725, 0.00), (225975, 0.0195), (None, 0.025)
    ]},
    'OH': {'name': 'Ohio', 'rate': 0.035, 'stdDeduction': 0, 'brackets': [(26050, 0.00), (100000, 0.0275), (None, 0.035)]},
    'OK': {'name': 'Oklahoma', 'rate': 0.0475, 'stdDeduction': 6350, 'brackets': [
        (1000, 0.0025), (2500, 0.0075), (3750, 0.0175), (4900, 0.0275), (7200, 0.0375), (None, 0.0475)
    ]},
    'OR': {'name': 'Oregon', 'rate': 0.0875, 'stdDeduction': 2745, 'brackets': [
        (4050, 0.0475), (10200, 0.0675), (125000, 0.0875), (None, 0.099)
    ]},
    'PA': {'name': 'Pennsylvania', 'rate': 0.0307, 'stdDeduction': 0},
    'RI': {'name': 'Rhode Island', 'rate': 0.0599, 'stdDeduction': 10100, 'brackets': [
        (73450, 0.0375), (166950, 0.0475), (None, 0.0599)
    ]},
    'SC': {'name': 'South Carolina', 'rate': 0.064, 'stdDeduction': 0, 'brackets': [
        (3460, 0.00), (17330, 0.03), (None, 0.064)
    ]},
    'SD': {'name': 'South Dakota', 'rate': 0.00, 'stdDeduction': 0},
    'TN': {'name': 'Tennessee', 'rate': 0.00, 'stdDeduction': 0},
    'TX': {'name': 'Texas', 'rate': 0.00, 'stdDeduction': 0},
    'UT': {'name': 'Utah', 'rate': 0.0465, 'stdDeduction': 14600},
    'VT': {'name': 'Vermont', 'rate': 0.0875, 'stdDeduction': 0, 'brackets': [
        (45400, 0.0335), (110000, 0.066), (229550, 0.076), (None, 0.0875)
    ]},
    'VA': {'name': 'Virginia', 'rate': 0.0575, 'stdDeduction': 8500, 'brackets': [
        (3000, 0.02), (5000, 0.03), (17000, 0.05), (None, 0.0575)
    ]},
    'WA': {'name': 'Washington', 'rate': 0.00, 'stdDeduction': 0},
    'WV': {'name': 'West Virginia', 'rate': 0.0512, 'stdDeduction': 0, 'brackets': [
        (10000, 0.0236), (25000, 0.0315), (40000, 0.0354), (60000, 0.0472), (None, 0.0512)
    ]},
    'WI': {'name': 'Wisconsin', 'rate': 0.053, 'stdDeduction': 12760, 'brackets': [
        (14320, 0.035), (28640, 0.044), (315310, 0.053), (None, 0.0765)
    ]},
    'WY': {'name': 'Wyoming', 'rate': 0.00, 'stdDeduction': 0},
    'DC': {'name': 'District of Columbia', 'rate': 0.085, 'stdDeduction': 14600, 'brackets': [
        (10000, 0.04), (40000, 0.06), (60000, 0.065), (250000, 0.085), (500000, 0.0925), (1000000, 0.095), (None, 0.1075)
    ]}
}

# State abbreviations to FIPS codes for mapping
STATE_FIPS = {
    'AL': '01', 'AK': '02', 'AZ': '04', 'AR': '05', 'CA': '06', 'CO': '08', 'CT': '09',
    'DE': '10', 'FL': '12', 'GA': '13', 'HI': '15', 'ID': '16', 'IL': '17', 'IN': '18',
    'IA': '19', 'KS': '20', 'KY': '21', 'LA': '22', 'ME': '23', 'MD': '24', 'MA': '25',
    'MI': '26', 'MN': '27', 'MS': '28', 'MO': '29', 'MT': '30', 'NE': '31', 'NV': '32',
    'NH': '33', 'NJ': '34', 'NM': '35', 'NY': '36', 'NC': '37', 'ND': '38', 'OH': '39',
    'OK': '40', 'OR': '41', 'PA': '42', 'RI': '44', 'SC': '45', 'SD': '46', 'TN': '47',
    'TX': '48', 'UT': '49', 'VT': '50', 'VA': '51', 'WA': '53', 'WV': '54', 'WI': '55',
    'WY': '56', 'DC': '11'
}


def calculate_progressive_tax(taxable_income: float, brackets: list) -> float:
    """Calculate tax using progressive brackets (matching SalaryCalculator logic)."""
    tax = 0.0
    prev_limit = 0
    
    for bracket in brackets:
        limit = bracket[0] if bracket[0] is not None else float('inf')
        rate = bracket[1]
        
        if taxable_income > prev_limit:
            taxable_in_bracket = min(taxable_income, limit) - prev_limit
            if taxable_in_bracket > 0:
                tax += taxable_in_bracket * rate
        
        if taxable_income <= limit:
            break
        prev_limit = limit
    
    return tax


def calculate_state_tax(taxable_gross: float, state_code: str) -> float:
    """Calculate state income tax based on brackets or flat rate (matching SalaryCalculator logic)."""
    state_info = STATE_TAX_DATA.get(state_code)
    if not state_info:
        return 0.0
    
    # Apply state standard deduction
    std_deduction = state_info.get('stdDeduction', 0)
    state_taxable = max(0, taxable_gross - std_deduction)
    
    # If no brackets, use flat rate
    if 'brackets' not in state_info or not state_info['brackets']:
        return state_taxable * state_info['rate']
    
    # Calculate using progressive brackets
    return calculate_progressive_tax(state_taxable, state_info['brackets'])


def calculate_net_pay(gross: float, state_code: str, filing_status: str = 'single') -> float:
    """
    Calculate net pay after federal, state, and FICA taxes.
    Matches SalaryCalculator component logic exactly.
    Assumes single filer, standard deduction, no 401k or health insurance.
    """
    # 2024 Federal Tax Brackets (Single Filer) - matching SalaryCalculator
    federal_std_deduction = 14600
    taxable_gross = gross  # No 401k or health insurance deductions for this calculation
    taxable_income = max(0, taxable_gross - federal_std_deduction)
    
    federal_brackets = [
        (11600, 0.10),
        (47150, 0.12),
        (100525, 0.22),
        (191950, 0.24),
        (243725, 0.32),
        (609350, 0.35),
        (None, 0.37)
    ]
    
    federal_tax = calculate_progressive_tax(taxable_income, federal_brackets)
    
    # FICA taxes (Social Security + Medicare) - matching SalaryCalculator
    ss_wage_base = 168600
    ss_tax = min(gross, ss_wage_base) * 0.062
    medicare_tax = gross * 0.0145
    
    # Additional Medicare tax for high earners (>$200k)
    if gross > 200000:
        medicare_tax += (gross - 200000) * 0.009
    
    fica_tax = ss_tax + medicare_tax
    
    # State tax (uses taxable_gross, applies state std deduction internally)
    state_tax = calculate_state_tax(taxable_gross, state_code)
    
    # Net pay
    net_pay = gross - federal_tax - fica_tax - state_tax
    
    return net_pay


def generate_heatmap_data():
    """Calculate net pay for $100k salary in each state."""
    gross_salary = 100000
    results = {}
    
    for state_code, state_info in STATE_TAX_DATA.items():
        net_pay = calculate_net_pay(gross_salary, state_code)
        results[state_code] = {
            'name': state_info['name'],
            'net_pay': net_pay,
            'net_value': net_pay / 1000  # Value in "thousands" for visualization
        }
    
    return results


def create_visualization():
    """Create the heat map visualization using plotly."""
    try:
        import plotly.graph_objects as go
        import plotly.express as px
    except ImportError:
        print("ERROR: plotly not installed. Install with: pip install plotly")
        return None
    
    data = generate_heatmap_data()
    
    # Prepare data for choropleth
    state_codes = []
    net_values = []
    text_labels = []
    
    for state_code in sorted(data.keys()):
        state_codes.append(state_code)
        net_value = data[state_code]['net_value']
        net_pay = data[state_code]['net_pay']
        state_name = data[state_code]['name']
        
        net_values.append(net_value)
        text_labels.append(f"{state_name}<br>${net_pay:,.0f} Net<br>(${net_value:.1f}k)")
    
    # Create choropleth map
    fig = go.Figure(data=go.Choropleth(
        locations=state_codes,
        z=net_values,
        locationmode='USA-states',
        colorscale='RdYlGn',  # Red-Yellow-Green (red = lower net pay, green = higher)
        reversescale=True,  # Reverse so green = higher net pay
        text=text_labels,
        hovertemplate='%{text}<extra></extra>',
        colorbar=dict(
            title="Net Pay (in $1000s)",
            titlefont=dict(size=16),
            tickfont=dict(size=14),
            len=0.75
        ),
        zmin=min(net_values) - 1,
        zmax=max(net_values) + 1
    ))
    
    fig.update_layout(
        title={
            'text': 'The Real Value of $100k Salary Across America<br><sub>Net Pay After Federal, State & FICA Taxes (Single Filer, 2024)</sub>',
            'x': 0.5,
            'xanchor': 'center',
            'font': {'size': 24, 'family': 'Arial Black'}
        },
        geo=dict(
            scope='usa',
            projection=go.layout.geo.Projection(type='albers usa'),
            showlakes=True,
            lakecolor='rgb(255, 255, 255)',
            bgcolor='rgb(248, 248, 248)'
        ),
        width=1400,
        height=900,
        font=dict(family='Arial', size=12),
        margin=dict(l=0, r=0, t=80, b=0)
    )
    
    # Add source attribution
    fig.add_annotation(
        text='Source: QuantCurb.com | Calculate your exact take-home pay: quantcurb.com/salary-tax-estimator',
        xref='paper', yref='paper',
        x=0.5, y=-0.05,
        showarrow=False,
        font=dict(size=12, color='gray'),
        xanchor='center'
    )
    
    return fig


def main():
    """Main execution function."""
    print("Generating 'Real Value of $100k' heat map...")
    
    # Generate data
    data = generate_heatmap_data()
    
    # Print summary statistics
    net_pays = [d['net_pay'] for d in data.values()]
    print(f"\n📊 Summary Statistics:")
    print(f"Highest Net Pay: ${max(net_pays):,.0f} ({data[max(data, key=lambda x: data[x]['net_pay'])]['name']})")
    print(f"Lowest Net Pay: ${min(net_pays):,.0f} ({data[min(data, key=lambda x: data[x]['net_pay'])]['name']})")
    print(f"Average Net Pay: ${sum(net_pays)/len(net_pays):,.0f}")
    print(f"Difference: ${max(net_pays) - min(net_pays):,.0f}")
    
    # Create visualization
    fig = create_visualization()
    
    if fig:
        # Save as high-resolution PNG
        output_file = 'public/100k-real-value-heatmap.png'
        print(f"\n💾 Saving visualization to {output_file}...")
        fig.write_image(output_file, width=1400, height=900, scale=2)  # 2x scale for high-res
        print(f"✅ Saved! Image size: 2800x1800px (high resolution)")
        
        # Also save as HTML for interactive version
        html_file = 'public/100k-real-value-heatmap.html'
        fig.write_html(html_file)
        print(f"✅ Interactive version saved to {html_file}")
        
        print(f"\n🚀 Ready to share!")
        print(f"   - Reddit: r/dataisbeautiful")
        print(f"   - Twitter: Post with image + link to quantcurb.com/salary-tax-estimator")
        print(f"   - Title suggestion: 'The Real Value of $100k Salary: Net Pay After Taxes by State'")
    else:
        print("\n❌ Failed to create visualization. Install plotly: pip install plotly kaleido")


if __name__ == '__main__':
    main()
