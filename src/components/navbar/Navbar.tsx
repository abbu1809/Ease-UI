// Navbar.tsx
import { Slot } from '@radix-ui/react-slot';
import React, { forwardRef, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/libs/utils';
import { entranceAnimations } from '@/libs/animations/entranceAnimation';
import { hoverAnimations } from '@/libs/animations/hoverAnimation';
import gsap from 'gsap';
import { Button } from '../Button';

const navbarVariants = cva(
  `w-full flex items-center justify-between px-6 py-4 rounded-2xl border transition-all`,
  {
    variants: {
      variant: {
        dark: 'bg-[#262622] text-white border-[#514b45]',
        light:
          'bg-[var(--surface-color)] text-[var(--text-color)] border-[var(--border-color)]',
        primary: 'bg-[var(--primary-color)] text-white border-transparent',
        glass:
          'backdrop-blur-md bg-[var(--surface-color)]/70 text-[var(--text-color)] border-[var(--border-color)]',
      },
      size: {
        default: 'h-16',
        sm: 'h-12',
        lg: 'h-20',
        xl: 'h-24',
      },
    },
    defaultVariants: {
      variant: 'light',
      size: 'default',
    },
  }
);

interface NavbarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = 'fadeIn',
      hoverAnimation = 'none',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'nav';
    const navbarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!navbarRef.current || animation === 'none') return;
      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    const handleMouseEnter = () => {
      hoverAnimations[hoverAnimation]?.(navbarRef.current!);
    };

    const handleMouseLeave = () => {
      gsap.to(navbarRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.1,
      });
    };

    return (
      <Comp
        ref={(node) => {
          navbarRef.current = node as HTMLElement;
          if (typeof ref === 'function') ref(node as HTMLElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn(navbarVariants({ variant, size }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <h1>Logo</h1>
        <div className="flex gap-5">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Customer</a>
        </div>
        <div>
          <Button hoverAnimation="none">Profile</Button>
        </div>
      </Comp>
    );
  }
);

Navbar.displayName = 'Navbar';

export { Navbar, navbarVariants };
