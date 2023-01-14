function solution(A) {
    // Implement your solution here
    const min = Math.min(...A);
    const max = Math.max(...A);
    let range = [];
    for (let i = min; i <= max + 1; i++) {
        range.push(i);
    }
    for (let i = 0; i < range.length; i++) {
        if (!A.includes(range[i]) && range[i] > 0) {
            return range[i];
        }
    }
    return 1;
}

const A = [1, 3, 6, 4, 1, 2]; // 5
const B = [1, 2, 3]; // 4
const C = [-1, -3]; // 1

console.log(solution(B));