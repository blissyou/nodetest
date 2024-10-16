const url = require('url');
const querystring = require('querystring');

const result = url.parse('https://www.hanbit.co.kr/store/books/look.php?p_code=B1904651936');

console.log(querystring.parse(result.query));

console.log('================================================')
console.log(result);
console.log('================================================')
console.log(querystring.stringify(result));