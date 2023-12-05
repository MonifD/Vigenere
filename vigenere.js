"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypt_1 = require("./src/crypt");
var decrypt_1 = require("./src/decrypt");
var flag = process.argv[2];
var readline = require('readline-sync');
function vigenere(flag) {
    if (flag == '-c') {
        var key = readline.question('quel est ta cle ?').toLowerCase();
        var content = readline.question('quel est ton contenu ?').toLowerCase();
        (0, crypt_1.default)(key, content);
    }
    else if (flag == '-d') {
        console.log('decryptage');
        var key = readline.question('quel est ta cle ?').toLowerCase();
        var content = readline.question('quel est ton contenu ?').toLowerCase();
        (0, decrypt_1.default)(key, content);
    }
}
vigenere(flag);
