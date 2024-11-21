// Question-1
class Book{
    title;
    author;
    isbn;
//constructor
constructor(title,author,isbn){
            this.title=title;
            this.authorauthor;
            this.isbn=isbn;
        } 
//Methods
checkOut(){
               console.log(this.title , 'has been checked');
               }
returnBook(){
  console.log('returned');
     }
updateTitle(newTitle){
                 this.title=newTitle;
                                }
}
var Statistics=new Book('Foundation Of statistics','Ramanujan','100');
console.log(Statistics)
Statistics.checkOut();
Statistics.returnBook();
Statistics.updateTitle('Advanced Statistics')
console.log(Statistics);
console.log('________________________________________________________');
//Question-2
//Creating Class
class Product{
              _name;
              price;
	         category;
//Creating Constructor
constructor(_name,price,category)
{
	this._name=_name;
	this.price=price;
	this.category=category;
	}
//Creating Methods
applyDiscount(amount)
{
	this.amount=this.price-amount;
	}
getPriceAfterDiscount()
{
	console.log(`The price of ${this._name} after discount is ${this.amount}`);
}
}
var Indiagate=new Product('Indiagate',50,'sonamasuri');
console.log(Indiagate)
Indiagate.applyDiscount (10);
Indiagate.getPriceAfterDiscount()
console.log(Indiagate);

//Question-3
class BankAcccount{
    accountHolderName;
    accountNumber;
    balance;
//Creating Constructor
constructor(accountHolderName,accountNumber,balance)
{
this.accountHolderName=accountHolderName;
this.accountNumber=accountNumber;
this.balance=balance;
}
//Creating Methods
deposit(amount)
{
    this.balance=this.balance+amount;
    console.log(`Amount deposited ${amount},Total amount is ${this.balance}`);
}
withdraw(amount){
    console.log(`Amount withdrawn is ${amount}`);
    this.finalbalance=this.balance-amount;
}
getBalance()
{
console.log(`Your Remaining balance is ${this.finalbalance}`)
// console.log(`The account balance of ${this.accountHolderName} is ${this.balance}`);

}
}
var SBI=new BankAcccount('Preetam',1260,12390);
console.log(SBI)
SBI.deposit(200);
SBI.withdraw(2000);
SBI.getBalance(400);
console.log(SBI)
console.log('________________________________________________________');
//Question-4
class Vehicle{
    //constructor
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    //Methods
    drive(miles){
        this.miles=this.mileage/miles;
    }
    getMileage() {
        console.log(`The mileage of ${this.model} is ${this.miles}`)
    }
}
var Car=new Vehicle('SUV','AP212343',180);
console.log(Car);
Car.drive(2);
Car.getMileage();
console.log(Car);
console.log('________________________________________________')
//Question-5
class Student{
    //constructor
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    //Methods
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log(`The New Grade of ${this.name} is ${this.grade}`)
    }
}
var Student1=new Student('Jhaanvi','A');
console.log(Student1)
Student1.setGrade('O');
Student1.getGrade();
















