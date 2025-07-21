import { useInView } from "react-intersection-observer";

const AnimateElement = ({
  children,
  animationClass,
  propThreshold = 0.6,
  propDelay = 0,
  propRootMargin = "0px",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when element enters view
    rootMargin: propRootMargin, // Margin around the root element
    threshold: propThreshold, // Percentage of element visible to trigger
    delay: propDelay, // Delay before the animation starts
  });

  return (
    <div ref={ref} className={inView ? animationClass : "opacityZero"}>
      {children}
    </div>
  );
};

export default AnimateElement;
