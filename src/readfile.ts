import { join } from 'path';
import { createInterface } from 'readline';
import { createReadStream } from 'fs';

export async function readFile(path: string, callback: (line: string) => void): Promise<void> {
    const fileStream = createReadStream(join(path));
    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    for await (const line of rl) {
        callback(line);
    }
}
