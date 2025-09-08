# 🎯 PERSONALIZATION GUIDE - WHERE TO ADD YOUR DATA

This guide shows you exactly where to add your personal information to make this Windows XP portfolio website your own.

## 📧 CONTACT & SOCIAL MEDIA

### 1. GitHub Profile Links
**Files to update:**
- `src/programs/Welcome.tsx` (lines ~106-112)
- `components/StartMenu/StartMenu.tsx` (lines ~38-41)

Replace `[YOUR_GITHUB_USERNAME]` with your actual GitHub username.

### 2. LinkedIn Profile Links  
**Files to update:**
- `src/programs/Welcome.tsx` (lines ~119-125)
- `components/StartMenu/StartMenu.tsx` (lines ~49-54)

Replace `[YOUR_LINKEDIN_USERNAME]` with your actual LinkedIn username/profile ID.

### 3. Email Configuration
**File:** `src/programs/Outlook.tsx`
- Lines ~26-28 and ~43: Replace `[YOUR_DOMAIN.COM]` with your actual domain
- Line ~193: Replace `[YOUR NAME] ([YOUR EMAIL])` with your actual name and email
- Set up environment variables in `.env.local`:
  ```
  NEXT_PUBLIC_MAILGUN_API=your_mailgun_api_key
  NEXT_PUBLIC_ADMIN_EMAIL=your_email@your_domain.com
  ```

## 👤 PERSONAL INFORMATION

### 4. About Me Section
**File:** `src/programs/Welcome.tsx` (lines ~25-32)

Update these constants with your personal information:
- `INTRO` - Your name, title, location, and passions
- `WHYSITE` - Why you created this website  
- `INTERESTS` - Your hobbies and interests
- `INTERESTS2` - Additional experiences
- `INTERESTS3` - Main passion/hobby

### 5. Welcome Header
**File:** `src/programs/Welcome.tsx` (line ~90)
Replace `[YOUR NAME]` with your actual name.

### 6. Resume File
**Location:** Place your resume file as `Resume.pdf` in the `public/` folder.
The website will automatically link to it.

## 🚀 PROJECTS SECTION

### 7. Project Repository Links
**File:** `src/appData/index.tsx`

Update all GitHub project URLs (search for `[YOUR_GITHUB_USERNAME]`):
- Line ~262: Portfolio repository URL
- Lines ~307, ~329, ~343, ~390, ~411, ~443, ~459: Individual project URLs

### 8. Project Details
**File:** `src/appData/index.tsx`

Update project information in the `WORKCONTENT` array:
- Project names and descriptions
- Technology stacks used
- Project images (replace images in `assets/work/` folders)
- Demo links and descriptions

## 🖼️ MEDIA FILES TO REPLACE

### 9. Profile Pictures
**Location:** `assets/` folder
Replace these files with your own photos:
- `userprofile.jpg` - Main profile picture
- `userprofile2.jpg` - Secondary profile picture  
- `ebc1.webp` and `ebc2.webp` - Personal/travel photos

### 10. Project Images
**Location:** `assets/work/` folders
Replace project screenshots and images with your own project visuals.

### 11. Gallery Images
**Location:** `assets/gallery/` folder  
Replace with your own photography/artwork if you have a gallery section.

## 🌐 DEPLOYMENT CONFIGURATION

### 12. Domain Configuration
**Files to update when you have your own domain:**
- `src/programs/Outlook.tsx` - Email domain
- `next.config.js` - Update image remote patterns with your domain
- Any hardcoded domain references

### 13. Environment Variables
**Create:** `.env.local` file in root directory
```
NEXT_PUBLIC_MAILGUN_API=your_mailgun_api_key
NEXT_PUBLIC_ADMIN_EMAIL=your_email@domain.com
```

## 🔍 SEARCH FOR THESE PATTERNS

Use your editor's search function to find:
- `[YOUR_NAME]` - Replace with your name
- `[YOUR_GITHUB_USERNAME]` - Replace with your GitHub username
- `[YOUR_LINKEDIN_USERNAME]` - Replace with your LinkedIn profile ID
- `[YOUR_DOMAIN.COM]` - Replace with your domain
- `TODO:` - All comment markers showing what needs to be updated

## 🎨 OPTIONAL CUSTOMIZATIONS

### 14. Styling & Colors
You can modify the CSS files to change colors, fonts, and layout:
- `src/styles/` - Global styles
- Component-specific `.module.css` files

### 15. Add More Sections
You can add new "programs" or sections by:
- Creating new components in `src/programs/`
- Adding them to the `AppDirectory` in `src/appData/index.tsx`

---

## ✅ QUICK START CHECKLIST

1. ✅ Update personal introduction in `Welcome.tsx`
2. ✅ Replace GitHub and LinkedIn URLs 
3. ✅ Configure email settings in `Outlook.tsx`
4. ✅ Replace profile pictures and project images
5. ✅ Update project information in `appData/index.tsx`
6. ✅ Add your resume as `Resume.pdf` in `public/`
7. ✅ Set up environment variables
8. ✅ Test the contact form and social links
9. ✅ Deploy to your hosting platform

**Happy customizing! 🚀**
