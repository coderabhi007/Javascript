function simple(...num1){
    return num1;
}
//console.log(simple(116,114,119))
function simple1(val1,val2,...num1){
    return num1;
}
//console.log(simple1(10,20,30,40,50,60))
function handelobject(anyobj){
    return anyobj.age;
}
const jsuser={
    fullname:"Abhishek",
    age:"18",
    location:"Sangli",
    "greeting" :function(){
        console.log("hello")
    }}
  //  console.log(handelobject(jsuser))
  function handelobject1(anyobj){
    return anyobj.this;
}
//console.log(handelobject1(jsuser))
//console.log(this)
console.log(addtwo(10))
const addtwo=function(nums){
    return nums+2;
}
//console.log(addtwo(10))


