"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netflixSeries = exports.hboSeries = exports.fxPopularSeries = exports.allArraySeries = void 0;
exports.allArraySeries = [];
exports.fxPopularSeries = [
    {
        id: 1,
        title: {
            original: "Fargo",
            russian: "Фарго"
        },
        image: 'https://www.kino-teatr.ru/movie/poster/110638/249407.jpg',
        genre: ["Криминал", "Драма", "Чёрный юмор", "Триллер"],
        years: {
            start: 2014,
            end: null,
            status: "Продолжается"
        },
        seasons: 5,
        episodes: 51,
        description: "Антология, вдохновлённая одноимённым фильмом братьев Коэн. Каждый сезон представляет собой отдельную историю с новыми персонажами, но связанную общей темой преступления, морали и последствий.",
        creators: ["Ноа Хоули"],
        imdbRating: 8.9,
        awards: ["6 премий Эмми", "2 Золотых глобуса"],
        cast: {
            season1: ["Билли Боб Торнтон", "Мартин Фриман", "Эллисон Толман"],
            season2: ["Кирстен Данст", "Патрик Уилсон", "Джесси Племонс"],
            season3: ["Юэн Макгрегор", "Кэрри Кун", "Мэри Элизабет Уинстэд"],
            season4: ["Крис Рок", "Джесси Бакли", "Бен Уишоу"],
            season5: ["Джон Хэмм", "Джун Темпл", "Дженнифер Джейсон Ли"]
        },
        streaming: "Hulu",
        notable: "Каждый сезон основан на реальных событиях, но является вымыслом"
    },
    {
        id: 2,
        title: {
            original: "American Horror Story",
            russian: "Американская история ужасов"
        },
        image: 'src/assets/american_crime_story.jpg',
        genre: ["Ужасы", "Драма", "Триллер", "Мистика"],
        years: {
            start: 2011,
            end: null,
            status: "Продолжается"
        },
        seasons: 12,
        episodes: 128,
        description: "Антология ужасов, где каждый сезон представляет собой самостоятельную историю с новыми персонажами и локациями, но с постоянным актёрским составом в разных ролях.",
        creators: ["Райан Мёрфи", "Брэд Фэлчак"],
        imdbRating: 8.0,
        awards: ["16 премий Эмми", "2 Золотых глобуса"],
        cast: ["Сара Полсон", "Эван Питерс", "Джессика Лэнг", "Кэти Бэйтс", "Анжела Бассетт", "Леди Гага"],
        streaming: "Hulu",
        notable: "Самый продолжительный сериал FX"
    },
    {
        id: 3,
        title: {
            original: "The Americans",
            russian: "Американцы"
        },
        image: 'https://www.kino-teatr.ru/movie/poster/126803/93205.jpg',
        genre: ["Шпионский триллер", "Драма", "Период драма"],
        years: {
            start: 2013,
            end: 2018,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 75,
        description: "О советских шпионах, внедрённых в пригород Вашингтона во время холодной войны 1980-х годов. Они живут как обычная американская семья, скрывая свою настоящую идентичность.",
        creators: ["Джозеф Вайсберг"],
        imdbRating: 8.4,
        awards: ["2 премии Эмми", "Премия Пибоди"],
        cast: ["Кери Расселл", "Мэттью Риз", "Ноа Эммерих", "Холли Тейлор"],
        streaming: "Hulu",
        notable: "Считается одним из лучших сериалов 2010-х годов"
    },
    {
        id: 4,
        title: {
            original: "What We Do in the Shadows",
            russian: "Чем мы заняты в тени"
        },
        image: 'src/assets/what_we_do_in_the_shadow.jpg',
        genre: ["Комедия", "Ужасы", "Пародия", "Мокьюментари"],
        years: {
            start: 2019,
            end: null,
            status: "Продолжается"
        },
        seasons: 6,
        episodes: 50,
        description: "Мокьюментари о четырёх vampire-соседях по комнате, которые живут на Статен-Айленде и пытаются приспособиться к современной жизни.",
        creators: ["Джемейн Клемент", "Тайка Вайтити"],
        imdbRating: 8.6,
        awards: ["1 премия Эмми"],
        cast: ["Кэйван Новак", "Мэтт Берри", "Наташа Деметриу", "Харви Гильен"],
        streaming: "Hulu",
        notable: "Основан на одноимённом фильме 2014 года"
    },
    {
        id: 5,
        title: {
            original: "Sons of Anarchy",
            russian: "Сыны анархии"
        },
        image: 'src/assets/sons_of_anarchy.jpg',
        genre: ["Криминал", "Драма", "Экшн", "Триллер"],
        years: {
            start: 2008,
            end: 2014,
            status: "Завершён"
        },
        seasons: 7,
        episodes: 92,
        description: "О байкерском клубе в вымышленном городе Чарминг, Калифорния, и их лидере Джексе Теллере, который балансирует между семьёй и криминальной деятельностью клуба.",
        creators: ["Курт Саттер"],
        imdbRating: 8.5,
        awards: ["1 премия Эмми"],
        cast: ["Чарли Ханнэм", "Кэти Сэгал", "Рон Перлман", "Мэгги Сифф", "Тео Росси"],
        streaming: "Hulu",
        notable: "Один из самых рейтинговых сериалов в истории кабельного телевидения"
    },
    {
        id: 6,
        title: {
            original: "The Bear",
            russian: "Медведь"
        },
        image: 'https://www.kino-teatr.ru/movie/poster/157699/153032.jpg',
        genre: ["Комедийная драма", "Кулинарный", "Драма"],
        years: {
            start: 2022,
            end: null,
            status: "Продолжается"
        },
        seasons: 3,
        episodes: 18,
        description: "Молодой шеф-повар из мира высокой кухни возвращается в Чикаго, чтобы управлять семейным сэндвич-кафе после самоубийства брата.",
        creators: ["Кристофер Стоулер"],
        imdbRating: 8.6,
        awards: ["10 премий Эмми", "Золотой глобус"],
        cast: ["Джереми Аллен Уайт", "Айо Эдебири", "Эбон Мосс-Бэкрак", "Лайон Бойс"],
        streaming: "Hulu",
        notable: "Критический и коммерческий успех с многочисленными наградами"
    },
    {
        id: 7,
        title: {
            original: "Justified",
            russian: "Правосудие"
        },
        image: 'https://www.kino-teatr.ru/movie/poster/96350/223310.jpg',
        genre: ["Криминал", "Драма", "Нео-нуар", "Вестерн"],
        years: {
            start: 2010,
            end: 2015,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 78,
        description: "О федеральном маршале Рэйлане Гивэнсе, который возвращается в свой родной город в Кентукки, где сталкится со старыми знакомыми и преступностью.",
        creators: ["Грэм Йост"],
        imdbRating: 8.6,
        awards: ["2 премии Эмми"],
        cast: ["Тимоти Олифант", "Уолтон Гоггинс", "Ник Сирси", "Джоэль Картер"],
        streaming: "Hulu",
        notable: "Основан на рассказах Элмора Леонарда"
    },
    {
        id: 8,
        title: {
            original: "The Shield",
            russian: "Щит"
        },
        image: 'https://m.media-amazon.com/images/I/71VdOnupjUL._UF894,1000_QL80_.jpg',
        genre: ["Криминал", "Драма", "Полицейская драма", "Триллер"],
        years: {
            start: 2002,
            end: 2008,
            status: "Завершён"
        },
        seasons: 7,
        episodes: 88,
        description: "О противоречивом детективе Вике Мэкки и его команде в вымышленном Фермском округе Лос-Анджелеса, которые используют сомнительные методы для борьбы с преступностью.",
        creators: ["Шон Райан"],
        imdbRating: 8.7,
        awards: ["1 премия Эмми", "Золотой глобус"],
        cast: ["Майкл Чиклис", "Гленн Клоуз", "Уолтон Гоггинс", "Си-Си-Эйч Паундер"],
        streaming: "Hulu",
        notable: "Пионер «золотого века телевидения» на кабельных каналах"
    },
    {
        id: 9,
        title: {
            original: "Rescue Me",
            russian: "Спаси меня"
        },
        image: 'https://www.kino-teatr.ru/movie/poster/21238/185358.jpg',
        genre: ["Комедийная драма", "Драма", "Чёрный юмор"],
        years: {
            start: 2004,
            end: 2011,
            status: "Завершён"
        },
        seasons: 7,
        episodes: 93,
        description: "О жизни нью-йоркских пожарных после терактов 11 сентября, сосредотачиваясь на Томми Гэвине и его борьбе с личными демонами и профессиональными вызовами.",
        creators: ["Денис Лири", "Питер Толан"],
        imdbRating: 8.3,
        awards: ["1 премия Эмми"],
        cast: ["Денис Лири", "Майкл Ломбарди", "Стивен Паскуале", "Андреа Рот"],
        streaming: "Hulu",
        notable: "Известен реалистичным изображением жизни пожарных"
    },
    {
        id: 11,
        title: {
            original: "Snowfall",
            russian: "Снегопад"
        },
        image: 'src/assets/snowfall.jpg',
        genre: ["Криминал", "Драма", "Триллер", "Период драма"],
        years: {
            start: 2017,
            end: 2023,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 60,
        description: "История о возникновении эпидемии крэка в Лос-Анджелесе в 1980-х годах. Сериал показывает несколько сюжетных линий: молодого дилера Франклина Сейнта, мексиканскую семью, связанную с ЦРУ, и контрабандистов.",
        creators: ["Джон Синглтон", "Дейв Андрон", "Эрик Амиди"],
        imdbRating: 8.2,
        awards: ["NAACP Image Award", "Critics' Choice Television Award"],
        cast: ["Дэмисон Идрис", "Картер Хадсон", "Серхио Peris-Менчета", "Эмили Риос", "Анджела Льюис", "Исиах Джон"],
        streaming: "Hulu",
        notable: "Один из последних проектов режиссёра Джона Синглтона, основан на реальных событиях",
        setting: {
            location: "Лос-Анджелес",
            timePeriod: "1980-е годы",
            historicalContext: "Эпидемия крэк-кокаина"
        },
        mainCharacters: {
            franklinSaint: {
                name: "Франклин Сейнт",
                description: "Молодой предприниматель, который становится ключевой фигурой в распространении крэка"
            },
            teddyMcDonald: {
                name: "Тедди Макдональд",
                description: "Агент ЦРУ, участвующий в контрабанде кокаина для финансирования никарагуанских контрас"
            },
            gustavoZapata: {
                name: "Густаво Запата",
                description: "Мексиканский боец, вовлечённый в наркоторговлю"
            }
        },
        criticalReception: {
            rating: "Положительный",
            highlights: ["Сильное исполнение", "Атмосферное изображение эпохи", "Сложные персонажи"],
            criticisms: ["Иногда предсказуемый сюжет"]
        }
    },
];
exports.hboSeries = [
    {
        id: 32,
        title: {
            original: "The Sopranos",
            russian: "Клан Сопрано"
        },
        image: 'https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_.jpg',
        genre: ["Криминал", "Драма", "Психологический триллер"],
        years: {
            start: 1999,
            end: 2007,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 86,
        description: "Тони Сопрано - босс нью-джерсийской мафии, который вынужден посещать психотерапевта из-за панических атак.",
        creators: ["Дэвид Чейз"],
        imdbRating: 9.2,
        awards: ["21 премия Эмми", "5 Золотых глобусов"],
        cast: ["Джеймс Гандольфини", "Лоррейн Бракко", "Эди Фалко", "Майкл Империоли"],
        streaming: "HBO Max",
        notable: "Считается одним из величайших телесериалов в истории"
    },
    {
        id: 33,
        title: {
            original: "The Wire",
            russian: "Прослушка"
        },
        image: 'https://m.media-amazon.com/images/I/91i4+EUYM0L._UF1000,1000_QL80_.jpg',
        genre: ["Криминал", "Драма", "Детектив"],
        years: {
            start: 2002,
            end: 2008,
            status: "Завершён"
        },
        seasons: 5,
        episodes: 60,
        description: "Детективы и наркоторговцы Балтимора в реалистичном изображении городских проблем и коррупции.",
        creators: ["Дэвид Саймон"],
        imdbRating: 9.3,
        awards: ["1 премия Эмми"],
        cast: ["Доминик Уэст", "Идрис Эльба", "Майкл К. Уильямс", "Лэнс Реддик"],
        streaming: "HBO Max",
        notable: "Культовый статус за социальный реализм и сложное повествование"
    },
    {
        id: 34,
        title: {
            original: "Game of Thrones",
            russian: "Игра престолов"
        },
        image: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: ["Фэнтези", "Драма", "Приключения"],
        years: {
            start: 2011,
            end: 2019,
            status: "Завершён"
        },
        seasons: 8,
        episodes: 73,
        description: "Борьба за Железный трон Семи королевств Вестероса в мире магии, драконов и политических интриг.",
        creators: ["Дэвид Бениофф", "Д. Б. Уайсс"],
        imdbRating: 9.2,
        awards: ["59 премий Эмми"],
        cast: ["Питер Динклэйдж", "Лина Хиди", "Эмилия Кларк", "Кит Харингтон"],
        streaming: "HBO Max",
        notable: "Один из самых дорогих и популярных сериалов в истории телевидения"
    },
    {
        id: 35,
        title: {
            original: "Succession",
            russian: "Наследство"
        },
        image: 'https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: ["Драма", "Сатира", "Семейный"],
        years: {
            start: 2018,
            end: 2023,
            status: "Завершён"
        },
        seasons: 4,
        episodes: 39,
        description: "Борьба детей медиа-магната Логана Роя за контроль над семейной империей.",
        creators: ["Джесси Армстронг"],
        imdbRating: 8.8,
        awards: ["13 премий Эмми", "5 Золотых глобусов"],
        cast: ["Брайан Кокс", "Джереми Стронг", "Сара Снук", "Киран Калкин"],
        streaming: "HBO Max",
        notable: "Критический успех за острое изображение власти и семейных отношений"
    },
    {
        id: 36,
        title: {
            original: "Chernobyl",
            russian: "Чернобыль"
        },
        image: 'https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: ["Драма", "Исторический", "Триллер"],
        years: {
            start: 2019,
            end: 2019,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 5,
        description: "Хроника катастрофы на Чернобыльской АЭС в 1986 году и последующих расследований.",
        creators: ["Крейг Мейзин"],
        imdbRating: 9.4,
        awards: ["10 премий Эмми", "2 Золотых глобуса"],
        cast: ["Джаред Харрис", "Стеллан Скарсгард", "Эмили Уотсон", "Пол Риттер"],
        streaming: "HBO Max",
        notable: "Самый высокооцененный сериал на IMDb"
    },
    {
        id: 37,
        title: {
            original: "The Last of Us",
            russian: "Одни из нас"
        },
        image: 'src/assets/last-of-us.jpg',
        genre: ["Постапокалипсис", "Драма", "Ужасы"],
        years: {
            start: 2023,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 9,
        description: "Джоэл должен перевезти через постапокалиптическую Америку девочку Элли, которая может быть ключом к спасению человечества.",
        creators: ["Крейг Мейзин", "Нил Дракманн"],
        imdbRating: 8.8,
        awards: ["8 премий Эмми"],
        cast: ["Педро Паскаль", "Белла Рамзи", "Анна Торв", "Нико Паркер"],
        streaming: "HBO Max",
        notable: "Успешная адаптация культовой видеоигры"
    },
    {
        id: 38,
        title: {
            original: "Westworld",
            russian: "Мир Дикого Запада"
        },
        image: 'src/assets/westworld.jpg',
        genre: ["Научная фантастика", "Драма", "Триллер"],
        years: {
            start: 2016,
            end: 2022,
            status: "Завершён"
        },
        seasons: 4,
        episodes: 36,
        description: "В тематическом парке с андроидами гости могут жить своими фантазиями, но синтетическое сознание просыпается.",
        creators: ["Джонатан Нолан", "Лиза Джой"],
        imdbRating: 8.5,
        awards: ["9 премий Эмми"],
        cast: ["Эван Рachel Вуд", "Джеффри Райт", "Эд Харрис", "Тэндиве Ньютон"],
        streaming: "HBO Max",
        notable: "Современная адаптация фильма 1973 года"
    },
    {
        id: 39,
        title: {
            original: "True Detective",
            russian: "Настоящий детектив"
        },
        image: 'src/assets/true-detective.jpg',
        genre: ["Детектив", "Драма", "Криминал"],
        years: {
            start: 2014,
            end: null,
            status: "Антология"
        },
        seasons: 4,
        episodes: 30,
        description: "Антологический сериал, где каждый сезон - новая детективная история с новыми персонажами.",
        creators: ["Ник Пиццолатто"],
        imdbRating: 8.9,
        awards: ["5 премий Эмми"],
        cast: ["Мэттью Макконахи", "Вуди Харрельсон", "Махершала Али", "Джоди Фостер"],
        streaming: "HBO Max",
        notable: "Первый сезон считается одним из лучших в истории телевидения"
    },
    {
        id: 40,
        title: {
            original: "The White Lotus",
            russian: "Белый лотос"
        },
        image: 'src/assets/white-lotus.jpg',
        genre: ["Комедия", "Драма", "Сатира"],
        years: {
            start: 2021,
            end: null,
            status: "Продолжается"
        },
        seasons: 2,
        episodes: 13,
        description: "Сатира о гостях и сотрудниках роскошных курортов сети Белый Лотос.",
        creators: ["Майк Уайт"],
        imdbRating: 7.8,
        awards: ["10 премий Эмми"],
        cast: ["Дженнифер Кулидж", "Мюррей Бартлетт", "Обри Плаза", "Ф. Мюррей Абрахам"],
        streaming: "HBO Max",
        notable: "Критический успех и культурный феномен"
    },
    {
        id: 41,
        title: {
            original: "House of the Dragon",
            russian: "Дом Дракона"
        },
        image: 'src/assets/hotd.jpg',
        genre: ["Фэнтези", "Драма", "Приключения"],
        years: {
            start: 2022,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 10,
        description: "Приквел 'Игры престолов' о гражданской войне в семье Таргариенов за 200 лет до событий оригинала.",
        creators: ["Райан Кондал", "Джордж Р. Р. Мартин"],
        imdbRating: 8.5,
        awards: ["1 премия Эмми"],
        cast: ["Пэдди Консидайн", "Эмма Д'Арси", "Мэтт Смит", "Оливия Кук"],
        streaming: "HBO Max",
        notable: "Успешное возвращение во вселенную 'Игры престолов'"
    },
    {
        id: 42,
        title: {
            original: "Band of Brothers",
            russian: "Братья по оружию"
        },
        image: 'src/assets/band-of-brothers.jpg',
        genre: ["Военный", "Драма", "Исторический"],
        years: {
            start: 2001,
            end: 2001,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 10,
        description: "История роты Easy 506-го парашютно-пехотного полка 101-й воздушно-десантной дивизии США во время Второй мировой войны.",
        creators: ["Стивен Спилберг", "Том Хэнкс"],
        imdbRating: 9.4,
        awards: ["6 премий Эмми", "1 Золотой глобус"],
        cast: ["Дэмиэн Льюис", "Рон Ливингстон", "Донни Уолберг", "Мэттью Сеттл"],
        streaming: "HBO Max",
        notable: "Считается одним из лучших военных сериалов всех времен"
    },
    {
        id: 43,
        title: {
            original: "The Pacific",
            russian: "Тихий океан"
        },
        image: 'src/assets/the-pacific.jpg',
        genre: ["Военный", "Драма", "Исторический"],
        years: {
            start: 2010,
            end: 2010,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 10,
        description: "Три морских пехотинца США во время боевых действий на Тихом океане во Второй мировой войне.",
        creators: ["Стивен Спилберг", "Том Хэнкс"],
        imdbRating: 8.3,
        awards: ["8 премий Эмми"],
        cast: ["Джозеф Маццелло", "Джеймс Бэдж Дейл", "Джон Седа", "Асимофф"],
        streaming: "HBO Max",
        notable: "Духовный преемник 'Братьев по оружию'"
    },
    {
        id: 44,
        title: {
            original: "Barry",
            russian: "Барри"
        },
        image: 'src/assets/barry.jpg',
        genre: ["Чёрная комедия", "Драма", "Криминал"],
        years: {
            start: 2018,
            end: 2023,
            status: "Завершён"
        },
        seasons: 4,
        episodes: 32,
        description: "Наемник-киллер переезжает в Лос-Анджелес и пытается стать актером, но его прошлое не отпускает.",
        creators: ["Алек Берг", "Билл Хейдер"],
        imdbRating: 8.4,
        awards: ["9 премий Эмми"],
        cast: ["Билл Хейдер", "Стивен Рут", "Сара Голдберг", "Генри Уинклер"],
        streaming: "HBO Max",
        notable: "Уникальное сочетание комедии и психологической драмы"
    },
    {
        id: 45,
        title: {
            original: "Euphoria",
            russian: "Эйфория"
        },
        image: 'src/assets/euphoria.jpg',
        genre: ["Драма", "Подростковый", "Психологический"],
        years: {
            start: 2019,
            end: null,
            status: "Продолжается"
        },
        seasons: 2,
        episodes: 16,
        description: "Группа старшеклассников переживает любовь, дружбу, зависимости и травмы в эпоху социальных сетей.",
        creators: ["Сэм Левенсон"],
        imdbRating: 8.4,
        awards: ["6 премий Эмми"],
        cast: ["Зендея", "Хантер Шафер", "Сидна Суини", "Джейкоб Элорди"],
        streaming: "HBO Max",
        notable: "Визуально инновационный сериал, ставший культурным феноменом"
    },
    {
        id: 46,
        title: {
            original: "The Leftovers",
            russian: "Оставленные"
        },
        image: 'src/assets/leftovers.jpg',
        genre: ["Драма", "Фэнтези", "Мистика"],
        years: {
            start: 2014,
            end: 2017,
            status: "Завершён"
        },
        seasons: 3,
        episodes: 28,
        description: "После внезапного исчезновения 2% населения мира оставшиеся пытаются жить в изменившейся реальности.",
        creators: ["Деймон Линделоф", "Том Перротта"],
        imdbRating: 8.3,
        awards: ["1 премия Эмми"],
        cast: ["Джастин Теру", "Эми Бреннеман", "Кэрри Кун", "Кристофер Эклистон"],
        streaming: "HBO Max",
        notable: "Культовый статус за философскую глубину и эмоциональное воздействие"
    },
    {
        id: 47,
        title: {
            original: "Six Feet Under",
            russian: "Клиент всегда мёртв"
        },
        image: 'src/assets/six-feet-under.jpg',
        genre: ["Драма", "Чёрная комедия", "Семейный"],
        years: {
            start: 2001,
            end: 2005,
            status: "Завершён"
        },
        seasons: 5,
        episodes: 63,
        description: "Семья Фишеров управляет похоронным бюро в Лос-Анджелесе после смерти отца семейства.",
        creators: ["Алан Болл"],
        imdbRating: 8.7,
        awards: ["9 премий Эмми", "3 Золотых глобуса"],
        cast: ["Питер Краузе", "Майкл С. Холл", "Фрэнсис Конрой", "Лорен Эмброуз"],
        streaming: "HBO Max",
        notable: "Считается одним из сериалов с лучшим финалом в истории телевидения"
    },
    {
        id: 48,
        title: {
            original: "Veep",
            russian: "Вице-президент"
        },
        image: 'src/assets/veep.jpg',
        genre: ["Сатира", "Комедия", "Политический"],
        years: {
            start: 2012,
            end: 2019,
            status: "Завершён"
        },
        seasons: 7,
        episodes: 65,
        description: "Селина Майер становится вице-президентом США и обнаруживает, что эта должность не имеет реальной власти.",
        creators: ["Армандо Ианнуччи"],
        imdbRating: 8.3,
        awards: ["17 премий Эмми"],
        cast: ["Джулия Луи-Дрейфус", "Тони Хейл", "Анна Кламски", "Мэтт Уолш"],
        streaming: "HBO Max",
        notable: "Рекордсмен по количеству премий Эмми для комедийного сериала"
    },
    {
        id: 49,
        title: {
            original: "Deadwood",
            russian: "Дедвуд"
        },
        image: 'src/assets/deadwood.jpg',
        genre: ["Вестерн", "Драма", "Исторический"],
        years: {
            start: 2004,
            end: 2006,
            status: "Завершён"
        },
        seasons: 3,
        episodes: 36,
        description: "Жизнь в лагерях золотоискателей Дедвуда, Южная Дакота, в 1870-х годах.",
        creators: ["Дэвид Милч"],
        imdbRating: 8.7,
        awards: ["8 премий Эмми", "1 Золотой глобус"],
        cast: ["Тимоти Олифант", "Иэн МакШейн", "Молли Паркер", "Джон Хоукс"],
        streaming: "HBO Max",
        notable: "Известен уникальным диалоговым стилем и исторической достоверностью"
    },
    {
        id: 50,
        title: {
            original: "The Night Of",
            russian: "Ночной гость"
        },
        image: 'src/assets/the-night-of.jpg',
        genre: ["Криминал", "Драма", "Детектив"],
        years: {
            start: 2016,
            end: 2016,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 8,
        description: "Студент обвиняется в убийстве, с которым он провел ночь, и попадает в сложную судебную систему.",
        creators: ["Стивен Заиллян", "Ричард Прайс"],
        imdbRating: 8.5,
        awards: ["5 премий Эмми"],
        cast: ["Риз Ахмед", "Джон Туртурро", "Билл Кэмп", "Пэйман Маади"],
        streaming: "HBO Max",
        notable: "Критический успех за реалистичное изображение судебной системы"
    },
    {
        id: 51,
        title: {
            original: "Big Little Lies",
            russian: "Большая маленькая ложь"
        },
        image: 'src/assets/big-little-lies.jpg',
        genre: ["Драма", "Детектив", "Триллер"],
        years: {
            start: 2017,
            end: 2019,
            status: "Завершён"
        },
        seasons: 2,
        episodes: 14,
        description: "Три матери в престижном калифорнийском городке вовлекаются в расследование убийства.",
        creators: ["Дэвид Э. Келли"],
        imdbRating: 8.5,
        awards: ["8 премий Эмми", "4 Золотых глобуса"],
        cast: ["Риз Уизерспун", "Николь Кидман", "Шейлин Вудли", "Лора Дерн"],
        streaming: "HBO Max",
        notable: "Звездный состав и остросоциальная тематика"
    },
    {
        id: 52,
        title: {
            original: "Sex and the City",
            russian: "Секс в большом городе"
        },
        image: 'src/assets/sex-and-the-city.jpg',
        genre: ["Комедия", "Драма", "Романтика"],
        years: {
            start: 1998,
            end: 2004,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 94,
        description: "Четыре подруги в Нью-Йорке исследуют сложности любви, карьеры и дружбы через призму колонки Кэрри Брэдшоу о сексе и отношениях.",
        creators: ["Даррен Стар"],
        imdbRating: 7.1,
        awards: ["7 премий Эмми", "8 Золотых глобусов"],
        cast: ["Сара Джессика Паркер", "Ким Кэтролл", "Синтия Никсон", "Кристин Дэвис"],
        streaming: "HBO Max",
        notable: "Культовый сериал, определивший стиль и разговоры о сексе и отношениях для целого поколения"
    }
];
exports.netflixSeries = [
    {
        id: 53,
        title: {
            original: "Stranger Things",
            russian: "Очень странные дела"
        },
        image: 'src/assets/stranger-things.jpg',
        genre: ["Научная фантастика", "Ужасы", "Драма"],
        years: {
            start: 2016,
            end: null,
            status: "Продолжается"
        },
        seasons: 4,
        episodes: 34,
        description: "Группа детей в маленьком городке сталкивается со сверхъестественными явлениями и правительственными заговорами.",
        creators: ["Братья Даффер"],
        imdbRating: 8.7,
        awards: ["7 премий Эмми"],
        cast: ["Милли Бобби Браун", "Финн Вулфхард", "Дэвид Харбор", "Вайнона Райдер"],
        streaming: "Netflix",
        notable: "Культовый сериал, возродивший интерес к ностальгии по 80-м"
    },
    {
        id: 54,
        title: {
            original: "The Crown",
            russian: "Корона"
        },
        image: 'src/assets/the-crown.jpg',
        genre: ["Драма", "Исторический", "Биографический"],
        years: {
            start: 2016,
            end: 2023,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 60,
        description: "История правления королевы Елизаветы II и событий, которые сформировали вторую половину XX века.",
        creators: ["Питер Морган"],
        imdbRating: 8.6,
        awards: ["21 премия Эмми", "3 Золотых глобуса"],
        cast: ["Клэр Фой", "Оливия Колман", "Имельда Стонтон", "Мэтт Смит"],
        streaming: "Netflix",
        notable: "Один из самых дорогих телесериалов в истории"
    },
    {
        id: 55,
        title: {
            original: "Narcos",
            russian: "Нарко"
        },
        image: 'src/assets/narcos.jpg',
        genre: ["Криминал", "Драма", "Биографический"],
        years: {
            start: 2015,
            end: 2017,
            status: "Завершён"
        },
        seasons: 3,
        episodes: 30,
        description: "Взлет и падение печально известного наркобарона Пабло Эскобара и кокаинового картеля Медельина.",
        creators: ["Крис Бранкато", "Карло Бернард", "Дуг Миро"],
        imdbRating: 8.8,
        awards: ["3 премии Эмми"],
        cast: ["Вагнер Моура", "Педро Паскаль", "Бойд Холбрук", "Хуан Пабло Раба"],
        streaming: "Netflix",
        notable: "Популяризировал жанр нарко-драм на телевидении"
    },
    {
        id: 56,
        title: {
            original: "The Witcher",
            russian: "Ведьмак"
        },
        image: 'src/assets/the-witcher.jpg',
        genre: ["Фэнтези", "Драма", "Приключения"],
        years: {
            start: 2019,
            end: null,
            status: "Продолжается"
        },
        seasons: 3,
        episodes: 24,
        description: "Ведьмак Геральт из Ривии, мутант и наемный убийца монстров, struggles to find his place in a world where people often prove more wicked than beasts.",
        creators: ["Лорен Шмидт"],
        imdbRating: 8.2,
        awards: [],
        cast: ["Генри Кавилл", "Аня Чалотра", "Фрейя Аллан", "Джоуи Бэти"],
        streaming: "Netflix",
        notable: "Адаптация культовой серии книг и видеоигр"
    },
    {
        id: 57,
        title: {
            original: "House of Cards",
            russian: "Карточный домик"
        },
        image: 'src/assets/house-of-cards.jpg',
        genre: ["Политический триллер", "Драма"],
        years: {
            start: 2013,
            end: 2018,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 73,
        description: "Беспринципный конгрессмен Фрэнк Андервуд начинает свой путь к вершинам власти в Вашингтоне.",
        creators: ["Бо Уиллимон"],
        imdbRating: 8.7,
        awards: ["7 премий Эмми"],
        cast: ["Кевин Спейси", "Робин Райт", "Майкл Келли", "Кейт Мара"],
        streaming: "Netflix",
        notable: "Первый оригинальный сериал Netflix, получивший премию Эмми"
    },
    {
        id: 58,
        title: {
            original: "Orange Is the New Black",
            russian: "Оранжевый — хит сезона"
        },
        image: 'src/assets/orange-is-new-black.jpg',
        genre: ["Комедия", "Драма"],
        years: {
            start: 2013,
            end: 2019,
            status: "Завершён"
        },
        seasons: 7,
        episodes: 91,
        description: "Жизнь женщин в федеральной тюрьме после того, как благополучная жительница Нью-Йорка попадает за решетку за прошлое преступление.",
        creators: ["Дженджи Коэн"],
        imdbRating: 8.1,
        awards: ["6 премий Эмми"],
        cast: ["Тейлор Шиллинг", "Лоренцо Препун", "Джейсон Биггс", "Кейт Малгрю"],
        streaming: "Netflix",
        notable: "Прорывной сериал, показавший разнообразие женских персонажей"
    },
    {
        id: 59,
        title: {
            original: "Black Mirror",
            russian: "Черное зеркало"
        },
        image: 'src/assets/black-mirror.jpg',
        genre: ["Научная фантастика", "Драма", "Антология"],
        years: {
            start: 2011,
            end: null,
            status: "Продолжается"
        },
        seasons: 6,
        episodes: 27,
        description: "Антология, исследующая темную сторону технологий и их влияние на современное общество.",
        creators: ["Чарли Брукер"],
        imdbRating: 8.8,
        awards: ["6 премий Эмми"],
        cast: ["Разные актеры в каждом эпизоде"],
        streaming: "Netflix",
        notable: "Современная классика научной фантастики с культурным влиянием"
    },
    {
        id: 60,
        title: {
            original: "The Queen's Gambit",
            russian: "Ход королевы"
        },
        image: 'src/assets/queens-gambit.jpg',
        genre: ["Драма", "Исторический"],
        years: {
            start: 2020,
            end: 2020,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 7,
        description: "Сирота-шахматистка в 1950-х годах стремится стать величайшим шахматистом в мире, борясь с зависимостью.",
        creators: ["Скотт Фрэнк"],
        imdbRating: 8.5,
        awards: ["11 премий Эмми", "2 Золотых глобуса"],
        cast: ["Аня Тейлор-Джой", "Билл Кэмп", "Мошелл Дэвис", "Томас Броди-Сангстер"],
        streaming: "Netflix",
        notable: "Вызвал всемирный всплеск интереса к шахматам"
    },
    {
        id: 61,
        title: {
            original: "Money Heist",
            russian: "Бумажный дом"
        },
        image: 'src/assets/money-heist.jpg',
        genre: ["Криминал", "Драма", "Триллер"],
        years: {
            start: 2017,
            end: 2021,
            status: "Завершён"
        },
        seasons: 5,
        episodes: 41,
        description: "Загадочный человек по имени Профессор собирает команду для осуществления крупнейшего ограбления в истории Испании.",
        creators: ["Алекс Пина"],
        imdbRating: 8.2,
        awards: ["1 премия Эмми"],
        cast: ["Урсула Корберо", "Альваро Морте", "Ициар Итуно", "Педро Алонсо"],
        streaming: "Netflix",
        notable: "Испанский сериал, ставший международным феноменом"
    },
    {
        id: 62,
        title: {
            original: "Dark",
            russian: "Тьма"
        },
        image: 'src/assets/dark.jpg',
        genre: ["Научная фантастика", "Триллер", "Драма"],
        years: {
            start: 2017,
            end: 2020,
            status: "Завершён"
        },
        seasons: 3,
        episodes: 26,
        description: "Исчезновение детей в немецком городке раскрывает тайны четырех семей, связанных путешествиями во времени.",
        creators: ["Баран бо Одар", "Янтье Фризе"],
        imdbRating: 8.7,
        awards: [],
        cast: ["Луи Хофманн", "Лиза Виккари", "Оливер Мазуччи", "Каролина Айххорн"],
        streaming: "Netflix",
        notable: "Считается одним из самых сложных и продуманных сериалов о путешествиях во времени"
    },
    {
        id: 63,
        title: {
            original: "Ozark",
            russian: "Озарк"
        },
        image: 'src/assets/ozark.jpg',
        genre: ["Криминал", "Драма", "Триллер"],
        years: {
            start: 2017,
            end: 2022,
            status: "Завершён"
        },
        seasons: 4,
        episodes: 44,
        description: "Финансовый консультант вынужден перевезти семью в Озарк, чтобы отмывать деньги для наркокартеля.",
        creators: ["Билл Дубюк", "Марк Уильямс"],
        imdbRating: 8.4,
        awards: ["3 премии Эмми"],
        cast: ["Джейсон Бейтман", "Лора Линни", "Джулия Гарнер", "София Хьюблиц"],
        streaming: "Netflix",
        notable: "Критический успех за напряженное повествование и сильную игру актеров"
    },
    {
        id: 64,
        title: {
            original: "Bridgerton",
            russian: "Бриджертоны"
        },
        image: 'src/assets/bridgerton.jpg',
        genre: ["Драма", "Романтика", "Исторический"],
        years: {
            start: 2020,
            end: null,
            status: "Продолжается"
        },
        seasons: 2,
        episodes: 16,
        description: "Семья Бриджертонов в регентской Англии ищет любовь и счастье в высшем обществе.",
        creators: ["Крис Ван Дюзен"],
        imdbRating: 7.3,
        awards: [],
        cast: ["Фиби Дайневор", "Реджи-Жан Пейдж", "Джонатан Бейли", "Никола Коглан"],
        streaming: "Netflix",
        notable: "Один из самых популярных сериалов Netflix с рекордными показателями просмотров"
    },
    {
        id: 65,
        title: {
            original: "The Umbrella Academy",
            russian: "Академия Амбрелла"
        },
        image: 'src/assets/umbrella-academy.jpg',
        genre: ["Супергерои", "Комедия", "Драма"],
        years: {
            start: 2019,
            end: null,
            status: "Продолжается"
        },
        seasons: 3,
        episodes: 30,
        description: "Разобщенная семья супергероев воссоединяется, чтобы раскрыть тайну смерти своего отца и предотвратить апокалипсис.",
        creators: ["Стив Блэкман"],
        imdbRating: 7.9,
        awards: [],
        cast: ["Эллиот Пейдж", "Том Хоппер", "Эйдан Галлахер", "Роберт Шиэн"],
        streaming: "Netflix",
        notable: "Адаптация комиксов Джерарда Вэя"
    },
    {
        id: 66,
        title: {
            original: "Mindhunter",
            russian: "Охотник за разумом"
        },
        image: 'src/assets/mindhunter.jpg',
        genre: ["Криминал", "Драма", "Триллер"],
        years: {
            start: 2017,
            end: 2019,
            status: "На паузе"
        },
        seasons: 2,
        episodes: 19,
        description: "Агенты ФБР в конце 1970-х годов разрабатывают профилирование серийных убийц, интервьюируя осужденных преступников.",
        creators: ["Джо Пенхолл"],
        imdbRating: 8.6,
        awards: [],
        cast: ["Джонатан Грофф", "Холт Маккленани", "Анна Торв", "Кэмерон Бриттон"],
        streaming: "Netflix",
        notable: "Культовый статус несмотря на преждевременное завершение"
    },
    {
        id: 67,
        title: {
            original: "BoJack Horseman",
            russian: "БоДжек Всадник"
        },
        image: 'src/assets/bojack-horseman.jpg',
        genre: ["Анимация", "Комедия", "Драма"],
        years: {
            start: 2014,
            end: 2020,
            status: "Завершён"
        },
        seasons: 6,
        episodes: 77,
        description: "Бывшая звезда ситкомов 90-х, антропоморфная лошадь, пытается вернуться к славе в Голливуде.",
        creators: ["Рафаэль Боб-Ваксберг"],
        imdbRating: 8.8,
        awards: [],
        cast: ["Уилл Арнетт", "Эми Седарис", "Аарон Пол", "Элисон Бри"],
        streaming: "Netflix",
        notable: "Считается одним из лучших анимационных сериалов для взрослых"
    },
    {
        id: 68,
        title: {
            original: "The Haunting of Hill House",
            russian: "Призраки дома на холме"
        },
        image: 'src/assets/hill-house.jpg',
        genre: ["Ужасы", "Драма", "Мистика"],
        years: {
            start: 2018,
            end: 2018,
            status: "Мини-сериал"
        },
        seasons: 1,
        episodes: 10,
        description: "Братья и сестры, которые выросли в самом известном доме с привидениями в Америке, вынуждены вернуться туда.",
        creators: ["Майк Флэнаган"],
        imdbRating: 8.6,
        awards: [],
        cast: ["Михил Хаусман", "Карла Гуджино", "Тимоти Хаттон", "Элизабет Ризер"],
        streaming: "Netflix",
        notable: "Критический успех за сочетание ужасов и семейной драмы"
    },
    {
        id: 69,
        title: {
            original: "You",
            russian: "Ты"
        },
        image: 'src/assets/you.jpg',
        genre: ["Психологический триллер", "Драма", "Криминал"],
        years: {
            start: 2018,
            end: null,
            status: "Продолжается"
        },
        seasons: 4,
        episodes: 40,
        description: "Менеджер книжного магазина использует социальные сети и технологии, чтобы манипулировать жизнью женщин, в которых влюбляется.",
        creators: ["Грег Берланти", "Сера Гэмбл"],
        imdbRating: 7.8,
        awards: [],
        cast: ["Пенн Бэджли", "Виктория Педретти", "Элизабет Лайл", "Шарлотта Ричи"],
        streaming: "Netflix",
        notable: "Популярный триллер о токсичной одержимости в цифровую эпоху"
    },
    {
        id: 70,
        title: {
            original: "Squid Game",
            russian: "Игра в кальмара"
        },
        image: 'src/assets/squid-game.jpg',
        genre: ["Триллер", "Драма", "Выживание"],
        years: {
            start: 2021,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 9,
        description: "Участники с финансовыми проблемами соревнуются в детских играх с смертельным исходом за огромный денежный приз.",
        creators: ["Хван Дон Хёк"],
        imdbRating: 8.0,
        awards: ["3 премии Эмми"],
        cast: ["Ли Джон Джэ", "Пак Хе Су", "Ви Ха Джун", "О Ён Су"],
        streaming: "Netflix",
        notable: "Самый популярный сериал Netflix за всю историю"
    },
    {
        id: 71,
        title: {
            original: "Wednesday",
            russian: "Уэнсдей"
        },
        image: 'src/assets/wednesday.jpg',
        genre: ["Комедия", "Драма", "Фэнтези"],
        years: {
            start: 2022,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 8,
        description: "Уэнсдей Аддамс расследует серию убийств в академии для необычных детей, развивая свои психические способности.",
        creators: ["Альфред Гоф", "Майлз Миллар"],
        imdbRating: 8.2,
        awards: [],
        cast: ["Дженна Ортега", "Кэтрин Зета-Джонс", "Луис Гусман", "Гвендолин Кристи"],
        streaming: "Netflix",
        notable: "Второй самый популярный сериал Netflix после 'Игры в кальмара'"
    },
    {
        id: 72,
        title: {
            original: "The Sandman",
            russian: "Песочный человек"
        },
        image: 'src/assets/sandman.jpg',
        genre: ["Фэнтези", "Драма", "Мистика"],
        years: {
            start: 2022,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 11,
        description: "После десятилетий заточения Повелитель Снов Морфей отправляется в путешествие по мирам, чтобы восстановить свои силы.",
        creators: ["Нил Гейман", "Дэвид С. Гойер", "Аллан Хайнберг"],
        imdbRating: 7.7,
        awards: [],
        cast: ["Том Стэрридж", "Джена Коулман", "Гвендолин Кристи", "Бойд Холбрук"],
        streaming: "Netflix",
        notable: "Долгожданная адаптация культового комикса Нила Геймана"
    },
    {
        id: 73,
        title: {
            original: "Love, Death & Robots",
            russian: "Любовь, смерть и роботы"
        },
        image: 'src/assets/love-death-robots.jpg',
        genre: ["Анимация", "Научная фантастика", "Антология"],
        years: {
            start: 2019,
            end: null,
            status: "Продолжается"
        },
        seasons: 3,
        episodes: 35,
        description: "Антология анимационных короткометражек, исследующих темы любви, смерти, технологий и будущего.",
        creators: ["Тим Миллер", "Дэвид Финчер"],
        imdbRating: 8.5,
        awards: ["5 премий Эмми"],
        cast: ["Разные актеры в каждом эпизоде"],
        streaming: "Netflix",
        notable: "Визуально инновационная антология с разнообразными анимационными стилями"
    },
    {
        id: 74,
        title: {
            original: "Russian Doll",
            russian: "Русская кукла"
        },
        image: 'src/assets/russian-doll.jpg',
        genre: ["Комедия", "Драма", "Мистика"],
        years: {
            start: 2019,
            end: 2022,
            status: "Завершён"
        },
        seasons: 2,
        episodes: 15,
        description: "Женщина застревает в временной петле, постоянно умирая и возрождаясь на своей вечеринке в честь дня рождения.",
        creators: ["Лесли Хедленд", "Наташа Лионн", "Эми Полер"],
        imdbRating: 7.8,
        awards: ["4 премии Эмми"],
        cast: ["Наташа Лионн", "Чарли Барнетт", "Грета Ли", "Иветт Меррит Браун"],
        streaming: "Netflix",
        notable: "Инновационный подход к теме временной петли"
    },
    {
        id: 75,
        title: {
            original: "The Squid Game: The Challenge",
            russian: "Игра в кальмара: Вызов"
        },
        image: 'src/assets/squid-game-challenge.jpg',
        genre: ["Реалити-шоу", "Соревнование"],
        years: {
            start: 2023,
            end: null,
            status: "Продолжается"
        },
        seasons: 1,
        episodes: 10,
        description: "Реалити-шоу, в котором 456 участников соревнуются в играх из оригинального сериала за самый большой денежный приз в истории телевидения.",
        creators: ["Создано по мотивам сериала Хвана Дон Хёка"],
        imdbRating: 6.0,
        awards: [],
        cast: ["Участники-неактеры"],
        streaming: "Netflix",
        notable: "Самое масштабное реалити-шоу в истории с рекордным призовым фондом"
    }
];
