class subject{
    constructor(name, content){
        this.name = name
        this.content = content
    }
}
const subject1 = new subject ("Biology", "Plants and Animals")

console.log(subject1.name)
console.log(subject1.content)

const subject2 = new subject ("Chemistry", "Composition of Matter")
console.log(subject2.name)
console.log(subject2.content)

const subject3 = new subject("Physics", "Energy")
console.log(subject3.name)
console.log(subject3.content)

class Book{
    constructor(brand){
        this.bookname = brand
    }
}
