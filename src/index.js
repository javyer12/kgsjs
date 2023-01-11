const messages = [
      "This is where it all begins...",
      "Commit committed",
      "Version control is awful",
      "COMMIT ALL THE FILES!",
      "The same thing we do every night, Pinky - try to take over the world!",
      "Lock S-foils in attack position",
      "👀Watchig👀",
      "💀Death💀",
      "🤪mocking🤪",
      , "This commit is a lie",
      "I'll explain when you're older!",
      "Here be Dragons",
      "Reinventing the wheel. Again.",
      "This is not the commit message you are looking for",
      "Batman! (this commit has no parents)",
];
const errorCommit = [
      "It's still not working❌ ",
      "Something is missing, i don't know what it is, but i'll fix it",
      "Server not working",
      "it's almost done",
      "dependencies are deprecated💔"
]
const ERROR = 'kgs error'
const SUCCESS = "kgs success"
function Commit() {
      const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
      });

      readline.question(`run the commit you wish:  `, name => {
            const success = messages[ Math.floor(Math.random() * messages.length) ];
            const error = messages[ Math.floor(Math.random() * messages.length) ];

            if (name === SUCCESS) {
                  console.log(success)
            } else if (name === ERROR) {
                  console.log(error)
            } else {
                  console.log("wrong command")
            }

            readline.close();
      });
}
// const funnyCommit = (name) => {
//       const message = messages[ Math.floor(Math.random() * messages.length) ];
//       console.log(name);
//       console.log(`\x1b[34m${message}\x1b[89m`);
// };

module.exports = { Commit };

// comando para imprimr opciones
// agregar mas items a las opciones
// actualizar el readme
// publicar