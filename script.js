// let name = "Ruba";
// var age = "24";
// console.log(`My Name is ${name} and my age is ${age}.`);
// var months = age *12; 
// console.log("My age is", age, "Years");
// console.log("My age in months is ", months);
// var days = age * 365;
// console.log("My age in days is", days);
// var hours = days * 24;
// console.log("My age in hours is", hours);
// let a;
// console.log(a);
// let b = 20;
// let c = 10;
// console.log("Value of b is", b);
// console.log("Value of c is", c);
// console.log("There sum is ", b+c);
// console.log("There multiplication is", b*c);
// console.log("There division is", b/c);
// console.log("There difference is", b-c);

//   let myName, salary;
//   myName="Ruba";
//   salary=25000;
//   console.log(age,myName,salary);


// let mySalary = 20000;
// let myName = "Ruba";
// let status = true;
// let age;
// let attendence = null;
// let days = BigInt(34378456499324);
// console.log("Name:", myName);
// console.log(typeof myName);

// console.log("Salary:", mySalary);
// console.log(typeof mySalary);

// console.log("Age:", age);
// console.log(typeof age);

// console.log("Attendence:", attendence);
// console.log(typeof attendence);

// console.log("Employed:", status);
// console.log(typeof status);

// console.log(typeof days);


// let car = {
//     name:"Audi",
//     color: "Grey",
//     tranmission: "Manual",
//     Model: 2010,

// };
// console.log(car);
// console.log(car.name);
// console.log(car["Model"], car["tranmission"]);


// let keyboard = {
//     price: "$27.75",
//     color: "k1 white",
//     storeName: "MageGee Store",
//     purchase: "1k+ bought in Past Month",
//     features: "RGB LED, 104 key",
//     compatibility: "PC/Laptop",
//     items: "Keyboard & Mouse",
//     ratings: 14132,
//     returnPolicy: true,
//     replacementPolicy:true,
// };
// console.log(keyboard);

// let car = {
//     Name: "Dodge",
//     model: "2020",
//     series: "Challenger",
//     transmission: "Manual",
//     gearbox: "6 gears"
// };
// console.log(car);


// console.log(a, b, c);
// let a = 4;

// var a = 3;
// var b= 2;
// console.log("Value of a+=b:", a+=b);
// console.log("Value of a-=b:", a-=b);
// console.log("Value of a*=b:", a*b);
// console.log("Value of a/=b:", a/=b);
// console.log("Value of a**=b:", a**=b);

// var age = 13;
// var nat = "Pakistani";
// console.log("Is Age greater than 18?:",age > 18);
// console.log("Is nationality is Pakistani?:", nat === "Pakistani");
// console.log("Final Decision for Issuance of CNIC:", age > 18 && nat === "Pakistani");


// var currentDay = "Tuesday"; 
// console.log("Is it a Weekend :", currentDay === "Saturday" || currentDay === "Sunday");


// var EmName = "Ruba";
// var Salary = 500000;
// if (Salary < 25000){
//     var tax = Salary*5/100;
//     var netSalary = Salary - tax;
//     console.log("Employee Name:", EmName);
//     console.log("Tax on Employee's Salary:", tax);
//     console.log("Net Salary Of the Employee:", netSalary);
// }
// else{
//     var tax = Salary*10/100;
//     var netSalary = Salary - tax;
//     console.log("Employee Name:", EmName);
//     console.log("Tax on Employee's Salary:", tax);
//     console.log("Net Salary Of the Employee:", netSalary);
// }

// var studentName = prompt("Enter Your Name"); 
// var obtMarks = prompt("Enter Your Marks");
// var grade;
// if (obtMarks >= 90 && obtMarks <= 100)
//     grade = "A";
// else if (obtMarks >= 80 && obtMarks <= 89)
//     grade = "B";

// else if (obtMarks >= 70 && obtMarks <= 79)
//     grade = "C";

// else if (obtMarks >= 60 && obtMarks <= 69)
//     grade = "D";

// else if (obtMarks >= 50 && obtMarks <=59)
//     grade = "E";

// else if(obtMarks >= 0 && obtMarks <=49)
//     grade = "F";
// console.log("Student Name:", studentName);
// console.log("Marks", obtMarks);
// console.log("Grade:", grade)

// var sal = 200000;
// if (sal <= 10000){
//     var calTax = sal*5/100;
//     console.log("Calculated Tax:",calTax);
// }
// else if(sal == 10000 && sal == 100000){
//     var calTax = sal*10/100;
//     console.log("Calculated Tax:",calTax);
// }
// else{
//     var calTax = sal*20/100;
//     console.log("Calculated Tax:",calTax);
// }

// var sum = 0;
// for( i =1; i<=5; i++ ){
//     console.log(i);
//     sum = sum+i;
// }
// console.log("Sum of Values:",sum);

// var number = prompt("Enter a number");
// var i;
// for(i = 0; i<=10; i++){
//      console.log(number, "*", i, "=", number*i);
// }

// let i = 5;
// while(i=-10){
//     console.log(i);
//     i--;
// }

var number = 2;
while (number<=50){
    if(number%2 === 0){
    console.log("Even Numbers are :",number);
    };
    number++;
};

var number1 = 1;
do{
    if(number1%2===1){
        console.log("Odd Numbers are:", number1);
    };
    number1 ++;
}while(number1<=50);