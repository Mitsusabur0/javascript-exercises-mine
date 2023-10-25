const getTheTitles = function(books) {
    const titles = books.map((book) => book.title);
    console.log(titles);
    return(titles);



};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
getTheTitles(books);


/*
arg is an array of objects
from each object, get one property and put in a new array

*/



























// Do not edit below this line
module.exports = getTheTitles;
