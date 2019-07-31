import api from './api'
/**
 * api地址
 */

// export default {
//   getUserInfo (data){
//     return api({url:'api/User/getuser',method:'post',data:data})
//   },
// }
//首页data api
export function getIndexData() {
  return api({url:'api/api/index',method:'get'})
}
