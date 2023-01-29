// Project 3 barcharts and linechart - interactive using state drop down list

const urlPres = 'ODispTransposed2013_2019.json'
const urlDeaths = 'OpioidDeathsAllTransposed.json'
const urlLine = 'https://project-3-h7kg.onrender.com/api/v1.0/od_data'


// create drop down list
const ddlList = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
let myddl = d3.select('select');
  // Create DDL from names list - working code option 2 - keep for future reference
  Object.entries(ddlList).forEach(([key,value])=> {
    currentValue = value;
    // console.log(currentValue)
    let newOption = d3.select('select').append('option');
    newOption.attr('value',currentValue)
    newOption.text(currentValue)
  });

//interactive charts will start by showing state = 'AL'
let state = 'AL'

//create interactive drop down list that will update the bar charts and line chart
let dropdown = d3.select("#selDataset");//selects by html id
dropdown.on("change", function() {//when there is a change in the selection, do the function
  userChoice = this.value; //captures the userChoice from the ddl as the Test Sample ID (940)
  console.log(userChoice);
  barChartPres(userChoice);//reruns the barChartPres with the userChoice state
  barChartDeaths(userChoice);//reruns the barChartDeaths with the userChoice state
  //line chart has two functions
  let overdoses = LineGraph(lineData,userChoice)
  console.log(overdoses)
  renderChart(overdoses,userChoice)
});


//get data for prescriptions barchart
const dataPromise = d3.json(urlPres); 
console.log("Data Promise: ", dataPromise);

let Prescription //stores data from ODispTransposed2013_2019.json  - will be available to all functions
d3.json(urlPres).then(function(dataP) {
Prescription = dataP
    console.log(dataP.AK[0]);
    console.log(dataP.AK[3]);
    console.log(dataP['Year'][0]);
    console.log(dataP['Year'][3]);
    barChartPres(state);
}); //this call function pulls the data from ODispTransposed2013_2019.json

//bar chart for drug prescription rates by state
function barChartPres(stateAbb) {
  let state = Prescription[stateAbb]
  let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5'],state['6']];
  let xlist = Prescription['Year']
  let barx = [xlist[0],xlist[1],xlist[2],xlist[3],xlist[4],xlist[5],xlist[6]];
  let barz = [xlist[0],xlist[1],xlist[2],xlist[3],xlist[4],xlist[5],xlist[6]];
  console.log(barx)
  console.log(bary)
  console.log(barz)
  //color options
  let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
  let colorlist2 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma
  let colorlist3 = [
    // '#fff5f0', '#fee0d2',
  '#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'] //oranges and reds
  let colorlist4 = [
  //'#f7fbff','#deebf7',
  '#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'];//blues
  let trace1 = {
      x: barx,
      y: bary,
      text: barz,
      type: 'bar',
      orientation: 'v',
      marker:{color: colorlist3}
    };
    let data1 = [trace1];
    
    let layout1 = {
      title: {text: `Opioid Prescription Dispense Rate for ${stateAbb}`},
      showlegend: false,
      height: 400,
      width: 500,
      xaxis: {title:"ODR",
              ticks:'outside',
              tick0:'2013',
              dtick: 1
            },
      margin: { t: 50, r: 25, l: 75, b: 35},
      paper_bgcolor: "white",
      font: { color: "black", family: "Arial" }
    };

    Plotly.newPlot("bar", data1,layout1)};


//get data for overdose deaths barchart
const dataPromise2 = d3.json(urlDeaths);
console.log("Data Promise: ", dataPromise2);

let Deaths//stores data from OpioidDeathsAllTransposed.json  - will be available to all functions

d3.json(urlDeaths).then(function(dataD) {
Deaths= dataD
    console.log(dataD.AK[0]);
    console.log(dataD.AK[3]);
    console.log(dataD['Number_of_Deaths_by_Year'][0]);
    console.log(dataD['Number_of_Deaths_by_Year'][3]);
    barChartDeaths(state);

});

