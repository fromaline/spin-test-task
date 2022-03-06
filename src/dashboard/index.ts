import $balances from './balances';
import $header from './header';
import $orderBook from './orderBook';

const $dashboard = document.createElement('div');
$dashboard.classList.add('dashboard', 'container');

const $layout = document.createElement('div');
$layout.classList.add('dashboard__layout');

$layout.append($orderBook, $balances);

$dashboard.append($header, $layout);

$dashboard.addEventListener('mounted', () => {
  $header.dispatchEvent(new Event('mounted'));
  $balances.dispatchEvent(new Event('mounted'));
  $orderBook.dispatchEvent(new Event('mounted'));
});

export default $dashboard;
