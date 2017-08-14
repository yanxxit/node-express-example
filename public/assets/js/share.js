var signPackage = {};
$.ajax({
    async: false,
    type: "get",
    url: "http://m.sh.189.cn/wap/wx/getJsSign?url=" + encodeURIComponent(location.href),
    dataType: "json",
    cache: false,
    success: function (msg) {
        if (msg.status == 200) {
            signPackage = msg.data;
        }
        console.log(signPackage);
    }
});

wx.config({
    debug: false,
    appId: signPackage.appid,
    timestamp: signPackage.timestamp,
    nonceStr: signPackage.noncestr,
    signature: signPackage.signature,
    jsApiList: [
        'checkJsApi',
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'hideMenuItems',
        'showMenuItems'
    ]
});

var openid = window.sessionStorage.getItem('openid');
var supporter = '';
var shareTitle = "点赞欧洲杯，豪礼等你领！";
var shareUrl = "http://app.sh.189.cn/EuropeanCup/public/img/share.jpg";
var shareLink = 'http://wapsh.189.cn/NOS/appIOS/goEurocup.htm?open_id=' + openid + '&supporter=' + supporter;
var raiseDesc = "帮喜爱的球队发福利，200M流量、200M宽带加速任性发放，一起为欧洲杯加油~";

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
        //var supporter = window.sessionStorage.getItem('supporter');
        //$.ajax({
        //    url: "/EuropeanCup/AddShareLog",
        //    type: 'post',
        //    data: {supporter: supporter},
        //    dataType: "json",
        //    success: function (data) {
        //        console.log(JSON.data);
        //        //wx.closeWindow(); //可以使用
        //        window.location.href = 'http://app.sh.189.cn/EuropeanCup/index';
        //    }
        //});
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

wx.ready(function () {
    wx.hideMenuItems({
        menuList: [
            "menuItem:share:appMessage",
            'menuItem:share:timeline',
            'menuItem:share:qq',
            'menuItem:share:weiboApp',
            'menuItem:share:facebook',
            'menuItem:share:QZone',
            "menuItem:openWithQQBrowser",
            "menuItem:openWithSafari"
        ]
    });
    wx.showMenuItems({menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']});

    WeixinApi.ready(wx);

    //// 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
    WeixinApi.shareToFriend(wxData, wxCallbacks);

    //点击分享到朋友圈，会执行下面这个代码
    WeixinApi.shareToTimeline(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    WeixinApi.shareToWeibo(wxData, wxCallbacks);

    // 点击分享到腾讯微博，会执行下面这个代码
    WeixinApi.shareToWeibo(wxData, wxCallbacks);

    //点击分享到QQ，会执行下面这个代码
    WeixinApi.shareToQQ(wxData, wxCallbacks);
});