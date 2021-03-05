/*
github锛歨ttps://github.com/ZhiYi-N/script
boxjs锛歨ttps://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/ZhiYi-N.boxjs.json
杞浇鐣欎釜鍚嶅瓧锛岃阿璋�
閭€璇风爜锛�1344591998
鎴戠殑--杈撳叆閭€璇风爜锛岀珛寰椾竴鍏冿紝鐩存帴鎻愮幇锛岃阿璋�
浣滆€咃細鎵ф剰ZhiYi-N
鐩墠鍖呭惈锛�
绛惧埌
寮€棣栭〉瀹濈
璇绘枃绔�30绡囷紙鍏蜂綋鏁堟灉鑷祴锛�
寮€鍐滃満瀹濈
鍐滃満娴囨按
done 鍐滃満绂荤嚎濂栧姳(鍐滃満瀹濈寮€瀹屽悗锛岄渶瑕佽繘鍐滃満鍐嶈繍琛岃剼鏈墠鑳藉紑锛屾湁鐐归棶棰�)
##閫氳繃鍐滃満娴囨按婵€娲讳笂绾匡紝杈惧埌鑾峰彇鐞嗘兂濂栧姳鐩殑锛岀洰鍓嶆祴璇曟瘡澶╃殑绂荤嚎濂栧姳瓒冲寮€鍚啘鍦�5涓疂绠憋紝涓嶉渶瑕佸仛鍏朵粬浠诲姟锛屽叿浣撴儏鍐电湅鍚庢湡鏄惁闇€瑕侊紝鍐嶆坊鍔犻櫎铏紝寮€鍦帮紝鏂借偉锛屼笁椁愬鍔变互鍙婂啘鍦虹鍒版椿鍔�
20鐐圭潯瑙夛紝鑾峰彇瀹屽叏鍚庯紙3600锛夋垨鐫¤12灏忔椂锛岃嚜鍔ㄩ啋鏉ワ紙闃叉灏佸彿锛�
done鑷姩鏀跺彇鐫¤閲戝竵action寮傚父
##璇烽噸鏂拌幏鍙杝ignkey锛岀洰鍓嶅凡缁忎慨澶�(signkey)閮借鐢ˋccept-Encoding寮€澶�
鑴氭湰鍒濇垚锛岄潪涓撲笟浜哄＋鍒朵綔锛屾杩庢寚姝�
#鍙充笂瑙掔鍒板嵆鍙幏鍙栫鍒癱ookie
#杩涗竴娆″啘鍦哄嵆鍙幏鍙栧啘鍦篶ookie
#璇绘枃绔犲脊鍑洪噾甯佽幏鍙栬鏂囩珷cookie

action浼氬嚭闂渚濇棫锛屾垜涓€涓仠姝㈢潯瑙変笉鏀堕噾甯侊紝涓€涓敹閲戝竵涓嶅仠姝㈢潯瑙�
鍙互鍦ㄤ唬鐞嗗伐鍏锋瘡澶�8鐐筩ron杩愯涓€涓嬶紝纭繚涓囨棤涓€澶�
ACTION YML
JRTTSIGNURL-signurl
JRTTSIGNKEY-signkey锛堜互x-tt-trace-id寮€澶达級
JRTTFARMURL-farmurl
JRTTFARMKEY-farmkey
JRTTREADURL-readurl
JRTTREADKEY-readkey
JRTTCOLLECT-signkey锛堜互Accepting-Encoding寮€澶达級


[mitm]
hostname = api3-normal-c-*.snssdk.com
#鍦坸
[rewrite local]
^https:\/\/api3-normal-c-\w+\.snssdk\.com\/score_task\/v1\/task\/(sign_in|get_read_bonus) url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js
^https:\/\/api3-normal-c-\w+\.snssdk\.com\/ttgame\/game_farm\/home_info url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js
[task]
5,35 8-23 * * * https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js, tag=浠婃棩澶存潯鏋侀€熺増, enabled=true
#loon
http-request ^https:\/\/api3-normal-c-\w+\.snssdk\.com\/score_task\/v1\/task\/(sign_in|get_read_bonus) script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js, requires-body=true, timeout=10, tag=浠婃棩澶存潯鏋侀€熺増sign
http-request ^https:\/\/api3-normal-c-\w+\.snssdk\.com\/ttgame\/game_farm\/home_info script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js, requires-body=true, timeout=10, tag=浠婃棩澶存潯鏋侀€熺増farm
cron "5,35 8-23 * * *" script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js, tag=浠婃棩澶存潯鏋侀€熺増
#surge
jrttsign = type=http-request,pattern=^https:\/\/api3-normal-c-\w+\.snssdk\.com\/score_task\/v1\/task\/(sign_in|get_read_bonus),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
jrttfarm = type=http-request,pattern=^https:\/\/api3-normal-c-\w+\.snssdk\.com\/ttgame\/game_farm\/home_info,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
jrtt = type=cron,cronexp="5,35 8-23 * * *",wake-system=1,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/jrtt.js,script-update-interval=0
*/
const jsname='浠婃棩澶存潯鏋侀€熺増'
const $ = Env(jsname)
const notify = $.isNode() ?require('./sendNotify') : '';
const signurlArr = [],signkeyArr=[]
const farmurlArr = [],farmkeyArr=[]
const readurlArr = [],readkeyArr=[]
let signurl = $.getdata('signurl')
let signkey = $.getdata('signkey')

