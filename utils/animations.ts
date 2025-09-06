// Animation utilities for Framer Motion
import { Variants } from 'framer-motion';

// Page entrance animations
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Staggered container animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

// Component entrance animations
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Card hover animations
export const cardHoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Advanced drag animations (replacing react-beautiful-dnd)
export const dragVariants: Variants = {
  drag: {
    scale: 1.1,
    rotate: 5,
    zIndex: 1000,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

// Drop zone animations
export const dropZoneVariants: Variants = {
  initial: { scale: 1, opacity: 0.8 },
  dragOver: {
    scale: 1.02,
    opacity: 1,
    backgroundColor: "rgba(6, 182, 212, 0.1)",
    borderColor: "#06b6d4",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  }
};

// Button press animations
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

// Toast notification animations
export const toastVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Modal animations
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Loading spinner
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear"
    }
  }
};

// Pulse animation for highlights
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Slide in from directions
export const slideInVariants = {
  left: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  },
  right: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  },
  top: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  },
  bottom: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }
};

// Advanced spring presets
export const springPresets = {
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 400, damping: 30 },
  slow: { type: "spring", stiffness: 200, damping: 50 }
};

// Gesture animations for mobile
export const gestureVariants: Variants = {
  swipeLeft: { x: -100, opacity: 0 },
  swipeRight: { x: 100, opacity: 0 },
  pinch: { scale: 0.8 },
  expand: { scale: 1.2 }
};