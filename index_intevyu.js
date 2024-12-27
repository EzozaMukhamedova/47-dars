// *******SAVOL 1******** //

// Javascriptda qanday ma'lumotlar turlari mavjud? (data types)
// JS da malumotlar 2 ta turga bolinadi:

// primitiv(oddiy), non-primitiv(murakkab).
//  Malumot turini aniqlash uchun typeof dan foydalaniladi.
// primitiv(oddiy): string, number, bigIn(katta sonlar), Boolean (Mantiqiy qiymat), Undefined,  Null, Symbol;
// Bu turlar birgina qiymatni o‘zida saqlaydi.

// 1.1. String (Matn)
// Matn belgilar ketma-ketligini ifodalaydi va qo‘shtirnoq (") yoki bir tirnoq (') ichida yoziladi.

// 1.2. Number (Son)
// Sonlarni ifodalaydi va ularni o‘nlik(3.14) yoki butun(44) son shaklida yozish mumkin.

// 1.3. BigInt (Katta sonlar)
// BigInt juda katta sonlarni saqlash uchun ishlatiladi. yozishda son oxiriga n qo‘shiladi.
// var kattaSon = 1234567890123456789012345678901234567890n;

// 1.4. Boolean (Mantiqiy qiymat)
// qiymat faqat true yoki false bo‘ladi. Asosan, shartlarni tekshirishda ishlatiladi.
// var tengmi = (5 == 5); // true
// var katta = (5 > 10); // false

// 1.5. Undefined
// O‘zgaruvchi e’lon qilinadi, lekin unga qiymat berilmasa, uning qiymati undefined bo‘ladi.
// var qiymat;
// console.log(qiymat); // undefined

// 1.6. Null
// Null mavjud bo‘lmagan yoki noto‘g‘ri qiymatni ifodalaydi.
// var qiymat = null;
// console.log(qiymat); // null

// 1.7. Symbol
// Bu ma’lumot turi ES6 versiyasida joriy etilgan va o‘ziga xos, anonim qiymatlarni saqlash uchun ishlatiladi.
// var belgilar = Symbol('yangiSymbol');

// typeof "Salom"; // "string"
// typeof 25; // "number"
// typeof true; // "boolean"
// typeof 1234567890n; // "bigint"
// typeof undefined; // "undefined"
// typeof null; // "object" (JavaScript xatosi)
// typeof Symbol('symbol'); // "symbol"

// 2. Primitiv bo'lmagan turlar /////////
// Primitiv bolmagan tur orqali ko‘p qiymatlarni saqlay olamiz.

// 2.1. Object (Obyekt)
// Obyekt — bu ma’lumotlarni kalit-qiymat(key-value) juftliklari tarzida saqlovchi ma’lumot turi.
// var odam = {
//     ism: "Ezoza",
//     yosh: 20,
//     yashashJoy: "Toshkent"
// };

// 2. Massiv (Array)
// indekslangan ma’lumotlar to‘plami. 0 dan boshlanadi. Massivlar har qanday ma’lumot turini (raqamlar, matnlar, obyektlar, funksiyalar..) o‘z ichiga olishi mumkin.

// 3. Funksiya (Function)
// Funksiyalar JavaScriptda obyekt sifatida ishlaydi. FUnksiya orqali kodlarni qayta qayta yozmasdan, takrorlanishlarsiz oson boshqariladigan qilib yozishda kerak boladi. malum qiymatni olish(argument), uni qayta ishlash va natijani qaytarish(return) qilish uchun ishlatiladi.
// Argument - funksiyaga uzatiladigan malumotlar. (x,y)

// 4. Date (Sana va vaqt)
// Date obyekti JavaScriptda vaqt va sanani saqlash uchun ishlatiladi.
// var bugun = new Date();
// console.log(bugun); // Hozirgi sana va vaqt

// 5. RegExp (Regulyar ifoda)
// bu matnni qidirish yoki almashtirish uchun ishlatiladigan ob'ektlar.
// var pattern = /abc/;

