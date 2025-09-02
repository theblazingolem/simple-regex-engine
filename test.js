import { matchOne } from "./regex.js";

console.log(matchOne("a", "a"));
console.log(matchOne(".", "z"));
console.log(matchOne("", "h"));
console.log(matchOne("a", "b"));
console.log(matchOne("p", ""));
