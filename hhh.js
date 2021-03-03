// 双斜杠后的内容在js里是属于注释内容不会生效
var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理
obj.data.code = 0
body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
