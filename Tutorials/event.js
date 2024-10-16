// process.on('exit',(code)=>{
//     console.log('ㅋㅋㅋㅋ')
//     console.log(`Exit code: ${code}`)
// });
// console.log('실행중');

// process.on('uncaughtException', (error)=>{
//     console.log('ㅋ예외 발생')
//     console.log(error)
// });

// let count = 0;

// let test = ()=>{
//     count++;
//     if(count >3)return;

//     setTimeout(test,2000);
//     error.error.error();
// };

// setTimeout(test,2000);

// const once = (error)=>{
//     console.log("error");
// }
// process.once('uncaughtException', once);

// let test = ()=>{
//     setTimeout(test,2000);
//     error.error.error();
// }
// setTimeout(test,2000);

// process.on('exit', ()=>{
//     console.log("ㅋㅋㅋㅋ exit");
// });

// process.emit('exit');
// process.emit('exit');
// process.emit('exit');
// process.emit('exit');

// console.log("프로그램 실행 중");

const rint = require('./rint.js');

rint.tick.on('tick', ()=>{
    console.log('이벤트 만들기');
});