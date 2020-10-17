// pages/wxml/wxml.js
Page({
  handleIsShow(){this.setData({
    isShow:!this.data.isShow
  })},
  handleScore(){this.setData({score:this.data.score+5})},
  /**
   * 页面的初始数据
   */
  data: {
    nowTime: "",
    isShow:false,
    score:70,
    movies:['大话西游',"星际","鬼吹灯"],
    nums:[[1,4,5],[4,7,0],[45,33,22]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setInterval(() => {
    //   this.setData({
    //     nowTime: new Date().toTimeString
    //   })
    //   console.log(this.data.nowTime);
    // }, 1000)


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