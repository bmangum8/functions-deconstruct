/* 
plants from seed
*/

// const obtainSeeds = () => {
//     console.log(`Library seed exchange`)
// }


// const prepareSoil = () => {
//     console.log(`Mix compost, garden soil, and seed starter`)
// }

// const seedInSoil = () => {
//     console.log(`check directions for depth`)
// }

// const water = () => {
//     console.log(`water after in soil and at least weekly after`)
// }

// const watchForSeedling = () => {
//     console.log(`after 2-6 weeks seedlings will show`)
// }

// const spaceOut = () => {
//     console.log(`when seedlings get big, space them out`)
// }

// const enjoyPlants = () => {
//     console.log(`water regularly and enjoy`)
// }

// obtainSeeds()
// prepareSoil()
// seedInSoil()
// water()
// watchForSeedling()
// spaceOut()
// enjoyPlants()

// const add = (firstNumber, secondNumber) => {
//     const sum = firstNumber + secondNumber
//     return sum
// }

// let result = add(17, 9)
// console.log(result)
// > 26

// const subtract = (firstNumber, secondNumber) => {
//     const difference = firstNumber - secondNumber
//     return difference
// }
   
// let resultSubtract = subtract(17, 9)
// console.log(resultSubtract) //shows 8


// const divide = (firstNumber, secondNumber) => {
//     const quotient = firstNumber/secondNumber
//     return quotient
// }

// let resultDivide = divide(18, 9)
// console.log(resultDivide)


// const multiply = (firstNumber, secondNumber) => {
//     const product = firstNumber * secondNumber
//     return product
// }

// let resultMultiply = multiply(8, 9)
// console.log(resultMultiply)



// const square = (number) => {
//     const numberSquared = number * number
//     return numberSquared
// }

// let resultSquare = square(8)
// console.log(resultSquare)

//*****come back to this one****** */
// A quarter of the animals on a farm have four legs. 
// The remaining three quarters of the animals have two legs. 
// If there are 60 legs overall, 
// how many animals are there on the farm?

//(0.25x * 4) + (0.75x * 2) = 60
// let fourLeggedAnimals = multiply(.25x, 4)
// console.log(fourLeggedAnimals)



//Book 2, Column 1, Number 5

// const createChassis = () => { // No parameters defined because function needs nothing to do its job
// 	const chassisObject = {	} // Create a new object. No properties yet.
// 	return chassisObject 
// }
// const chassis = createChassis()
// console.log(chassis) //shows empty curly brackets 

// const addWheels = (chassis) => {
//     chassis.wheels = "4"
//     return chassis.wheels
// }
// let chassisWithWheels = addWheels(chassis)
// console.log(chassisWithWheels)


// const addBody = (chassis) => {
// 	chassis.body = "Fever" // Use dot notation to add a new property
// 	return chassis.body // Return the chassis that now has a body property on it
// }
// let chassisWithBody = addBody(chassis)
// console.log(chassisWithBody)


// const addEngine = (chassis) => {
//     chassis.engine = "4.8L"
//     return chassis.engine
// }
// let chassisWithEngine = addEngine(chassis)
// console.log(chassisWithEngine)


// const addSteeringWheel = (chassis) => {
//     chassis.steeringWheel = "Tilting"
//     return chassis.steeringWheel
// }
// let chassisWithSteeringWheel = addSteeringWheel(chassis)
// console.log(chassisWithSteeringWheel)


// const addDriveTrain = (chassis) => {
//     chassis.driveTrain = "Two wheel drive"
//     return chassis.driveTrain
// }
// let chassisWithDriveTrain = addDriveTrain(chassis)
// console.log(chassisWithDriveTrain)

// console.log(chassis) //works! Adds key value pairs to chassis object


/*Book 2, column 1, number 6*/

// const buyChocolate = () => {  //Define function named buyChocolate, no parameters
//     const candyObject = {
//         type: "Milk Chocolate"
//     }
//     return candyObject //return an object with a type property whose value is "Milk chocolate"
// }
// const makeCandy = buyChocolate()
//console.log(makeCandy) //shows {type: 'Milk Chocolate'}




// const addFlavoring = (taco) => {  //Define a function named addFlavoring, one parameter (does not matter what name) to accept an object as input
//     taco.flavor = "Mint" //add a new flavor property to the object with a value of "Mint"
//     return taco
// }
//let candyWithFlavor = addFlavoring(makeCandy)
// console.log(candyWithFlavor) //adds { flavor: 'Mint' } to makeCandy object


// const makeBarkMixture = (taco) => { //Define a function named makeBarkMixture, one parameter
//         if (taco.flavor === "Mint") { //If flavor property equals "Mint", add new mixed property with value of true
//             taco.mixed = "true"
//         } else {
//            taco.mixed = "false" //If flavor is not "Mint" then property value should be false
//         }
// return taco
// }
// const withBarkMix = makeBarkMixture(makeCandy)
//console.log(withBarkMix) //works! adds {mixed: true} to makeCandy object

 

// const bakeCandy = (taco) => { //Define a function named bakeCandy. It should have one parameter 
//     if (taco.mixed === "true") { //check if the mixed property on the incoming object has a value of true
//         taco.baked = "true" //If it does, then add a baked property to the object with a value of true
//     } else {
//         taco.baked = "false"    //If the mixed property is not true, then add a baked property with a value of false.
//     }
// return taco
// }
// const withBakeCandy = bakeCandy(makeCandy)
//console.log(withBakeCandy)


// const breakBark = (taco) => { //Define a function named breakBark, one parameter
//     if (taco.baked === "true") { //If the incoming object's baked property is true, the function should return a new array with 6 strings in it.
//         const pieces = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
//         return pieces
//         //Each string should be "Mint Chocolate Bark Piece"
//     }
// }
// const withBreakBark = breakBark(makeCandy)
// console.log(withBreakBark)
 


/*Book 2, column 1, number 7*/
/*
It's an object representing an Apple Macbook Pro computer. 
*/

const computer = { 
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const htmlRepresentation = (taco) => {  //define a function that takes that object as input (needs a parameter)
const computerInfo = `<section id = "computer--${taco.id}">\n
<h1>${taco.manufacturer} ${taco.make}</h1>\n
<div>Model: ${taco.model} </div>\n
<div>Memory: ${taco.specs.memory} GB</div>\n
<div>Hard drive space: ${taco.specs.hardDrive}</div>\n
<div>Processor speed ${taco.specs.processor} Ghz</div>\n
</section>`
return computerInfo
}

const htmlRepresents = htmlRepresentation(computer)
console.log(htmlRepresents)

/* 
returns the following HTML representation of that computer.
<section id="computer--1"> //id property of the computer
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */