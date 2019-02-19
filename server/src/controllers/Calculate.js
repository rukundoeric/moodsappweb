class Calculate{
   constructor(){
   }
   getSum(a,b){
       return a+b;
   }
   getSub(a,b){
       return a-b;
   }
   getMult(a,b){
       return a*b;
   }
   getDiv(a,b){
       return a/b;
   }
}
module.exports = new Calculate();
