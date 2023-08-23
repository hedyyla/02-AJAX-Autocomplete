// TODO: Autocomplete the input with AJAX calls.
// listen to text input letter by letter on keyup
// pass the input into the api url
// fetch suggested results
// extract each word from word array
// display suggested results in ul list - add adjacent html and wrap in li
// clear list at the start of every new keyup fetch

const pullResults = (event) => {
  const searchTag = document.querySelector("#search");
  console.log(searchTag);
  const search = encodeURI(searchTag.value);
  console.log(search);
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${search}`)
    .then(response => response.json())
    .then((data) => {
      const wordsArray = data.words;
      const list = document.querySelector("#results");
      list.innerHTML = "";
      wordsArray.forEach((word) => {
        list.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
      });
    });
};

document.addEventListener("keyup", pullResults);
