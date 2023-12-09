interface Card {
    index: number;
    matchingNumbers: number[];
}

interface CopyCount {
    [key: number]: number;
}

function getCards(input: string[]): Card[] {
    const cards: Card[] = [];
    input.forEach((card: string) => {
        const [cardIndex, cardWinningNumbers, cardNumbers] = card.split(/[:|]+/);
        const index = Number.parseInt(cardIndex.replace('Card', '').trim());
        const winningNumbers = [...cardWinningNumbers.matchAll(/\d+/g)].map(x => Number.parseInt(x[0]));
        const numbers = [...cardNumbers.matchAll(/\d+/g)].map(x => Number.parseInt(x[0]));
        const matchingNumbers = numbers.filter(y => winningNumbers.includes(y));
        cards.push({
            index,
            matchingNumbers
        });
    });
    return cards;
}

export function solveA(input: string[]): number {

    const cards: Card[] = getCards(input);

    return cards
        .map(x => x.matchingNumbers)
        .filter(x => x?.length)
        .map(x => x.slice(0, x.length - 1).reduce((acc, curr) => acc * 2, 1))
        .reduce((acc, curr) => acc + curr, 0)
}

export function solveB(input: string[]): number {

    const cards: Card[] = getCards(input);
    const copyCount: CopyCount = {};

    cards.forEach(x => copyCount[x.index] = 1);
    cards.filter(x => x?.matchingNumbers?.length)
        .forEach(x => {
            let repeat = copyCount[x.index];
            while (repeat--) {
                [...new Array<number>(x.matchingNumbers.length)]
                    .map((_, i) => i)
                    .forEach(y => {
                        if (!copyCount[x.index + y + 1]) { return; }
                        copyCount[x.index + y + 1] += 1;
                    })
            }
        });

    return (Object.values(copyCount) as number[]).reduce((acc, curr) => acc + curr, 0);
}