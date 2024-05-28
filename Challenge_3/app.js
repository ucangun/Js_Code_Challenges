//*  Fiyatlar dizisinde her bir fiyata %10 zam yapalim. NOT: FOREACH kullanilmali ve orjinal dizi degistirilmeli.
const prices = [100, 250, 50, 89];
prices.forEach((p, i, arr) => {
  arr[i] = Math.trunc(p * 1.1);
});
console.log(prices);

//** Fiyatlar dizisindeki fiyati 90'dan büyük olan degerleri konsola tek tek bastiriniz.
const prices1 = [100, 250, 50, 89];

prices.filter((a) => a > 90).forEach((a) => console.log(a));

//* Fiyatlar dizisindeki fiyati 110'dan küçük olan degerlere %10 artis yapin ve bu degerleri konsola tek tek bastiriniz.

prices1
  .filter((p) => p < 110)
  .map((a) => a * 1.1)
  .forEach((a) => console.log(a));

//* Maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const yeniMaas = maaslar.filter((a) => a < 4000).map((a) => a * 1.5);

console.log(yeniMaas);

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

maaslar
  .filter((a) => a > 4000)
  .map((a) => a * 1.25)
  .forEach((a) => console.log(a));
