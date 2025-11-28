'use strict';

// Object → bu ma’lumotlarni kalit va qiymat (key–value) ko‘rinishida saqlaydigan tuzilma.
// let shaxs = {
//     ism: 'Shokhjahon',
//     familiya: 'Qalandarov',
//     kasbi: 'Dasturchi',
//     yosh: 18
// }
// console.log(shaxs);

//  Foydalanuvchidan olingan malumotlarni obyekt qiymatiga qo’shish
// let ism = prompt('Ismingizni kiriting: ');
// let yosh = +prompt('Yoshingizni kiriting: ');
// let kasb = prompt('Kasbingizni kiriting: ');

// let shaxs = {
//     ism: ism,
//     yosh: yosh,
//     kasbi: kasb,
// }

alert(`Ismingiz: ${shaxs.ism}\nYoshingiz: ${shaxs.yosh}\nKasbingiz: ${shaxs.kasbi}`);

// Obyektning xususiyatlarini chaqirish uchun obyekt nomidan keyin nuqta qo’yib xususiyatlarini nomi yoziladi va o’sha hususiyatning qiymati chiqadi.
// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// }

// console.log(shaxs.qiziqish.game)

//  Obyekt ichidagi qiymatni o’zgartirish.
let user = {
    ism: 'John',
    yosh: 23,
    kasbi: 'Dizayner',
}
user.ism = 'Joe';
console.log(user);

// Vazifa:
// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// }
// console.log(shaxs.ism);

// let person = {
//     ism: 'Shokhjahon',
//     yosh: 17,
//     kasbi: 'dasturchi',
//     qiziqish: {
//         sport: 'futbol',
//         game: 'Fifa',
//     }
// }
// console.log(person.qiziqish.sport);

// Object ichiga yangi xususiyat qo'shish uchun obyekt.yangiKey = qiymat; yozuvlaridan foydalaniladi.
// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// }

// shaxs.qiziqish.kitob = "Sherlock Holmes";
// console.log(shaxs.qiziqish.kitob);

// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// };
// shaxs.qiziqish.film = "Inception";
// console.log(shaxs.qiziqish.film);

// delete operatori → obyektning xususiyatlarini o'chirish uchun ishlatiladi, bu orqali ma'lum bir obyektdagi qiymatlarni olib tashlash mumkin.
// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// };

// delete shaxs.kasbi;
// console.log(shaxs);

// Object.keys() metodi → obyektning barcha keylarini (xususiyat nomlarini) array shaklida qaytaradi.
// let shaxs = {
//   ism: "Joe",
//   yil: 2001,
//   kasbi: "Dasturchi",
//   qiziqish: {
//     sport: "Bodybuilding",
//     game: "MineCraft",
//   },
// };

// console.log(Object.keys(shaxs));

// Metod → obyekt ichida yoziladi va obyektning bir qismi sifatida ishlaydi. Ushbu funksiya obyekt ichida yozilganligi sababli, unga metod deb ataladi.

// this → obyektning ichida chaqirilgan metod yoki funksiyaning qaysi obyektga tegishli ekanligini bildiradi.

// let shaxs = {
//     ism: 'Joe',
//     yosh: 23,
//     salom() {
//         console.log(`Salom, mening ismim ${this.ism}, yoshim ${this.yosh} da!`);
        
//     },
// }
// shaxs.salom()

let shaxs = {
  ism: "Joe",
  yosh: 23,
  salom() {
    console.log(`Mening ismim ${this.ism}, Kasbim ${this.kasb}`);
  }
}
shaxs.kasb = "Dasturchi"
shaxs.salom()


let salomlashish = {
    ism: 'Shokhjahon',
    yosh: 17,
    kasb: 'Dasturchi',
    great() {
        console.log(`Salom mening ismim ${this.ism}`);
        
    },
}
salomlashish.great()

let raqam = {
    a: 5,
    b: 15,
    add() {
        console.log(this.a + this.b);
        
    }
}
raqam.add()

let avtomobil = {
    status: 'stop',
    start(status = 'start') {
        console.log('Avtomobil holati: ' + status);
        
    },
}
avtomobil.start()

// Destructuring (Destruktizatsiya) → bu obyekt yoki arraydagi qiymatlarni to'g'ridan-to'g'ri o'zgaruvchilarga ajratib olish usulidir.
// let shaxs = {
//   ism: "Joe",
//   yosh: 23,
//   kasb: "Dasturchi"
// }

// let {ism, yosh, kasb} = shaxs

// console.log(ism);
// console.log(yosh);
// console.log(kasb);

// Default qiymat bilan destruktizatsiya, agar massivda element mavjud bo'lmasa, o'zgaruvchiga belgilangan default qiymat tayinlanadi. Mavjud bo’lsa dastlabgi qiymatini oladi.
let arr = [10, 20];
let [a = 5, b = 10, c = 15] = arr;

console.log(a); 
console.log(b);
console.log(c); 


const person = {
  ism: "Joe",
  year: 2001,
  job: "Front-end developer",
  hobbies: {
    sport: "bodybuilding",
    games: "minecraft",
  },
};

let {ism, year} = person;
console.log(ism);
console.log(year);

