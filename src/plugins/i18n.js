import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    name: 'Name',
    surname: 'Surname',
    email: 'E-mail',
    password: 'Password',
    repassword: 'Repassword',
    phoneNumber: 'Phone number',
    phoneBook: 'Phone book',
    addContact: 'Add contact',
  },
  tr: {
    login: 'Giriş yap',
    register: 'Kayıt ol',
    logout: 'Çıkış yap',
    name: 'Ad',
    surname: 'Soyad',
    email: 'E-posta',
    password: 'Parola',
    repassword: 'Yeniden parola',
    phoneNumber: 'Telefon numarası',
    phoneBook: 'Telefon rehberi',
    addContact: 'Add contact',
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;
