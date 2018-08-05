// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length == 0 || !(strs instanceof Array)){
        return ""
    }
    var firstWord = strs[0];
    for(var i = 0; i < firstWord.length; i++){
        for(var j in strs){
            if(!strs[j].startsWith(firstWord.substring(0,(i + 1)))){
                return firstWord.substring(0,(i));
            }
        }
    }
    return firstWord;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));