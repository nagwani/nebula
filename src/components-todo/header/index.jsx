import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import SearchButton from '@/components/search_button';
import { cva } from 'class-variance-authority';

const headerVariants = cva(
  cn(
    'gap-4 px-8 py-3 relative grid w-full justify-center leading-[normal]',
    'border-b border-solid border-gray-200',
    'bg-[var(--color-bg)]',
  ),
  {
    variants: {
      displaySearchForm: {
        false: 'grid-cols-2',
        true: 'grid-cols-2 md:grid-cols-[1fr_auto_1fr]',
      }
    }
  }
)

const Header = ({
  backgroundColor = '#ffffff',
  className,
  logo,
  menu,
  displaySearchForm
}) => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();

    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header
      className={cn(
        headerVariants({ displaySearchForm }),
        className
      )}
      ref={ref}
      style={{
        '--color-bg': backgroundColor,
      }}
    >
      {/* Logo - always first */}
      <div className="my-1 max-h-8 md:my-3 justify-self-start min-w-[100px]">{logo}</div>

      {/* Search and Menu container on mobile, Menu only on desktop */}
      <div className="justify-self-end md:justify-self-center md:content-center md:px-6 md:py-2 w-full min-w-[200px] md:min-w-[300px] flex items-center justify-end md:justify-center gap-2">
        {displaySearchForm && (
          <div className="md:hidden">
            <SearchButton positionTop={height} />
          </div>
        )}
        <div className="md:w-full">{menu}</div>
      </div>

      {/* Search - desktop only (third position) */}
      {displaySearchForm && (
        <div className="hidden md:block content-center min-w-[50px] text-right">
          <SearchButton positionTop={height} />
        </div>
      )}
    </header>
  )
}

export default Header