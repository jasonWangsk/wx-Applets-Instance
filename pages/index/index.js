Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[
      {pic:"/images/cont-p/a.jpg", tit:"",des:"",url:"/pages/show1/show1"},
      {pic:"/images/cont-p/b.jpg", tit:"",des:"",url:""},
      {pic:"/images/cont-p/c.jpg", tit:"",des:"",url:""},
      {pic:"/images/cont-p/d.jpg", tit:"",des:"",url:""},
      {pic:"/images/cont-p/e.jpeg", tit:"",des:"",url:""},
      {pic:"/images/cont-p/f.jpg", tit:"UI设计作品",des:"UI DESIGN WORKS",url:""}
    ],
    datalist2:[
    {pic:"/images/cont-p/11.jpg",biaoti:"大自然对呼吸",zuozhe:"老王",shijian:""},
    {pic:"/images/cont-p/22.jpeg",biaoti:"大海对味道",zuozhe:"老王",shijian:""},
    {pic:"/images/cont-p/33.jpeg",biaoti:"一站式",zuozhe:"老王",shijian:""},
    {pic:"/images/cont-p/44.jpeg",biaoti:"未来科技",zuozhe:"老王",shijian:""},
  ],
  },
// 获取 首页动态数据列表
getIdexdata:function(){
  // 请求接口  时间戳转换
  wx.request({
    url: 'https://ku.qingnian8.com/school/list.php',
    data:{num:4},
    success:res=>{
      res.data.forEach(item => {
        var time=item.posttime*1000
        var d=new Date(time)
        var year=d.getFullYear()
        var month = d.getMonth() + 1
        var day=d.getDate()
        var times=year +"-"+month+"-"+day
        item.posttime=times
      });

    this.setData({
      datalist2:res.data
    })
      console.log(res)
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIdexdata()
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