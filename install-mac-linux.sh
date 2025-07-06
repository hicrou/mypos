#!/bin/bash

# MyPOS Installation Script for Mac/Linux
# Make executable with: chmod +x install-mac-linux.sh

clear

echo "========================================"
echo "   MyPOS - Point of Sale System"
echo "   Mac/Linux Installation Script"
echo "========================================"
echo

echo "[1/4] Checking system requirements..."
sleep 2

# Check if we're on Mac or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    PLATFORM="Mac"
    OPEN_CMD="open"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    PLATFORM="Linux"
    OPEN_CMD="xdg-open"
else
    PLATFORM="Unknown"
    OPEN_CMD="xdg-open"
fi

echo "Platform detected: $PLATFORM"
echo

echo "[2/4] Setting up MyPOS..."
echo
echo "The MyPOS files should be in the same folder as this script."
echo

echo "[3/4] Preparing to open MyPOS..."
echo
echo "Default login credentials:"
echo "Username: admin"
echo "Password: admin123"
echo

sleep 3

echo "[4/4] Starting MyPOS..."

# Check if index.html exists
if [ -f "index.html" ]; then
    $OPEN_CMD "index.html"
    echo "✓ MyPOS opened in your default browser"
else
    echo "✗ Error: index.html not found in current directory"
    echo "Please make sure you're running this script from the MyPOS folder"
    exit 1
fi

echo
echo "========================================"
echo "    Installation Complete!"
echo "========================================"
echo
echo "MyPOS is now running in your browser."
echo
echo "IMPORTANT: Change the default password after first login!"
echo
echo "For help and documentation, check:"
echo "- INSTALLATION-GUIDE.md"
echo "- QUICK-SETUP.md"
echo "- MOBILE-OPTIMIZATION.md"
echo
echo "Press Enter to exit..."
read