// *******SAVOL 2******** //

// Javascriptda Hoistingni tushuntiring.

// Hoisting JavaScriptda o‘zgaruvchilar va funksiyalarni e’lon qilishni yuqoriga ko‘chiradi. faqat e’lonlar ko‘chiriladi, qiymatlar esa hoisting qilinmaydi.funksiyalar qayerda e’lon qilinishidan qat'iy nazar, ular tegishli doiraga (local yoki global) ko‘chiriladi.

// O‘zgaruvchilarning qiymatlari hoisting qilinmaydi, faqat e’lonlari ko‘chiriladi. Agar o‘zgaruvchi qiymati tayinlanmagan bo‘lsa, u undefined bo‘ladi:
// var x;
// console.log(x); // Natija: undefined
// x = 23;

// elon qilishdan oldin chaqirishi

// *******SAVOL 3******** //
// Nima uchun javascriptda “debugger” so‘zini ishlatamiz? //

// kodni xatoliklardan tozalash (debugging) uchun ishlatiladi. xatoliklarni aniqlashda va tahlil qilishda yordam beradi. Kodni qadamma qadam tekshirish mumkin.
// function add(a, b) {
//     debugger; // Bu joyda kod to'xtaydi pauzadek
//     return a + b;
//   }
// break tsikl yoki switchni boshqarishda ishlatiladi.

// *******SAVOL 4******** //
// “ == “ va “ === “ operatorlari orasidagi farq.

// == operatori faqat qiymatlarni taqqoslaydi, bazan turlarni avtomatik ravishda tenglashtirishda ishlatiladi.
// === operatori esa qiymatlar va ularning turlarini ham taqqoslaydi, faqat ikkalasi ham bir xil bo‘lsa, true qaytaradi.

// === operatori ko‘proq ishlatiladi, chunki u aniq taqqoslashni amalga oshiradi

// *******SAVOL 5******** //
// Javascriptdagi var va let kalit so'zlari orasidagi farq.
// let kalit so'zi 2015-yilda ECMAScript 6 (ES6) versiyasida qo'shilgan.
//  var eski uslubdagi kalit so'z bo'lib, funksionallikni ta'minlashda ko'proq xatoliklar yuzaga kelishi mumkin, chunki u funktsiya doirasida ishlaydi va qayta e'lon qilinishiga ruxsat beradi.
// var x = 5;
// var x = 10; // Muammo yo'q, qayta e'lon qilish mumkin
// console.log(x); // 10
// // let bilan bir xil doirada o'zgaruvchi qayta e'lon qilinishi mumkin emas. Agar shunday qilinsa, SyntaxError yuz beradi.
// eski js xatolarni kormidi

// let y = 5;
// let y = 10; // Error: Identifier 'y' has already been declared

// var: var bilan e'lon qilingan o'zgaruvchi funksiya doirasida (function scope) mavjud bo'ladi. Demak, agar var o'zgaruvchisi funksiyadan tashqarida e'lon qilingan bo'lsa, u global doirada mavjud bo'ladi. ooldin block scope bomagan
// let: let bilan e'lon qilingan o'zgaruvchi esa blok doirasida (block scope) mavjud bo'ladi. Bu degani, agar o'zgaruvchi if, for yoki boshqa blok ichida e'lon qilinsa, faqat shu blok ichida mavjud bo'ladi.
// var: var o'zgaruvchilari hoisted (ko'tarilgan) bo'ladi, ya'ni o'zgaruvchi e'lon qilishdan oldin ham uni ishlatishingiz mumkin, ammo qiymatni o'zgaruvchi e'lon qilinmaguncha olish mumkin emas. O'zgaruvchi boshlang'ich qiymatga undefined bilan boshlanadi.
// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5
// let: let ham hoisted bo'ladi, ammo bu o'zgaruvchi uchun "temporal dead zone" (TDZ) mavjud. Bu degani, o'zgaruvchi blokning boshidan e'lon qilinishigacha unga murojaat qilishda ReferenceError yuz beradi.
// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 10;
// console.log(b); // 10

