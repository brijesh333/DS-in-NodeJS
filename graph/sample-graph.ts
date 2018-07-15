export interface IGraph{
    v:number;
    adj:Array<Array<number>>;
}

class graph implements IGraph{
    v:number;
    adj:Array<Array<number>>=[[]];

    constructor(v:number){
        for(let i=0;i<v;i++){
            this.adj.push([]);
        }
    }

    addEdge(v,e){        
        this.adj[v].push(e);
    }

    printGraph(){
        console.log(this.adj);
    }

}

let g=new graph(3);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.printGraph();