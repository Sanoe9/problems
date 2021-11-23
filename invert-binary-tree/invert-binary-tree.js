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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // recursion
    // edge case of root === null
    if (root === null) {
        return null;
    }
    // base case, what will stop recursion? if a node is a leaf ie if a node has no children. then we go back to the parent and switch the left and the right children. 
    if (root.left === undefined && root.right === undefined) {
        return;
    }
    // reursive case, this is when we will have to switch the children?
    let helper = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(helper);
    
    return root;
};