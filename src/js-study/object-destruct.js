let person = {
    name: "John",
    age: 20
}

console.Log(person.name)
console.Log(person.age)

const name = person.name
const age = person.age
/*
위와 같으므로 위를 한줄로 표현 가능, 아래처럼 작성해야함
const  { name, age } = person
console.log(name)
console.log(age)
*/