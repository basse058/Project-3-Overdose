<img src=/assets/header-opioid-epidemic.png>
<br>
<h1>Project 3: Opioid Drug Overdose Deaths</h1>

<h2>Project Description</h2>

<h4>This project analyzes opioid overdose data from the United States for all states for the year range including 2013 and 2022.
The data used was obtained from multiple websites listed below:
<br>
"U.S. State Overdose Deaths 2014-2019" data was scraped from the CDC webpage:
<ul>
<li><a href="https://www.cdc.gov/drugoverdose/deaths/index.html">https://www.cdc.gov/drugoverdose/deaths/index.html</a></li>
</ul>
"U.S. State Opioid Dispensing Rate 2013-2019" data was scraped from the CDC webpage:
<ul>
<li><a href="https://www.cdc.gov/drugoverdose/rxrate-maps/index.html">https://www.cdc.gov/drugoverdose/rxrate-maps/index.html</a></li>
</ul>
"Provisional Drug Overdose Death Counts 2015-2022" data was downloaded in CSV format from the CDC webpage:
<ul>
<li><a href="https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm">https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm</a></li>
</ul>
<br>
</h4>
<br>
<h2>Website</h2>
<br>
<h2>Bootstrap Website ~ (Brandon)<br>
https://basse058.github.io/Project-3-Overdose/templates/index.html</h2>
<img src="assets/project-3-overdose-webpage-screenshot.jpg">
<ul>
  <li>Created header and footer.</li>
  <li>Created boxed layout.</li>
  <li>Added maps and charts via iframe embeds.</li>
  <li>Added JS script and CSS to add light and dark mode toggle.</li>
</ul>
<br>
<br>
<h2>OnRender Website using SQLite Database ~ (Cody)<br>
https://project-3-h7kg.onrender.com/</h2>
<img width="533" alt="image" src="visualizations\lineChart.png">
<ul>
<li>Provisional overdose death data sourced from <a href="https://www.cdc.gov/nchs/nvss/vsrr/prov-county-drug-overdose.htm">CDC web page</a> </li>
<li>Dataset was loaded in SQLite database. Using the app.py file in root folder, the proper data is pulled for the line graph showing the monthly overdose counts for up to 12 months for the state selected by the dropdown like the bar charts. </li>
<li>Render is used to host the site and SQLite database.</li>
</ul>
<br>
<br>
<h2>Interactive Visualizations</h2>
<br>
<h3>Plotly Choropleth Map ~ (Brandon)<br>
https://basse058.github.io/Project-3-Overdose/plotly-map</h3>
<img src="assets/plotly-choropleth-map.jpg">
<ul><li><b>Interactivity:</b> Hover over state to reveal deathes by year, total of all years and state abbreviation.</li>
<li>Color gradient shows the highest (dark) to lowest (light) death rates among states.</li></ul>
<h3>Extract</h3>
<ul>
  <li>Data scraped and saved as <a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/OpioidDeathsAll.csv">OpioidDeathsAll.csv</a> by Chris G.</li>
</ul>
<h3>Transform</h3>
<ul>
  <li>Data cleaned by renaming columns as appropriate.</li>
  <li><a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/OpioidDeathsAll.csv">OpioidDeathsAll.csv</a> data cleaned/formatted into <a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/OpioidDeathsAll-cleaned-3.csv">OpioidDeathsAll-cleaned-3.csv</a> file.</li>
</ul>
<h3>Load</h3>
<ul>
  <li>OpioidsDeathAll-cleaned-3 imported via pandas into plotly-map.py</li>
  <li><a href="https://github.com/basse058/Project-3-Overdose/blob/main/plotly-map.py">plotly-map.py</a> coded with df to include specific data from OpioidsDeathAll-cleaned-3</li>
  <li>Used <a href="https://github.com/basse058/Project-3-Overdose/blob/main/plotly-map.py">plotly-map.py</a> to read data, create dataframe, build map and output <a href="https://github.com/basse058/Project-3-Overdose/blob/main/plotly-map.html">plotly-map.html</a> file.</li>
</ul>
<br>
<br>
<h3>AnyChart Choropleth Map ~ (Brandon)<br>
https://basse058.github.io/Project-3-Overdose/anychart.html</h3>
<img src="assets/anychart-choropleth-map.jpg">
<h5><i>* Includes JavaScript library previously unintroduced during class</i></h5>
<ul>
<li><b>Interactivity:</b> Hover over state to see total deaths for the five year range of the dataset.
<li>Color gradient shows the highest (dark) to lowest (light) death rates among states.</li></ul>
<h3>Extract</h3>
<ul><li>Data copied from previous map into <a href="https://github.com/basse058/Project-3-Overdose/blob/main/AnyChartMap/data.json">data.json</a> file for AnyChart Choropleth Map</li></ul>
<h3>Transform</h3>
<li>Data was already clean from previous map.
<h3>Load</h3>
<li>Javascript pulled from CDN into <a href="https://github.com/basse058/Project-3-Overdose/blob/main/AnyChartMap/anychart.html">anychart.html</a>
<li>Data read from <a href="https://github.com/basse058/Project-3-Overdose/blob/main/AnyChartMap/data.json">data.json</a>
</ul>
<br>
<br>
<h2>Charts & Graph</h2>
<h3>Bar Charts & Line Graph ~ (Chris, Madina & Cody)<br>
https://github.com/basse058/Project-3-Overdose/BarCharts/barchart_index.html
<img width="533" alt="image" src="visualizations\InteractiveCharts.png"></h3>
<h5><i>* Linegraph includes JavaScript library previously unintroduced during class</i></h5></p>
<ul><li><b>Interactivity:</b> Data for each individual state can be viewed by selecting the state from the drop down list on the left.</li></ul>
<h3>Extract</h3>
<ul>
  <li>Opioid Prescription Data was scraped and saved as <a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/DispenseRate">DRState2013.csv to DRState2019.csv</a></li>
  <li>Overdose Data was scraped and saved as <a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/ODs">DeathState2014.csv to DeathState2020.csv</a></li>
</ul>
<h3>Transform</h3>
<ul>
  <li>Individual csv files read into pandas DataFrames,</li>
  <li>df column names standardized and extraneous columns dropped,</li>
  <li>dfs merged into a single df for each dataset:
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/ODisp2013_2019.csv">Opioid Prescription data from 2013-2019</a>, or</ul>
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/ODs/OpioidDeathsAll.csv">Opioid Deaths data from 2014-2019.</a></ul>
  <li>df for each dataset transposed into barchart-ready formats: </li>
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/ODispTransposed2013_2019.csv">Opioid Prescription data from 2013-2019</a>, or</ul>
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/Resources/ODs/OpioidDeathsAllTransposed.csv">Opioid Deaths data from 2014-2019.</a></ul>
</ul>
<h3>Load</h3>
<ul>
  <li>Transposed dfs saved as JSON files for website use.</li>
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/BarCharts/ODispTransposed2013_2019.json">Opioid Prescription data from 2013-2019</a>, or</ul>
    <ul><a href="https://github.com/basse058/Project-3-Overdose/blob/main/BarCharts/OpioidDeathsAllTransposed.json">Opioid Deaths data from 2014-2019.</a></ul>
</ul>
<br>
<br>
<h2>Presentation</h2>
<h3>Slideshow ~ (Madina)<br>
https://docs.google.com/presentation/d/1yLrDGqCc9DOo0mkTwuMQH3fmSIiOUHch/</h3>
<img src="assets/google-slides-presentation.jpg">
