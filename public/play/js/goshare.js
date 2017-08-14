var signPackage = {};
$.ajax({
    async: false,
    type: "get",
    url: "http://m.sh.189.cn/wap/wx/getJsSign?url=" + encodeURIComponent(location.href),
    dataType: "json",
    cache: false,
    success: function (data) {
        if (data.status == 200) {
            signPackage = data.data;
        }
    }
});

var shareTitle = "超值、不限流量、99元低价、免费共享";
var shareUrl = "http://app.sh.189.cn/express/public/play/images/share-fly.png";
var shareLink = 'http://app.sh.189.cn/express/t/dxzq';
var raiseDesc = "放胆享，放心玩，无限流量~99元超值套餐为你而来！";

wx.config({
    debug: false,
    appId: signPackage.appid,
    timestamp: signPackage.timestamp,
    nonceStr: signPackage.noncestr,
    signature: signPackage.signature,
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
    ]
});

wx.ready(function () {
    wx.showOptionMenu();//开启
    // 初始化wx对象
    WeixinApi.ready(wx);
    // 微信分享的数据
    var wxData = {
        "imgUrl": shareUrl,// 分享图标
        "link": shareLink, //分享链接
        "desc": raiseDesc, //分享描述
        "title": shareTitle // 分享标题
    };
    // 分享的回调函数
    var wxCallbacks = {
        success: function () {
            window.location.href = 'http://fx.sh.189.cn/mininet/wap/dxzq/detail/3493/00.html?jobNumber=20237&m_id=&';
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            //alert("cancel");
        },
        fail: function () {
            //接口调用失败时执行的回调函数
        },
        complete: function () {
            // 接口调用完成时执行的回调函数，无论成功或失败都会执行。
        },
        trigger: function () {
            //监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
        }
    };

    // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    WeixinApi.shareToFriend(wxData, wxCallbacks);

    // 点击分享到朋友圈，会执行下面这个代码
    WeixinApi.shareToTimeline(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    WeixinApi.shareToWeibo(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    WeixinApi.shareToWeibo(wxData, wxCallbacks);

    //点击分享到QQ，会执行下面这个代码
    WeixinApi.shareToQQ(wxData, wxCallbacks);

});
