import { ObjectAny, AccountInterface } from './interfaces';
declare class Eobot {
    urlApi: string;
    private account;
    constructor(userAccount?: AccountInterface);
    setAccount(userAccount: AccountInterface): void;
    request(data: ObjectAny): Promise<any>;
    getBalances(): Promise<any>;
    getMiningMode(): Promise<any>;
    getSpeed(): Promise<any>;
    getDepositAddress(depositType: string): Promise<any>;
    getUserId(): Promise<any>;
    setMiningMode(miningMode: string): Promise<any>;
    setAutomaticWithdraw(currency: string, amount: number, walletAddress: string): Promise<any>;
    manualWithdraw(currency: string, amount: number, walletAddress: string): Promise<any>;
    buyCloudWithCryptocurrency(currencyFrom: string, amount: number, cloudType: string): Promise<any>;
    exchangeEstimate(fee: boolean, currencyFrom: string, amount: number, currencyTo: string): Promise<any>;
}
export = Eobot;
