"""
代码请勿用于非法盈利,一切与本人无关,该代码仅用于学习交流,请阅览下载24小时内删除代码
走不走邀请都无所谓了,能走更好,不走也没关系,我的要求,
请勿擅自修改脚本注释,
请勿将脚本擅自分享传播至任何地方,请勿将邀请更改为自己的邀请拉取人头,
如果你这样做了,我是没办法怎么样你的
阅读：可乐阅读
new Env("可乐阅读")
cron: 9 9-21/2 * * *

走邀请:推荐阅读 -> https://rk1115131257-1322350692.cos.ap-nanjing.myqcloud.com/index.html?upuid=135968
(如无法打开，请复制链接在手机浏览器打开，获取最新入口)
@不走邀请: https://rk1115131257-1322350692.cos.ap-nanjing.myqcloud.com/index.html



第一步配置文件填写:export WXPUSER_TOKEN="AT_aYF2532tqjrD4dX90OrJsuiflscRureX" 
    然后微信打开链接:https://wxpusher.zjiecode.com/wxuser/?type=1&id=50341#/follow
    关注wxpuser app 订阅公众号就能获取   你的uid
第二部配置文件填写:export WXPUSER_UID="你的uid"  # 多号就export WXPUSER_UID="你的uid1@你的uid2@...."  uid获取方式看第一步
第三步配置文件填写:export klydcks='PHPSESSID............' 
# 多号就 export klcks='PHPSESSID...........@PHPSESSID=.........'
cookie就是你的完整cookie都行!!!!!! 

并发开关 export kl_multi='true'
更换自己的UA 
export READ_USER_AGENT='你的手机微信阅读user-agent'

"""
withdraw_switch =False



import asyncio
import aiohttp
from typing import Optional, Dict 
from urllib.parse import urlparse,parse_qs,quote
import time,random,json
import sys, logging
import os
logging.basicConfig(level=logging.INFO)

