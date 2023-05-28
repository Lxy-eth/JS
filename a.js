const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
var KBucket = /** @class */ (function () {
    function KBucket(k, maxNodes) {
        this.k = k;
        this.buckets = [];
        for (var i = 0; i < 160; i++) {
            var bucket = { nodes: [], maxNodes: maxNodes, minDistance: 2n ** BigInt(i), maxDistance: (2n ** BigInt(i + 1)) - 1n };
            this.buckets.push(bucket);
        }
    }
    KBucket.prototype.findBucket = function (nodeId) {
        const storedNodeId = localStorage.getItem("nodeId");
         nodeId = storedNodeId ? BigInt("0x" + storedNodeId) : 0n;
        const distance = BigInt("0x" + nodeId) ^ nodeId;       
         for (var i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].minDistance <= distance && distance <= this.buckets[i].maxDistance) {
                return this.buckets[i];
            }
        }
        throw new Error("No bucket found for node ".concat(nodeId));
    };
    KBucket.prototype.removeNodeFromBucket = function (bucket, nodeId) {
        for (var i = 0; i < bucket.nodes.length; i++) {
            if (bucket.nodes[i].id === nodeId) {
                bucket.nodes.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    KBucket.prototype.insertNode = function (nodeId) {
        nodeId = String(nodeId); // 将 nodeId 转换为字符串类型
        var bucket = this.findBucket(nodeId);
        if (!bucket) {
            return false;
        }
        if (!this.removeNodeFromBucket(bucket, nodeId) && bucket.nodes.length >= bucket.maxNodes) {
            var leastRecentlySeenNode = bucket.nodes[bucket.nodes.length - 1];
            console.log("Least recently seen node ".concat(leastRecentlySeenNode.id, " evicted from bucket"));
            this.removeNodeFromBucket(bucket, leastRecentlySeenNode.id);
        }
        var newNode = document.createElement('div');
        newNode.id = nodeId;
        bucket.nodes.unshift(newNode);
        console.log("Node ".concat(nodeId, " inserted into bucket"));
        return true;
    };
    KBucket.prototype.printBucketContents = function () {
        console.log("K_Bucket contents:");
        for (var i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].nodes.length > 0) {
                console.log("Bucket ".concat(i, ":"));
                for (var j = 0; j < this.buckets[i].nodes.length; j++) {
                    console.log("\t".concat(this.buckets[i].nodes[j].id));
                }
            }
        }
    };
    return KBucket;
}());
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.main = function () {
        var kBucket = new KBucket(20, 10);
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
    };
    return Test;
}());
Test.main();
