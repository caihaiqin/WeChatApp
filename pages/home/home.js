// pages/home/home.js

Page({
  handleClick(event){console.log("点击了");
  console.log(event);
//   changedTouches: [{…}]  记录变化的触摸手指信息
// currentTarget: {id: "", offsetLeft: 0, offsetTop: 22, dataset: {…}}
// detail: {x: 217.90234375, y: 41.87109375} 点击的位置坐标
// mark: {}
// mut: false
// target: {id: "", offsetLeft: 0, offsetTop: 22, dataset: {…}}  产生事件的组件的属性
// timeStamp: 4525  页面打开到事件触发的时间
// touches: [{…}]  触摸点信息 记录当前有几个手指在小程序上触摸
// type: "tap"   事件类型
// _userTap: true
// changedTouches  touches 在touchstart touchend手指变化时有区别

  
  },
  handleStart(){console.log("start");
  
  },
  handleEnd(event){console.log("end");
  console.log(event);
  
  
},
handlePress(){console.log("press");
  
},
handleLongPress(){console.log("longpress");
  
},
tabclick(event){
  console.log(event);
  console.log(event.detail.index,event.detail.title);
  
  
},
add(event){
  console.log(event);
  // 传递的数据在event detail中
  
  this.setData({count:this.data.count+event.detail.value})},

  handleEditCpn(){
    console.log("修改组件数据");
    // 修改my-select中的counter
    // selectComponent通过class 或者id拿到组件对象
    const my_select=this.selectComponent("#mysel")
    console.log(my_select);
    // 推荐通过组件内方法操作组件数据，不直接操作组件数据
    // my_select.setData({counter:my_select.data.counter+1})
    
    my_select.editCounter(5)
  },
  /**
   * 页面的初始数据
   */
  data: {
    count:0
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