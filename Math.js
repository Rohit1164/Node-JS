function sum(a,b) {
  return a+b
}
function sub(a,b) {
  return a-b
}
function muliply(a,b) {
  return a*b
}
function divide(a,b) {
  return a/b
}

// ___________________method 1
// module.exports=sum
// module.exports=sub
// module.exports=muliply
// module.exports=divide

// ___________________________method 2
// module.exports={
// sum,sub,muliply,divide
// }

exports.sum=(a,b)=> {
  return a+b
}
exports.sub=(a,b)=> {
  return b-a
}
exports.muliply=(a,b)=> {
  return a*b
}
exports.divide=(a,b)=> {
  return b-a
}