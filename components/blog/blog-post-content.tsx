"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

interface BlogPostContentProps {
  content: string
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <article className="prose prose-slate prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 mt-10 text-slate-900">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-5 mt-10 text-slate-900">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-4 mt-8 text-slate-900">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mb-3 mt-6 text-slate-900">
              {children}
            </h4>
          ),
          // Paragraphs
          p: ({ children }) => (
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">{children}</p>
          ),
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-cyan-600 hover:text-cyan-700 underline underline-offset-2 transition-colors font-medium"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          // Lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 text-lg pl-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 text-lg pl-4">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-slate-700 leading-relaxed">{children}</li>
          ),
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-cyan-600 pl-6 py-2 my-6 bg-slate-50 rounded-r">
              <div className="text-slate-700 italic">{children}</div>
            </blockquote>
          ),
          // Code blocks
          code: ({ className, children, ...props }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code
                  className="px-2 py-0.5 bg-slate-100 text-cyan-600 rounded text-sm font-mono border border-slate-200"
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto border border-slate-200">
              {children}
            </pre>
          ),
          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-200">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-50">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-slate-200">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-slate-900 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-slate-700">{children}</td>
          ),
          // Horizontal rule
          hr: () => (
            <hr className="my-8 border-t border-slate-200" />
          ),
          // Images
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ""}
              className="rounded-lg w-full my-8 border border-slate-200"
              loading="lazy"
            />
          ),
          // Strong/Bold
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900">{children}</strong>
          ),
          // Emphasis/Italic
          em: ({ children }) => (
            <em className="italic text-slate-700">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
