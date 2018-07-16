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
    rest:INode;
    reverseHead:INode;
    public reverseList(curr:INode,prev:INode){        
        if(curr.next==null){            
            this.reverseHead=curr;
            curr.next=prev;
            return this.reverseHead;
        }
        let next1=curr.next;
        curr.next=prev;
        this.reverseList(next1,curr);
        // first.next.next=first;
        // first.next=null;
        return this.reverseHead;
    }

    public printList(){
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
console.log("Linked list in original order:");
l.printList();
let newHead=l.reverseList(l.head,null);
console.log("Linked list in reverse order:")
l.printList();