'use client';

import React, { createContext, useContext } from 'react';

/**
 * True when a calculator is rendered inside a page that already has its own
 * <h1> (e.g. the /<tool>/<state>/ landing pages). The calculator's title then
 * drops to <h2> so every page has exactly one <h1>.
 */
export const EmbeddedToolContext = createContext(false);

type ToolTitleProps = {
  className?: string;
  children: React.ReactNode;
};

const ToolTitle: React.FC<ToolTitleProps> = ({ className, children }) => {
  const embedded = useContext(EmbeddedToolContext);
  const Tag = embedded ? 'h2' : 'h1';
  return <Tag className={className}>{children}</Tag>;
};

export default ToolTitle;

/** Wraps a calculator rendered inside a page that has its own <h1>. */
export const EmbeddedTool: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <EmbeddedToolContext.Provider value={true}>{children}</EmbeddedToolContext.Provider>
);
