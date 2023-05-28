interface Node {
  id: string;
}

interface Bucket {
  nodes: Node[];
  maxNodes: number;
  minDistance: bigint;
  maxDistance: bigint;
}

class KBucket {
  private k: number;
  private buckets: Bucket[];

  constructor(k: number, maxNodes: number) {
    this.k = k;
    this.buckets = [];
    for (let i = 0; i < 160; i++) {
      let bucket: Bucket = { nodes: [], maxNodes: maxNodes, minDistance: BigInt(2) ** BigInt(i), maxDistance: BigInt(2) ** BigInt(i + 1) - BigInt(1) };
      this.buckets.push(bucket);
    }
  }

  private findBucket(nodeId: string): Bucket {
    let distance: bigint = BigInt("0x" + nodeId) ^ BigInt("0x" + localStorage.getItem("nodeId"));
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].minDistance <= distance && distance <= this.buckets[i].maxDistance) {
        return this.buckets[i];
      }
    }
    throw new Error(`No bucket found for node ${nodeId}`);
  }

  private removeNodeFromBucket(bucket: Bucket, nodeId: string): boolean {
    for (let i = 0; i < bucket.nodes.length; i++) {
      if (bucket.nodes[i].id === nodeId) {
        bucket.nodes.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  public insertNode(nodeId: any): boolean {
    nodeId = String(nodeId); // 将 nodeId 转换为字符串类型
    let bucket: Bucket = this.findBucket(nodeId);
    if (!bucket) {
      return false;
    }
    if (!this.removeNodeFromBucket(bucket, nodeId) && bucket.nodes.length >= bucket.maxNodes) {
      let leastRecentlySeenNode: Node = bucket.nodes[bucket.nodes.length - 1];
      console.log(`Least recently seen node ${leastRecentlySeenNode.id} evicted from bucket`);
      this.removeNodeFromBucket(bucket, leastRecentlySeenNode.id);
    }
    const newNode = document.createElement('div');
    newNode.id = nodeId;
    bucket.nodes.unshift(newNode);  
    console.log(`Node ${nodeId} inserted into bucket`);
    return true;
  }
  public printBucketContents(): void {
    console.log("K_Bucket contents:");
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].nodes.length > 0) {
        console.log(`Bucket ${i}:`);
        for (let j = 0; j < this.buckets[i].nodes.length; j++) {
          console.log(`\t${this.buckets[i].nodes[j].id}`);
        }
      }
    }
  }
}

class Test {
  public static main(): void {
    let kBucket: KBucket = new KBucket(20, 10);
    kBucket.insertNode("0000000000000000000000000000000000000001");
    kBucket.insertNode("0000000000000000000000000000000000000010");
    kBucket.insertNode("0000000000000000000000000000000000000100");
    kBucket.insertNode("0000000000000000000000000000000000001000");
    kBucket.insertNode("0000000000000000000000000000000000010000");
    kBucket.insertNode("0000000000000000000000000000000000100000");
    kBucket.insertNode("0000000000000000000000000000000001000000");
    kBucket.insertNode("0000000000000000000000000000000010000000");
    kBucket.insertNode("0000000000000000000000000000000100000000");
    kBucket.insertNode("0000000000000000000000000000001000000000");
    kBucket.insertNode("0000000000000000000000000000010000000000");
    kBucket.insertNode("0000000000000000000000000000100000000000");
    kBucket.insertNode("0000000000000000000000000001000000000000");
    kBucket.insertNode("0000000000000000000000000010000000000000");
    kBucket.insertNode("0000000000000000000000000100000000000000");
    kBucket.insertNode("0000000000000000000000001000000000000000");
    kBucket.insertNode("0000000000000000000000010000000000000000");
    kBucket.insertNode("0000000000000000000000100000000000000000");
    kBucket.insertNode("0000000000000000000001000000000000000000");
    kBucket.insertNode("0000000000000000000010000000000000000000");
    kBucket.insertNode("0000000000000000000100000000000000000000");
    kBucket.insertNode("0000000000000000001000000000000000000000");
    kBucket.insertNode("0000000000000000010000000000000000000000");
    kBucket.insertNode("0000000000000000100000000000000000000000");
    kBucket.insertNode("0000000000000001000000000000000000000000");
    kBucket.insertNode("0000000000000010000000000000000000000000");
    kBucket.insertNode("0000000000000100000000000000000000000000");
    kBucket.insertNode("0000000000001000000000000000000000000000");
    kBucket.insertNode("0000000000010000000000000000000000000000");
    kBucket.insertNode("0000000000100000000000000000000000000000");
    kBucket.insertNode("0000000001000000000000000000000000000000");
    kBucket.insertNode("0000000010000000000000000000000000000000");
    kBucket.insertNode("0000000100000000000000000000000000000000");
    kBucket.insertNode("0000001000000000000000000000000000000000");
    kBucket.insertNode("0000010000000000000000000000000000000000");
    kBucket.insertNode("0000100000000000000000000000000000000000");
    kBucket.insertNode("0001000000000000000000000000000000000000");
    kBucket.insertNode("0010000000000000000000000000000000000000");
    kBucket.insertNode("0100000000000000000000000000000000000000");
    kBucket.insertNode("1000000000000000000000000000000000000000");

    kBucket.printBucketContents();
  }
}

Test.main();