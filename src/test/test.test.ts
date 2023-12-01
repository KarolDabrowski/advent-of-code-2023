import * as solution from './test';
import { log } from "console";
import { readFile } from '../readfile';
import { join } from 'path';

describe('test-setup', () => {
    it('should return a message', async () => {
        let message = '';
        const lineHandler = (line: string) => { message = line };
        await readFile(join('src', 'test', 'input.txt'), lineHandler);
        const transformedMessage = solution.transformMessage(message);
        
        log(message);
        log(transformedMessage);

        expect(transformedMessage).toEqual('abcde');
    });
});

