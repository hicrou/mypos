# My POS System Launcher
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
