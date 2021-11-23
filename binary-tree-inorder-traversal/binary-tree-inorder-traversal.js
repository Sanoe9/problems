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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var inorderTraversal = function(root) {
//     const res = [];
//     traverse(root);
//     return res;
    
//     function traverse(node) {
//         if (!node) return;
//         traverse(node.left);
//         res.push(node.val);
//         traverse(node.right);
//     }
    let result = [];
    const traverse = (node) => {
        if (!node) {
            return;
        } 
        // root.left > root.val > root.right
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
        return result;
    };
    
    traverse(root);
    return result;
};