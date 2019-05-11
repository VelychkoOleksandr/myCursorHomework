function hashToconsole (lines) {
    for (var index = 1; index < lines + 1; index++) {
        var string = "#";
        string = string.repeat(index); 
        console.log(string + "\n");
        
    }
}

hashToconsole(10);