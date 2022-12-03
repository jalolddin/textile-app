import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }
const messages = {
    en: {
        process: 'Production process',
        company: 'About company',
        statistic: 'Our indicators',
        news: "News",
        address: "Fergana region, Tashlak district Muhandis street - 214 house",
        header__title: " a combination of style and comfort ",
        show__products: "View products",
        process__text: "Knitting factory “Amira Textile” produces comfortable and stylish clothes for adults and children. We create clothes from yarn to finished product. The yarn produced is half local and half Chinese and Turkish.",
        company__title: "Company",
        In2022: 'Our company has been producing various jerseys since May 2022.',
        natural: "Natural fibers provide comfort and environmental friendliness when worn. High - tech equipment allows us to produce knitwear of any complexity.Quality control system guarantees the production of quality products.",
        category: "Product category",
        workers: "employees",
        productDay: "produts per day",
        productYear: "products per year",
        export: "export",
        news__1: "Visit of the President to “Amira Textile” 12.05.2022",
        news__2: "Number of employees doubled in 2022",
        news__3: "Shoe production line set up",
        geolocation: "Our geolocation",
        social: "We are in social networks",
        addressName: "Address",
        contact: 'Contacts',
        product__1: "Polo shirts",
        product__2: "Men's sweaters",
        product__3: "Men's jumpers",
        product__4: "Men's shoes",
        product__5: "Women's knitted suits",
        product__6: "Women's dresses",
        product__7: "Women's shoes",
        product__8: "Women sweaters",
        product__9: "Women's cardigans",
        product__10: "Clothes for boys",
        product__11: "Girls clothes",
        product__12: "Caps",
        productMen: "Men's clothes",
        productWomen: "Women's clothes",
        productKids: "Kid's clothes",
        productShoes: "Shoes",
        productCaps: "Caps",
    },
    ru: {
        process: 'Процесс производствa',
        company: 'О компании',
        statistic: 'Наши показатели',
        news: 'Новости',
        address: 'Ферганская область, Ташлакский район ул.Мухандис - 214 дом',
        header__title: " сочетание стиля и комфорта",
        show__products: "Посмотреть продукты",
        process__text: "Трикотажная фабрика “Amira Textile” произоводит комфортную и стильную одежду для взрослых и детей. Мы создаём одежду от пряжи до готового изделия. Производимая пряжа наполовину состоит из местного сырья и наполовину из китайского и турецкого.",
        company__title: "Компания",
        In2022: "Наша компания производит различные трикотажные изделия с мая 2022года.",
        natural: "Натуральные волокна обеспечивают комфорт и экологичность при носке. Высокотехнологичное оборудование позволяет производить трикотажные изделия любой сложности. Система контроля качества гарантирует производство качественной продукции.",
        category: "Категория товаров",
        workers: "сотрудников",
        productDay: "изделий в день",
        productYear: "изделий в год",
        export: "экспорт",
        news__1: "Визит Президента в “Amira Textile” 12.05.2022",
        news__2: "В 2022 году количество работников увеличено в два раза",
        news__3: "Налажена линия по производству обуви",
        geolocation: "Наша геолокация",
        social: "Мы в социальных сетях",
        addressName: "Адрес",
        contact: 'Контакты',
        productMen: "Мужские одежды",
        productWomen: "Женские одежды",
        productKids: "Детские одежды",
        productShoes: "Обуви",
        productCaps: "Головные уборы",

        product__1: "Рубашки поло",
        product__2: "Мужские джемперы",
        product__3: "Мужские свитера",
        product__4: "Мужская обувь",
        product__5: "Женские трикотажные костюмы",
        product__6: "Женские платья",
        product__7: "Женская обувь",
        product__8: "Женские кофты",
        product__9: "Женские кардиганы",
        product__10: "Одежда для мальчиков",
        product__11: "Одежда для девочек",
        product__12: "Головные уборы",

    },
    uz: {
        process: 'Ishlab chiqarish jarayoni',
        company: 'Kompaniya haqida',
        statistic: "Bizning ko'rsatkichlarimiz",
        news: 'Yangiliklar',
        address: "Farg‘ona viloyati, Toshloq tumani Muhandis ko‘chasi, 214-uy",
        header__title: " uslub va qulaylik uyg'unligi",
        show__products: "Mahsulotlarni ko'rish",
        process__text: " “Amira Textile” fabrikasi kattalar va bolalar uchun qulay va zamonaviy trikotaj kiyimlar ishlab chiqaradi. Biz kiyim kalava ipdan tayyor mahsulotgacha yaratamiz. Kalava iplar Turkiya, Xitoy va 50% mahalliy xomashyodan tayyorlanadi.",
        company__title: "Kompaniya",
        In2022: "Bizning kompaniyamiz 2022-yil may oyidan beri turli trikotaj kiyimlarni ishlab chiqaradi.",
        natural: "Tabiiy tolalar kiyganda qulaylik va ekologik tozalikni ta'minlaydi. Yuqori texnologiyali uskunalar har qanday murakkablikdagi trikotaj mahsulotlarini ishlab chiqarish imkonini beradi. Sifatni nazorat qilish tizimi sifatli mahsulot ishlab chiqarishni kafolatlaydi.",
        category: "Mahsulotlar turlari",
        workers: "xodimlar",
        productDay: "kuniga mahsulotlar",
        productYear: "yiliga mahsulotlar",
        export: "eksport",
        news__1: "Prezidentning “Amira Textile” korxonasiga tashrifi 12.05.2022",
        news__2: "2022 yilda xodimlar soni ikki baravar ko'paydi",
        news__3: "Poyafzal ishlab chiqarish liniyasi ishga tushirildi",
        geolocation: "Bizning geolokatsiyamiz",
        social: "Bizning ijtimoiy tarmoqlarimiz",
        addressName: "Manzil",
        contact: 'Murojaat uchun',
        product__1: "Polo ko'ylaklar",
        product__2: "Erkaklar jemperlari",
        product__3: "Erkaklar sviterlari",
        product__4: "Erkaklar poyabzali",
        product__5: "Ayollar trikotaj kostyumlari",
        product__6: "Ayollar liboslari",
        product__7: "Ayollar poyafzali",
        product__8: "Ayol sviterlari",
        product__9: "Ayollar kardiganlari",
        product__10: "O'g'il bolalar uchun kiyimlar",
        product__11: "Qizlar kiyimlari",
        product__12: "Bosh kiyimlar",
        productMen: "Erkaklar kiyimlari",
        productWomen: "Ayolar kiyimlari",
        productKids: "Bolalar kiyimlari",
        productShoes: "Poyabzalar",
        productCaps: "Bosh kiyimlar",

    }
};


export default new VueI18n({
    locale: JSON.parse(localStorage.getItem('lang')),
    fallbackLocale: JSON.parse(localStorage.getItem('lang')),
    messages: messages
})