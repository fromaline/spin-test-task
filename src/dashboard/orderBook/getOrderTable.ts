import { NEAR_NOMINATION_EXP } from 'near-api-js/lib/utils/format';
import getTable from '../../utils/getTable';

const exponentialToReadable = (value: number) =>
  value / 10 ** NEAR_NOMINATION_EXP;

const toFloat = (num: number, fractionDigits = 4) =>
  parseFloat(num.toString()).toFixed(fractionDigits);

const formatOrder = ({ price, quantity }: Order) => {
  const readablePrice = exponentialToReadable(price);
  const readableQuantity = exponentialToReadable(quantity);
  const total = readablePrice * readableQuantity;

  return [toFloat(readablePrice), toFloat(readableQuantity), toFloat(total, 2)];
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
