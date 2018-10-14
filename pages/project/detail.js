// pages/project/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classPrefix: 'project-detail',
        hotelList: [{
            url: 'http://n.sinaimg.cn/finance/transform/20160407/h3nM-fxrcizu3728929.jpg',
            title: '热带殿堂温泉 · 四房别墅',
            price1: '1999',
            price2: '1000',
            description: '入湖温泉，烧烤，KTV，游戏机，园区配套',
            type: 1,
            children: [{
                title: '四房别墅·纯住',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 1
            },{
                title: '四房别墅+五人份早餐+迪士尼门票等等标题很长',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 0
            }]
        },{
            url: 'http://n.sinaimg.cn/finance/transform/20160407/h3nM-fxrcizu3728929.jpg',
            title: '热带殿堂温泉 · 四房别墅1',
            price1: '1999',
            price2: '1000',
            description: '入湖温泉，烧烤，KTV，游戏机，园区配套',
            type: 1,
            children: [{
                title: '四房别墅·纯住',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 1
            },{
                title: '四房别墅+五人份早餐+迪士尼门票等等标题很长',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 0
            }]
        },{
            url: 'http://n.sinaimg.cn/finance/transform/20160407/h3nM-fxrcizu3728929.jpg',
            title: '热带殿堂温泉 · 四房别墅2',
            price1: '1999',
            price2: '1000',
            description: '入湖温泉，烧烤，KTV，游戏机，园区配套',
            type: 1,
            children: [{
                title: '四房别墅·纯住',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 1
            },{
                title: '四房别墅+五人份早餐+迪士尼门票等等标题很长',
                price1: '1999',
                price2: '999',
                type: 1,
                store: 0
            }]
        }]
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
