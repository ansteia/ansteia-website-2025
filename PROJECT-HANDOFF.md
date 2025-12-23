# ANSTEIA Website - Project Handoff Document

**Date:** December 23, 2025
**Client:** Adriana (ANSTEIA - Tech Automation & Creative Services)
**Developer Level:** Beginner - First web app project
**Current Status:** Phase 1 in progress - Hero + Services sections complete

---

## 🎯 PROJECT OVERVIEW

Building a modern, bilingual (EN/ES) website for ANSTEIA, a tech automation and creative services company run by Adriana and Nicole.

**Tagline:** "Thoughtfully automated. Beautifully designed."

**Tech Stack:**
- React 18 + Vite
- Tailwind CSS v3.4.1
- Deployed to: Netlify (when ready)
- Repository: https://github.com/ansteia/ansteia-website-2025

---

## 📂 FILE LOCATIONS

### GitHub Repository (Cloud Backup)
- **URL:** https://github.com/ansteia/ansteia-website-2025
- **Status:** Currently PUBLIC (set to private after initial development)
- **Branch:** main
- **Last Commit:** "Add beautiful Services section and improve Hero layout"

### Local Development
- **Project Location:** `/Users/user/Desktop/ansteia-website-2025/`
- **Dev Server:** Running at `http://localhost:5173/`
- **Git Status:** Clean - all changes committed and pushed

### Brand Assets Folder
- **Location:** `/Users/user/Desktop/ansteia logo - brand colors - website instructions /`
- **Contents:**
  - Brand logos (PNG, 540x540px)
  - Background image (currently 540x540px - NEEDS UPGRADE to 1920x1080)
  - Project brief: `Bash tool output (hl8x4x).txt`
  - Word doc: `ANSTEIA Website Build.docx`

---

## 🎨 BRAND COLORS & ASSETS

### Color Palette (defined in tailwind.config.js)
```
Dusty Rose/Mauve: #C5A5A5
Turquoise/Teal:   #4FA5A5
Slate Gray:       #5B6F7F (primary - logo color)
Sage/Mint:        #B5C5B5
Cream:            #F5F0E8 (background)
Deep Teal:        #3A7B7F
Soft Pink:        #E8C5D5
```

### Current Issue: CUSTOM COLORS DON'T WORK IN TAILWIND
**Problem:** Tailwind v3 doesn't recognize custom color classes like `bg-cream` or `text-slate-gray`
**Current Workaround:** Using inline styles with hex codes
**Example:** `style={{backgroundColor: '#F5F0E8'}}` instead of `className="bg-cream"`

### Brand Assets
- Logo: Gray constellation "A" design (`/public/images/brand/gray logo.png`)
- Hero Background: Iridescent teal/pink flowing abstract (CURRENTLY PIXELATED - needs replacement)

---

## ✅ COMPLETED WORK

### 1. Project Setup ✅
- [x] React + Vite + Tailwind CSS configured
- [x] Git repository initialized and connected to GitHub
- [x] Brand assets organized in `/public/images/brand/`
- [x] Node.js installed via Homebrew
- [x] Development server working

### 2. Components Built ✅

#### Navigation.jsx
- Fixed top navigation bar with cream background
- Logo enlarged to 3x size (h-32)
- Navigation links: Services, About, Contact, Members
- Language toggle (EN/ES) - functional
- Colors applied via inline styles (not Tailwind classes)
- Height: 120px

#### Hero.jsx
- Full-screen hero section with background image
- Headline: "Thoughtfully automated. Beautifully designed."
- Two CTA buttons: "Book Discovery Call" and "Explore Services"
- Scroll indicator at bottom
- **CURRENT ISSUE:** Background image is pixelated (540x540 stretched to full screen)
- **FIX IN PROGRESS:** Waiting for high-res image from Canva

#### Services.jsx ✅
- Beautiful interactive service cards with hover effects
- 3 main services with icons and features lists
- "Who We Serve" section (Women Entrepreneurs + Small Businesses)
- "Why ANSTEIA" with 4 key benefits
- "Ready to reclaim your time?" CTA section
- Colors: Each card has unique brand color
- Animations: Cards lift and change color on hover

