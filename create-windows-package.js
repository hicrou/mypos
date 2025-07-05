#!/usr/bin/env node

/**
 * Simple Windows Package Creator
 * Creates a portable Windows package without requiring Wine
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Creating Windows Package for My POS System...\n');

// Create a Windows-specific package directory
const packageDir = 'windows-package';
const distDir = path.join(packageDir, 'MyPOSSystem');

// Create directories
if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir);
}
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Copy main files
const filesToCopy = [
    'index.html',
    'styles.css',
    'script.js',
    'README.md'
];

console.log('📁 Copying application files...');
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(distDir, file));
        console.log(`   ✓ ${file}`);
    }
});

// Create a Windows batch file to run the app
const batchContent = `@echo off
title My POS System
echo ================================
echo    My POS System - Starting...
echo ================================
echo.
echo Opening your POS system in the default browser...
echo.
echo To close the application, close this window and the browser tab.
echo.
start "" "index.html"
echo.
echo POS System is now running in your browser!
echo Press any key to close this window...
pause >nul
`;

fs.writeFileSync(path.join(distDir, 'Start-POS-System.bat'), batchContent);
console.log('   ✓ Start-POS-System.bat');

// Create a PowerShell script as alternative
const powershellContent = `# My POS System Launcher
Write-Host "================================" -ForegroundColor Cyan
Write-Host "    My POS System - Starting..." -ForegroundColor Cyan  
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Opening your POS system in the default browser..." -ForegroundColor Green
Write-Host ""

# Get the directory where this script is located
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlFile = Join-Path $scriptDir "index.html"

# Open the HTML file in default browser
Start-Process $htmlFile

Write-Host "POS System is now running in your browser!" -ForegroundColor Green
Write-Host ""
Write-Host "To close the application:" -ForegroundColor Yellow
Write-Host "1. Close the browser tab" -ForegroundColor Yellow
Write-Host "2. Close this PowerShell window" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
`;

fs.writeFileSync(path.join(distDir, 'Start-POS-System.ps1'), powershellContent);
console.log('   ✓ Start-POS-System.ps1');

// Create installation instructions
const instructionsContent = `# My POS System - Windows Package

## Quick Start

1. **Double-click** "Start-POS-System.bat" to launch the application
2. Your POS system will open in your default web browser
3. Start using your Point of Sale system!

## Alternative Launch Methods

### Method 1: Batch File (Recommended)
- Double-click: \`Start-POS-System.bat\`
- Works on all Windows versions

### Method 2: PowerShell Script
- Right-click: \`Start-POS-System.ps1\`
- Select "Run with PowerShell"
- More modern interface

### Method 3: Direct Browser
- Double-click: \`index.html\`
- Opens directly in your browser

## Features

✅ **No Installation Required** - Just extract and run
✅ **Works Offline** - No internet connection needed
✅ **Cross-Browser** - Works with Chrome, Firefox, Edge, Safari
✅ **Portable** - Copy to USB drive or any location
✅ **Secure** - Runs locally on your computer

## System Requirements

- **Operating System**: Windows 7 or later
- **Browser**: Any modern web browser (Chrome, Firefox, Edge, Safari)
- **Storage**: Less than 1 MB
- **RAM**: Minimal (runs in browser)

## Troubleshooting

### Issue: "Windows protected your PC" message
**Solution**: Click "More info" → "Run anyway"
This happens because the batch file is not digitally signed.

### Issue: PowerShell execution policy error
**Solution**: 
1. Right-click PowerShell → "Run as Administrator"
2. Type: \`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\`
3. Type: \`Y\` and press Enter
4. Try running the script again

### Issue: Browser doesn't open
**Solution**: 
1. Double-click \`index.html\` directly
2. Or drag \`index.html\` to your browser window

## Customization

You can modify the POS system by editing:
- \`script.js\` - Add products, change prices, modify functionality
- \`styles.css\` - Change colors, fonts, layout
- \`index.html\` - Modify structure and content

## Support

For issues or questions:
1. Check the main README.md file
2. Visit: https://github.com/hicrou/mypos
3. Create an issue on GitHub

## Version Information

- **Version**: 1.0.0
- **Package Type**: Portable Windows Package
- **Created**: ${new Date().toISOString().split('T')[0]}
- **Author**: hicrou

---

**Enjoy your POS System!** 🎉
`;

fs.writeFileSync(path.join(distDir, 'INSTRUCTIONS.md'), instructionsContent);
console.log('   ✓ INSTRUCTIONS.md');

// Create a simple desktop shortcut file (.url)
const shortcutContent = `[InternetShortcut]
URL=file:///${path.resolve(distDir, 'index.html').replace(/\\/g, '/')}
IconFile=${path.resolve(distDir, 'index.html')}
IconIndex=0
`;

fs.writeFileSync(path.join(distDir, 'My POS System.url'), shortcutContent);
console.log('   ✓ My POS System.url (Desktop shortcut)');

console.log('\n🎉 Windows package created successfully!');
console.log('\n📦 Package location:');
console.log(`   ${path.resolve(distDir)}`);
console.log('\n📋 To distribute:');
console.log('   1. Zip the "MyPOSSystem" folder');
console.log('   2. Share the ZIP file with users');
console.log('   3. Users extract and run "Start-POS-System.bat"');
console.log('\n✨ No installation required - just extract and run!');

console.log('\n🔧 To recreate this package, run:');
console.log('   node create-windows-package.js');
