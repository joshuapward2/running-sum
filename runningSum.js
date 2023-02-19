var runningSum = function(nums) {
     const sum = [nums.length]
     sum[0] = nums[0];

    for(let i = 1; i < nums.length; i++) {

        sum[i] = nums[i] + sum[i - 1] 

      
  
    }
    return sum;
    
};