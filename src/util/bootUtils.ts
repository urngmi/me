// Utility functions for managing the boot screen state

export const resetFirstVisit = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('winXP_hasVisited');
    console.log('First visit status reset. Refresh the page to see the boot screen again.');
  }
};

export const hasVisitedBefore = () => {
  if (typeof window === 'undefined') return true; // Assume visited on server-side
  return localStorage.getItem('winXP_hasVisited') === 'true';
};

export const setVisited = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('winXP_hasVisited', 'true');
  }
};

// Add to window object for easy console access in development
if (typeof window !== 'undefined') {
  (window as any).resetWinXPBoot = resetFirstVisit;
}
