import httpServer from '../../tools/httpServer';
import cookie from "js-cookie";
import config from 'config';



const project = {
  columbus:{
    baseURL: config.API_HOST,
    token: () => { return cookie.get('token') }
  }
};


const actions = {
  http(pName, method, url, data) {
    return httpServer({method: method, url: url}, data, ...Object.values(project[pName])).then((res) => {
      return res;
    });
  }
};

export default Object.assign(
  actions
);
