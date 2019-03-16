function  Person() {

}
Person.prototype = {
    name:"jane",
    age:12,
    sayName:function () {
        console.log(this.name)
    }
};
let person1 = new  Person();
let person2 = new  Person();
person1.name = 'aaa';
console.log(person1.name);
console.log(person1.sayName === person2.sayName);
console.log(person1.name === person2.name);


function Peo(name,age) {
    this.name = name;
    this.age = age;
    this.p = ["pingpang","teneis"];
}

Peo.prototype = {
    constructor : Peo,
    sayName : function () {
        console.log(this.name);
    }
};

let peo1 = new Peo("wys",21);
let peo2 = new Peo("qm",20);

peo1.p.pop();
console.log(peo1.p);
console.log(peo2.p);
console.log(peo1.sayName() === peo2.sayName());
