// MarkdownContent.tsx
import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

function CopyIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CodeBlock({ inline, className, children }: any) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1] || "";

  const code = typeof children === "string" ? children : String(children).trim();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  if (inline) {
    return (
      <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm text-foreground/80">
        {children}
      </code>
    );
  }

  return (
    <div className="group relative my-4 overflow-hidden rounded-md bg-[#2e3440]">
      <div className="flex items-center justify-between bg-[#2e3440] px-4 py-2 font-mono text-xs text-gray-300">
        <span>{language || "text"}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-300 opacity-0 transition group-hover:opacity-100 hover:text-white">
          <CopyIcon />
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: "0.875rem",
          padding: "1rem",
          margin: 0,
        }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export const MarkdownContent = memo(function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-pre:p-0 max-w-none text-base leading-relaxed">
      <ReactMarkdown
        components={{
          code: CodeBlock,
          pre: ({ children }) => <>{children}</>,
          a: ({ href, children }) => (
            <a
              href={href || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              {children}
            </a>
          ),
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
});
