// const ghibliLocations = "https://ghibliapi.vercel.app/locations";
// const ghibliSpecies = "https://ghibliapi.vercel.app/species";
// const ghibliVehicles = "https://ghibliapi.vercel.app/vehicles";

// fetch(ghibliLocations)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch(ghibliSpecies)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch(ghibliVehicles)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// locations[]: climate, name, residents, surface_water, terrain
// species[]: name, classification, gender, age, eye_colors, hair_colors
// vehicles[]: vehicle_class,or none

// ------------------

const locationURL = "https://ghibliapi.vercel.app/locations";
const speciesURL = "https://ghibliapi.vercel.app/species";
const vehiclesURL = "https://ghibliapi.vercel.app/vehicles";

const ghibliProfile = {
  species: {},
  location: {},
  vehicle: {},
};

function loadRandomGhibliData() {
  document.getElementById("output").textContent = "";

  fetch(speciesURL)
    .then((res) => res.json())
    .then((data) => {
      handleSpeciesFields(data);
      return fetch(locationURL);
    })
    .then((res) => res.json())
    .then((data) => {
      handleLocationFields(data);
      return fetch(vehiclesURL);
    })
    .then((res) => res.json())
    .then((data) => {
      handleVehicleFields(data);
    })
    .catch((err) => console.error("Error:", err));
}

function handleSpeciesFields(data) {
  const getRandomValue = (field) => {
    const nonNull = data.map((sp) => sp[field]).filter((v) => v !== undefined);
    return nonNull[Math.floor(Math.random() * nonNull.length)];
  };

  const pickOneFromCommaList = (value) => {
    if (!value) return "Unknown";
    const items = value
      .split(",")
      .map((v) => v.trim())
      .filter((v) => v !== "");
    return items[Math.floor(Math.random() * items.length)];
  };

  const name = getRandomValue("name");
  const classification = getRandomValue("classification");
  const gender = getRandomValue("gender");
  const age = getRandomValue("age");
  const eyeColor = pickOneFromCommaList(getRandomValue("eye_colors"));
  const hairColor = pickOneFromCommaList(getRandomValue("hair_colors"));

  ghibliProfile.species = {
    name,
    classification,
    gender,
    age,
    eyeColor,
    hairColor,
  };

  displayOutput("Species", {
    Name: name,
    Classification: classification,
    Gender: gender,
    Age: age,
    "Eye Color": eyeColor,
    "Hair Color": hairColor,
  });
}

function handleLocationFields(data) {
  const getRandomValue = (field) => {
    const nonNull = data
      .map((loc) => loc[field])
      .filter((v) => v !== undefined);
    return nonNull[Math.floor(Math.random() * nonNull.length)];
  };

  const name = getRandomValue("name");
  const climate = getRandomValue("climate");
  const residents = (getRandomValue("residents") || []).join(", ") || "None";
  const surfaceWater = getRandomValue("surface_water");
  const terrain = getRandomValue("terrain");

  ghibliProfile.location = {
    name,
    climate,
    residents,
    surfaceWater,
    terrain,
  };

  displayOutput("Location", {
    Name: name,
    Climate: climate,
    Residents: residents,
    "Surface Water": surfaceWater,
    Terrain: terrain,
  });
}

function handleVehicleFields(data) {
  const getRandomValue = (field) => {
    if (data.length === 0) return "none";
    const nonNull = data.map((v) => v[field]).filter((v) => v !== undefined);
    return nonNull.length > 0
      ? nonNull[Math.floor(Math.random() * nonNull.length)]
      : "none";
  };

  const vehicleClass = getRandomValue("vehicle_class");

  ghibliProfile.vehicle = {
    vehicleClass,
  };

  displayOutput("Vehicle", {
    "Vehicle Class": vehicleClass,
  });

  const s = ghibliProfile.species;
  const l = ghibliProfile.location;
  const v = ghibliProfile.vehicle;

  const summary = `

  You are a ${s.age} years old ${s.gender.toLowerCase()} ${
    s.name
  } with ${s.eyeColor.toLowerCase()} eyes and ${s.hairColor.toLowerCase()} colored hair.
  You live at ${l.name} in ${
    l.terrain
  }, which is ${l.climate.toLowerCase()} and is above ${
    l.surfaceWater
  } surface water.
  You use ${v.vehicleClass.toLowerCase()} for transportation.`;

  document.getElementById("output").textContent += summary;
}

function displayOutput(category, info) {
  const output = document.getElementById("output");
  let result = `\n${category}:\n`;
  for (let key in info) {
    result += `- ${key}: ${info[key]}\n`;
  }
  output.textContent += result;
}
