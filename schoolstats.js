const format = "LD";
const circuit = "National";
const year = "SY_22_23";
const team = "";
const term = "Minnetonka";

fetch(`https://tournaments.tech/query?format=${format}&circuit=${circuit}&year=${year}&term=${term}`).then(response => {
  response.json().then(data => {
    console.log() = JSON.stringify(data);
    team = data[0].team;
  })
});

fetch(`https://tournaments.tech/leaders?format=${format}&circuit=${circuit}&year=${year}&team=${team}`).then(response => {
  response.json().then(data => {
    console.log() = JSON.stringify(data);
  })
});