import getOrderTable from './getOrderTable';
import getSelect from './getSelect';

const $orderBook = document.createElement('div');
$orderBook.classList.add('order-book');

const $title = document.createElement('h4');
$title.textContent = 'Order Book';

$orderBook.append($title);

$orderBook.addEventListener('mounted', async () => {
  const tickers = await window.contract.markets({});

  const $select = getSelect(tickers);

  let markets = await window.contract.view_market({
    market_id: tickers[0].id,
  });

  let $orderTable = getOrderTable(
    markets,
    tickers[0].base.ticker,
    tickers[0].quote.ticker
  );

  const $tableWrapper = document.createElement('div');
  $tableWrapper.classList.add('table-wrapper');

  $tableWrapper.append($orderTable);

  $orderBook.append($select, $tableWrapper);

  $select.addEventListener('change', async (e) => {
    const $target = e.target as HTMLSelectElement;
    const id = +$target.value;

    markets = await window.contract.view_market({
      market_id: id,
    });

    const selectedTicker = tickers.find((ticker) => ticker.id === id);

    $orderTable.remove();

    $orderTable = getOrderTable(
      markets,
      selectedTicker?.base.ticker,
      selectedTicker?.quote.ticker
    );

    $tableWrapper.appendChild($orderTable);
  });
});

export default $orderBook;
