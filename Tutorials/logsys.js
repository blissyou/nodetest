const crypto = require('crypto')

let key = '999999'
let input = '12341234'

let cipher = crypto.createCipher('aes192',key)
cipher.update(input,'utf8','base64')
let cipheredOutput = cipher.final('base64')

let decipher = crypto.createDecipher('aes192',key)
decipher.update(cipheredOutput,'base64','utf8')
let decipheredOutput = decipher.final('utf8')

console.log('원래 문자열:', input);
console.log('암호화:', cipheredOutput);
console.log('암호화 해제:', decipheredOutput);