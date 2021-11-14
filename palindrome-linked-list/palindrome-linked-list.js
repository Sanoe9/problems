/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  
  while(slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let a = head;
  let bHead = reverse(slow.next);
  let b = bHead;
  
  let ans = true;
  while(a && b) {
    if(a.val !== b.val) {
      ans = false;
      break;
    };
    a = a.next;
    b = b.next;
  }
  
  reverse(bHead);
  
  return ans;
};

function reverse(head) {
    let prev = null;
    let curr = head;
    let next = null;
    
    while (curr) {
        next = curr.next; // save the next node before we change the pointers
        curr.next = prev; // change the pointer
        prev = curr;
        curr = next;
    }
    
    return prev;
};

