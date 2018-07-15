var graph = /** @class */ (function () {
    function graph(vertex) {
        this.V = vertex;
        this.vertexDist = new Array(vertex);
        this.parentNode = new Array(vertex);
    }
    graph.prototype.dijkastra = function (source, graph) {
        var dist = [];
        var sptSet = new Array(this.V);
        for (var i = 0; i < this.V; i++) {
            dist[i] = Number.MAX_VALUE;
            sptSet[i] = false;
        }
        dist[source] = 0;
        for (var count = 0; count < this.V - 1; count++) {
            var u = this.minDistance(dist, sptSet);
            sptSet[u] = true;
            for (var v = 0; v < this.V; v++) {
                if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Number.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        this.printSolution(dist, this.V);
    };
    graph.prototype.minDistance = function (dist, sptSet) {
        var min = Number.MAX_VALUE;
        var min_index = -1;
        for (var i = 0; i < this.V; i++) {
            if (sptSet[i] == false && dist[i] <= min) {
                min = dist[i];
                min_index = i;
            }
        }
        return min_index;
    };
    graph.prototype.printSolution = function (dist, V) {
        for (var i = 0; i < V; i++) {
            console.log(i + "     " + dist[i]);
        }
    };
    return graph;
}());
var distVextor = [
    [0, 10, 20, 100],
    [10, 0, 5, 16],
    [20, 5, 0, 20],
    [100, 16, 20, 0]
];
// console.log(distVextor[0]);
var g = new graph(4);
g.dijkastra(0, distVextor);
