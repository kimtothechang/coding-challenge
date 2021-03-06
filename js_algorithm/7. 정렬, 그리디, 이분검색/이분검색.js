function solution(target, arr) {
  let answer = arr;
  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 12, 23, 32, 57, 65, 81, 87, 99
