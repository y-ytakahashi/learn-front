import identicon from 'identicon.js';
import * as crypto from 'crypto';

export function generateIdenticon(input: string) {
  const hash = crypto.createHash('md5').update(input).digest('hex');
  const data = new identicon(hash, 420).toString();
}
