function matchOne(pattern, text) {
    if (!pattern) return true; //'' matches any pattern
    if (!text) return false; // cant match if patten is ''
    if (pattern == ".") return true; // . matches any text
    return pattern === text;
}

function search(pattern, text) {}

function match(pattern, text) {
    if (pattern == "") return true; //'' pattern matches any text
    else
        return (
            matchOne(pattern[0], text[0]) &&
            match(pattern.slice(1), text.slice(1))
        );
}

module.exports = {
    matchOne,
    match,
    search,
};
