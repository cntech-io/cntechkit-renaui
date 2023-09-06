echo ">>> building before publish..."
yarn build
echo ">>> committing before version..."
echo "enter message:"
read MESSAGE
git add .
git commit -m "$MESSAGE"
echo ">>> patching version..."
VERSION=$(npm version patch)
echo ">>> version is $VERSION"
git push origin main
git tag $VERSION
git push origin $VERSION
npm publish --access public