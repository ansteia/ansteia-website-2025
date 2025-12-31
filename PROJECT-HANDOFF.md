# ANSTEIA Website - Project Handoff Document

**Date Updated:** December 31, 2025
**Client:** Adriana (ANSTEIA - Tech Automation & Creative Services)
**Developer Level:** Beginner - First web app project
**Current Status:** Phase 1 Complete - Hero, Services, and Contact sections finished!

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
- **Last Commit:** "Replace emojis with custom brand icons throughout Services section"

### Local Development
- **Project Location:** `/Users/user/Desktop/ansteia-website-2025/`
- **Dev Server:** Running at `http://localhost:5173/`
- **Git Status:** Clean - all changes committed and pushed

### Brand Assets Folder
- **Location:** `/Users/user/Desktop/ansteia logo - brand colors - website instructions /`
- **Contents:**
  - Brand logos and service icons
  - High-res background images (16:9 format)
  - Project brief: `Bash tool output (hl8x4x).txt`
  - Word doc: `ANSTEIA Website Build.docx`

---

## 🎨 BRAND COLORS & ASSETS

### Color Palette (defined in tailwind.config.js)
```
Dusty Rose/Mauve:   #C5A5A5
Turquoise/Teal:     #4FA5A5
Slate Gray:         #5B6F7F (primary - logo color)
Sage/Mint:          #B5C5B5
Cream:              #F5F0E8 (background)
Soft Blue-Gray:     #7B8FA5 (Automation & AI card color)
Soft Pink:          #E8C5D5
```

### IMPORTANT: CUSTOM COLORS DON'T WORK IN TAILWIND
**Problem:** Tailwind v3 doesn't recognize custom color classes like `bg-cream` or `text-slate-gray`
**Current Workaround:** Using inline styles with hex codes
**Example:** `style={{backgroundColor: '#F5F0E8'}}` instead of `className="bg-cream"`

### Brand Assets in Project
- Logo: Gray constellation "A" design (`/public/images/brand/gray logo.png`)
- Hero Background: High-res 16:9 banner (`ansteia-banner-16x9.png`) ✅
- Contact Background: Extended background image (`ansteia-extended-background.png`) ✅
- Service Icons:
  - Circle → Digital Foundation & Websites
  - Droplet → Automation & AI Systems
  - Triangle → Marketing & Creative Services
- Who We Serve Icons:
  - Vesica Piscis → Women Entrepreneurs
  - Custom icon → Small Businesses

---

## ✅ COMPLETED WORK

### 1. Project Setup ✅
- [x] React + Vite + Tailwind CSS configured
- [x] Git repository initialized and connected to GitHub
- [x] Brand assets organized in `/public/images/brand/`
- [x] Node.js installed via Homebrew
- [x] Development server working

### 2. Components Built ✅

#### Navigation.jsx ✅
- Fixed top navigation bar with cream background
- Logo enlarged to 3x size (h-32 = 128px)
- Navigation links: Services, About, Contact, Members
- Language toggle (EN/ES) - functional
- Colors applied via inline styles (not Tailwind classes)
- Height: 120px

#### Hero.jsx ✅ **UPDATED!**
- Full-screen hero section with high-resolution 16:9 background image
- Headline: "Thoughtfully automated. Beautifully designed."
- Two CTA buttons: "Book Discovery Call" and "Explore Services"
- Scroll indicator at bottom with bounce animation
- **FIXED:** Background now crisp and covers full width (no grey spaces)
- Using: `ansteia-banner-16x9.png` (1.6MB)
- Added `overflow-x: hidden` to prevent horizontal scroll

