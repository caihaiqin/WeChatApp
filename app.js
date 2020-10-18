const TOKEN='token'
App({
globalData:{
  token:""
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 先从storage中取token
    const token=wx.getStorageSync(TOKEN)
    // 判断是否有token
    if(token&&token.length!==0){
      console.log("已经登录");
      // 验证token是否过期
this.checkToken(token)
    }else{
// 使用wx.login获取code
this.login()
    }
    
  },
  // 验证token是否过期
  checkToken(token){
    console.log("验证token");
    
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:"POST",
      header:{token:token},
      success:(res)=>{
        console.log(res);
        
        if(!res.data.errCode){
          // token有效
          console.log("token有效");
          
          this.globalData.token=token
          wx.setStorageSync('token', token)
        } 
      },
      fail:(err)=>{
        console.log(err);
        
      }

    })

  },
  // 登录操作
login(){
  wx.login({
    success:(res)=>{
      console.log(res);
      // code只有5分钟有效期
      // 获取code
      const code=res.code
      // 将code发送到服务器 得到服务器返回的自定义登录态（如token)
      wx.request({
        url: 'http://123.207.32.32:3000/login',
        method:"POST",
        data:{code:code},
        success:(res)=>{
          console.log(res);
          const token=res.data.token;
          this.globalData.token=token;
          console.log(this.globalData.token);
          // 將token存儲到本地
          wx.setStorageSync(TOKEN, token)
          
          
        }
      })
    }
  })
},
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
