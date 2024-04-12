function twoNumberSum(array, targetSum) {
    const nums = {};  // ハッシュテーブルを初期化
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;