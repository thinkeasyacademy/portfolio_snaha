# Snaha Paul Portfolio

This is a professional portfolio website built with React, Tailwind CSS, and Lucide Icons.

## Features
- Responsive design (Mobile & Desktop)
- Smooth scrolling navigation
- Professional color theme (White, Dark Blue, Light Gray)
- Sections: Home, About, Skills, Projects, Experience, Education, Achievements, Extracurricular, Contact
- Interactive project cards and skill categories

## How to Upload to GitHub Pages

Since this is a Vite-based React project, you can easily deploy it to GitHub Pages following these steps:

### 1. Initialize Git and Push to GitHub
1. Create a new repository on GitHub named `snaha-paul-portfolio`.
2. In your local project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/snaha-paul-portfolio.git
   git push -u origin main
   ```

### 2. Configure `vite.config.ts`
Ensure your `base` property in `vite.config.ts` matches your repository name:
```typescript
export default defineConfig({
  base: '/snaha-paul-portfolio/',
  // ... rest of config
})
```

### 3. Install `gh-pages` package
```bash
npm install gh-pages --save-dev
```

### 4. Add Deployment Scripts to `package.json`
Add these two lines to the `"scripts"` section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 5. Deploy
Run the following command:
```bash
npm run deploy
```

Your website will be live at `https://your-username.github.io/snaha-paul-portfolio/`!

---
Created by Snaha Paul
