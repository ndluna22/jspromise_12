let url = "https://deckofcardsapi.com/api/deck";

//1

axios
  .get(`${url}/new/draw/`) //include jsonquery key
  .then((res) => {
    console.log(res.data.cards[0].suit);
    console.log(res.data.cards[0].value);
  })
  .catch((err) => console.log("REJECTED!!", err));

//2

axios
  .get(`${url}/new/draw/`) //include jsonquery key
  .then((res) => {
    console.log(res.data.cards[0].suit);
    console.log(res.data.cards[0].value);
    let deckId = data.deck_id;
    return axios.get(`${url}/${deckId}/draw/`);
  })
  .then((res) => {
    console.log(res.data.cards[0].suit);
    console.log(res.data.cards[0].value);
  })
  .catch((err) => console.log("REJECTED!!", err));

//3


let deckId = null;
const button = document.querySelector(".button");
const deckcards = document.querySelector(".deckcards");

axios.get(`${url}/new/shuffle/`).then((data) => {
  deckId = data.deck_id;
  button.show();
});

button activate