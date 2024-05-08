function haftaKunlariniChiqarish(son) {
    var kunlar = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    var bugungiKun = new Date().getDay();
    var chiqarishlar = [];

    for (var i = 0; i < son; i++) {
        chiqarishlar.push(kunlar[(bugungiKun + i) % 7]);
    }

    return chiqarishlar;
}

function main() {
    var son = parseInt(prompt("Iltimos, nechta kun davomida alert chiqarishni xohlaysiz?"));
    var chiqarishlar = haftaKunlariniChiqarish(son);
    var chiqarishlarStr = chiqarishlar.join("\n");
    alert(son + " kun davomida quyidagi kunlar alertda chiqadi:\n" + chiqarishlarStr);
}

main();