class template:
    def __init__(self, check_url:str, index:int, wxpuser_token:str, topicid:str, wxpuser_uid:str) -> None:
        self.index = index
        self.aol = check_url
        self.index = index
        self.wxpuser_token = wxpuser_token
        self.topicid=topicid
        self.wxpuser_uid = wxpuser_uid
        ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x1800123f) NetType/4G Language/zh_CN'
        self.user_agent = os.getenv('READ_USER_AGENT2',ua)
        self.sessions = aiohttp.ClientSession()
        self.logger = logging.getLogger(f"用户{self.index}")
        self.content = ''

    def log(self, msg):  # 改写一下日志
        self.logger.info(msg)
        # self.content += str(msg) + '\n'


    async def close(self):
        await self.sessions.close()

    async def request(self, url, method='get', data=None, add_headers: Optional[Dict[str, str]] = None, headers=None, dtype='json'):
        host = urlparse(url).netloc
        _default_headers = {
            "Host":host,
            "User-Agent": self.user_agent,
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "X-Requested-With":"com.tencent.mm",
            "Cookie": self.cookie
        }
        try:
            request_headers = headers or _default_headers
            if add_headers:
                request_headers.update(add_headers)
            async with getattr(self.sessions, method)(url, headers=request_headers, data=data) as response:
                if response.status == 200:
                    if dtype == 'json':
                        return await response.json()
                    else:
                        return await response.text()
                else:
                    self.log(f"请求失败状态码：{response.status}")
                    # 可以选择休眠一段时间再重试，以避免频繁请求
                    await asyncio.sleep(random.randint(3,5))  # 休眠1秒钟
        except Exception as e:
            self.log(f"请求出现错误：{e}")
            await asyncio.sleep(random.randint(3,5))  # 休眠1秒钟 


    async def get_base_url(self):
        url = 'http://8.212.6.219:80'
        host = urlparse(url).netloc
        add_headers = {
            'Host':host,
            "User-Agent": self.user_agent,
            "Accept": "Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
        }
        async with self.sessions.get(url, headers=add_headers,allow_redirects=False) as response:
            if response.status == 302:
                url = response.headers.get('Location')
                # print(self.url)
                self.url = 'http://'+ urlparse(url).netloc
            else:
                self.log("获取base_url失败,改备用的url")
                self.url = 'http://m224482.ww1112017.cn'



    async def user_info(self):
        url = self.url + '/tuijian'
        add_headers = {
            "Referer": self.url +"/new",
        }
        res = await self.request(url, add_headers=add_headers)
        if not res:
            self.log("获取用户信息失败")
            return
        if res['code'] == 0:
            self.log(f"{res['data']['user']['username']} uid:{res['data']['user']['uid']}, 积分{res['data']['user']['score']},阅读{res['data']['infoView']['num']}篇")
            if 'msg' in res['data']['infoView']:
                self.log(f"提示：{res['data']['infoView']['msg']}")
                return False
            self.read_num = int(res['data']['infoView']['num'])
            
            return True
        else:
            self.log(f"获取用户信息失败：{res}")
    
    async def get_article(self):
        url = self.url + '/new/get_read_url'
        add_headers = {
            "Referer": self.url+ "/new",
        }
        res = await self.request(url, add_headers=add_headers,dtype='text')
        if not res:
            self.log("获取文章失败")
            return
        if 'jump' in res:
            res = json.loads(res)
            self.log(f"文章地址：{res['jump']}")
            await asyncio.sleep(5,7)
            await self.jump_location(res['jump'])
        else:
            self.log(f"获取文章失败：{res}")
    
    async def jump_location(self, url):
        host = urlparse(url).netloc
        headers = {
            "Host":host,
            "User-Agent": self.user_agent,
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "X-Requested-With":"com.tencent.mm",
        }
        async with self.sessions.get(url, headers=headers, allow_redirects=False) as response:
            if response.status == 200:
                # 获取响应头里的set-cookie
                cookie = response.headers.get('Set-Cookie')
                if cookie is not None:
                    self.cookie = cookie.split(';')[0]
                else:
                    self.log("获取cookie失败")
                    return
                res = await response.text()
            else:
                self.logger.error(f'获取重定向地址失败，状态码：{response.status}')
                return
        # add_headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'}

        # res1 = await self.request(location,add_headers=add_headers,dtype='text')
        parsed_url = urlparse(url)
        query_parameters = parse_qs(parsed_url.query)
        iu = query_parameters['iu'][0]
        url1 = 'http://' + parsed_url.netloc + f'/tuijian/do_read?for=&zs=&pageshow='
        if '加载中' in res:
            self.log("加载阅读文章中")
            # 获取url的iu参数
            if iu is not None:
                await asyncio.sleep(random.randint(1,2))
                await self.do_read(url1, iu, url)
            else:
                self.log("获取url参数失败")
        else:
            self.log(f"加载不了")
            return
    async def do_read(self, url, iu, referer, jkey=None,):
        if jkey is None:
            url1 = url +f'&r={round(random.uniform(0,1),16)}&iu={iu}'
        else:
            url1 = url + f'&r={round(random.uniform(0,1),16)}&iu={iu}&jkey={jkey}'
        add_headers = {
            "Referer": referer,
            "X-Requested-With":"XMLHttpRequest"
        }
        res = await self.request(url1,add_headers=add_headers)
        if not res:
            self.log("阅读失败")
            return
        if res['url'] != 'close'and 'jkey' in res:
            if 'success_msg' in res:
                self.log(f"{res['success_msg'],res['url']}")
            else:
                self.log(f"阅读成功")
            if await self.verify_status(res['url']):
                pass
            else:
                return
            await asyncio.sleep(random.randint(8,16))
            await self.do_read(url, iu, referer, res['jkey'])
        else:
            self.log(f"{res['success_msg']}")
    
    async def verify_status(self, url):
        if 'chksm' in url:
            self.log("😅😅😅😅出现检测文章了！")
            encoded_url = quote(url)
            await self.wxpuser(f"可乐阅读【且听风铃】检测,请90秒内点击阅读", encoded_url)
            self.log("🤷‍♂️🤷‍♂️🤷‍♂️请90秒内点击阅读啦")
            start_time = int(time.time())
            while True:
                if await self.get_read_state():
                    self.log(f"👌👌👌已手动阅读,稍微延迟3秒钟")
                    await asyncio.sleep(3)
                    return True
                if int(time.time())- start_time > 90:
                    self.log(f"😒😒😒90秒到啦,终止本次阅读")
                    return False
                time.sleep(1)
        else:
            self.log(f"😍😍😍这次阅读没有检测")
            return True


    async def wxpuser(self, title, url):
        content = '''
        <!DOCTYPE html>
        <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <title>TITLE</title>
                <style type=text/css>
                    body {
                        background-image: linear-gradient(120deg, #fdfbfb 0%, #a5d0e5 100%);
                        background-size: 300%;
                        animation: bgAnimation 6s linear infinite;
                    }
                    @keyframes bgAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                    
                        50% {
                            background-position: 100% 50%;
                        }
                    
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                    .title {
                        text-align: center;
                        font-size: 25px;
                        display: block;
                    }
                    .button {
                        background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%);
                        text-align: center;
                        transition: 0.5s;
                        background-size: 200% auto;
                        border-radius: 10px;
                        width: 50%;
                        margin: 25px auto;
                    }
                    .button a {
                        padding: 15px 45px;
                        display: block;
                        text-decoration: none;
                        color: white;
                    }
                    .tips {
                        text-align: center;
                        margin: auto;
                        padding: 10px 0px;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                    }
                </style>
            </head>
            <body>
                <div class="title">用户a可乐阅读检测,务必在90s内点击阅读</div>
                <div class='button'><a href="self.aol/redirect?user=uuu&value=3&timestamp=tsone&wxurl=link">点击阅读检测文章</a></div>
                <div class="tips">
                    <p>如果错过时间未能阅读, 会导致当天收益下降或者没有收益</p>
                    <p>请留意消息推送,时间按照你的定时看</p>
                </div><br>
            </body>
        </html>
        '''
        content = content.replace('用户a',f'用户{self.index}').replace('self.aol',self.aol).replace('uuu',quote(self.mmmmy)).replace('link',url).replace('tsone',str(int(time.time())))
        data = {
            "appToken": self.wxpuser_token,
            "content": content,
            "summary": title,
            "contentType": 2,
        }
        if self.topicid is not None:
            data["topicIds"] = [int(self.topicid)]
        if self.wxpuser_uid is not None:
            data["uids"] = [self.wxpuser_uid]
        json_data = json.dumps(data)
        wxpuser_url = 'http://wxpusher.zjiecode.com/api/send/message'
        res = await self.request(wxpuser_url,'post',data=json_data, headers={"Content-Type":"application/json"})
        if res['success'] == True:
            self.log(f"[通知]--->检测发送成功！")
        else:
            self.log(f"[通知]====>发送失败！！！！！") 

    async def init_check_dict(self, maxretry=3):
        self.log(f"[init]:开始初始化阅读后台检测状态")
        url = self.aol + f'/check_dict?user={quote(self.mmmmy)}&value=3'
        async with self.sessions.get(url) as res:
            if res.status ==200:
                res1 = await res.json()
                if res1['status'] == 200:
                    # self.check_data = dict(res1['check_dict'])
                    self.log(f"[init]:初始化状态成功")
                    return True
                if res1['status'] == 207:
                    self.log(f"[init]:{res1['warning']}")
                    return False
            else:
                if maxretry >0:
                    self.log(f"[用户{self.index}][init]:初始化阅读后台检测状态失败")
                    await self.init_check_dict(maxretry-1)
                else:
                    exit()
    async def get_read_state(self,max_retry=3):
        url = self.aol + f'/read/state?user={quote(self.mmmmy)}&value=3'
        try:
            async with self.sessions.get(url) as res:
                if res.status ==200:
                    res1 = await res.json()
                    if res1['status'] == True:
                        return True
                    else:
                        if res1['status'] == '-1' and max_retry>0:
                            await asyncio.sleep(5)
                            await self.get_read_state(max_retry-1)
                        return False
                else:
                    return False
        except Exception as e:
            self.log(f"捕获到请求状态异常:{e}")
            if max_retry == 0:
                return False
            await asyncio.sleep(3)
            await self.get_read_state(max_retry-1)

            
    async def run(self, ck:str,sleep_time=None):#
        if sleep_time:
            print(f"[用户{self.index}][等待]:{sleep_time}秒,加点延迟是最好的")
            await asyncio.sleep(sleep_time)
        await self.get_base_url()
        self.log(f"{'='*13}开始运行{'='*13}")
        self.cookie = ck
        self.mmmmy = self.cookie.split(';')[0]
        if await self.init_check_dict():
            # pass
            if await self.user_info():
                await self.get_article()
        self.cookie = ck  # 中途更换了一次cookie，提现要换回来
        await self.with_draw()
        self.log(f"{'='*13}运行结束{'='*13}")
        await self.close()

