let toplam = 0;
let ortalama = 0;
let counter = 0;
let notes = prompt("Lütfen notunuzu giriniz ");
while (notes != "q") {
  counter++;
  toplam += notes;
  notes = prompt("Lütfen notunuzu giriniz ");
}

console.log(toplam / counter);
