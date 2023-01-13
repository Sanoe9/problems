function chunkArrayInGroups(arr, size) {
    let result = [];
  
    for (let i = 0; i < arr.length; i+=size) {
      const sliced = arr.slice(i, i + size);
      result.push(sliced);
    }
  
    return result;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 3);