// *******SAVOL 6******** //
// Javascriptda Implicit Type Coercionni tushuntiring.//

// JavaScriptda implicit type coercion qiymatlarning avtomatik ravishda bir turdan boshqa turga aylantirilishi jarayonidir.
// 1. String Coercion(Majburlash)
// String coercion odatda + operatori ishlatilganida yuz beradi. Agar raqam turidagi qiymat string turidagi qiymatga qo'shilsa, raqam avtomatik ravishda stringga aylantiriladi.
// var x = 3;
// var y = "3";
// console.log(x + y); // Natija: "33"
//  + operatori faqat ikki raqamni qo'shganda matematik natijani qaytaradi:
// var a = 10;
// var b = 20;
// console.log(a + b); // Natija: 30
// - operatorida string raqamga aylantiriladi:
// var x = 3;
// var y = "3";
// console.log(x - y); // Natija: 0

// 2. Boolean Coercion
// Boolean coercion if shartlarida, mantiqiy operatorlarda (&&, ||) va looplarda ishlatiladi. Bu jarayon qiymatni true yoki false ga aylantiradi.
// var a = 220;
// var b = "Hello";
// var c = undefined;

// console.log(a || b); // Natija: 220 (birinchi qiymat Tru)
// console.log(a && b); // Natija: "Hello" (ikkala qiymat Tru)
// console.log(b && c); // Natija: undefined (ikkinchi qiymat Falsy)

// OR ( | | ) operatori - Agar birinchi qiymat haqiqat bo'lsa, birinchi qiymat qaytariladi. Aks holda, har doim ikkinchi qiymat qaytariladi.
// AND ( && ) operatori - Agar ikkala qiymat ham to'g'ri bo'lsa, har doim ikkinchi qiymat qaytariladi. Agar birinchi qiymat noto'g'ri bo'lsa, birinchi qiymat qaytariladi yoki ikkinchi qiymat noto'g'ri bo'lsa, ikkinchi qiymat qaytariladi.
// ' == ' operatori tiplarni emas, qiymatlarni solishtiradi.

// 3. Equality Coercion
// == operatori yordamida qiymatlar solishtirilganda coercion sodir bo'ladi. Bu operator qiymatlarni bir xil turga o'tkazib, so'ngra solishtiradi.
// var a = 12;
// var b = "12";
// console.log(a == b); // Natija: true (ikkala qiymat bir xil turga aylantiriladi)
// Ammo, === operatorida coercion sodir bo'lmaydi. Bu operator nafaqat qiymatlarni, balki ularning turlarini ham solishtiradi.
// var a = 226;
// var b = "226";
// console.log(a === b); // Natija: false (qiymatlar bir xil, lekin turlari farqli)

// *******SAVOL 7******** //
// 7.JavaScript statik tiplangan dasturlash tili yoki dinamik tiplangan dasturlash tili hisoblanadimi?

// ozgaruvchi ochayotganda string deb ochish shart emas

// JavaScriptda o'zgaruvchilar dinamik ravishda turini o'zgartira oladi, shuning uchun JavaScript dinamik turlanish tilidir. Bu JavaScriptning juda moslashuvchan va qulay bo'lishini ta'minlaydi.

// Dinamik turlanish
// JavaScriptda o'zgaruvchi ma'lum bir tur bilan bog'lanmagan bo'ladi. Ya'ni, bir o'zgaruvchi bir vaqtning o'zida turli turdagi qiymatlarni qabul qilishi mumkin. O'zgaruvchilar turini faqat ularning qiymatlari asosida aniqlash mumkin.

// var a = 23;       // a o'zgaruvchisi raqam (number) turida
// a = "Hello World!"; // a o'zgaruvchisi endi string turida
// Bu yerda a o'zgaruvchisi avval raqam turida bo'lib, keyin matn turiga o'zgartiriladi. Bu JavaScriptning dinamik turlanish tizimi sababli amalga oshadi. JavaScriptda o'zgaruvchining turi kod bajarilayotgan paytda avtomatik ravishda aniqlanadi va o'zgartirilishi mumkin.

