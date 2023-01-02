npm run build
git add dist && git commit -m "deploy: add subtree dist"
git subtree push --prefix dist origin gh-pages