let farmurl = $.getdata('farmurl')
let farmkey = $.getdata('farmkey')

let readurl = $.getdata('readurl')
let readkey = $.getdata('readkey')
//var articles =''
let tz = ($.getval('tz') || '0');//0鍏抽棴閫氱煡锛�1榛樿寮€鍚�
const invit=1;//鏂扮敤鎴疯嚜鍔ㄩ個璇凤紝0鍏抽棴锛�1榛樿寮€鍚�
const logs =0;//0涓哄叧闂棩蹇楋紝1涓哄紑鍚�
var coins=''
var article =''
var collect = ''
var invited =''
var hour=''
var minute=''
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK杩愯

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {
//sign
  if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('#') > -1) {
   signurl = process.env.JRTTSIGNURL.split('#');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢�"#"闅斿紑\n`)
  }
  else if (process.env.JRTTSIGNURL && process.env.JRTTSIGNURL.indexOf('\n') > -1) {
   signurl = process.env.JRTTSIGNURL.split('\n');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮€\n`)
  } else {
   signurl = process.env.JRTTSIGNURL.split()
  };
  if (process.env. JRTTSIGNKEY&& process.env.JRTTSIGNKEY.indexOf('#') > -1) {
   signkey = process.env.JRTTSIGNKEY.split('#');
  }
  else if (process.env.JRTTSIGNKEY && process.env.JRTTSIGNKEY.split('\n').length > 0) {
   signkey = process.env.JRTTSIGNKEY.split('\n');
  } else  {
   signkey = process.env.JRTTSIGNKEY.split()
  };
//farm
if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('#') > -1) {
   farmurl = process.env.JRTTFARMURL.split('#');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢�"#"闅斿紑\n`)
  }
  else if (process.env.JRTTFARMURL && process.env.JRTTFARMURL.indexOf('\n') > -1) {
   farmurl = process.env.JRTTFARMURL.split('\n');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮€\n`)
  } else {
   farmurl = process.env.JRTTFARMURL.split()
  };
  if (process.env. JRTTFARMKEY&& process.env.JRTTFARMKEY.indexOf('#') > -1) {
   farmkey = process.env.JRTTFARMKEY.split('#');
  }
  else if (process.env.JRTTFARMKEY && process.env.JRTTFARMKEY.split('\n').length > 0) {
   farmkey = process.env.JRTTFARMKEY.split('\n');
  } else  {
   farmkey = process.env.JRTTFARMKEY.split()
  };
