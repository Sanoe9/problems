var rangeSumBST = function(root, low, high) {
    let sum = 0;

    // base case
    if (!root) {
        return 0;
    }

    // recursive case
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }
    if (root.left) {
        sum += rangeSumBST(root.left, low, high);
    }
    if (root.right) {
        sum += rangeSumBST(root.right, low, high);
    }
    return sum;
};