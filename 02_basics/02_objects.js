const jsuser={
    fullname:"Abhishek",
    age:"18",
    location:"Sangli",
    "greeting" :function(){
        console.log("hello")
    }
}
//Object.freeze(jsuser)
//console.log(jsuser.age)
//console.log(jsuser["age"])
//changing the value
//jsuser.age=22
//console.log(jsuser.age)

//console.log(jsuser)
const obj1={
    1:"abhi"
}
//const obj3=Object.assign({},obj1,jsuser)
//const obj3={...jsuser,...obj1}
//console.log(obj3)
console.log(Object.entries(jsuser))
console.log(jsuser.hasOwnProperty("a"))
//decounstrcting
const {fullname:a}=jsuser
console.log(a)