import { useEffect, useRef } from 'react';

const useMobileHeightFix = (attribute: 'height' | 'minHeight'): React.RefObject<HTMLDivElement> => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const deviceWidth = window.matchMedia('(max-width: 1024px)');

      if (deviceWidth.matches) {
        containerRef.current.style[attribute] = `${window.innerHeight}px`;
      }
    }
  }, [attribute]);

  return containerRef;
};

export default useMobileHeightFix;
