import { solveA, solveB } from './day04';
import { readFile } from '../readfile';
import { log } from 'console';
import { join } from 'path';

describe('day01', () => {

    describe('A', () => {
        it('Test input should resolve to the sum value given in the problem', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day04', 'test-input.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(solution).toEqual(13);
        });

        it('My input should resolve to a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day04', 'my-input.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

    describe('B', () => {
        it('Test input should resolve to the sum value given in the problem', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day04', 'test-input.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(solution).toEqual(30);
        });

        it('My input should resolve to a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day04', 'my-input.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

});