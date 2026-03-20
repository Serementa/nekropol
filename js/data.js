// ═══════════════════════════════════════════════════════
//  Казачий некрополь ст. Убеженской — Общая база данных
//  Версия: 1.0 · Март 2026
// ═══════════════════════════════════════════════════════

const GITHUB = 'https://Serementa.github.io/nekropol';

function photoUrl(n) {
  return GITHUB + '/photos/obj_' + String(n).padStart(2, '0') + '/01.jpg';
}

const FORM_TYPES = {
  'lapchaty': 'Лапчатый крест',
  'georgievsky': 'Георгиевский крест',
  'plita': 'Плита / камень',
  'kokoshnik': 'С «кокошником»',
  'pryamoy': 'Прямой крест',
  'metallic': 'Металлический',
  'opalubka': 'С опалубкой',
  'multi': 'Многоступенчатый',
  'other': 'Иная форма'
};

const DATA = [
  {n:2,lat:44.923712,lon:41.297932,name:"Кобльков. Жена Елена",comment:"Есть в исповедной росписи 1827 (Кабельков). Насселил ст. Убеж с 1895",photos:"https://drive.google.com/drive/folders/10F-nhY7jUqcMmqlAKn4l-FwJMTRfUaYj",formType:"other",person:"Кобльков",date:"",confirmed:true},
  {n:3,lat:44.923677,lon:41.297889,name:"Памятник с маками",photos:"https://drive.google.com/drive/folders/1D9xM6Ny0SdgstZTacbQMqnJU0NxhHU3B",formType:"other"},
  {n:4,lat:44.923596,lon:41.297920,name:"Квадратный крест с бетонной опалубкой",comment:"Квадратный памятник с равносторонним крестом",photos:"https://drive.google.com/drive/folders/1byl_ezO8jL2TdN0bW19QgUeCiuWa-W0n",formType:"opalubka"},
  {n:5,lat:44.923633,lon:41.298010,name:"Малый крест с расширяющимися лопастями и округлым верхом",photos:"https://drive.google.com/drive/folders/19MI7zMpEDsV3yQCwqPDg0ndmF9TjJhXL",formType:"other"},
  {n:6,lat:44.923644,lon:41.297892,name:"Прямоугольная плита с православным крестом",comment:"Прямоугольный с опалубкой и православным крестом",photos:"https://drive.google.com/drive/folders/1xIA2G1R1leLq-G_vnt97Yzy-GFpCKb1d",formType:"plita"},
  {n:7,lat:44.923659,lon:41.297867,name:"Георгиевский (?) крест на ступенчатом пьедестале",comment:"Три основных части: основание, пьедестал и крест наверху",photos:"https://drive.google.com/drive/folders/1LCno4LAq5DiB9SkgYD6h0Z4uMSTpVm7i",formType:"georgievsky"},
  {n:8,lat:44.923736,lon:41.297743,name:"Георгиевский (?) крест на расширяющемся основании",comment:"Похож на крест №22",photos:"https://drive.google.com/drive/folders/1oJszLAQt6bF9Wi02Dni2sP2h4KkZ7I4S",formType:"georgievsky"},
  {n:9,lat:44.923585,lon:41.297687,name:"Прямой крест с крестообразными лопастями",comment:"Нет прямого фото, только боковые",photos:"https://drive.google.com/drive/folders/120UxyBXjIa-RKvvvIq1PU3_rRYMQvjbp",formType:"pryamoy"},
  {n:10,lat:44.923515,lon:41.297600,name:"Металлический кованный крест",photos:"https://drive.google.com/drive/folders/1e0_OK8iHiU9qjrwut08fBa8hYgiNY60f",formType:"metallic"},
  {n:11,lat:44.923626,lon:41.297870,name:"Большой крест с полукруглыми окончаниями на пьедестале",photos:"https://drive.google.com/drive/folders/15ZTCRZ88RF33MzScj6wT5oxVjTDmHUMB",formType:"multi"},
  {n:12,lat:44.923488,lon:41.297743,name:"Могильная плита — козак Андрей Мануилов",comment:"Мануилов в исповедной росписи 1827 года. †1887, 76 лет. Супруга Евфимiя †1892, 80 лет.",photos:"https://drive.google.com/drive/folders/1lshZuFnG-8b8fwxrcVD_ysBo3KBppqXg",formType:"plita",person:"Козак Андрей Мануилов",date:"†1887",confirmed:true},
  {n:13,lat:44.923473,lon:41.297768,name:"Простой прямоугольный крест с выпуклым рисунком",photos:"https://drive.google.com/drive/folders/13fCiWIYkkLipbAVOBAcsK8b8fTs8aN7v",formType:"pryamoy"},
  {n:14,lat:44.923688,lon:41.297421,name:"Сколотый сверху крест",comment:"КАЗ 1915 (?)",photos:"https://drive.google.com/drive/folders/1WwHM6ahvdRpCB7Tve_EE9jpEGRHyTAtc",formType:"pryamoy",date:"1915?"},
  {n:15,lat:44.923649,lon:41.297285,name:"Прямоугольный камень без опознавательных знаков",photos:"https://drive.google.com/drive/folders/12lvy_xNhdZkoaK9HcC8KMYoQA4Y2ujt0",formType:"plita"},
  {n:16,lat:44.923467,lon:41.297278,name:"Утопленный в землю крест с узким верхом",comment:"Сначала выкопать если достанут",photos:"https://drive.google.com/drive/folders/1-E1igtkx-3q2C6cXdZadoTh5gilF3qkz",formType:"pryamoy"},
  {n:17,lat:44.923403,lon:41.297331,name:"Крест с широким верхом",comment:"Утоплен в землю на 2/3",photos:"https://drive.google.com/drive/folders/1lNSy3jkt96GxwXFBlJW37SBYdm2Jxrs3",formType:"pryamoy"},
  {n:18,lat:44.923474,lon:41.297068,name:"Плита с полукруглым верхом и лютеранским крестом",comment:"Табличка металлическая утеряна",photos:"https://drive.google.com/drive/folders/1TTb_S_xIeNXt0dh32FxXMHx7Sa4alYUk",formType:"plita"},
  {n:19,lat:44.923298,lon:41.297550,name:"Плита прямоугольная с выпуклым крестом",photos:"https://drive.google.com/drive/folders/1--1ipzhSRnXiPOY1XL-a7IMHvDBEzd6h",formType:"plita"},
  {n:20,lat:44.923250,lon:41.297578,name:"Разломанная плита с полукруглым верхом",photos:"https://drive.google.com/drive/folders/1FdkJFOl5YCRRhobkuldmct-9BUY7as87",formType:"plita"},
  {n:22,lat:44.923339,lon:41.298083,name:"Георгиевский (?) крест на расширяющемся основании",comment:"Похож на крест №8",photos:"https://drive.google.com/drive/folders/1MUkOguFuUipJuVv3jAcoUCozKX5AuluW",formType:"georgievsky"},
  {n:23,lat:44.923348,lon:41.297919,name:"Средний крест с полукруглыми лопастями",photos:"https://drive.google.com/drive/folders/1L-P17rdh3sd3csm0h_3hWCqUe7BXfWXp",formType:"other"},
  {n:24,lat:44.923438,lon:41.298074,name:"Прямой утопленный крест в опалубку",photos:"https://drive.google.com/drive/folders/1g-41IotEbxyrqdfxTN_2epxwg_Tpdt5S",formType:"opalubka"},
  {n:27,lat:44.923630,lon:41.298313,name:"Широкий лапчатый крест — казак Сонин",comment:"По данным ВГД, в исповедной росписи 1827 года",photos:"https://drive.google.com/drive/folders/1SZUrB2xCRYe4RI7PbD7cflhlRAVWsLPG",formType:"lapchaty",person:"Казак Сонин",confirmed:true},
  {n:28,lat:44.923790,lon:41.298205,name:"Широкий лапчатый крест кривой",comment:"18?6 В память Алтушиных",photos:"https://drive.google.com/drive/folders/1O5jFXLz1kzcoLmBce6g319sY-PIDvxqk",formType:"lapchaty",person:"Алтушины",date:"18?6"},
  {n:29,lat:44.923773,lon:41.298183,name:"Средний крест с длинным основанием",photos:"https://drive.google.com/drive/folders/1t47h0xtbYBJZxqDqqEeByMMjyJJm1DnT",formType:"pryamoy"},
  {n:30,lat:44.923757,lon:41.298208,name:"Крест с «кокошником»",photos:"https://drive.google.com/drive/folders/1VDp8sJkpOJDHHd1npiQ3Sm72WyeMN1k4",formType:"kokoshnik"},
  {n:31,lat:44.923777,lon:41.298276,name:"Крест укороченный с выпуклым рисунком",photos:"https://drive.google.com/drive/folders/1uwkUaBkFt4qnpEOCR0_wdTXwxVyG2mtI",formType:"other"},
  {n:32,lat:44.923872,lon:41.298174,name:"Георгиевский (?) крест с двухступенчатым основанием",comment:"Памяти Гасаян Г. Н.",photos:"https://drive.google.com/drive/folders/1g7ffs7hvOTA9_C7kp4VCMkc4Z261Lf14",formType:"georgievsky",person:"Гасаян Г. Н."},
  {n:33,lat:44.923569,lon:41.298412,name:"Крест широкий лапчатый",comment:"Утоплен",photos:"https://drive.google.com/drive/folders/1svcuQw2puJA0QJLN1bztDFXP_D_4lWx2",formType:"lapchaty"},
  {n:34,lat:44.923516,lon:41.298347,name:"Крест широкий лапчатый",comment:"Утоплен на 2/3",photos:"https://drive.google.com/drive/folders/1jvkUWWUT0UCOkLZ7XEBQZX-MqwP7l6-q",formType:"lapchaty"},
  {n:36,lat:44.923408,lon:41.298520,name:"Прямой крест с косой перекладиной",comment:"Утоплен наполовину",photos:"https://drive.google.com/drive/folders/1nUPvU0XqSpgBYcqCTyCAwbG8DyZRnlcH",formType:"pryamoy"},
  {n:37,lat:44.923450,lon:41.298353,name:"Плита малая",comment:"Поросшая мхом, утопленная в землю",photos:"https://drive.google.com/drive/folders/1eKBtuxG6-ybjAHMdfmLzKA_C8OAtL428",formType:"plita"},
  {n:38,lat:44.923452,lon:41.298399,name:"Крест широкий лапчатый",comment:"Утоплен до верхней лопасти. Дата: 1882",photos:"https://drive.google.com/drive/folders/1Fhnnpq2EuuIJRs0vfZVCVx0BZTHDD-gX",formType:"lapchaty",date:"1882"},
  {n:39,lat:44.923205,lon:41.298398,name:"Крест с «кокошником»",comment:"По форме похож на крест №30",photos:"https://drive.google.com/drive/folders/1_jn0g1nB2RoEjGIJq8tp_7nxfU3Ulu9Q",formType:"kokoshnik"},
  {n:40,lat:44.923367,lon:41.298337,name:"Прямой крест с крестообразными лопастями",comment:"Похож на крест №9, утоплен. Дата: 1891",photos:"https://drive.google.com/drive/folders/1nEBeg-yIa-HKS-_RE41Qr8dyzgCdey8d",formType:"pryamoy",date:"1891"},
  {n:41,lat:44.923481,lon:41.298303,name:"Разломанный лапчатый крест",comment:"Разломан, частично утоплен, круглая дырка",photos:"https://drive.google.com/drive/folders/1-lEu8tZeyJ7OFeYh-Mp2S0x_2_d2VsIq",formType:"lapchaty"},
  {n:42,lat:44.923499,lon:41.298325,name:"Прямой крест с короткими лопастями",comment:"Гравировка на верхней лопасти, утоплен",photos:"https://drive.google.com/drive/folders/10BkEeklr8DosGHvF-qwuyRmMULJoc_rN",formType:"pryamoy"},
  {n:43,lat:44.923431,lon:41.298285,name:"Лапчатый крест",comment:"Утоплен, видна верхняя часть",photos:"https://drive.google.com/drive/folders/1j2pSzaH04CMd01uAjR2iVJ7vpOPYJShD",formType:"lapchaty"},
  {n:45,lat:44.923085,lon:41.297593,name:"Безымянный металлический крест",photos:"https://drive.google.com/drive/folders/1QL9tUfn7fmqMm60rX67EvZsEqNql18Ug",formType:"metallic"},
  {n:46,lat:44.923173,lon:41.296256,name:"Памятник хорунжему П. Ф. Крамарову",comment:"1-й Черноморский полк. 1888–1912. Предок в росписи 1827",photos:"https://drive.google.com/drive/folders/1mF-FmPrEf758LeTEt-ujBrHTBI2ep0Y1",formType:"multi",person:"Хорунжий Пётр Фёдорович Крамаров",date:"1888–1912",confirmed:true},
  {n:47,lat:44.923188,lon:41.296231,name:"Большой каменный многоступенчатый памятник",comment:"У входа, надпись утеряна",photos:"https://drive.google.com/drive/folders/15VJ8j76dCX3O-vzVYaqHTlGXOWO1SA_O",formType:"multi"},
  {n:66,lat:44.923416,lon:41.297959,name:"Крест с опалубкой средний",photos:"https://drive.google.com/drive/folders/1UPSJXIwDe0cOGcfywv4ATFUiZL_sKcET",formType:"opalubka"},
  {n:67,lat:44.923435,lon:41.298028,name:"Объект №67",comment:"Надпись: З Ткла",photos:"https://drive.google.com/drive/folders/1D9SjPAAFatGQZIefkMwWscoGrA_-5i_D",formType:"other"},
  {n:69,lat:44.923528,lon:41.297879,name:"Короткий крест прямоугольный",photos:"https://drive.google.com/drive/folders/1WDRxDAF0oDiXu14RENY4QDviCqluNrku",formType:"pryamoy"},
  {n:70,lat:44.923425,lon:41.297795,name:"Короткий крест частично утопленный",comment:"Неразборчивая надпись",photos:"https://drive.google.com/drive/folders/1kck9U62nWZ0yxc6cFYe_q0TWCfrcKWFY",formType:"pryamoy"},
  {n:71,lat:44.923439,lon:41.297374,name:"Округлый многоуровневый дореволюционный памятник",photos:"https://drive.google.com/drive/folders/1tHV2Dh_YbwMN9ETTJ2WWKsUHhqexNMYF",formType:"multi"},
  {n:72,lat:44.923327,lon:41.297454,name:"Крест с опалубкой (новая)",photos:"https://drive.google.com/drive/folders/1DHu2feaofa4ej_poiPKMqkD3FyKyr7r_",formType:"opalubka"},
  {n:74,lat:44.923259,lon:41.297414,name:"Плита малая (часть 3 захоронений «священника и детей»)",photos:"https://drive.google.com/drive/folders/1d9vero8xz4ewe2_LRVlnTIFvitwP4yAe",formType:"plita"},
  {n:75,lat:44.923257,lon:41.297367,name:"Фрагмент плиты + часть креста",photos:"https://drive.google.com/drive/folders/1TgQip9uD1-rbn6sMqgokh0IceeL7ANIQ",formType:"plita"},
  {n:78,lat:44.923396,lon:41.297891,name:"Сергей Ларионович Гальков, 1915",comment:"Раскопки",photos:"https://drive.google.com/drive/folders/1naowt7ygxf9ATbB99-ASmyzcHR55saWU",formType:"pryamoy",person:"Сергей Ларионович Гальков",date:"1915"},
  {n:79,lat:44.923500,lon:41.297275,name:"Лапчатый крест с надписями",comment:"Раскопки",photos:"https://drive.google.com/drive/folders/1-o5AZwEleSWcdptyhhRlpMorHvXebNA6",formType:"lapchaty"},
  {n:82,lat:44.923417,lon:41.297260,name:"Свежевыкопанный крест",comment:"Марта Данила",photos:"https://drive.google.com/drive/folders/1RqofkKk4mMACnsT2JNkU0e2K9M1qu2iM",formType:"pryamoy",person:"Данила",date:""},
  // ── Проблемы координат ──
  {n:44,lat:44.923426,lon:41.298192,name:"Фрагменты памятников",comment:"Два фрагмента + каменная табличка",photos:"https://drive.google.com/drive/folders/18qvV0a-VWV8bZREEMQpLj_qLGIG3sHhV",p:true,reason:"3 объекта в одной точке",formType:"other"},
  {n:55,lat:44.923540,lon:41.298158,p:true,reason:"Координаты дублируют №54"},
  {n:61,lat:44.923473,lon:41.298117,p:true,reason:"Координаты дублируют №57"},
  {n:73,lat:44.923311,lon:41.297479,name:"Крест с опалубкой (новая)",photos:"https://drive.google.com/drive/folders/1R-xUcb5-8bk3Fss59btZR32sIIGlg-a_",p:true,reason:"Координаты дублируют №77",formType:"opalubka"},
  {n:77,lat:44.923311,lon:41.297479,name:"Касьянов Иван Михайлович",photos:"https://drive.google.com/drive/folders/1ijLKECohz08bgxEymlGUtBojDKkm5CVo",p:true,reason:"Координаты дублируют №73",formType:"other",person:"Касьянов Иван Михайлович"},
  // ── Нет данных ──
  {n:48,lat:44.923668,lon:41.298053,p:true,reason:"Нет данных в каталоге"},
  {n:49,lat:44.923650,lon:41.298031,p:true,reason:"Нет данных в каталоге"},
  {n:50,lat:44.923648,lon:41.297985,p:true,reason:"Нет данных в каталоге"},
  {n:51,lat:44.923587,lon:41.298084,p:true,reason:"Нет данных в каталоге"},
  {n:52,lat:44.923624,lon:41.298174,p:true,reason:"Нет данных в каталоге"},
  {n:54,lat:44.923540,lon:41.298158,p:true,reason:"Нет данных, координаты дублируют №55"},
  {n:56,lat:44.923424,lon:41.298145,p:true,reason:"Нет данных в каталоге"},
  {n:57,lat:44.923473,lon:41.298117,p:true,reason:"Нет данных, координаты дублируют №61"},
  {n:58,lat:44.923510,lon:41.298207,p:true,reason:"Нет данных в каталоге"},
  {n:59,lat:44.923523,lon:41.298136,p:true,reason:"Нет данных в каталоге"},
  {n:60,lat:44.923455,lon:41.298096,p:true,reason:"Нет данных в каталоге"},
  {n:62,lat:44.923422,lon:41.298099,p:true,reason:"Нет данных в каталоге"},
  {n:63,lat:44.923438,lon:41.298074,p:true,reason:"Нет данных в каталоге"},
  {n:64,lat:44.923304,lon:41.298040,p:true,reason:"Нет данных в каталоге"},
  {n:65,lat:44.923354,lon:41.298058,p:true,reason:"Нет данных в каталоге"},
  {n:68,lat:44.923466,lon:41.297978,p:true,reason:"Нет данных в каталоге"},
  {n:80,lat:44.923430,lon:41.296838,p:true,reason:"Нет данных в каталоге"},
];

