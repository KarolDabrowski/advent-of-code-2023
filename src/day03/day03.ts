interface entity {
    value?: number;
    isAdjacent?: boolean;
    globalIndexes: number[];
    indexNeighbours?: number[];
    neighbours?: entity[];
}

function getGlobalIndexes(cols: number, rowIndex: number, colIndex: number, strLen: number) {
    return [...new Array<number>(strLen)].map((x, i) => (rowIndex * cols) + colIndex + i);
}

function checkAdjacency(symbol: entity, partNumber: entity, cols: number): void {
    if (!symbol.indexNeighbours) {
        const gi = symbol.globalIndexes[0];
        const [top, bottom, left, right, tl, tr, bl, br] = [
            gi - cols,
            gi + cols,
            gi - 1,
            gi + 1,
            gi - cols - 1,
            gi - cols + 1,
            gi + cols - 1,
            gi + cols + 1,
        ];
        symbol.indexNeighbours = [top, bottom, left, right, tl, tr, bl, br].filter(x => x >= 0);
    }
    partNumber.isAdjacent = partNumber.globalIndexes.some(x => symbol.indexNeighbours?.includes(x));
    if (!partNumber.isAdjacent) { return; }
    if (!symbol.neighbours) { symbol.neighbours = []; }
    symbol.neighbours.push(partNumber);
}

function addPadding(input: string[]): string[] {
    let padded = input.map(x => `.${x}.`);
    const dots = [...new Array<string>(padded[0].length)].map(() => '.').join('');
    padded = [dots, ...padded, dots];
    return padded;
}

function calcAllPartsAndSymbols(input: string[]): { allPartNumbers: entity[], allSymbols: entity[] } {
    const cols = input[0].length;

    const allPartNumbers: entity[] = [];
    const allSymbols: entity[] = [];

    input = addPadding(input);

    input.forEach((line: string, rowIndex: number) => {

        const numbers = [...line.matchAll(/\d+/g)];
        const symbols = [...line.matchAll(/[^\d.]/g)];

        numbers.forEach(match => {
            allPartNumbers.push({
                value: Number.parseInt(match[0]),
                isAdjacent: false,
                globalIndexes: getGlobalIndexes(cols, rowIndex, match.index ?? -1, match[0].length)
            })
        });

        symbols.forEach(match => {
            allSymbols.push({
                globalIndexes: getGlobalIndexes(cols, rowIndex, match.index ?? -1, match[0].length)
            })
        });
    })


    allSymbols.forEach(symbol => {
        allPartNumbers
            .filter(x => !x.isAdjacent)
            .forEach(partNumber => {
                checkAdjacency(symbol, partNumber, cols);
            })
    })

    return { allPartNumbers, allSymbols };
}

export function solveA(input: string[]): number {
    const { allPartNumbers, } = calcAllPartsAndSymbols(input);
    return (allPartNumbers.filter(x => x.isAdjacent).map(x => x.value) as number[]).reduce((acc, curr) => acc + curr, 0);
}

export function solveB(input: string[]): number {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { allPartNumbers, allSymbols } = calcAllPartsAndSymbols(input);
    return allSymbols.filter(x => x?.neighbours?.length === 2)
        .map(x => x.neighbours as entity[])
        .map(([part1, part2]) => (part1.value ?? 0) * (part2.value ?? 0))
        .reduce((acc, curr) => acc + curr, 0);
}