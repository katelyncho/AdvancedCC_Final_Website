const ghibliData =
  "https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
// "https://ghibliapi.vercel.app/locations/"
// "https://ghibliapi.vercel.app/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe";
// "https://ghibliapi.vercel.app/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2";

fetch(ghibliData)
  .then((response) => response.json())
  .then(handleGhibliListFetch)
  .catch((error) => console.log(error));
// console.log(data);
// document.querySelector(".title").textContent = data.title;
// document.querySelector(".description").textContent = data.description;

function handleGhibliListFetch(data) {
  const ghibliList = Object.keys(data);
  const randomGhibli =
    ghibliList[Math.floor(Math.random() * ghibliList.length)];

  console.log(randomGhibli);

  fetch("https://ghibliapi.vercel.app/films/" + handleRandomGhibliFetch)
    .then((response) => response.json())
    .then(handleRandomGhibliFetch)
    .catch((error) => console.log(error));
}

function handleRandomGhibliFetch(data) {
  // for (let i = 0; i < data.length; i++) {
  //   const randomImage =
  //     data.message[Math.floor(Math.random() * data.message.length)];
  //   const image = document.createElement("img");
  //   image.src = randomImage;
  //   document.body.appendChild(image);
  // }

  const image = document.createElement("img");
  image.src = randomImage;
  document.body.appendChild(image);
}
