// type Contact = {
//     id: string;
//     address: string;
//   }
var KBucket = /** @class */ (function () {
    function KBucket(k, maxNodes) {
        this.k = k;
        this.buckets = [];
        for (var i = 0; i < 160; i++) {
            var bucket = { nodes: [], maxNodes: maxNodes, minDistance: Math.pow(BigInt(2), BigInt(i)), maxDistance: Math.pow(BigInt(2), BigInt(i + 1)) - BigInt(1) };
            this.buckets.push(bucket);
        }
    }
    KBucket.prototype.findBucket = function (nodeId) {
        var distance = BigInt("0x" + nodeId) ^ BigInt("0x" + localStorage.getItem("nodeId"));
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
        bucket.nodes.unshift({ id: nodeId });
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
