const containerNames = document.querySelector('.container1');
const containerPrices = document.querySelector('.container2');
const containerOccupations = document.querySelector('.container3');
const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];

  const prices = [
    25,
    51,
    43,
    81,
    43,
    76,
    47,
    72
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

function NameOccPri() {
    const result = freelancers.map(freelancer => {
        const { name, price, occupation } = freelancer;
        return { name, price, occupation };
    });

    return result;
}

function containers(){
    freelancers.forEach(freelancer => {
        const name = document.createElement('p');
        name.textContent = freelancer.name;
        containerNames.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `$${freelancer.price}`;
        containerPrices.appendChild(price);

        const occupation = document.createElement('p');
        occupation.textContent = freelancer.occupation;
        containerOccupations.appendChild(occupation);
    });
}
containers();

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function addRandomFreelancer() {
    const randomName = getRandomItem(names);
    const randomOccupation = getRandomItem(occupations);
    const randomPrice = getRandomItem(prices);

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        price: randomPrice
    };

    freelancers.push(newFreelancer);
    updateContainers();
}

function updateContainers() {
    const newFreelancer = freelancers[freelancers.length - 1];

    const name = document.createElement('p');
    name.textContent = newFreelancer.name;
    containerNames.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `$${newFreelancer.price}`;
    containerPrices.appendChild(price);

    const occupation = document.createElement('p');
    occupation.textContent = newFreelancer.occupation;
    containerOccupations.appendChild(occupation);
}
setInterval(addRandomFreelancer, 1000);