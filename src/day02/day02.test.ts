import { solveA, solveB } from './day02';
import { readFile } from '../readfile';
import { log } from 'console';
import { join } from 'path';

describe('day01', () => {

    describe('A', () => {
        it('Sample values from the task should correspond to the final result', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day02', 'inputA.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(solution).toEqual(8);
        });

        it('My input should produce a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day02', 'input.txt'), lineHandler);
            const solution = solveA(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

    describe('B', () => {
        it('Sample values from the task should correspond to the final result', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day02', 'inputA.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(solution).toEqual(2286);
        });

        it('My input should produce a number', async () => {
            const lines: string[] = [];
            const lineHandler = (line: string) => lines.push(line);
            await readFile(join('src', 'day02', 'input.txt'), lineHandler);
            const solution = solveB(lines);
            log(solution);
            expect(typeof solution).toBe('number');
        });
    })

});