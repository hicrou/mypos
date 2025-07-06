@echo off
title MyPOS Installation for Windows
color 0A

echo.
echo ========================================
echo    MyPOS - Point of Sale System
echo    Windows Installation Script
echo ========================================
echo.

echo [1/4] Checking system requirements...
timeout /t 2 /nobreak >nul

echo [2/4] Setting up MyPOS...
echo.
echo The MyPOS files should be in the same folder as this script.
echo.

echo [3/4] Opening MyPOS in your default browser...
echo.
echo Default login credentials:
echo Username: admin
echo Password: admin123
echo.

timeout /t 3 /nobreak >nul

echo [4/4] Starting MyPOS...
start "" "index.html"

echo.
echo ========================================
echo    Installation Complete!
echo ========================================
echo.
echo MyPOS is now running in your browser.
echo.
echo IMPORTANT: Change the default password after first login!
echo.
echo For help and documentation, check:
echo - INSTALLATION-GUIDE.md
echo - QUICK-SETUP.md
echo - MOBILE-OPTIMIZATION.md
echo.
echo Press any key to exit...
pause >nul
