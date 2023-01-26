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
  // const userChoiceIndex = (element) => element == userChoice;//this is the testing function (find where list element = userChoice)
  // console.log(userChoiceIndex);
  // nameIndex = data.names.findIndex(userChoiceIndex);//takes the userChoice and finds the associated index number (0)
  // console.log(nameIndex);
  // // d3.select('.panel-body').html("");//clears out the demographic info 
  //run the following functions with the new nameIndex
  barChartPres(userChoice);
  barChartDeaths(userChoice);
  // CODYcharts(nameIndex);
});


// const stateAbb = 'AL'
const dataPromise = d3.json(urlPres);
console.log("Data Promise: ", dataPromise);

// console.log(stateAbb);
let Prescription
d3.json(urlPres).then(function(dataP) {
Prescription = dataP
    console.log(dataP.AK[0]);
    console.log(dataP.AK[3]);
    console.log(dataP['Opioid Dispense Rate'][0]);
    console.log(dataP['Opioid Dispense Rate'][3]);
    barChartPres(state);
});

//bar chart for drug prescription rates by state
function barChartPres(pillow) {
  let state = Prescription[pillow]
  let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5'],state['6']];

  // for (let i=0; i<7; i++) {
  //   bary.append(data[nameIndex][i])
  // };
  // for (dnI in data.nameIndex) {
  //   bary.append(data.nameIndex[dnI])
  // };//sample_values
  let barx = Prescription['Opioid Dispense Rate'];//otu_ids, use this to build string for chart
  // let barystr = []// use this for bar chart
  // bary.forEach(pear => barystr.push(`OTU_${pear}`));
  let barz = Prescription['Opioid Dispense Rate'];//otu_labels
  console.log(barx)
  console.log(bary)
  // console.log(barz)
  //color options
  let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
  let colorlist2 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma

  let trace1 = {
      x: barx,
      y: bary,
      text: barz,
      type: 'bar',
      orientation: 'v',
      marker:{color: colorlist2}
    };
    let data1 = [trace1];
    
    let layout1 = {
      // title: {text: `ID_${data.names[nameIndex]} Top 10 OTUs<br><sup>(Operational Taxonomic Units)</sup>`,font: { size: 24 } },
      showlegend: false,
      height: 400,
      width: 500,
      xaxis: {title:"Opioid Dispense Rate"},
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

  // let state = dataD[stateAbb]
  //   console.log(state)
  barChartDeaths(state);

});

function barChartDeaths(bob) {
  let state = Deaths[bob]
  let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5'],state['6']];

  // for (let i=0; i<7; i++) {
  //   bary.append(data[nameIndex][i])
  // };
  // for (dnI in data.nameIndex) {
  //   bary.append(data.nameIndex[dnI])
  // };//sample_values
  let barx = Deaths['Number_of_Deaths_by_Year'];//otu_ids, use this to build string for chart
  // let barystr = []// use this for bar chart
  // bary.forEach(pear => barystr.push(`OTU_${pear}`));
  let barz = Deaths['Number_of_Deaths_by_Year'];//otu_labels
  console.log(barx)
  console.log(bary)
  // console.log(barz)
  //color options
  let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
  let colorlist2 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma

  let trace1 = {
      x: barx,
      y: bary,
      text: barz,
      type: 'bar',
      orientation: 'v',
      marker:{color: colorlist2}
    };
    let data1 = [trace1];
    
    let layout1 = {
      // title: {text: `ID_${data.names[nameIndex]} Top 10 OTUs<br><sup>(Operational Taxonomic Units)</sup>`,font: { size: 24 } },
      showlegend: false,
      height: 400,
      width: 500,
      xaxis: {title:"Number of Deaths per Year"},
      margin: { t: 50, r: 25, l: 75, b: 35},
      paper_bgcolor: "aliceblue",
      font: { color: "darkblue", family: "Arial" }
    };

    Plotly.newPlot("gauge", data1,layout1)};

