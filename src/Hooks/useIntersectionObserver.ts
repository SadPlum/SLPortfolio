import { useEffect } from "react";

const useIntersectionObserver = (
  reference: React.RefObject<HTMLElement>,
  changeTab: (title: string) => void,
  title: string,
  options?: {
    root?: HTMLElement;
    rootMargin?: string;
    threshold?: number;
  }
) => {
  const observerCallback = (entries: any) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.3) {
        changeTab(title);
      }
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
export default useIntersectionObserver;
