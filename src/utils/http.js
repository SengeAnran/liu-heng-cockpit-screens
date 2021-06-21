import axios from 'axios';

const API_ROOT_CITY = '/api';

const HEARD_PARAMS_BASE = {
  'Content-Type': 'application/json;charset=UTF-8',
};

class MetroApi {
  constructor({ myType = 0, method = 'get', url = '', data } = {}) {
    let baseURL = API_ROOT_CITY;
    let headers = HEARD_PARAMS_BASE;
    if (myType === 0) {
      baseURL = API_ROOT_CITY;
      headers = HEARD_PARAMS_BASE;
    }
    this.method = method;
    this.myType = myType;
    this.url = url;
    this.data = data || {};
    this.source = axios.CancelToken.source();
    this.axios = axios.create({
      method: this.method,
      baseURL: baseURL,
      headers: headers,
      url: this.url,
      timeout: 30000,
    });
  }

  request(data) {
    if (data) {
      this.data = data;
    }
    const opt = { data: this.data, method: this.method, url: this.url, cancelToken: this.source.token };
    if (this.method === 'get') {
      opt.params = this.data;
    }
    return this.axios.request(opt).then((res) => {
      return MetroApi.httpHelps(res, this.url, this.myType);
    }).catch((thrown) => MetroApi.catchHandler(thrown, this.url));
  }

  static catchHandler(thrown, url = '') {
    if (axios.isCancel(thrown)) {
      console.log(`【--请求中止--】:${url}`, thrown.message);
    } else if (JSON.stringify(thrown.message).includes('timeout')) {
      console.log(`【--请求超时--】:${url}`, thrown.message);
    } else {
      // 其他错误
      console.log(`【--接口报错--】:${url}`, thrown);
    }
  }

  static httpHelps(res, url = '', myType) {
    if (res) {
      if (myType === 0) {
        if (res.data && res.data.data) {
          return res.data.data;
        }
        return res.data || res;
      }
    } else {
      return null;
    }
  }

  requestCancel(param = '') {
    this.source.cancel(`【${param}】`);
    this.source = axios.CancelToken.source();
  }

  dispose() {
    this.method = null;
    this.url = null;
    this.data = null;
    this.mixedQuery = null;
    this.source = null;
    this.axios = null;
  }
}

export default MetroApi;
