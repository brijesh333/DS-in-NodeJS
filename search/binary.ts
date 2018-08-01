class BinarySearch{    
    
    constructor(){
        
    }

    search(numArray:number[], element):number{
        let l=0;
        let r=numArray.length;
        while(l<=r){
            let m=l+Math.floor((r-l)/2);
            if(numArray[m]==element){
                return m;
            }
            else if(numArray[m]>element){
                r=m-1;
                
            }
            else if(numArray[m]<element){
                l=m+1;                
            }
        }
        return -1;
    }
}

var a=[1,2,6,8,9,12,16,19,22,27,35,50];
let b=new BinarySearch();
let res=b.search(a,12);
if(res===-1){
    console.log("Given number not found");
}
else{
    console.log("given number found at location " + res);
}