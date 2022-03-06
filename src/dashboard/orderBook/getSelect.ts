const getSelect = (tickers: Ticker[]): HTMLSelectElement => {
  const $select = document.createElement('select');

  tickers.forEach(({ id, base, quote }, index) => {
    const $option = document.createElement('option');

    $option.textContent = `${base.ticker}/${quote.ticker}`;
    $option.value = id.toString();

    if (index === 0) {
      $option.setAttribute('selected', 'true');
    }

    $select.append($option);
  });

  return $select;
};

export default getSelect;
