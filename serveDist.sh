cp -r docs/shakemaps dist/shakemaps
cp docs/products.json dist/
cp docs/configs.json dist/

cd dist
python -m SimpleHTTPServer