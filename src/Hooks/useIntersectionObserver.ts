import { useEffect } from "react";

const useIntersectionObserver = (
  refference: React.RefObject<HTMLElement>,
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
    let watched: any = refference.current;
    if (refference) observer.observe(watched);
    return () => {
      if (refference) observer.unobserve(watched);
    };
  }, [refference]);
};
export default useIntersectionObserver;
