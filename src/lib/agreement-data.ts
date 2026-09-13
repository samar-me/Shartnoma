import { AgreementSection } from "./types";

export const AGREEMENT_META = {
  documentLabel: "RASMIY TA’LIM KELISHUVI",
  title: "O‘quvchi va o‘qituvchi o‘rtasidagi ta’lim olish va ichki tartib kelishuvi",
  fullTitle: "O‘QUVCHI VA O‘QITUVCHI O‘RTASIDAGI TA’LIM OLISH VA ICHKI TARTIB KELISHUVI",
  description:
    "«0 dan dasturgacha» dasturlash va IT kursida ta’lim jarayoni, to‘lov, davomat, intizom, huquq va majburiyatlarni belgilovchi rasmiy kelishuv.",
  courseName: "0 dan dasturgacha",
  courseField: "Dasturlash va IT",
  teacherName: "Samar Baxtiyarov",
  schedule: "Dushanba / Chorshanba / Juma",
  monthlyPrice: "150 000 so‘m / oy",
  monthlyPriceRaw: "150 000",
  monthlyPriceWords: "bir yuz ellik ming",
  year: "2026",
};

export const AGREEMENT_SECTIONS: AgreementSection[] = [
  {
    id: "section-1",
    number: 1,
    title: "UMUMIY QOIDALAR",
    clauses: [
      {
        id: "1.1",
        number: "1.1",
        text: "Mazkur kelishuv «0 dan dasturgacha» dasturlash va IT kursida ta’lim jarayonini tartibli, xavfsiz va samarali tashkil etish maqsadida tuziladi.",
      },
      {
        id: "1.2",
        number: "1.2",
        text: "Kelishuv o‘qituvchi hamda o‘quvchining ta’lim jarayonidagi huquq, majburiyat va javobgarligini belgilaydi.",
      },
      {
        id: "1.3",
        number: "1.3",
        text: "Voyaga yetmagan o‘quvchi nomidan ushbu kelishuvga rozilik ota-ona yoki qonuniy vakil tomonidan bildiriladi.",
      },
      {
        id: "1.4",
        number: "1.4",
        text: "Kelishuv bilan tanishish va rozilik bildirish orqali o‘quvchi yoki uning ota-onasi/qonuniy vakili undagi shartlarni o‘qiganini, tushunganini va ularga rioya qilish majburiyatini qabul qilganini tasdiqlaydi.",
      },
      {
        id: "1.5",
        number: "1.5",
        text: "Mazkur kelishuvda nazarda tutilmagan masalalar amaldagi qonunchilik hamda tomonlarning o‘zaro kelishuvi asosida hal qilinadi.",
      },
    ],
  },
  {
    id: "section-2",
    number: 2,
    title: "KURS HAQIDA",
    clauses: [
      {
        id: "2.1",
        number: "2.1",
        text: "Kursning nomi: «0 dan dasturgacha».",
      },
      {
        id: "2.2",
        number: "2.2",
        text: "Kursning asosiy maqsadi — o‘quvchilarga dasturlash va IT sohasining asosiy bilimlarini berish, amaliy ko‘nikmalarni shakllantirish va mustaqil ishlash qobiliyatini rivojlantirish.",
      },
      {
        id: "2.3",
        number: "2.3",
        text: "Darslar belgilangan jadval asosida: Dushanba / Chorshanba / Juma kunlari o‘tkaziladi.",
      },
      {
        id: "2.4",
        number: "2.4",
        text: "Kursning oylik to‘lovi: 150 000 (bir yuz ellik ming) so‘m.",
      },
      {
        id: "2.5",
        number: "2.5",
        text: "Dars vaqti yoki jadval zarur holatlarda o‘qituvchi va o‘quvchi/ota-ona o‘rtasidagi kelishuv asosida o‘zgartirilishi mumkin.",
      },
    ],
  },
  {
    id: "section-3",
    number: 3,
    title: "O‘QITUVCHINING MAJBURIYATLARI",
    contentLead: "O‘qituvchi quyidagilarni amalga oshirishga majbur:",
    clauses: [
      {
        id: "3.1",
        number: "3.1",
        text: "Darslarni belgilangan jadval asosida tashkil etish.",
      },
      {
        id: "3.2",
        number: "3.2",
        text: "O‘quv dasturiga muvofiq mavzularni tushunarli va amaliy shaklda tushuntirish.",
      },
      {
        id: "3.3",
        number: "3.3",
        text: "O‘quvchilarning savollariga imkon qadar javob berish va mavzuni tushunishiga ko‘maklashish.",
      },
      {
        id: "3.4",
        number: "3.4",
        text: "Amaliy topshiriqlar, mashqlar va loyihalar berish.",
      },
      {
        id: "3.5",
        number: "3.5",
        text: "O‘quvchilarning darsdagi faolligi va rivojlanishini kuzatish.",
      },
      {
        id: "3.6",
        number: "3.6",
        text: "O‘quvchiga hurmat bilan, kamsitish va haqoratga yo‘l qo‘ymasdan munosabatda bo‘lish.",
      },
      {
        id: "3.7",
        number: "3.7",
        text: "Dars o‘qituvchi sababli bekor qilingan taqdirda, imkoniyatdan kelib chiqib darsni boshqa vaqtda o‘tkazish yoki boshqa kelishilgan tartibda qoplash.",
      },
      {
        id: "3.8",
        number: "3.8",
        text: "O‘quv jarayoniga oid muhim o‘zgarishlar haqida o‘quvchi yoki voyaga yetmagan o‘quvchining ota-onasi/qonuniy vakilini xabardor qilish.",
      },
    ],
  },
  {
    id: "section-4",
    number: 4,
    title: "O‘QUVCHINING MAJBURIYATLARI",
    contentLead: "O‘quvchi quyidagilarga majbur:",
    clauses: [
      {
        id: "4.1",
        number: "4.1",
        text: "Darslarga muntazam qatnashish.",
      },
      {
        id: "4.2",
        number: "4.2",
        text: "Darsga belgilangan vaqtda kelish.",
      },
      {
        id: "4.3",
        number: "4.3",
        text: "Berilgan uy vazifalari va amaliy topshiriqlarni bajarish.",
      },
      {
        id: "4.4",
        number: "4.4",
        text: "Dars davomida o‘qituvchi va boshqa o‘quvchilarga xalaqit bermaslik.",
      },
      {
        id: "4.5",
        number: "4.5",
        text: "O‘qituvchi, boshqa o‘quvchilar va ta’lim muhitiga hurmat bilan munosabatda bo‘lish.",
      },
      {
        id: "4.6",
        number: "4.6",
        text: "Kurs hududidagi kompyuter, noutbuk, monitor, klaviatura, sichqoncha, proyektor va boshqa jihozlardan ehtiyotkorlik bilan foydalanish.",
      },
      {
        id: "4.7",
        number: "4.7",
        text: "Dars vaqtida telefon, internet va boshqa qurilmalardan faqat darsga aloqador maqsadlarda foydalanish.",
      },
      {
        id: "4.8",
        number: "4.8",
        text: "O‘zlashtirishda qiyinchilik yuzaga kelganda savol berish va yordam so‘rash.",
      },
      {
        id: "4.9",
        number: "4.9",
        text: "O‘zining ta’lim natijasi uchun shaxsiy mas’uliyatni o‘z zimmasiga olish.",
      },
    ],
  },
  {
    id: "section-5",
    number: 5,
    title: "TO‘LOV TARTIBI",
    clauses: [
      {
        id: "5.1",
        number: "5.1",
        text: "Kursning oylik to‘lovi 150 000 so‘mni tashkil etadi.",
      },
      {
        id: "5.2",
        number: "5.2",
        text: "To‘lov tomonlar tomonidan kelishilgan muddatda amalga oshiriladi.",
      },
      {
        id: "5.3",
        number: "5.3",
        text: "To‘lov o‘z vaqtida amalga oshirilmagan taqdirda o‘quvchi yoki voyaga yetmagan o‘quvchining ota-onasi/qonuniy vakiliga bu haqda xabar berilishi mumkin.",
      },
      {
        id: "5.4",
        number: "5.4",
        text: "Qarzdorlik davom etgan taqdirda o‘quvchining darslarda qatnashishini vaqtincha cheklash masalasi ko‘rib chiqilishi mumkin.",
      },
      {
        id: "5.5",
        number: "5.5",
        text: "O‘quvchi o‘z xohishi bilan yoki boshqa sabab bilan darsga kelmagan holatlarda, o‘tkazilgan dars uchun oylik to‘lov avtomatik ravishda kamaytirilmaydi.",
      },
      {
        id: "5.6",
        number: "5.6",
        text: "Agar dars o‘qituvchi sababli o‘tkazilmasa, tomonlar darsni boshqa vaqtda o‘tkazish yoki boshqa maqbul tartibda hal qilish bo‘yicha kelishishi mumkin.",
      },
    ],
  },
  {
    id: "section-6",
    number: 6,
    title: "DAVOMAT VA QOLDIRILGAN DARSLAR",
    clauses: [
      {
        id: "6.1",
        number: "6.1",
        text: "O‘quvchi darsga kelolmasligini imkon qadar oldindan o‘qituvchiga ma’lum qilishi lozim.",
      },
      {
        id: "6.2",
        number: "6.2",
        text: "O‘quvchi tomonidan sababsiz yoki oldindan xabar bermasdan dars qoldirilishi uning davomatiga salbiy ta’sir qilishi mumkin.",
      },
      {
        id: "6.3",
        number: "6.3",
        text: "O‘quvchi tomonidan qoldirilgan darsni avtomatik ravishda qayta o‘tkazish o‘qituvchining majburiyati hisoblanmaydi.",
      },
      {
        id: "6.4",
        number: "6.4",
        text: "Qoldirilgan mavzuni mustaqil o‘zlashtirish o‘quvchining mas’uliyatida bo‘ladi.",
      },
      {
        id: "6.5",
        number: "6.5",
        text: "O‘qituvchining vaqti va imkoniyatidan kelib chiqib, qoldirilgan mavzular bo‘yicha qo‘shimcha tushuntirish berilishi mumkin.",
      },
    ],
  },
  {
    id: "section-7",
    number: 7,
    title: "KECHIKISH",
    clauses: [
      {
        id: "7.1",
        number: "7.1",
        text: "O‘quvchi darsga belgilangan vaqtda kelishi kerak.",
      },
      {
        id: "7.2",
        number: "7.2",
        text: "15 daqiqadan ortiq kechikish dars jarayoniga xalaqit berishi mumkin.",
      },
      {
        id: "7.3",
        number: "7.3",
        text: "Kechikib kelgan o‘quvchiga o‘qituvchi o‘tilgan mavzuni to‘liq qayta tushuntirishga majbur emas.",
      },
      {
        id: "7.4",
        number: "7.4",
        text: "Takroriy kechikishlar yuzasidan o‘quvchi bilan suhbat o‘tkazilishi mumkin.",
      },
      {
        id: "7.5",
        number: "7.5",
        text: "Voyaga yetmagan o‘quvchining kechikishlari muntazam takrorlangan taqdirda ota-ona yoki qonuniy vakil xabardor qilinishi mumkin.",
      },
    ],
  },
  {
    id: "section-8",
    number: 8,
    title: "UY VAZIFALARI VA AMALIY TOPSHIRIQLAR",
    clauses: [
      {
        id: "8.1",
        number: "8.1",
        text: "O‘quvchi o‘qituvchi tomonidan berilgan topshiriqlarni belgilangan muddatda bajarishga harakat qilishi kerak.",
      },
      {
        id: "8.2",
        number: "8.2",
        text: "Topshiriqlarni muntazam bajarmaslik o‘quvchining rivojlanishiga salbiy ta’sir qilishi mumkin.",
      },
      {
        id: "8.3",
        number: "8.3",
        text: "O‘qituvchi o‘quvchining o‘rniga uning topshiriqlarini bajarib bermaydi.",
      },
      {
        id: "8.4",
        number: "8.4",
        text: "O‘quvchining natijasi faqat darsdagi ishtirokiga emas, balki mustaqil mashq qilishi va topshiriqlarni bajarishiga ham bog‘liq.",
      },
    ],
  },
  {
    id: "section-9",
    number: 9,
    title: "KOMPYUTER VA BOSHQA JIHOZLARDAN FOYDALANISH",
    clauses: [
      {
        id: "9.1",
        number: "9.1",
        text: "O‘quvchi kurs davomida foydalanadigan barcha texnik jihozlarga ehtiyotkorlik bilan munosabatda bo‘lishi kerak.",
      },
      {
        id: "9.2",
        number: "9.2",
        text: "Jihozlarni ruxsatsiz boshqa joyga ko‘chirish, sozlamalarini o‘zgartirish yoki ataylab buzishga yo‘l qo‘yilmaydi.",
      },
      {
        id: "9.3",
        number: "9.3",
        text: "Jihozga qasddan yoki ehtiyotsizlik oqibatida zarar yetkazilgan taqdirda, holat alohida ko‘rib chiqiladi.",
      },
      {
        id: "9.4",
        number: "9.4",
        text: "Yetkazilgan zarar bilan bog‘liq masalalar amaldagi qonunchilik va tomonlarning kelishuvi asosida hal qilinadi.",
      },
    ],
  },
  {
    id: "section-10",
    number: 10,
    title: "SINF VA TA’LIM MUHITIDAGI TARTIB",
    contentLead: "O‘quvchiga quyidagilar taqiqlanadi:",
    bullets: [
      "dars jarayonini ataylab buzish;",
      "boshqa o‘quvchilarga xalaqit berish;",
      "janjal chiqarish;",
      "tahdid qilish;",
      "haqorat qilish;",
      "boshqa shaxsning buyumlarini ruxsatsiz olish;",
      "jihozlardan noto‘g‘ri foydalanish;",
      "ta’lim muhitiga zarar yetkazuvchi boshqa xatti-harakatlarni amalga oshirish.",
    ],
  },
  {
    id: "section-11",
    number: 11,
    title: "TELEFON VA INTERNETDAN FOYDALANISH",
    clauses: [
      {
        id: "11.1",
        number: "11.1",
        text: "Dars vaqtida telefon imkon qadar ovozsiz rejimda bo‘lishi kerak.",
      },
      {
        id: "11.2",
        number: "11.2",
        text: "Telefon va internetdan darsga aloqador maqsadlarda foydalanishga ruxsat etiladi.",
      },
      {
        id: "11.3",
        number: "11.3",
        text: "Dars vaqtida o‘yinlar, ijtimoiy tarmoqlar, video va boshqa darsga aloqador bo‘lmagan faoliyatlar bilan shug‘ullanish dars jarayoniga xalaqit bermasligi kerak.",
      },
      {
        id: "11.4",
        number: "11.4",
        text: "Darsga xalaqit berayotgan telefon yoki boshqa qurilmadan foydalanishni to‘xtatish o‘qituvchi tomonidan talab qilinishi mumkin.",
      },
    ],
  },
  {
    id: "section-12",
    number: 12,
    title: "O‘ZARO HURMAT VA MULOQOT",
    clauses: [
      {
        id: "12.1",
        number: "12.1",
        text: "O‘qituvchi va o‘quvchi o‘zaro hurmat asosida muloqot qilishi lozim.",
      },
      {
        id: "12.2",
        number: "12.2",
        text: "Haqorat, tahdid, kamsitish, qo‘pollik va tajovuzkor xatti-harakatlarga yo‘l qo‘yilmaydi.",
      },
      {
        id: "12.3",
        number: "12.3",
        text: "Muammoli vaziyatlar imkon qadar tinch muzokara va o‘zaro kelishuv orqali hal qilinadi.",
      },
      {
        id: "12.4",
        number: "12.4",
        text: "Voyaga yetmagan o‘quvchi bilan bog‘liq jiddiy masalalarda ota-ona yoki qonuniy vakil jalb qilinishi mumkin.",
      },
    ],
  },
  {
    id: "section-13",
    number: 13,
    title: "INTIZOMIY CHORALAR",
    contentLead: "Qoidalar buzilgan taqdirda holatning og‘irligi va takrorlanishiga qarab quyidagi choralar qo‘llanishi mumkin:",
    clauses: [
      {
        id: "13.1",
        number: "13.1",
        text: "Birinchi bosqich — og‘zaki ogohlantirish.",
      },
      {
        id: "13.2",
        number: "13.2",
        text: "Ikkinchi bosqich — o‘quvchi bilan individual suhbat.",
      },
      {
        id: "13.3",
        number: "13.3",
        text: "Uchinchi bosqich — voyaga yetmagan o‘quvchining ota-onasi yoki qonuniy vakilini xabardor qilish.",
      },
      {
        id: "13.4",
        number: "13.4",
        text: "To‘rtinchi bosqich — yozma ogohlantirish.",
      },
      {
        id: "13.5",
        number: "13.5",
        text: "Beshinchi bosqich — ta’limni davom ettirish yoki kelishuvni bekor qilish masalasini ko‘rib chiqish.",
      },
    ],
    notes: [
      "Jiddiy qoidabuzarliklarda yuqoridagi bosqichlar ketma-ketligiga amal qilmasdan masalani darhol ko‘rib chiqish mumkin.",
      "Intizomiy choralar o‘quvchini haqoratlash, kamsitish yoki uning sha’nini tahqirlash shaklida amalga oshirilmaydi.",
    ],
  },
  {
    id: "section-14",
    number: 14,
    title: "O‘QUVCHINING HUQUQLARI",
    contentLead: "O‘quvchi:",
    clauses: [
      {
        id: "14.1",
        number: "14.1",
        text: "Tushunarli va amaliy ta’lim olish.",
      },
      {
        id: "14.2",
        number: "14.2",
        text: "O‘tilayotgan mavzular bo‘yicha savollar berish.",
      },
      {
        id: "14.3",
        number: "14.3",
        text: "O‘zlashtirishi bo‘yicha fikr-mulohaza olish.",
      },
      {
        id: "14.4",
        number: "14.4",
        text: "O‘qituvchidan hurmatli munosabat talab qilish.",
      },
      {
        id: "14.5",
        number: "14.5",
        text: "Ta’lim jarayonini yaxshilash bo‘yicha takliflar bildirish.",
      },
      {
        id: "14.6",
        number: "14.6",
        text: "O‘zi bilan bog‘liq muhim ta’lim masalalari bo‘yicha ma’lumot olish huquqiga ega.",
      },
    ],
  },
  {
    id: "section-15",
    number: 15,
    title: "O‘QITUVCHINING HUQUQLARI",
    contentLead: "O‘qituvchi:",
    clauses: [
      {
        id: "15.1",
        number: "15.1",
        text: "Dars tartibiga rioya qilinishini talab qilish.",
      },
      {
        id: "15.2",
        number: "15.2",
        text: "O‘quvchidan berilgan topshiriqlarni bajarishni talab qilish.",
      },
      {
        id: "15.3",
        number: "15.3",
        text: "Dars jarayoniga xalaqit beruvchi faoliyatni to‘xtatishni so‘rash.",
      },
      {
        id: "15.4",
        number: "15.4",
        text: "Belgilangan to‘lovlarning o‘z vaqtida amalga oshirilishini talab qilish.",
      },
      {
        id: "15.5",
        number: "15.5",
        text: "O‘quvchi tomonidan jiddiy yoki takroriy qoidabuzarlik sodir etilgan taqdirda ta’limni davom ettirish masalasini ko‘rib chiqish.",
      },
      {
        id: "15.6",
        number: "15.6",
        text: "O‘quv jarayonining xavfsizligi va tartibini ta’minlash uchun zarur choralarni ko‘rish huquqiga ega.",
      },
    ],
  },
  {
    id: "section-16",
    number: 16,
    title: "KELISHUVNI BEKOR QILISH",
    clauses: [
      {
        id: "16.1",
        number: "16.1",
        text: "Kelishuv tomonlarning o‘zaro roziligi bilan bekor qilinishi mumkin.",
      },
      {
        id: "16.2",
        number: "16.2",
        text: "O‘quvchi ta’limni to‘xtatmoqchi bo‘lsa, imkon qadar oldindan o‘qituvchini xabardor qiladi.",
      },
      {
        id: "16.3",
        number: "16.3",
        text: "Quyidagi holatlarda kelishuvni bekor qilish masalasi ko‘rib chiqilishi mumkin:",
      },
    ],
    bullets: [
      "to‘lovlarni muntazam amalga oshirmaslik;",
      "dars jarayonini muntazam buzish;",
      "o‘qituvchi yoki boshqa o‘quvchilarni haqoratlash;",
      "tahdid yoki tajovuzkor xatti-harakat;",
      "jihozlarga qasddan zarar yetkazish;",
      "kelishuv shartlarini muntazam buzish;",
      "ta’lim jarayoniga jiddiy xalaqit beruvchi boshqa holatlar.",
    ],
    notes: [
      "16.4. Kelishuv bekor qilinganda mavjud moliyaviy majburiyatlar tomonlar o‘rtasida tegishli tartibda hisob-kitob qilinadi.",
    ],
  },
  {
    id: "section-17",
    number: 17,
    title: "TOMONLARNING JAVOBGARLIGI",
    clauses: [
      {
        id: "17.1",
        number: "17.1",
        text: "Tomonlar mazkur kelishuvda belgilangan o‘z majburiyatlariga rioya qilish uchun javobgardir.",
      },
      {
        id: "17.2",
        number: "17.2",
        text: "O‘quvchining o‘zlashtirish darajasi uning davomatiga, topshiriqlarni bajarishiga, mustaqil ishlashiga va amaliyotiga bog‘liq.",
      },
      {
        id: "17.3",
        number: "17.3",
        text: "Kurs o‘quvchiga muayyan ish joyi, lavozim yoki kafolatlangan daromadni ta’minlash majburiyatini yuklamaydi.",
      },
      {
        id: "17.4",
        number: "17.4",
        text: "Tomonlarning qonunchilik bilan belgilangan boshqa huquq va majburiyatlari saqlanib qoladi.",
      },
    ],
  },
  {
    id: "section-18",
    number: 18,
    title: "O‘QUV MATERIALLARI VA INTELLEKTUAL MULK",
    clauses: [
      {
        id: "18.1",
        number: "18.1",
        text: "O‘qituvchi tomonidan tayyorlangan dars materiallari, topshiriqlar, metodikalar va boshqa o‘quv resurslari o‘quv maqsadida foydalanish uchun taqdim etiladi.",
      },
      {
        id: "18.2",
        number: "18.2",
        text: "Ularni o‘qituvchining roziligisiz tijoriy maqsadda sotish, tarqatish yoki o‘z nomidan taqdim etish mumkin emas.",
      },
      {
        id: "18.3",
        number: "18.3",
        text: "O‘quvchining o‘zi tomonidan yaratilgan loyiha va ishlar o‘quvchiga tegishli bo‘lib, ularni kurs doirasida namoyish qilish yoki portfolio sifatida foydalanish masalasi o‘zaro kelishuv asosida hal qilinadi.",
      },
    ],
  },
  {
    id: "section-19",
    number: 19,
    title: "SHAXSIY MA’LUMOTLAR VA MAXFIYLIK",
    clauses: [
      {
        id: "19.1",
        number: "19.1",
        text: "O‘quvchining ism-familiyasi, telefon raqami va boshqa taqdim etilgan ma’lumotlari ta’lim jarayonini tashkil etish maqsadida ishlatilishi mumkin.",
      },
      {
        id: "19.2",
        number: "19.2",
        text: "Shaxsiy ma’lumotlar qonunchilikda nazarda tutilgan holatlardan tashqari tegishli roziliksiz uchinchi shaxslarga oshkor qilinmasligi kerak.",
      },
      {
        id: "19.3",
        number: "19.3",
        text: "O‘quvchining fotosurati, videosi yoki boshqa tasvirini reklama, ijtimoiy tarmoqlar yoki boshqa ommaviy materiallarda foydalanish masalasi alohida rozilik asosida hal qilinadi.",
      },
    ],
  },
  {
    id: "section-20",
    number: 20,
    title: "YAKUNIY QOIDALAR",
    clauses: [
      {
        id: "20.1",
        number: "20.1",
        text: "Mazkur kelishuv o‘quvchi yoki uning ota-onasi/qonuniy vakili tomonidan tanishilib, rozilik bildirilgan kundan boshlab amal qiladi.",
      },
      {
        id: "20.2",
        number: "20.2",
        text: "Kelishuvga o‘zgartirish yoki qo‘shimchalar tomonlarning o‘zaro kelishuvi asosida kiritilishi mumkin.",
      },
      {
        id: "20.3",
        number: "20.3",
        text: "Kelishuvning biror qismi haqiqiy emas deb topilishi qolgan qismlarining amal qilishiga ta’sir qilmaydi.",
      },
      {
        id: "20.4",
        number: "20.4",
        text: "O‘quvchi yoki uning ota-onasi/qonuniy vakili ushbu kelishuvni to‘liq o‘qiganini, mazmunini tushunganini va unda belgilangan shartlarga roziligini tasdiqlaydi.",
      },
      {
        id: "20.5",
        number: "20.5",
        text: "Ushbu kelishuvning qisqa rozilik varaqasi alohida shaklda to‘ldiriladi va asosiy kelishuv bilan bog‘liq tasdiqlovchi hujjat sifatida saqlanadi.",
      },
    ],
  },
  {
    id: "section-21",
    number: 21,
    title: "TOMONLARNING MA’LUMOTLARI",
    signees: [
      {
        role: "O‘QITUVCHI",
        fields: [
          { label: "F.I.Sh.", placeholder: "Samar Baxtiyarov" },
          { label: "Telefon", placeholder: "______________________________" },
          { label: "Imzo", placeholder: "______________________________" },
        ],
      },
      {
        role: "O‘QUVCHI",
        fields: [
          { label: "F.I.Sh.", placeholder: "______________________________" },
          { label: "Tug‘ilgan sana", placeholder: "______________________________" },
          { label: "Telefon", placeholder: "______________________________" },
          { label: "Imzo", placeholder: "______________________________" },
        ],
      },
      {
        role: "VOYAGA YETMAGAN O‘QUVCHI UCHUN OTA-ONA / QONUNIY VAKIL",
        fields: [
          { label: "F.I.Sh.", placeholder: "______________________________" },
          { label: "Telefon", placeholder: "______________________________" },
          { label: "Imzo", placeholder: "______________________________" },
        ],
      },
    ],
  },
];
