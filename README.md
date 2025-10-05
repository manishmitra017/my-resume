# Manish Mitra - Professional Portfolio

A modern, responsive portfolio website showcasing AI leadership, Gen AI expertise, and quality engineering experience.

## 🚀 Built With

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **React Icons** - Icon library
- **pnpm** - Fast, disk space efficient package manager

## 🌟 Features

- ✨ Modern, animated UI with smooth transitions
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Clean, professional design optimized for recruiters
- ⚡ Fast loading and optimized performance
- 🔍 SEO optimized
- 📄 Downloadable resume
- 🎯 Sections: Hero, About, Experience, Skills, Certifications, Education, Contact

## 🛠️ Quick Start

### Run with single command:

```bash
./run_all.sh
```

This script will:
- ✅ Check if pnpm is installed (installs if needed)
- ✅ Install dependencies
- ✅ Start the development server
- ✅ Open http://localhost:3000

### Manual commands:

```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience timeline
│   ├── Skills.tsx        # Skills showcase
│   ├── Certifications.tsx # Certifications & Awards
│   ├── Education.tsx     # Education section
│   └── Contact.tsx       # Contact section
├── public/               # Static files
│   └── Manish_Mitra_Resume.docx
├── run_all.sh           # Quick start script
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind config
├── next.config.js       # Next.js config
└── .gitignore          # Git ignore rules
```

## 🎨 Customization

### Update Your Information

1. **Personal Details:**
   - Edit components in `/components` directory
   - Update contact information in `Contact.tsx`
   - Modify experience in `Experience.tsx`
   - Update skills in `Skills.tsx`

2. **Resume:**
   - Replace `/public/Manish_Mitra_Resume.docx` with your resume

3. **Colors & Theme:**
   - Modify primary colors in `/tailwind.config.ts`
   - Adjust gradients in `/app/globals.css`

4. **Metadata (SEO):**
   - Update title, description, keywords in `/app/layout.tsx`

## 🛠️ Development Tips

### Hot Reload
- Changes to components auto-reload in dev mode
- TypeScript errors show in terminal and browser

### Adding New Sections
1. Create component in `/components`
2. Import in `/app/page.tsx`
3. Add to navigation in `Navigation.tsx`

### Performance
- All animations use Framer Motion
- Images should be optimized before adding
- Use Next.js Image component for optimization

## 📊 Tech Stack Details

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript for type safety
- **Styling:** Tailwind CSS v4 with custom config
- **Animations:** Framer Motion for smooth interactions
- **Icons:** React Icons library
- **Package Manager:** pnpm (faster than npm/yarn)

## 📧 Contact

- **Email:** manishmitra013@gmail.com
- **LinkedIn:** [linkedin.com/in/manish-mitra](https://www.linkedin.com/in/manish-mitra/)
- **GitHub:** [github.com/manishmitra13](https://github.com/manishmitra13)

## 📄 License

This project is for personal portfolio use.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
