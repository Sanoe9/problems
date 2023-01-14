function solution(A) {
    // Implement your solution here
    const min = Math.min(...A);
    const max = Math.max(...A);
    let range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    for (let i = 0; i < range.length; i++) {
        if (!A.includes(range[i])) {
            return range[i];
        }
    }
}

const A = [1, 3, 6, 4, 1, 2];
const B = [1, 2, 3];
const C = [-1, -3];