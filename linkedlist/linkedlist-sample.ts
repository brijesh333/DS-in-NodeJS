interface INode{
    key:number;
    next:INode;
}

export class node implements INode{
    key:number;
    next:INode;
    constructor(key:number){
        this.key=key;
        this.next=null;
    }
}

export class list{
    public head:INode=null;
    public tail:INode=null;
    public addNode(key:number){
        if(this.head==null){
            this.head=new node(key);            
            this.tail=this.head;
        }
        else{
            this.tail.next=new node(key);
            this.tail=this.tail.next;
        }
    }

    public printNode(){
        if(this.head==null){
            console.log("empty Linked list")
        }
        else{
            let pointer:INode=this.head;
            while(pointer!=null){
                console.log(pointer.key);
                pointer=pointer.next;
            }
        }
    }
}

let l=new list();
l.addNode(1);
l.addNode(2);
l.addNode(3);
l.printNode();
console.log("print node method called");