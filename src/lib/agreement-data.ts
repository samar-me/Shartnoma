export interface SubSection {
  title?: string;
  badge?: string;
  lead?: string;
  items?: string[];
  paragraphs?: string[];
  callout?: string;
}

export interface AgreementSection {
  id: string;
  number: number;
  title: string;
  lead?: string;
  paragraphs?: string[];
  items?: string[];
  bullets?: string[];
  subsections?: SubSection[];
  notes?: string[];
  callout?: string;
}

export const AGREEMENT_META = {
  documentLabel: "RASMIY TA’LIM VA INTIZOM KELISHUVI",
  title: "Ta’lim va intizom kelishuvi",
  fullTitle: "“0 DAN DASTURGACHA” TA’LIM VA INTIZOM KELISHUVI",
  description:
    "«0 dan dasturgacha» dasturlash va IT kursida ta’lim jarayoni, to‘lov, davomat, intizom, huquq va majburiyatlarni belgilovchi rasmiy kelishuv.",
  courseName: "0 dan dasturgacha",
  courseField: "Dasturlash va IT",
  teacherName: "Samar Baxtiyarov",
  schedule: "Dushanba / Chorshanba / Juma",
  monthlyPrice: "150 000 so‘m / oy",
  monthlyPriceRaw: "150 000 so‘m",
  version: "1.0",
  year: "2026",
};

