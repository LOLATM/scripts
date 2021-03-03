var body = $response.body; 
var obj = JSON.parse(body);
var obj = JSON.parse($response.body);


  obj.data.code = "0";

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
