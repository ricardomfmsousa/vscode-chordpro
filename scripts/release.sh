#!/bin/bash

set -e  # Exit on error

# Validate release type argument
if [ -z "$1" ]; then
    echo "Error: Release type required (major, minor, or patch)"
    exit 1
fi

if [[ ! "$1" =~ ^(major|minor|patch)$ ]]; then
    echo "Error: Invalid release type '$1'. Must be major, minor, or patch"
    exit 1
fi

# Check if vsce is installed
if ! command -v vsce &> /dev/null; then
    echo "Error: vsce is not installed. Install it with: npm install -g @vscode/vsce"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Display current version and changelog
CURRENT_VERSION=$(node -p -e "require('./package.json').version")
echo "> Running $1 release, current version is $CURRENT_VERSION"
echo "> [CHANGELOG.md]"
tail -n+9 CHANGELOG.md | head -n20
echo

# Confirm with user
read -p "Press enter to publish release..." v

# Execute release
npm version "$1" && \
git push --follow-tags && \
vsce publish

echo "> Release completed successfully!"