// Day 6 THC

// fetch(`https://cat-fact.herokuapp.com/facts/random`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//     alert(body.text);
//   });


// Day 7 THC

let btn = document.createElement("button");
btn.innerHTML = "Click here for a random cat fact!";
document.body.appendChild(btn);

btn.setAttribute("id", "btn");

document.getElementById("btn").addEventListener("click", catFacts);

function catFacts() {
  fetch(`https://cat-fact.herokuapp.com/facts/random`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      // console.log(body);
      // alert(body.text);

      let fact = document.getElementById("randomCat");
      fact.innerHTML = body.text;
      document.body.appendChild(fact);
    });
}