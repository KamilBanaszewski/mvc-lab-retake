const http = require('http');
const { getCars, getCarInformation, getCarAge } = require('./cars');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Server is running on ${PORT}.`);

    res.setHeader('Content-Type', 'text/html');

    const cars = getCars();

    res.write(getHTMLDocumentStart());
    res.write('<body>');

    const carId = 3;
    const carInfo = getCarInformation(carId);
    res.write(`<p>${carInfo}</p>`);

    const carAge = getCarAge(carId);
    res.write(`<p>${carAge}</p>`);

    res.write('</body>');
    res.write(getHTMLDocumentEnd());

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