export const NEW_AGREEMENT_SECTIONS: AgreementSection[] = [
  {
    id: "section-1",
    number: 1,
    title: "KELISHUVNING MAQSADI",
    paragraphs: [
      "Ushbu kelishuv “0 dan dasturgacha” kursida ta’lim jarayonini tartibli, samarali va hurmatga asoslangan holda tashkil etish uchun tuziladi.",
    ],
    lead: "Kelishuvning asosiy maqsadi:",
    bullets: [
      "o‘quvchining muntazam ta’lim olishini ta’minlash;",
      "dars vaqtini samarali ishlatish;",
      "topshiriqlarni bajarish tizimini shakllantirish;",
      "sinfda sog‘lom muhitni saqlash;",
      "o‘quvchi, ota-ona va o‘qituvchi o‘rtasidagi mas’uliyatni aniq belgilash.",
    ],
    callout:
      "Ushbu kelishuv faqat to‘lov masalasini emas, o‘quvchining kursdagi butun ta’lim jarayonini tartibga soladi.",
  },
  {
    id: "section-2",
    number: 2,
    title: "ASOSIY TAMOYILLAR",
    lead: "Kurs quyidagi 5 tamoyil asosida ishlaydi:",
    items: [
      "**1. Intizom** — vaqtida kelish va qoidalarga rioya qilish.",
      "**2. Mas’uliyat** — berilgan vazifani bajarish.",
      "**3. Hurmat** — o‘qituvchi va boshqa o‘quvchilarga hurmat bilan munosabatda bo‘lish.",
      "**4. Amaliyot** — faqat tinglash emas, amalda bajarish.",
      "**5. Natija** — o‘quvchi o‘z natijasi uchun mas’ul.",
    ],
  },
  {
    id: "section-3",
    number: 3,
    title: "O‘QUVCHINING ASOSIY MAJBURIYATLARI",
    lead: "O‘quvchi:",
    items: [
      "1. Darsga vaqtida keladi.",
      "2. Darsda faol qatnashadi.",
      "3. Uy vazifalarini bajaradi.",
      "4. Amaliy topshiriqlarni mustaqil bajarishga harakat qiladi.",
      "5. Dars jarayoniga xalaqit bermaydi.",
      "6. O‘qituvchi va boshqa o‘quvchilarni hurmat qiladi.",
      "7. Kompyuter va boshqa jihozlardan ehtiyotkorlik bilan foydalanadi.",
      "8. Telefon va internetdan faqat ruxsat etilgan yoki o‘quv maqsadlarida foydalanadi.",
      "9. Muammo yoki darsga kelolmaslik holati haqida imkon qadar oldindan xabar beradi.",
      "10. O‘zining o‘quv natijasi uchun mas’uliyatni o‘z zimmasiga oladi.",
    ],
  },
  {
    id: "section-4",
    number: 4,
    title: "DAVOMAT TIZIMI",
    paragraphs: [
      "Darsga muntazam qatnashish kursning asosiy talablaridan biridir.",
    ],
    subsections: [
      {
        title: "Dars qoldirish",
        paragraphs: [
          "O‘quvchi darsga kelolmasa, imkon qadar oldindan o‘qituvchini xabardor qiladi.",
          "Sababsiz yoki takroriy dars qoldirish o‘quvchining o‘zlashtirishiga salbiy ta’sir qiladi.",
          "Qoldirilgan dars uchun o‘quvchi o‘tilgan mavzuni mustaqil o‘zlashtirishga mas’ul.",
        ],
      },
      {
        title: "Muhim qoida",
        callout:
          "O‘quvchining darsga kelmaganligi avtomatik ravishda oylik to‘lovni bekor qilmaydi yoki kamaytirmaydi, agar tomonlar oldindan boshqacha kelishmagan bo‘lsa.",
      },
    ],
  },
  {
    id: "section-5",
    number: 5,
    title: "KECHIKISH TIZIMI",
    paragraphs: [
      "Dars boshlanish vaqti — o‘quvchining darsga tayyor bo‘lish vaqti hisoblanadi.",
    ],
    subsections: [
      {
        title: "Intizom darajalari:",
        items: [
          "**1-marta kechikish** → og‘zaki eslatma.",
          "**2-marta kechikish** → rasmiy ogohlantirish.",
          "**3-marta kechikish** → ota-ona/qonuniy vakilga xabar berish.",
          "**Keyingi takroriy kechikishlar:** → intizomiy holat sifatida ko‘rib chiqiladi.",
        ],
      },
    ],
    notes: [
      "15 daqiqadan ortiq kechikish dars jarayonini jiddiy buzadigan holat sifatida baholanishi mumkin.",
    ],
  },
  {
    id: "section-6",
    number: 6,
    title: "UY VAZIFASI VA TOPSHIRIQLAR TIZIMI",
    paragraphs: [
      "Uy vazifasi va amaliy topshiriqlar kursning majburiy ta’lim qismlaridan hisoblanadi.",
    ],
    subsections: [
      {
        title: "Topshiriq bajarilmasa:",
        items: [
          "**1-marta** → eslatma.",
          "**2-marta** → ogohlantirish.",
          "**3-marta** → ota-ona/qonuniy vakilga xabar.",
          "**Takroriy holat** → o‘quvchining kursni davom ettirishdagi intizomi ko‘rib chiqiladi.",
        ],
      },
    ],
    notes: ["O‘qituvchi o‘quvchining o‘rniga topshiriqni bajarib bermaydi."],
  },
  {
    id: "section-7",
    number: 7,
    title: "DARS VA SINF INTIZOMI",
    lead: "Dars vaqtida:",
    bullets: [
      "ataylab shovqin qilish;",
      "boshqa o‘quvchilarga xalaqit berish;",
      "o‘qituvchining tushuntirishini ataylab buzish;",
      "ruxsatsiz boshqa faoliyat bilan shug‘ullanish;",
      "darsni ataylab to‘xtatish;",
      "boshqa o‘quvchini chalg‘itish",
    ],
    notes: ["taqiqlanadi."],
    subsections: [
      {
        title: "Chora:",
        items: [
          "**Birinchi holat** → ogohlantirish.",
          "**Takroriy holat** → rasmiy intizomiy ogohlantirish.",
          "**Muntazam davom etsa** → ota-ona/qonuniy vakil xabardor qilinadi.",
        ],
      },
    ],
  },
  {
    id: "section-8",
    number: 8,
    title: "TELEFON VA INTERNET",
    paragraphs: [
      "Telefon dars vaqtida o‘quv jarayoniga xalaqit bermasligi shart.",
    ],
    lead: "O‘qishga aloqasi bo‘lmagan:",
    bullets: [
      "o‘yinlar;",
      "ijtimoiy tarmoqlar;",
      "videolar;",
      "chatlar;",
      "boshqa ko‘ngilochar faoliyat",
    ],
    notes: [
      "dars jarayonida taqiqlanadi.",
      "O‘qituvchi darsga xalaqit berayotgan telefondan foydalanishni to‘xtatishni talab qilish huquqiga ega.",
    ],
  },
  {
    id: "section-9",
    number: 9,
    title: "KOMPYUTER VA JIHOZLAR",
    paragraphs: [
      "O‘quvchi kursdagi kompyuter, monitor, klaviatura, sichqoncha va boshqa jihozlarga ehtiyotkorlik bilan munosabatda bo‘ladi.",
    ],
    lead: "Ruxsatsiz:",
    bullets: [
      "qurilmani sozlash;",
      "dastur o‘rnatish;",
      "tizim sozlamalarini o‘zgartirish;",
      "boshqa o‘quvchining fayllariga kirish;",
      "jihozga zarar yetkazish",
    ],
    notes: ["mumkin emas."],
    subsections: [
      {
        title: "Qasddan zarar yetkazish",
        paragraphs: [
          "Bunday holat oddiy intizomiy xato sifatida emas, **jiddiy qoidabuzarlik** sifatida ko‘rib chiqiladi.",
          "Yetkazilgan zarar masalasi amaldagi qonunchilik va tomonlar kelishuvi asosida hal qilinadi.",
        ],
      },
    ],
  },
  {
    id: "section-10",
    number: 10,
    title: "O‘ZARO HURMAT",
    lead: "Kursda quyidagilarga yo‘l qo‘yilmaydi:",
    bullets: [
      "haqorat;",
      "masxara qilish;",
      "tahdid;",
      "kamsitish;",
      "qo‘pollik;",
      "janjal;",
      "tajovuzkor xatti-harakat;",
      "boshqa o‘quvchini ataylab kamsitish yoki qo‘rqitish.",
    ],
    paragraphs: [
      "Muammo yuzaga kelganda u o‘qituvchi ishtirokida muhokama qilinadi.",
    ],
  },
  {
    id: "section-11",
    number: 11,
    title: "“QIZIL CHIZIQLAR”",
    lead: "Quyidagi holatlar og‘ir qoidabuzarlik hisoblanadi:",
    items: [
      "🔴 tahdid qilish;",
      "🔴 jismoniy tajovuz yoki janjal;",
      "🔴 qasddan jihozga zarar yetkazish;",
      "🔴 boshqa shaxsning mulkini ruxsatsiz olish;",
      "🔴 boshqa shaxsning akkaunti yoki fayllariga ruxsatsiz kirish;",
      "🔴 ataylab ta’lim jarayonini jiddiy ravishda buzish;",
      "🔴 takroriy haqorat yoki tajovuzkor xatti-harakat.",
    ],
    paragraphs: [
      "Bunday holatlarda oddiy ogohlantirish bosqichini kutmasdan, **yuqori darajadagi intizomiy chora** qo‘llanishi mumkin.",
      "Voyaga yetmagan o‘quvchi bo‘lsa, ota-ona/qonuniy vakil darhol xabardor qilinishi mumkin.",
    ],
  },
  {
    id: "section-12",
    number: 12,
    title: "INTIZOMNING 4 DARAJALI TIZIMI",
    lead: "Kursda intizomiy choralar imkon qadar quyidagi ketma-ketlikda qo‘llanadi:",
    subsections: [
      {
        title: "🟢 1-DARAJA — ESLATMA",
        lead: "Kichik yoki birinchi marta sodir bo‘lgan xato.",
        paragraphs: ["**Chora:** og‘zaki eslatma."],
      },
      {
        title: "🟡 2-DARAJA — OGOHLANTIRISH",
        lead: "Qoidaning takroran buzilishi.",
        paragraphs: ["**Chora:** o‘quvchiga rasmiy ogohlantirish."],
      },
      {
        title: "🟠 3-DARAJA — OTA-ONANI XABARDOR QILISH",
        lead: "Takroriy yoki tizimli intizom muammosi.",
        paragraphs: [
          "**Chora:** voyaga yetmagan o‘quvchining ota-onasi/qonuniy vakiliga xabar berish va muammoni muhokama qilish.",
        ],
      },
      {
        title: "🔴 4-DARAJA — KURSNI DAVOM ETTIRISHNI QAYTA KO‘RIB CHIQISH",
        lead: "Jiddiy yoki takroriy qoidabuzarlik.",
        paragraphs: [
          "**Chora:** o‘quvchining kursda qolishi yoki shartnomani bekor qilish masalasi ko‘rib chiqiladi.",
        ],
      },
      {
        title: "Muhim qoida:",
        callout:
          "Jiddiy qoidabuzarlik sodir etilganda 1-darajadan boshlash shart emas.",
      },
    ],
  },
  {
    id: "section-13",
    number: 13,
    title: "O‘QITUVCHINING MAJBURIYATLARI",
    lead: "O‘qituvchi:",
    bullets: [
      "darslarni kelishilgan jadval asosida tashkil qiladi;",
      "mavzularni tushunarli va amaliy tarzda tushuntiradi;",
      "o‘quvchining savollariga javob beradi;",
      "amaliy topshiriqlar beradi;",
      "o‘quvchiga hurmat bilan munosabatda bo‘ladi;",
      "ta’lim muhitida tartibni saqlaydi;",
      "muhim o‘zgarishlar haqida imkon qadar oldindan xabar beradi.",
    ],
    paragraphs: [
      "O‘qituvchi ham mazkur kelishuvdagi o‘z majburiyatlariga rioya qilishi kerak.",
    ],
  },
  {
    id: "section-14",
    number: 14,
    title: "O‘QUVCHINING HUQUQLARI",
    lead: "O‘quvchi:",
    bullets: [
      "tushunarli ta’lim olish;",
      "savol berish;",
      "tushunmagan mavzusini qayta izohlashni so‘rash;",
      "o‘z natijasi haqida fikr-mulohaza olish;",
      "hurmatli ta’lim muhitida bo‘lish;",
      "kurs bo‘yicha taklif berish huquqiga ega.",
    ],
  },
  {
    id: "section-15",
    number: 15,
    title: "TO‘LOV VA KURSNI DAVOM ETTIRISH",
    paragraphs: [
      "Kursning oylik to‘lovi: **150 000 so‘m.**",
      "To‘lov kelishilgan muddatda amalga oshiriladi.",
    ],
    lead: "To‘lov kechiktirilsa:",
    items: [
      "**1.** O‘quvchi yoki ota-onaga eslatma beriladi.",
      "**2.** Qarzdorlik davom etsa, tomonlar to‘lov muddatini kelishib oladi.",
      "**3.** Uzoq davom etgan qarzdorlik kursni davom ettirish masalasini ko‘rib chiqishga sabab bo‘lishi mumkin.",
    ],
    notes: [
      "O‘quvchi kursni tark etmoqchi bo‘lsa, imkon qadar oldindan o‘qituvchini xabardor qiladi.",
    ],
  },
  {
    id: "section-16",
    number: 16,
    title: "SHARTNOMANI BEKOR QILISH",
    lead: "Shartnoma:",
    bullets: [
      "tomonlarning o‘zaro kelishuvi bilan;",
      "o‘quvchining kursni tark etishi;",
      "to‘lov majburiyatlarining muntazam bajarilmasligi;",
      "jiddiy yoki takroriy intizom buzilishi;",
      "ta’lim jarayoniga muntazam xalaqit berish;",
      "boshqa muhim shartlarning buzilishi",
    ],
    paragraphs: [
      "asosida bekor qilinishi mumkin.",
      "Voyaga yetmagan o‘quvchi bo‘lsa, imkon qadar ota-ona/qonuniy vakil xabardor qilinadi.",
    ],
  },
  {
    id: "section-17",
    number: 17,
    title: "TOMONLARNING UMUMIY MAS’ULIYATI",
    paragraphs: [
      "O‘qituvchi ta’lim jarayonini tashkil etish uchun javobgar.",
    ],
    lead: "O‘quvchi esa:",
    bullets: [
      "davomati;",
      "topshiriqlari;",
      "mustaqil ishlashi;",
      "intizomi;",
      "o‘z o‘quv natijasi",
    ],
    notes: [
      "uchun mas’ul.",
      "Kursda qatnashishning o‘zi ish, daromad yoki ma’lum lavozimni kafolatlamaydi.",
    ],
  },
  {
    id: "section-18",
    number: 18,
    title: "YAKUNIY QOIDALAR",
    items: [
      "18.1. Ushbu kelishuv o‘quvchi, o‘qituvchi va zarur hollarda ota-ona/qonuniy vakil o‘rtasidagi ta’lim jarayonining asosiy qoidalarini belgilaydi.",
      "18.2. Tomonlar kelishuv shartlarini o‘qib chiqishi va tushunishi kerak.",
      "18.3. Kelishuvda nazarda tutilmagan masalalar tomonlarning o‘zaro kelishuvi va amaldagi qonunchilik asosida hal qilinadi.",
      "18.4. Mazkur kelishuvning maqsadi o‘quvchini jazolash emas, **tartibli, xavfsiz va samarali ta’lim muhitini yaratishdir.**",
    ],
  },
];

export const SIGNATURE_BLOCK = {
  teacher: {
    role: "O‘QITUVCHI",
    name: "Samar Baxtiyarov",
    phonePlaceholder: "_________________________________",
    signPlaceholder: "_________________________________",
  },
  student: {
    role: "O‘QUVCHI",
    namePlaceholder: "_________________________________",
    birthPlaceholder: "_________________________________",
    phonePlaceholder: "_________________________________",
    signPlaceholder: "_________________________________",
  },
  guardian: {
    role: "OTA-ONA / QONUNIY VAKIL",
    subtitle: "Voyaga yetmagan o‘quvchi uchun",
    namePlaceholder: "_________________________________",
    relationPlaceholder: "_________________________________",
    phonePlaceholder: "_________________________________",
    signPlaceholder: "_________________________________",
  },
  contractDate: "«____» ______________ 2026-yil",
  contractNumber: "_____________________________",
  version: "1.0",
};
