import config from './config';

let host = window.location.host;

export default Object.assign(config, {
  HOST: 'https://'+host+'/',
  API_HOST: 'https://columbus.iboohee.cn/',
  qiniu_host: 'http://qa.boohee.cn/',
});
