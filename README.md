# NPM

<p>npm run dev: "gulp"</p>
<p>npm run tlw: "npx tailwindcss -i ./src/css/output.css -o ./src/css/style.min.css --watch"</p>
<p>npm run build: "gulp build"</p>

# GULP

<p>exports.styles = styles;</p>
<p>exports.scripts = scripts;</p>
<p>exports.watching = watching;</p>
<p>exports.browser = browser;</p>
<p>exports.building = building;</p>

<p>exports.build = series(cleanDist, cssCompressed, building);</p>
<p>exports.default = parallel(styles, scripts, watching, browser);</p>
