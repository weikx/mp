import { HTTP_CONFIG } from '../config'

const tips = {
  1: '出了一些问题~',
  1000: '输入参数错误',
  1001: '输入的json格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',  
  1005: '不正确的开发者key',
  1006: '服务器内部错误',
  
}

class HTTP {
  request (params) {
    wx.request({
      url: HTTP_CONFIG.baseUrl + params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': HTTP_CONFIG.appKey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } else {
          this.httpError(res.data.error_code)
        }
      },
      fail: (err) => {
        this.httpError(1)
      }
    })
  }

  httpError (errCode) {
    if (!tips[errCode]) {
      errCode = 1
    }
    wx.showToast({
      title: tips[errCode],
      icon: 'none',
      duration: 2000
    })
  }
}


export { HTTP }