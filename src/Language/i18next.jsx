// src/Language/i18next.jsx
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Feature
      featuresTitle: "Feature with title",
      titleDescription: "Left-aligned title explaining these awesome features",
      paragraphDescription: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.",
      goToFeaturesMore: "Go to Features More",
      featuredTitle1: "Featured title 1",
      featuredDescription1: "Paragraph of text beneath the heading to explain the heading.",
      featuredTitle2: "Featured title 2",
      featuredDescription2: "Paragraph of text beneath the heading to explain the heading.",
      featuredTitle3: "Featured title 3",
      featuredDescription3: "Paragraph of text beneath the heading to explain the heading.",
      // About
      aboutTitle: "About Us",
      label1: "Label 1",
      description1: "We are a team of passionate developers dedicated to creating amazing web applications.",
      label2: "Label 2",
      description2: "Our mission is to deliver high-quality software solutions.",
      label3: "Label 3",
      description3: "We exceed our clients' expectations.",
      aboutMore: "About More",
      aboutDescription: "Learn more about our journey, values, and the team behind our success.",
      readMore: "Read More",
      // Service
      popularTopics: "Popular Topics",
      passwordHelp: "Password Help",
      passwordHelpDescription: "Reset, change, or unlock your account credentials for uninterrupted access.",
      cloudConferencingSupport: "Cloud Conferencing Support",
      cloudConferencingSupportDescription: "Get assistance with setting up or scheduling Webex or other virtual meetings.",
      orderNewHardware: "Order New Hardware",
      orderNewHardwareDescription: "Upgrade your tools by ordering laptops, phones, and more with ease.",
      meetingHelp: "Meeting Help",
      meetingHelpDescription: "Master the art of scheduling meetings or reserving conference rooms for your team.",
      exploreMoreTopics: "Explore More Topics",
      announcements: "Announcements",
      announcement1: "With great power (of mobile devices), there must also come great responsibility. Three things you can do now to protect yourself and Comcast.",
      announcement2: "On Tuesday morning February 13, we will complete a network change that will redirect all web traffic...",
      announcement3Title: "Multi-Factor Authentication (MFA) for Outlook Web Access (OWA)",
      announcement3Description: "Multi-Factor Authentication (MFA) for Outlook Web Access (OWA), also known as “webmail,”...",
      announcement4Title: "New Security Measures",
      announcement4Description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
      seeAllAnnouncements: "See All Announcements & Alerts",
      whatSetsUsApart: "What Sets Us Apart",
      whatSetsUsApartDescription: "At Your Company Name, we pride ourselves on providing responsive, reliable, and secure support services tailored to empower our clients. Our expertise ensures that your technology works for you—not against you.",
      getInTouch: "Get in Touch",
      // Contact
      contactUs: "Contact Us",
      contactDescription: "We'd love to hear from you! Fill out the form below or find us on the map.",
      name: "Name",
      yourName: "Your Name",
      email: "Email",
      yourEmail: "Your Email",
      message: "Message",
      yourMessage: "Your Message",
      submit: "Submit",
      ourLocation: "Our Location"
    }
  },
  ru: {
    translation: {
      // Feature
      featuresTitle: "Особенности с заголовком",
      titleDescription: "Заголовок, выровненный по левому краю, объясняющий эти удивительные особенности",
      paragraphDescription: "Абзац текста под заголовком, объясняющий заголовок. Мы добавим к нему еще одно предложение и, вероятно, будем продолжать, пока у нас не закончатся слова.",
      goToFeaturesMore: "Перейти к дополнительным функциям",
      featuredTitle1: "Избранный заголовок 1",
      featuredDescription1: "Абзац текста под заголовком, объясняющий заголовок.",
      featuredTitle2: "Избранный заголовок 2",
      featuredDescription2: "Абзац текста под заголовком, объясняющий заголовок.",
      featuredTitle3: "Избранный заголовок 3",
      featuredDescription3: "Абзац текста под заголовком, объясняющий заголовок.",
      // About
      aboutTitle: "О нас",
      label1: "Метка 1",
      description1: "Мы команда увлеченных разработчиков, стремящихся создавать удивительные веб-приложения.",
      label2: "Метка 2",
      description2: "Наша миссия - предоставлять высококачественные программные решения.",
      label3: "Метка 3",
      description3: "Мы превосходим ожидания наших клиентов.",
      aboutMore: "Подробнее о нас",
      aboutDescription: "Узнайте больше о нашем пути, ценностях и команде, стоящей за нашим успехом.",
      readMore: "Читать далее",
      // Service
      popularTopics: "Популярные темы",
      passwordHelp: "Помощь с паролем",
      passwordHelpDescription: "Сбросьте, измените или разблокируйте свои учетные данные для непрерывного доступа.",
      cloudConferencingSupport: "Поддержка облачных конференций",
      cloudConferencingSupportDescription: "Получите помощь в настройке или планировании Webex или других виртуальных встреч.",
      orderNewHardware: "Заказать новое оборудование",
      orderNewHardwareDescription: "Обновите свои инструменты, заказав ноутбуки, телефоны и многое другое с легкостью.",
      meetingHelp: "Помощь с встречами",
      meetingHelpDescription: "Освойте искусство планирования встреч или бронирования конференц-залов для вашей команды.",
      exploreMoreTopics: "Изучить больше тем",
      announcements: "Объявления",
      announcement1: "С великой силой (мобильных устройств) приходит великая ответственность. Три вещи, которые вы можете сделать сейчас, чтобы защитить себя и Comcast.",
      announcement2: "Во вторник утром, 13 февраля, мы завершим изменение сети, которое перенаправит весь веб-трафик...",
      announcement3Title: "Многофакторная аутентификация (MFA) для Outlook Web Access (OWA)",
      announcement3Description: "Многофакторная аутентификация (MFA) для Outlook Web Access (OWA), также известного как «веб-почта»,...",
      announcement4Title: "Новые меры безопасности",
      announcement4Description: "Сделайте это, чтобы защитить себя и свою компанию.",
      seeAllAnnouncements: "Посмотреть все объявления и оповещения",
      whatSetsUsApart: "Что нас отличает",
      whatSetsUsApartDescription: "В компании Your Company Name мы гордимся тем, что предоставляем отзывчивые, надежные и безопасные услуги поддержки, адаптированные для наших клиентов. Наш опыт гарантирует, что ваша технология работает на вас, а не против вас.",
      getInTouch: "Связаться с нами",
      // Contact
      contactUs: "Свяжитесь с нами",
      contactDescription: "Мы будем рады услышать от вас! Заполните форму ниже или найдите нас на карте.",
      name: "Имя",
      yourName: "Ваше имя",
      email: "Электронная почта",
      yourEmail: "Ваш адрес электронной почты",
      message: "Сообщение",
      yourMessage: "Ваше сообщение",
      submit: "Отправить",
      ourLocation: "Наше местоположение"
    }
  },
  et: {
    translation: {
      // Feature
      featuresTitle: "Funktsioon pealkirjaga",
      titleDescription: "Vasakule joondatud pealkiri, mis selgitab neid suurepäraseid funktsioone",
      paragraphDescription: "Pealkirja all olev tekstilõik, mis selgitab pealkirja. Lisame sellele veel ühe lause ja tõenäoliselt jätkame, kuni meil saavad sõnad otsa.",
      goToFeaturesMore: "Mine funktsioonide juurde",
      featuredTitle1: "Esiletõstetud pealkiri 1",
      featuredDescription1: "Pealkirja all olev tekstilõik, mis selgitab pealkirja.",
      featuredTitle2: "Esiletõstetud pealkiri 2",
      featuredDescription2: "Pealkirja all olev tekstilõik, mis selgitab pealkirja.",
      featuredTitle3: "Esiletõstetud pealkiri 3",
      featuredDescription3: "Pealkirja all olev tekstilõik, mis selgitab pealkirja.",
      // About
      aboutTitle: "Meist",
      label1: "Silt 1",
      description1: "Oleme kirglike arendajate meeskond, kes on pühendunud suurepäraste veebirakenduste loomisele.",
      label2: "Silt 2",
      description2: "Meie missioon on pakkuda kvaliteetseid tarkvaralahendusi.",
      label3: "Silt 3",
      description3: "Me ületame oma klientide ootusi.",
      aboutMore: "Rohkem meist",
      aboutDescription: "Lisateave meie teekonna, väärtuste ja meie edu taga oleva meeskonna kohta.",
      readMore: "Loe edasi",
      // Service
      popularTopics: "Populaarsed teemad",
      passwordHelp: "Parooli abi",
      passwordHelpDescription: "Lähtestage, muutke või avage oma konto mandaadid katkematu juurdepääsu jaoks.",
      cloudConferencingSupport: "Pilvekonverentside tugi",
      cloudConferencingSupportDescription: "Hankige abi Webexi või muude virtuaalsete koosolekute seadistamisel või ajastamisel.",
      orderNewHardware: "Telli uus riistvara",
      orderNewHardwareDescription: "Uuendage oma tööriistu, tellides sülearvuteid, telefone ja palju muud hõlpsalt.",
      meetingHelp: "Koosoleku abi",
      meetingHelpDescription: "Valdage koosolekute ajastamise või meeskonna jaoks konverentsiruumide broneerimise kunsti.",
      exploreMoreTopics: "Uurige rohkem teemasid",
      announcements: "Teated",
      announcement1: "Suure võimuga (mobiilseadmete) kaasneb ka suur vastutus. Kolm asja, mida saate kohe teha, et kaitsta ennast ja Comcasti.",
      announcement2: "Teisipäeva hommikul, 13. veebruaril, viime lõpule võrgu muudatuse, mis suunab kogu veebiliikluse ümber...",
      announcement3Title: "Mitmefaktoriline autentimine (MFA) Outlook Web Accessi (OWA) jaoks",
      announcement3Description: "Mitmefaktoriline autentimine (MFA) Outlook Web Accessi (OWA) jaoks, tuntud ka kui „veebimeil”,...",
      announcement4Title: "Uued turvameetmed",
      announcement4Description: "Tehke seda, et kaitsta ennast ja oma ettevõtet.",
      seeAllAnnouncements: "Vaadake kõiki teateid ja hoiatusi",
      whatSetsUsApart: "Mis meid eristab",
      whatSetsUsApartDescription: "Ettevõttes Your Company Name oleme uhked, et pakume oma klientidele kohandatud reageerivaid, usaldusväärseid ja turvalisi tugiteenuseid. Meie kogemus tagab, et teie tehnoloogia töötab teie heaks, mitte teie vastu.",
      getInTouch: "Võta ühendust",
      // Contact
      contactUs: "Võta meiega ühendust",
      contactDescription: "Meil on hea meel teid kuulda! Täitke allolev vorm või leidke meid kaardilt.",
      name: "Nimi",
      yourName: "Teie nimi",
      email: "E-post",
      yourEmail: "Teie e-post",
      message: "Sõnum",
      yourMessage: "Teie sõnum",
      submit: "Esita",
      ourLocation: "Meie asukoht"
    }
  }
};

// Инициализация i18next с использованием ресурсов
i18next
  .use(initReactI18next) // Используем React интеграцию
  .init({
    resources,
    lng: "en", // Устанавливаем начальный язык
    fallbackLng: "en", // Язык по умолчанию, если выбранный язык не поддерживается
    interpolation: {
      escapeValue: false // Убираем экранирование для React
    }
  });

export default i18next;
