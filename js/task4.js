function typeHashWhile (lines) {
    var index = 1;
    while (index < lines + 1) {
        index % 2 != 0 ? console.log("# # # # #") : console.log(" # # # # #");
        index++;
    }
}

typeHashWhile(7);