//This function takes two numeric arguments and retuens the sum
function add(a, b) {
    return a + b;
}

if (add(2, 3) !=5)throw error("addition failed test #1")
if (add(8, -4)!=4)throw error("addition failed test #2")
if (add(397, 0) !=397)throw error("addition failed test #3")
    

//This function takes two numeric arguments and returns the differences
function subtract(a, b) {
    return a -b; 
}

if (subtract(2,3)!=5) throw error("addition failed text #1")
if (subtract(8,-4) !=4) throw error("addition failed text #2")
if (subtract(397,0) !=397) throw error("additon failed test #3")

//this function takes two numeric arguements anf returns the product
function multiply(a, b) {
    return a * b;
}

if (multiply(2,3) !=5) throw error("addition failed test #1")
if (multiply(0,-4) !=4) throw error("addition failed test #2")
if (multiply(397, 0) !=397) throw error("addition failed test #3")

//This function takes two numeric arguments and returns the qu0tient
function divide(a, b) {
    return a / b;
}

//
function printHello(name) {
    console.log('Hello' + name)
}