//bar chart for overdose deaths by state
function barChartDeaths(stateAbb) {
  let state = Deaths[stateAbb]
  let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5']];
  let xlist = Deaths['Number_of_Deaths_by_Year'];
  let barx = [xlist[0],xlist[1],xlist['2'],xlist['3'],xlist['4'],xlist['5']];
  let barz = [xlist[0],xlist[1],xlist['2'],xlist['3'],xlist['4'],xlist['5']];
  console.log(barx)
  console.log(bary)
  // console.log(barz)
  //color options
  let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
  let colorlist2 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma
  let colorlist3 = [
    // '#fff5f0', '#fee0d2',
    '#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'] //oranges and reds
  let colorlist4 = [
    //'#f7fbff','#deebf7',
    '#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'];//blues

  let trace1 = {
      x: barx,
      y: bary,
      text: barz,
      type: 'bar',
      orientation: 'v',
      marker:{color: colorlist3}
    };
    let data1 = [trace1];
    
    let layout1 = {
      title: {text: `Number of Overdose Deaths per Year for ${stateAbb}`},
      showlegend: false,
      height: 400,
      width: 500,
      xaxis: {title:"Overdose Deaths",
              ticks:'outside',
              tick0:'2014',
              dtick: 1
            },
      margin: { t: 50, r: 25, l: 75, b: 35},
      paper_bgcolor: "white",
      font: { color: "black", family: "Arial" }
    };

    Plotly.newPlot("gauge", data1,layout1)};


// Cody's LineChart - pulls from SQLite db on Render
const dataPromise3 = d3.json(urlLine);
console.log("Data Promise: ", dataPromise3);

let lineData
d3.json(urlLine).then(function(dataC) {
  console.log(dataC)
  lineData = dataC
  let overdoses = LineGraph(lineData,state)
    console.log(overdoses)
    renderChart(overdoses,state)
})

console.log(lineData)
//Line Graph
//CG- added in StateOfChoice to use for interactive chart title
function LineGraph(lineData, stateOfChoice) {
  let state_data = lineData.filter(object => object.state == stateOfChoice);
  let year2015 = [], year2016 = [], year2017=[], year2018=[], year2019=[], year2020=[], year2021=[], year2022=[];
  /* let dataAsJson = JSC.csv2Json(rando); */
  state_data.forEach(function (row) {
    //    console.log(row)
    // console.log(row.date)
    // console.log(Date(row.date))    
        if(row.year == '2015') {
        year2015.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2016') {
        year2016.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2017') {
        year2017.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2018') {
        year2018.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2019') {
        year2019.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2020') {
        year2020.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2021') {
        year2021.push({x: row.month, y:row.overdose_deaths});
      } else if (row.year =='2022') {
        year2022.push({x: row.month, y:row.overdose_deaths});
      }
    });
    
    console.log(year2022)

    //CG -data from db is not in order - add this step to order by Month number so chart can draw a pretty line
    const year2015sort = Object.values(year2015).sort((a, b) => a.x - b.x);
    const year2016sort = Object.values(year2016).sort((a, b) => a.x - b.x);
    const year2017sort = Object.values(year2017).sort((a, b) => a.x - b.x);
    const year2018sort = Object.values(year2018).sort((a, b) => a.x - b.x);
    const year2019sort = Object.values(year2019).sort((a, b) => a.x - b.x);
    const year2020sort = Object.values(year2020).sort((a, b) => a.x - b.x);    
    const year2021sort = Object.values(year2021).sort((a, b) => a.x - b.x);
    const year2022sort = Object.values(year2022).sort((a, b) => a.x - b.x);

    console.log(year2015sort)
    console.log(year2016sort)
    console.log(year2017sort)
    console.log(year2018sort)
    console.log(year2019sort)
    console.log(year2020sort)
    console.log(year2021sort)
    console.log(year2022sort)

  return [
    {name:'2015', points: year2015sort},
    {name:'2016', points: year2016sort},
    {name:'2017', points: year2017sort},
    {name:'2018', points: year2018sort},
    {name:'2019', points: year2019sort},
    {name:'2020', points: year2020sort},
    {name:'2021', points: year2021sort},
    {name:'2022', points: year2022sort}
  ];
}

function renderChart(series,stateOfChoice) {
	JSC.Chart('bubble', {
		title_label_text: `Preliminary Overdose Death Data 2015 - 2022 for ${stateOfChoice}`,
		annotations: [{
			label_text: 'Source: CDC',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b> Deaths: ',
		series: series
	});
}

