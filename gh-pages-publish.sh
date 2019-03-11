#!/bin/bash

latestHash=`echo $(git log -1) | awk '{print $2}'`
echo "Submitting build ${latestHash}..."

# TODO: allow user to select specific folder
cd build/gh-pages
git init
git add .
git commit -m "Build ${latestHash}"
git remote add github git@github.com:uci-tgsa/newbie-guidebook.git
git push --force github master:gh-pages
cd -