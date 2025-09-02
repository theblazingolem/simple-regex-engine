function matchOne(pattern, text) {
    if (!pattern) return true; //'' matches any pattern
    if (!text) return false; // cant match if patten is ''
    if (pattern === ".") return true; // . matches any text
    return pattern === text;
}
function search(pattern, text) {
    if (pattern[0] === "^") {
        return match(pattern.slice(1), text);
    } else {
        return match(".*" + pattern, text);
    }
}

function match(pattern, text) {
    // console.log(pattern, text);
    if (pattern === "") {
        return true; //'' pattern matches any text
    } else if (pattern === "$" && text === "") {
        return true; // $ matches the end of string
    } else if (pattern[1] === "?") {
        return matchQuestion(pattern, text);
    } else if (pattern[1] === "*") {
        return matchStar(pattern, text);
    } else {
        return (
            matchOne(pattern[0], text[0]) && // checks if first chars are equal
            match(pattern.slice(1), text.slice(1)) // recursively passes the pattern and text without the first char
        );
    }
}
function matchStar(pattern, text) {
    return (
        (matchOne(pattern[0], text[0]) && match(pattern, text.slice(1))) ||
        match(pattern.slice(2), text)
    );
}
function matchQuestion(pattern, text) {
    return (
        (matchOne(pattern[0], text[0]) &&
            match(pattern.slice(2), text.slice(1))) ||
        match(pattern.slice(2), text)
    );
}
module.exports = {
    matchOne,
    match,
    search,
};
