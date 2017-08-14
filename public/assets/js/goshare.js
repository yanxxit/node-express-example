$(function () {
    var shareTitle = "评选心中的大师，电信百分百送礼！";
    var shareUrl = "http://shcdn.iceinto.com/activity/dashibei/dashibei-share.jpg";
    var shareLink = 'http://m.sh.189.cn/ad-focus/1001dianxin/index.html';
    var raiseDesc = "大师邂逅，“网”上精彩，快来挥拍拿门票和签名网球吧！";
    var signPackage;
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

    wx.ready(function () {
        wx.hideMenuItems({
            menuList: [
                //'menuItem:share:timeline',
                'menuItem:share:qq',
                'menuItem:share:weiboApp',
                'menuItem:share:facebook',
                'menuItem:share:QZone'
            ]
        });
        wx.showMenuItems({menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']});

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

        //// 点击分享到朋友圈，会执行下面这个代码
        WeixinApi.shareToTimeline(wxData, wxCallbacks);
        //
        //// 点击分享到腾讯微博，会执行下面这个代码
        //WeixinApi.shareToWeibo(wxData, wxCallbacks);
        //
        //// 点击分享到腾讯微博，会执行下面这个代码
        //WeixinApi.shareToWeibo(wxData, wxCallbacks);
        //
        ////点击分享到QQ，会执行下面这个代码
        //WeixinApi.shareToQQ(wxData, wxCallbacks);
    });
})
;