/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let turtle = head;
    let hare = head;
    
    while (hare && hare.next) {
        turtle = turtle.next;
        hare = hare.next.next;
        
        if (hare === turtle) {
            turtle = head;
            while (turtle !== hare){
                turtle = turtle.next;
                hare = hare.next;
            }
            return hare;
        }
    }
    
    return null;
};