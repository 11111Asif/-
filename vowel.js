function vowel(paragraph){
    let count = 0;

    for(let i = 0; i < paragraph.length; i ++){
        if(paragraph[i] == "a" || paragraph[i] == "a" || paragraph[i] == "e" || paragraph[i] == "i" || paragraph[i] == "o" || paragraph[i] == "u" ){
            count ++
        }
    }
    return count
}

console.log(vowel("my name is rabbi? what is your name ! my name . akram"))