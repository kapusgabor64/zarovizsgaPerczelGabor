function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var parosokSzama = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam % 2 === 0) {
            parosokSzama++;
        }
    }
    return parosokSzama;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredmeny = fuggveny();
    var tisztitottEredmeny = eredmeny.replace(/\s/g, '');
    var forditottEredmeny = tisztitottEredmeny.split('').reverse().join('');
    return tisztitottEredmeny === forditottEredmeny;
}
