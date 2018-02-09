rm -rf docs/htdocs/*
ng build --base-href "https://dslosky-usgs.github.io/angular-shakemap-view/" --output-path=docs/dist
cp -r docs/dist/* docs/htdocs/
rm -rf docs/dist

cp docs/products.json docs/htdocs/
cp docs/configs.json docs/htdocs/
cp -r docs/shakemaps docs/htdocs/

cd docs/htdocs
git add .
git commit -m "Auto Update"
git push origin gh-pages