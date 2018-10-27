import config from './config';

let host = window.location.host;

export default Object.assign(config, {
  HOST: 'https://'+host+'/',
  API_HOST: 'https://columbus.boohee.com/',
  qiniu_host: 'https://one.boohee.cn/',
});
