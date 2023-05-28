const K = 3; // 每个桶的K值

// 定义K_Bucket结构
class K_Bucket {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.nodes = [];
  }

  insertNode(nodeId) {
    let index = this.nodes.findIndex(node => node === nodeId);
    if (index !== -1) {
      // 如果节点已存在，则将其删除并重新插入到最后一个位置
      this.nodes.splice(index, 1);
    }
    this.nodes.push(nodeId);
    // 如果桶中节点数目超过了K值，则将第一个节点移动到相邻的桶中
    if (this.nodes.length > K) {
      let newNodeId = this.nodes.shift();
      return newNodeId;
    }
    return null;
  }

  deleteNode(nodeId) {
    let index = this.nodes.findIndex(node => node === nodeId);
    if (index !== -1) {
      this.nodes.splice(index, 1);
    }
  }

  updateNode(nodeId) {
    this.deleteNode(nodeId);
    return this.insertNode(nodeId);
  }

  findNode(nodeId) {
    let index = this.nodes.findIndex(node => node === nodeId);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  printBucketContents() {
    console.log(`Bucket: ${this.start} - ${this.end}`);
    console.log(`Nodes: ${this.nodes.join(', ')}`);
  }
}

// 定义Peer结构
class Peer {
  constructor(nodeId, k_buckets) {
    this.nodeId = nodeId;
    this.k_buckets = k_buckets;
  }

  insertNodes(nodeId) {
    let k_bucket_index = this.calculateBucketIndex(nodeId);
    let k_bucket = this.k_buckets[k_bucket_index];
    let newNodeId = k_bucket.insertNode(nodeId);
    if (newNodeId !== null) {
      this.splitBucket(k_bucket_index, newNodeId);
    }
  }


  splitBucket(k_bucket_index, newNodeId) {
    let k_bucket = this.k_buckets[k_bucket_index];
    if (k_bucket.nodes.length > K) {
      let newNode = new Peer(newNodeId, this.k_buckets);
      let splitBucket = new K_Bucket(k_bucket.start, k_bucket.end);
      for (let i = 0; i < k_bucket.nodes.length; i++) {
        let node = new Peer(k_bucket.nodes[i], this.k_buckets);
        let bucketIndex = this.calculateBucketIndex(node.nodeId);
        if (bucketIndex === k_bucket_index) {
          splitBucket.insertNode(node.nodeId);
        }
      }
      k_bucket.nodes = [];
      this.k_buckets.splice(k_bucket_index + 1, 0, splitBucket);
      this.insertNodes(newNodeId);
    }
  }

  findNode(nodeId) {
    // 先将节点插入到正确的桶中
    this.insertNodes(nodeId);

    let k_bucket_index = this.calculateBucketIndex(nodeId);
    let k_bucket = this.k_buckets[k_bucket_index];
    if (k_bucket.findNode(nodeId)) {
      return true;
    } else {
      // 如果桶中没有该节点，则从对应的桶中随机抽选2个节点发送FindNode操作
      let randomNodes = this.getRandomNodesFromBucket(k_bucket);
      for (let i = 0; i < randomNodes.length; i++) {
        let node = randomNodes[i];
        // 模拟发送FindNode操作
        let result = node.findNode(nodeId);
        if (result) {
          return true;
        }
      }
      return false;
    }
  }

  getRandomNodesFromBucket(bucket) {
    let randomNodes = [];
    while (randomNodes.length < 2 && bucket.nodes.length > 1) {
      let randomIndex = Math.floor(Math.random() * bucket.nodes.length);
      let randomNode = bucket.nodes[randomIndex];
      if (randomNode !== this.nodeId) {
        randomNodes.push(randomNode);
      }
    }
    return randomNodes.map(nodeId => new Peer(nodeId, this.k_buckets));
  }

  calculateBucketIndex(nodeId) {
    let distance = nodeId ^ this.nodeId;
    let index =  Math.floor(distance / K) ;
    return index;
  }

  
  printBucketContents() {
    console.log(`Peer: ${this.nodeId}`);
    for (let i = 0; i < this.k_buckets.length; i++) {
        let k_bucket = this.k_buckets[i];
        k_bucket.printBucketContents();
        }
      }
}

// let distance = BigInt('0x' + 29) ^ BigInt('0x' + 226);
// console.log(29 ^ 226);
      
      // 初始化5个peer

    function test() {
        const peers = [];
        const k_buckets = [];
        for (let j = 0; j < 100; j++) {
          k_buckets.push(new K_Bucket(j * K, (j + 1) * K - 1));
          }
        //console.log(k_buckets.length)
        for (let i = 0; i < 5; i++) {
        const nodeId = Math.floor(Math.random() * Math.pow(2, 8));
        peers.push(new Peer(nodeId, k_buckets));
        }
        for(let i=0;i<5;i++){
          console.log(peers[i].nodeId);
        }

        for (let i = 0; i < 200; i++) {
          const newNodeId = Math.floor(Math.random() * Math.pow(2, 8));
          const randomIndex = Math.floor(Math.random() * 5);
          const peer = peers[randomIndex];
          peer.insertNodes(newNodeId);
          }
          peers.forEach(peer => peer.printBucketContents());

    }
test()
        // const newNodeId = Math.floor(Math.random() * Math.pow(2, 8));
        // console.log(newNodeId)
        // const randomIndex = Math.floor(Math.random() * 5);
        // //console.log(randomIndex)
        // const peer = peers[randomIndex];
        // //  console.log(peer)
        // // console.log(peer.getNodeDistance(newNodeId));
        // peer.insertNodes(newNodeId);
        // //console.log(k_buckets.length)
        // peer.printBucketContents()
        //console.log(peer.calculateBucketIndex(newNodeId));
        
       
     //console.log(peers[0])
     //console.log(peers.length)
    // console.log(k_buckets[0])
    //console.log(peers[0].findNode(1))
    //peers.forEach(peer => peer.printBucketContents());
      //将200个新节点加入网络
      // const newNodeId = Math.floor(Math.random() * Math.pow(2, 8));
      // console.log(newNodeId)
      // const randomIndex = Math.floor(Math.random() * 5);
      // //console.log(randomIndex)
      // const peer = peers[randomIndex];
      // //  console.log(peer)
      // // console.log(peer.getNodeDistance(newNodeId));
      // peer.insertNodes(newNodeId);
      // //console.log(k_buckets.length)
      // peer.printBucketContents()
      // console.log(peer.calculateBucketIndex(newNodeId));

      //peers.forEach(peer => peer.printBucketContents());
      
      
      
     // 打印每个节点的桶信息
      //peers.forEach(peer => peer.printBucketContents());
      



    