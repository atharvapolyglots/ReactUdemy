//REASSIGN VALUE USING LET IS ALLOWED
let Name='bhuse';
console.log(Name)

Name='Atharva2'
console.log(Name)

//CANNOT REASSIGN VALUE USING CONST
// const NameNew='atharva'
// console.log(NameNew)

// NameNew='Atharva'
// console.log(NameNew)

//------------------------------------------------------

//FUNCTION EXAMPLE
function printName(name){
    console.log(name)
}
printName('atharva3')

//ARROW FUNCTION EXAMPLE
const printNameUsingArrow=(name)=>{
    console.log(name)
}
printNameUsingArrow('atharva4')

//------------------------------------------------------

//CLASS INHERETANCE
class person{
    constructor(){
        this.name='atharva5'
    }
    printName(){
        console.log(this.name)
    }
}
new person().printName()

class human extends person{
    constructor(){
        super()
        this.gender='male'
    }
    printGender(){
        console.log(this.gender)
    }
}
new human().printName()

//------------------------------------------------------

//SPREAD OPERATOR IN ARRAY
arr1=[1,2,3]
arr2=[...arr1,4,5,6]
console.log(arr2)

//SPREAD OPERATOR IN OBJECT
let personObj={
    name: 'xx',
    location: 'pune'
}
let personUpdate={
    ...personObj,
    salary: '$99999'
}
console.log(personUpdate)

//REST OPERATOR IN FUNCTION
function print(...value){
    console.log(value)
}
print('x','xx')

//------------------------------------------------------

//ARRAY DESTRUCTURING
const number=[1,2,6]
let num1,num2
[num1,num2]=number
console.log(num1,num2)

//------------------------------------------------------

//OPERATIONS ON ARRAY USING MAP
const array=[1,2,3]
const arrayDouble=array.map((arg)=>{
    return arg*2
})
console.log(arrayDouble)