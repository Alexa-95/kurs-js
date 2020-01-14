var MarkHeigh = 1.8,
    MarkWeight = 80,
    JohnHeight = 1.9,
    JohnWeight = 100,

    MarkBMI, JohnBMI;

MarkBMI = MarkWeight / (MarkHeigh * MarkHeigh);
JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

// var isMarksBMIHigher = MarkBMI > JohnBMI
// console.log("Is Mark's BMI higher than John's BMI? " + isMarksBMIHigher);

if(MarkBMI > JohnBMI){
    console.log('Mark\'s BMI is higher than John\'s');
} else{
    console.log('Mark\'s BMI is lower than John\'s');
}