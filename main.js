const userFormData = {
    username: "kenyatta_the_barbarian",
    email: "kenyatta97@hotmail.com",
    age: 68,
    favoriteBooks: ["Harry Potter", "Goodnight, Moon", "The Way of Suffering: A Geography of Crisis"],
}

let mrBubz = {
    species: "dog",
    eyeDirections: 2,
    anger: Infinity,
}

const console = {
    log: function log (...data) { 
        document.body.append(...data)
    },
    assert: function (assertion, msg, ...substrings) { /* ... */ },
    dir: function (obj) { /* ... */ },
}

console.log("hahaha", "I GOT YOU", "Mr. Bubz")

let pets = {
    0: "Mr. Bubz",
    1: "Garfield",
    2: "Grumpy Cat",
    3: "Wilfred",
    4: "Gabe the Dog",
    5: "Lil Bub",
    length: 6,
}

for (let index = 0; index < pets.length; index += 1) {
   const currentPet = pets[index] 

   console.log(currentPet)
}

// pets.forEach(pet => console.log(pet))

// All Arrays are Objects. But not all Objects are Arrays.
// Arrays are Objects with extra added tools and behavior.
// Plain Objects ("Plain Old JavaScript Objects," a.k.a "POJOs" 
// are just generic objects).



// ACCESSING PROPERTIES ON AN EXISTING OBJECT:
console.log(userFormData.username);  // Dot notation
console.log(userFormData["username"]);  // Bracket notation

let requestedData = "username";
console.log(userFormData[requestedData]);  // Bracket notation again