import { useState } from 'react';
import { Code } from 'lucide-react';
import CodeBlock from '@/components/Personal/CodeBlock';

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div
      className="overflow-hidden rounded-2xl border shadow-sm"
      style={{
        background: 'var(--surface-soft)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-3"
        style={{
          background: 'var(--surface-color)',
          borderColor: 'var(--border-color)',
        }}
      >
        <span className="text-sm font-semibold">Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-bold transition-colors hover:bg-(--surface-strong)"
          style={{
            background: 'var(--surface-soft)',
            color: 'var(--text-color)',
          }}
        >
          <Code size={14} />
          {isCodeVisible ? 'Hide Code' : 'View Code'}
        </button>
      </div>

      <div className="py-20 px-4 flex items-center justify-center">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-gray-200">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
