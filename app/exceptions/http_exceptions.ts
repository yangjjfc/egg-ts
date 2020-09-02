// 继承修改 error 类型
export default class HttpExceptions extends Error {
  code: number;
  msg: string;
  httpCode: number;

  constructor({ msg = '服务器异常', code = 1, httpCode = 400 }) {
    super();
    this.msg = msg;
    this.code = code;
    this.httpCode = httpCode;
  }
}

