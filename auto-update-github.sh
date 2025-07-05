#!/bin/bash

echo "========================================"
echo "   ALWAYS SEND TO GITHUB - Auto Update"
echo "========================================"
echo

echo "Adding all changes first..."
git add .

echo "Checking for changes..."

# Check if there are any changes after git add
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes detected after git add."
    exit 0
fi

echo "Changes detected! ALWAYS SENDING TO GITHUB..."
echo

echo "All changes already added..."

echo
read -p "Enter commit message (or press Enter for auto-message): " commit_message

if [ -z "$commit_message" ]; then
    current_date=$(date +"%Y-%m-%d %H:%M")
    commit_message="ALWAYS SEND TO GITHUB - Auto-update: $current_date"
fi

echo "Committing changes..."
git commit -m "$commit_message"

echo
echo "Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo
    echo "========================================"
    echo "   SUCCESS! Changes pushed to GitHub"
    echo "========================================"
    echo
    echo "Your POS system has been updated on GitHub!"
    echo "Repository: https://github.com/hicrou/mypos"
    echo
else
    echo
    echo "========================================"
    echo "   ERROR! Failed to push to GitHub"
    echo "========================================"
    echo
    echo "Please check your internet connection and try again."
    echo
fi

echo
echo "Press any key to continue..."
read -n 1 -s