async def check_env():
    # 这里可以写完善一点的获取环境变量功能
    wxpuser_token = os.getenv("WXPUSER_TOKEN")
    topicid = os.getenv("WXPUSER_TOPICID")
    wxpuser_uid = os.getenv("WXPUSER_UID")
    cks = os.getenv('klydcks5')
    if cks is None:
        print("可乐阅读ck为空,请去抓包格式:'PHPSESSID=xxxxx; udtauth3==xxxxxxxxxxx' 多账户请用@分割")
        print('cookie填写:export klydcks="PHPSESSID=xxxxx; udtauth3==xxxxxxxxxxx"')
        exit()
    if wxpuser_token is None:
        print("wxpuser的apptoken为空,前往官网注册创建一个app,复制应用token和微信关注wxpuser公众号获取uid")
        print("获取完请在配置文件填写:export WXPUSER_TOKEN=AT_aYF2.....\nexport WXPUSER_UID=UID_....")
        exit()
    if topicid is None and wxpuser_uid is None:
        print("wxpuser的topicid和WXPUSER_UID都为空,请至少填写其中一个")
        exit()
    correct_data = []
    ck_list = cks.split("@")
    wxpuser_list = wxpuser_uid.split('@')
    for index ,ck in enumerate(ck_list):
        if 'PHPSESSID' in ck:
            correct_data.append(ck)
        else:
            print(f"[账号{index+1}][错误]:填写格式不对正确的格式是在配置文件填写export klydcks='PHPSESSID=xxxx....' 或者环境变量新建 变量名:klydcks 值:PHPSESSID=xxxxx; udtauth3==xxxxxxxxxxx.   多账号用@分割")
    if len(correct_data) > len(wxpuser_list):
        print(f"[警告][格式]:wxpuser_uid的数量与填写cookie的数量不一致,将默认第一个wxpuser_uid填补完整")
        fill_count = len(ck_list) - len(wxpuser_list)
        wxpuser_list.extend([wxpuser_list[0]] * fill_count)
    return correct_data, wxpuser_list, topicid, wxpuser_token

