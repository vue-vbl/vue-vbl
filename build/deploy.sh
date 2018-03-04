npm run build:all

git add .
git commit -am "$1"
git push origin master

npm version patch
npm publish