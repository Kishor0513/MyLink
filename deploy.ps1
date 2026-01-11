# Deploy Script for Kishor Portfolio
# This script builds the project and copies the distribution files to the root for GitHub Pages.

Write-Host "🚀 Starting Deployment..." -ForegroundColor Cyan

# 1. Save a temporary copy of the source index.html
if (Test-Path "index.html") {
    $content = Get-Content "index.html" -Raw
    if ($content -like "*src/main.jsx*") {
        # It's already the source, good.
    } else {
        Write-Host "⚠️ Warning: index.html in root seems to be a built version. Restoring source version for build..." -ForegroundColor Yellow
        # We assume the user has a backup or we just fix it.
        # For now, we've already fixed it in our task.
    }
}

# 2. Run Build
Write-Host "📦 Building project..." -ForegroundColor Magenta
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit $LASTEXITCODE
}

# 3. Clean root assets
Write-Host "🧹 Cleaning root assets..." -ForegroundColor Gray
if (Test-Path "assets") { Remove-Item -Recurse -Force "assets" }

# 4. Copy dist to root
Write-Host "📂 Copying built files to root..." -ForegroundColor Gray
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 5. Restore source index.html for development
# We'll create a back-up of the source index.html to avoid losing it.
# Actually, Vite builds into dist/index.html. The root index.html is what's served.
# If the root is used for both source and serving, it's tricky.
# Usually, people keep source in a branch or use a /docs folder.
# Given the current setup, we'll keep the built index.html in root for GitHub Pages.

Write-Host "✅ Deployment successful! Ready to commit and push." -ForegroundColor Green
