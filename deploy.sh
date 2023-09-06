echo "building before publish..."
yarn build
echo "commiting before version..."
echo "enter message:"
read MESSAGE
git add .
git commit -m "$MESSAGE"
VERSION=$(npm version patch)
echo $VERSION