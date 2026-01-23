# Generate "Real Value of $100k" Heat Map

This script generates a viral-ready heat map visualization showing the real value of a $100k salary across all US states after taxes.

## Setup

1. Install Python dependencies:
```bash
pip install -r scripts/requirements.txt
```

Or install individually:
```bash
pip install plotly kaleido pandas
```

## Usage

Run the script:
```bash
python scripts/generate_100k_heatmap.py
```

## Output

The script generates:
- `public/100k-real-value-heatmap.png` - High-resolution PNG (2800x1800px) ready for Reddit/Twitter
- `public/100k-real-value-heatmap.html` - Interactive HTML version

## Sharing Strategy

### Reddit (r/dataisbeautiful)
**Title:** "The Real Value of $100k Salary: Net Pay After Federal, State & FICA Taxes by State [OC]"

**Post text:**
```
I calculated the net pay for a $100k salary across all 50 states + DC, accounting for federal taxes, state income taxes, and FICA (Social Security + Medicare).

Key findings:
- Highest net pay: [State] at $[amount]
- Lowest net pay: [State] at $[amount]
- Difference: $[amount] between highest and lowest

Methodology: Single filer, standard deduction, no 401k or health insurance deductions. Uses 2024 tax brackets.

[OC] Data source: quantcurb.com/salary-tax-estimator
```

### Twitter/X
**Tweet:**
```
The Real Value of $100k Salary Across America 🗺️

After federal, state & FICA taxes, your $100k salary ranges from $[lowest] to $[highest] depending on your state.

Calculate your exact take-home pay:
quantcurb.com/salary-tax-estimator

#PersonalFinance #Taxes #DataViz
```

**Attach:** The PNG image

### LinkedIn
**Post:**
```
Ever wonder why your $100k salary feels different depending on where you live?

I mapped the real value of $100k across all US states after accounting for federal taxes, state income taxes, and FICA deductions.

The difference between the highest and lowest net pay states is $[amount] - that's a significant impact on your financial planning!

Use our calculator to see your exact take-home pay: quantcurb.com/salary-tax-estimator

#PersonalFinance #TaxPlanning #DataVisualization
```

## Expected Impact

- **Reddit:** 10,000-50,000 views in 24 hours if it hits r/all
- **Twitter:** Potential for viral thread with 5,000-20,000 impressions
- **Backlinks:** News sites (Business Insider, CNBC, etc.) may pick it up and link back
- **Traffic:** 1,000-5,000 visitors to calculator pages

## Tips for Maximum Virality

1. **Post timing:** 
   - Reddit: Tuesday-Thursday, 10am-2pm EST
   - Twitter: Tuesday-Thursday, 9am-11am EST

2. **Engage with comments:** Respond to questions, provide more data

3. **Cross-post:** Share on LinkedIn, Hacker News, relevant Facebook groups

4. **Follow-up content:** Create state-specific comparisons, "Best states for remote workers" posts

5. **Update annually:** Regenerate with new tax brackets each year for recurring traffic
