export default {
  'code[class*="language-"]': {
    background: "#19161f", // Updated background color
    color: "#ffffff", // Keep white for contrast
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: "1em",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    background: "#19161f", // Updated background color
    color: "#ffffff", // Keep white for contrast
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: "1em",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    borderRadius: "0.5em",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  'code[class*="language-"] *::-moz-selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  'pre[class*="language-"] *::-moz-selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  'code[class*="language-"]::selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  'code[class*="language-"] *::selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  'pre[class*="language-"] *::selection': {
    background: "rgba(235, 100, 185, 0.15)",
    color: "inherit",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.2em 0.3em",
    borderRadius: "0.5rem",
    whiteSpace: "normal",
  },
  // Token styles - consider adjusting colors for better contrast on dark background
  comment: {
    color: "#725d7a", // Slightly lighter for better contrast
  },
  prolog: {
    color: "#a8a2b1",
  },
  cdata: {
    color: "#a8a2b1",
  },
  doctype: {
    color: "#b381c5",
  },
  punctuation: {
    color: "#d2c7e1",
  },
  builtin: {
    color: "#ffe261",
  },
  constant: {
    color: "#ce92ca",
  },
  boolean: {
    color: "#e5a3e1",
  },
  number: {
    color: "#b381c5",
  },
  important: {
    color: "#f888b5",
  },
  atrule: {
    color: "#f888b5",
  },
  property: {
    color: "#f888b5",
  },
  keyword: {
    color: "#f888b5",
  },
  doctype: {
    color: "#74dfc4",
  },
  tag: {
    color: "#74dfc4",
  },
  className: {
    color: "#9dd5f8",
  },
  attrName: {
    color: "#eb64b9",
  },
  symbol: {
    color: "#74dfc4",
  },
  attrValue: {
    color: "#b4dce7",
  },
  string: {
    color: "#96d0bb",
  },
  char: {
    color: "#b4dce7",
  },
  variable: {
    color: "#ffffff",
  },
  url: {
    color: "#ffffff",
  },
  regex: {
    color: "#b4dce7",
  },
  function: {
    color: "#b6a0e8",
  },
  operator: {
    color: "#cfc4de",
  },
  namespace: {
    color: "#9dd5f8",
  },
  // Additional styles can be adjusted similarly
};
