// Execution Context:

// Execution Context va Lexical Environment
// Execution Context — bu JavaScript kodining run qilinish jarayonida yaratiladigan muhitdir. Bu kontekst o'z ichiga oladi:

// Variable Environment: Bu yerda lokal o'zgaruvchilar, funksiyalar va eval-da yaratilgan kodlar saqlanadi.
// Lexical Environment: Ushbu muhitda kodning sintaktik joylashuvi asosida yaratilgan o'zgaruvchilar va blok darajasidagi deklaratsiyalar joylashadi.
// This Binding: JavaScript-da this kalit so'zi qaysi qiymatni oladi, bu kontekstga bog'liq.
// Lexical Environment esa, bir necha ichki tuzilishlarga ega bo'lib, bu tuzilishlar Execution Context tuzilishini shakllantiradi:

// Environment Record: Bu yerda mavjud barcha identifikatorlar (o'zgaruvchilar, funksiyalar) va ularning qiymatlari saqlanadi.
// Outer Environment Reference: Bu referensiya tashqaridagi Lexical Environment'ga ishora qiladi, bu esa qamrovli kontekst yordamida ichki funksiyalar tashqarida yaratilgan o'zgaruvchilarga kirish imkonini beradi.
// Farqlar:

// Execution Context o'z ichiga Lexical Environment'ni oladi, lekin ko'proq ijro vaqtidagi muhitni ta'riflaydi va boshqaradi.
// Lexical Environment asosan kodning yozilish (lexical) strukturasiga bog'liq o'zgaruvchilar va ularga qo'yilgan cheklovlarni boshqaradi.

// Execution Context Yaratilishi
// Creation Phase
// Variable Object yaratiladi: O'zgaruvchilar, funksiya deklaratsiyalari va argumentlar bu bosqichda to'planadi.
// Scope Chain yaratiladi: Joriy muhit va tashqarida joylashgan barcha lexical muhitlar bilan bog'lanish tizimi yaratiladi.
// this qiymati belgilanadi: JavaScript’da this kalit so’zi joriy muhitga qarab o'zgaradi.
// Execution Phase
// Kodni bajarish bosqichi boshlanadi, bu yerda JavaScript-motor o'zgaruvchilarni qiymatlar bilan to'ldiradi va funksiyalarni bajaradi.

// Execution Context va Stack
// Execution Context Stack (yoki "call stack") — bu kod bajarilishi davomida yaratilgan barcha execution contexts’ni saqlaydigan tuzilma. Har bir yangi funksiya chaqirilganda, yangi execution context stack’ga qo'shiladi va funksiya tugaganda olib tashlanadi.

// Execution Context va Lexical Environment
// Execution Context — bu ijro vaqtida yaratiladigan muhit bo'lib, o'z ichiga variable, lexical environment va this binding kabi elementlarni oladi.
// Lexical Environment — bu kodning yozilish tartibiga (lexical structure) asoslangan muhit, u environment record va outer environment reference dan iborat.
// Stack Qanday Ishlaydi
// Call stack, JavaScript kodini tartibli tarzda bajarish uchun funksiya chaqiruvlari tarixini kuzatib boradi. Stack LIFO (Last In, First Out) prinsipiga asoslangan: oxirgi qo'shilgan element birinchi bo'lib olib tashlanadi.

// Stackning Strukturasi
// Stack, stack frames deb ataluvchi qismlardan tashkil topgan. Har bir stack frame bir execution context’ni, masalan, funksiya chaqiruvini va uning parametrlarini o'z ichiga oladi.

// Stack Frame Tushunchasi
// Stack frame — bu alohida funksiya chaqiruvi uchun ajratilgan ma'lumotlar bloki. Bu yerda funksiya argumentlari, lokal o'zgaruvchilar va boshqa ijro etilayotgan funksiya bilan bog'liq ma'lumotlar saqlanadi.

// Lexical Environment va Stack
// Lexical Environment kodning yozilishi asosida yaratilgan muhitni ifodalasa, stack esa bajarilayotgan funksiyalarni va ularning muhitlarini vaqtinchalik saqlaydi.

// Stack va Memory
// Stack, tezkor xotira (memory)ning bir qismi bo'lib, dastur bajarilishi uchun zarur bo'lgan vaqtinchalik ma'lumotlarni saqlaydi. U boshqa xotira tuzilmalari bilan solishtirganda tezroq ma'lumotlarga kirish imkonini beradi.

// Stack Joyi
// Stack, dastur bajarilayotganda funksiya chaqiruvlarini va ularning lokal o'zgaruvchilarini saqlash uchun ishlatiladigan xotira hududi hisoblanadi. Uning hajmi dastur talablariga qarab cheklanishi mumkin, bu esa rekursiv funksiyalar yoki juda chuqur chaqiruv zanjirlari uchun muammolarni keltirib chiqarishi mumkin.
