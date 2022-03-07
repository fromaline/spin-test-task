import nearConfig from '../constants/config';

const $form = document.createElement('form');
$form.classList.add('form');

// #region sign in button
const $button = document.createElement('button');
$button.setAttribute('type', 'submit');
$button.classList.add('btn');
$button.textContent = 'Sign In';

$form.append($button);
// #endregion

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  window.walletAccount.requestSignIn(
    nearConfig.contractName,
    'Account Balance'
  );
});

export default $form;
