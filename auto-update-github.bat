@echo off
echo ========================================
echo   ALWAYS SEND TO GITHUB - Auto Update
echo ========================================
echo.

echo Checking for changes...
git add .

echo Checking status after add...
git status --porcelain > temp_status.txt

if not exist temp_status.txt (
    echo No changes detected after git add.
    goto :end
)

for /f %%i in ("temp_status.txt") do set size=%%~zi
if %size% equ 0 (
    echo No changes detected after git add.
    goto :end
)

echo Changes detected! ALWAYS SENDING TO GITHUB...
echo.

echo All changes already added...

echo.
echo Committing changes...
set /p commit_message="Enter commit message (or press Enter for auto-message): "

if "%commit_message%"=="" (
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
        set mydate=%%c-%%a-%%b
    )
    for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (
        set mytime=%%a:%%b
    )
    set commit_message=ALWAYS SEND TO GITHUB - Auto-update: %mydate% %mytime%
)

git commit -m "%commit_message%"

echo.
echo Pushing to GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS! Changes pushed to GitHub
    echo ========================================
    echo.
    echo Your POS system has been updated on GitHub!
    echo Repository: https://github.com/hicrou/mypos
    echo.
) else (
    echo.
    echo ========================================
    echo   ERROR! Failed to push to GitHub
    echo ========================================
    echo.
    echo Please check your internet connection and try again.
    echo.
)

:end
del temp_status.txt 2>nul
echo.
echo Press any key to continue...
pause >nul
