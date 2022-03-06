interface Ticker {
  id: number;
  base: {
    ticker: string;
    decimal: number;
    address: string;
  };
  quote: {
    ticker: string;
    decimal: number;
    address: string;
  };
  fee: number;
}

interface Order {
  price: number;
  quantity: number;
}

interface Markets {
  ask_orders: Order[];
  bid_orders: Order[];
}

interface CustomContract {
  markets: (emptyObj: Record<string, never>) => Ticker[];
  view_market: ({ market_id: number }) => Markets;
}

interface Window {
  walletAccount: import('near-api-js').WalletAccount;
  nearConfig: import('near-api-js').NearConfig;
  near: import('near-api-js').Near;
  contract: CustomContract;
  accountId: string;
  nearInitPromise: Promise<void>;
  nearAmount: string;
}
