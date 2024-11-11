type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Headers = Record<string, string>;
type Body = any;

type Options = {
  method: HttpMethod;
  headers?: Headers;
  body?: Body;
};

export class RestClient {
  readonly baseURL: string;
  defaultHeaders: {};
  defaultOptions: {};

  constructor(
    baseURL: string,
    defaultHeaders: Headers = {},
    defaultOptions: {} = {}
  ) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
    this.defaultOptions = defaultOptions;
  }

  async get(endpoint: string) {
    return this.request(endpoint, "GET");
  }

  async post(endpoint: string, body: any) {
    return this.request(endpoint, "POST", body);
  }

  async patch(endpoint: string, body: any) {
    return this.request(endpoint, "PATCH", body);
  }

  async put(endpoint: string, body: any) {
    return this.request(endpoint, "PUT", body);
  }

  async delete(endpoint: string) {
    return this.request(endpoint, "DELETE");
  }

  private async request(
    endpoint: string,
    method: HttpMethod = "GET",
    body?: any,
    headers?: Headers
  ) {
    const url = `${this.baseURL}${endpoint}`;
    const options = this.createOptions(method, body, headers);

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Response was not OK. Status: ${response.status} ${response.statusText}`
      );
    }

    if (response.status === 200 || response.status === 201) {
      const data = await response.json();

      return data;
    }
  }

  private createOptions(method: HttpMethod, body: any, headers?: Headers) {
    const options: Options = {
      ...this.defaultOptions,
      method,
      headers: this.defaultHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (headers) {
      options.headers = { ...options.headers, ...headers };
    }

    return options;
  }
}
