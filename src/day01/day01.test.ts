import { solveA, solveB } from './day01';
import { readFile } from '../readfile';
import { log } from 'console';
import { join } from 'path';

describe('day01', () => {

    describe('A', () => {
        it('Sample values from the task should correspond to the final result', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day01', 'inputA.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(solution).toEqual(142);
        });

        it('My input should produce a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day01', 'input.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

    describe('B', () => {
        it('Sample values from the task should correspond to the final result', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day01', 'inputB.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(solution).toEqual(281);
        });

        it('My input should produce a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day01', 'input.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

});