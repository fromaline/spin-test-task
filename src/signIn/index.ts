import $form from './form';

const $singIn = document.createElement('div');
$singIn.classList.add('sign-in');

const $title = document.createElement('h1');
$title.textContent = 'Connect to NEAR';

$singIn.append($title, $form);

export default $singIn;
