function mapToFirstAndLastNumbers(input: string[]): string[] {
    return input.map((line) => {
        const numbersOnly = line.replace(/\D+/g, '')
        return numbersOnly.slice(0, 1) + numbersOnly.slice(-1);
    })
}

interface Dict {
    [key: string]: string
}

function checkIfWordsAreRemaining(mapObj: Dict, line: string) {
    const mapObjKeys = Object.keys(mapObj);
    const reduced = mapObjKeys.reduce(
        (acc, curr) =>
            acc + line.indexOf(curr), 0);

    return reduced !==
        -mapObjKeys.length
}

export function solveA(input: string[]): number {
    input = mapToFirstAndLastNumbers(input);
    return input.reduce((acc, curr) => acc + Number.parseInt(curr), 0)
}

export function solveB(input: string[]): number {
    const mapObj: Dict = {
        one: "o1e",
        two: "t2o",
        three: "t3e",
        four: "f4r",
        five: "f5e",
        six: "s6x",
        seven: "s7n",
        eight: "e8t",
        nine: "n9e",
    };// o1e, t2o etc. to compensate letters overlap
    const matchNumbersAsWords = new RegExp(Object.keys(mapObj).join("|"), "gi");

    input = input.map((line: string) => {
        while (checkIfWordsAreRemaining(mapObj, line)) {
            line = line.replace(matchNumbersAsWords, (matched) => mapObj[matched])
        }
        return line;
    }
    );
    return solveA(input);
}

