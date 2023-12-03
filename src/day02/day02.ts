interface countObj {
    red: number;
    green: number;
    blue: number;
}

const gameWinConditions: countObj = {
    red: 12,
    green: 13,
    blue: 14
}

function getColorsMax(line: string): [number, countObj] {
    const [index, games] = line.split(':');
    const gameIndex = Number.parseInt(index.replace('Game', ''));
    const gamesSplit = games.split(';')

    //gamessplit
    // 3 red, 7 blue, 4 green
    // 12 blue, 16 red, 4 green
    // 9 red, 2 green
    // 1 blue, 1 green, 1 red

    let pullSplit = gamesSplit.map(x => x.split(','));

    // pullsplit (here 4 pulls from the bag during 1 game)
    // [3 red, 7 blue, 4 green]
    // [12 blue, 16 red, 4 green]
    // [9 red, 2 green]
    // [1 blue, 1 green, 1 red]

    pullSplit = pullSplit.map(x => x.map(y => y.trim()));
    const colorsSplit = pullSplit.map(x => x.map(y => y.split(' ')));

    // colorssplit
    // [[3,red], [7,blue], [4,green]]
    // [[12,blue], [16,red], [4,green]]
    // [[9,red], [2,green]]
    // [[1,blue], [1,green], [1,red]]

    const maxColorValueObj: countObj = {
        red: 0,
        green: 0,
        blue: 0
    }

    colorsSplit.forEach(pull => {
        pull.forEach(([value, color]) => {
            maxColorValueObj[color as keyof countObj] = Math.max(
                maxColorValueObj[color as keyof countObj],
                Number.parseInt(value)
            )
        })
    })
    return [gameIndex, maxColorValueObj];
}

export function solveA(input: string[]): number {
    const gamesSet: number[] = [];
    input.forEach((line: string) => {
        const [gameIndex, maxColorValueObj] = getColorsMax(line);

        if (maxColorValueObj.red <= gameWinConditions.red &&
            maxColorValueObj.green <= gameWinConditions.green &&
            maxColorValueObj.blue <= gameWinConditions.blue) {
            gamesSet.push(gameIndex);
        }

    });

    return gamesSet.reduce((acc, curr) => acc + curr, 0);
}

export function solveB(input: string[]): number {
    const gamesSet: number[] = [];
    input.forEach((line: string) => {
        const [, maxColorValueObj] = getColorsMax(line);
        gamesSet.push(maxColorValueObj.red * maxColorValueObj.green * maxColorValueObj.blue);
    });

    return gamesSet.reduce((acc, curr) => acc + curr, 0);
}