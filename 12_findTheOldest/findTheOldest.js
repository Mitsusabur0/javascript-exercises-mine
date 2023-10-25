const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]



const findTheOldest = function(people) {

    const sortedAges = people.sort(function(person1, person2) {
        if (!person1.yearOfDeath) {
            person1.yearOfDeath = new Date().getFullYear();
        }
        if (!person2.yearOfDeath) {
            person2.yearOfDeath = new Date().getFullYear();
        }
        return (person1.yearOfDeath - person1.yearOfBirth) - (person2.yearOfDeath - person2.yearOfBirth)
    });
    
    return sortedAges.reverse()[0];
};

findTheOldest(people);


/*

take first object,


*/




































// Do not edit below this line
module.exports = findTheOldest;
