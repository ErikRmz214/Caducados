import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Open Scanner": "Open Scanner",
          "Scan History": "Scan History",
          "Product Expiration Dates": "Product Expiration Dates",
          "Expires on": "Expires on",
          "Scan Successful!": "Scan Successful!",
        }
      },
      es: {
        translation: {
          "Open Scanner": "Abrir Escáner",
          "Scan History": "Historial de Escaneos",
          "Product Expiration Dates": "Fechas de Caducidad de Productos",
          "Expires on": "Expira el",
          "Scan Successful!": "Escaneo Exitoso!",
        }
      }
    },
    lng: "es", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
