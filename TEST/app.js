function groupAnagrams(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        // Sort the characters of the word
        let sortedWord = arr[i].split('').sort().join('');

        // If the sorted word is already a key, push the original word to its array
        if (map[sortedWord]) {
            map[sortedWord].push(arr[i]);
        } else {
            // Otherwise, create a new array with the original word
            map[sortedWord] = [arr[i]];
        }
    }

    // Convert the object to an array of arrays
    return Object.values(map);
}

let arr = ["bat", "tab", "cat", "tap", "pat"];
console.log(groupAnagrams(arr));