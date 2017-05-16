/**
 * Created by Suraj on 5/15/2017.
 */
var express = require('express');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bookSchema = Schema({
    title:{
        type: String,
        index: true
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    isbn:{
        type: String
    },
    publisher:{
        type: String
    },
    imagelink:{
        type: String
    },
    price:{
        type: String
    },
    reviews:[{
        comment:{
            type: String
        },
        rating:{
            type: Number
        },
        reviewBy:{
            type: String
        }
    }],
    booklink:{
        type: String
    },
    totalRating:{
        type: Number
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

mongoose.connect('mongodb://localhost/bookreaper');

var Books = [
    {
        "title": "Follow You Home",
        "author": "Mark Edwards",
        "genre": "Horror",
        "isbn": "1503944379",
        "publisher": "Thomas & Mercer, Seattle",
        "price" : "6.00",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/5172SCQ5VaL._SX332_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "Before You Sleep: Three Horrors",
        "author": "Adam Nevill",
        "genre": "Horror",
        "isbn": "5237457274",
        "publisher": "Ritual Limited",
        "price" : "4.56",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/41UHUiZauYL.jpg",
        "totalRating" : 5
    },

    {
        "title": "The Ghost Files (Volume 1)",
        "author": "Apryl Baker",
        "genre": "Horror",
        "isbn": "1680580594",
        "publisher": "Limitless Publishing, LLC",
        "price" : "3.75",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51yf2EGV8IL._SX311_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "Floor Four",
        "author": "A. Lopez Jr.",
        "genre": "Horror",
        "isbn": "0615787978",
        "publisher": "Limitless Publishing, LLC",
        "price" : "7.10",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51PSWMdY0AL._SX311_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "Don't Stop Me Now",
        "author": "Colleen Coleman",
        "genre": "Comedy",
        "isbn": "1786811479",
        "publisher": "Bookouture",
        "price" : "9.92",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/5153KJzIq5L._SX322_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "The Comedy Bible: From Stand-up to Sitcom",
        "author": "Judy Carter",
        "genre": "Comedy",
        "isbn": "0743201256",
        "publisher": "Fireside",
        "price" : "7.38",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51CDYR3JY8L._SX314_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "Dad Is Fat",
        "author": "Jim Gaffigan",
        "genre": "Comedy",
        "isbn": "0385349062",
        "publisher": "Three Rivers Press",
        "price" : "6.76",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/41spEiXVtNL._SX324_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "The Hidden Tools of Comedy",
        "author": "Steve Kaplan",
        "genre": "Comedy",
        "isbn": "1615931408",
        "publisher": "Michael Wiese Productions",
        "price" : "17.86",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/41WkOaPR5UL._SX332_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "The Sister: A psychological thriller",
        "author": "Louise Jensen",
        "genre": "Thriller",
        "isbn": "1786810021",
        "publisher": "Bookouture",
        "price" : "9.89",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/41LZRicQS3L._SX322_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "The Missing Ones: An absolutely gripping thriller",
        "author": "Patricia Gibney",
        "genre": "Thriller",
        "isbn": "1786810431",
        "publisher": "Bookouture",
        "price" : "0.99",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51UEDMjr1sL.jpg",
        "totalRating" : 5
    },

    {
        "title": "Breaker: (Charlie Cobb Book #1: Gripping Crime Thriller Series)",
        "author": "Rob Aspinall",
        "genre": "Thriller",
        "isbn": "1799810021",
        "publisher": "Breaker",
        "price" : "0.00",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51Gv-PM9DNL.jpg",
        "booklink": "/books/Breaker.pdf",
        "totalRating" : 5
    },

    {
        "title": "Any Means Necessary (a Luke Stone Thriller-Book #1)",
        "author": "Jack Mars",
        "genre": "Thriller",
        "isbn": "1786810923",
        "publisher": "Amazon",
        "price" : "12.99",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/41waLzf5PJL._SX311_BO1,204,203,200_.jpg",
        "totalRating" : 5
    },

    {
        "title": "Waiting: A PAVAD: FBI Prequel",
        "author": "Calle J. Brookes",
        "genre": "Romantic",
        "isbn": "17868010021",
        "publisher": "Lost River Lit Publishing, LLC",
        "price" : "1.00",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51ijIhi9JbL.jpg",
        "totalRating" : 5
    },

    {
        "title": "Her Best Match: A Romantic Comedy",
        "author": "Tamie Dearen",
        "genre": "Romantic",
        "isbn": "1998010021",
        "publisher": "Amazon",
        "price" : "0.00",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/417XRZwxdJL.jpg",
        "booklink": "/books/HerBestMatch.pdf",
        "totalRating" : 5
    },

    {
        "title": "Chasing Charlie: A Romantic Comedy",
        "author": "Kathy Carmichael",
        "genre": "Romantic",
        "isbn": "1722010021",
        "publisher": "Lost River Lit Publishing, LLC",
        "price" : "0.00",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/61UtGC5ANML.jpg",
        "booklink":"/books/ChasingCharlie.pdf",
        "totalRating" : 5
    },

    {
        "title": "Craving (Steel Brothers Saga Book 1)",
        "author": "Helen Hardt",
        "genre": "Romantic",
        "isbn": "1786822021",
        "publisher": "Waterhouse Press",
        "price" : "0.99",
        "imagelink": "https://images-na.ssl-images-amazon.com/images/I/51fSRTNnqXL.jpg",
        "totalRating" : 5
    }
];

var seed = express();

function seedBooks() {
    for(var i=0; i<Books.length; i++){
        var newBook = new Book(Books[i]);
        newBook.save();
    }
    console.log('Database Seeded');
    setTimeout(function () {
        process.exit(1);
    },2000);
}

seedBooks();
