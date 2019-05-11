export interface IConnectorOptions {
    url: string;
    method: string;
    data: any;
}

interface onSubmit {
    (senderState: Object, onSuccess?: Function, onFail?: Function): void;
}

export interface IConnector {
    onSubmit: (senderState: Object, onSuccess?: Function, onFail?: Function) => void;
}