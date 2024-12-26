import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import ru from './ru';
import et from './et';

const resources = {
  en: en,
  ru: ru,
  et: et,
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Устанавливаем язык по умолчанию
    interpolation: {
      escapeValue: false, // React уже обрабатывает экранирование
    },
  });

export default i18next;
