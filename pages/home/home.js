Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "hello 小程序",
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
  handleClick() {
    this.setData({
      message: "hello Norman"
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
    console.log("页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏")
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