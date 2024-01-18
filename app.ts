// Generic


// 1





// Reverse an array 

let Arr = [12,324,23,4,23]

Arr.reverse()
console.log(Arr)



// Generic type reversing array 


// function ReverseArray<G>(value:any):G{
   
//     return value.reverse();
// }

 
// let ReversedValue =   ReverseArray([1,2,3,4,5])

// console.log(ReversedValue)

// console.log(typeof(ReverseArray))

// console.log(typeof(ReversedValue))



function ReArray<T>(value:T[]):T[]{

    return value.reverse()

}


let reversed = ReArray([2,5,8,4,9])
let reverseStr = ReArray(['noor','ahmed','dev','power'])

console.log(reversed)
console.log(reverseStr)



// 2 

type Accept = string|number;

function Unionfunction(value:Accept){
         

       if(typeof value ==='number'){
        return value*value;

       }
      return `
       ${value.length}
      `
}

const result = Unionfunction('Hello')

const num = Unionfunction(2)

console.log(result,num)


// 3


// Sum of array 


function ArrayNumb(value:string[]|number[]){
    
    if(Array.isArray(value) && typeof value[0]==='number'){

        return (value as number[]).reduce(
            (a,b)=> {return a + b},0 
        );
    }
      
    if(Array.isArray(value) && typeof value[0]==='string' ){

        return  (value.join(''))
    }
     

}


console.log(ArrayNumb([1,2,3,4]))
console.log(ArrayNumb(['hello','guys','learning']))



// 4


interface person{
    
    name:string;
    age:number;
}

interface Worker{

     jobTitle:string;
     salary: number;
}


// interface PersonAndWorker extends person, Worker{


// }



let users:PersonAndWorker ={
 
    name: 'john',
    age:31,
    jobTitle:'Developer',
    salary: 23000,

}

console.log(users)


// with types 



type Persons={
    
    name:string;
    age:number;
}

type Workers={

     jobTitle:string;
     salary: number;
}


type PersonAndWorker= Persons& Workers;

let worker:PersonAndWorker ={
 
    name: 'bob',
    age:21,
    jobTitle:'Software Developer',
    salary: 2300,

}

console.log(worker)




// 5

console.log('printing the user and worker : ')

function TwoObject(userone:PersonAndWorker,usertwo:PersonAndWorker){
     
    let users = [userone,usertwo]
 
    return users 
           

}

let twouser = TwoObject(users,worker);

console.log(twouser);




// 6

function TypeGuard(variable:any):string|number{

    if(typeof variable ==='string'){

        let upper = variable.toUpperCase()
        // console.log(upper)
        return upper
    }

      let clgtype:any = console.log('your variable type is :',typeof(variable) )
       
       return  clgtype
        



}


console.log(TypeGuard('the string is capitalize'))
console.log(TypeGuard(23))



// 7

function handlestringAndNumber(value:string|number):any{
        

    if(typeof value ==='string'){
          
        return value.length;

    }
    if(typeof value === 'number'){

        return value**value;
        
    }
 
}


let strAndNum = handlestringAndNumber(3)
let strAndNum1 = handlestringAndNumber('This is string length')

console.log(strAndNum)

console.log(strAndNum1)
