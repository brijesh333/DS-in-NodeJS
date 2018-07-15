class allPairShortestPath{
    V:number;
    vertexDist:Array<number>;
    parentNode:Array<string>;
    constructor(vertex:number){
        this.V=vertex;
        this.vertexDist=new Array<number>(vertex);
        this.parentNode=new Array<string>(vertex);        
    }

    shortestPath(source:number, graph:Array<Array<number>>){
        let dist=[];
        for(var i=0;i<this.V;i++){
            let row=[];
            for( let j=0;j<this.V;j++){
                row.push(graph[i][j]);
            }
            dist.push(row);
        }
        for(let i=0;i<this.V;i++){
            for(let j=0;j<this.V;j++){
                for(let k=0;k<this.V;k++){
                    if (dist[i][k] + dist[k][j] < dist[i][j])
                    {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }                        
                }
            }
        }
        this.printSolution(dist);
    }
    

    printSolution(dist){
        for(let i=0;i<dist.length;i++){
            for(let j=0;j<dist.length;j++){
                if(dist[i][j]==999){
                    dist[i][j]="INF";
                    // console.log("INF")
                }
                // else{
                //     console.log(dist[i][j]);
                // }
                
            }
            
        }
        console.log(dist);
    }
}

let distVector=[
    [0,5,999,10],
    [999,0,1,999],
    [999,999,999,2],
    [999,999,999,999]
];

// console.log(distVextor[0]);
let a = new allPairShortestPath(4);
a.shortestPath(0,distVector);