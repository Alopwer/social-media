import crypto from 'crypto'
const algorithm = 'aes-256-ctr';
const secretKey = crypto.randomBytes(32);
const initVector  = crypto.randomBytes(16);

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, initVector);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return  `${initVector.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (hash: string) => {
  const [initVector, content] = hash.split(':');
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(initVector , 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);

  return decrpyted.toString();
};
