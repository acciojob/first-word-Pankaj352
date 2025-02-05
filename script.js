function firstWord(s) {
    // Trim leading spaces and split by the first space
    return s.trim().split(" ")[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
