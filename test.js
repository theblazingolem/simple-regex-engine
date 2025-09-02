import { matchOne, match } from "./regex.js";

// console.log(matchOne("a", "a"));
// console.log(matchOne(".", "z"));
// console.log(matchOne("", "h"));
// console.log(matchOne("a", "b"));
// console.log(matchOne("p", ""));

console.log(match("a.c", "abc"));
console.log(match("", "abc"));
console.log(match("a..", "abc"));
console.log(match(".", ""));