// Statik turlanish bilan farqi
// Statik turlanishda esa, o'zgaruvchi qanday turga ega bo'lsa, u faqat o'sha turdagi qiymatlarni qabul qiladi. Masalan, Java yoki C++ kabi tillarda, o'zgaruvchining turi kod yozish vaqtida aniqlanadi, va u turga mos kelmaydigan qiymatlarni qabul qilolmaydi.

// *******SAVOL 8******** //
// 8. JavaScript-da NaN xossasi nima?(property)

// NaN (Not-a-Number) - JavaScriptda "raqam emas" qiymatni ifodalaydi.
// NaN - bu raqam bo'lmagan qiymatni ifodalovchi maxsus qiymat bo'lib, matematik yoki hisoblash xatoliklari natijasida yuzaga keladi.
//  hisoblashni amalga oshirish imkonsiz bo'lgan holatlar ifodalanadi. "0/0" kabi mantiqiy xatoliklar natijasida NaN qaytariladi.
// var result = 0 / 0; // NaN
// console.log(result); // NaN

//  Uni tekshirish uchun isNaN() funktsiyasi ishlatiladi, ammo bu funktsiya nafaqat NaN, balki boshqa turdagi noto'g'ri qiymatlarni ham tekshirishi mumkin.

// console.log(typeof NaN); // "number"
// typeof NaN ishlatilganda, u Number turini qaytaradi, chunki NaN aslida Number turidagi maxsus qiymatdir.

// raqam emas?

// isNaN("Hello")  // true, chunki "Hello" raqamga o'zgartirilganda NaN ga aylanadi
// isNaN(345)      // false, chunki 345 raqam bo'lib, NaN emas
// isNaN('1')      // false, chunki '1' raqamga o'zgartirilganda 1 ga aylanadi
// isNaN(true)     // false, chunki true 1 ga o'zgartiriladi
// isNaN(false)    // false, chunki false 0 ga o'zgartiriladi
// isNaN(undefined) // true, chunki undefined raqamga o'zgartirilganda NaN ga aylanadi

// *******SAVOL 9******** //
// 9."Passed by value" va "Passed by reference" tushunchalari nimani anglatadi?

// Passed by Value: Primitive Turlarda
// Primitive turlarda qiymat boshqa o‘zgaruvchiga uzatilganda:
// Qiymat o‘zlashtiriladi, va o‘zgarish boshqa o‘zgaruvchiga ta’sir qilmaydi.

// Yangi xotira joyi ajratiladi.
// Asl qiymat o‘zgarmaydi.
// var x = 10;  // x = 10 saqlanadi
// var y = x;   // y = 10 yangi xotiraga saqlanadi

// // x qiymatini o'zgartiramiz
// x = 20;

// console.log(y); // Natija: 10 (y alohida saqlanadi)
// console.log(x); // Natija: 20

// x ga 10 qiymati berilganda, bir xotira joyida 10 saqlanadi.
// y ga x qiymati uzatilganda, yangi xotira ajratiladi va 10 nusxa ko‘chiriladi.
// x o‘zgartirilsa, bu y ga ta’sir qilmaydi.

// Passed by Reference: Non-Primitive Turlarda
// Non-primitive turlarda qiymat uzatilganda:
// Manzil o‘zlashtiriladi, va bitta obyektga bir nechta o‘zgaruvchi ishora qilsa, o‘zgarish hammaga ta’sir qiladi.

// O‘zgaruvchilar xuddi bitta xotira manziliga ishora qiladi.
// Bir o‘zgaruvchini o‘zgartirish boshqasiga ham ta’sir qiladi.

// var obj1 = { name: "Ali" }; // obj1 bir xotira manzilida saqlanadi
// var obj2 = obj1;           // obj2 obj1 manzilini nusxa oladi

