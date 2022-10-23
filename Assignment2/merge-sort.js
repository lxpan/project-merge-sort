function merge(A, B) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            result.push(A[i++]);
        } else {
            result.push(B[j++]);
        }
    }

    // copy remaining elements in A
    // for (; i < A.length; i++) {
    //     result.push(A[i]);
    // }
    while (i < A.length) {
        result.push(A[i]);
        i += 1;
    }
    // copy remaining elements in B
    // for (; j < B.length; j++) {
    //     result.push(B[j]);
    // }
    while (j < B.length) {
        result.push(B[j]);
        j += 1;
    }
    return result;
}

function merge_sort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let leftArr = merge_sort(arr.slice(0, arr.length / 2));
    let rightArr = merge_sort(arr.slice(arr.length / 2, arr.length));

    return merge(leftArr, rightArr);
}

let unsortedA = [5, 2, 1, 3, 6, 4];
let unsortedB = [9, 3, 7, 5, 6, 4, 8, 2];

console.log(merge_sort(unsortedA));
