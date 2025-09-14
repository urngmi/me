# Windows XP Boot Screen Feature

## Overview
The Windows XP boot screen feature provides an authentic first-time visitor experience that mimics the classic Windows XP boot sequence.

## How it Works
- **First Visit Detection**: Uses localStorage to track if a user has visited before
- **Automatic Display**: Shows on first visit only
- **Skip Options**: Users can click anywhere or press any key to skip
- **Authentic Feel**: Includes loading text and classic Windows XP styling

## Files Created/Modified

### New Components
- `components/BootScreen/BootScreen.tsx` - Main boot screen component
- `components/BootScreen/BootScreen.module.css` - Styling for boot screen
- `components/BootScreen/index.ts` - Component export

### Utilities
- `src/util/bootUtils.ts` - Helper functions for managing boot state

### Modified Files
- `src/pages/index.tsx` - Integrated boot screen logic
- `public/winXP_boot.gif` - The Windows XP boot animation

## Features

### 1. First-Time Visit Detection
```typescript
// Check if user has visited before
if (!hasVisitedBefore()) {
  setShowBootScreen(true);
  setVisited();
}
```

### 2. Skip Functionality
- Click anywhere on the screen
- Press any key
- Automatic timeout after 4 seconds

### 3. Developer Tools
Access the browser console and type:
```javascript
// Reset first visit status for testing
resetWinXPBoot();
// Then refresh the page to see boot screen again
```

## Customization

### Boot Duration
Modify the timeout in `BootScreen.tsx`:
```typescript
const bootTimer = setTimeout(() => {
  // ... boot completion logic
}, 4000); // Change this value (in milliseconds)
```

### Loading Text
Update the loading message in `BootScreen.tsx`:
```typescript
<div className={styles.loadingText}>
  Your custom loading message...
</div>
```

### Skip Hint
Modify the skip instruction text:
```typescript
<div className={styles.skipHint}>
  Your custom skip instruction...
</div>
```

## Browser Compatibility
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile responsive
- ✅ Keyboard accessible
- ✅ localStorage supported browsers

## Performance Considerations
- Boot screen only loads on first visit
- GIF is optimized for web delivery
- No performance impact on return visits
- Minimal JavaScript overhead

## Testing
1. Open browser in incognito/private mode
2. Visit the site to see boot screen
3. Use `resetWinXPBoot()` in console for repeated testing
4. Test skip functionality with clicks and keyboard
