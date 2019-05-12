import { IConnector, IConnectorOptions } from './IConnector';
import Service from '../Service';

export class BaseConnector implements IConnector {
  public options: IConnectorOptions;
  public _successCallback?: Function;
  public _errorCallback?: Function;
  public service: Service;

  constructor(
    options: IConnectorOptions,
    success?: Function,
    fail?: Function
  ) {
    this.options = options;
    this.service = new Service();
    this._successCallback = success;
    this._errorCallback = fail;

    this.onSubmit = this.onSubmit.bind(this);
  }

  public onSubmit(formTemplateState: Object) {
    // Configure request data with form state
    this.options.data['formData'] = formTemplateState;

    // Make AJAX call and run callbacks if they exist
    this.service.request(
      this.options,
      (response: any) => {
        if (this._successCallback) {
          this._successCallback(response);
        }
      },
      (errResponse: any) => {
        if (this._errorCallback) {
          this._errorCallback(errResponse);
        }
      }
    );
  }
}

export class ConnectorOptions implements IConnectorOptions {
  public url: string;
  public method: string;
  public data: Object;
  constructor(url: string, method?: string, data?: Object) {
    this.url = url;
    this.method = method || 'get';
    this.data = data || {};
  }
}