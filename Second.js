//Task 1
// const mname = 'Kornel'
// console.log(`Good morning ${mname}.`)

//Task 2

// let mname2 = `Kornel`
// let favcolour = `Black`
// let favtvseries = `Good Place`
// console.log(`My name is ${mname2}, my favourite colour is ${favcolour} 
// and series I enjoy is called ${favtvseries}.`)

//Task 3

// let breakfast = `Beef Sandwich`
// let lunch = `Pasta`
// let dinner = `Granola with yogurt`
// console.log(`For breakfast I ate ${breakfast}, for lunch ${lunch},
// and for dinner ${dinner}`)

// breakfast = prompt(`What did you have for breakfast today?`)
// lunch = prompt(`What did you have for lunch today?`)
// dinner = prompt (`What did you have for dinner today?`)
// console.log(`For breakfast I ate ${breakfast}, for 
// lunch ${lunch}, and for dinner ${dinner}`)

//Task 4

// let randomline = `Just a random string of words`
// console.log(randomline.length)

// let randomline2 = `Just a random string of words`
// console.log(randomline2.slice(7,13))

// let randomline3 = `Just a random string of words`
// console.log(randomline3.toUpperCase())

// let randomline4 = `     Just a random string of words     `
// console.log(randomline4.trim())

// let randomline5 = `Just a random string of words`
// console.log(randomline5.split(``))

// let randomline6 = `Just a random string of words`
// console.log(randomline6.replaceAll(`random`,`accurate`))

// let randomline7 = `Just a random string of words`
// console.log(randomline7.replace(`string`,`line`))

//Task 5

// const bankaccount = {
//     cardNumber: `1234123412341234`,
//     pin: `4321`,
//     balance: 1000
// }

// function ATMcashMachine(){
//     const cardNumber = prompt(`Enter your card number:`);
//     const pin = prompt (`Enter your pin number:`);
//         if (cardNumber === bankaccount.cardNumber && pin === bankaccount.pin)
//         {
//         const withdrawalAmount = parseFloat(prompt(`Enter withdrawal amount:`));
//             if (withdrawalAmount <= 250) 
//             {
//                 if (withdrawalAmount <= bankaccount.balance)
//                 {
//                 bankaccount.balance -= withdrawalAmount;
//                 console.log(`Transaction successful.`);
//                 console.log(`New balance:£${bankaccount.balance}`);
//                 } else 
//                 {
//                 console.log(`Insufficient funds.`)
//                 }
//             } else 
//             {
//             console.log(`Maximum withdrawal limit exceeded.`)
//             }
//         } else 
//         {
//             alert(`Card Rejected.`)
//         }
// }
// ATMcashMachine()

//Task 6

// let favtvshow = ["Good place", "Community", "Archer", 
// "The Office", "Brooklyn 99"]
// let extratvshow = favtvshow.push(`Bojack Horseman`, `Stranger Things`)
// console.log(`My favourite tv shows:`)
// favtvshow.forEach((tvshow, index) => {
//     console.log(`${index + 1} ${tvshow}`)
// })

//Task 7

// function GuessNumber() {
//     let guess = parseInt(prompt(`Guess a number between 1 and 10`));
//     let RandomNumberGenerated;
//     let numberofrolls = 0;
//     do {
//         RandomNumberGenerated = Math.floor(Math.random()*10) +1;
//         numberofrolls++;
//     } while (RandomNumberGenerated !== guess);
//     alert(`Congratulations! Your number ${guess} was found after 
//     ${numberofrolls} rolls.`)
// }

// GuessNumber();

// Task 8 

// function RandomPasswordGenerator (length) {
//     const characters = `qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ1234567890()*&^%$£"!?@/.;#[]<>~:{}`;
//     let password = ``;
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
// return password;
// }

// const passwordLength = 13
// const RandomPassword = RandomPasswordGenerator(passwordLength)
// console.log(`Random password:`, RandomPassword)

