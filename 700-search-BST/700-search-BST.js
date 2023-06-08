var searchBST = function(root, val) {
    // base case
    if (!root) {
        return null;
    }

    // recursive case
    if (root.val > val) {
        // don't search the right subtree
        return searchBST(root.left, val);
    }

    if (root.val < val) {
        // don't search the left subtree
        return searchBST(root.right, val);
    }

    if (root.val === val) {
        return root;
    }
};