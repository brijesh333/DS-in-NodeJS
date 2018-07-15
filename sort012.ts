let a=[0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];



function sort(a){
    let l=0;
    let m=0;
    let h=a.length-1;
    console.log(a);
    while(m<=h){
        
        switch(a[m]){
            case 0: {
                let temp=a[l];
                a[l]=a[m];
                a[m]=temp;
                l++;
                m++;
                break;
            }
            case 1:{
                m++;
                break;
            }
            case 2:{
                let temp=a[m];
                a[m]=a[h];
                a[h]=temp;
                h--;
                
                break;
                
            }
        }
    }
    console.log(a);
}




sort(a);