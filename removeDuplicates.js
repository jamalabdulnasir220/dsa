// we are given an array of non-decreasing order of elements
/*
eg: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] and we want to display the number of unique elements 
and return the length.

solution: We let x represent the pointer that keeps track of the unique elements, and i 
to traverse the array, then we initialize i with zero, if value of nums[i] is greater than 
the value of nums[x], we increase the x by 1 and assign the nums[i] value to nums[x]
 
*/



const removeDuplicates = (nums) => {
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i]
        }
    }

    return x + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));