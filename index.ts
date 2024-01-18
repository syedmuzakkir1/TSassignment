

// Prototypes in typescript 


// The prototype property allows you to add properties and methods to an object.

// 1 Question 


type  Person = {
      
    name: string,
    age : number,

    speak:()=> void

}

// instance of Person 
let person1:Person = {
 
    name: 'john',
    age: 21,

    speak:()=>{ console.log(`hello `)}


}

let username = person1.name
let userage = person1.age

console.log('Your name is :',username)
console.log('Your age is :',userage)



console.log(person1.speak() , ' is a method')


type Person2 = Person &{
     
    Developer: ()=> void;

}

// instance of person2 

let person2: Person2 = {

    name:'bob',
    age:  23,
    speak:()=>{
        console.log('English')
    },
    Developer:()=>{console.log('Im developer')}
}

console.log(person2.name)
console.log(person2.age)
console.log(person2.Developer())


//// class extends another class 


class Shape {

  
    name: string;
    size: number;

    constructor(name:string,size:number){

        this.name = name,
        this.size = size
    }

    shapesNameAndSize(name:string, size:number){

        return `Your shape name is : ${name} 
         
        your shape size is : ${size}
        `
    }
  

}



class DerivedShapeClass extends Shape {
 
        
  Circle(name:string, size:number){
        
    return `Circle name and size is: ${name}, ${size}`

  }

  Rectangle(name:string, size:number){
    return `Circle name and size is: ${name}, ${size}`
       
  }
    

}


let square :Shape = {

    name: 'square',
    size: 12,
    shapesNameAndSize(name, size) {
        
        return `Your shape name is : ${name} 
         
        your shape size is : ${size}
        `
    }
    
}

// console.log(square);

let circle = new DerivedShapeClass('circle',2).Circle('circle',2)
let rectangle1 = new DerivedShapeClass('rectangle',5).Rectangle('rectanle',5)

console.log(circle)
console.log(rectangle1)

let rectange = square.shapesNameAndSize('rectangle',23)
console.log(rectange)




// prototype based example 

function Myprototype(this:any, name:string){
    this.name = name
}

Myprototype.prototype.education = function(){
    console.log('Designer')
}


function user(this: any, name:string){
 Myprototype.call(this, name)
 
    
}

user.prototype = Object.create(Myprototype.prototype)
user.prototype.constructor = user;



const myp = new user('hyder')


console.log(

myp.education()

)

console.log(myp)


// Done 







// 2  code snippet for component 

