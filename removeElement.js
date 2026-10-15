// Given an interger array nums, and a number val, remove all the occurrences of val in place.


const removeElement = (nums, val) => {

    let x = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }

    return x;

}

console.log(removeElement([2,1,4,0,4,2,1,5], 5))
