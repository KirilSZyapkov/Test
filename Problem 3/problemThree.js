function solve(input) {
    let listOfPlayers = {};
    let line;
    while ((line = input.shift()) !== "Results") {
        let [command, ...params] = line.split(`:`);
        if (command === "Add") {
            let [name, hp, energy] = params;
            hp = Number(hp);
            energy = Number(energy);
            if (hp > 100000) {
                hp = 100000;
            }
            if (energy > 100) {
                energy = 100;
            }
            if (!listOfPlayers.hasOwnProperty(name)) {
                listOfPlayers[name] = {
                    'hp': hp,
                    'energy': energy
                }
            } else {
                listOfPlayers[name].hp += hp;
            }
        } else if (command === "Attack") {
            let [attackerName, defenderName, damage] = params;
            damage = Number(damage);
            if (listOfPlayers.hasOwnProperty(attackerName) && listOfPlayers.hasOwnProperty(defenderName)) {
                listOfPlayers[defenderName].hp -= damage;
                listOfPlayers[attackerName].energy--;
                if (listOfPlayers[defenderName].hp <= 0) {
                    delete listOfPlayers[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                }
                if (listOfPlayers[attackerName].energy <= 0) {
                    delete listOfPlayers[attackerName];
                    console.log(`${attackerName} was disqualified!`);
                }
            }
        } else if (command === "Delete") {
            let subCommand = params[0];
            if (subCommand === "All") {
                listOfPlayers = {};
            } else {
                delete listOfPlayers[subCommand];
            }
        }
    }
    let sorted = Object.entries(listOfPlayers);
    sorted.sort((a, b) => {
        let [nameA, infoA] = a;
        let [nameB, infoB] = b;
        return infoB.hp - infoA.hp || nameA.localeCompare(nameB);
    });
    console.log(`People count: ${sorted.length}`);
    sorted.forEach(element => {
        let [name, date] = element;
        console.log(`${name} - ${date.hp} - ${date.energy}`);
    });
}

solve([
        'Add:Bonnie:3000:5',
        'Add:Johny:4000:10',
        'Delete:All',
        'Add:Bonnie:3333:3',
        'Results'
    ])
