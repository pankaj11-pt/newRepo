//1*Pass or Fail:** If a student's score is 50 or above, print "Pass"; otherwise, print "Fail."

let student = 50

if (student < 50) {
    console.log("student fail")
}
else if (student >= 50) {
    console.log("student pass")
}

//2 **Login Success:** If a `username` is "admin" and a `password` is "123", print "Login Successful".
//  Otherwise, print "Invalid Credentials".

let userName = "amit"
let password = "123"
if (userName === "admin" && password === "123") {
    console.log("Login succesful")
}
else {
    console.log("Invalid Credentials")
}

//3 Check for Empty String:** Given a string, print "String is empty" if it has no characters, otherwise print "String is not empty".

let string = 1
if (string.length == 0) {
    console.log("string is empty")
}
else {
    console.log("string is not empty")
}

//4 Vowel or Consonant:** Given a single character, determine if it's a vowel (a, e, i, o, u - case-insensitive) or a consonant.

let char = "i"
if ("aeiou".includes(char) || "AEIOU".includes(char)) {
    console.log("its a vowel");

} else {
    console.log("its a consonant")
}

//5 **Positive, Negative, or Zero:** Write a function that takes a number and prints whether it's positive, negative, or zero.
let num = 1
if (num > 0) {
    console.log("it's positive number")
    
}
else if (num < 0) {
    console.log("it's negative number");
}
else {
    console.log("it's zero")
}

//6 *Greater of Two Numbers:** Find and print the larger of two given numbers.

let num1 = "111"
let num2 = "222"
if (Number(num1) > Number(num2)) {
    console.log("num1 is greater number")
}
else (
    console.log("num2 is greater number")
)

//7 **Even or Odd:** Determine if a given number is even or odd.
let numm = 9
if (numm % 2 == 0) {
    console.log("its even number")
}
else {
    console.log("its odd")
}

//8 Divisible by 5:** Check if a number is perfectly divisible by 5.

let numm1 = 1

if (numm1 % 5 == 0) {
    console.log("number is perfectly divisible by 5")
}
else (
    console.log("number is not perfectly divisible by 5")
)

//9 Discount Eligibility:** A customer gets a discount if their total . Print "Discount applied" or "No discount".purchase is over $100

let productCost = 120
if (productCost > 100) {
    console.log("Discount applied");
}
else {
    console.log("No discount purchase is over $100")
}
//10 Grading System (A, B, C, D, F):** Assign grades based on scores: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).

let scores = 69
if (scores >= 90 && scores <= 100) {
    console.log("student get grade A")
}
else if (scores > 80 && scores <= 89) {
    console.log("student get grade B")
}
else if (scores >= 70 && scores <= 79) {
    console.log("student get grade C")

}
else if (scores > 60 && scores <= 69) {
    console.log("student get grade D")

}
else {
    console.log("student get fail")
}

//11 . **Traffic Light System:** For 'red', print "Stop"; for 'yellow', print "Slow down"; for 'green', print "Go".
//  For any other input, print "Invalid color".

let tl = "red"

if (tl == "red") {
    console.log("stop")
}
else if (tl == "yellow") {
    console.log("slow down")
}
else if (tl == "green") {
    console.log("go")
}
else {
    console.log("invalid color")
}

//12 **Day of the Week:** Given a number (1-7), print the corresponding day of the week (e.g., 1 for Monday, 7 for Sunday). 
// Print "Invalid day" for other numbers.

let day = 8
if (day == 1) {
    console.log("its monday")
}
else if (day == 2) {
    console.log("its tuesday")
}
else if (day == 3) {
    console.log("its wednesday")
}
else if (day == 4) {
    console.log("its thursday")
}
else if (day == 5) {
    console.log("its friday")
}
else if (day == 6) {
    console.log("its saturday")
}
else if (day == 7) {
    console.log("its sunday")
}
else {
    console.log("invalid day")
}

// 13 *Temperature Description:** If temp < 0, "Freezing"; 0-10, "Very Cold"; 11-20, "Cold"; 21-30, "Moderate"; >30, "Hot".

let temp = 16

if (temp < 0) {
    console.log("freezing")
}
else if (temp > 0 && temp <= 10) {
    console.log("very cold")
}
else if (temp >= 11 && temp <= 20) {
    console.log("cold")
}
else if (temp >= 21 && temp <= 30) {
    console.log("moderate")
}
else {
    console.log("hot")
}

//14 **User Role Recognition:** If role is "admin", "Full Access"; "editor", "Edit Access";
//  "viewer", "View Access"; "guest", "Limited Access".
let role = "guest"
if (role == "admin") {
    console.log("full access")
}
else if (role == "editor") {
    console.log("edit access")
}
else if (role == "viewer") {
    console.log("view access")
}
else if (role == "guest") {
    console.log("limited access")
}
else {
    console.log("invalid access")
}

//15 *Movie Ticket Price:** Child (0-12): $5; Teen (13-18): $8; Adult (19+): $10.
let age = 12

if (age > 0 && age <= 12) {
    console.log("ticket price is $5")
}
else if (age >= 13 && age <= 18) {
    console.log("ticket price is $8")
}
else {
    console.log("ticket price is $10")
}

//16*Status Message:** If `isActive` is true, "Online", else "Offline". Use ternary.

let Message = "adffsdf"

if (Message == "isActive") {
    console.log("online")
} else {
    console.log("offline")
}

//17 *Leap Year:** Determine if a year is a leap year (divisible by 4, but not by 100 unless also by 400).

let year = "1900"
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log("leap year")
}
else {
    console.log("not leap year")
}

//18 *Triangle Type:** Given three side lengths, determine if it's equilateral (all equal), isosceles (two equal),
//  or scalene (none equal). Also, check if it's a valid triangle (sum of any two sides > third side). 
//  {not myself}

let side1 = 1
let side2 = 2
let side3 = 4

// side1 = Number(side1);
// side2 = Number(side2);
// side3 = Number(side3);

if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
    console.log("it's not a valid triangle")
}
else {
    if (side1 == side2 && side2 == side3 && side1 == side3) {
        console.log("its equilateral")
    }
    else if (side1 == side2 || side2 == side3 || side1 == side3) {
        console.log("its isosceles")
    }
    else {
        console.log("its scalene")
    }
}
//19 *Eligible for Loan:** A person is eligible if their income is over $30,000 AND their credit score is over 700
let income = "2000"
let creditScore = "4000"
if (income > 30000 && creditScore > 700) {
    console.log(" A person is eligible for loan")
}
else {
    console.log("not eligible for loan")
}

//20 Password Strength (Medium):** A password is strong if it's at least 8 characters long
//  AND contains at least one number AND at least one uppercase letter.
//{not working}

let Password = "Passwordt"
let len = Password.length >= 8
let numm2 = /[0-9]/.test(Password)
let alfa = /[A-Z]/.test(Password)
if (len && numm2 && alfa) {
    console.log("strong password")
}
else {
    console.log("weak password")
}



//21 *Access Control:** A user has "admin" role OR "editor" role to modify content. Otherwise, they have "read-only" access
let user = "viewer"

if (user == "admin" || user == "editor") {
    console.log("role to modify content")
}
else {
    console.log("read only")
}