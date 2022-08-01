//Problem: 3.1
//---------------------------
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log('Print_1')
}
else if (num2 > num3 && num2 > num1) {
    console.log('Print_2')
}
else if (num3 > num1 && num3 > num2) {
    console.log('Print_3')
}
else {
    console.log('Print_4')
}



//Problem: 3.2
//------------------------------
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 && side2 == side3 && side3 == side1) {
    console.log('Equilateral Triangle')
}
else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log('Isoscales Triangle')
}
else { 'No Triangle' }