/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // o : number
    // i : tree
    // c : n/a
    // e : n/a
    // RECURSION
    // base case:
    if (root === null) {
        return 0;
    }
    if (root.left === undefined && root.right === undefined) {
        return 0;
    }
    
    // recursive case:
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    
    return Math.max(left, right) + 1;
};