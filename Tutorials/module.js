exports.a = 10;
exports.b =function(){
    console.log('B method');
}

exports.abs = function(num){
    if(0<num){
        return num;
        
    }
    else 
    {
        return -num;
    }
}

exports.circleArea = function(radius){
    return radius * radius *Math.PI
}
exports.mul = function(num){
    for(var i=1 ; i<10 ; i++){
        console.log("%d * %d =%d",num,i,num*i)
    }
}