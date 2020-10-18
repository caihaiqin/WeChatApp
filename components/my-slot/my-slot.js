// components/my-slot/my-slot.js
Component({
  pageLifetimes:{
    show(){
      console.log("组件所在页面显示");
      
    },
    hide(){
      console.log("组件所在页面隐藏");
      
    },
  },
  lifetimes:{
    created(){
      console.log("组件创建了");
      
    },
    attached(){
      console.log("组件加载了");
      
    },
    detached(){
      console.log("组件卸载了");
      
    },
    ready(){
      console.log("组件渲染了");
      
    }

  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
options:{multipleSlots:true},
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
