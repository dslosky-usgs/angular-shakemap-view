ng build --base-href "https://dslosky-usgs.github.io/angular-shakemap-view/"
rm -rf docs/htdocs/*
cp docs/products.json docs/htdocs/
cp docs/configs.json docs/htdocs/
cp -r docs/shakemaps docs/htdocs/
cp -r dist/* docs/htdocs/