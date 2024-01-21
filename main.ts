function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];

    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(szamok: number[]): number {
    let parosokSzama = 0;

    for (const szam of szamok) {
        if (szam % 2 === 0) {
            parosokSzama++;
        }
    }

    return parosokSzama;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    const eredmeny: string = fuggveny();
    const tisztitottEredmeny: string = eredmeny.replace(/\s/g, '');

    const forditottEredmeny: string = tisztitottEredmeny.split('').reverse().join('');

    return tisztitottEredmeny === forditottEredmeny;
}


