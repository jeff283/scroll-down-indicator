import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react/dist/esm/icons/chevron-down";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";

const ScrollDownIndicator = ({ showOnlyOnce = true }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolledPastBreakpoint, setHasScrolledPastBreakpoint] =
    useState(false);

  const SCROLLBREAK = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= SCROLLBREAK) {
        setIsVisible(false);
        if (showOnlyOnce) {
          setHasScrolledPastBreakpoint(true);
          window.removeEventListener("scroll", handleScroll);
        }
      } else if (!showOnlyOnce) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnlyOnce]);

  if (showOnlyOnce && hasScrolledPastBreakpoint) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 bottom-4 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex flex-col items-center justify-center w-10 h-20 gap-2 py-2 border border-white rounded-3xl bg-black/50">
            <div className="absolute top-2">
              <GoDotFill className="text-white/60 size-6" />
            </div>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-10, 10, -10], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-2"
            >
              <ChevronDown className="text-white size-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDownIndicator;
