function matchOne(pattern, text) {
    if (!pattern) return true; //'' matches any pattern
    if (!text) return false; // cant match if patten is ''
    if (pattern == ".") return true; // . matches any text
    return pattern === text;
}

function search(pattern, text) {}

function match(pattern, text) {}

module.exports = {
    matchOne,
    match,
    search,
};
