// 두 수의 합이 target인 index 2개를 찾는 함수
function twoSum(nums: number[], target: number): number[] {
    
    // 해시맵 생성
    const hash = new Map();
    
    // nums의 index
    let index: number = 0;
    
    // Loop: nums
    for(const number of nums) {
        // target을 찾기 위해 (target - 현재숫자)를 뺀 수가 이전 Loop에 set 되어 있는지 확인
        let find = hash.get(target-number);
        
        // 만약 find가 undefined가 아니라면, 이전 Loop에서 값이 set 되었음을 의미, return 하는 값은, [find, index]
        if(find !== undefined) return [find, index];
        
        // hash에 index값을 저장
        hash.set(number, index++);
    }
    
    // 일치하는 값이 없는 경우 그냥 return
    return [];
};
