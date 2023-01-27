//const urlLine = 'http://127.0.0.1:5000/api/v1.0/od_data'
const urlLine = 'https://project-3-h7kg.onrender.com/api/v1.0/od_data'

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
  // const userChoiceIndex = (element) => element == userChoice;//this is the testing function (find where list element = userChoice)
  // console.log(userChoiceIndex);
  // nameIndex = data.names.findIndex(userChoiceIndex);//takes the userChoice and finds the associated index number (0)
  // console.log(nameIndex);
  // // d3.select('.panel-body').html("");//clears out the demographic info 
  //run the following functions with the new nameIndex
/*   barChartPres(userChoice);
  barChartDeaths(userChoice); */
/*   lineChartDeaths(userChoice);
 */
});

const dataPromise = d3.json(urlLine);
console.log("Data Promise: ", dataPromise);

//let overdoses
d3.json(urlLine).then(function(dataC) {
  console.log(dataC)
  let state_data = dataC.filter(object => object.state == 'AL')
  let overdoses = LineGraph(state_data)
    console.log(overdoses)
    renderChart(overdoses)
})

//Line Graph
function LineGraph(rando) {
  let year2015 = [], year2016 = [], year2017=[], year2018=[], year2019=[], year2020=[], year2021=[], year2022=[];
  /* let dataAsJson = JSC.csv2Json(rando); */
  rando.forEach(function (row) {
/*       console.log(row)
 */  console.log(row.date)
    console.log(Date(row.date))    
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
  return [
    {name:'2015', points: year2015},
    {name:'2016', points: year2016},
    {name:'2017', points: year2017},
    {name:'2018', points: year2018},
    {name:'2019', points: year2019},
    {name:'2020', points: year2020},
    {name:'2021', points: year2021},
    {name:'2022', points: year2022}
  ];
}
/* console.log("Data Promise: ", rando); */
//NOTE: Have not worked on this yet- example code from web article
function renderChart(series) {
	JSC.Chart('chartDiv', {
		title_label_text: 'Preliminary Overdose Death Data 2015 - 2022',
		annotations: [{
			label_text: 'Source: CDC',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b> Deahts: ',
		series: series
	});
}