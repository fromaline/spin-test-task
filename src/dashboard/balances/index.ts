import getTable from '../../utils/getTable';

const $balances = document.createElement('div');
$balances.classList.add('balances');

const $title = document.createElement('h4');
$title.textContent = 'Balances';

$balances.append($title);

$balances.addEventListener('mounted', () => {
  const $table = getTable([
    ['Asset', 'Wallet'],
    ['NEAR', window.nearAmount],
  ]);

  $balances.append($table);
});

export default $balances;
