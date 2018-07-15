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

    BFS(s:number){
        let visited=new Array<boolean>(this.v);
        for(let i=0;i<this.v;i++){
            visited[i]=false;
        }

        visited[s]=true;
        console.log(s);
        let queue=[];
        queue=[...this.adj[s]];        
        while(queue.length!=0){            
            s=queue.shift();
            visited[s]=true;
            console.log(s);
            for(let vertex of this.adj[s]){
                if(!visited[vertex]){
                    queue.push(vertex);
                }
            }
            // queue=[...queue,...this.adj[s]]            
        }
    }

}

let g=new graph(3);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(2,3);
g.addEdge(3,3);
// g.printGraph();
g.BFS(2);