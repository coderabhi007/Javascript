//for each loop doesnot reaturn any value
//****filter****//
const mynum=[1,2,3,4,5,6,7,8,9,10]
const a=mynum.filter((num)=>num>4)
//console.log(a);
const map=mynum.map(function(num){
    return num+10;
})
//console.log(map)
const total=mynum.reduce(function(acc,num){
    return acc+num
},0)
console.log(total)