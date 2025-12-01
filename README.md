# 🧠 JavaScript Day 11 — Objects, Methods & Destructuring

Bu darsda men JavaScript’da Objectlar, Methods va Destructuringni o‘rgandim.
Amaliy misollar orqali obyektlarni yaratish, metodlar qo‘shish va destruktizatsiya yordamida qiymatlarni olishni mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

Objects (Obyektlar)
JavaScript’da obyekt – bu kalit-qiymat (key-value) juftliklar to‘plami.
```const user = {
  name: "Shokhjahon",
  age: 17,
  isStudent: true
};
console.log(user.name); // Shokhjahon 
```
Methods (Metodlar)
Metod – obyekt ichidagi funksiyadir.
``` const user = {
  name: "Shokhjahon",
  greet: function() {
    console.log(`Salom, ${this.name}!`);
  }
};
user.greet(); // Salom, Shokhjahon!
```
Destructuring (Destruktizatsiya)
Destruktizatsiya yordamida obyekt yoki array’dan qiymatlarni tez ajratib olish mumkin.
``` const user = { name: "Shokhjahon", age: 17 };
const { name, age } = user;
console.log(name); // Shokhjahon
console.log(age);  // 17
```


---

## 💻 Kod namunasi / Example code

// Obyekt yaratish
```
const user = {
  name: "Shokhjahon",
  age: 17,
  greet() {
    console.log(`Salom, ${this.name}!`);
  }
};
user.greet(); // Salom, Shokhjahon!
```

// Destruktizatsiya
```
const { name, age } = user;
console.log(name, age); // Shokhjahon 17

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1 2
```


---

## 🧩 Qisqacha nazariya / Short Theory

- Objectlar – kalit-qiymat juftliklari.
- Methodlar – obyekt ichidagi funksiyalar, this bilan ishlaydi.
- Destructuring – obyekt yoki array’dan qiymatlarni tez ajratib olish usuli.

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’da objectlar, methodlar va destructuring yordamida ma’lumotlarni samarali boshqarish.
Buning yordamida quyidagilarni bajara olish kerak:

- Obyekt yaratish va unga method qo‘shish.
- Destructuring orqali obyekt va array qiymatlarini olish.
- this yordamida metod ichida obyektga murojaat qilish.


---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 11-kun — Objects, Methods & Destructuring
