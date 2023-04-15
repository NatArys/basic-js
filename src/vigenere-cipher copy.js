// const {
//   NotImplementedError
// } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let mes = [],
      k = [],
      res = [],
      j = 0;

    mes = message.toUpperCase().split('');
    k = key.padEnd(message.length, key).toUpperCase().split('');

    for (let i = 0; i < mes.length; i++) {
      if (mes[i].charCodeAt() > 64 && mes[i].charCodeAt() < 91) {
        let n = (mes[i].charCodeAt() - 65 + k[j].charCodeAt() - 65) % 26;
        res.push(String.fromCharCode(n + 65));
        j++;
      } else res.push(mes[i]);
    }

    console.log(res.join(''));
    return this.dir ? res.join('') : res.reverse().join('');
    // return res.join('');

  }
  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    let mes = [],
      k = [],
      res = [],
      j = 0;

    mes = encryptedMessage.toUpperCase().split('');
    k = key.padEnd(encryptedMessage.length, key).toUpperCase().split('');

    for (let i = 0; i < mes.length; i++) {
      if (mes[i].charCodeAt() > 64 && mes[i].charCodeAt() < 91) {
        let n = (mes[i].charCodeAt() - k[j].charCodeAt()+26) % 26;
        res.push(String.fromCharCode(n + 65));
        j++;
      } else res.push(mes[i]);
    }

    console.log(res.join(''));
    return res.join('');

  }
}

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('KQ$5', 'dfgh')
directMachine.decrypt('NV$5', 'dfgh')

// module.exports = {
//   VigenereCipheringMachine
// };