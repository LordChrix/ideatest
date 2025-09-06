import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toastVariants } from '../utils/animations';

interface ToastProps {
  show: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  icon: string;
  onClose: () => void;
}

const AnimatedToast: React.FC<ToastProps> = ({ show, type, title, message, icon, onClose }) => {
  const typeColors = {
    success: 'rgba(34, 197, 94, 0.1)',
    error: 'rgba(239, 68, 68, 0.1)',
    warning: 'rgba(245, 158, 11, 0.1)',
    info: 'rgba(59, 130, 246, 0.1)'
  };

  const borderColors = {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={toastVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-4 right-4 z-50 max-w-sm"
          style={{
            background: `linear-gradient(135deg, ${typeColors[type]}, rgba(255,255,255,0.9))`,
            border: `2px solid ${borderColors[type]}`,
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)'
          }}
          onClick={onClose}
        >
          <motion.div 
            className="p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-3">
              <motion.div
                className="flex-shrink-0 text-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2
                }}
              >
                {icon}
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <motion.h3
                  className="font-semibold text-gray-800 mb-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {title}
                </motion.h3>
                
                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {message}
                </motion.p>
              </div>
              
              <motion.button
                className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>
          </motion.div>
          
          {/* Progress bar */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent to-current"
            style={{ color: borderColors[type] }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedToast;