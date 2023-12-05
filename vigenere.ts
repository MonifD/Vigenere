import  encrypt  from './src/crypt';
import decrytp from './src/decrypt';

const flag = process.argv[2];
const readline = require('readline-sync');

function vigenere(flag) {
    if (flag == '-c') {
        const key = readline.question('quel est ta cle ?').toLowerCase();
        const content = readline.question('quel est ton contenu ?').toLowerCase();
        encrypt(key, content);
    } else  if (flag == '-d') {
        console.log('decryptage');
        const key = readline.question('quel est ta cle ?').toLowerCase();
        const content = readline.question('quel est ton contenu ?').toLowerCase();
        decrytp(key, content);
    }
}

vigenere(flag);