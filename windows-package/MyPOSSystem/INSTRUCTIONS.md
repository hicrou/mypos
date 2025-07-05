# My POS System - Windows Package

## Quick Start

1. **Double-click** "Start-POS-System.bat" to launch the application
2. Your POS system will open in your default web browser
3. Start using your Point of Sale system!

## Alternative Launch Methods

### Method 1: Batch File (Recommended)
- Double-click: `Start-POS-System.bat`
- Works on all Windows versions

### Method 2: PowerShell Script
- Right-click: `Start-POS-System.ps1`
- Select "Run with PowerShell"
- More modern interface

### Method 3: Direct Browser
- Double-click: `index.html`
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
2. Type: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Type: `Y` and press Enter
4. Try running the script again

### Issue: Browser doesn't open
**Solution**: 
1. Double-click `index.html` directly
2. Or drag `index.html` to your browser window

## Customization

You can modify the POS system by editing:
- `script.js` - Add products, change prices, modify functionality
- `styles.css` - Change colors, fonts, layout
- `index.html` - Modify structure and content

## Support

For issues or questions:
1. Check the main README.md file
2. Visit: https://github.com/hicrou/mypos
3. Create an issue on GitHub

## Version Information

- **Version**: 1.0.0
- **Package Type**: Portable Windows Package
- **Created**: 2025-07-05
- **Author**: hicrou

---

**Enjoy your POS System!** 🎉
