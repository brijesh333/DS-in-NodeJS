"use strict";
exports.__esModule = true;
var node = /** @class */ (function () {
    function node(key) {
        this.key = key;
        this.next = null;
    }
    return node;
}());
exports.node = node;
var list = /** @class */ (function () {
    function list() {
        this.head = null;
        this.tail = null;
    }
    list.prototype.addNode = function (key) {
        if (this.head == null) {
            this.head = new node(key);
            this.tail = this.head;
        }
        else {
            this.tail.next = new node(key);
            this.tail = this.tail.next;
        }
    };
    list.prototype.printNode = function () {
        if (this.head == null) {
            console.log("empty Linked list");
        }
        else {
            var pointer = this.head;
            while (pointer != null) {
                console.log(pointer.key);
                pointer = pointer.next;
            }
        }
    };
    return list;
}());
exports.list = list;
var l = new list();
l.addNode(1);
l.addNode(2);
l.addNode(3);
l.printNode();