// // obj1 orqali qiymatni o'zgartiramiz
// obj1.name = "Vali";

// console.log(obj2.name); // Natija: "Vali"
// obj1 bir manzilda { name: "Ali" } obyektiga ishora qiladi.
// obj2 ga obj1 qiymati uzatilganda, qiymat emas, manzil uzatiladi.
// obj1 orqali obyekt o‘zgartirilganda, obj2 ham xuddi shu obyektni ko‘rib turadi.

// Xususiyat	    Passed by Value	    Passed by Reference
// Ma’lumot turi	Primitive	        Non-Primitive
// Uzatish turi	    Qiymat nusxasi      Manzil (reference)
//                  uzatiladi	        uzatiladi
// O‘zgarish        Asl qiymat          O‘zgarish hamma
// ta’siri	        ta’sir qilmaydi	    joyda ko‘rinadi
// Xotira joyi	    Har bir             Bitta joyga
//                  o‘zgaruvchida       ishora qilinadi
//                  alohida joy

// *******SAVOL 10******** //
// 10. JavaScript tilida "Immediately Invoked Function" (darhol chaqiriladigan funksiya) nima?

// Darhol chaqiriladigan funktsiya IIFE deb nomlanadi
// U kodni alohida local scopeda bajarishga imkon beradi va global o‘zgaruvchilar bilan to‘qnashuvlardan saqlaydi.

// kodimiz aniqlangan zahoti ishga tushishi kerak. Funktsiya faqat chaqirilganda ishlaydi. Agar funktsiyani chaqirmasak, funktsiya deklaratsiyasi qaytariladi:

// (function () {
//     console.log("IIFE darhol ishladi!"); darhol chisiqhsi uchun log
// })();

// *******SAVOL 11******** //
// 11. JavaScript tilida "strict mode" (qat'iy rejim) nima va uning xususiyatlari qanday?

// Strict Mode JavaScript’ga kiritilgan yangi xususiyat. ES5 (ECMAScript 5) versiyasida. Bu kodni qat’iy va aniq muhitda ishlashini ta’minlaydi. Odatda, JavaScript ba’zi xatolarni o‘tkazib yuboradi (silent errors), ammo Strict Mode rejimida bunday xatolar chiqariladi. Bu esa xatolarni topish va tuzatishni osonlashtiradi.

// Global o‘zgaruvchilarni avtomatik yaratish taqiqlanadi:
// Odatda, o‘zgaruvchi e’lon qilinmasa, u avtomatik ravishda global bo‘ladi. Strict Mode’da bu taqiqlanadi.
// "use strict";
// x = 10; // ReferenceError

// Duplicate arguments taqiqlanadi:
// Bir xil nomdagi argumentlarni ishlatishga ruxsat berilmaydi.
// "use strict";
// function test(a, a) {
//     // SyntaxError: Duplicate parameter name not allowed
// }

// Rezerv so‘zlarni ishlatish taqiqlanadi:
// private, protected, interface kabi rezerv so‘zlardan foydalanish mumkin emas.
// "use strict";
// var private = 10; // SyntaxError

// with operatoriga ruxsat yo‘q:
// Bu operator Strict Mode’da ishlatilmaydi, chunki u kodni noaniq qiladi.
// "use strict";
// with (obj) {
//     // SyntaxError
// }

// this qiymati undefined bo‘lishi mumkin:
// Global kontekstda (window obyekti ishlatilmayotganda) this qiymati undefined bo‘ladi.
// "use strict";
// function test() {
//     console.log(this); // undefined
// }
// test();

// Yashirin xatolar ochib beriladi:

// Odatdagi rejimda jim o‘tib yuboriladigan xatolar Strict Mode’da xabar sifatida qayd etiladi.

// *******SAVOL 12******** //
// 12. JavaScript tilida Higher-Order Functions (Yuqori darajali funksiyalar) nima?