//read
if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('#') > -1) {
   readurl = process.env.JRTTREADURL.split('#');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢�"#"闅斿紑\n`)
  }
  else if (process.env.JRTTREADURL && process.env.JRTTREADURL.indexOf('\n') > -1) {
   readurl = process.env.JRTTREADURL.split('\n');
   console.log(`鎮ㄩ€夋嫨鐨勬槸鐢ㄦ崲琛岄殧寮€\n`)
  } else {
   readurl = process.env.JRTTREADURL.split()
  };
  if (process.env. JRTTREADKEY&& process.env.JRTTREADKEY.indexOf('#') > -1) {
   readkey = process.env.JRTTREADKEY.split('#');
  }
  else if (process.env.JRTTREADKEY && process.env.JRTTREADKEY.split('\n').length > 0) {
   readkey = process.env.JRTTREADKEY.split('\n');
  } else  {
   readkey = process.env.JRTTREADKEY.split()
  };
//sign
  Object.keys(signurl).forEach((item) => {
        if (signurl[item]) {
          signurlArr.push(signurl[item])
        }
    });
    Object.keys(signkey).forEach((item) => {
        if (signkey[item]) {
          signkeyArr.push(signkey[item])
        }
    });
//farm
Object.keys(farmurl).forEach((item) => {
        if (farmurl[item]) {
          farmurlArr.push(farmurl[item])
        }
    });
    Object.keys(farmkey).forEach((item) => {
        if (farmkey[item]) {
          farmkeyArr.push(signkey[item])
        }
    });
//read
Object.keys(readurl).forEach((item) => {
        if (readurl[item]) {
          readurlArr.push(readurl[item])
        }
    });
    Object.keys(readkey).forEach((item) => {
        if (readkey[item]) {
          readkeyArr.push(readkey[item])
        }
    });
    console.log(`============ 鑴氭湰鎵ц-鍥介檯鏍囧噯鏃堕棿(UTC)锛�${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 鑴氭湰鎵ц-鍖椾含鏃堕棿(UTC+8)锛�${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    signurlArr.push($.getdata('signurl'))
    signkeyArr.push($.getdata('signkey'))
    farmurlArr.push($.getdata('farmurl'))
    farmkeyArr.push($.getdata('farmkey'))
    readurlArr.push($.getdata('readurl'))
    readkeyArr.push($.getdata('readkey'))
    let jrttcount = ($.getval('jrttcount') || '1');
  for (let i = 2; i <= jrttcount; i++) {
    signurlArr.push($.getdata(`signurl${i}`))
    signkeyArr.push($.getdata(`signkey${i}`))
    farmurlArr.push($.getdata(`farmurl${i}`))
    farmkeyArr.push($.getdata(`farmkey${i}`))
    readurlArr.push($.getdata(`readurl${i}`))
    readkeyArr.push($.getdata(`readkey${i}`))
  }
}
!(async () => {
if (!signurlArr[0]) {
    $.msg($.name, '銆愭彁绀恒€戣鍏堣幏鍙栦粖鏃ュご鏉℃瀬閫熺増涓€cookie')
    return;
  }
   console.log(`------------- 鍏�${signurlArr.length}涓处鍙�----------------\n`)
  for (let i = 0; i < signurlArr.length; i++) {
    if (signurlArr[i]) {
      other = ''
      signurl = signurlArr[i];
      signkey = signkeyArr[i];
      farmurl = farmurlArr[i];
      farmkey = farmkeyArr[i];
      readurl = readurlArr[i];
      readkey = readkeyArr[i];
      $.index = i + 1;
      console.log(`\n寮€濮嬨€愪粖鏃ュご鏉℃瀬閫熺増${$.index}銆慲)
      await invite()
      await userinfo()
      await profit()
      await sign_in()
      await openbox()
      await reading()
      await farm_sign_in()
      await openfarmbox()
      await landwarer()
      await double_reward()
      await sleepstatus()
      await control()
      //await sleepstart()
      //await sleepstop()
      //await collectcoins(coins)
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("info")>=0) {
  const farmurlVal = $request.url.split(`?`)[1]
    if (farmurlVal) $.setdata(farmurlVal,
'farmurl')
    $.log(`[${jsname}] 鑾峰彇farm璇锋眰: 鎴愬姛,farmirlVal: ${farmurl}`)
    $.msg(`鑾峰彇farmurl: 鎴愬姛馃帀`, ``)
   const jrttfarmKey = JSON.stringify($request.headers)
$.log(jrttfarmKey)
  if(jrttfarmKey)        $.setdata(jrttfarmKey,'farmkey')
    $.log(`[${jsname}] 鑾峰彇farm璇锋眰: 鎴愬姛,jrttfarmKey: ${farmkey}`)
    $.msg(`鑾峰彇farmkey: 鎴愬姛馃帀`, ``)
}
  if($request&&$request.url.indexOf("sign_in")>=0) {
  const signurlVal = $request.url.split(`?`)[1]
    if (signurlVal) $.setdata(signurlVal,
'signurl')
    $.log(`[${jsname}] 鑾峰彇sign璇锋眰: 鎴愬姛,signurlVal: ${signurl}`)
    $.msg(`鑾峰彇signurl: 鎴愬姛馃帀`, ``)
   const jrttsignKey = JSON.stringify($request.headers)
//$.log(jrttsignKey)
  if(jrttsignKey.indexOf("STUB")>=0)
    $.setdata(jrttsignKey,'signkey')
    $.log(`[${jsname}] 鑾峰彇sign璇锋眰: 鎴愬姛,jrttsignKey: ${signkey}`)
    $.msg(`鑾峰彇signkey: 鎴愬姛馃帀`, ``)
}

if($request&&$request.url.indexOf("get_read_bonus")>=0) {
  const readurlVal = $request.url.split(`?`)[1]

  //const article = readurlVal.replace(/\d{3}$/,Math.floor(Math.random()*1000));
//article = article.replace(/\d{3}$/, (Math.random()*1e3).toFixed(0).padStart(3,"0"));

    if(article) $.setdata(article,
'article')
    if (readurlVal) $.setdata(readurlVal,
'readurl')
    $.log(`[${jsname}] 鑾峰彇read璇锋眰: 鎴愬姛,readurlVal: ${readurl}`)
    $.msg(`鑾峰彇readurl: 鎴愬姛馃帀`, ``)
   const jrttreadKey = JSON.stringify($request.headers)
$.log(jrttreadKey)
  if(jrttreadKey)        $.setdata(jrttreadKey,'readkey')
    $.log(`[${jsname}] 鑾峰彇read璇锋眰: 鎴愬姛,jrttreadKey: ${readkey}`)
    $.msg(`鑾峰彇readkey: 鎴愬姛馃帀`, ``)
    }
  }
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/sign_in/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='馃摚棣栭〉绛惧埌\n'
          other +='绛惧埌瀹屾垚\n'
          other +='鑾峰緱'+result.data.score_amount+'閲戝竵\n'
          other +='杩炵画绛惧埌'+result.data.sign_times+'澶‐n'
  
}else{
          other +='馃摚棣栭〉绛惧埌\n'
          other +='浠婃棩宸插畬鎴愮鍒癨n'
           }
          resolve()
    })
   })
  } 

async function control(){
   if(collect == 0){
      await sleepstart();
   }
   if(collect == 1){
      await sleepstop();
      await collectcoins(coins);
   }
   if(collect == 2){
      //$.log('no opreation')
      other +='\n\n鐢熷墠浣曞繀涔呯潯锛屾鍚庤嚜浼氶暱鐪燶n'
   }
   if(collect == 3){
      await collectcoins(coins);
   }
   if(invited == 4 && invit== 1){
      await invitation();
   }
}
function invite() {
return new Promise((resolve, reject) => {
  let inviteurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/new_tabs/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(inviteurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)$.log(data)
      if(result.data.section[10].key=='mine_input_code') {
          invited=4;
           }else{
          invited=5;
}
          resolve()
    })
   })
  } 
function invitation() {
return new Promise((resolve, reject) => {
  let invitatonurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/invite/post_invite_code/?_request_from=web&device_platform=ios&ac=4G&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body: JSON.stringify({"invitecode" : "1980436898"})
}

   $.post(invitatonurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
          resolve()
    })
   })
  } 

function userinfo() {
return new Promise((resolve, reject) => {
  let userinfourl ={
    url: `https://api3-normal-c-hl.snssdk.com/passport/account/info/v2/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(userinfourl,(error, response, data) =>{
     const result = JSON.parse(data)
      //$.log(signurl+'\n'+signkey+'\n'+farmurl+'\n'+farmkey+'\n'+readurl+'\n'+readkey)
       if(logs) $.log(data)
      if(result.message == 'success') {
          other +='馃帀'+result.data.name+'\n'
  
}     else if(result.message == 'error'){
          other += '鈿狅笍寮傚父:'+result.data.description+'\n'
           }else{
          other += '鈿狅笍寮傚父'
}
          resolve()
    })
   })
  } 

function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/info/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(profiturl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='馃帀閲戝竵鏀剁泭:'+result.data.score.amount+'\n馃帀浼拌鍏戞崲鐜伴噾:'+(result.data.score.amount/30000).toFixed(2)+'\n馃帀'+'鐜伴噾鏀剁泭:'+result.data.cash.amount+'\n'      
}else{
          other += '鈿狅笍寮傚父\n'
           }
          resolve()
    })
   })
  } 

