const arr=[10,20]
for(const num of arr){
 //   console.log(num);
}
const map=new Map()
map.set("IN","India")
map.set("pak","Pakistan")
for(const [key,value] of map){
   // console.log(key)
}
const jsuser={
    fullname:"Abhishek",
    age:"18",
    location:"Sangli",
    "greeting" :function(){
        console.log("hello")
    }}
for(const key in jsuser){
    //console.log(jsuser[key])
}
arr.forEach(function(item){
    console.log(item+11)
})