const cars = [
    {
        id: 1,
        make: 'Honda',
        model: 'Prelude',
        year: 2015,
        color: 'grey'
    },
    {
        id: 2,
        make: 'Ford',
        model: 'Mustang',
        year: 2012,
        color: 'black'
    },
    {
        id: 3,
        make: 'Toyota',
        model: 'Supra',
        year: 2022,
        color: 'white'
    },
    {
        id: 4,
        make: 'Chevrolet',
        model: 'Camaro',
        year: 2016,
        color: 'black'
    },
    {
        id: 5,
        make: 'BMW',
        model: 'Z4',
        year: 2021,
        color: 'silver'
    }
];

const getCars = () => {
    return cars;
};

const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return 'Car doesn\'t exist';
    }
};

const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return 'Car doesn\'t exist';
    }
};

module.exports = { getCars, getCarInformation, getCarAge };
