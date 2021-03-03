var body = $response.body; 
var obj = JSON.parse(body);
obj =
  {
  code = 0;
  
}
body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
