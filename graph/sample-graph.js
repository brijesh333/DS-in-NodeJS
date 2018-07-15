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
    return graph;
}());
var g = new graph(3);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.printGraph();
