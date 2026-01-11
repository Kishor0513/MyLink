# Deploy Script for Kishor Portfolio
# This script builds the project and copies the distribution files to the root for GitHub Pages.

Write-Host "🚀 Starting Deployment..." -ForegroundColor Cyan

# 1. Verification
if (!(Test-Path "src/main.jsx")) {
    Write-Host "❌ Error: Could not find src/main.jsx. Are you in the project root?" -ForegroundColor Red
    exit 1
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

Write-Host "✅ Deployment successful! Built files copied to root." -ForegroundColor Green
Write-Host "💡 Note: index.html in root is now the BUILT version. To continue developing with 'npm run dev', you might need to restore the source index.html or Vite might handle it." -ForegroundColor Yellow
