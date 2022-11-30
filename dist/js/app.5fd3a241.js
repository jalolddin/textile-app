(function() {
    "use strict";
    var t = {
            2307: function(t, s, a) {
                var i = a(144),
                    r = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("router-view")], 1)
                    },
                    e = [],
                    o = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "navbar" }, [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { staticClass: "navbar__logo", attrs: { src: a(5848), alt: "Logo" } })]), s("ul", { staticClass: "navbar__links" }, [s("li", { on: { click: t.proccess } }, [t._v("Процесс производство")]), s("li", { on: { click: t.company } }, [t._v("О компании")]), s("li", { on: { click: t.ranking } }, [t._v("Наши показатели")]), s("li", { on: { click: t.news } }, [t._v("Новости")])]), t._m(0)], 1)
                    },
                    c = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "navbar__address" }, [s("div", [s("img", { attrs: { src: a(5477), alt: "geolocation" } }), s("p", [t._v("Ферганская область, Ташлакский район "), s("br"), t._v(" ул.Мухандис - 214 дом")])]), s("div", [s("img", { attrs: { src: a(4095), alt: "" } }), s("p", [t._v("+998904070707 "), s("br"), t._v(" +998934820707")])])])
                    }],
                    n = { methods: { ranking() { this.$emit("scrollto", "ranking") }, company() { this.$emit("scrollto", "company") }, catalog() { this.$emit("scrollto", "catalog") }, proccess() { this.$emit("scrollto", "proccess") }, clothes() { this.$emit("scrollto", "clothes") }, news() { this.$emit("scrollto", "news") } } },
                    l = n,
                    u = a(1001),
                    v = (0, u.Z)(l, o, c, !1, null, null, null),
                    p = v.exports,
                    d = function() {
                        var t = this;
                        t._self._c;
                        return t._m(0)
                    },
                    m = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" - сочетание стиля "), s("br"), t._v(" и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    _ = {},
                    g = _,
                    h = (0, u.Z)(g, d, m, !1, null, null, null),
                    f = h.exports,
                    C = {
                        name: "HomeView",
                        components: { Navbar: p, Footer: f },
                        methods: {
                            goto(t) {
                                var s = this.$refs[t],
                                    a = s.offsetTop;
                                window.scrollTo(0, a)
                            }
                        }
                    },
                    w = C,
                    b = (0, u.Z)(w, r, e, !1, null, null, null),
                    k = b.exports,
                    x = a(8345),
                    y = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "home" }, [s("Navbar", { on: { scrollto: t.goto } }), s("div", { staticClass: "main" }, [s("div", { staticClass: "main__header" }, [s("div", { staticClass: "main__header__text" }, [t._m(0), s("select", { attrs: { name: "categories", id: "#" }, on: { change: function(s) { return t.changeRoute(s) } } }, [s("option", { attrs: { value: "Посмотреть продукты", disabled: "", selected: "" } }, [t._v("Просмотреть продукты")]), s("option", { attrs: { value: "products/women" } }, [t._v("Женские одежды")]), s("option", { attrs: { value: "products/men" } }, [t._v("Мужские одежды")]), s("option", { attrs: { value: "products/kids" } }, [t._v("Детские одежды")]), s("option", { attrs: { value: "products/shoes" } }, [t._v("Обуви")]), s("option", { attrs: { value: "products/hats" } }, [t._v("Головные уборы")])])])]), s("div", { ref: "proccess", staticClass: "main__company" }, [s("iframe", { attrs: { width: "560", height: "315", src: "https://www.youtube.com/embed/9I02a1TPykI", title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: "" } }), t._m(1)]), s("div", { ref: "company", staticClass: "main__video" }, [t._m(2), s("img", { attrs: { src: a(5855), alt: "" } })]), s("div", { ref: "catalog", staticClass: "main__gallery" }, [s("h1", [t._v("Категория товаров")]), t._m(3)]), s("div", { ref: "ranking", staticClass: "main__statistic" }, [s("h1", [t._v("Наши показатели")]), t._m(4)]), s("div", { ref: "news", staticClass: "main__news" }, [s("h1", [t._v("Новости")]), t._m(5)]), t._m(6), t._m(7)])], 1)
                    },
                    z = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("h1", [s("span", [t._v(" “Amira Textile” ")]), t._v(" - сочетание стиля и комфорта ")])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("h1", [t._v("Процесс производство")]), s("p", [t._v("Трикотажная фабрика "), s("span", [t._v(" “Amira Textile” ")]), t._v(" произоводит комфортную и стильную одежду для взрослых и детей. Мы создаём одежду от пряжи до готового изделия. Производимая пряжа наполовину состоит из местного сырья и наполовину из китайского и турецкого.")])])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("h1", [t._v("Kompany "), s("span", [t._v('"Amira Textile" ')])]), s("p", [t._v("Наша компания производит различные трикотажную продукцию с мая 2022года.")]), s("div", { staticClass: "benefits" }, [s("span", [t._v("Рубашки поло")]), s("span", [t._v("Мужские джемперы")]), s("span", [t._v("Мужские свитера")]), s("span", [t._v("Мужская обувь")]), s("span", [t._v("Женские трикотажные костюмы")]), s("span", [t._v("Женские платья")]), s("span", [t._v("Женская обувь")]), s("span", [t._v("Женские кофты")]), s("span", [t._v("Женские кардиганы")]), s("span", [t._v("Одежда для мальчиков")]), s("span", [t._v("Одежда для девочек")]), s("span", [t._v("Головные уборы")])]), s("p", [t._v("Натуральные волокна обеспечивают комфорт и экологичность при носке. Высокотехнологичное оборудование позволяет производить трикотажные изделия любой сложности. Система контроля качества гарантирует производство качественной продукции.")])])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("img", { attrs: { src: a(8449), alt: "" } }), s("img", { attrs: { src: a(1365), alt: "" } }), s("img", { attrs: { src: a(7351), alt: "" } }), s("img", { attrs: { src: a(1503), alt: "" } }), s("img", { attrs: { src: a(2419), alt: "" } }), s("img", { attrs: { src: a(3190), alt: "" } }), s("img", { attrs: { src: a(6708), alt: "" } }), s("img", { attrs: { src: a(8506), alt: "" } }), s("img", { attrs: { src: a(6868), alt: "" } })])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "ranking" }, [s("div", [s("h2", [t._v("300+")]), s("p", [t._v("сотрудников")])]), s("div", [s("h2", [t._v("6000+")]), s("p", [t._v("изделий в день")])]), s("div", [s("h2", [t._v("1 800 000+")]), s("p", [t._v("изделий в год")])]), s("div", [s("h2", [t._v("22 000 000$")]), s("p", [t._v("экспорт")])])])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "news" }, [s("div", [s("img", { attrs: { src: a(1829), alt: "" } }), s("p", [t._v("Визит Президента в "), s("span", [t._v("“Amira Textile”")]), t._v(" 12.05.2022")])]), s("div", [s("img", { attrs: { src: a(9876), alt: "" } }), s("p", [t._v("В 2022 году количество работников увеличено в два раза")])]), s("div", [s("img", { attrs: { src: a(4242), alt: "" } }), s("p", [t._v("Налажена линия по производству обуви")])])])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__map" }, [s("h1", [t._v("Наша геолокация")]), s("div", { staticClass: "mapouter" }, [s("iframe", { staticStyle: { position: "relative" }, attrs: { src: "https://yandex.uz/map-widget/v1/-/CCUbMGwUWC", width: "560", height: "400", frameborder: "1", allowfullscreen: "true" } })])])
                    }, function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v("сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("a", { attrs: { href: "https://mail.google.com/mail" } }, [s("p", [t._v("amiragroup.uz@gmail.com")])])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("a", { attrs: { href: "https://t.me/amiragroupuz" } }, [s("img", { attrs: { src: a(4588), alt: "" } })]), s("a", { attrs: { href: "https://www.instagram.com/amiragroup.uz/" } }, [s("img", { attrs: { src: a(673), alt: "" } })]), s("a", { attrs: { href: "https://www.facebook.com/amiragroup.uz/" } }, [s("img", { attrs: { src: a(3902), alt: "" } })]), s("a", { attrs: { href: "https://www.youtube.com/channel/UCR2GxQbZ9QrHRMkvjkO_SxA" } }, [s("img", { attrs: { src: a(4925), alt: "" } })])])])])
                    }],
                    A = (a(7658), a(594)),
                    B = {
                        name: "HomeView",
                        data() { return { categories: [], selected: "Посмотреть продукты" } },
                        components: { Navbar: p },
                        methods: {
                            changeRoute(t) { this.$router.push("/" + t.target.value) },
                            goto(t) {
                                var s = this.$refs[t],
                                    a = s.offsetTop;
                                window.scrollTo(0, a)
                            },
                            clothes(t) {
                                var s = this.$refs[t],
                                    a = s.offsetTop;
                                window.scrollTo(0, a)
                            }
                        },
                        created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })) }
                    },
                    Z = B,
                    T = (0, u.Z)(Z, y, z, !1, null, null, null),
                    V = T.exports,
                    j = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "products" }, [s("div", { staticClass: "products__category" }, [s("div", [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { attrs: { src: a(6009), alt: "" } })]), s("h1", [t._v("Наши продукты")])], 1), s("select", { attrs: { name: "categories", id: "#" } }, t._l(t.categories, (function(a, i) { return s("option", { key: a, domProps: { value: i.title_ru } }, [t._v(t._s(i.title_uz))]) })), 0)]), s("div", { staticClass: "products__clothes" }, t._l(t.products, (function(a, i) { return s("div", { key: a }, [s("img", { attrs: { src: "" + ("https://amiragroup.uz/" + i.photo_link), alt: "" } }), s("h3", [t._v(t._s(i.title_ru))])]) })), 0), t._m(0)])
                    },
                    O = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    G = a(2117),
                    Q = a.n(G),
                    W = { components: { Navbar: p, Dropdown: Q() }, data() { return { categories: [], products: [] } }, created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })), A.Z.get("https://amiragroup.uz/api/products/").then((t => { this.products = t.data })).catch((t => { console.error(t) })) }, computed: { women() { return this.products.filter((t => t.title_uz)) } } },
                    q = W,
                    E = (0, u.Z)(q, j, O, !1, null, null, null),
                    F = E.exports,
                    N = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "products" }, [s("div", { staticClass: "products__category" }, [s("div", [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { attrs: { src: a(6009), alt: "" } })]), s("h1", [t._v("Наши продукты")])], 1), s("select", { attrs: { name: "categories", id: "#" } }, t._l(t.categories, (function(a, i) { return s("option", { key: a, domProps: { value: i.title_ru } }, [t._v(t._s(i.title_uz))]) })), 0)]), s("div", { staticClass: "products__clothes" }, t._l(t.products, (function(a) { return s("div", { directives: [{ name: "show", rawName: "v-show", value: "Erkaklar kiyimlari" == a.category_title_uz, expression: "product.category_title_uz == 'Erkaklar kiyimlari'" }], key: a }, [s("img", { attrs: { src: "" + ("https://amiragroup.uz/" + a.photo_link), alt: "" } }), s("h3", [t._v(t._s(a.title_ru))])]) })), 0), t._m(0)])
                    },
                    P = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    L = { components: { Navbar: p, Dropdown: Q() }, data() { return { categories: [], products: [] } }, created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })), A.Z.get("https://amiragroup.uz/api/products/").then((t => { this.products = t.data })).catch((t => { console.error(t) })) }, computed: { women() { return this.products.filter((t => t.title_uz)) } } },
                    X = L,
                    K = (0, u.Z)(X, N, P, !1, null, null, null),
                    Y = K.exports,
                    H = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "products" }, [s("div", { staticClass: "products__category" }, [s("div", [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { attrs: { src: a(6009), alt: "" } })]), s("h1", [t._v("Наши продукты")])], 1), s("select", { attrs: { name: "categories", id: "#" } }, t._l(t.categories, (function(a) { return s("option", { key: a, domProps: { value: a.title_ru } }, [t._v(t._s(a.title_uz))]) })), 0)]), s("div", { staticClass: "products__clothes" }, t._l(t.products, (function(a) { return s("div", { directives: [{ name: "show", rawName: "v-show", value: "Bolalar kiyimlari" == a.category_title_uz, expression: "product.category_title_uz == 'Bolalar kiyimlari'" }], key: a }, [s("img", { attrs: { src: "" + ("https://amiragroup.uz/" + a.photo_link), alt: "" } }), s("h3", [t._v(t._s(a.title_ru))])]) })), 0), t._m(0)])
                    },
                    R = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    D = { components: { Navbar: p, Dropdown: Q() }, data() { return { categories: [], products: [] } }, created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })), A.Z.get("https://amiragroup.uz/api/products/").then((t => { this.products = t.data })).catch((t => { console.error(t) })) }, computed: { women() { return this.products.filter((t => t.title_uz)) } } },
                    I = D,
                    S = (0, u.Z)(I, H, R, !1, null, null, null),
                    U = S.exports,
                    M = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "products" }, [s("div", { staticClass: "products__category" }, [s("div", [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { attrs: { src: a(6009), alt: "" } })]), s("h1", [t._v("Наши продукты")])], 1), s("select", { attrs: { name: "categories", id: "#" } }, t._l(t.categories, (function(a) { return s("option", { key: a, domProps: { value: a.title_ru } }, [t._v(t._s(a.title_uz))]) })), 0)]), s("div", { staticClass: "products__clothes" }, t._l(t.products, (function(a) { return s("div", { directives: [{ name: "show", rawName: "v-show", value: "Poyabzallar" == a.category_title_uz, expression: "product.category_title_uz == 'Poyabzallar'" }], key: a }, [s("img", { attrs: { src: "" + ("https://amiragroup.uz/" + a.photo_link), alt: "" } }), s("h3", [t._v(t._s(a.title_ru))])]) })), 0), t._m(0)])
                    },
                    J = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    $ = { components: { Navbar: p, Dropdown: Q() }, data() { return { categories: [], products: [] } }, created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })), A.Z.get("https://amiragroup.uz/api/products/").then((t => { this.products = t.data })).catch((t => { console.error(t) })) }, computed: { women() { return this.products.filter((t => t.title_uz)) } } },
                    tt = $,
                    st = (0, u.Z)(tt, M, J, !1, null, null, null),
                    at = st.exports,
                    it = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "products" }, [s("div", { staticClass: "products__category" }, [s("div", [s("router-link", { attrs: { to: { name: "home" } } }, [s("img", { attrs: { src: a(6009), alt: "" } })]), s("h1", [t._v("Наши продукты")])], 1), s("select", { attrs: { name: "categories", id: "#" } }, t._l(t.categories, (function(a, i) { return s("option", { key: a, domProps: { value: i.title_ru } }, [t._v(t._s(i.title_uz))]) })), 0)]), s("div", { staticClass: "products__clothes" }, t._l(t.products, (function(a) { return s("div", { directives: [{ name: "show", rawName: "v-show", value: "Bosh kiyimlar" == a.category_title_uz, expression: "product.category_title_uz == 'Bosh kiyimlar'" }], key: a }, [s("img", { attrs: { src: "" + ("https://amiragroup.uz/" + a.photo_link), alt: "" } }), s("h3", [t._v(t._s(a.title_ru))])]) })), 0), t._m(0)])
                    },
                    rt = [function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", { staticClass: "main__footer" }, [s("div", { staticClass: "logo" }, [s("img", { attrs: { src: a(5848), alt: "" } }), s("h3", [t._v(" сочетание стиля и комфорта")])]), s("div", { staticClass: "line" }), s("div", { staticClass: "address" }, [s("h2", [t._v("Адрес")]), s("div", [s("p", [t._v("Ферганская область, Ташлакский "), s("br"), t._v(" район ул.Мухандис - 214 дом")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "contact" }, [s("h2", [t._v("Контакты")]), s("div", [s("p", [t._v("+998934820707")]), s("p", [t._v("amiragroup.uz@gmail.com")])])]), s("div", { staticClass: "line" }), s("div", { staticClass: "social" }, [s("h2", [t._v("Социальные сеть")]), s("div", [s("img", { attrs: { src: a(4588), alt: "" } }), s("img", { attrs: { src: a(673), alt: "" } }), s("img", { attrs: { src: a(3902), alt: "" } }), s("img", { attrs: { src: a(4925), alt: "" } })])])])
                    }],
                    et = { components: { Navbar: p, Dropdown: Q() }, data() { return { categories: [], products: [] } }, created() { A.Z.get("https://amiragroup.uz/api/categories/").then((t => { this.categories = t.data })).catch((t => { console.error(t) })), A.Z.get("https://amiragroup.uz/api/products/").then((t => { this.products = t.data })).catch((t => { console.error(t) })) }, computed: { women() { return this.products.filter((t => t.title_uz)) } } },
                    ot = et,
                    ct = (0, u.Z)(ot, it, rt, !1, null, null, null),
                    nt = ct.exports;
                i.ZP.use(x.ZP);
                const lt = [{ path: "/", name: "home", component: V }, { path: "/products/women", name: "women", component: F }, { path: "/products/men", name: "men", component: Y }, { path: "/products/kids", name: "kids", component: U }, { path: "/products/shoes", name: "shoes", component: at }, { path: "/products/hats", name: "hats", component: nt }],
                    ut = new x.ZP({ routes: lt });
                var vt = ut;
                i.ZP.config.productionTip = !1, new i.ZP({ Dropdown: Q(), router: vt, render: t => t(k) }).$mount("#app")
            },
            4095: function(t, s, a) { t.exports = a.p + "img/call_phone.f3f3317a.svg" },
            3902: function(t, s, a) { t.exports = a.p + "img/facebook.548af54c.svg" },
            673: function(t, s, a) { t.exports = a.p + "img/instagram.21058950.svg" },
            5477: function(t, s, a) { t.exports = a.p + "img/map.5ac24897.svg" },
            4588: function(t, s, a) { t.exports = a.p + "img/telegram.da7d780a.svg" },
            4925: function(t, s, a) { t.exports = a.p + "img/youtube.301a7f20.svg" },
            6009: function(t) { t.exports = "data:image/png;base64,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" },
            5855: function(t, s, a) { t.exports = a.p + "img/amiran.3b54d9ff.jpg" },
            5848: function(t, s, a) { t.exports = a.p + "img/amiran__logo.b056488d.png" },
            6708: function(t, s, a) { t.exports = a.p + "img/img10.2879509c.jpg" },
            8506: function(t, s, a) { t.exports = a.p + "img/img11.636f70d8.jpg" },
            3190: function(t, s, a) { t.exports = a.p + "img/img12.2e787931.jpg" },
            6868: function(t, s, a) { t.exports = a.p + "img/img13.0418fbcd.jpg" },
            8449: function(t, s, a) { t.exports = a.p + "img/img4.e44bbdd0.jpg" },
            1365: function(t, s, a) { t.exports = a.p + "img/img5.2b9c71be.jpg" },
            7351: function(t, s, a) { t.exports = a.p + "img/img6.2c59f260.jpg" },
            1503: function(t, s, a) { t.exports = a.p + "img/img7.0e25a84d.jpg" },
            2419: function(t, s, a) { t.exports = a.p + "img/img8.729d3a4f.jpg" },
            4242: function(t, s, a) { t.exports = a.p + "img/men_workers.501d7df8.jpg" },
            1829: function(t, s, a) { t.exports = a.p + "img/president.ac80da13.jpg" },
            9876: function(t, s, a) { t.exports = a.p + "img/workers.00f59792.jpg" }
        },
        s = {};

    function a(i) { var r = s[i]; if (void 0 !== r) return r.exports; var e = s[i] = { exports: {} }; return t[i](e, e.exports, a), e.exports }
    a.m = t,
        function() {
            var t = [];
            a.O = function(s, i, r, e) {
                if (!i) {
                    var o = 1 / 0;
                    for (u = 0; u < t.length; u++) {
                        i = t[u][0], r = t[u][1], e = t[u][2];
                        for (var c = !0, n = 0; n < i.length; n++)(!1 & e || o >= e) && Object.keys(a.O).every((function(t) { return a.O[t](i[n]) })) ? i.splice(n--, 1) : (c = !1, e < o && (o = e));
                        if (c) {
                            t.splice(u--, 1);
                            var l = r();
                            void 0 !== l && (s = l)
                        }
                    }
                    return s
                }
                e = e || 0;
                for (var u = t.length; u > 0 && t[u - 1][2] > e; u--) t[u] = t[u - 1];
                t[u] = [i, r, e]
            }
        }(),
        function() { a.n = function(t) { var s = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return a.d(s, { a: s }), s } }(),
        function() { a.d = function(t, s) { for (var i in s) a.o(s, i) && !a.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: s[i] }) } }(),
        function() { a.g = function() { if ("object" === typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" === typeof window) return window } }() }(),
        function() { a.o = function(t, s) { return Object.prototype.hasOwnProperty.call(t, s) } }(),
        function() { a.p = "" }(),
        function() {
            var t = { 143: 0 };
            a.O.j = function(s) { return 0 === t[s] };
            var s = function(s, i) {
                    var r, e, o = i[0],
                        c = i[1],
                        n = i[2],
                        l = 0;
                    if (o.some((function(s) { return 0 !== t[s] }))) { for (r in c) a.o(c, r) && (a.m[r] = c[r]); if (n) var u = n(a) }
                    for (s && s(i); l < o.length; l++) e = o[l], a.o(t, e) && t[e] && t[e][0](), t[e] = 0;
                    return a.O(u)
                },
                i = self["webpackChunktextile_app"] = self["webpackChunktextile_app"] || [];
            i.forEach(s.bind(null, 0)), i.push = s.bind(null, i.push.bind(i))
        }();
    var i = a.O(void 0, [998], (function() { return a(2307) }));
    i = a.O(i)
})();
//# sourceMappingURL=app.5fd3a241.js.map