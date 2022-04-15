/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const data = [];
     
     const legends = {'(':'(','{':'{','[':'[' };
     const check = { '(':')', '{':'}', '[':']' }
   
     for(let i = 0 ; i < s.length ; i++){
       const char = s[i];
       
       if(legends[char] === char){
         data.push(char)
       }else if (check[data.pop()] !== char) { 
           return false
       }
     }
     
     return data.length ? 0:1
};