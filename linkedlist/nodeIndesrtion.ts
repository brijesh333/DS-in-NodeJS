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

    insertNode(pos:number, value:number){
        if(pos>this.listLength()){
            if(pos-this.listLength()==1){                
                this.tail.next=new node(value);
            }
            else{
                console.log("List length is smaller than position");
            }            
        }
        else{            
            if(pos==1){
                let newNode=new node(value);
                newNode.next=this.head;
                this.head=newNode;
            }
            else{
                let curr=this.head;
                let count:number=0;
                while(curr!=null){
                    count++;
                    if(count==pos-1){
                        let n=new node(value);
                        n.next=curr.next;
                        curr.next=n;
                    }
                    curr=curr.next;
                }
            }
        }
    }
    public listLength():number{
        let curr=this.head;
        let counter:number=0;
        while(curr!=null){
            counter++;
            curr=curr.next;
        }
        return counter;
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
console.log(l.listLength());
l.insertNode(2,10);
l.printNode();