#### Services.jsx ✅ **FULLY UPDATED!**
- Beautiful interactive service cards with hover effects
- **Custom brand icons** replace all emojis:
  - Circle icon (96px) - Digital Foundation & Websites - Turquoise (#4FA5A5)
  - Droplet icon (128px) - Automation & AI Systems - Soft Blue-Gray (#7B8FA5)
  - Triangle icon (112px) - Marketing & Creative - Dusty Rose (#C5A5A5)
- Icons maintain original colors on hover (no color filter)
- 3 main services with feature lists
- **"Who We Serve" section** with custom icons:
  - Vesica Piscis (128px) - Women Entrepreneurs
  - Small Business icon (128px) - Small Businesses
- "Why ANSTEIA" with 4 key benefits (emojis remain here)
- "Ready to reclaim your time?" CTA section
- Smooth hover animations - cards change color and lift

#### Contact.jsx ✅ **NEW COMPONENT!**
- Beautiful contact form with extended background image
- Form fields: Name, Email, Subject, Message (all required)
- Form sends to `ansteiadigital@gmail.com` via mailto
- **Direct contact cards** with hover effects:
  - Adriana - adriana@ansteia.com (dusty rose icon)
  - Nicole - nicole@ansteia.com (soft pink icon)
  - General - info@ansteia.com (turquoise icon)
- Semi-transparent glass effect cards with backdrop blur
- Elegant gradient overlay on background
- Response time info card
- Mobile responsive grid layout

### 3. Global Styles ✅
- Added `overflow-x: hidden` to html and body in `index.css`
- Prevents horizontal scrolling issues
- Clean, professional layout on all screen sizes

### 4. Issues Resolved ✅
- [x] Tailwind CSS v4 compatibility issues → Downgraded to v3.4.1
- [x] PostCSS configuration fixed
- [x] Logo size increased from h-10 to h-32
- [x] Hero section fills entire viewport (fixed grey space issue)
- [x] Hero background upgraded from 540x540 to 16:9 high-res ✅
- [x] All emojis replaced with brand icons ✅
- [x] Full-width coverage on all sections ✅

---

## 📋 REMAINING WORK (from Project Brief)

### Phase 1 - Core Pages (ALMOST COMPLETE!)
- [x] Navigation component ✅
- [x] Hero section ✅
- [x] Services section ✅
- [x] Contact form ✅
- [ ] About Us page with team bios (Adriana & Nicole) - **NEXT PRIORITY**
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
│       └── brand/                    # All logo and image files
│           ├── ansteia-banner-16x9.png          (Hero background)
│           ├── ansteia-extended-background.png  (Contact background)
│           ├── ansteia-circle.png               (Digital Foundation icon)
│           ├── ansteia-droplet.png              (Automation icon)
│           ├── ansteia-triangle.png             (Marketing icon)
│           ├── vesica-piscis.png                (Women Entrepreneurs)
│           ├── small-business.png               (Small Businesses)
│           └── gray logo.png                    (Navigation logo)
├── src/
│   ├── components/                   # React components
│   │   ├── Navigation.jsx           # Top nav bar
│   │   ├── Hero.jsx                 # Hero section with CTA
│   │   ├── Services.jsx             # Services cards + Who We Serve
│   │   └── Contact.jsx              # Contact form + direct emails
│   ├── App.jsx                      # Main app - imports all components
│   ├── index.css                    # Global Tailwind styles
│   └── main.jsx                     # App entry point
├── tailwind.config.js               # Brand colors defined here
├── package.json                     # Dependencies
└── README.md                        # Project documentation
```

### Important Code Patterns

**Using Brand Colors (inline styles required):**
```jsx
style={{backgroundColor: '#F5F0E8'}}  // Cream
style={{color: '#5B6F7F'}}            // Slate gray
style={{backgroundColor: '#7B8FA5'}}  // Soft blue-gray (Automation card)
```

**Hover Effects Pattern:**
```jsx
onMouseEnter={(e) => e.target.style.backgroundColor = '#3A7B7F'}
onMouseLeave={(e) => e.target.style.backgroundColor = '#4FA5A5'}
```

**Image with Custom Sizing:**
```jsx
<img
  src="/images/brand/ansteia-droplet.png"
  alt="Service icon"
  className="w-32 h-32 object-contain"  // Larger icons use w-32 (128px)
/>
```

---

## 📝 RECENT GIT COMMIT HISTORY

```
3087836 - Replace emojis with custom brand icons throughout Services section
25268f7 - Add beautiful Contact section with form and direct contact info
6ea6215 - Update hero background with high-resolution 16:9 image
07afd9f - (previous work)
903865c - Add beautiful Services section and improve Hero layout
5c67e85 - Fix: downgrade to Tailwind CSS v3 for stability
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
- Prefers custom brand images over generic emojis/icons

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

### 2. Icon Sizing for Visual Balance
**Issue:** Different icon shapes need different sizes to appear balanced
**Solution:** Custom sizing per icon:
- Circle: 96px (w-24)
- Droplet: 128px (w-32) - larger because vertically oriented
- Triangle: 112px (w-28) - medium size
- Who We Serve icons: 128px (w-32) - prominent display

### 3. Navigation Logo Size
**Current:** h-32 (128px)
**Context:** User requested 3x bigger than original (h-10)
**Works well:** Fits in 120px tall navigation bar

---

## 🔄 HANDOFF INSTRUCTIONS FOR NEXT CLAUDE SESSION

**Context:** Adriana uses multiple Claude sessions to preserve context and organize work.

**Your Role:** Continue implementing features, maintain code quality, and explain decisions clearly

**What You Need to Know:**
1. This is Adriana's first web app - explain things clearly and educate as you build
2. She values quality and pixel-perfect design - use custom brand assets, not generic icons
3. Always commit work to GitHub frequently with clear commit messages
4. Test changes in the browser before moving on
5. Use inline styles for brand colors (Tailwind custom classes don't work)
6. Server is running at `http://localhost:5173`
7. All hero/services/contact sections are COMPLETE ✅

**Next Priority Task:**
Build the **About Us** section with team bios for Adriana and Nicole. This will include:
- Team member profiles
- Professional photos (placeholder ready)
- Bio information
- Beautiful layout matching the existing design aesthetic

**After About Us:**
- Spanish translations
- Members area (password-protected)
- Polish & deployment

---

## 📞 QUICK REFERENCE

**Project Location:** `/Users/user/Desktop/ansteia-website-2025/`
**Assets Folder:** `/Users/user/Desktop/ansteia logo - brand colors - website instructions /`
**GitHub:** https://github.com/ansteia/ansteia-website-2025
**Local Server:** http://localhost:5173
**Git User:** Adriana (hello@intuitionkeys.com)

**Key Files:**
- `src/App.jsx` - Main component that imports everything
- `src/components/Hero.jsx` - Hero section with high-res background ✅
- `src/components/Services.jsx` - Services with custom brand icons ✅
- `src/components/Contact.jsx` - Contact form with direct emails ✅
- `src/components/Navigation.jsx` - Top nav bar
- `src/index.css` - Global styles (includes overflow-x fix)
- `tailwind.config.js` - Brand colors defined here

**Email Addresses:**
- Form submissions: ansteiadigital@gmail.com
- Adriana direct: adriana@ansteia.com
- Nicole direct: nicole@ansteia.com
- General: info@ansteia.com

---

## ✨ PROJECT VISION

**End Goal:** A beautiful, professional, bilingual website that:
- Showcases ANSTEIA's services
- Allows clients to book discovery calls
- Has a password-protected members area
- Demonstrates the quality Adriana will deliver to her own clients
- Serves as a learning experience for building future client sites

**Success Criteria:**
- Pixel-perfect design matching brand ✅
- Custom brand imagery throughout ✅
- Smooth animations and interactions ✅
- Fast loading times ✅
- Mobile responsive ✅
- Accessible and SEO-friendly (in progress)
- Easy to maintain and update ✅

---

**Status: Phase 1 is 80% complete! Hero, Services, and Contact sections are beautiful and functional. Next up: About Us section with team bios. Keep up the great work! 🚀**
