'use client';

import React from 'react';

const ArticleOne: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <h2>Build a Simple Budget Plan</h2>
      <p>
        This placeholder article shows how a static blog component can render inside the Next.js
        App Router while remaining a regular React component in your content map.
      </p>
      <ul>
        <li>List your essential monthly expenses.</li>
        <li>Set a savings target and automate transfers.</li>
        <li>Review spending weekly to stay on track.</li>
      </ul>
    </article>
  );
};

export default ArticleOne;
