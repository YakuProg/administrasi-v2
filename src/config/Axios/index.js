import axios from 'axios';

const fetchAPI = async (url, method, data, headers = false, addPath = '') => {
  // const config = {
  //   method,
  //   url,
  //   headers,
  //   data,
  // };
  
  // return await axios(config)
  // .then(function (response) {
  //   const statusHeader = response.status
  //   const { data } = response.data
  //   return {
  //     statusHeader,
  //     data,
  //   };
  // })
  // .catch(function (error) {
  //   return error;
  // });

  let headerCustom = {
    'Content-Type': 'application/json'
  }

  if (headers) {
    headerCustom = {
      ...headerCustom,
      ...headers,
    }
  }
  
  if (method === 'get') {
    return axiosGet(url, data, headerCustom, addPath);
  } else if (method === 'post') {
    return axiosPost(url, data, headerCustom, addPath);
  }
};

const axiosGet = async (url, data, headers, addPath) => {
  let addURL = url;
  if (!!addPath) {
    addURL = `${url}/${addPath}`; 
  }

  return await axios.get(addURL, data, {
    headers
  }).then(function (response) {
    const statusHeader = response.status
    const { data } = response.data
    return {
      statusHeader,
      data,
    };
  })
  .catch(function (error) {
    if (error?.response?.status) {
      const statusHeader = error.response.status;
      const data = error.response.data.message;
      return {
        statusHeader,
        data,
      };
    }
    // console.log(error);
    return error;
  });  
}

const axiosPost = async (url, data, headers, addPath) => {
  let addURL = url;
  if (!!addPath) {
    addURL = `${url}/${addPath}`; 
  }

  return await axios.post(addURL, data, {
    headers
  }).then(function (response) {
    const statusHeader = response.status
    const { data } = response.data
    return {
      statusHeader,
      data,
    };
  })
  .catch(function (error) {
    if (error?.response?.status) {
      const statusHeader = error.response.status;
      const data = error.response.data.message;
      return {
        statusHeader,
        data,
      };
    }
    // console.log(error);
    return error;
  })
}

export default fetchAPI;
