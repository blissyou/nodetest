// console.log("%d,%s,%j",273,"aa",{a:10});
// console.log("%d+%d = %d",273,52,273+52);
// console.log("%d+%d = %d",273,52,273+52,52273);
// console.log("%d+%d = %d & %d",273,52,273+52);

// console.time("alpha")
// let output = 1;
// for (let i=1;i<=10;i++) output *=1
// console.log(`Result: ${output}`)
// console.timeEnd("alpha")


// process.argv.forEach(function(item,index){
//     console.log(index + ":" + typeof(item) +':',item)

//     if(item == '--exit'){
//         let exitTime = Number(process.ergv[index+1]);
//         setTimeout(function(){
//             process.exit(0);
//         }, exitTime)
//     }
// })

console.log('- process.env', process.env)
console.log('- process.version', process.version)
console.log('- process.arch', process.arch)
console.log('- process.uptime', process.uptime)
