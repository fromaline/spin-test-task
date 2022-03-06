import getTable from '../../utils/getTable';

const trimTrailingZeroes = (value: number) => +value.toPrecision(5) / 1e21;
const formatNum = (value: number) => value.toLocaleString().replace(',', '.');

const formatOrder = ({ price, quantity }: Order) => {
  const trimmedPrice = trimTrailingZeroes(price);
  const trimmedQuantity = trimTrailingZeroes(quantity);
  const total = (trimmedPrice * trimmedQuantity) / 1e4;

  return [
    formatNum(trimmedPrice),
    formatNum(trimmedQuantity),
    formatNum(total),
  ];
};

const getOrderTable = (
  markets: Markets,
  baseTicker: string | undefined,
  quoteTicker: string | undefined
) => {
  const askOrders = markets.ask_orders.reverse().map((order) => {
    return formatOrder(order);
  });

  const bidOrders = markets.bid_orders.map((order) => {
    return formatOrder(order);
  });

  const $table = getTable([
    [`Price (${baseTicker})`, `Size (${quoteTicker})`, 'Total'],
    ...askOrders,
    ...bidOrders,
  ]);

  return $table;
};

export default getOrderTable;
