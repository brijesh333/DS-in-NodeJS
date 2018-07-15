"use strict";
exports.__esModule = true;
var graph = /** @class */ (function () {
    function graph(v) {
        this.adj = [[]];
        for (var i = 0; i < v; i++) {
            this.adj.push([]);
        }
    }
    graph.prototype.addEdge = function (v, e) {
        this.adj[v].push(e);
    };
    graph.prototype.printGraph = function () {
        console.log(this.adj);
    };
    graph.prototype.DFS = function (s) {
        var visited = new Array(this.v);
        for (var i = 0; i < this.v; i++) {
            visited[i] = false;
        }
        visited[s] = true;
        console.log(s);
        var queue = [];
        queue = this.adj[s].slice();
        while (queue.length != 0) {
            s = queue.shift();
            visited[s] = true;
            console.log(s);
            for (var _i = 0, _a = this.adj[s]; _i < _a.length; _i++) {
                var vertex = _a[_i];
                if (!visited[vertex]) {
                    queue.unshift(vertex);
                }
            }
            // queue=[...queue,...this.adj[s]]            
        }
    };
    return graph;
}());
var g = new graph(3);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
// g.printGraph();
g.DFS(2);
