＃陌陌极速版App签到
https：\ / \ / mk \ .immomo \ .com \ / activity \ / fastsign \ / index \ / signIn？url脚本请求正文momosign.js
＃定时
0 2,13,25,45,55 0-23 * *？momosign.js，标记=陌生极极速版签到，enabled = false
mit = mk.immomo.com
// ===================================
#loon陌陌极速版App签到
http请求https：\ / \ / mk \ .immomo \ .com \ / activity \ / fastsign \ / index \ / signIn？script-path = momosign.js，requires-body = true，超时= 30，标记=陌生极极速版
mit = mk.immomo.com
* /




// ===================================
const  $ iosrule  =  iosrule （）;

const  log = 0

// ++++++++++++++++++++++++++++++++-


const  momo = “陌陌极速版APP” ;
const  momourlname = “ momourlname” ;
const  momobdname = “ momobdname” ;
const  momohdname = “ momohdname” ;
const  momourl = $ iosrule 。阅读（momourlname ）;
const  momobd = $ iosrule 。阅读（momobdname ）;
const  momohd = $ iosrule 。阅读（momohdname ）;
// ++++++++++++++++++++++++++++++++++

// 3。需要执行的函数都写这里
 主要功能（）
{         momo_begin （）;
}

功能 momo_begin （）
{
momo_sign （）;


}


// ++++++++++++++++++++++++++++++++++++++
// 4。基础模板

如果 （$ iosrule 。isRequest ） {
  momo_getck （）
  $ iosrule 。结束（）
} 其他 {
  主（）;
  $ iosrule 。结束（）
}

功能 momo_sign （）
  {
   var  result1 = “ [签到😯]” ;
   var  result2 = “” ;



  const  llUrl1 = {
      网址：momourl ，
      标头：JSON 。解析（momohd ），
      身体：妈妈，
      超时：600 } ;
     控制台。日志（momourl ）
     
     控制台。日志（momohd ）
          控制台。日志（momobd ）
  $ iosrule 。发布（llUrl1 ，函数（错误， 响应， 数据） {
if （log == 1 ）控制台。日志（JSON 。字符串化（数据））


result2 = “签到成功” ;

爸爸（momo ，result1 ，result2 ）;

} ）}

  
 


功能 momo_getck （） {

  如果 （$请求。头） {

 var  urlval  =  $ request 。网址;
var  md_bd = $ request 。身体;
var  md_hd = $ request 。标头;
如果（urlval 。的indexOf （“活性/ fastsign /索引/登入” ） > = 0 ）
{

 var  sk =  $ iosrule 。写（urlval ，momourlname ）;
 var  sl =  $ iosrule 。写（JSON 。字符串化（md_hd ），momohdname ）;
 var  sm =  $ iosrule 。写（md_bd ，momobdname ）;

如果 （sk == true && sl == true && sm == true ） 
 papa （momo ，“ [获取签到数据]” ，“✌🏻成功” ）；}



  
} }









函数 papa （x ，y ，z ）{

$ iosrule 。通知（x ，y ，z ）; }
函数 getRandom （start ， end ， fixed =  0 ） {
  让 不同 = 结束 - 开始
  让 random  =  Math 。随机（）
  返回 （开始 + 不同*随机）。toFixed （固定）
}




功能 iosrule （） {
    const  isRequest  =  typeof  $ request！= “未定义”
    const  isSurge  =  typeof  $ httpClient！= “未定义”
    const  isQuanX  =  typeof  $ task！= “未定义”
    const  notify  =  （标题， 字幕， 消息） =>  {
        if  （isQuanX ） $ notify （title ， subtitle ， message ）
        if  （isSurge ） $ notification 。帖子（标题， 副标题， 消息）
    }
    const  write  =  （value ， key ） =>  {
        如果 （isQuanX ） 返回 $ prefs 。setValueForKey （value ， key ）
        如果 （isSurge ） 返回 $ persistentStore 。写（值， 键）
    }
    const  read  =  （key ） =>  {
        如果 （isQuanX ） 返回 $ prefs 。valueForKey （键）
        如果 （isSurge ） 返回 $ persistentStore 。读（键）
    }
    const  get  =  （options ， callback ） =>  {
        如果 （isQuanX ） {
            if  （typeof  options  ==  “ string” ） options  =  { 网址：options  }
            options [ “方法” ]  =  “获取”
            $ task 。获取（选项）。然后（response  =>  {
                response [ “状态” ]  = 响应。statusCode
                回调（空， 响应， 响应。体）
            } ， 原因 => 回调（原因。错误， null ， null ））
        }
        如果 （isSurge ） $ httpClient 。get （options ， callback ）
    }
    const  post  =  （options ， callback ） =>  {
        如果 （isQuanX ） {
            if  （typeof  options  ==  “ string” ） options  =  { 网址：options  }
            选项[ “方法” ]  =  “开机自检”
            $ task 。获取（选项）。然后（response  =>  {
                response [ “状态” ]  = 响应。statusCode
                回调（空， 响应， 响应。体）
            } ， 原因 => 回调（原因。错误， null ， null ））
        }
        如果 （isSurge ） $ httpClient 。发布（options ， callback ）
    }
    const  end  =  （） =>  {
        如果 （isQuanX ） isRequest？$ done （{ } ）：“”
        如果 （isSurge ） isRequest？$ done （{ } ）：$ done （）
    }
    return  { isRequest ， isQuanX ， isSurge ， notify ， write ， read ， get ， post ， end }
} ;
