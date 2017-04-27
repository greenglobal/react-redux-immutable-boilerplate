import reduxApi, {transformers} from 'redux-api';
import customFetch from 'api/axios';

// Example
export default reduxApi({
  categories: {
    url: 'http://localhost:8888/categories',
    options:(url, params, getState) => {
      return {
        method: "GET",
        headers: {},
        data: {}
      };
    }
  }
}).use('fetch', customFetch);