### 3. Issues Resolved ✅
- [x] Tailwind CSS v4 compatibility issues → Downgraded to v3.4.1
- [x] PostCSS configuration fixed
- [x] Logo size increased from h-10 to h-32
- [x] Hero section fills entire viewport (fixed grey space issue)

---

## 🚧 IMMEDIATE NEXT TASK

### **URGENT: Replace Hero Background Image**

**Current Status:**
- Background image is 540x540px and looks pixelated
- Adriana is exporting a high-res version from Canva
- File will be saved to: `/Users/user/Desktop/ansteia logo - brand colors - website instructions /`

**Recommended Export Settings:**
- Size: 1920x1080 (Full HD) or 2560x1440 (Retina)
- Format: PNG or JPG
- Quality: Maximum/100%
- Suggested filename: `hero-background-hd.png`

**Steps to Complete (for next Claude session):**
1. Wait for Adriana to confirm the new image is ready
2. Check the folder for the new file
3. Copy it to the project: `cp ~/Desktop/"ansteia logo - brand colors - website instructions "/hero-background-hd.png ~/Desktop/ansteia-website-2025/public/images/brand/`
4. Update Hero.jsx line 8: Change `background. png.png` to new filename
5. Test in browser to verify quality
6. Commit and push to GitHub

---

## 📋 REMAINING WORK (from Project Brief)

### Phase 1 - Core Pages (IN PROGRESS)
- [x] Navigation component
- [x] Hero section
- [x] Services section
- [ ] About Us page with team bios (Adriana & Nicole)
- [ ] Contact form with email integration
- [ ] Spanish translations (structure ready, content needed)

### Phase 2 - Members Area
- [ ] Password-protected `/members` route (password: "leanin")
- [ ] Lean In packages display (Bronze, Silver, Gold)
- [ ] QR code payment integration (waiting for Nicole to provide QR codes)

### Phase 3 - Polish & Launch
- [ ] Team photos (placeholders ready)
- [ ] Privacy Policy & Terms of Service pages
- [ ] SEO optimization (meta tags, alt text)
- [ ] Deploy to Netlify
- [ ] Connect custom domain

---

## 🛠 TECHNICAL NOTES FOR NEXT SESSION

### Development Commands
```bash
# Navigate to project
cd ~/Desktop/ansteia-website-2025

# Start dev server
npm run dev
# Server runs at: http://localhost:5173

# Stop server
Ctrl + C

# Build for production
npm run build

# Git workflow
git add .
git commit -m "Your message here"
git push
```

### File Structure
```
ansteia-website-2025/
├── public/
│   └── images/
│       └── brand/          # All logo and image files
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   └── Services.jsx
│   ├── App.jsx            # Main app - imports all components
│   ├── index.css          # Global Tailwind styles
│   └── main.jsx           # App entry point
├── tailwind.config.js     # Brand colors defined here
├── package.json           # Dependencies
└── README.md              # Project documentation
```

### Important Code Patterns

**Using Brand Colors (inline styles required):**
```jsx
style={{backgroundColor: '#F5F0E8'}}  // Cream
style={{color: '#5B6F7F'}}            // Slate gray
```

**Hover Effects Pattern:**
```jsx
onMouseEnter={(e) => e.target.style.color = '#3A7B7F'}
onMouseLeave={(e) => e.target.style.color = '#5B6F7F'}
```

---

## 👤 CLIENT CONTEXT

### About Adriana
- **Background:** Law background, transitioned to creative work 16 years ago
- **Experience:** Photography studio owner, now learning web development
- **Skill Level:** Beginner - this is her first web app
- **Needs:** Clear instructions, explanations of what's being done, learning opportunity
- **Location:** Based in Australia
- **Business Partner:** Nicole (based in Bolivia)

### Learning Goals
- Understanding web app development workflow
- Git and GitHub basics
- React component structure
- Building interactive features
- Preparing for client work (wants to replicate this workflow)

