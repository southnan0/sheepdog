// pages/index/index.js
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
let qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    address:''
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
    this.getLocation();
    qqmapsdk = new QQMapWX({
      key: 'I5ZBZ-OFVH2-N22UL-CYDDM-GFEVJ-M5B3K'
    });
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

  },
  handleChangeCount: function ({detail}){
    this.setData({ count: detail.value})
  },
  getLocation(){
    const location = {};
    wx.getLocation({
      success:(res)=> {
        location.latitude = res.latitude;
        location.longitude = res.longitude;
        qqmapsdk.reverseGeocoder({
          location,
          success:(response)=>{
            if(response.status === 0){
              this.setData({
                address: response.result.address
              })
            }
          }
        })
      
      },
    })
  }
})