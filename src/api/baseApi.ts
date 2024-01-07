import type { AxiosRequestConfig } from "axios";

import instanceAPI from "./index";

type IAxiosParams = {
  url?: string;
  options?: AxiosRequestConfig;
  body?: unknown;
};
export class baseAPI {
  private instanceAPI = instanceAPI;

  reSettingURL(url: string) {
    this.instanceAPI.defaults.baseURL = url;
  }

  addHeaders(headers: object) {
    return {
      ...this.instanceAPI.defaults.headers,
      ...headers,
    } as AxiosRequestConfig["headers"];
  }
  async get({ url = "/", options = {} }: IAxiosParams) {
    try {
      const data = await instanceAPI.get(url, {
        ...options,
        headers: options.headers && this.addHeaders(options.headers),
      });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async post({ url = "/", options = {}, body = {} }: IAxiosParams) {
    try {
      const data = await instanceAPI.post(url, body, {
        ...options,
        headers: options.headers && this.addHeaders(options.headers),
      });
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
}
