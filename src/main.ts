import $dashboard from './dashboard';
import $singIn from './signIn';
import initContract from './utils/initContract';

const app = document.querySelector('#root');

window.nearInitPromise = initContract()
  .then(() => {
    const isSignedIn = window.walletAccount.isSignedIn();

    if (isSignedIn) {
      app?.append($dashboard);
      $dashboard.dispatchEvent(new Event('mounted'));
    } else {
      app?.append($singIn);
    }
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
