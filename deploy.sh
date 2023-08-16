#1/usr/bin/env sh

set -e

npm run build

cd dist
git add -A
git commit -m "new deployment"
git push -f https://github.com/mdmunnaahmed/vue-bus-booking.git master:gh-pages

cd -