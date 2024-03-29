export default function requestWrap(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail:reject
    })
  })
}

// export default function requestWrap(options) {
//  return new Promise((resolve,reject)=>{
//    wx.request({
//      url: options.url,
//      method: options.method || 'get',
//      data: options.data || {},
//      success: (res) => {
//        resolve(res)
//      },
//      fail: (err) => {
//        reject(err)
//      }
//    })
//  })
// }