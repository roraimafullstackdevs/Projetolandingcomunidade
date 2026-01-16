import { useEffect, useState } from 'react';

/**
 * Responsive Breakpoint Indicator
 * 
 * Development tool that displays:
 * - Current viewport width
 * - Active breakpoint
 * - Implementation status
 * - Scroll availability
 * 
 * Usage: Uncomment in App.tsx during development
 */
export function BreakpointIndicator() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine active breakpoint
  let breakpoint = 'Desktop';
  let status = '✅';
  let nodeId = '321-12190';
  let scrollEnabled = false;

  if (width >= 1920) {
    breakpoint = 'Large Desktop';
    status = '✅';
    nodeId = '321-12916';
    scrollEnabled = false;
  } else if (width >= 1024) {
    breakpoint = 'Desktop';
    status = '✅';
    nodeId = '321-12190';
    scrollEnabled = false;
  } else if (width >= 768) {
    breakpoint = 'Tablet';
    status = '⏳';
    nodeId = '321-11464';
    scrollEnabled = true;
  } else if (width >= 480) {
    breakpoint = 'Mobile Large';
    status = '⏳';
    nodeId = '369-11452';
    scrollEnabled = true;
  } else {
    breakpoint = 'Mobile Small';
    status = '⏳';
    nodeId = '388-11473';
    scrollEnabled = true;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-black/95 backdrop-blur-md border border-[#006FEE]/30 rounded-lg p-4 text-white font-mono text-xs shadow-xl">
      {/* Header */}
      <div className="font-bold mb-3 text-[#006FEE] flex items-center gap-2">
        <span className="text-base">{status}</span>
        <span>Breakpoint Status</span>
      </div>

      {/* Current Breakpoint Info */}
      <div className="space-y-2 mb-3 pb-3 border-b border-white/10">
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Viewport:</span>
          <span className="font-semibold text-white">{width}px</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Breakpoint:</span>
          <span className="font-semibold text-white">{breakpoint}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Node ID:</span>
          <span className="font-semibold text-[#006FEE]">{nodeId}</span>
        </div>
        {scrollEnabled && (
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">Scroll:</span>
            <span className="font-semibold text-yellow-400">Horizontal Enabled</span>
          </div>
        )}
      </div>

      {/* All Breakpoints */}
      <div className="space-y-1.5 text-[10px]">
        <div className={`flex items-start gap-2 ${width < 480 ? 'text-white font-semibold' : 'text-gray-500'}`}>
          <span className="text-yellow-400">⏳</span>
          <div className="flex-1">
            <div>Mobile Small (&lt; 480px)</div>
            <div className="text-[9px] text-gray-600">Fallback: Desktop w/ scroll</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 ${width >= 480 && width < 768 ? 'text-white font-semibold' : 'text-gray-500'}`}>
          <span className="text-yellow-400">⏳</span>
          <div className="flex-1">
            <div>Mobile Large (480px - 767px)</div>
            <div className="text-[9px] text-gray-600">Fallback: Desktop w/ scroll</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 ${width >= 768 && width < 1024 ? 'text-white font-semibold' : 'text-gray-500'}`}>
          <span className="text-yellow-400">⏳</span>
          <div className="flex-1">
            <div>Tablet (768px - 1023px)</div>
            <div className="text-[9px] text-gray-600">Fallback: Desktop w/ scroll</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 ${width >= 1024 && width < 1920 ? 'text-white font-semibold' : 'text-gray-500'}`}>
          <span className="text-green-400">✅</span>
          <div className="flex-1">
            <div>Desktop (1024px - 1919px)</div>
            <div className="text-[9px] text-gray-600">Native: Desktop1280Px</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 ${width >= 1920 ? 'text-white font-semibold' : 'text-gray-500'}`}>
          <span className="text-green-400">✅</span>
          <div className="flex-1">
            <div>Large Desktop (≥ 1920px)</div>
            <div className="text-[9px] text-gray-600">Native: LargeDesktop1920Px</div>
          </div>
        </div>
      </div>

      {/* Implementation Status */}
      <div className="mt-3 pt-3 border-t border-white/10 text-[10px] space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-400">Implemented:</span>
          <span className="text-green-400 font-semibold">2/5 (40%)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Pending:</span>
          <span className="text-yellow-400 font-semibold">3/5 (60%)</span>
        </div>
      </div>

      {/* Resize Tip */}
      <div className="mt-3 pt-3 border-t border-white/10 text-[9px] text-gray-500 italic">
        Resize window to test breakpoints
      </div>
    </div>
  );
}
