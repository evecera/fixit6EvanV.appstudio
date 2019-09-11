let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(petNames)

petNames.splice(5,1)
console.log(petNames)

petNames.splice(3,1)
console.log(petNames)

petNames.unshift("Nancy")
console.log(petNames)

petNames.push("Evan")
console.log(petNames)

console.log(petNames.indexOf("Riley"))

console.log(petNames.indexOf("Cindy"))

let withMarmaduke = petNames.concat("Marmaduke")
console.log(withMarmaduke)