var nums = [1, 2, 1, 3, 4]


function solution(numbers) {
    emptyArray = []
    for (let i = 0; i < numbers.length - 2; i++){
        if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbersi + 2){
            emptyArray.push('1');
        } else if (i > i + 1 && i + 1 < i + 2){ 
            emptyArray.push('1');
        } else {
            emptyArray.push('0');
        }
    }
    return emptyArray;
}

solution(nums);

let a = [25, 2, 3, 57, 38, 41]


function solution(a) {
    let control = [],
    ans = 0;
    for (let i = 0; i < a.length; i++){
        control.push(0);
    }
    console.log(control)
    for (let i = 0; i < a.length; i++){
        if (control[a[i] -1] > control[ans]){
            ans = a[i] - 1;
        }
    }
    return ans + 1;
}
console.log(solution(a));