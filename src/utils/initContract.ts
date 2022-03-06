import * as nearAPI from 'near-api-js';
import { formatNearAmount } from 'near-api-js/lib/utils/format';

import nearConfig from '../constants/config';

const initContract = async () => {
  const near = await nearAPI.connect({
    deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() },
    ...nearConfig,
  });
  const walletAccount = new nearAPI.WalletAccount(near, null);
  const accountId = walletAccount.getAccountId();

  if (accountId) {
    const account = await near.account(accountId);
    const nearAmount = formatNearAmount(
      await (
        await account.getAccountBalance()
      ).total,
      3
    );

    window.nearAmount = nearAmount;

    const contract = new nearAPI.Contract(account, 'app_2.spin_swap.testnet', {
      viewMethods: ['markets', 'view_market'],
      changeMethods: [],
    });

    window.contract = contract as any as CustomContract;
  }

  window.near = near;
  window.walletAccount = walletAccount;
  window.accountId = accountId;
};

export default initContract;
