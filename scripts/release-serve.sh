#!/bin/bash
PORT=${1:-"9488"}
RELEASE_PATH=${2:-"gh-pages"}

echo "WARNING: Testing Release Build!"
polymer serve \
    --root="build/${RELEASE_PATH}" --port $PORT \
    --proxy-path='/newbie-guidebook' --proxy-target="http://localhost:${PORT}/" \
     --compile never