const PERSONS = [
  {obj:12, name:"Козак Андрей Мануилов", details:"†1887, 76 лет. Супруга Евфимiя †1892, 80 лет. В росписи 1827", confirmed:true},
  {obj:46, name:"Хорунжий Пётр Фёдорович Крамаров", details:"1888–1912, 1-й Черноморский полк, убит шахсвенами. Предок в росписи 1827", confirmed:true},
  {obj:2,  name:"Кобльков", details:"Жена Елена, Катерина. В росписи 1827 как Кабельков. Насселил ст. Убеж с 1895", confirmed:true},
  {obj:27, name:"Казак Сонин", details:"В росписи 1827", confirmed:true},
  {obj:25, name:"Лукiя Тимофеевна Щербаченко", details:"—"},
  {obj:26, name:"Вдова хорунжего Ерина", details:"—"},
  {obj:28, name:"Алтушины", details:"Дата: 18?6"},
  {obj:32, name:"Гасаян Г. Н.", details:"—"},
  {obj:77, name:"Касьянов Иван Михайлович", details:"—"},
  {obj:78, name:"Сергей Ларионович Гальков", details:"1915"},
  {obj:82, name:"Данила", details:"Свежевыкопанный крест"},
];

const TIMELINE = [
  {date:"Май (?) 2004", status:"done", title:"Первые находки", desc:"Сергей Гайдук случайно находит плиту Мануйловых. В это же время удается найти и идентифицировать 6 памятников. Находятся фото семьи Мануиловых. Кладбище представляет собой непроходимую заросшую кустарником зону"},
  {date:"2022-2022", status:"done", title:"Раскопки после пыльной бури", desc:"За два года около 70 потомков казаков поднимают 42 могилы XVIII–XIX веков.Атаман Фёдор Медоний обнаруживает могилу предка — вдовы Харунжевой-Гетмановой (1878 год)."}
  {date:"Июль 2025", status:"done", title:"Первый день фестиваля «Легенды поколений»", desc:"На кладбище работали три команды: одни раскапывали занесённые пыльной бурей надгробия, другие укрепляли фундамент у некоторых памятников, третьи фотографировали все доступные объекты"},
  {date:"Август 2025", status:"done", title:"Предпроектный анализ", desc:"Мы провели исследование и пытались найти российские и зарубежные аналоги проектов по сохранению казачьих некрополей. Оказалось, что прицельно ими никто раньше не занимался. Мы исследовали похожие историко-культурные и научные проекты и поняли, каким мы хотим видеть наш"},
  {date:"Сентябрь 2025", status:"done", title:"Создание каталога", desc:"Волонтёры собрали сделанные фото. Мы их систематизировали. Из этих материалов у нас родился каталог исторических захоронений: мы описали 54 объекта по 15 параметрам"},
  {date:"Ноябрь 2025", status:"done", title:"Архивная работа", desc:"Мы привязали выявленные на памятниках данные к историческим документам и подтвердили 4 фамилии по исповедной росписи 1827 года"},
  {date:"Декабрь 2025", status:"done", title:"Схема и координаты", desc:"Выявили в каталоге дубли, сделали второй выезд и замерили координаты всех объектов"},
  {date:"Март 2026", status:"active", title:"Сайт проекта", desc:"Мы разрабатываем многостраничный сайт с интерактивной картой, каталогом и хроникой"},
  {date:"Март 2026", status:"active", title:"Расширение базы данных", desc:"Мы доснимаем точки, верифицируем полученные координаты и фактическое местоположение, собираем всю информацию о развитии проекта с самого его начала"},
  {date:"Q2 2026", status:"planned", title:"Типология крестов", desc:"Планируем сделать классификацию крестов по форме. Сравним их с аналогами Невинномысска, Одессы, уцелевших образцов в других станицах"},
  {date:"Q2 2026", status:"planned", title:"Виртуальный тур и презентация", desc:"Мы создадим виртуальный тур по некрополю, подготовим итоговую презентацию и представим её на фестивале «Легенды поколений 2026»"},
  {date:"Q3 2026", status:"planned", title:"3D-моделирование", desc:"Ищем волонтёров, чтобы сделать 3D-модели якорных объектов некрополя"},
];

const SOURCES = [
  {title:"Проект «Свод русских надписей»", url:"https://cir.rssda.su/", type:"method"},
  {title:"Зиганшина А. А., Дынин М. Д. — Документирование надгробия: современные методы", file:"2400_Ziganshina_A_A_Dynin_M_D_Do.pdf", type:"article"},
  {title:"Старое кладбище Таганрога — сайт проекта", url:"http://cemetery.su/", type:"analogue"},
  {title:"Виртуальное путешествие — Таганрог", url:"https://marfano.ru/pltg/", type:"analogue"},
  {title:"Сапожников И. В. «Каменные кресты предместий Одессы (конец XVI – XIX вв.)». Одесса, 1999", type:"book"},
  {title:"Потравнов А. Л., Хмельник Т. Ю. — Типология крестов Северо-Запада России", file:"Типология_крестов.pdf", type:"book"},
  {title:"Лопин Р. С. — Исследование кладбища Славянска-на-Кубани", file:"123536136_1.pdf", type:"article"},
];

const okCount = DATA.filter(d => !d.p).length;
const prCount = DATA.filter(d => d.p).length;
const totalCount = DATA.length;
