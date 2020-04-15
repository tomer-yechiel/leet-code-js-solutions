//https://leetcode.com/problems/reverse-words-in-a-string/
var reverseWords = function(s) {
    return s.split(' ').filter(word => word !== '').reverse().join(' ');
};