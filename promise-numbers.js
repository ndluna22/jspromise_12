const numbers = document.querySelector(".numbers");

let url = "http://numbersapi.com";

//1

axios
  .get(`${url}/23/trivia?json`) //include jsonquery key
  .then((res) => {
    console.log("first problem complete!");
    console.log(res.data);
  })
  .catch((err) => console.log("REJECTED!!", err));

//2

let multiplenum = [23, 5, 2, 3];

axios
  .get(`${url}/${multiplenum}/trivia?json`)
  .then((res) => {
    console.log("promise for mulitple numbers complete!");
    console.log(res.data);
  })
  .catch((err) => console.log("REJECTED!!", err));

//3

let numberpromises = [];
let searchurl = axios.get(`${url}/23/trivia?json`);

for (let i = 1; i < 5; i++) {
  numberpromises.push(searchurl);
}

Promise.all(numberpromises)
  .then((numArr) => {
    for (res of numArr) {
      console.log(res.data.name);
      numbers.append(res.data);
    }
  })
  .catch((err) => console.log(err)); //will return rejection error if master promise doesn't work
