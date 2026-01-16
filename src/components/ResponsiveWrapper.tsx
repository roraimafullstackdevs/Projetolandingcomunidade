import { ReactNode } from 'react';

interface ResponsiveWrapperProps {
  children: ReactNode;
  breakpoint: 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
}

/**
 * Responsive Wrapper Component
 * 
 * Provides optimal viewing experience across all device sizes:
 * 
 * MOBILE (< 768px):
 * - Enables horizontal scroll with minimum width
 * - Smooth touch scrolling for better UX
 * - Maintains design integrity with 375px minimum
 * 
 * TABLET (768px - 1023px):
 * - Allows horizontal scroll if content exceeds viewport
 * - 768px minimum width ensures readability
 * 
 * DESKTOP (1024px - 1919px):
 * - Full width, no restrictions
 * - Native resolution rendering
 * 
 * LARGE DESKTOP (≥ 1920px):
 * - Centered layout
 * - Optimal viewing experience
 */
export function ResponsiveWrapper({ children, breakpoint }: ResponsiveWrapperProps) {
  // Mobile: Enable smooth horizontal scroll
  if (breakpoint === 'mobile') {
    return (
      <div className="w-full overflow-x-auto overflow-y-visible smooth-scroll">
        <div className="min-w-[375px] w-max">
          {children}
        </div>
      </div>
    );
  }

  // Tablet: Allow horizontal scroll if needed
  if (breakpoint === 'tablet') {
    return (
      <div className="w-full overflow-x-auto overflow-y-visible smooth-scroll">
        <div className="min-w-[768px] w-max">
          {children}
        </div>
      </div>
    );
  }

  // Desktop: Full width, no constraints
  if (breakpoint === 'desktop') {
    return (
      <div className="w-full">
        {children}
      </div>
    );
  }

  // Large Desktop: Centered with full width
  if (breakpoint === 'large-desktop') {
    return (
      <div className="w-full flex justify-center bg-black">
        <div className="w-full">
          {children}
        </div>
      </div>
    );
  }

  // Fallback
  return <>{children}</>;
}
