var allPairShortestPath = /** @class */ (function () {
    function allPairShortestPath(vertex) {
        this.V = vertex;
        this.vertexDist = new Array(vertex);
        this.parentNode = new Array(vertex);
    }
    allPairShortestPath.prototype.shortestPath = function (source, graph) {
        var dist = [];
        for (var i = 0; i < this.V; i++) {
            var row = [];
            for (var j = 0; j < this.V; j++) {
                row.push(graph[i][j]);
            }
            dist.push(row);
        }
        for (var i_1 = 0; i_1 < this.V; i_1++) {
            for (var j = 0; j < this.V; j++) {
                for (var k = 0; k < this.V; k++) {
                    if (dist[i_1][k] + dist[k][j] < dist[i_1][j]) {
                        dist[i_1][j] = dist[i_1][k] + dist[k][j];
                    }
                }
            }
        }
        this.printSolution(dist);
    };
    allPairShortestPath.prototype.printSolution = function (dist) {
        for (var i = 0; i < dist.length; i++) {
            for (var j = 0; j < dist.length; j++) {
                if (dist[i][j] == 999) {
                    dist[i][j] = "INF";
                    // console.log("INF")
                }
                // else{
                //     console.log(dist[i][j]);
                // }
            }
        }
        console.log(dist);
    };
    return allPairShortestPath;
}());
var distVector = [
    [0, 5, 999, 10],
    [999, 0, 1, 999],
    [999, 999, 999, 2],
    [999, 999, 999, 999]
];
// console.log(distVextor[0]);
var a = new allPairShortestPath(4);
a.shortestPath(0, distVector);
