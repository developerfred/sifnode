type TxEventBase<T> = {
  txHash: string;
  payload: T;
};

export type TxEventConfCountChanged = {
  type: "ConfCountChanged";
} & TxEventBase<number>;

export type TxEventEthTxInitiated = {
  type: "EthTxInitiated";
} & TxEventBase<any>;

export type TxEventEthTxConfirmed = {
  type: "EthTxConfirmed";
} & TxEventBase<any>;

export type TxEventSifTxInitiated = {
  type: "SifTxInitiated";
} & TxEventBase<any>;

export type TxEventSifTxConfirmed = {
  type: "SifTxConfirmed";
} & TxEventBase<any>;

export type TxEvent =
  | TxEventConfCountChanged
  | TxEventEthTxInitiated
  | TxEventEthTxConfirmed
  | TxEventSifTxInitiated
  | TxEventSifTxConfirmed;
