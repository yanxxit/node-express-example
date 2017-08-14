var myHome = {};

myHome.alert = function () {
    //alert('测试适用！');
};

//module.exports = myHome;

$('.btn-alert').click(function(){
    $('.sh-modal-alert').show();
});

$('.sh-modal-alert').click(function(){
    $('.sh-modal-alert').hide();
});