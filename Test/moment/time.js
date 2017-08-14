var moment = require('moment');
moment().format('YYYY-MM-DD HH:mm') >= '2016-07-11 03:00'

console.log(moment().format('YYYY-MM-DD HH:mm'))

console.log(moment().format('YYYY-MM-DD HH:mm') >= '2016-07-11 03:00')
console.log(moment().format('YYYY-MM-DD HH:mm') >= '2016-07-08 09:32')

//时间戳
console.log(moment(1471325656 * 1000).format('YYYY-MM-DD HH:mm:ss'))
console.log(moment(1500708075 * 1000).diff(moment()))

var a = moment(1500708075 * 1000)
var b = moment();

console.log(a.diff(b, 'hours') + '小时')
console.log(a.diff(b, 'minute') + '分钟')
console.log(a.diff(b, 'second') + '秒')

console.log(a.diff(b, 'minute') % 60)
console.log(a.diff(b, 'second') % 60)

console.log(a.diff(b, 'hours') + '小时' + a.diff(b, 'minute') % 60 + '分钟' + a.diff(b, 'second') % 60 + '秒')

