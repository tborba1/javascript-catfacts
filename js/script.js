// Day 6 THC

fetch(`https://cat-fact.herokuapp.com/facts/random`)
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
    alert(body.text);
  });