//鏂囩珷闃呰30绡囨瘡澶�
function reading() {
const articles = readurl.replace(/\d{3}$/,Math.floor(Math.random()*1000));
return new Promise((resolve, reject) => {
  let readurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/get_read_bonus/?${articles}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(readurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      other +='馃摚鏂囩珷闃呰\n'
      if(result.err_no == 0) {
          other +='闃呰瀹屾垚'
          other +='鑾峰緱'+result.data.score_amount+'閲戝竵\n'
          other +='闃呰杩涘害'+result.data.icon_data.done_times+'/'+result.data.icon_data.read_limit+'\n'
      }
       if(result.err_no == 4){
          other +='鏂囩珷闃呰宸茶揪涓婇檺\n'
        }
       if(result.err_no == 1028){
          other +='杩欑瘒鏂囩珷宸茬粡璇昏繃浜哱n'
        }
          resolve()
    })
   })
  } 
//鍐滃満绛惧埌
function farm_sign_in() {
return new Promise((resolve, reject) => {
  let farm_sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/reward/sign_in?watch_ad=1&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(farm_sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='馃摚鍐滃満绛惧埌\n'
      if(result.status_code == 0) {
          other +='绛惧埌瀹屾垚\n'
         
}else{
          other +=result.message+'\n'
           }
          resolve()
    })
   })
  } 