// Bu funksiyalar boshqalarga ishlov beradigan yoki ular bilan ishlaydigan funksiyalardir. Demak, yuqori darajadagi funksiya — bu funksiyalarni argument sifatida qabul qiladigan yoki qaytaradigan funksiyadir.
// JavaScriptda funksiyalar birinchi darajali ob'ektlar (first-class citizens) bo'lib, demak ular boshqa funksiyalarni argument sifatida olishlari yoki funksiyalardan qaytishlari mumkin.

// Higher-Order Functionning xususiyatlari:
// Funksiya sifatida argument qabul qilish: Biror funksiya boshqa funksiyani argument sifatida qabul qilishi mumkin.
// Funksiya qaytarish: Funksiya boshqa funksiyani qaytarishi mumkin.

// Misol 1: Funksiya argument sifatida qabul qilish
// function higherOrder(fn) {
//     fn();  // Bu yerda fn() ni chaqiradi, ya'ni, fn argumenti sifatida olingan funksiya bajariladi.
//   }

//   higherOrder(function() { console.log("Hello world"); }); // "Hello world" ni chiqaradi.

// Misol 2: Funksiya qaytarish
// function higherOrder2() {
//     return function() {
//       return "Do something";
//     }
//   }

//   var x = higherOrder2();  // higherOrder2 funksiyasi boshqa bir funksiya qaytaradi.
//   console.log(x());  // "Do something" ni chiqaradi.

// *******SAVOL 13******** //
// 13.JavaScript tilida "this" kalit so‘zi (keyword) nima?

// this – bu JavaScript tilidagi maxsus kalit so‘z bo‘lib, u hozirgi kontekstdagi obyektga ishora qiladi.

// Dinamik kontekstni boshqarish uchun.
// Kodni qayta ishlatish imkonini beradi.
// Obyektlar va funksiyalarni birgalikda boshqarishda yordam beradi.

// 1. Global kontekstda (window yoki global obyekt):
// Global kontekstda (funksiya yoki kod global darajada bajarilganda) this global obyektga ishora qiladi. Brauzerda bu window, Node.js-da esa global.

// 2. Oddiy funktsiyada:
// Oddiy funksiya ichida this global obyektga ishora qiladi. Ammo strict mode’da ("use strict") u undefined bo‘ladi.
// function oddiyFunksiya() {
//     console.log(this);
// }
// oddiyFunksiya(); // Brauzerda: window, strict mode’da: undefined

// 3. Obyekt metodlarida:
// Obyekt ichidagi funksiyalar (method) kontekstda obyektga ishora qiladi.
// const student = {
//     ism: "Ezoza",
//     salomBer: function() {
//         console.log(`Salom, ${this.ism}`);
//     }
// };
// student.salomBer(); // Natija: Salom, Ezoza
// this obyekt (student) ga ishora qilmoqda.

// 4. Konstruktor funksiyalarda:
// Konstruktor funksiyada this yangi yaratilayotgan obyektga ishora qiladi.
// function Odam(ism) {
//     this.ism = ism;
// }
// const odam1 = new Odam("Ezoza");
// console.log(odam1.ism); // Natija: Ezoza

// 5. Arrow funksiyalarda:
// Arrow funksiyalarda this tashqi kontekstdan (ularni o‘rab turgan funksiya yoki obyektdan) this qiymatini oladi.

// const guruh = {
//     nomi: "Kodlash guruhi",
//     a'zolar: ["Ali", "Laylo"],
//     ko‘rsatish: function() {
//         this.a'zolar.forEach((a'zo) => {
//             console.log(`${a'zo} - ${this.nomi}`);
//         });
//     }
// };
// guruh.ko‘rsatish();
// // Ali - Kodlash guruhi
// // Laylo - Kodlash guruhi
// Arrow funksiyada this obyektga (guruh) ishora qilmoqda.

// 6. call, apply, va bind usullari bilan boshqarish:
// this qiymatini boshqarish uchun call, apply, va bind ishlatiladi.

// const odam = {
//     ism: "Ali"
// };

// function salomBer() {
//     console.log(`Salom, ${this.ism}`);
// }

