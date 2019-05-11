import * as $ from 'jquery';
import { IConnectorOptions } from './Connector/IConnector';
import { ConnectorOptions } from './Connector/BaseConnector';

namespace Ajax {
  export class Service {
    public request = (
      options: IConnectorOptions,
      successCallback: Function,
      errorCallback?: Function
    ): any => {
      return $.ajax({
        url: options.url,
        type: options.method,
        data: JSON.stringify(options.data),
        contentType: "application/json",
        dataType: 'json',
        cache: false,
        success: (d: any) => {
          successCallback(d);
        },
        error: (d: any) => {
          if (errorCallback) {
            errorCallback(d);
            return;
          }
          var errorTitle = 'Error in (' + options.url + ')';
          var fullError = JSON.stringify(d);
          console.log(errorTitle);
          console.log(fullError);
        }
      });
    };
    public get = (
      url: string,
      successCallback: Function,
      errorCallback?: Function
    ): void => {
      this.request(new ConnectorOptions(url), successCallback, errorCallback);
    };
    public getWithDataInput = (
      url: string,
      data: Object,
      successCallback: Function,
      errorCallback?: Function
    ): void => {
      this.request(
        new ConnectorOptions(url, 'get', data),
        successCallback,
        errorCallback
      );
    };
    public post = (
      url: string,
      successCallback: Function,
      errorCallback?: Function
    ): void => {
      this.request(
        new ConnectorOptions(url, 'post'),
        successCallback,
        errorCallback
      );
    };
    public postWithData = (
      url: string,
      data: Object,
      successCallback: Function,
      errorCallback?: Function
    ): void => {
      this.request(
        new ConnectorOptions(url, 'post', data),
        successCallback,
        errorCallback
      );
    };

    public showJqueryDialog = (message: string, title?: string): void => {
      alert(title + '\n' + message);
    };
  }
}

export default Ajax;