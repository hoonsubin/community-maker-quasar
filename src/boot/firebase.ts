import { boot } from 'quasar/wrappers';
import firebase from 'firebase';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $firebase: firebase.app.App;
  }
}

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default boot(({ app }) => {
  app.config.globalProperties.$firebaseApp = firebaseApp;
});

export { firebaseApp };
