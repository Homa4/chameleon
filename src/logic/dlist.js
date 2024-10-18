const dependencys = {
    'pizza': 'Піца',
    'breakfast': 'Сніданок',
    'snack': 'Закуска',
    'snackFwine': 'Закуска з вином',
    'snackFvodka': 'Закуска з горілкою',
    'pickles': 'Маринади',
    'snackFbeer': 'Закуска з пивом',
    'hotSnack': 'Гаряча Закуска',
    'salad': 'Салат',
    'pasta': 'Паста',
    'sdish': 'Гарнір',
    'fdish': 'Перші Страви',
    'mdish': 'Основні Страви',
    'dumpling': 'Вареники та Пельмені',
    'desert': 'Десерт',
    'shampain': 'Шампанське',
    'wineI': 'Італійське Вино',
    'wineU': 'Українське Вино',
    'Wwine': 'Біле Вино',
    'wineF': 'Французьке Вино'
};

const menu = [
    {
        img: "",
        name: "МАРГАРИТА",
        price: "195",
        description: "томатний соус, песто, моцарелла, чері, базилік",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "КОТТО",
        price: "225",
        description: "соус бешамель, моцарелла, прошутто котто, печериці, солоний огірок",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ПЕПЕРОНІ",
        price: "245",
        description: "томатний соус, моцарелла, пепероні",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ПАРМА",
        price: "230",
        description: "томатний соус, моцарелла, прошутто, руккола, пармезан",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "РИМСЬКА З ГРИБАМИ",
        price: "225",
        description: "томатний соус, моцарелла, шинка, печериці",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ЧОТИРИ СИРИ",
        price: "265",
        description: "соус бешамель, моцарелла, дор блю, пармезан, брі, фета",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "КАПРІЧЧОЗА",
        price: "225",
        description: "томатний соус, моцарелла, шинка, печериці, оливки, артишок",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ДІАВОЛА",
        price: "215",
        description: "томатний соус, моцарелла, салямі, оливки",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "КАПІТАНО",
        price: "225",
        description: "томатний соус, моцарелла, тунець, оливки, каперси, цибуля",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ВІКІНГА",
        price: "205",
        description: "томатний соус, моцарелла, тунець, червоний/зелений перець, артишок",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ПАРМІДЖАНА",
        price: "245",
        description: "томатний соус, моцарелла, прошутто, баклажан, руккола, пармезан",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "МОНТАНАРА",
        price: "205",
        description: "томатний соус, моцарелла, печериці, руккола, пармезан",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "РИМСЬКА З КОВБАСКАМИ",
        price: "215",
        description: "томатний соус, моцарелла, шинка, ковбаски",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "З ЛОСОСЕМ",
        price: "230",
        description: "томатний соус, моцарелла, лосось, каперси",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ВЕГЕТАРІАНА",
        price: "195",
        description: "томатний соус, моцарелла, печериці, солодкий перець, артишок, оливки, баклажан",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ХАМЕЛЕОН",
        price: "245",
        description: "томатний соус, прошутто, печериці, червоний/зелений перець, салямі, 4 сири",
        dtype: 'pizza'
    },
    {
        img: "",
        name: "ВІВСЯНА КАША",
        price: "100",
        description: "",
        dtype: 'breakfast'
    },
    {
        img: "",
        name: "СИРНИКИ",
        price: "100",
        description: "",
        dtype: 'breakfast'
    },
    {
        img: "",
        name: "ЯЄЧНЯ З БЕКОНОМ",
        price: "120",
        description: "",
        dtype: 'breakfast'
    },
    {
        img: "",
        name: "КАРПАЧО З ЯЛОВИЧИНИ",
        price: "175",
        description: "",
        dtype: 'snack'
    },
    {
        img: "",
        name: "СЬОМГА В ГОСТРОМУ ІМБИРНОМУ СОУСІ",
        price: "270",
        description: "(100г/100г)",
        dtype: 'snack'
    },
    {
        img: "",
        name: "РУЛЕТИКИ З ЦУКІНІ",
        price: "120",
        description: "",
        dtype: 'snack'
    },
    {
        img: "",
        name: "БРУСКЕТИ З ПРОШУТО",
        price: "90",
        description: "2 шт",
        dtype: 'snack'
    },
    {
        img: "",
        name: "БРУСКЕТИ З В'ЯЛЕНИМИ ПОМІДОРАМИ",
        price: "90",
        description: "2 шт",
        dtype: 'snack'
    },
    {
        img: "",
        name: "БРУСКЕТИ З ЛОСОСЕМ",
        price: "105",
        description: "1 шт",
        dtype: 'snack'
    },
    {
        img: "",
        name: "БРУСКЕТИ З ПОМІДОРАМИ",
        price: "90",
        description: "2 шт",
        dtype: 'snack'
    },
    {
        img: "",
        name: "БРУСКЕТИ ІЗ СОЛОДКИМ ПЕРЦЕМ ТА СИРОМ",
        price: "90",
        description: "2 шт",
        dtype: 'snack'
    },
    {
        img: "",
        name: "ГРІСІНІ",
        price: "45",
        description: "",
        dtype: 'snack'
    },
    {
        img: "",
        name: "КОЛЕКЦІЯ СИРІВ",
        price: "260",
        description: "рокфор, камамбер, чеверетті, моцарелла, пармезан, фрукти",
        dtype: 'snackFwine'
    },
    {
        img: "",
        name: "ІТАЛІЙСЬКА М'ЯСНА ЗАКУСКА",
        price: "270",
        description: "прошутто, хамон, міланська ковбаса, міні-моцарелла, маслини, черрі",
        dtype: 'snackFwine'
    },
    {
        img: "",
        name: "ОЛИВКИ ТА В'ЯЛЕНІ ПОМІДОРИ",
        price: "150",
        description: "",
        dtype: 'snackFwine'
    },
    {
        img: "",
        name: "ДОМАШНЯ М'ЯСНА ЗАКУСКА",
        price: "160",
        description: "домашня ковбаса, буженина, бастурма, сало по-українськи, гірчиця, хрін",
        dtype: 'snackFvodka'
    },
    {
        img: "",
        name: "ОСЕЛЕДЕЦЬ НА КАРТОПЛІ",
        price: "135",
        description: "картопля, цибуля, оливкова олія (50/150)",
        dtype: 'snackFvodka'
    },
    {
        img: "",
        name: "ОГІРКИ",
        price: "90",
        description: "200 г",
        dtype: 'pickles'
    },
    {
        img: "",
        name: "ПОМІДОРИ",
        price: "95",
        description: "300 г"
        ,
        dtype: 'pickles'
    },
    {
        img: "",
        name: "КАПУСТА",
        price: "75",
        description: "150 г"
        ,
        dtype: 'pickles'
    },
    {
        img: "",
        name: "БАСТУРМА",
        price: "180",
        description: "",
        dtype: 'snackFbeer'
    },
    {
        img: "",
        name: "СОЛОНА РИБА",
        price: "85",
        description: "",
        dtype: 'snackFbeer'
    },
    {
        img: "",
        name: "СОЛОНІ ГОРІШКИ",
        price: "85",
        description: "",
        dtype: 'snackFbeer'
    },
    {
        img: "",
        name: "ІНВОЛТІНІ",
        price: "135",
        description: "цукіні, філе куряче, пармезан",
        dtype: 'hotSnack'
    },
    {
        img: "",
        name: "ОЛАДКИ З ЦУКІНІ",
        price: "115",
        description: "",
        dtype: 'hotSnack'
    },
    {
        img: "",
        name: "ДЕРУНИ",
        price: "115",
        description: "на вибір: печериці, м'ясо, сало з цибулею",
        dtype: 'hotSnack'
    },
    {
        img: "",
        name: "САЛАТ З ГРИБАМИ ТА КОРОЛІВСЬКОЮ КРЕВЕТКОЮ",
        price: "240",
        description: "помідори черрі, руккола, соус, креветки",
        dtype: 'salad'
    },
    {
        img: "",
        name: "ТОСКАНСЬКИЙ",
        price: "180",
        description: "помідори, прошутто, смажені сухарики, пармезан, соус з анчоусами",
        dtype: 'salad'
    },
    {
        img: "",
        name: "КАПРЕЗЕ",
        price: "150",
        description: "помідори, моцарелла, оливкова олія, орегано",
        dtype: 'salad'
    },
    {
        img: "",
        name: "ГРЕЦЬКИЙ",
        price: "150",
        description: "помідори, маслини, сир фета, огірки, болгарський перець",
        dtype: 'salad'
    },
    {
        img: "",
        name: "ЦЕЗАР",
        price: "170",
        description: "помідори, курка, пармезан, соус Цезар",
        dtype: 'salad'
    },
    {
        img: "",
        name: "САЛАТ ЗІ СМАЖЕНИМ ЛОСОСЕМ",
        price: "220",
        description: "салатний мікс, помідор, кунжут, яйця, оливки",
        dtype: 'salad'
    },
    {
        img: "",
        name: "САЛАТ З КАЧИНИМ ФІЛЕ",
        price: "180",
        description: "салатний мікс, помідор, виноград, винний соус, печене яблуко",
        dtype: 'salad'
    },
    {
        img: "",
        name: "САЛАТ З ЯЛОВИЧИНОЮ",
        price: "170",
        description: "салатний мікс, огірок, винний соус",
        dtype: 'salad'
    },

    // Додаємо об'єкти для пасти
    {
        img: "",
        name: "ПАСТА З КРЕВЕТКАМИ",
        price: "235",
        description: "",
        dtype: 'pasta'
    },
    {
        img: "",
        name: "ЛАЗАНЬЯ",
        price: "175",
        description: "соус болоньєзе, соус бешамель, паста, пармезан",
        dtype: 'pasta'
    },
    {
        img: "",
        name: "КАРБОНАРА",
        price: "165",
        description: "бекон, яйце, чорний перець, пармезан",
        dtype: 'pasta'
    },
    {
        img: "",
        name: "БОЛОНЬЄЗЕ",
        price: "165",
        description: "томатний соус, соус болоньєзе, пармезан",
        dtype: 'pasta'
    },
    {
        img: "",
        name: "ПАСТА З ЛОСОСЕМ",
        price: "180",
        description: "лосось, цибуля, чорний перець, вершки",
        dtype: 'pasta'
    },

    // Додаємо об'єкти для гарнірів
    {
        img: "",
        name: "ОВОЧІ НА ГРИЛІ АБО СОТЕ",
        price: "110",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "РИС «БАСМАТІ»",
        price: "70",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "КАРТОПЛЯ ПО-ДОМАШНЬОМУ",
        price: "70",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "КАРТОПЛЯ ПО-СЕЛЯНСЬКИ",
        price: "70",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "КАРТОПЛЯНЕ ПЮРЕ",
        price: "70",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "КАРТОПЛЯ ФРІ",
        price: "70",
        description: "",
        dtype: 'sdish'
    },
    {
        img: "",
        name: "ЗАПЕЧЕНА КАРТОПЛЯ",
        price: "90",
        description: "",
        dtype: 'sdish'
    },

    // Додаємо об'єкти для перших страв
    {
        img: "",
        name: "ОКРОШКА",
        price: "115",
        description: "",
        dtype: 'fdish'
    },
    {
        img: "",
        name: "ГАРБУЗОВИЙ СУП З ІМБИРЕМ",
        price: "115",
        description: "",
        dtype: 'fdish'
    },
    {
        img: "",
        name: "М'ЯСНА СОЛЯНКА",
        price: "115",
        description: "",
        dtype: 'fdish'
    },
    {
        img: "",
        name: "РИБАЦЬКА УХА",
        price: "125",
        description: "",
        dtype: 'fdish'
    },
    {
        img: "",
        name: "БОРЩ З ПАМПУШКАМИ",
        price: "115",
        description: "",
        dtype: 'fdish'
    },
    {
        img: "",
        name: "СУДАК НА ОВОЧЕВІЙ ПОДУШЦІ",
        price: "235",
        description: "250 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "КАРП «ХАМЕЛЕОН»",
        price: "215",
        description: "1 шт",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "СТЕЙК ІЗ ЛОСОСЯ",
        price: "320",
        description: "соус із каперсів, 200 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ФАРШИРОВАНИЙ КАЛЬМАР",
        price: "285",
        description: "200 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ЩУЧІ КОТЛЕТИ",
        price: "145",
        description: "на вибір: смажені або на пару, 3 шт",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "КРИЛЬЦЯ «БАФФАЛО»",
        price: "140",
        description: "350 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "КОТЛЕТА ПО-КИЇВСЬКИ",
        price: "170",
        description: "150 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "КУРЯЧЕ ФІЛЕ ПО-МЕКСИКАНСЬКИ",
        price: "170",
        description: "болг. перець, форнаріна, куряче філе, 250 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "КАЧКА В ОЖИНОВОМУ СОУСІ",
        price: "235",
        description: "200 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "СВИНЯЧІ РЕБЕРЦЯ В СОЄВО-ЦИТРУСОВОМУ МАРИНАДІ",
        price: "180",
        description: "250 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "АНТРЕКОТ НА РЕБРІ",
        price: "215",
        description: "250 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ЯЛОВИЧИНА НА КІСТЦІ",
        price: "255",
        description: "300 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ШНІЦЕЛЬ ПО-МІЛАНСЬКИ",
        price: "180",
        description: "яловичина або курка, 150 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ОСОБУККО З КАРТОПЛЯНИМ ПЮРЕ",
        price: "235",
        description: "350 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ЯЛОВИЧИНА «ДОР БЛЮ» З РІЗОТТО",
        price: "205",
        description: "соус песто, вино, черрі, гранатовий соус, 300 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ЯЛОВИЧИНА «ЛІБЕЧЧО»",
        price: "195",
        description: "розмарин, біле вино, оливкова олія, 200 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "МЕДАЛЬОЙНИ З ВИШНЕВИМ СОУСОМ",
        price: "200",
        description: "медальйони зі свинини, вишневий соус, 200 г",
        dtype: 'mdish'
    },
    {
        img: "",
        name: "ЯЛОВИЧА ПЕЧІНКА ПО-ВЕНЕЦІАНСЬКИ",
        price: "170",
        description: "вершки, помідори, цибуля, 250 г",
        dtype: 'mdish'
    },

    // Додаємо об'єкти для вареників та пельменів
    {
        img: "",
        name: "ВАРЕНИКИ",
        price: "130",
        description: "на вибір: м'ясо; бринза з зеленню; печериці з картоплею (200/50)",
        dtype: 'dumpling'
    },
    {
        img: "",
        name: "ПЕЛЬМЕНІ",
        price: "135",
        description: "свинина з яловичиною (200/50)",
        dtype: 'dumpling'
    },

    // Додаємо об'єкти для десертів
    {
        img: "",
        name: "МОРОЗИВО",
        price: "60",
        description: "1 кулька",
        dtype: 'desert'
    },
    {
        img: "",
        name: "ЯБЛУЧНИЙ ШТРУДЕЛЬ З МОРОЗИВОМ",
        price: "125",
        description: "200 г",
        dtype: 'desert'
    },
    {
        img: "",
        name: "ЯГІДНИЙ ЧІЗКЕЙК",
        price: "130",
        description: "150 г",
        dtype: 'desert'
    },
    {
        img: "",
        name: "Moet & Шандон Брют Імперіал",
        price: "2600",
        description: "Шампанське, 750 мл",
        dtype: 'shampain'
    },
    {
        img: "",
        name: "Просекко Прімо Брют – Ніно Франко",
        price: "900",
        description: "Ігристе вино Італія, 750 мл",
        dtype: 'wineI'
    },
    {
        img: "",
        name: "Просекко Брют – Андреола",
        price: "785",
        description: "Ігристе вино Італія, 750 мл",
        dtype: 'wineI'
    },
    {
        img: "",
        name: "Сереніссіма Просекко – Вінікола Томбако",
        price: "96",
        description: "Ігристе вино Італія, 100 мл",
        dtype: 'wineI'
    },
    {
        img: "",
        name: "Сереніссіма Просекко – Вінікола Томбако",
        price: "720",
        description: "Ігристе вино Італія, 750 мл",
        dtype: 'wineI'
    },
    {
        img: "",
        name: "Артемівське Брют",
        price: "58",
        description: "Ігристе вино Україна, 100 мл",
        dtype: 'wineU'
    },
    {
        img: "",
        name: "Артемівське Брют",
        price: "435",
        description: "Ігристе вино Україна, 750 мл",
        dtype: 'wineU'
    },
    {
        img: "",
        name: "Трамінер Котнар «Горобчики»",
        price: "40",
        description: "Біле вино, Україна (Закарпаття), 100 мл",
        dtype: 'Wwine'
    },
    {
        img: "",
        name: "Трамінер Котнар «Горобчики»",
        price: "300",
        description: "Біле вино, Україна (Закарпаття), 750 мл",
        dtype: 'Wwine'
    },
    {
        img: "",
        name: "Рісліпг – Кав де Рібовіль (Ельзас)",
        price: "1250",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Гевюрцтрамінер – Кав де Рібовіль (Ельзас)",
        price: "1250",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Совіньон Блан – Мейсон Белперош (Бордо)",
        price: "68",
        description: "Біле вино, Франція, 100 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Совіньон Блан – Мейсон Белперош (Бордо)",
        price: "510",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Шаблі – Маеток дю Шардоне (Шаблі)",
        price: "1250",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Кот де Гасконь Классік – Шато дю Таріке (Гасконь)",
        price: "78",
        description: "Біле вино, Франція, 100 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Кот де Гасконь Классік – Шато дю Таріке (Гасконь)",
        price: "585",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Шардоне – Мейсон Кастел (Лангедок-Русійон)",
        price: "72",
        description: "Біле вино, Франція, 100 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Шардоне – Мейсон Кастел (Лангедок-Русійон)",
        price: "540",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    {
        img: "",
        name: "Совіньон Блан – Мейсон Кастел 1 пл. (Лангедок-Русійон)",
        price: "540",
        description: "Біле вино, Франція, 750 мл",
        dtype: 'wineF'
    },
    // 5 slide, 6 left
];

const data = {dependencys, menu}


export default data;