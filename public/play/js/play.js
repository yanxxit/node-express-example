// 连接服务器
// var socket = io.connect('http://app.sh.189.cn');
var vm = new Vue({
    el: '#container',
    data: {
        status: 0,//未查到数据 200 表示查询到可以参与的数据  -1 当前设备不可参加活动
        list: [],
        count: 0,
        loading: '<i class="am-icon-spinner am-icon-pulse"></i>',
        '': ''
    }, methods: {
        //参加团队
        addJoinRecord: function (data) {
            $.post("/express/spellGroup/submitJoinTeam", {itemid: data.itemid}, function (data) {
                $(".dig-chare").show();
            });
            // socket.emit('addJoinRecord', {
            //     info: '参与记录',
            //     cookie: $('#cookie').val()
            // });
        }, formatTime: function (t) {
            var a = moment(t * 1000);
            var b = moment();
            return a.diff(b, 'hours') + '小时' + a.diff(b, 'minute') % 60 + '分钟' + a.diff(b, 'second') % 60 + '秒'
        }
    }
});


//创建团队
$('#send').click(function () {
    $(".dig-chare").show();
    $.post("/express/spellGroup/createTeam", {}, function (data) {
        setTimeout(function () {
            //window.location.href = 'http://m.sh.189.cn';
            // window.reload()
        }, 3000);
    });
//        vm.list.push()
//        socket.emit('send', {
//            info: 'hello world',
//            cookie: $('#cookie').val()
//        });
});

var getList = function () {
    $.getJSON("/express/spellGroup/getList", function (data) {
        if (data.status == 200) {
            vm.list = data.data;
        }
    })
};

$(document).ready(function () {

    getList();
//     socket.emit('login', {
//         info: '登录中。。。',
//         cookie: cookie
//     });
//
//     // 监听服务器消息
//     socket.on('receive', function (data) {
//         console.log(data);
// //            vm.list.push(data)
//
//     });
//
//     // 监听服务器消息
//     socket.on('receive_join', function (data) {
//         console.log(data);
//         vm.count++
//     });
});