// let result = $.csv.toArrays(ODisp2013_2019.csv);
// console.log(result)

// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const urlPres = '../ODispTransposed2013_2019.json'
const urlDeaths = '../OpioidDeathsAllTransposed.json'
const stateAbb = 'AL'

const dataPromise = d3.json(urlPres);
console.log("Data Promise: ", dataPromise);

console.log(stateAbb);

d3.json(urlPres).then(function(dataP) {

    console.log(dataP.AK[0]);
    console.log(dataP.AK[3]);
    console.log(dataP['Opioid Dispense Rate'][0]);
    console.log(dataP['Opioid Dispense Rate'][3]);

  let state = dataP[stateAbb]
    console.log(state)

function barChartPres(dataP) {
    let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5'],state['6']];

    // for (let i=0; i<7; i++) {
    //   bary.append(data[nameIndex][i])
    // };
    // for (dnI in data.nameIndex) {
    //   bary.append(data.nameIndex[dnI])
    // };//sample_values
    let barx = dataP['Opioid Dispense Rate'];//otu_ids, use this to build string for chart
    // let barystr = []// use this for bar chart
    // bary.forEach(pear => barystr.push(`OTU_${pear}`));
    let barz = dataP['Opioid Dispense Rate'];//otu_labels
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
  barChartPres(state);
});


// const dataPromise2 = d3.json(urlDeaths);
// console.log("Data Promise: ", dataPromise2);

// console.log(stateAbb);

// d3.json(urlDeaths).then(function(dataD) {

//     console.log(dataD.AK[0]);
//     console.log(dataD.AK[3]);
//     console.log(dataD['Opioid Dispense Rate'][0]);
//     console.log(dataD['Opioid Dispense Rate'][3]);

//   let state = dataD[stateAbb]
//     console.log(state)

// function barChartPres(dataP) {
//     let bary = [state[0],state[1],state['2'],state['3'],state['4'],state['5'],state['6']];

//     // for (let i=0; i<7; i++) {
//     //   bary.append(data[nameIndex][i])
//     // };
//     // for (dnI in data.nameIndex) {
//     //   bary.append(data.nameIndex[dnI])
//     // };//sample_values
//     let barx = dataP['Opioid Dispense Rate'];//otu_ids, use this to build string for chart
//     // let barystr = []// use this for bar chart
//     // bary.forEach(pear => barystr.push(`OTU_${pear}`));
//     let barz = dataP['Opioid Dispense Rate'];//otu_labels
//     console.log(barx)
//     console.log(bary)
//     // console.log(barz)
//     //color options
//     let colorlist = [ 'red','orangered','orange', 'yellow','yellowgreen', 'green','blue','mediumblue','rebeccapurple','indigo'];//pairs with Jet and Portland
//     let colorlist2 = ['#f0f921','#fdca26','#fb9f3a','#ed7953','#d8576b','#bd3786','#9c179e','#7201a8','#46039f','#0d0887']//reverse plasma

//     let trace1 = {
//         x: barx,
//         y: bary,
//         text: barz,
//         type: 'bar',
//         orientation: 'v',
//         marker:{color: colorlist2}
//       };
//       let data1 = [trace1];
      
//       let layout1 = {
//         // title: {text: `ID_${data.names[nameIndex]} Top 10 OTUs<br><sup>(Operational Taxonomic Units)</sup>`,font: { size: 24 } },
//         showlegend: false,
//         height: 400,
//         width: 500,
//         xaxis: {title:"Opioid Dispense Rate"},
//         margin: { t: 50, r: 25, l: 75, b: 35},
//         paper_bgcolor: "aliceblue",
//         font: { color: "darkblue", family: "Arial" }
//       };

//       Plotly.newPlot("gauge", data1,layout1)};
//   barChartPres(state);
// });