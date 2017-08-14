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

wx.config({
    debug: false,
    appId: signPackage.appid,
    timestamp: signPackage.timestamp,
    nonceStr: signPackage.noncestr,
    signature: signPackage.signature,
    jsApiList: [
        'hideOptionMenu'
    ]
});

wx.ready(function () {
    wx.hideOptionMenu();
});
