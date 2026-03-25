# Deployment Workflow

## Overview
This document explains how to update your portfolio site from Windsurf → Git → Live at fernandocontreras.dev

## Prerequisites
- Git installed and configured
- Access to your deployment platform (Netlify/Vercel/Railway)
- Site already deployed at fernandocontreras.dev

## Quick Reference: Update Workflow

```
Make changes in Windsurf → Commit → Push → Auto-deploy → Live
```

## Step-by-Step Process

### 1. Make Changes in Windsurf
- Edit files in the `/portfolio-site` directory
- Test locally with `npm run dev` (http://localhost:3000)
- Verify changes look correct before committing

### 2. Commit Your Changes
Each logical change should have its own commit with a clear message:

```bash
# Check what files changed
git status

# Stage specific files or all changes
git add filename.js        # specific file
git add -A                 # all changes

# Commit with descriptive message
git commit -m "feat: add new project card for RAG assistant"
```

**Commit message format:**
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `refactor:` — Code restructuring
- `style:` — Visual changes (colors, spacing)
- `chore:` — Maintenance tasks

### 3. Push to GitHub
```bash
git push origin main
```

### 4. Auto-Deploy Happens
Your deployment platform should automatically:
- Detect the push
- Build the Next.js site
- Deploy to fernandocontreras.dev
- (Usually takes 1-2 minutes)

### 5. Verify Live
- Visit fernandocontreras.dev
- Check your changes appear
- Use browser DevTools → Network tab to hard refresh if needed (Cmd+Shift+R)

## Common Tasks

### Update Project Link
```bash
# Edit the project in components/Projects.js
git add components/Projects.js
git commit -m "fix: update bilingual chatbot with live URL"
git push
```

### Add Google Analytics ID
```bash
# Edit lib/gtag.js and replace G-XXXXXXXXXX with your real ID
git add lib/gtag.js
git commit -m "feat: add Google Analytics measurement ID"
git push
```

### Update Bio Text
```bash
# Edit components/Hero.js
git add components/Hero.js
git commit -m "docs: update bio text"
git push
```

## Troubleshooting

### Changes not showing live?
1. Check build status on your deployment platform
2. Hard refresh browser (Cmd+Shift+R)
3. Check console for build errors: `npm run build` locally

### Build fails?
```bash
# Test build locally first
npm run build

# If errors, fix them, then commit and push again
```

### Merge conflicts?
```bash
# Pull latest changes first
git pull origin main

# Then make your changes, commit, and push
```

## One-Liner for Quick Updates

If you want to do it all in one command:

```bash
git add -A && git commit -m "feat: quick update" && git push
```

## Rollback (if something breaks)

```bash
# See recent commits
git log --oneline -5

# Revert last commit
git revert HEAD

# Or reset to specific commit (dangerous - use with caution)
git reset --hard COMMIT_HASH
git push --force
```

## Where is the site deployed?

Check your deployment platform dashboard:
- **Vercel**: vercel.com/dashboard → find `portfolio-site`
- **Netlify**: netlify.com → Sites → `portfolio-site`
- **Railway**: railway.app → Projects → `portfolio-site`

## Need to change deployment platform?

1. Disconnect current platform from GitHub repo
2. Connect new platform to same repo
3. Configure build settings (usually auto-detected for Next.js)
4. Update DNS at your domain registrar to point to new platform
5. Wait for SSL certificate provisioning (usually automatic)
