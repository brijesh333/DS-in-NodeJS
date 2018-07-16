// Given a linked list 1->2->3 will print 123 as number


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

    public listToNumber(head:INode){        
        let n=0;
        if(head==null){
            return 0;
        }
        while(head!=null){
            n=n*10+head.key;
            head=head.next;
        }
        return n;
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
console.log(l.listToNumber(l.head));
