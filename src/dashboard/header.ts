const $header = document.createElement('header');
$header.classList.add('header');

const $button = document.createElement('button');
$button.classList.add('btn', 'btn--sm', 'btn--tertiary');
$button.textContent = 'Sign Out';
$button.addEventListener('click', () => {
  window.walletAccount.signOut();
  window.location.replace(window.location.origin + window.location.pathname);
});

$header.append($button);

$header.addEventListener('mounted', () => {
  const $p = document.createElement('p');
  $p.textContent = window.accountId;

  $header.prepend($p);
});

export default $header;
