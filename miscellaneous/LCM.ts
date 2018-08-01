class LCM{
    constructor(){

    }
    calculate(a:number, b:number){
        return a*b/this.calculateGCD(a,b);
    }
    calculateGCD(a:number, b:number):number{
        if(a==0){
            return b;
        }
        else{
            return this.calculateGCD(b%a,a);
        }
    }

}

let l=new LCM();
console.log("The result is " + l.calculate(15,25));


