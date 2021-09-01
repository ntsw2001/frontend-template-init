import CryptoJS from 'crypto-js';

// 16位密钥（自定义）
const CRYPT_KEY = '123456789qwertyu';

class Crypt {
  constructor() {
    this.key = CRYPT_KEY;
  }

  //加密
  encrypt(word) {
    let key = CryptoJS.enc.Utf8.parse(this.key);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
  }
}

export default new Crypt();