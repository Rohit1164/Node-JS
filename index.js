// ___________________________Method 1

const math=require("./Math")

console.log(math)

// ___________________________Method 2

const { sum, sub, muliply, divide } =require("./Math")

console.log("Sum is ", sum(2,8))
console.log("Subtract is "+ sub(2,8))
console.log("MUltiplication is "+ muliply(2,8))
console.log(`Divide is ${divide(2,8)}`)