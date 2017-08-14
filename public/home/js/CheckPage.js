var CheckPageEntity = {};

CheckPageEntity.isLocalStorageSupported = function () {
    console.log('-')
    if (typeof localStorage === 'object') {
        try {
            localStorage.setItem('localStorage', 1);
            localStorage.removeItem('localStorage');
        } catch (e) {
            Storage.prototype._setItem = Storage.prototype.setItem;
            Storage.prototype.setItem = function () {
            };
            alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
            //alert('本地储存写入错误，若为safari浏览器请关闭隐身模式浏览。');
        }
    }
}

CheckPageEntity.isSessionStorageSupported = function () {
    if (typeof sessionStorage === 'object') {
        try {
            sessionStorage.setItem('sessionStorage', 1);
            sessionStorage.removeItem('sessionStorage');
        } catch (e) {
            Storage.prototype._setItem = Storage.prototype.setItem;
            Storage.prototype.setItem = function () {
            };
            alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
        }
    }
}