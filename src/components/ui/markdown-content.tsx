import { cn } from "@/lib/utils";
import { marked } from "marked";
import type * as React from "react";
import { memo, useDeferredValue, useMemo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "./button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const DEFAULT_PRE_BLOCK_CLASS =
  "overflow-x-auto w-fit rounded-xl bg-zinc-950 text-zinc-50 dark:bg-zinc-900 border border-border p-4";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language: string;
  shouldBeWhiteThemed?: boolean;
}

const CodeBlock = ({
  children,
  language,
  className,
  shouldBeWhiteThemed,
  ...props
}: CodeBlockProps) => {
  const codeText = String(children);

  const isComplete = codeText.trim().endsWith("\n") || codeText.length > 0;

  const renderCode = () => {
    if (isComplete) {
      try {
        return (
          <SyntaxHighlighter
            language={language}
            style={shouldBeWhiteThemed ? oneLight : vscDarkPlus}
            customStyle={{ marginTop: 0, paddingTop: 0 }}
            {...props}>
            {codeText}
          </SyntaxHighlighter>
        );
      } catch (error) {
        console.error("Error rendering syntax highlighter:", error);
        // Fallback to plain code block
        return (
          <pre {...props} className={cn(DEFAULT_PRE_BLOCK_CLASS, className, "!mt-0")}>
            <code className="whitespace-pre-wrap">{codeText}</code>
          </pre>
        );
      }
    } else {
      // Incomplete code, render as plain text
      return (
        <pre {...props} className={cn(DEFAULT_PRE_BLOCK_CLASS, className, "!mt-0")}>
          <code className="whitespace-pre-wrap">{codeText}</code>
        </pre>
      );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-md border">
      <div
        className={cn("flex items-center justify-between bg-[#1e1e1e] px-2 text-sm text-white", {
          "bg-[#1e1e1e]": !shouldBeWhiteThemed,
          "bg-[#fafafa] text-black": shouldBeWhiteThemed,
        })}>
        <div className="font-mono">{language}</div>
        <Button
          variant="outline"
          className={cn({
            "bg-[#1e1e1e]": !shouldBeWhiteThemed,
            "!border-0 bg-[#fafafa] text-black": shouldBeWhiteThemed,
          })}
          size="icon"
          onClick={async () => {
            // TODO: make anim instead
            try {
              await navigator.clipboard.writeText(codeText);
              toast.success("Copied", { position: "top-center" });
            } catch (e) {
              console.error(e);
              toast.error("Couldn't copy", { position: "top-center" });
            }
          }}>
          <Copy />
        </Button>
      </div>

      {/* Code Content */}
      {renderCode()}
    </div>
  );
};

CodeBlock.displayName = "CodeBlock";

const components: Partial<Components> = {
  h1: ({ children, ...props }) => (
    <h1 className="mt-2 scroll-m-20 text-4xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
      {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-4 scroll-m-20 text-lg font-semibold tracking-tight" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="mt-4 scroll-m-20 text-lg font-semibold tracking-tight" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="mt-4 scroll-m-20 text-base font-semibold tracking-tight" {...props}>
      {children}
    </h6>
  ),
  p: ({ children, ...props }) => (
    <p className="leading-6 [&:not(:first-child)]:mt-4" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <span className="font-semibold" {...props}>
      {children}
    </span>
  ),
  a: ({ children, ...props }) => (
    <a
      className="font-medium underline underline-offset-4"
      target="_blank"
      rel="noreferrer"
      {...props}>
      {children}
    </a>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 ml-6 list-decimal" {...props}>
      {children}
    </ol>
  ),
  ul: ({ children, ...props }) => (
    <ul className="my-4 ml-6 list-disc" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li className="mt-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="mt-4 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="relative w-full overflow-hidden border-none text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  tr: ({ children, ...props }) => (
    <tr className="last:border-b-none m-0 border-b" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}>
      {children}
    </td>
  ),
  img: ({ alt, ...props }) => <img className="rounded-md" alt={alt} {...props} />,

  pre: ({ children }) => <>{children}</>,
};

const darkComponents: Partial<Components> = {
  ...components,
  code: ({ children, className = "", node, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      return (
        <CodeBlock language={match[1]} className={className} shouldBeWhiteThemed={false} {...props}>
          {children}
        </CodeBlock>
      );
    }
    return (
      <code
        className={cn("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
        {...props}>
        {children}
      </code>
    );
  },
};

const whiteComponents: Partial<Components> = {
  ...components,
  code: ({ children, className = "", node, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    if (match) {
      return (
        <CodeBlock language={match[1]} className={className} shouldBeWhiteThemed={true} {...props}>
          {children}
        </CodeBlock>
      );
    }
    return (
      <code
        className={cn("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
        {...props}>
        {children}
      </code>
    );
  },
};

function parseMarkdownIntoBlocks(markdown: string): string[] {
  if (!markdown) return [];
  const tokens = marked.lexer(markdown);
  return tokens.map((token) => token.raw);
}

interface MarkdownBlockProps {
  content: string;
  className?: string;
  user?: boolean;
}

const MemoizedMarkdownBlock = memo(
  ({ content, className, user }: MarkdownBlockProps) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={user ? whiteComponents : darkComponents}
        className={className}>
        {content}
      </ReactMarkdown>
    );
  },
  (prevProps, nextProps) => prevProps.content === nextProps.content
);

MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock";

interface MarkdownContentProps {
  content: string;
  id: string;
  className?: string;
  user?: boolean;
}

export const MarkdownContent = memo(({ content, id, className, user }: MarkdownContentProps) => {
  const deferredContent = useDeferredValue(content);
  const blocks = useMemo(() => parseMarkdownIntoBlocks(deferredContent), [deferredContent]);

  return blocks.map((block, index) => (
    <MemoizedMarkdownBlock
      content={block}
      className={className}
      key={`${id}-block_${index}`} // biome-ignore lint/suspicious/noArrayIndexKey
      user={user}
    />
  ));
});

MarkdownContent.displayName = "MarkdownContent";
