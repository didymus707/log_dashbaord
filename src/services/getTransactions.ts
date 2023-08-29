import { client, transactionUrl } from "./client";

export const getTransactions = () => {
  return client(``, {
    url: transactionUrl("/api/services/app/Transaction/GetAll"),
  });
};
console.log(getTransactions());
