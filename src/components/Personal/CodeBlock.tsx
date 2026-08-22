import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'tsx' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between rounded-t-2xl px-4 py-3"
        style={{
          background: 'var(--text-color)',
          color: 'var(--surface-color)',
        }}
      >
        <span className="text-xs font-mono uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition-colors hover:opacity-80"
          style={{
            background: 'var(--primary-color)',
            color: '#ffffff',
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre
        className="overflow-x-auto rounded-b-2xl border border-t-0 p-5"
        style={{
          background: 'var(--surface-soft)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-color)',
        }}
      >
        <code
          className="text-sm leading-6"
          style={{ color: 'var(--text-color)' }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