### Communication Style
- Very detail-oriented and quality-focused
- Graphic design background - cares about pixel-perfect design
- Appreciates explanations of technical decisions
- Wants to understand WHY things are done, not just HOW

---

## 🎯 WORKFLOW ESTABLISHED

This is the workflow Adriana wants to use for future client projects:

1. **Gather Client Materials**
   - Project brief (Word/text document)
   - Brand assets (logos, colors, images)
   - Content and copy

2. **Share with Claude**
   - Assets folder on Desktop
   - GitHub repo link

3. **Build Foundation**
   - Set up tech stack
   - Organize assets
   - Create components
   - Push to GitHub

4. **Iterative Development**
   - Build section by section
   - Test locally
   - Get client feedback
   - Commit regularly

5. **Deployment**
   - Connect to Netlify
   - Configure domain
   - Launch

---

## ⚠️ KNOWN ISSUES & WORKAROUNDS

### 1. Tailwind Custom Colors Not Working
**Issue:** Classes like `bg-cream`, `text-slate-gray` don't apply
**Cause:** Tailwind v3 doesn't auto-generate custom color utilities
**Workaround:** Use inline styles with hex codes
**Future Fix:** Consider using Tailwind's `extend` properly or CSS variables

### 2. Background Image Has Space in Filename
**File:** `background. png.png` (note the space before "png")
**Location:** `/public/images/brand/`
**Impact:** Works but URL-encoded in code: `background.%20png.png`
**Fix:** Will be resolved when new high-res image is added

### 3. Navigation Logo Size
**Current:** h-32 (128px)
**Context:** User requested 3x bigger than original (h-10)
**Works well:** Fits in 120px tall navigation bar

---

## 📝 GIT COMMIT HISTORY

```
903865c - Add beautiful Services section and improve Hero layout
5c67e85 - Fix: downgrade to Tailwind CSS v3 for stability
1cd8d72 - Fix: update Tailwind CSS PostCSS configuration
c750860 - Merge: resolve README conflict
22446c1 - Initial commit: ANSTEIA website foundation
```

---

## 🔄 HANDOFF INSTRUCTIONS FOR NEXT CLAUDE

**Context:** Adriana wants to preserve the current Claude session as "Project Manager" and use a new session for implementation work.

**Your Role:** Help implement features, fix issues, and continue development

**What You Need to Know:**
1. This is Adriana's first web app - explain things clearly
2. She values quality and pixel-perfect design
3. Always commit work to GitHub frequently
4. Test changes in the browser before moving on
5. Use inline styles for brand colors (Tailwind custom classes don't work)
6. Server is running at `http://localhost:5173`

**Immediate Task:**
Replace the hero background image with high-resolution version from Canva (Adriana is preparing this now).

**After Background Fix:**
Move on to building the About Us section with team bios for Adriana and Nicole.

---

## 📞 QUICK REFERENCE

**Project Location:** `/Users/user/Desktop/ansteia-website-2025/`
**Assets Folder:** `/Users/user/Desktop/ansteia logo - brand colors - website instructions /`
**GitHub:** https://github.com/ansteia/ansteia-website-2025
**Local Server:** http://localhost:5173
**Git User:** Adriana (hello@intuitionkeys.com)

**Key Files to Know:**
- `src/App.jsx` - Main component that imports everything
- `src/components/Hero.jsx` - Hero section (needs bg image fix)
- `src/components/Services.jsx` - Interactive services section
- `src/components/Navigation.jsx` - Top nav bar
- `tailwind.config.js` - Brand colors defined here

---

## ✨ PROJECT VISION

**End Goal:** A beautiful, professional, bilingual website that:
- Showcases ANSTEIA's services
- Allows clients to book discovery calls
- Has a password-protected members area
- Demonstrates the quality Adriana will deliver to her own clients
- Serves as a learning experience for building future client sites

**Success Criteria:**
- Pixel-perfect design matching brand
- Smooth animations and interactions
- Fast loading times
- Mobile responsive
- Accessible and SEO-friendly
- Easy to maintain and update

---

**Good luck with the next phase! Adriana is great to work with - just keep her informed, explain your decisions, and commit often. You've got this! 🚀**
