import { matchOne, match, search } from "./regex.js";

console.log(matchOne("a", "a"));
console.log(matchOne(".", "z"));
console.log(matchOne("", "h"));
console.log(matchOne("a", "b"));
console.log(matchOne("p", ""));

console.log(match("a.c", "abc"));
console.log(match("", "abc"));
console.log(match("a", "abc"));

console.log(search("^abc", "abc"));
console.log(search("^abcd", "abcd"));
console.log(search("bc", "abcd"));

console.log(search("ab?c", "ac"));
console.log(search("ab?c", "abc"));
console.log(search("a?b?c?", "abc"));
console.log(search("a?b?c?", ""));
