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
containers()