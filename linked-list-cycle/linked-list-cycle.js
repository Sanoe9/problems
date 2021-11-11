/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false;
    
    let fast = head.next;
    let slow = head;
	
    while(fast && fast.next){
        if(fast === slow) return true;
        
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
//   if (head === null) {
//     return false;
//   } 
//   let turtle = head;
//   let hare = head;
//   while (head && head.next) {
    
      
//     if (hare === turtle) {
//         return true;
//     }
//     turtle = turtle.next;
//     hare = hare.next.next;
//   }  
//   return false;
};