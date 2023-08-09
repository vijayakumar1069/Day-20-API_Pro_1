const url = "https://www.balldontlie.io/api/v1/players";
const url1 = "https://restcountries.com/v3.1/all";

var m = fetch(url)
  .then((response) => response.json())
  .then((res1) => {
    console.log(res1.data);
    res1.data.map((data1) => {
      var spreadOperator = {
        fname: data1.first_name,
        lname: data1.last_name,
        id: data1.team.id,
      };
      console.log(spreadOperator.id);
      createplayer(spreadOperator);
    });
  })
  .catch((err) => console.log(err));

function createplayer({ fname, lname, id }) {
  document.body.innerHTML += `<div class="container">
    <h1 class="fname">${fname} ${lname} </h1>
    
    
    
    <a href="#" class="btn btn-primary" id="sub" onclick=(block(${id})) >Player Details</a>

    
    </div>`;
}

function block(id) {
  var Purl = `https://www.balldontlie.io/api/v1/players/${id}`;
  fetch(Purl)
    .then((response) => response.json())
    .then((data) => {
      alert(`
        Player Name:${data.first_name} ${data.last_name}
        Position:  ${data.position}
        City:  ${data.team.city}`);
    });
}
document.addEventListener("click", (event) => event.preventDefault);
