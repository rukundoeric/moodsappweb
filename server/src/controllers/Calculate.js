class Calculate{
   constructor(){
       this.number1=0;
       this.number2=0;
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
