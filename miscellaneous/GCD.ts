class GCD{
    constructor(){

    }
    calculate(a:number, b:number):number{
        if(a==0){
            return b;
        }
        else{
            return this.calculate(b%a,a);
        }
    }
}

let g=new GCD();
let res=g.calculate(5,2);
console.log("GCD is " + res);