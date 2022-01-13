/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    // o : boolean
    // i : a string and an array
    // c : n/a
    // e : string empty, return true
    
    let table = new Array(s.length + 1).fill(false);
    
    table[0] = true;
    
    for(let i = 0; i <= s.length; i++){
        if(table[i] === true){
			for(let word of wordDict){
				if(s.slice(i, i + word.length) === word){
					table[i + word.length] = true;
				}
			}
		}
    }
    
    return table[s.length]; 
};