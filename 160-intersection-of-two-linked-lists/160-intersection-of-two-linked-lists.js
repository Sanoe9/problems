/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;
    
    // we need to loop over both heads at the same time, and when one pointer reaches the end of the list, move it to the other list, and vice versa
    
    while (pointerA !== pointerB) {
        
        pointerA = pointerA.next;
        pointerB = pointerB.next;
        
        if (pointerA === pointerB) {
            return pointerA;
        }
    
        if (pointerA === null) {
            pointerA = headB;
        } 
        
        if (pointerB === null) {
            pointerB = headA;
        }        
    }
    
    return pointerA;
};