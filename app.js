// 注册小程序
App({
// 生命周期函数，小程序会在后台存活2个小时
// 一般可能做的事情：1 判断小程序的进入场景（下拉打开 发现里面小程序打开 扫描或其他人分享打开） 如何确定场景？
// options参数里scene值代表进入场景
// 2 监听生命周期函数
// 3 定义全局共享数据
globalData:{
  name:"cai"
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化完成");
    // 获取用户信息
    // 1 getUserInfo
    // 2 button type= getUserInfo
    wx.getUserInfo({
      success: res=>{console.log(res);
      },
    })
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow 多次触发
   */
  onShow: function (options) {
    console.log("界面显示");
    console.log(options.scene);//打印进入场景值
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序隐藏了");
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
