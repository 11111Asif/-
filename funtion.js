function saraBocor(paragraph) {
var count = 0;

for(let i = 0; i < paragraph.length; i++){
    if(paragraph[i] == '.' || paragraph[i] == '?' || paragraph[i] == '!'){
        count ++;
    }
}
return count;
}

console.log(saraBocor("my name is rabbi? what is your name ! my name . akram "));

function wordCount(boktrita) { 
    let count = 0;
    for(let i = 0; i < boktrita.length; i ++){
        if(boktrita[i] == ' ' && boktrita[i - 1] != ' '){
            count ++
        }
    }
    count ++
    return count;
}

console.log(wordCount('hello  word'))