function openbox() {
return new Promise((resolve, reject) => {
  let openboxurl ={
    url: `https://it-lq.snssdk.com/score_task/v1/task/open_treasure_box/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(openboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='馃摚棣栭〉瀹濈\n'
      if(result.err_no == 0) {
        other += '寮€鍚垚鍔�'
        other += '鑾峰緱閲戝竵'+result.data.score_amount+'涓猏n'
        }
      else{
         if(result.err_no == 9){
        other += result.err_tips+'\n'
        }else{
        other +="涓嶅湪寮€瀹濈鏃堕棿\n"
           }
    }
          resolve()
    })
   })
  }  


function openfarmbox() {
return new Promise((resolve, reject) => {
  let openfarmboxurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/box/open?${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(openfarmboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='馃摚鍐滃満瀹濈\n'
      if(result.status_code == 0) {
        other += "绗�"+(5-result.data.box_num)+"寮€鍚垚鍔�"
        other += "杩樺彲浠ュ紑鍚�"+result.data.box_num+"涓猏n"
        }
      else if(result.status_code == 5003){
        other +="宸插叏閮ㄥ紑鍚痋n"
        }
          resolve()
    })
   })
  }  
function landwarer() {
return new Promise((resolve, reject) => {
  let landwaterurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/land_water?tentimes=0${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(landwaterurl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
       other +='馃摚鍐滃満娴囨按\n'
      if(result.status_code == '0') {
        other += result.message+'\n'
        other += '馃挧姘存淮鍓╀綑'+result.data.water+'\n'
        }
      else{
        other +=result.message+'\n'
           }
          resolve()
    })
   })
  } 
//done 杩欎釜绂荤嚎濂栧姳褰撳疂绠卞叏閮ㄥ紑瀹屽悗锛岄渶瑕佽繘鍏ュ啘鍦哄啀杩愯鑴氭湰锛屾墠鑳借幏鍙栫绾垮鍔憋紝搴旇鏈変竴涓垽瀹氾紝鐩墠娌℃湁鎵惧埌
//鍒╃敤娴囨按婵€娲昏繘鍐滃満鐘舵€佽幏鍙栫绾垮鍔憋紝鐩墠娴嬭瘯姣忓ぉ绂荤嚎濂栧姳瓒冲寮€鍚啘鍦�5涓疂绠憋紝涓嶉渶瑕佸仛娓告垙鍔犲揩鐢熶骇锛屽叿浣撴儏鍐电湅鍚庢湡鏄惁闇€瑕侊紝鍐嶈€冭檻鍔犲仛闄よ櫕锛屽紑鍦帮紝涓夐濂栧姳
function double_reward() {
return new Promise((resolve, reject) => {
  let double_rewardurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/double_reward?watch_ad=1&${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(double_rewardurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
        other +='馃摚鍐滃満瑙嗛鍙屽€嶇绾垮鍔盶n'
      if(result.status_code == 0) {
        other += '鑾峰緱鎴愬姛\n'
        }else if(result.status_code==5033){
            other += result.message+'\n'
          }
        else{
        other +='馃摚鍐滃満瑙嗛鍙屽€嶇绾垮鍔盶n'
        other +="鏃犵绾夸骇閲忓彲棰嗗彇\n"
           }
          resolve()
    })
   })
  }  


//鐫¤鐘舵€�
function sleepstatus() {
return new Promise((resolve, reject) => {
  let sleepstatusurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/status/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(sleepstatusurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='馃摚鏌ヨ鐫¤鐘舵€乗n馃帀鏌ヨ'+result.err_tips+'\n'
           }
      if(result.data.sleeping == false){
          other +='褰撳墠鐘舵€�:娓呴啋鐫€鍛n'
        if(hour >= 20||hour<=2){
           collect=0 //await sleepstart()
           }else{
if(result.data.history_amount!==0){ 
//鍗充娇娌℃湁婊¤冻3600涔熷湪鐫¤12灏忔椂鍚庡仠姝紝浠ラ槻灏佸彿
         coins=result.data.history_amount
         collect =3 //collect coins
          }else{
         collect=2
}
}}
          else{
         other  +='褰撳墠鐘舵€�:閰ｇ潯涓�,宸茬潯'+parseInt(result.data.sleep_last_time/3600)+'灏忔椂'+parseInt((result.data.sleep_last_time%3600)/60)+'鍒嗛挓'+parseInt((result.data.sleep_last_time%3600)%60)+'绉抃n'
          other +='棰勮鍙緱閲戝竵'+result.data.sleep_unexchanged_score+'\n'
          coins=result.data.sleep_unexchanged_score
         if(result.data.sleep_unexchanged_score == 3600 || parseInt(result.data.sleep_last_time/3600) == 12){ 
//鍗充娇娌℃湁婊¤冻3600涔熷湪鐫¤12灏忔椂鍚庡仠姝紝浠ラ槻灏佸彿
         collect =1 //collect coins&sleepstop
          }else{
         collect =2
}
   
     }
          resolve()
    })
   })
  } 
//寮€濮嬬潯瑙�
function sleepstart() {
return new Promise((resolve, reject) => {
  let sleepstarturl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/start/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstarturl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='馃摚寮€濮嬬潯瑙塡n璇ョ潯瑙変簡锛屽紑濮嬬潯瑙�'+result.err_tips+'\n'
  
}     else if(result.err_no == 1052){
          other +='馃摚寮€濮嬬潯瑙塡n'+result.err_tips+'\n'
           }else{
          other += '馃摚寮€濮嬬潯瑙�:'+'鈿狅笍寮傚父'
}
          resolve()
    })
   })
  } 
//鍋滄鐫¤
function sleepstop() {
return new Promise((resolve, reject) => {
  let sleepstopurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/stop/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstopurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='馃摚鍋滄鐫¤\n'+result.err_tips+'\n'
          
}     else if(result.err_no == 1052){
          other += '馃摚鍋滄鐫¤\n'+'杩樻病寮€濮嬬潯瑙塡n'
           }else{
          other +='馃摚鍋滄鐫¤:'+'\n鈿狅笍寮傚父'
}
          resolve()
    })
   })
  } 
//鏀跺彇鐫¤閲戝竵
function collectcoins(coins) {
return new Promise((resolve, reject) => {
  let collectcoinsurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/done_task/?_request_from=web&device_platform=undefined&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body :JSON.stringify({score_amount: coins}),

}

   $.post(collectcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='馃摚鏀跺彇閲戝竵\n'+result.err_tips+'     鑾峰緱閲戝竵:'+coins
          
}     else{
          other +='馃摚鏀跺彇閲戝竵:'+'\n鈿狅笍寮傚父:'+result.err_tips+''
}
          resolve()
    })
   })
  } 
var Time = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
async function showmsg(){
if(tz==1){
    if ($.isNode()&& (Time.getHours() == 12 && Time.getMinutes() <= 20) || (Time.getHours() == 23 && Time.getMinutes() >= 40)) {
       await notify.sendNotify($.name,other)
     }else{
       $.msg(jsname,'',other)
}
   }else{
      $.log(jsname,'',other)
     }

}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
