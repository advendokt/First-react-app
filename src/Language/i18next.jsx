// src/Language/i18next.jsx
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Пример для i18next.js
const resources = {
    en: {
        translation: {
          //Feature

          //about
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
          //Topic

          //Anontcments

          //Contact
        }
    },
    ru: {
        translation: {
          //Feature

          //about
            aboutTitle: "О нас",
            label1: "Метка 1",
            description1: "Мы — команда увлечённых разработчиков, создающих потрясающие веб-приложения.",
            label2: "Метка 2",
            description2: "Наша цель — предоставить высококачественные решения для наших клиентов.",
            label3: "Метка 3",
            description3: "Мы превзойдём ожидания наших клиентов.",
            aboutMore: "Подробнее",
            aboutDescription: "Узнайте больше о нашем пути, ценностях и команде, стоящей за нашим успехом.",
            readMore: "Читать далее",
          //Topic

          //Anontcments

          //Contact
        }
    },
    et: {
        translation: {
          //Feature

          //about
            aboutTitle: "Meist",
            label1: "Märgis 1",
            description1: "Me oleme kirglik arendajate meeskond, kes on pühendunud hämmastavate veebirakenduste loomisele.",
            label2: "Märgis 2",
            description2: "Meie missioon on pakkuda kvaliteetseid tarkvaralahendusi.",
            label3: "Märgis 3",
            description3: "Me ületame oma klientide ootused.",
            aboutMore: "Loe lähemalt",
            aboutDescription: "Uuri lähemalt meie teekonda, väärtusi ja meeskonda, kes on meie edu taga.",
            readMore: "Loe rohkem",
          //Topic

          //Anontcments

          //Contact
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
