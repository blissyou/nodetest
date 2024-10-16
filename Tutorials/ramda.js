// const test=()=>{
//     return 'assert'
// }

// const test1 = ()=> 'n';

// console.log(test())
// console.log(test1())

// let test = [1,2,3,4,5,6,7,8];

// console.log(test);

// test = test.filter((item)=> item >4);
// console.log(test);

// const fn = require('fs');

// let file = fn.readFileSync('main.js','utf8');
// let file1 = fn.readFileSync('main.js');
// console.log(file)
// console.log(file1)
// console.log(file1.toString('utf8'));

const fs = require('fs');

console.log('A');

// fs.writeFile('a.txt','hello...',(error)=>{
//     if(error) {
//         console.log(error);
//         return;
//     }
    
// })

try{
    fs.writeFileSync('a.txt','hello...');

}catch(e){
    console.log(e);
}
console.log('B');

