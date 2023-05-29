const express = require('express');
const app = express();
const port = 3000;
const books = require('./data/books.json');



//routes exercises

//1.Create a route /all to fetch all books
app.get('/all', (req, res) => {
    res.send(books);
});

//2.Create a route /first to fetch the first book
app.get('/first', (req, res) => {
    res.send(books[0]);
});

//3.Create a route /last to fetch the last book
app.get('/last', (req, res) => {
    res.send(books[books.length - 1]);
});

//4.Crate a route /middle to fetch the book in the middle (number 50 in the array)
app.get('/middle', (req, res) => {
    res.send(books[(books.length) / 2]);
});

//5.Create a route /author/dante-alighieri to fetch ONLY THE TITLE of Dante Alighieri's book
app.get('/author/dante-alighieri', (req, res) => {
    let title;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == 'Dante Alighieri') {
            title = books[i].title;
        }
    };
    res.send(title);
});

//6.Create a route /country/charles-dickens to fetch ONLY THE COUNTRY of Charles Dickens book
app.get('/country/charles-dickens', (req, res) => {
    let country;
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == "Charles Dickens") {
            country = books[i].country;
        };
    };
    res.send(country)
    console.log(country)

});


//7.Create a route /year&pages/cervantes to fetch PAGES AND YEAR of Miguel de Cervantes book, Response example: { pages: ..., year: ... }
app.get('/year&pages/cervantes', (req, res) => {
    let pages;
    let year;
    for (let book of books) {
        if (book.author == "Miguel de Cervantes") {
            pages = book.pages
            year = book.year
        }
    }
    res.send(`pages: ${pages}, year:${year}`);
});


//8.Create a route /country/count/spain to fetch THE NUMBER OF BOOK from Spain
app.get('/country/count/spain', (req, res) => {

    let nOfBooksFromSpain;
    for (let i = 0; i < books.length; i++) {
        if (books[i].country == "Spain") {
            nOfBooksFromSpain = books[i].length;
        };
    };
    res.json(nOfBooksFromSpain);
    console.log(nOfBooksFromSpain);
});


//*******END OF ROUTES********/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});