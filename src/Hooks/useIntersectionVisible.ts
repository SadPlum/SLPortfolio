import { useEffect } from "react";



// If element (reference) is visible, change state to true

const useIntersectionVisible = (
  reference: React.RefObject<HTMLElement>,
  changeState: (arg: boolean) => void,
  options?: {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
  }
) => {
  const observerCallback = (entries: any) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      changeState(true);
    }
  };
  useEffect(() => {
    let observer = new IntersectionObserver(observerCallback, options);
    let watched: any = reference.current;
    if (reference) observer.observe(watched);
    return () => {
      if (reference) observer.unobserve(watched);
    };
  }, [reference]);
};

export default useIntersectionVisible;
