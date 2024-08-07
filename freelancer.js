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

const maxJobbers = 8;
const currentJobbers = [
    { name: "Alice", price: 30, occupation: "writer" ,},
    { name: "Bob", price: 50, occupation: "teacher" ,},
]
const addJobberIntervalId = setInterval(addJobber, 2000);

render();

function render() {
    const jobbers = document.querySelector("#jobbers");
    const jobberInfo = currentJobbers.map((freelancer) => {
        const element = document.createElement("li");
        //element.classList.add(freelancer.name, freelancer.price, freelancer.occupation);
        element.textContent = freelancer.name + " " + freelancer.price + " " + freelancer.occupation;
        return element;
    });
    jobbers.replaceChildren(...jobberInfo);
    getMean(currentJobbers);
}

function addJobber() {
    const jobless = freelancers[Math.floor(Math.random() * freelancers.length)];
    currentJobbers.push(jobless);
    if (currentJobbers.length >= maxJobbers) {
        clearInterval(addJobberIntervalId);
        
    }
    render();    
}

function getMean(numbers) {
    const meanPrices = document.querySelector("#mean_prices");
    const initialValue = 0
    const sumTotal = numbers.reduce((acc, num) => acc + num.price, initialValue) / numbers.length;
    meanPrices.innerHTML=`Average price is ${parseInt(sumTotal)}`
}

getMean(currentJobbers)
