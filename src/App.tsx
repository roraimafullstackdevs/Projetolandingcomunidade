import { ResponsiveWrapper } from './components/ResponsiveWrapper';
import Desktop1280Px from './imports/Desktop1280Px';
import LargeDesktop1920Px from './imports/LargeDesktop1920Px';
import MobileSmall from './components/MobileSmall';
import MobileLarge from './components/MobileLarge';
// import { BreakpointIndicator } from './components/BreakpointIndicator';

/**
 * RR Fullstack Devs - Responsive Landing Page
 * 
 * RESPONSIVE STRATEGY:
 * ===================
 * This implementation uses a mobile-first, progressively enhanced approach:
 * 
 * 1. Mobile Small (< 480px): MobileSmall - Optimized for small phones
 * 2. Mobile Large (480px - 767px): MobileLarge - Optimized for larger phones
 * 3. Tablet (768px - 1023px): Desktop1280Px scaled appropriately  
 * 4. Desktop (1024px - 1919px): Desktop1280Px at native resolution
 * 5. Large Desktop (≥ 1920px): LargeDesktop1920Px at native resolution
 * 
 * BREAKPOINT DETAILS:
 * ==================
 * 
 * Mobile Small (< 480px) ✅
 *   - Component: MobileSmall
 *   - Status: ✅ Fully implemented
 * 
 * Mobile Large (480px - 767px) ✅
 *   - Component: MobileLarge
 *   - Status: ✅ Fully implemented
 * 
 * Tablet (768px - 1023px)
 *   - Figma: node-id=321-11464
 *   - Current: Using Desktop1280Px scaled
 *   - Status: ⏳ Dedicated design pending
 * 
 * Desktop (1024px - 1919px) ✅
 *   - Figma: node-id=321-12190
 *   - Component: Desktop1280Px
 *   - Status: ✅ Fully implemented
 * 
 * Large Desktop (≥ 1920px) ✅
 *   - Figma: node-id=321-12916
 *   - Component: LargeDesktop1920Px
 *   - Status: ✅ Fully implemented
 */

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* 
        LARGE DESKTOP (≥ 1920px)
        Native 1920px design, centered on screen
      */}
      <div className="hidden 2xl:block">
        <ResponsiveWrapper breakpoint="large-desktop">
          <LargeDesktop1920Px />
        </ResponsiveWrapper>
      </div>

      {/* 
        DESKTOP (1024px - 1919px)
        Native 1280px design at full width
      */}
      <div className="hidden lg:block 2xl:hidden">
        <ResponsiveWrapper breakpoint="desktop">
          <Desktop1280Px />
        </ResponsiveWrapper>
      </div>

      {/* 
        TABLET (768px - 1023px)
        Desktop1280Px with horizontal scroll if needed
        TODO: Replace with dedicated Tablet768Px when imported
      */}
      <div className="hidden md:block lg:hidden">
        <ResponsiveWrapper breakpoint="tablet">
          <Desktop1280Px />
        </ResponsiveWrapper>
      </div>

      {/* 
        MOBILE LARGE (480px - 767px)
        Dedicated mobile design for larger phones
      */}
      <div className="hidden sm:block md:hidden">
        <ResponsiveWrapper breakpoint="mobile-large">
          <MobileLarge />
        </ResponsiveWrapper>
      </div>

      {/* 
        MOBILE SMALL (< 480px)
        Dedicated mobile design for small phones
      */}
      <div className="block sm:hidden">
        <ResponsiveWrapper breakpoint="mobile-small">
          <MobileSmall />
        </ResponsiveWrapper>
      </div>

      {/* 
        DEVELOPMENT TOOL: Breakpoint Indicator
        Uncomment to visualize active breakpoint during development
      */}
      {/* <BreakpointIndicator /> */}
    </div>
  );
}