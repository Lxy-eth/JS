// type Contact = {
//     id: string;
//     address: string;
//   }
  
//   class Bucket {
//     public contacts: Contact[] = [];
//     public readonly capacity: number;
  
//     constructor(capacity: number = 20) {
//       this.capacity = capacity;
//     }
  
//     public add(contact: Contact): boolean {
//       let found = false;
//       for (let i = 0; i < this.contacts.length; i++) {
//         if (this.contacts[i].id === contact.id) {
//           // 如果联系人已经存在，则将其移至列表的末尾（LRU策略）
//           this.contacts.splice(i, 1);
//           this.contacts.push(contact);
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         // 如果联系人不存在，则将其加入列表
//         if (this.contacts.length < this.capacity) {
//           this.contacts.push(contact);
//         } else {
//           // 如果列表已满，则拒绝加入
//           return false;
//         }
//       }
//       return true;
//     }
  
//     public remove(contact: Contact) {
//       for (let i = 0; i < this.contacts.length; i++) {
//         if (this.contacts[i].id === contact.id) {
//           this.contacts.splice(i, 1);
//           break;
//         }
//       }
//     }
  
//     public getContacts(): Contact[] {
//       return this.contacts;
//     }
  
//     public getContactById(id: string): Contact | undefined {
//       for (let i = 0; i < this.contacts.length; i++) {
//         if (this.contacts[i].id === id) {
//           return this.contacts[i];
//         }
//       }
//       return undefined;
//     }
  
//     public isFull(): boolean {
//       return this.contacts.length >= this.capacity;
//     }
//   }
  
//   class RoutingTable  {
//     public readonly buckets: Bucket[] = [];
    
//     constructor() {
//       for (let i = 0; i < 160; i++) {
//         this.buckets.push(new Bucket());
//       }
//     }
  
//     public addContact(contact: Contact) {
//       const bucketIndex = this.getBucketIndex(contact.id);
//       const bucket = this.buckets[bucketIndex];
//       if (!bucket.add(contact)) {
//         // 如果桶已满，则忽略该联系人（实际情况下应该发送一个Ping消息以确定它是否在线）
//         console.log(`Bucket ${bucketIndex} is full, ignoring contact ${contact.id}`);
//       }
//     }
    
//     public removeContact(contact: Contact) {
//       const bucketIndex = this.getBucketIndex(contact.id);
//       const bucket = this.buckets[bucketIndex];
//       bucket.remove(contact);
//     }
  
//     public findClosestContacts(id: string, count: number = 20): Contact[] {
//       const bucketIndex = this.getBucketIndex(id);
//       const targetBucket = this.buckets[bucketIndex];
//       const closestContacts: Contact[] = [...targetBucket.getContacts()];
//       const leftBound = Math.max(0, bucketIndex - count);
//       const rightBound = Math.min(bucketIndex + count, this.buckets.length - 1);
//       for (let i = bucketIndex - 1; i >= leftBound; i--) {
//         closestContacts.push(...this.buckets[i].getContacts());
//       }
//       for (let i = bucketIndex + 1; i <= rightBound; i++) {
//         closestContacts.push(...this.buckets[i].getContacts());
//       }
//       return closestContacts
//         .sort((a, b) => KademliaUtils.calculateDistance(a.id, id) - KademliaUtils.calculateDistance(b.id, id))
//         .slice(0, count);
//     }
  
//     private getBucketIndex(id: string): number {
//       const prefixLength = parseInt(id.substr(0, 1), 16) * 4;
//       const suffixLength = 160 - prefixLength - 4;
//       const index = prefixLength + Math.floor(parseInt(id.substr(1), 16) / (2 ** suffixLength));
//       return index;
//     }
//   }
//   class KademliaUtils {
//       public static calculateDistance(id1: string, id2: string): number {
//         const unicode1 = this.hexToUnicode(id1);
//         const unicode2 = this.hexToUnicode(id2);
//         let distance = 0;
//         for (let i = 0; i < 20; i++) {
//           distance += (unicode1[i] ^ unicode2[i]).toString(2).split('').filter(bit => bit === '1').length;
//         }
//         return distance;
//       }
    
//       public static isLess(id1: string, id2: string): boolean {
//         const unicode1 = this.hexToUnicode(id1);
//         const unicode2 = this.hexToUnicode(id2);
//         for (let i = 0; i < 20; i++) {
//           if (unicode1[i] < unicode2[i]) {
//             return true;
//           } else if (unicode1[i] > unicode2[i]) {
//             return false;
//           }
//         }
//         return false;
//       }
    
//       private static hexToUnicode(hex: string): number[] {
//         const unicode: number[] = [];
//         for (let i = 0; i < 20; i++) {
//           const c = parseInt(hex.substr(i * 2, 2), 16);
//           unicode.push(c)
//         }
//         return unicode;
//       }
//   }
// function b() {

// }

// // const a = new Bucket(3);

