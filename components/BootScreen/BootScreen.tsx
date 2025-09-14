import React, { useEffect, useState } from 'react';
import styles from './BootScreen.module.css';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onBootComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Prevent scrolling during boot
    document.body.style.overflow = 'hidden';
    
    // Show loading text after a brief delay
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 1500);
    
    // Set a timer for the boot sequence (adjust timing as needed)
    const bootTimer = setTimeout(() => {
      setFadeOut(true);
      // Small delay before calling onBootComplete to allow fade out animation
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto'; // Restore scrolling
        onBootComplete();
      }, 500);
    }, 4000); // 4 seconds boot time

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(loadingTimer);
      document.body.style.overflow = 'auto'; // Ensure scrolling is restored
    };
  }, [onBootComplete]);

  // Optional: Allow users to click/press key to skip boot screen
  useEffect(() => {
    let hasSkipped = false;
    
    const handleSkip = (e: KeyboardEvent | MouseEvent) => {
      if (hasSkipped) return; // Prevent multiple triggers
      
      if (e.type === 'keydown' || e.type === 'click') {
        hasSkipped = true;
        setFadeOut(true);
        setTimeout(() => {
          if (isVisible) { // Only proceed if component is still visible
            setIsVisible(false);
            document.body.style.overflow = 'auto';
            onBootComplete();
          }
        }, 300);
      }
    };

    if (isVisible && !fadeOut) {
      window.addEventListener('keydown', handleSkip);
      window.addEventListener('click', handleSkip);
    }

    return () => {
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
    };
  }, [onBootComplete, isVisible, fadeOut]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.bootScreen} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.bootContent}>
        <img 
          src="/winXP_boot.gif" 
          alt="Windows XP Boot Screen" 
          className={styles.bootGif}
        />
        {showLoading && (
          <div className={styles.loadingText}>
            Loading Omkar's Portfolio...
          </div>
        )}
        <div className={styles.skipHint}>
          Click anywhere or press any key to continue...
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
