interface employee {
    name : string;
    age:number;
    salary : number;
    email : string;
    isMarried : boolean;
    jobprofile : string;
    print:() => string;
}




const emp1:employee = {
    name:'rahul sharma',
    age : 20,
    salary : 20000.00,
    email : 'rahul@sharma@100.gmail.com',
    isMarried : false,
    jobprofile : 'backend developer',
    print : function(){
        return `${this.name}----${this.age}----${this.salary}----${this.email}----${this.isMarried}-----${this.jobprofile}`;
    }
}


console.log(emp1);