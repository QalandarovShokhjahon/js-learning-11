# 🧠 JavaScript Day 9 — Number Methods

Bu darsda men **JavaScript’da Number Methodlar bilan ishlashni** o‘rgandim.  
Amaliy misollar orqali Number Methodlarini qanday e’lon qilinishi va ishlash tartibini mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

**Number Methods (Raqamlar bilan ishlash usullari)**

Bu darsda men JavaScript’dagi **Number methodlar** bilan tanishdim.  
Ushbu methodlar sonlar ustida turli amallarni bajarishga yordam beradi.  

### Asosiy methodlar:
- `toString()` – sonni stringga o‘zgartiradi.
- `toFixed(n)` – sonni `n` kasr raqamgacha yaxlitlaydi va string qaytaradi.
- `parseInt()` – stringni butun songa o‘zgartiradi.
- `parseFloat()` – stringni o‘nlik son (decimal)ga o‘zgartiradi.
- `Number()` – string yoki booleanni songa o‘zgartiradi.
- `isNaN()` – qiymat son emasligini tekshiradi.
- `valueOf()` – Number objectdan primitive number qiymatni oladi.

### Misol:
```javascript
let num = 12.3456;

console.log(num.toFixed(2)); // "12.35"
console.log(num.toString()); // "12.3456"
console.log(Number("123"));  // 123
console.log(parseInt("45px")); // 45
console.log(parseFloat("3.14abc")); // 3.14
```
---

## 💻 Kod namunasi / Example code

// Sonni stringga o'zgartirish
```let num = 12.3456;
console.log(num.toString()); // "12.3456" 
```

// Sonni 2 kasr raqamgacha yaxlitlash
```console.log(num.toFixed(2)); // "12.35" ```

// Stringdan son olish
```console.log(Number("123"));      // 123
console.log(parseInt("45px"));   // 45
console.log(parseFloat("3.14abc")); // 3.14
```

// Son emasligini tekshirish
```console.log(isNaN("hello")); // true```

// Number objectdan primitive number olish
```let n = new Number(10);
console.log(n.valueOf()); // 10
```

---

## 🧩 Qisqacha nazariya / Short Theory

JavaScript’da sonlar bilan ishlash uchun **Number methodlar** mavjud.  
Ular sonni stringga o‘zgartirish, yaxlitlash, stringdan songa o‘zgartirish, son emasligini tekshirish va Number object’dan primitive son olish kabi amallarni bajaradi.

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi — JavaScript’dagi **Number methodlar** yordamida sonlar bilan samarali ishlashni o‘rganish.  
Buning yordamida quyidagilarni bajara olish kerak:  

- Sonlarni stringga o‘zgartirish va stringlarni songa aylantirish.  
- Sonlarni kerakli kasr raqamgacha yaxlitlash.  
- Son emasligini tekshirish va Number objectdan primitive son olish.  
- Amaliy misollar orqali sonlar bilan ishlashni mustahkamlash.


---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 9-kun — Number Methods
