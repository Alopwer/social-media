import crypto from 'crypto'
const algorithm = 'aes-256-ctr';
const secretKey = crypto.randomBytes(32);
const initVector  = crypto.randomBytes(16);

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, initVector);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    initVector: initVector.toString('hex'),
    content: encrypted.toString('hex')
  };
};

export const decrypt = (hash: { initVector: string, content: string }) => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.initVector , 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

  return decrpyted.toString();
};
