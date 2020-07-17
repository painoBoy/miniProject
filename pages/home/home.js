const util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:util.formatTime(new Date()) ,
    intelval:null,
    marks:[
    
    ],
    avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu9ie2NqA2m48LZgfy09f0jFgW1wRr1MU1TfJsho=s32-c-mo",
    message: "小程序",
    list: [{
        name: "提莫",
        job: "上单"
      },
      {
        name: "艾瑞莉娅",
        job: "上单"
      },
      {
        name: "李青",
        job: "打野"
      },
      {
        name: "厄斐琉斯",
        job: "ADC"
      }
    ]
  },
  error(e) {
    console.log(e.detail)
  },
  handleClick() {
    wx.getSetting({
      withSubscriptions: true,
      success:res => {
        //判断用户是否授权
        if(res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res =>{
              this.setData({
                message : res.userInfo.nickName,
                avatar:res.userInfo.avatarUrl    
              })
            }
          })
        }
      }
    })
  
  },
  handleLogTap() {
    console.log(this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getCurrentPages());
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
    this.setData({
      date:util.formatTime(new Date()) 
    })
    this.data.intelval = setInterval(()=>{
      console.log("计时器");
      this.setData({
        date:util.formatTime(new Date())
      })
    },1000)
    console.log("页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏")
    if (!!this.data.intelval)clearInterval(this.data.intelval); 
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉");
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
    console.log("分享");
  }
})