import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lightweight scroll-linked parallax.
 * Observes elements with [data-parallax-y] or [data-parallax-left]/[data-parallax-right]
 * and applies transforms based on scroll position.
 */
export function useParallax() {
  const ticking = useRef(false);
  const { pathname } = useLocation();

  const updateParallax = useCallback(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const yElements = document.querySelectorAll<HTMLElement>("[data-parallax-y]");
    yElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const speed = parseFloat(el.dataset.parallaxY || "0.15");
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });

    ticking.current = false;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Observe slide-in elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll("[data-parallax-left], [data-parallax-right]").forEach((el) => {
      observer.observe(el);
    });

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname, updateParallax]);
}
