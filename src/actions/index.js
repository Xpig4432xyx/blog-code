import httpServer from '../../tools/httpServer';
import blog from './blog';
import githubToken from '../../config/githubConfig.js';


const project = {
  github: {
    baseURL: 'https://api.github.com',
    token: githubToken
  }
};


const actions = {

  types: {
    common: {
      SHOWLOADING: 'SHOWLOADING',
      HIDELOADING: 'HIDELOADING'
    }
  },

  http(pName, method, url, data) {
    return httpServer({method: method, url: url}, data, ...Object.values(project[pName])).then((res) => {
      return res;
    });
  }
};

export default Object.assign(
  actions, blog
);
