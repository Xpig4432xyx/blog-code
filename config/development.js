import config from './config';

let host = '';

export default Object.assign(config, {
  HOST: 'https://'+host+'/',
  API_HOST: '/',
  qiniu_host: 'http://qa.boohee.cn/',
});
