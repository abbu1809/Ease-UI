import React from 'react';
import { cn } from '@/libs/utils';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  side?: 'top' | 'bottom';
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, className, side = 'top', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('group relative inline-flex', className)}
      {...props}
    >
      {children}
      <span
        className={cn(
          'pointer-events-none absolute left-1/2 z-10 w-max -translate-x-1/2 rounded-md bg-slate-900 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100',
          side === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
        )}
      >
        {content}
      </span>
    </div>
  )
);

Tooltip.displayName = 'Tooltip';
export { Tooltip };
