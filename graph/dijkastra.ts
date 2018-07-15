class graph{
    V:number;
    vertexDist:Array<number>;
    parentNode:Array<string>;
    constructor(vertex:number){
        this.V=vertex;
        this.vertexDist=new Array<number>(vertex);
        this.parentNode=new Array<string>(vertex);        
    }

    dijkastra(source:number, graph:Array<Array<number>>){
        let dist:Array<number>=[];
        let sptSet=new Array<boolean>(this.V);
        for(let i=0;i<this.V;i++){
            dist[i]=Number.MAX_VALUE;
            sptSet[i]=false;
        }
        dist[source]=0;
        for(let count=0;count<this.V-1;count++){
            let u=this.minDistance(dist,sptSet);
            sptSet[u]=true;
            for(let v=0;v<this.V;v++){
                if(!sptSet[v] && graph[u][v]!=0 && dist[u] != Number.MAX_VALUE && dist[u]+graph[u][v] < dist[v]){
                        dist[v] = dist[u] + graph[u][v];
                }
            }
            
        }
        this.printSolution(dist,this.V);
    }

    minDistance(dist:Array<number>,sptSet:Array<Boolean>):number{
        let min:number=Number.MAX_VALUE;
        let min_index:number=-1;
        for(let i=0;i<this.V;i++){
            if(sptSet[i]==false && dist[i]<=min){
                min=dist[i];
                min_index=i;
            }
        }
        return min_index;
    }

    printSolution(dist:Array<number>,V:Number){
        for(let i=0;i<V;i++){
            console.log(i + "     " + dist[i]);
        }
    }
}

let distVextor=[
    [0,10,20,100],
    [10,0,5,16],
    [20,5,0,20],
    [100,16,20,0]
]

// console.log(distVextor[0]);
let g = new graph(4);
g.dijkastra(0,distVextor);