//  const _bucket : Contact = {id :"1",address:"1"}

// // a.add(_bucket)
// // console.log(a.getContacts());

// // var _bucket1 : Contact = {id :'2',address:'2'}
// // a.add(_bucket1)
// // console.log(a.getContacts());

// // var _bucket2 : Contact = {id :'3',address:'3'}
// // a.add(_bucket2)
// // console.log(a.getContacts());

// // console.log(a.getContactById("2"))

// // // a.remove(_bucket);
// // // console.log(a.getContacts())

// // // var _bucket3 : Contact = {id :'4',address:'4'}
// // // a.add(_bucket3)
// // // console.log(a.getContacts());

// //  const b = new RoutingTable();
// // b._add(_bucket);
// //  b.addContact(_bucket);

// // // console.log(b.findClosestContacts('1'));


// // 创建一个新的路由表
// const a : Contact = { id : '000',address : '1000'}
// const routingTable = new RoutingTable();

// // 创建几个联系人对象
// // const a : Contact = { id : '000',address : '1000'}
// const alice : Contact = { id: "0001", address: "127.0.0.1:3000" };
// const bob : Contact = { id: "0002", address: "127.0.0.1:3001" };
// const charlie : Contact = { id: "0003", address: "127.0.0.1:3002" };

// // 添加这些联系人到路由表
// //routingTable.addContact(_bucket);
// routingTable.addContact(a);

// routingTable.addContact(alice);
// routingTable.addContact(bob);
// routingTable.addContact(charlie);

// // 从路由表中查找和一个 ID 最接近的联系人
// const closestContacts = routingTable.findClosestContacts("0005", 2);
// console.log(closestContacts); // 输出：[{ id: "0003", address: "127.0.0.1:3002" }, { id: "0002", address: "127.0.0.1:3001" }]

// // 从路由表中移除一个联系人
// routingTable.removeContact(bob);

// // 从路由表中再次查找最接近的联系人
// const newClosestContacts = routingTable.findClosestContacts("0005", 2);
// console.log(newClosestContacts); // 输出：[{ id: "0003", address: "127.0.0.1:3002" }, { id: "0001", address: "127.0.0.1:3000" }]


// interface Node {
//   id: string;
// }

// interface Bucket {
//   nodes: Node[];
//   maxNodes: number;
//   minDistance: bigint;
//   maxDistance: bigint;
// }

// class KBucket {
//   private k: number;
//   private buckets: Bucket[];

//   constructor(k: number, maxNodes: number) {
//     this.k = k;
//     this.buckets = [];
//     for (let i = 0; i < 160; i++) {
//       let bucket: Bucket = { nodes: [], maxNodes: maxNodes, minDistance: BigInt(2) ** BigInt(i), maxDistance: BigInt(2) ** BigInt(i + 1) - BigInt(1) };
//       this.buckets.push(bucket);
//     }
//   }

//   private findBucket(nodeId: string): Bucket {
//     let distance: bigint = BigInt("0x" + nodeId) ^ BigInt("0x" + localStorage.getItem("nodeId"));
//     for (let i = 0; i < this.buckets.length; i++) {
//       if (this.buckets[i].minDistance <= distance && distance <= this.buckets[i].maxDistance) {
//         return this.buckets[i];
//       }
//     }
//     throw new Error(`No bucket found for node ${nodeId}`);
//   }

//   private removeNodeFromBucket(bucket: Bucket, nodeId: string): boolean {
//     for (let i = 0; i < bucket.nodes.length; i++) {
//       if (bucket.nodes[i].id === nodeId) {
//         bucket.nodes.splice(i, 1);
//         return true;
//       }
//     }
//     return false;
//   }

//   public insertNode(nodeId: any): boolean {
//     nodeId = String(nodeId); // 将 nodeId 转换为字符串类型
//     let bucket: Bucket = this.findBucket(nodeId);
//     if (!bucket) {
//       return false;
//     }
//     if (!this.removeNodeFromBucket(bucket, nodeId) && bucket.nodes.length >= bucket.maxNodes) {
//       let leastRecentlySeenNode: Node = bucket.nodes[bucket.nodes.length - 1];
//       console.log(`Least recently seen node ${leastRecentlySeenNode.id} evicted from bucket`);
//       this.removeNodeFromBucket(bucket, leastRecentlySeenNode.id);
//     }
//     bucket.nodes.unshift({ id: nodeId })
//     console.log(`Node ${nodeId} inserted into bucket`);
//     return true;
//   }
//   public printBucketContents(): void {
//     console.log("K_Bucket contents:");
//     for (let i = 0; i < this.buckets.length; i++) {
//       if (this.buckets[i].nodes.length > 0) {
//         console.log(`Bucket ${i}:`);
//         for (let j = 0; j < this.buckets[i].nodes.length; j++) {
//           console.log(`\t${this.buckets[i].nodes[j].id}`);
//         }
//       }
//     }
//   }
// }
