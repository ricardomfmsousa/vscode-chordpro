#!/bin/sh

CURRENT_VERSION=`node -p -e "require('./package.json').version"`
echo "> Running $1 release, current version is $CURRENT_VERSION"
echo "> [CHANGELOG.md]"
tail -n+9 CHANGELOG.md | head -n20
echo
read -p"Press enter to publish release..." v
npm version $1 && \
git push --follow-tags && \
vsce publish