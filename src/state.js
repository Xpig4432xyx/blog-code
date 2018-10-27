import Util from 'utils';
import cookie from 'js-cookie';


const getToken = () => {
  let token;
  if (process.env.NODE_ENV == 'development') {
    token = Util.getQueryString('token') || cookie.get('token') || '0b81ffd758ea4a33e7724d9c67efbb26';
  } else {
    token = Util.getQueryString('token') || cookie.get('token');
  }
  if (token) {
    cookie.remove('token');
    cookie.set('token', token);
  }

  return token;
};

export default {
  token: getToken()
};
