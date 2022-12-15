/*
*Aman - 194nb.com
*/
const $ = new Env(`阅读自动返回`); ! (async() = >{
      if (typeof $request !== "undefined") {
            let url = $request.url
            if (url.indexOf('/mock/read') > 0) {
                  let body = ` < html > <head > <meta charset = "UTF-8" > </head>
      <style>
          div {position:absolute; top:50%; left:50%; margin:0 0 0 -234px; width:auto; height:auto; border:0px solid #008800; font-size: 7vw}
      </style > <body > <div id = "timer" > </div></body > <script >
                  var oBox = document.getElementById('timer');
                  var maxtime = parseInt(Math.random() * (3 - 3 + 1) + 3);
                  setTimeout(() = >window.history.back(), maxtime * 1000);
                  function CountDown() {
                        if (maxtime >= 0) {
                              oBox.innerHTML = '结束倒计时' + maxtime + '秒'; --maxtime;
                        } else {
                              clearInterval(timer);
                              window.history.back();
                        }
                  }
                  timer = setInterval("CountDown()", 1000); < /script>
      </html > `const headers = {
                        "Connection": "Close",
                        'Content-Type': 'text/html; charset=utf-8'
                  };
                  if ($.isSurge() || $.isLoon()) {
                        $.done({
                              response: {
                                    status: 200,
                                    headers,
                                    body
                              }
                        })
                  } else if ($.isQuanX()) {
                        $.done({
                              status: 'HTTP/1.1 200 OK',
                              headers,
                              body
                        })
                  }
            } else if (typeof $response !== "undefined") {
                  if (url.match(/https?:\/\/mp\.weixin\.qq\.com\/s.+/)) {
                        let body = $response.body
                        if (body.indexOf('</script>') > 0) {
                              body = body.replace('</script>', 'setTimeout(()=>window.history.back(),10000); </script>') $.done({
                                    body
                              })
                        } else {
                              $.log(`注入自动返回脚本失败：未找到替换数据`)
                        }
                  } else if (url.indexOf('v1/task') > 0) {
                        let data = $.toObj($response.body, {}) if (data.errcode == 0 && (data = data.data)) {
                              if (data.type == 'read' && data['session_link']) {
                                    if ((data.wx_read || 0) - 0 <= 2) {
                                          $.setval(new Date().getTime() + '', 'ysmReadTime')
                                    }
                                    $.log(`疑似鉴权文章: $ {
                                          data.wx_read
                                    }`)
                              }
                        }
                  } else {
                        // 如果重定向的是微信文章，改写重定向地址
                        let url302 = ($response.headers && $response.headers['Location']) || ''
                        if (url302.match(/https?:\/\/mp\.weixin\.qq\.com\/s/)) {
                              let mock = true
                              if (url.indexOf('v1/jump?') > 0) {
                                    // jump接口，需判断是否疑似鉴权阅读，否才修改重定向地址
                                    let time = ($.getval('ysmReadTime') || '0') - 0
                                    if (new Date().getTime() - time <= 6000) {
                                          // 6秒内跳转的疑似鉴权文章请求，需进入微信文章页面
                                          mock = false
                                    }
                              } else if (url.indexOf('fast_reada/oiejr') > 0 ) {
                                    // 番茄看看的阅读文章，需进入微信文章页面后自动返回
                                    mock = true
                              }
                              if (mock) {
                                    $.log('修改重定向地址为倒计时空白页面') let host = url.match(/^https?:\/\/(.+?)\//)[1] $response.headers['Location'] = `http: //${host}/mock/read`
                                    $.done({
                                          headers: $response.headers
                                    })
                              } else {
                                    $.log('为重定向的微信文章地址添加注入标识') if (!url302.indexOf('?')) {
                                          $response.headers['Location'] = url302 + '?k=feizao'
                                    } else if (url302.indexOf('?') && url302.indexOf('&')) {
                                          $response.headers['Location'] = url302.replace('&', ` & k = feizao & `)
                                    } else {
                                          $response.headers['Location'] = url302.replace('?', ` ? k = feizao & `)
                                    }
                                    $.done({
                                          headers: $response.headers
                                    })
                              }
                        }
                  }
            }
      }
})().
catch((e) = >$.logErr(e)).
