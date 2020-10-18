// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      // mask:true,
      duration:3000,
      icon:"loading"
      
    })

  },
  handleShowModel(){
    wx.showModal({
      title:"你好",
      content:"内容",
      // showCancel:false,
      cancelText:"返回",
      success:(res)=>{
        console.log(res);
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
        
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'loading',
    }),
    // 必须手动调用hideLoading才会消失
    setTimeout(()=>{wx.hideLoading({
      success: (res) => {},
    })},1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ["相册","拍照"],
      success:(res)=>{
        console.log(res);
        // tapIndex用户点击了哪个选项
        
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})