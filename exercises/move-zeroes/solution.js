function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    
    // Move all non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
}

// Ejemplo de uso
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);  // Salida: [1, 3, 12, 0, 0]