// salomBer.call(odam); // Natija: Salom, Ali
// salomBer.apply(odam); // Natija: Salom, Ali

// const bog‘langanFunksiya = salomBer.bind(odam);
// bog‘langanFunksiya(); // Natija: Salom, Ali

// *******SAVOL 14******** //
// 14. Self-Invoking Functions nima?
// ozini ozi chaqiruvchi funksiya

// Self-Invoking Function nima?
// Self-Invoking Function — bu anonim (nomlanmagan) funksiya bo'lib, uni chaqirish uchun qo'shimcha amallar kerak emas. Funksiya aniqlanayotganda, u darhol bajariladi. Buni amalga oshirish uchun funksiya ifodasi ( ) bilan o'ralgan bo'lishi kerak va bu ifodaning oxirida () bilan chaqirilishi kerak.

// (function() {
//     console.log("Bu funksiya darhol bajariladi!");
//   })();

// Self-Invoking Functionning xususiyatlari:
// Avtomatik chaqiriladi: Funksiya aniqlangandan keyin avtomatik ravishda bajariladi.
// Anonim funksiyalar: Odatda anonim funksiyalar ishlatiladi, ya'ni bu funksiyalarga nom berilmaydi.
// IIFE (Immediately Invoked Function Expression): Bu ifoda JavaScriptda o'zgaruvchilarni lokal muhitda saqlash uchun foydalidir, ya'ni global o'zgaruvchilarga ta'sir qilmasdan ish bajaradi.

// Misol 2: IIFE bilan o'zgaruvchilarni lokal saqlash
// var globalVar = "Men globalman!";
// (function() {
//   var localVar = "Men lokalman!";
//   console.log(localVar);  // "Men lokalman!" chiqaradi
// })();
// console.log(globalVar);  // "Men globalman!" chiqaradi
// // console.log(localVar);  // Xatolik: localVar faqat IIFE ichida mavjud

// *******SAVOL 15******** //
// 15. JavaScript’da call(), apply(), va bind() usullari nima? Ular qanday ishlatiladi?

// call(): Funksiyani darhol chaqiradi, this qiymatini aniq belgilaydi va argumentlarni alohida uzatadi.
// apply(): call() ga o'xshash, ammo argumentlarni massiv sifatida uzatadi.
// bind(): Yangi funksiya qaytaradi, bu funksiya keyinroq chaqirilganda this qiymati va argumentlar oldindan belgilangan bo'ladi.

// Bu metodlar JavaScript-dagi this qiymatini boshqarishda juda foydali

// 1. call() metodi:
// call() metodi funksiyani chaqiradi va this qiymatini aniq belgilash imkonini beradi. Buning yordamida, biz o'zgaruvchining this kontekstini boshqalar uchun belgilay olishimiz mumkin.

// function sayHello() {
//     return "Hello " + this.name;
//   }

//   var obj = { name: "Sandy" };

//   console.log(sayHello.call(obj));  // Natija: "Hello Sandy"
// call orqali this qaysi obyektligini korasatish

// 2. apply() metodi:
// apply() metodi call() ga o'xshash, lekin bunda argumentlar alohida uzatilmaydi, balki ular biror array sifatida uzatiladi.

// function saySomething(message) {
//     return this.name + " is " + message;
//   }

//   var person4 = { name: "John" };
//   console.log(saySomething.apply(person4, ["awesome"]));  // Natija: "John is awesome"

// 3. bind() metodi:
// bind() metodi funksiyani darhol chaqirmaydi. U yangi funksiya qaytaradi, bunda this qiymati aniq belgilangan bo'ladi. Keyinchalik, yangi qaytarilgan funksiyani chaqirishimiz mumkin.

// var bikeDetails = {
//     displayDetails: function(registrationNumber, brandName) {
//       return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
//     }
//   };

//   var person1 = { name: "Vivek" };

//   var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

//   detailsOfPerson1();  // Natija: "Vivek, bike details: TS0122, Bullet"
