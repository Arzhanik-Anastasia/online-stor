import { IProduct } from './types';

export const DEFAULT_FILTERS = {
  brands: ['nike', 'adidas', 'jordan', 'reebok', 'joma', 'puma'],
  colors: ['синий', 'белый', 'черный', 'зеленый', 'красный'],
  category: ['lifestyle', 'running', 'boots', 'slides', 'basketBall'],
  minStock: 1,
  maxStock: 216,
  minPrice: 110,
  maxPrice: 490,
  sort: 'sort-name-max',
};

export enum Brand {
  'nike' = 'nike',
  'asics' = 'asics',
  'jordan' = 'jordan',
  'adidas' = 'adidas',
  'reebok' = 'reebok',
  'joma' = 'joma',
  'puma' = 'puma',
}
export enum Category {
  'lifestyle' = 'lifestyle',
  'running' = 'running',
  'boots' = 'boots',
  'slides' = 'slides',
  'basketball' = 'basketBall',
}

const data: IProduct[] = [
  {
    id: 1,
    name: 'Asics Gel Kayano 26 X004-604',
    brand: Brand.asics,
    category: Category.running,
    price: 180,
    stock: 18,
    color: 'синий',
    size: 42,
    season: 'Весна, Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Вес мужской модели 315г , женской — 260г (стали легче примерно на 20 г. относительно 25 версии). Перепад мужской пары кроссовок – 10 мм, женской – 13 мм    Выпускаются варианты с разной полнотой: 2E для широкой стопы и 4E для очень широкой стопы',
  },
  {
    id: 2,
    name: 'Asics Gel-Lyte III OG White',
    brand: Brand.asics,
    category: Category.lifestyle,
    price: 210,
    stock: 5,
    color: 'белый',
    size: 37,
    season: 'Весна,Л ето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Переиздание модели GEL-LYTE III к 30-летию оригинальной пары. Силуэт GEL-LYTE III с раздвоенным язычком разработан дизайнером Сигэюки Мицуи в 1990 году. Модель из ярко-белой натуральной кожи оснащена амортизацией GEL в области пятки, которая поглощает ударную нагрузку и обеспечивает высокий уровень комфорта.',
  },
  {
    id: 3,
    name: 'NIKE AIR FLIGHT 89 CHICAGO 89',
    brand: Brand.nike,
    category: Category.basketball,
    price: 190,
    stock: 1,
    color: 'красный',
    size: 42,
    season: 'Весна,Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Nike Air Flight 89 – стильные кроссовки с видимой воздушной капсулой. Это модель с отличными сбалансированными характеристиками: Культовая технология Nike Air позволяет добиться отличных показателей амортизации. Система фиксации стопы имеет два дополнительных ремешка (в области щиколотки и середины стопы). Верх обуви изготовлен из комбинированных материалов (сочетание кожи и текстиля), что обеспечивает прочность и вентиляцию модели.',
  },
  {
    id: 4,
    name: 'NIKE KYRIE 7 LCONS OF SPORT',
    brand: Brand.nike,
    category: Category.basketball,
    price: 320,
    stock: 18,
    color: 'красный',
    size: 41,
    season: 'Весна,Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Легкая и удобная модель Kyrie 7 подходит для баскетболистов начального уровня подготовки. Эти баскетбольные кроссовки с фиксирующим ремешком и оптимальной амортизацией обеспечивают комфорт во время бега и прыжков.',
  },
  {
    id: 5,
    name: 'Nike Air Jordan',
    brand: Brand.nike,
    category: Category.lifestyle,
    price: 300,
    stock: 1,
    color: 'красный',
    size: 44,
    season: 'Весна, Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Кроссовки Nike Air сочетают в себе эргономику, прекрасную амортизацию и защиту стопы. Внешняя часть модели имеет специальную перфорацию, предназначенную для вентилирования. Резиновая подошва обладает противоскользящими свойствами и обеспечивает максимальное удобство во время прогулок либо занятий спортом. Подробнее: https://24obuv.by/p177004482-krossovki-nike-air.html',
  },
  {
    id: 6,
    name: 'AIR JORDAN 3 SE RED CEMENT CK5692-600',
    brand: Brand.jordan,
    category: Category.lifestyle,
    price: 410,
    stock: 26,
    color: 'белый',
    size: 40,
    season: 'Весна, Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Мужские кроссовки Jordan, созданные на основе знаменитого баскетбольного силуэта Air Jordan 3 и представшие в переосмысленном дизайне, впервые представленным Тинкером Хэтфилдом в 1988 году. Верхняя часть кроссовок выполнена из фактурной кожи высочайшего качества. Модель обладает средней высотой, удобным язычком и традиционной шнуровкой с укреплёнными вставками.',
  },
  {
    id: 7,
    name: 'ADIDAS SUPERSTAR FTWWHT REAPNK REAPNK CG6608',
    brand: Brand.adidas,
    category: Category.lifestyle,
    price: 200,
    stock: 6,
    color: 'красный',
    size: 38,
    season: 'Сезон: Весна,Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Kлассический силуэт с немного измененным дизайном. Она имеет более мягкий воротник и язычка для дополнительного комфорта и поддержки',
  },
  {
    id: 8,
    name: 'JUST DON X JORDAN LEGACY 312 GHOST GREEN',
    brand: Brand.jordan,
    category: Category.lifestyle,
    price: 280,
    stock: 6,
    color: 'зеленый',
    size: 42,
    season: 'Сезон: Весна, Лето',
    use: 'Ходить каждый день, Для баскетбола',
    dopImg: [2, 3],
    description: 'These are a pair of Just Don, Nike Air Jordan 312 Legacy, luxurious and buttery leather, in this glowing spring/summer green',
  },
  {
    id: 9,
    name: 'BOOST ADIDAS ORIGINALS ZX930X EQT BOOST 3M',
    brand: Brand.adidas,
    category: Category.running,
    price: 216,
    stock: 46,
    color: 'черный',
    size: 41,
    season: 'Сезон: Весна, Лето',
    use: 'Ходить каждый день, Для бега, Для фитнеса',
    dopImg: [2, 3],
    description: 'Модель adidas ZX930 X EQT EE3649 лимитированная коллекция ZX930. Подлинность: 100% оригинал Adidas! adidas Boost — это результат труда команды инноваций adidas и немецкого химического концерна BASF. Перед ними стояла амбициозная задача — объединить в одной технологии преимущества мягкой и упругой амортизации',
  },
  {
    id: 10,
    name: 'Adilette CF+ mono',
    brand: Brand.adidas,
    category: Category.slides,
    price: 190,
    stock: 216,
    color: 'черный',
    size: 40,
    season: 'Сезон: Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Мужские шлепанцы, которые невероятно комфортно ощущаются на ногах. Стелька cloudfoam plus обеспечивает мягкую амортизацию и помогает стопам расслабиться после плавания. Литой верх из ЭВАЛитая анатомическая стелька. Ультрамягкая стелька cloudfoam plus бережно амортизирует каждый шаг, заряжая его энергией. Литая подошва из легкого ЭВА для большего комфорта.',
  },
  {
    id: 11,
    name: 'REEBOK RUN R96 CN4606',
    brand: Brand.reebok,
    category: Category.lifestyle,
    price: 203,
    stock: 16,
    color: 'белый',
    size: 42,
    season: 'Сезон: Весна, Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Плотный фигурный каркас дополняется текстильными и кожаными деталями. Модель, получившая вдохновение от прототипа PUMP EVO 1996 года, предлагает составную подошву, которая отвечает последним трендам на массивный дизайн. Оригинальная система шнуровки, проходящая через мысок, сопровождается зажимом для быстрой фиксации обуви.',
  },
  {
    id: 12,
    name: 'REEBOK RUN R8 CN406',
    brand: Brand.reebok,
    category: Category.lifestyle,
    price: 319,
    stock: 16,
    color: 'синий',
    size: 39,
    season: 'Сезон: Весна, Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Возьми день под контроль в кроссовках для ходьбы Reebok Stride GTX IV. Эта модель гарантирует отличное сцепление с поверхностью и удобство в течение всего дня. Благодаря сдержанному дизайну их легко сочетать с любой одеждой, а усовершенствованные технологии позволят не беспокоиться о капризах природы',
  },
  {
    id: 13,
    name: 'RBK FULGERE SLIDE',
    brand: Brand.reebok,
    category: Category.slides,
    price: 110,
    stock: 1,
    color: 'белый',
    size: 39,
    season: 'Сезон: Лето',
    use: 'Ходить каждый день',
    dopImg: [2, 3],
    description: 'Открытые шлепки резиновые в спортивном стиле - отличное решение на все случаи жизни! Красивые пляжные шлепанцы резиновые мужские летние станут неотъемлемой частью вашего гардероба жарким летом!',
  },
  {
    id: 14,
    name: 'Adidas Predator Edge.3 LL FG/бутсы',
    brand: Brand.adidas,
    category: Category.boots,
    price: 490,
    stock: 16,
    color: 'синий',
    size: 43,
    season: 'Сезон: Лето',
    use: 'Играть в футбол',
    dopImg: [2, 3],
    description: 'Захватывающий принт, нанесенный на их текстильный верх без шнурков с покрытием, помогает вам при каждом касании мяча.  Привлекательная угловатая подошва из термополиуретана под ней обеспечивает уверенное управление на сухой натуральной траве.',
  },
  {
    id: 15,
    name: 'Joma Top Flex Indoor',
    brand: Brand.joma,
    category: Category.boots,
    price: 260,
    stock: 156,
    color: 'зеленый',
    size: 40,
    season: 'Сезон: Лето',
    use: 'Играть в футбол',
    dopImg: [2, 3],
    description: 'Профессиональные футзалки JOMA TOP FLEX INDOOR - изготовлена из натуральной кожи специально обработанной для увеличения гибкости. Носок усилен прошивкой и проклеен.',
  },
  {
    id: 16,
    name: 'Joma Super Regate',
    brand: Brand.joma,
    category: Category.boots,
    price: 361,
    stock: 16,
    color: 'зеленый',
    size: 44,
    season: 'Сезон: Лето',
    use: 'Играть в футбол',
    dopImg: [2, 3],
    description: 'Верхняя часть изготовлена из микрофибры и нейлона, а также имеет участки из термопластичного полиуретана на нейлоне для предотвращения трения стопы. Также используется технология PROTECTION для защиты носка во время ударов и обеспечения устойчивости.Верхний слой подошвы изготовлен из материала ЭВА на основе натуральных волокон для оптимальной амортизации и поглощения ударов при соприкосновении с поверхностью.',
  },
  {
    id: 17,
    name: 'Кроссовки Puma RS-X Tracks MTV GDT Gloome',
    brand: Brand.puma,
    category: Category.running,
    price: 340,
    stock: 16,
    color: 'зеленый',
    size: 40,
    season: 'Сезон: Лето',
    use: 'Повседневная обувь',
    dopImg: [2, 3],
    description: 'Кроссовки RS-X TRACKS олицетворяют путь к экстремальному, а заодно «рассказывают» об MTV, вместе с которым выросло не одно поколение. Дизайн в ретро-стиле – дань уважения оригинальной модели. Детали: легкая промежуточная подошва IMEVA делает обувь чрезвычайно легкой и мягкой, сохраняя свою чувствительность, но при этом это достаточно прочный материал. Амортизационная технология Running System.',
  },
  {
    id: 18,
    name: 'REEBOK FLASHFILM',
    brand: Brand.reebok,
    category: Category.running,
    price: 268,
    stock: 16,
    color: 'синий',
    size: 42,
    season: 'Сезон: Осень, Весна',
    use: 'Повседневная обувь',
    dopImg: [2, 3],
    description: 'Кроссовки RS-X TRACKS олицетворяют путь к экстремальному, а заодно «рассказывают» об MTV, вместе с которым выросло не одно поколение. Дизайн в ретро-стиле – дань уважения оригинальной модели. Детали: легкая промежуточная подошва IMEVA делает обувь чрезвычайно легкой и мягкой, сохраняя свою чувствительность, но при этом это достаточно прочный материал. Амортизационная технология Running System.',
  },
  {
    id: 19,
    name: 'Nike FLASHFILM',
    brand: Brand.nike,
    category: Category.lifestyle,
    price: 316,
    stock: 19,
    color: 'синий',
    size: 42,
    season: 'Сезон: Осень, Весна',
    use: 'Повседневная обувь',
    dopImg: [2, 3],
    description: 'Высокие кроссовки мужские Ausgut для занятий спортом и игры в баскетбол на мягком покрытии на улице и в зале. Кроссовки баскетбольные с высоким задником хорошо фиксирует голеностоп, на подошве имеются противоскользящие вставки. Мужские кроссовки маломерят на размер, учитывайте это при заказе пожалуйста. Кроссовки мужские , кроссовки, кеды, кеды мужские, обувь , тренажеры и фитнес , кроссовки также подойдут для для девочек, кроссовки мужские осенние, спорт, мужская обувь, фитнес, волейбольные кроссовки, мужские кеды, волейбол, баскетбол, обувь мужская кроссовки.',
  },

  {
    id: 20,
    name: 'REEBOK GURESU 2.0 MAROON/PROPNK/MIDSHA',
    brand: Brand.reebok,
    category: Category.running,
    price: 168,
    stock: 3,
    color: 'красный',
    size: 38,
    season: 'Сезон: Осень, Весна',
    use: 'Повседневная обувь',
    dopImg: [2, 3],
    description: 'Набери темп и сохрани его до финиша. Подошва с высокой степенью упругости делает эти женские кроссовки настоящим источником энергии. Конструкция модели напоминает носок, который надежно и плотно фиксирует ногу. Петелька на заднике позволяет быстро надеть кроссовки и отправиться на покорение дистанции. Идеально для бега. Конструкция верха плотно и мягко, как носок, обхватывает стопу. Пеноматериал Floatride Fuel обеспечивает эффективную и комфортную амортизацию. Стойкая к истиранию, прочная резиновая подметка. Петелька на заднике для удобства.',
  },
  {
    id: 21,
    name: 'Puma Serve Pro Mid PTX',
    brand: Brand.puma,
    category: Category.lifestyle,
    price: 210,
    stock: 84,
    color: 'зеленый',
    size: 42,
    season: 'Сезон: Осень, Весна',
    use: 'Повседневная обувь',
    dopImg: [2, 3],
    description: 'Демисезонные мужские ботинки в спортивно-повседневном стиле. Лаконичный дизайн позволит с лёгкостью вписать пару в гардероб, сочетать почти с любой одеждой. Удобная колодка и лёгкий вес делают ботинки подходящим вариантом для прогулок и активного отдыха. Шнуровка дополнена застёжкой-молнией, чтобы обувь можно было быстро надеть и снять.',
  },
];

export default data;
