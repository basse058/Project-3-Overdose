// let result = $.csv.toArrays(ODisp2013_2019.csv);
// console.log(result)

// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const urlPres = 'ODispTransposed2013_2019.json'
const urlDeaths = 'OpioidDeathsAllTransposed.json'

// create drop down list
const ddlList = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
let myddl = d3.select('select');
  // Create DDL from names list - working code option 2 - keep for future reference
  Object.entries(ddlList).forEach(([key,value])=> {
    currentValue = value;
    console.log(currentValue)
    let newOption = d3.select('select').append('option');
    newOption.attr('value',currentValue)
    newOption.text(currentValue)
  });

let state = 'AL'

let dropdown = d3.select("#selDataset");//selects by html id
dropdown.on("change", function() {//when there is a change in the selection, do the function
  userChoice = this.value; //captures the userChoice from the ddl as the Test Sample ID (940)
  console.log(userChoice);
  barChartPres(userChoice);//reruns the barChartPres with the userChoice state
  barChartDeaths(userChoice);//reruns the barChartDeaths with the userChoice state
  // CODYcharts(nameIndex);
});



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
  '#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'];
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
      paper_bgcolor: "aliceblue",
      font: { color: "darkblue", family: "Arial" }
    };

    Plotly.newPlot("bar", data1,layout1)};









//deaths
const dataPromise2 = d3.json(urlDeaths);
console.log("Data Promise: ", dataPromise2);

// console.log(stateAbb);
let Deaths

d3.json(urlDeaths).then(function(dataD) {
Deaths= dataD
    console.log(dataD.AK[0]);
    console.log(dataD.AK[3]);
    console.log(dataD['Number_of_Deaths_by_Year'][0]);
    console.log(dataD['Number_of_Deaths_by_Year'][3]);
    barChartDeaths(state);
  // let state = dataD[stateAbb]
  //   console.log(state)
  

});

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
    '#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'];

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
      paper_bgcolor: "aliceblue",
      font: { color: "darkblue", family: "Arial" }
    };

    Plotly.newPlot("gauge", data1,layout1)};