async def test_api(url):
    print("开始测试检测服务可用性")
    api_url = url + '/read/announcement'
    try:
        async with aiohttp.ClientSession() as client:
            async with client.get(api_url) as res:
                if res.status ==200:
                    result = await res.json()
                    print(f"[公告]:{result['messages']}")
                    return True
                else:
                    return False
    except Exception as e:
        print(f"出错了,稍后再来:{e}")

async def main():
    cks_list, wxpuser_list, topicid, wxpuser_token = await check_env()
    api_url = 'http://110.41.145.200:8088'
    if await test_api(api_url):
        print(f"[测试]:成功,服务当前可用")
    else:
        print(f"[测试]:失败,服务当前不可用,可能服务器断电、断网了,稍后再来吧")
        exit()
    # 检查是否存在环境变量 multi
    use_concurrency = os.environ.get('kl_multi', 'false').lower() == 'true'
    tasks = []
    delay = os.getenv("gbyd_delay",'30')
    random_sleep_list = [i * random.randint(int(delay), int(delay)+15) for i in range(len(cks_list))]
    for index, ck in enumerate(cks_list):
        abc = template(api_url, index+1, wxpuser_token, topicid, wxpuser_list[index])
        task = abc.run(ck, random_sleep_list[index])
        tasks.append(task)
    if use_concurrency:  # 如果是true 那么就执行并发
        await asyncio.gather(*tasks)  # 并发执行任务
    else:  # 如果是false 那么就串行执行
        for task in tasks:
            await task  

if __name__ == '__main__':
    asyncio.run(main())
