const fs = require('fs');

fs.writeFileSync('notes.txt', 'my name is andre');
fs.appendFileSync('notes.txt', '\nI live in Florianopolis');