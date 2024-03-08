
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"012d456ef1","applicationID":"6138185","transactionName":"ZlVWZUpVXxECUkBaCl8fdWJoG1UHBVBBXxEfUUdBQA==","queueTime":1,"applicationTime":62,"agent":"","atts":""}</script><script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={licenseKey:"012d456ef1",applicationID:"6138185"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n,r){return function(){return s.recordSupportability("API/"+e+"/called"),o(t+e,[u.now()].concat(c(arguments)),n?null:this,r),n?void 0:this}}var o=t("handle"),a=t(9),c=t(10),f=t("ee").get("tracer"),u=t("loader"),s=t(4),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",v=l+"ixn-";a(p,function(t,e){d[e]=i(l,e,!0,"api")}),d.addPageAction=i(l,"addPageAction",!0),d.setCurrentRouteName=i(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(v+"tracer",[u.now(),t,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw f.emit("fn-err",[arguments,this,t],n),t}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(v,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),s.recordSupportability("API/noticeError/called"),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(o){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],4:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return o("storeMetric",n,null,"api"),n}function i(t,e){var n=[c,t,{name:t},e];return o("storeEventMetrics",n,null,"api"),n}var o=t("handle"),a="sm",c="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:c},recordSupportability:r,recordCustom:i}},{}],5:[function(t,e,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=t(11);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],6:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?l("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&l("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(u&&u<r.startTime)return;var i=[r],o=a({});o&&i.push(o),l("lcp",i)}}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||l("cls",[t])})}function a(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e)return e.type&&(t["net-type"]=e.type),e.effectiveType&&(t["net-etype"]=e.effectiveType),e.rtt&&(t["net-rtt"]=e.rtt),e.downlink&&(t["net-dlink"]=e.downlink),t}function c(t){if(t instanceof y&&!w){var e=Math.round(t.timeStamp),n={type:t.type};a(n),e<=v.now()?n.fid=v.now()-e:e>v.offset&&e<=Date.now()?(e-=v.offset,n.fid=v.now()-e):e=v.now(),w=!0,l("timing",["fi",e,n])}}function f(t){"hidden"===t&&(u=v.now(),l("pageHide",[u]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var u,s,d,p,l=t("handle"),v=t("loader"),m=t(8),g=t(3),y=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){s=new PerformanceObserver(r);try{s.observe({entryTypes:["paint"]})}catch(h){}d=new PerformanceObserver(i);try{d.observe({entryTypes:["largest-contentful-paint"]})}catch(h){}p=new PerformanceObserver(o);try{p.observe({type:"layout-shift",buffered:!0})}catch(h){}}if("addEventListener"in document){var w=!1,b=["click","keydown","mousedown","pointerdown","touchstart"];b.forEach(function(t){document.addEventListener(t,c,g(!1))})}m(f)}},{}],7:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}e.exports={agent:i,version:o,match:r}},{}],8:[function(t,e,n){function r(t){function e(){t(c&&document[c]?document[c]:document[o]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,i(!1))}var i=t(3);e.exports=r;var o,a,c;"undefined"!=typeof document.hidden?(o="hidden",a="visibilitychange",c="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",a="webkitvisibilitychange",c="webkitVisibilityState")},{}],9:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],10:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],11:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var c=e(i),f=m(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[w[n]];return p&&p.push([b,n,r,c]),c}}function o(t,e){h[t]=m(t).concat(e)}function v(t,e){var n=h[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return h[t]||[]}function g(t){return p[t]=p[t]||i(n)}function y(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var h={},w={},b={on:o,addEventListener:o,removeEventListener:v,emit:n,get:g,listeners:m,context:e,buffer:y,abort:c,aborted:!1};return b}function o(t){return u(t,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=t("gos"),s=t(9),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!M++){var t=T.info=NREUM.info,e=m.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(x,function(e,n){t[e]||(t[e]=n)});var n=a();c("mark",["onload",n+T.offset],null,"api"),c("timing",["load",n]);var r=m.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===m.readyState&&o()}function o(){c("mark",["domContent",a()+T.offset],null,"api")}var a=t(5),c=t("handle"),f=t(9),u=t("ee"),s=t(7),d=t(2),p=t(3),l=d.getConfiguration("ssl")===!1?"http":"https",v=window,m=v.document,g="addEventListener",y="attachEvent",h=v.XMLHttpRequest,w=h&&h.prototype,b=!1;NREUM.o={ST:setTimeout,SI:v.setImmediate,CT:clearTimeout,XHR:h,REQ:v.Request,EV:v.Event,PR:v.Promise,MO:v.MutationObserver};var E=""+location,x={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1216.min.js"},O=h&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(6),m[g]?(m[g]("DOMContentLoaded",o,p(!1)),v[g]("load",r,p(!1))):(m[y]("onreadystatechange",i),v[y]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var M=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],t)}c(n+"start",[o,a,f],s,u);try{return p=e.apply(a,o)}catch(v){throw c(n+"err",[o,a,v],s,u),v}finally{c(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)f=e[u],c=t[f],a(c)||(t[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!v||e){var c=v;v=!0;try{t.emit(n,r,o,e,a)}catch(f){i([f,n,r,o],t)}v=c}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function c(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function f(t,e,n){var r=t[e];t[e]=c(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(10),p="nr@original",l=Object.prototype.hasOwnProperty,v=!1;e.exports=r,e.exports.wrapFunction=c,e.exports.wrapInPlace=f,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
    <!-- Yahoo/Bing -->
    <meta name="y_key" content="51da898776fd08b4" /><meta name="msvalidate.01" content="79D2B9A7FFFBD0598061E44841D3DF00" /><title>
	Digicel - Pacific
</title><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /><link rel="icon" href="/favicon.ico" type="image/x-icon" /><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><script src="/js/jquery?v=2FDo_pO1uopSujkqhLX_Y0yrFysMMVeCSGz8PSDzDsc1"></script>
<link href="/css/site?v=YiA0P_OURbd6gHEZrrk2SpCnI7Ivy6B-HYCnmgLh7wk1" rel="stylesheet"/>
<script src="/js/popup?v=2S_1Lzgh9Ye3obQ1tt4jRD7EdhQHQ5mgyoi_izQIViw1"></script>
<link href="/css/fontawesome?v=" rel="stylesheet"/>
<meta name="KEXServer" content="WDCVM005-2022" />
    <meta name="description" content="Send money from New Zealand or Australia to family & friends in the Pacific. Tonga, Samoa & Fiji. It's cheap and fast. The lowest fees and money is sent instantly!"/>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NWGQR138R1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NWGQR138R1');
</script>  
<script type="text/javascript" language="Javascript">      
/* Is this outdated?! */
        (function () {
            var _fbq = window._fbq || (window._fbq = []);
            if (!_fbq.loaded) {
                var fbds = document.createElement('script');
                fbds.async = true;
                fbds.src = '//connect.facebook.net/en_US/fbds.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(fbds, s);
                _fbq.loaded = true;
            }
        })();
        window._fbq = window._fbq || [];
        window._fbq.push(['track', '6023658270432', { 'value': '0.00', 'currency': 'USD' }]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6023658270432&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1" /></noscript><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1691370371118398&ev=PageView&noscript=1" /></noscript></head>
<body>
<center>
<div class="innerBody" style="text-align:left;">
    <div>
    <form name="aspnetForm" method="post" action="./" id="aspnetForm">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJODg5MjAzNDQyDxYCHhNWYWxpZGF0ZVJlcXVlc3RNb2RlAgEWAmYPZBYCAgEPZBYKAgQPDxYEHgtOYXZpZ2F0ZVVybAUMfi9sb2dpbi5hc3B4HgRUZXh0BQVMb2dpbhYCHgV0aXRsZQUFTG9naW5kAgsPZBYCAgEPZBYCAgEPZBYKAgEPEGQPFgVmAgECAgIDAgQWBRAFDkZpamkgKERpZ2ljZWwpBQRERkpEZxAFDVBORyAoRGlnaWNlbCkFBERQR0tnEAUPVG9uZ2EgKERpZ2ljZWwpBQREVE9QZxAFEVZhbnVhdHUgKERpZ2ljZWwpBQREVlVWZxAFD1NhbW9hIChEaWdpY2VsKQUERFdTVGdkZAIDDxBkDxYFZgIBAgICAwIEFgUQBQ5GaWppIChEaWdpY2VsKQUEREZKRGcQBQ1QTkcgKERpZ2ljZWwpBQREUEdLZxAFD1RvbmdhIChEaWdpY2VsKQUERFRPUGcQBRFWYW51YXR1IChEaWdpY2VsKQUERFZVVmcQBQ9TYW1vYSAoRGlnaWNlbCkFBERXU1RnZGQCBQ8QZA8WBWYCAQICAgMCBBYFEAUORmlqaSAoRGlnaWNlbCkFBERGSkRnEAUNUE5HIChEaWdpY2VsKQUERFBHS2cQBQ9Ub25nYSAoRGlnaWNlbCkFBERUT1BnEAURVmFudWF0dSAoRGlnaWNlbCkFBERWVVZnEAUPU2Ftb2EgKERpZ2ljZWwpBQREV1NUZ2RkAgcPEGQPFgVmAgECAgIDAgQWBRAFDkZpamkgKERpZ2ljZWwpBQRERkpEZxAFDVBORyAoRGlnaWNlbCkFBERQR0tnEAUPVG9uZ2EgKERpZ2ljZWwpBQREVE9QZxAFEVZhbnVhdHUgKERpZ2ljZWwpBQREVlVWZxAFD1NhbW9hIChEaWdpY2VsKQUERFdTVGdkZAIJDxBkDxYCZgIBFgIQBRJOZXcgWmVhbGFuZCBEb2xsYXIFA05aRGcQBRFBdXN0cmFsaWFuIERvbGxhcgUDQVVEZ2RkAgwPFgIeB1Zpc2libGVnZAINDw8WAh8CBTDCqSAyMDI0IEtsaWNrRXggUGFjaWZpYyBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWRkZAIQDw8WAh8CBQVmYWxzZWRkZJPqGtO9XPHeJgasMNWaLuEmbens" />
</div>

<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="CA0B0334" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdABjyI+cAUiSOe5Ls8/UVzZagbWSwbfpsTgFQ+DOjpE2biWZHv5KRy9yCYUCpWDuL/M2IkeTgqJoJxXjSF5DkweEu04pQX9Eb/AnIahs4kxf7xh9cQGOACaGOjQsbMQm611rRIVRStKUzEXJcLT5YOlFC4Sjwm5leFfiT8BfOmvM1epQc3eNzP0NCBnfLLj2KYOWAlqlbqnwG3wj+3+GPRrhKudqjNIDE7a304SCblhmC5nZbM2MTUsE4flqWiExTzjgeK+D2KCrHwVTnWdV/IJhax+7qIa/pJR9SKi9vCR3ptUjgSJpd9QL+kfcP8Q1u8uf+xl3lkYhTjMsKWP3CK01d9Id4qqZL23gYWznOVg5sHfMwSlynjxncnezIfFNzRF6TPplQP0fo1bZpdT1Hm6UWYjPKGPmD1rdKyilElgr8Qn1/gklojZbdbVWAGvMlC19D80HKgdAM5q9NEicKeh95ormgoRrSVfdgZgCZprH08YtKQVfKnga6rqJxhuo9R/uHBXZBAww544SzODdEm2QyQUVbfw==" />
</div>
    <table border="0" cellspacing="0" cellpadding="0" width="965">
    <tr>
        <td colspan="2" style="padding-top:10px;">
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
                <td style="width:225px;padding-left:10px;" align="left" valign="bottom">
                    <a id="ctl00_hlLogoLink" title="Digicel - Pacific" href="default.aspx">
                        <img src="/images/Digicel-logo-2.jpg" width="221" height="62" border="0" alt="Digicel - Pacific">
                    </a>
                </td>
                <td style="padding-left:5px;">
                    <table border="0" cellspacing="0" cellpadding="0" width="98%" style="margin-bottom:13px;">
                    <tr>
                        <td align="right">
                            <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td valign="middle" NOWRAP>
                                    <div id="ctl00_pnlNotAuthenticated">
	
                                        <a href="/login.aspx" title="Login">Login</a> &nbsp;|&nbsp; <a href="/register.aspx" title="Sign Up">Sign Up</a>
                                    
</div>
                                    
                                </td>
                                
                                <!-- <td valign="middle" style="padding-left:5px;" NOWRAP>&nbsp;|&nbsp; <a href="/help/agentlocations.aspx" title="Find an Agent">Find an Agent</a></td> -->
                                <!-- <td valign="middle" style="padding-left:5px;" NOWRAP>&nbsp;|&nbsp; <a href="/contact.aspx" title="Contact Us">Contact Us</a></td> -->
                                <td valign="middle" style="padding-left:23px;display:none;"><td>
                                <td valign="middle" style="padding-left:6px;display:none;"></td>
                                <td valign="middle" style="padding-left:10px;"></td>
                                <td valign="bottom" style="padding-left:10px;">
                                    <a href="https://twitter.com/klickexgroup" target="_blank" title="Follow Us On Twitter">
                                        <i class="fab fa-twitter-square" style="font-size: 22px;color:darkblue"></i>
                                    </a>
                                </td>
                                <td valign="bottom" style="padding-left:10px;">
                                    <a href="https://www.facebook.com/klickexpacific" target="_blank" title="Visit Us On FaceBook">
                                        <i class="fab fa-facebook" style="font-size: 22px;color:darkblue"></i>
                                    </a>
                                </td>
                                <td valign="bottom" style="padding-left:10px;">
                                    <a href="https://nz.linkedin.com/company/klickex-corporation" target="_blank" title="Visit Us On LinkedIn">
                                        <i class="fab fa-linkedin" style="font-size: 22px;color:darkblue"></i>
                                    </a>
                                </td>
                                <td valign="bottom" style="padding-left:10px;">
                                    <a href="https://www.instagram.com/klickex_pacific/" target="_blank" title="Visit Us On Instagram">
                                        <i class="fab fa-instagram" style="font-size: 22px;color:darkblue"></i>
                                    </a>
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>
                    </table>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%" height="44">
                    <tr>
                        <td>
                            <img src="/images/topmenu_left.png" style="width:9px;height:44px;position:relative;left:9px;top:1px;">
                        </td>
                        <td>
                            <div class="folioCats" style="margin-top:-11px;">
                                <ul>
                                    <li class="inactive">
                                        <ul class="topnav">
                                            <li><span style="white-space:nowrap;"><a id="ctl00_hlLogin" title="Login" href="login.aspx">Login</a></span></li>
                                        </ul>
                                    </li>
                                    <li class="inactive"
                                        id="sendMoneyDrop" style="padding: 0; margin: 0; display: inline-block;">
                                        <div class="sendmoney_dropdown">
                                            <span onclick="displaySendMoneyLinks()"
                                                  class="sendmoney_dropbtn"
                                                  id="sendNow-button">Send Now</span>
                                            <div id="sendMoneyDropdown" class="sendmoney_dropdown_content">
                                                <a id="sendMoney-button" href="/sendmoney.aspx" title="Send Money">Send Money</a>
                                                <a id="sendTopUp-button" href="/sendmoney.aspx?paymenttype=TOPUP" title="Send Top Up">Send Top Up</a>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- <li class="inactive"><ul class="topnav"><li><span style="white-space:nowrap;"><a href="/voucher.aspx" title="Enter Voucher" >Enter Voucher</a></span></li></ul></li> -->
                                    <li class="inactive"><ul class="topnav"><li><span style="white-space:nowrap;"><a href="/help/how.aspx" title="How It Works" id="howItWorks-link">How It Works</a></span></li></ul></li>
                                    <li class="inactive"><ul class="topnav"><li><span style="white-space:nowrap;"><a href="/help/agentlocations.aspx" title="Find an Agent"  id="findAnAgent-link">Find an Agent</a></span></li></ul></li>
                                    <li class="inactive"><ul class="topnav"><li><span style="white-space:nowrap;"><a href="/contact.aspx" title="Contact"  id="contact-link">Contact</a></span></li></ul></li>
                                    <li class="inactive_last"><ul class="topnav"><li><span style="white-space:nowrap;"><a href="/about/aboutus.aspx" title="About" id="about-link">About</a></span></li></ul></li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <img src="/images/topmenu_right.png" style="width:9px;height:44px;position:relative;left:-9px;top:1px;">
                        </td>
                    </tr>
                    </table>
                </td>
            </tr>
            </table>
        </td>
    </tr>
    
    

    
    
    
    
    <tr>
        <td id="ctl00_MainContent" valign="top">
            <br />
            
    
    <div style="position: relative;padding-bottom:5px">
        <!-- Banner -->
        <img src="/images/banners/Generic_Digicel.jpg" width="100%" alt="DMM banner"
         style="position: relative; top: 0; left: 0; border-radius: 10px;"/>
    </div>

    <div style="width: 481px; height: 430px; float: left;">
        
<script type="text/javascript">
    var _paymentType = 'DMM';
    var _paymentMethod = 1; //Existing Balance
    var _rate = 1.0;

    $(window).bind("load", function() {

        document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_ALL').style.visibility = 'hidden';
        document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_DMM').style.visibility = 'hidden';
        document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_TOPUP').style.visibility = 'hidden';
        document.getElementById('paymentType').value = 'DMM';
        RefreshWorkingCurrencies();
        PreloadImages();

        $("#calcDemoTab1").click(
            function() {
                //Set new payment type
                _paymentType = 'DMM';

                //Change tab appearance
                document.getElementById('paymentType').value = 'DMM';
                document.getElementById('calcDemoTabTop').setAttribute('class', 'calcDemoTabTop1');
                document.getElementById('calcDemoTab1').style['color'] = '';
                document.getElementById('calcDemoTab2').style['color'] = '';

                RefreshWorkingCurrencies();

                //Ensure we return to first panel
                $("#prevBtn1").click();
            });

        $("#calcDemoTab2").click(
            function() {
                //Set new payment type
                _paymentType = 'TOPUP';

                //Change tab appearance
                document.getElementById('paymentType').value = 'TOPUP';
                document.getElementById('calcDemoTabTop').setAttribute('class', 'calcDemoTabTop2');
                document.getElementById('calcDemoTab1').style['color'] = '#FFFFFF';
                document.getElementById('calcDemoTab2').style['color'] = '#d70100';

                RefreshWorkingCurrencies();

                //Ensure we return to first panel
                $("#prevBtn1").click();
            });

        $("#nextBtn1").click(
            function () {

                //Retrieve controls
                var ddlSrcCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlSrcCurrencyID');
                var ddlDestCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID');
                var ddlWorkingCurrencyID = document.getElementById('ddlWorkingCurrencyID');
                var tbWorkingAmount = document.getElementById('ctl00_body_ucTransferMoney_tbWorkingAmount');

                RemoveSymbols(tbWorkingAmount);

                //Validate amount entered
                if (tbWorkingAmount.value != isNaN && tbWorkingAmount.value >= 2) {
                    //Retrieve field values
                    var srcCurrencyID = ddlSrcCurrencyID[ddlSrcCurrencyID.selectedIndex].value;
                    var destCurrencyID = ddlDestCurrencyID[ddlDestCurrencyID.selectedIndex].value;
                    var workingCurrencyID = ddlWorkingCurrencyID[ddlWorkingCurrencyID.selectedIndex].value;
                    var workingAmount = tbWorkingAmount.value;

                    $.ajax({
                        type: "POST",
                        url: "/PacificRateComponent/getDailyLimit",
                        data: "srcCurrencyID=" + srcCurrencyID +
                            "&destCurrencyID=" + destCurrencyID +
                            "&workingCurrencyID=" + workingCurrencyID +
                            "&workingAmount=" + workingAmount,
                        success: function (data) {
                            if (validAjaxResponse(data)) {
                                var sLimitArray = data.split('|');

                                var NZDConverted = parseFloat(sLimitArray[0]);
                                var NZDLimit = parseFloat(sLimitArray[1]);

                                if (NZDConverted > NZDLimit) {
                                    alert('The limit which can be transferred over a 24 hour period is the equivalent of ' + sLimitArray[2] + ' NZD');
                                    tbWorkingAmount.focus();

                                } else {
                                    AjaxPopulateDeal(1, srcCurrencyID, destCurrencyID, workingAmount, workingCurrencyID);
                                }

                            }
                        }
                    });
                }
                else {
                    alert('Please enter an amount of 2.00 or more.');
                }

            });

        $("#prevBtn1").click(
            function() {
                document.getElementById('divPanel2').style['display'] = 'none';
                document.getElementById('divPanel1').style['display'] = 'block';

                //Update progress bar
                document.getElementById('bcStep1').style['color'] = '#DC291E';
                document.getElementById('bcStep2').style['color'] = '';

            });

        $("#nextBtnContinue").click(
            function() {
                //Retrieve controls
                var ddlSrcCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlSrcCurrencyID');
                var ddlDestCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID');
                var ddlWorkingCurrencyID = document.getElementById('ddlWorkingCurrencyID');
                var tbWorkingAmount = document.getElementById('ctl00_body_ucTransferMoney_tbWorkingAmount');

                //Validate amount entered
                if (tbWorkingAmount.value != isNaN && tbWorkingAmount.value >= 1) {
                    //Retrieve field values
                    var srcCurrencyID = ddlSrcCurrencyID[ddlSrcCurrencyID.selectedIndex].value;
                    var destCurrencyID = ddlDestCurrencyID[ddlDestCurrencyID.selectedIndex].value;
                    var workingCurrencyID = ddlWorkingCurrencyID[ddlWorkingCurrencyID.selectedIndex].value;
                    var workingAmount = tbWorkingAmount.value;

                    //Redirect to send money
                    document.location.href = '/sendmoney.aspx?srccurrencyid=' + srcCurrencyID + '&' +
                                                                      'destcurrencyid=' + destCurrencyID + '&' +
                                                                      'workingcurrencyid=' + workingCurrencyID + '&' +
                                                                      'amount=' + workingAmount + '&' +
                                                                      'paymenttype=' + _paymentType;
                }
            });

        $("#ctl00_body_ucTransferMoney_ddlDestCurrencyID").change(
            function() {
                RefreshWorkingCurrencies();
            });

        $("#ctl00_body_ucTransferMoney_ddlSrcCurrencyID").change(
            function() {
                RefreshWorkingCurrencies();
            });

        $("#ddlWorkingCurrencyID").change(
        function() {
            RefreshWorkingCurrencySymbol();
        });
    });

    //Checks if an ajax response is valid
    function validAjaxResponse( data )
    {
        return ( data.length > 0 && data.toLowerCase().indexOf('html',0) == -1 );
    }

    //Preload calculator tabs
    function PreloadImages() {
        if (document.images) {
          preload_image_object = new Image();

          // set image url
          image_url = new Array();
          image_url[0] = '/images/calcdemo/calcdemo_tab_top_1.png';
          image_url[1] = '/images/calcdemo/calcdemo_tab_top_2.png';

           var i = 0;
           for (i = 0; i < image_url.length; i++) {
               preload_image_object.src = image_url[i];
           }
        }
    }

    function RefreshWorkingCurrencies() {
        var ddlSrcCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlSrcCurrencyID');
        var ddlDestCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID');

        var ddlDestCurrencyID_ALL = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_ALL');
        var ddlDestCurrencyID_DMM = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_DMM');
        var ddlDestCurrencyID_TOPUP = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID_TOPUP');

        var sDestCurrencyID_SelectedIndex = ddlDestCurrencyID.selectedIndex;

        while (ddlDestCurrencyID.length > 0) {
            ddlDestCurrencyID.remove(0);
        }

        if (_paymentType === 'DMM') {
            for (var i = 0; i < ddlDestCurrencyID_DMM.length; i++) {
                var option = document.createElement('option');
                option.text = ddlDestCurrencyID_DMM.options[i].text;
                option.value = ddlDestCurrencyID_DMM.options[i].value;
                ddlDestCurrencyID.add(option);
            }
            document.getElementById("sendMoneyRateComparer-button").style["display"] = "block";
        } else {
            for (var i = 0; i < ddlDestCurrencyID_TOPUP.length; i++) {
                var option = document.createElement('option');
                option.text = ddlDestCurrencyID_TOPUP.options[i].text;
                option.value = ddlDestCurrencyID_TOPUP.options[i].value;
                ddlDestCurrencyID.add(option);
            }
            document.getElementById("sendMoneyRateComparer-button").style["display"] = "none";
        }

        if (sDestCurrencyID_SelectedIndex < ddlDestCurrencyID.length)
            ddlDestCurrencyID.selectedIndex = sDestCurrencyID_SelectedIndex;
        else
            ddlDestCurrencyID.selectedIndex = 0;


        var sSrcCurrencyID = ddlSrcCurrencyID[ddlSrcCurrencyID.selectedIndex].value;
        var sDestCurrencyID = ddlDestCurrencyID[ddlDestCurrencyID.selectedIndex].value;

        var sSrcCurrencyName = sSrcCurrencyID;
        var sDestCurrencyName = sDestCurrencyID;
        if (sSrcCurrencyID.indexOf('D', 0) == 0) sSrcCurrencyName = sSrcCurrencyID.substr(1);
        sDestCurrencyName = sDestCurrencyID.substr(1);

        ddlDestCurrencyID_ALL.style.visibility = 'hidden';

        $('#ddlWorkingCurrencyID').children().remove();
        $('#ddlWorkingCurrencyID')
            .append('<option value="' + sDestCurrencyID + '">' + sDestCurrencyName + '</option>');
        $('#ddlWorkingCurrencyID')
            .append('<option value="' + sSrcCurrencyID + '">' + sSrcCurrencyName + '</option>');

        //Refresh working currency symbol
        RefreshWorkingCurrencySymbol();
    }


    function RefreshWorkingCurrencySymbol() {
        var ddlWorkingCurrencyID = document.getElementById('ddlWorkingCurrencyID');
        var workingCurrencyID = ddlWorkingCurrencyID[ddlWorkingCurrencyID.selectedIndex].value;

        $.ajax({
            type: "POST",
            url: "/PacificRateComponent/GetSymbol",
            data: "currencyID=" + workingCurrencyID,
            success: function(data) {
                if (validAjaxResponse(data))
                {
                    //Display appropriate working currency symbol
                    var spWorkingCurrencySymbol = document.getElementById('spWorkingCurrencySymbol');
                    spWorkingCurrencySymbol.innerHTML = data;
                }
            }
        });
    }
       
    function AjaxCheckDailyLimit() {
        //Retrieve controls
        var ddlSrcCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlSrcCurrencyID');
        var ddlDestCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID');
        var ddlWorkingCurrencyID = document.getElementById('ddlWorkingCurrencyID');
        var tbWorkingAmount = document.getElementById('ctl00_body_ucTransferMoney_tbWorkingAmount');

        RemoveSymbols(tbWorkingAmount);

        //Validate amount entered
        if (tbWorkingAmount.value != isNaN && tbWorkingAmount.value >= 1) {
            //Retrieve field values
            var srcCurrencyID = ddlSrcCurrencyID[ddlSrcCurrencyID.selectedIndex].value;
            var destCurrencyID = ddlDestCurrencyID[ddlDestCurrencyID.selectedIndex].value;
            var workingCurrencyID = ddlWorkingCurrencyID[ddlWorkingCurrencyID.selectedIndex].value;
            var workingAmount = tbWorkingAmount.value;

            $.ajax({
                type: "POST",
                url: "/PacificRateComponent/getDailyLimit",
                data: "srcCurrencyID=" + srcCurrencyID +
                    "&destCurrencyID=" + destCurrencyID +
                    "&workingCurrencyID=" + workingCurrencyID +
                    "&workingAmount=" + workingAmount,

                success: function(data) {
                    if (validAjaxResponse(data)) {
                        var sLimitArray = data.split('|');

                        var NZDConverted = parseFloat(sLimitArray[0]);
                        var NZDLimit = parseFloat(sLimitArray[1]);

                        if (NZDConverted > NZDLimit) {
                            alert('The limit which can be transferred over a 24 hour period is the equivalent of ' + sLimitArray[2] + ' NZD');
                            tbWorkingAmount.focus();
                        }

                    }
                }
            });
        }
    }

    function AjaxPopulateDeal(dealType,
        srcCurrencyID,
        destCurrencyID,
        workingAmount,
        workingCurrencyID) {
        $.ajax({
            type: "POST",
            url: "/CustomerInteraction/GetDeal",
            data: "paymentType=" + _paymentType +
                "&paymentMethod=" + _paymentMethod +
                "&dealType=" + dealType +
                "&srcCurrencyID=" + srcCurrencyID +
                "&destCurrencyID=" + destCurrencyID +
                "&workingCurrencyID=" + workingCurrencyID +
                "&workingAmount=" + workingAmount,
            success: function(data) {
                if (validAjaxResponse(data) && data != 'NaN') {
                    var sDealArray = data.split('|');

                    //0  - sCostToSend
                    //1  - sWorkingAmount
                    //2  - sSendingAmount (Excl Fees)
                    //3  - sReceivedAmount
                    //4  - sRate
                    //5  - sTrueRate
                    //6  - sSaving
                    //7  - sTotalFee
                    //8  - sTransferFee
                    //9  - sPayPalFee
                    //10 - sCostToSendActual
                    //11 - sWorkingAmountActual
                    //12 - sSendingAmountActual
                    //13 - sReceivedAmountActual
                    //14 - sSavingActual
                    //15 - sTotalFeeActual
                    //16 - sTransferFeeActual
                    //17 - sPayPalFeeActual

                    //Populate cost to send
                    document.getElementById('spSrcCost').innerHTML = sDealArray[0];

                    //Populate working amount
                    document.getElementById('spDestAmount').innerHTML = sDealArray[1];

                    //Populate amount received in destination country
                    document.getElementById('spReceivedAmount').innerHTML = sDealArray[3];

                    //Store exchange rate
                    _rate = sDealArray[4];

                    //Populate destination country
                    var ddlDestCurrencyID = document.getElementById('ctl00_body_ucTransferMoney_ddlDestCurrencyID');
                    document.getElementById('spDestCountry').innerHTML = ddlDestCurrencyID[ddlDestCurrencyID.selectedIndex].text;

                    //Populate transaction summary
                    document.getElementById('spAmountToTransfer').innerHTML = sDealArray[2];
                    document.getElementById('spExchangeRate').innerHTML = sDealArray[4];
                    document.getElementById('spTransferFee').innerHTML = sDealArray[8];
                    document.getElementById('spTotalCost').innerHTML = sDealArray[0];

                    document.getElementById('divPanel1').style['display'] = 'none';
                    document.getElementById('divPanel2').style['display'] = 'inline';

                    //Update progress bar
                    document.getElementById('bcStep1').style['color'] = '';
                    document.getElementById('bcStep2').style['color'] = '#DC291E';

                    //Send virtual page view to Google Analytics
                    if (_paymentType === 'DMM')
                        gtag('event', 'page_view', {
                            'page_path': '/tested-send-money'
                        });
                    else {
                        gtag('event', 'page_view', {
                            'page_path': '/tested-send-topup'
                        });
                    }
                }
                else {
                    alert('The amount supplied is not a recognized number.');
                }
            }
        });
    }

    //Remove all non numeric characters
    function RemoveSymbols(cntrl) {
        var out = '';

        for (x = 0; x < cntrl.value.length; x++) {
            var c = cntrl.value.charAt(x);

            if ((!isNaN(c) || c == '.' || c == ',') && c != ' ') out += c;
        }

        cntrl.value = out;
    }
</script>

<p hidden id="paymentType" name="paymentType">DMM</p>
<div id="calcDemo">
    <div id="calcDemoHead">
        <div style="padding-top:17px;padding-left:19px;padding-right:19px;">
            <div id="calcDemoHeading">Rate Calculator</div>
            <div id="calcDemoHeadingDesc">Enter your details below and we'll calculate the rate for you. With the best value fees in the Pacific more of your money makes it back home.</div>
        </div>
    </div>
    <div id="calcDemoTabs">
        <div id="calcDemoTabLeft"><img src="/images/null.gif" width="10" height="1"></div>
        <div id="calcDemoTabTop" class="calcDemoTabTop1" style="float:left;">
            <div id="calcDemoTab1" style="cursor:pointer;"><div style="padding-top:10px;text-align:center;">Send Money</div></div>
            <div id="calcDemoTab2" style="cursor:pointer;"><div style="padding-top:10px;text-align:center;">Send Top Up</div></div>
        </div>
        <div style="clear:both;"></div>
    </div>
    <div id="calcDemoBody">
        <div style="padding-top:12px;padding-left:20px;padding-right:19px;">
            <div id="progressLeft" class="ProgressSmLeftFilled"></div>
            <div id="progressMid" class="ProgressSmMidFilled" style="width:200px">
                <div id="bcStep1" style="color:#DC291E;padding-top:14px;">Enter Details</div>
            </div>
            <div id="progressArrow" class="ProgressSmArrowFilled2"></div>
            <div id="progressMid2" class="ProgressSmMidFilled" style="width:200px">
                <div id="bcStep2" style="padding-top:14px;">View the Cost</div>
            </div>
            <div id="progressRight" class="ProgressSmRightFilled"></div>
            <div class="ProgressReset"></div>
            <div id="divPanel1">
                <div style="padding-top:15px;">
                    <table border="0" cellspacing="0" width="100%" cellpadding="2">
                        <tr>
                        <tr>
                            <td valign="middle" colspan="4">
                                I want to send to
                                <select name="ctl00$body$ucTransferMoney$ddlDestCurrencyID" id="ctl00_body_ucTransferMoney_ddlDestCurrencyID" class="DMTextbox" style="width:155px;">
	<option value="DFJD">Fiji (Digicel)</option>
	<option value="DPGK">PNG (Digicel)</option>
	<option value="DTOP">Tonga (Digicel)</option>
	<option value="DVUV">Vanuatu (Digicel)</option>
	<option value="DWST">Samoa (Digicel)</option>

</select>
                                <select name="ctl00$body$ucTransferMoney$ddlDestCurrencyID_ALL" id="ctl00_body_ucTransferMoney_ddlDestCurrencyID_ALL" class="DMTextbox" style="width:1px;">
	<option value="DFJD">Fiji (Digicel)</option>
	<option value="DPGK">PNG (Digicel)</option>
	<option value="DTOP">Tonga (Digicel)</option>
	<option value="DVUV">Vanuatu (Digicel)</option>
	<option value="DWST">Samoa (Digicel)</option>

</select>
                                <select name="ctl00$body$ucTransferMoney$ddlDestCurrencyID_DMM" id="ctl00_body_ucTransferMoney_ddlDestCurrencyID_DMM" class="DMTextbox" style="display:none;">
	<option value="DFJD">Fiji (Digicel)</option>
	<option value="DPGK">PNG (Digicel)</option>
	<option value="DTOP">Tonga (Digicel)</option>
	<option value="DVUV">Vanuatu (Digicel)</option>
	<option value="DWST">Samoa (Digicel)</option>

</select>
                                <select name="ctl00$body$ucTransferMoney$ddlDestCurrencyID_TOPUP" id="ctl00_body_ucTransferMoney_ddlDestCurrencyID_TOPUP" class="DMTextbox" style="display:none;">
	<option value="DFJD">Fiji (Digicel)</option>
	<option value="DPGK">PNG (Digicel)</option>
	<option value="DTOP">Tonga (Digicel)</option>
	<option value="DVUV">Vanuatu (Digicel)</option>
	<option value="DWST">Samoa (Digicel)</option>

</select>
                            </td>
                        </tr>
                        <tr><td colspan="2" style="padding-top:5px"></td></tr>
                        <tr>
                            <td valign="middle">
                                I want to send from my
                                <select name="ctl00$body$ucTransferMoney$ddlSrcCurrencyID" id="ctl00_body_ucTransferMoney_ddlSrcCurrencyID" class="DMTextbox">
	<option value="NZD">New Zealand Dollar</option>
	<option value="AUD">Australian Dollar</option>

</select>
                                account
                            </td>
                        </tr>
                        <tr><td colspan="2" style="padding-top:5px"></td></tr>
                        <tr>
                            <td valign="middle">
                                I want <span id="spWorkingCurrencySymbol">$</span>
                                <input name="ctl00$body$ucTransferMoney$tbWorkingAmount" type="text" id="ctl00_body_ucTransferMoney_tbWorkingAmount" value="0.00" class="DMTextbox" style="width:60px;" />
                                in
                                <select id="ddlWorkingCurrencyID" style="width:70px;" class="DMTextbox"></select>
                                to be received
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div id="nextBtn1">
                                    <a href="javascript:void(0);" id="nextBtn1Link" class="RedBtn30"
                                        style="float: left; margin-top: 5px;" title="View the Cost">
                                       Calculate
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 5px; clear: both;font-size: 12px;">
                        The rate calculator is a test and will not commit you to sending any money.
                    </div>
                    <a id="sendMoneyRateComparer-button" class="greenbutton-link" href="/RateComparer.aspx" target="_blank"
                                    style="float: left; margin-top: 5px;">
                                    See how our rates compare
                                </a>
                </div>
            </div>
            <div id="divPanel2" style="display:none;">
                <div style="padding-top:5px;">
                    <div style="width:60%;height:106px;float:left;border-right:solid 1px #E0E0E0;vertical-align:middle;margin-left:10px">
                        <div style="padding:15px 15px 0 0;font-size:11pt;">
                            It will cost <b><span id="spSrcCost">0.00</span></b> to send
                            <b><span id="spDestAmount">0.00</span></b> to someone in <span id="spDestCountry">___</span>
                            <br /><br />
                            They will receive <b><span id="spReceivedAmount">0.00</span></b>
                        </div>
                    </div>
                    <div style="width:35%;height:106px;float:left;text-align:center;">
                        <div id="calcDemoSoundGood"><div style="padding-top:10px;padding-bottom:10px;" class="render">Sound Good?</div></div>

                        <div style="padding: 0px 0px 5px 40px;"><a href="javascript:void(0);" id="nextBtnContinue" class="RedBtn30" title="Send it now"><span><div>Send it now</div></span></a></div>
                        <br /><br />
                        <span id="prevBtn1"><a href="javascript:void(0);" style="font-size:9pt;" id="prevBtn1Link">Enter another amount</a></span>
                    </div>
                    <div style="clear:both;height:5px;"></div>
                    <table border="0" cellspacing="0" cellpadding="0" class="DMTableStyleSummary">
                    <tr>
                        <th colspan="2" class="render">SUMMARY</th>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;width:260px;" class="render">Amount to Transfer</td>
                        <td style="border-left:solid 1px #E0E0E0;text-align:center;font-weight:bold;width:175px;" class="render"><span id="spAmountToTransfer"></span></td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;" class="render">Exchange Rate</td>
                        <td style="border-left:solid 1px #E0E0E0;text-align:center;font-weight:bold;" class="render"><span id="spExchangeRate"></span></td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;width:260px;" class="render">Transfer Fee</td>
                        <td style="border-left:solid 1px #E0E0E0;text-align:center;font-weight:bold;width:175px;" class="render"><span id="spTransferFee"></span></td>
                    </tr>
                    <tr>
                        <td style="font-weight:bold;color:#DC291E;" class="render">Total Cost</td>
                        <td style="border-left:solid 1px #E0E0E0;color:#DC291E;text-align:center;font-weight:bold;" class="render"><span id="spTotalCost"></span></td>
                    </tr>
                    </table>
                    <style>
                        table.DMTableStyleSummary
                        {
	                        border: solid 1px #e0e0e0;
                        }

                        table.DMTableStyleSummary th
                        {
	                        background-color:#f4f4f4;
	                        border-bottom:solid 1px #e0e0e0;
	                        font-size:9pt;
	                        color:#646464;
	                        text-align:left;
	                        height:20px;
	                        padding-left:10px;
                        }

                        table.DMTableStyleSummary td
                        {
                            background-color:#FFFFFF;
                            padding: 5px 2px 5px 10px;
                            vertical-align:middle;
                            color:#464646;
                            font-size:9pt;
                        }

                        a.greenbutton-link {
                            padding: 7px 10px 7px 10px;
                            border: solid 1px #FFFFFF;
                            position: relative;
                            cursor: pointer;
                            display: inline-block;
                            background-color:green;
                            font-size: 11px;
                            text-decoration: none;
                            color: #FFFFFF;
                            font-family:Arial;
                            font-size: 9pt;
                            font-weight:bold;

                            -moz-border-radius-bottomleft: 8px;
                            -moz-border-radius-bottomright: 8px;
                            -moz-border-radius-topleft: 8px;
                            -moz-border-radius-topright: 8px;

                            -webkit-border-bottom-left-radius: 8px;
                            -webkit-border-bottom-right-radius: 8px;
                            -webkit-border-top-left-radius: 8px;
                            -webkit-border-top-right-radius: 8px;

                            border-bottom-left-radius: 8px;
                            border-bottom-right-radius: 8px;
                            border-top-left-radius: 8px;
                            border-top-right-radius: 8px;
                        }
                        a.greenbutton-link :link{text-decoration: none; font-family:Arial; font-size: 9pt; font-weight:bold; color:#FFFFFF;}
                        a.greenbutton-link :visited{text-decoration: none; font-family:Arial; font-size: 9pt; font-weight:bold;  color:#FFFFFF;}
                        a.greenbutton-link :active{text-decoration: none; font-family:Arial; font-size: 9pt; font-weight:bold;  color:#FFFFFF;}
                        a.greenbutton-link :hover
                        {
	                        text-decoration: none;
	                        font-family:Arial;
	                        font-size: 9pt;
	                        font-weight:bold;
	                        color:#FFFFFF;
	                        background-color:darkgreen;
	                        border: solid 1px #FFFFFF;
                        }


                    </style>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
    <div style="width: 479px; height: 430px; float: right;">
        <div id="banner0" >
            <div id="divBanner0Overlay" style="position: absolute; z-index: 3; display: block; opacity: 0.0; background-color: White; width: 474px; height: 201px; cursor: pointer;" onclick="javascript:document.location.href = '/login.aspx';"></div>
            <div id="divBanner0" style="position: absolute; z-index: 2;">
                <img src="/images/home/side-web-banner-475x430px.jpg" style="width: 479px; height: 430px;border-radius:10px;" alt="">
            </div>
        </div>
        <div id="banner1" style="position: relative; display: none" title="How does it work?">
            <div id="divBanner1Overlay" style="position: absolute; z-index: 2; display: block; opacity: 0.0; background-color: White; width: 474px; height: 201px; cursor: pointer;" onclick="javascript:document.location.href = '/login.aspx';"></div>
            <div id="divBanner1" style="position: absolute; z-index: 1;">
                <img src="/images/home/side-web-banner-475x430px.jpg" style="width: 479px; height: 430px;border-radius:10px;" alt="">
            </div>
        </div>
    </div>
    <div style="clear: both;"></div>

    <script type="text/javascript">
        
        function subscribe() {
            var em = document.getElementById('ctl00_body_tbSubscriptionEmail').value;

            if (em !== '') {
                document.location.href = 'default.aspx?cmd=sub&email=' + em;
            }
        }
        
        function updatebanner() {
            $('#banner0').toggle();
            $('#banner1').toggle();
            setTimeout("updatebanner()", 12000);
        }

        $(function () { updatebanner(); });

    </script>

    <!-- Google Code for visited homepage marketing -->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 1016993667;
        var google_conversion_language = "en";
        var google_conversion_format = "3";
        var google_conversion_color = "666666";
        var google_conversion_label = "DMKeCMWgqQIQg6_45AM";
        var google_conversion_value = 0;
        /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
    <noscript>
        <div style="display: inline;">
            <img height="1" width="1" style="border-style: none;" alt="" src="//www.googleadservices.com/pagead/conversion/1016993667/?label=DMKeCMWgqQIQg6_45AM&amp;guid=ON&amp;script=0"/>
        </div>
    </noscript>
    <!-- /Google Code for visited homepage marketing -->


            <div id="ctl00_MastPreFoot"></div>
        </td>

        <td style="width:1px;"><img src="/images/null.gif" width="1" height="300"></td>
    </tr>
    </table>
    <div style="padding-top:27px">
        <div style="width:965px;height:44px;">
	    <div class="folioFooter">
	        <center>
	        <table border="0" cellspacing="0" cellpadding="12" width="" height="44">
	        <tr>
	            <td valign="middle" NOWRAP><a href="/policy/terms.aspx" title="Terms & Conditions" class="WhiteLinkSm">Terms & Conditions</a></td>
	            <td valign="middle" NOWRAP><a href="/policy/privacy.aspx" title="Privacy Policy" class="WhiteLinkSm">Privacy Policy</a></td>
	        </tr>
	        </table>
	        </center>
	    </div>
	    <img src="/images/topmenu_left.png" style="width:9px;height:44px;position:relative;top:-44px;">
	    <img src="/images/topmenu_right.png" style="width:9px;height:44px;position:relative;top:-44px;" align="right">
	    </div>
    </div>
    <div id="ctl00_rateCalculatorText" style="color:#666666;font-size:8pt;padding-top:17px;text-align:left;">
        <sup>
            ** Actual rates vary with the amount being sent. Use the Rate Calculator to find out the exact rate that you'll get for your send amount.
        </sup>
    </div>
    <div style="font-size:9pt;padding-top:17px;text-align:center;">
        <span id="ctl00_copyrightText" style="color:#666666;">© 2024 KlickEx Pacific Ltd. All Rights Reserved</span>
    </div>

    <div id="modalMsg">
        <div style="padding:25px;text-align:center;padding-top:70px;">
            <span id="ctl00_lblErrorMessage"></span>
            <br /><br />
            <div style="padding-left:180px;margin-top:20px;">
            <center><a href="javascript:void(0);" onclick="Popup.hide('modalMsg');" class="RedBtn37">Close</a></center>
            </div>
        </div>
    </div>
    <br /><br />


    
        <span id="MobileDeviceBool" style="display: none;">false</span>
    </form>

    </div>

</div>
<br />

<script src="/js/site?v=wIMWXepaCEfku_FIzchfDlZdEtxpTT56VA8-Ncf3R3o1"></script>

<script src="/js/master?v=FmBYpyz_yN6g_osJfDYx4wH2kngBsuH9YStfbSurbqg1"></script>


    <script type="text/javascript">
        (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments); };
            (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
            js.id = o; js.src = f; js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
        })(window, document, "script", "_hw", "https://widget.dolla.id/widget.js");
        _hw("init", {
            tag: "digicel", action: "TOP_UP",
        });
    </script>


</center>

    

    

</body>
</html>
