let str = 'hello'
function doubleChar(str) {
   let a = str.split('');
    let b =  a.map(function (item, index, array){
         return item + item
   })
    return  b.join('')
  }
  
console.log(doubleChar(str));