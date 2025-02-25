/**
 * Merge two sorted arrays into a single array
 * @param left first sorted array
 * @param right second sorted array
 * @returns new sorted array with both arrays
 */

function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

    }

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}