import * as jdenticon from 'jdenticon';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { join ,resolve} from 'path';

export function generateUserIcon(input: string) {
  const hash = crypto.createHash('md5').update(input).digest('hex');
  const size = 200;

  const png = jdenticon.toPng(hash, size);

  const savePath = resolve(__dirname, "../../statics");

  fs.writeFileSync(`${savePath}/${hash}.png`, png);

  return `${savePath}/${hash}.png`;
}
