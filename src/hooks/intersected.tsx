import React from 'react';

interface Props {
  threshold?: number;
  ref?: React.MutableRefObject<HTMLDivElement>;
  rootMargin?: string;
}

export const useIntersected = ({ threshold = 0.5, ref, rootMargin = '0px' }: Props) => {
  const [isIntersected, setIsIntersected] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(entry.isIntersecting);
        }
      },
      {
        threshold,
        root: null,
        rootMargin,
      },
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin, threshold]);

  return [isIntersected];
};
