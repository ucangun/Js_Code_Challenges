//! 12- let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program
let string = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";

const numbers = {
  bir: 1,
  iki: 2,
  üç: 3,
  dört: 4,
  beş: 5,
  altı: 6,
  yedi: 7,
  sekiz: 8,
  dokuz: 9,
};

const strToNumber = [];

const toNumber = function () {
  const strArray = string.split(",");
  for (let item of strArray) {
    item = numbers[item];
    strToNumber.push(item);
  }
  console.log(strToNumber.join(""));
};
toNumber();

//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program
