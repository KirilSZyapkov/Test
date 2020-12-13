function solve(input) {
    let mail = input.shift();
    let line;

    while ((line = input.shift()) !== "Complete") {
        let [command, ...params] = line.split(` `);
        if (command === "Make") {
            if (params[0] === "Upper") {
                mail = mail.toLocaleUpperCase();
                console.log(mail);
            } else if (params[0] === "Lower") {
                mail = mail.toLocaleLowerCase();
                console.log(mail);
            }
        } else if (command === "GetDomain") {
            let domain = mail.slice(-3);
            console.log(domain);
        } else if (command === "GetUsername") {
            if (mail.includes("@")) {
                let index = mail.indexOf("@");
                let userName = mail.substring(0, index);
                console.log(userName);
            } else {
                console.log(`The email ${mail} doesn't contain the @ symbol.`);
            }
        } else if (command === "Replace") {
            let char = params[0];
            if (mail.includes(char)) {
                while (mail.includes(char)) {
                    mail = mail.replace(char, "-");
                }
                console.log(mail);
            } else {
                console.log(mail);
            }
        } else if (command === "Encrypt") {
            let crypt = [];
            for (let a = 0; a < mail.length; a++) {
                let char = mail[a].charCodeAt();
                crypt.push(char);
            }
            mail = crypt.join(` `);
            console.log(mail);
        }
    }
}

solve([
        'Another@Mail.com',
        'Make Lower',
        'GetUsername',
        'GetDomain 3',
        'Encrypt',
        'Complete'
    ])