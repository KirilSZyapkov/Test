function solve(input) {
    let numMessage = input.shift();
    let pattern = /![A-Z][a-z]{2,}!:\[[A-Z a-z]{8,}\]/g;
    let patternWord = /\w+/g;

    for (let a = 0; a < numMessage; a++) {
        let matches = input.shift().match(pattern);
        if (matches !== null) {
            let [command, message] = matches[0].match(patternWord);
            let encrypt =[];
            for(let chr of message ){
                let sybol = chr.charCodeAt();
                encrypt.push(sybol);
            }
            console.log(`${command}: ${encrypt.join(` `)}`);
        } else {
            console.log("The message is invalid");
        }
    }

}

solve([
        '3',
        '!play!:[TheNewSong]',
        '!Ride!:[Bike]',
        '!Watch!:[LordofTheRings]'
    ])