// pages/home/home.js
// 导入封装的网络请求接口
import request from '../../service/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// 使用原生发送网络请求
wx.request({
  url: 'http://127.0.0.1:3000/pipeline/getNums',
  success:(res)=>{
    console.log(res);
  }
}),
// post請求 攜帶參數
wx.request({
  url: 'http://127.0.0.1:3000/candidate/getCandidateByPipeline',
  method:"POST",
  data:{
    pipeline:"推荐"
  },
  success:(res)=>{
    console.log(res);
  }
})
// 使用封装的request发送网请求
request({url: 'http://127.0.0.1:3000/pipeline/getNums'}).then(res=>{
  console.log(res);
  
}).catch(err=>{
  console.log(err);
  
})

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