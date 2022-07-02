import { useEffect, useState } from "react";

const useIntersectionVisible = (
  reference: React.RefObject<HTMLElement>,
  className: string,
  options?: {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
  }
) => {
  // const watched: any = reference.current;
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: any) => {
      const entry = entries[0];
      if (entry.isIntersecting && !flipped) {
        reference.current?.classList.add(className);
        setTimeout(() => reference.current?.classList.remove(className), 500);
        setFlipped(true);
      }
    };

    let observer = new IntersectionObserver(observerCallback, options);
    const watched: any = reference.current;
    if (reference) observer.observe(watched);
    return () => {
      if (reference) observer.unobserve(watched);
    };
  }, [reference, className, options, flipped]);
};

export default useIntersectionVisible;
