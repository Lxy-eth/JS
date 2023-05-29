
class Node {
    constructor(id) {
      this.id = id;
      this.lastSeen = Date.now();
    }
  
    updateLastSeen() {
      this.lastSeen = Date.now();
    }
  }
  
  class Bucket {
    constructor(rangeStart, rangeEnd, k) {
      this.rangeStart = rangeStart;
      this.rangeEnd = rangeEnd;
      this.k = k;
      this.nodes = new Map(); // 存储桶中的节点
      this.replacementNodes = []; // 存储替换节点
    }
  
    addNode(node) {
      if (this.nodes.has(node.id)) {
       
        const existingNode = this.nodes.get(node.id);
        existingNode.updateLastSeen();
      } else if (this.nodes.size < this.k) {
        
        this.nodes.set(node.id, node);
      } else {
        
        const oldestNode = Array.from(this.nodes.values()).sort((a, b) => a.lastSeen - b.lastSeen)[0];
        this.nodes.delete(oldestNode.id);
        this.replacementNodes.push(oldestNode);
  
        if (this.replacementNodes.length > this.k) {
         
          const replacementNode = this.replacementNodes.shift();
          console.log(`Pinging replacement node ${replacementNode.id} to confirm its liveness`);
        }
  
        this.nodes.set(node.id, node);
      }
    }
  
    removeNode(nodeId) {
      if (this.nodes.has(nodeId)) {
        
        this.nodes.delete(nodeId);
      } else {
        
        const index = this.replacementNodes.findIndex(node => node.id === nodeId);
        if (index !== -1) {
          this.replacementNodes.splice(index, 1);
        }
      }
    }
  
    printContents() {
      console.group(`Bucket (${this.rangeStart}, ${this.rangeEnd})`);
      console.table(Array.from(this.nodes.values()).map(node => ({ id: node.id, lastSeen: node.lastSeen })));
      console.groupEnd();
    }
  }
  
  class KBucket {
    constructor(k, numBits, nodeId) {
      this.k = k;
      this.numBits = numBits;
      this.buckets = [];
      this.nodeId = nodeId;
  
      for (let i = 0; i < numBits; i++) {
        const rangeStart = BigInt(2 ** i);
        const rangeEnd = BigInt(2 ** (i + 1)) - BigInt(1);
        this.buckets.push(new Bucket(rangeStart, rangeEnd, k));
      }
    }
  
    getBucketIndex(nodeId) {
      const distance = BigInt(nodeId) ^ BigInt(this.nodeId);
      return Math.min(distance.toString(2).length - 1, this.numBits - 1);
    }
  
    insertNode(nodeId) {
      const node = new Node(nodeId);
      const bucketIndex = this.getBucketIndex(nodeId);
      const bucket = this.buckets[bucketIndex];
      bucket.addNode(node);
    }
  
    removeNode(nodeId) {
      const bucketIndex = this.getBucketIndex(nodeId);
      const bucket = this.buckets[bucketIndex];
      bucket.removeNode(nodeId);
    }
  
    printBucketContents() {
      console.log("Routing table contents:");
      this.buckets.forEach(bucket => bucket.printContents());
    }
  }
  
 
  const kBucket = new KBucket(3, 24, "00000001"); 
  
//   kBucket.insertNode("00001111");
//   kBucket.insertNode("00001001");
//   kBucket.insertNode("00110100");
//   kBucket.insertNode("10011010");
//   kBucket.insertNode("11100000");
//   kBucket.insertNode("00001111");

for (let i = 0; i < 5; i++) {
    const nodeId = Math.floor(Math.random() * Math.pow(2, 32));
    for (let j = 0; j < 32; j++) {
        kBucket.insertNode(nodeId);
    }
  
}
  
  
  
  //kBucket.removeNode("10011010");
  kBucket.printBucketContents();