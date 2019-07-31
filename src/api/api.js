// import axios from 'axios'
import baseUrl from './baseUrl'

export default function api(param) {
  let option ={
    method: 'get'
  }
  Object.assign(option,param)

  switch (option.method) {
    case 'post':
      return PostRequest(option.url,option.data);
      break;
    case 'get':
      return getRequest (option);
      break;
    default: return postRequest(option.url,option.data)
  }
}
function  postRequest (url, data) {
    return axios({
      method: 'post',
      url: `${baseUrl}${url}`,
      params: data,
      transformRequest: [function (data) {
        let ret = '?'
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res=>res.data)
  }

function PostRequest (url, datas) {
    return axios({
      method: 'post',
      url: `${baseUrl}${url}`,
      params: datas
    })
}

function uploadFileRequest (url, datas) {
    return axios({
      method: 'post',
      url: `${baseUrl}${url}`,
      params: datas,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=converge'
      }
    })
  }

  //function putRequest (url, params) {
  //   return axios({
  //     method: 'put',
  //     url: `${url}`,
  //     data: params,
  //     transformRequest: [function (data) {
  //       let ret = ''
  //       for (let it in data) {
  //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  //       }
  //       return ret
  //     }],
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   })
  // }

  //function deleteRequest (url) {
  //   return axios({
  //     method: 'delete',
  //     url: `${url}`
  //   })
  // }

function getRequest (option) {
    if (option.data){
      console.log(option.data)
      return axios({
        url:option.url,
        params: option.data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }else {
      return axios({
        url: option.url,
        data: option.data
      })
    }

}

