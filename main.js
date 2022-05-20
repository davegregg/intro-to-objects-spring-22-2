"use strict"

// "OBJECT" synonyms:
//   - Key-Value Pair
//   - Dictionary
//   - Hash/HashMap
//   - Associative Array (an array with names instead of indexes)
//   - POJO (Plain Old JavaScript Object)

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
console.log(userFormData.username)  // Dot notation
let username = userFormData["username"]  // Bracket notation
let firstName = userFormData["1stName"]

let getRequestFromBackendServer = function () { /* ... */ }
let requestedData = getRequestFromBackendServer()
let targetData = userFormData[requestedData]  // Bracket notation again


let createUser = function (username, email, age, favoriteBooks) {
    let user = {
        username: username,
        email: email,
        age: age,
        favoriteBooks: favoriteBooks
    }

    return user
}


// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
function validateWord (string) {
    const lowerCasedString = string.toLocaleLowerCase()
    const counts = {}
    
    for (const char of lowerCasedString) {
      if (counts.hasOwnProperty(char)) {
        counts[char] += 1
      } else {
        counts[char] = 1
      }
    }
    
    console.log(counts)
    
    const values = Object.values(counts)
    const isEqual = (value) => value === values[0]
    
    return values.every(isEqual)
    
    // let firstValue = null
    // for (const key in counts) {
    //   const value = counts[key]
    // 
    //   if (firstValue === null) {
    //     firstValue = value
    //   } else {
    //     if (value !== firstValue) {
    //       return false
    //     }
    //   }
    // }
    // 
    // return true

    // const values = Object.values(counts)
    // const uniqueValueCount = new Set(values).size
    // return uniqueValueCount === 1
}




const tennisBall = Object.freeze({
    brand: "Wilson",
    type: 4,
    color: "chartreuse",
    peeled: false,
    condition: "mild wear",
})

// tennisBall.brand = "WILLLSSOON!"

console.log(tennisBall)


// If you are looking for the Pokémon JSON thing,
// look for the file "pokemon.js" in this project!


