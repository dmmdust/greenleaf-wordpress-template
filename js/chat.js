var sWOGateway   = "gateway3.whoson.com"; 
var sWOGatewaySSL= "gateway3.whoson.com";
var sWODomain    = "www.phsgreenleaf.co.uk";
var sWOChatstart = "https://hosted3.whoson.com/newchat/chat.aspx";
var sWODepartment="";sWOSkillNames="";
var sWOLanguage="";
var sWOBackgroundURL="";
var sWOResponse="Y";
var sWOInvite="Y";
var sWOPreselect="";
var sWOUser="";
var sWOPage="";
var sWOStatus = "offline";
var sWOInline=true;
var sWOCost=0;var sWORevenue=0;
var sWOName="";var sWOCompany="";var sWOEmail="";var sWOTelephone="";
var sWOProtocol=window.location.protocol;
var sWOImage=document.createElement('img');
var sWOChatElement;var sWOSession;var sWOUrl;
sWOImage.border=0;
(function () {
if(sWOUser==""){
	var dt=new Date();var sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf("whoson")==-1){sWOSession=parseInt(Math.random()*1000)+"-"+dt.getTime();document.cookie="whoson="+sWOSession+";expires=Thu, 31-Dec-2020 00:00:00 GMT; path=/";}
	sWOCookie=document.cookie.toString();
	if(sWOCookie.indexOf('whoson')==-1){sWOSession="";} else {
		var s=sWOCookie.indexOf("whoson=")+"whoson=".length;var e=sWOCookie.indexOf(";",s);
		if(e==-1)e=sWOCookie.length;sWOSession=sWOCookie.substring(s,e);}}
if(sWOProtocol=="https:")sWOGateway=sWOGatewaySSL;if(sWOUser!="")sWOSession=sWOUser;if(sWOProtocol=="file:")sWOProtocol="http:"; })();
function sWOStartChat(){window.open(sWOChatElement.href,"Chat","width=540,height=430");return false;}
function sWOImageLoaded(){if (sWOImage.width==1) {return;}sWOChatElement.href=sWOChatstart;sWOChatElement.target = "_blank";sWOChatElement.appendChild(sWOImage);sWOChatElement.onclick=sWOStartChat;}
function sWOTrackPage(){
	var bd=document.getElementsByTagName('body')[0];
	if(sWOPage=="")sWOPage=escape(window.location);
	sWOUrl=sWOProtocol+"//"+sWOGateway+"/?u="+sWOSession+"&d="+sWODomain;
	if(sWODepartment.length>0)sWOUrl+="&t="+escape(sWODepartment);
	sWOUrl+="&p='"+sWOPage+"'&r='"+escape(document.referrer)+"'";
	if(sWOCost!=0)sWOUrl+="&c="+sWOCost;if(sWORevenue!=0)sWOUrl+="&v="+sWORevenue;
	if(sWOName!=""||sWOCompany!=""||sWOEmail!=""||sWOTelephone!="")sWOUrl+="&n="+encodeURIComponent(encodeURIComponent(sWOName))+"|"+sWOCompany+"|"+sWOEmail+"|"+sWOTelephone;
	if(sWOSkillNames!="")sWOUrl+="&sn="+escape(sWOSkillNames);
	if(sWOResponse==""){ if(document.layers){document.write("<layer name=\"WhosOn\" visibility=hide><img src=\""+sWOUrl+"\" height=1 width=1><\/layer>")} else {var d=document.createElement('div'); d.style.cssText = "position:absolute;visibility:hidden"; 
		sWOImage.src=sWOUrl;d.appendChild(sWOImage); bd.appendChild(d)}}
		else {
		sWOImage.onload=sWOImageLoaded;sWOChatElement=document.getElementById('whoson_chat_link');
		if(! sWOChatElement){ sWOChatElement=document.createElement('a');sWOChatElement.id='whoson_chat_link'; var insertBefore=null; 
		var scriptAr= document.body.getElementsByTagName('script'); for (var i=0; i < scriptAr.length; i++) { if(typeof(scriptAr[i].src) != 'undefined' && scriptAr[i].src.indexOf('include.js?domain='+sWODomain)>0){insertBefore = scriptAr[i]} } if (insertBefore != null) { insertBefore.parentNode.insertBefore(sWOChatElement, insertBefore) } else {bd.appendChild(sWOChatElement, bd)}}
	        sWOUrl+="&response=g";
		if (/Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent) && !navigator.userAgent.match(/iemobile/i)) {
			sWOChatstart = sWOChatstart.replace('chat.aspx','mobile.aspx');
		}
		sWOChatstart+="?domain="+sWODomain;if(sWOLanguage.length>0)sWOChatstart+="&lang="+sWOLanguage;
		if(sWOBackgroundURL!="")sWOChatstart+="&bg="+sWOBackgroundURL;if(sWODepartment.length>0)sWOChatstart+="&dept="+escape(sWODepartment);if(sWOPreselect.length>0)sWOChatstart+="&select="+sWOPreselect;
		if(sWOSkillNames!="")sWOChatstart+="&x-requestedskills="+escape(sWOSkillNames);
		sWOChatstart+='&timestamp='+(new Date()).getTime();
		sWOUrl+='&timestamp='+(new Date()).getTime();
		if(sWOSession!=''){sWOChatstart+='&session='+sWOSession;}
		sWOImage.src = sWOUrl;	
	}
	if(sWOInvite=="Y"){ var sWO={}; sWO.i = function()  {if (typeof(woAfterLoad) == 'function') {woAfterLoad(); woAfterLoad = function() {};}} 
        if (typeof(sWOInvite)=='undefined'||sWOInvite=='') {return;} var iog = document.createElement('script'); iog.type = 'text/javascript'; iog.async = true; iog.onload = sWO.i;
            iog.onreadystatechange = function () { if (this.readyState == 'loaded' || this.readyState == 'complete') sWO.i(); };
            iog.src=sWOUrl=sWOProtocol+"//"+sWOGateway+"/invite.js?domain="+sWODomain; var s = document.getElementsByTagName('body')[0]; s.appendChild(iog, s); 
	}
}
/* jQuery Storage API Plugin 1.5.0 */
!function (e) { function t(t) { var r, n, i, o = arguments.length, s = window[t], a = arguments, u = a[1]; if (2 > o) throw Error("Minimum 2 arguments must be given"); if (e.isArray(u)) { n = {}; for (var g in u) { r = u[g]; try { n[r] = JSON.parse(s.getItem(r)) } catch (m) { n[r] = s.getItem(r) } } return n } if (2 != o) { try { n = JSON.parse(s.getItem(u)) } catch (m) { throw new ReferenceError(u + " is not defined in this storage") } for (var g = 2; o - 1 > g; g++) if (n = n[a[g]], void 0 === n) throw new ReferenceError([].slice.call(a, 1, g + 1).join(".") + " is not defined in this storage"); if (e.isArray(a[g])) { i = n, n = {}; for (var f in a[g]) n[a[g][f]] = i[a[g][f]]; return n } return n[a[g]] } try { return JSON.parse(s.getItem(u)) } catch (m) { return s.getItem(u) } } function n(t) { var r, n, i = arguments.length, o = window[t], s = arguments, a = s[1], u = s[2], g = {}; if (2 > i || !e.isPlainObject(a) && 3 > i) throw Error("Minimum 3 arguments must be given or second parameter must be an object"); if (e.isPlainObject(a)) { for (var m in a) r = a[m], e.isPlainObject(r) ? o.setItem(m, JSON.stringify(r)) : o.setItem(m, r); return a } if (3 == i) return "object" == typeof u ? o.setItem(a, JSON.stringify(u)) : o.setItem(a, u), u; try { n = o.getItem(a), null != n && (g = JSON.parse(n)) } catch (f) { } n = g; for (var m = 2; i - 2 > m; m++) r = s[m], n[r] && e.isPlainObject(n[r]) || (n[r] = {}), n = n[r]; return n[s[m]] = s[m + 1], o.setItem(a, JSON.stringify(g)), g } function i(t) { var r, n, i = arguments.length, o = window[t], s = arguments, a = s[1]; if (2 > i) throw Error("Minimum 2 arguments must be given"); if (e.isArray(a)) { for (var u in a) o.removeItem(a[u]); return !0 } if (2 == i) return o.removeItem(a), !0; try { r = n = JSON.parse(o.getItem(a)) } catch (g) { throw new ReferenceError(a + " is not defined in this storage") } for (var u = 2; i - 1 > u; u++) if (n = n[s[u]], void 0 === n) throw new ReferenceError([].slice.call(s, 1, u).join(".") + " is not defined in this storage"); if (e.isArray(s[u])) for (var m in s[u]) delete n[s[u][m]]; else delete n[s[u]]; return o.setItem(a, JSON.stringify(r)), !0 } function o(t, r) { var n = u(t); for (var o in n) i(t, n[o]); if (r) for (var o in e.namespaceStorages) g(o) } function s(r) { var n = arguments.length, i = arguments, o = (window[r], i[1]); if (1 == n) return 0 == u(r).length; if (e.isArray(o)) { for (var a = 0; a < o.length; a++) if (!s(r, o[a])) return !1; return !0 } try { var g = t.apply(this, arguments); e.isArray(i[n - 1]) || (g = { totest: g }); for (var a in g) if (!(e.isPlainObject(g[a]) && e.isEmptyObject(g[a]) || e.isArray(g[a]) && !g[a].length) && g[a]) return !1; return !0 } catch (m) { return !0 } } function a(r) { var n = arguments.length, i = arguments, o = (window[r], i[1]); if (2 > n) throw Error("Minimum 2 arguments must be given"); if (e.isArray(o)) { for (var s = 0; s < o.length; s++) if (!a(r, o[s])) return !1; return !0 } try { var u = t.apply(this, arguments); e.isArray(i[n - 1]) || (u = { totest: u }); for (var s in u) if (void 0 === u[s] || null === u[s]) return !1; return !0 } catch (g) { return !1 } } function u(r) { var n = arguments.length, i = window[r], o = arguments, s = (o[1], []), a = {}; if (a = n > 1 ? t.apply(this, o) : i, a._cookie) for (var u in e.cookie()) "" != u && s.push(u.replace(a._prefix, "")); else for (var g in a) s.push(g); return s } function g(t) { if (!t || "string" != typeof t) throw Error("First parameter must be a string"); window.localStorage.getItem(t) || window.localStorage.setItem(t, "{}"), window.sessionStorage.getItem(t) || window.sessionStorage.setItem(t, "{}"); var r = { localStorage: e.extend({}, e.localStorage, { _ns: t }), sessionStorage: e.extend({}, e.sessionStorage, { _ns: t }) }; return e.cookie && (window.cookieStorage.getItem(t) || window.cookieStorage.setItem(t, "{}"), r.cookieStorage = e.extend({}, e.cookieStorage, { _ns: t })), e.namespaceStorages[t] = r, r } var m = "ls_", f = "ss_", c = { _type: "", _ns: "", _callMethod: function (e, t) { var r = [this._type]; return this._ns && r.push(this._ns), [].push.apply(r, t), e.apply(this, r) }, get: function () { return this._callMethod(t, arguments) }, set: function () { var t = arguments.length, i = arguments, o = i[0]; if (1 > t || !e.isPlainObject(o) && 2 > t) throw Error("Minimum 2 arguments must be given or first parameter must be an object"); if (e.isPlainObject(o) && this._ns) { for (var s in o) n(this._type, this._ns, s, o[s]); return o } return r = this._callMethod(n, i), this._ns ? r[o] : r }, remove: function () { if (arguments.length < 1) throw Error("Minimum 1 argument must be given"); return this._callMethod(i, arguments) }, removeAll: function (e) { return this._ns ? (n(this._type, this._ns, {}), !0) : o(this._type, e) }, isEmpty: function () { return this._callMethod(s, arguments) }, isSet: function () { if (arguments.length < 1) throw Error("Minimum 1 argument must be given"); return this._callMethod(a, arguments) }, keys: function () { return this._callMethod(u, arguments) } }; if (e.cookie) { window.name || (window.name = Math.floor(1e8 * Math.random())); var l = { _cookie: !0, _prefix: "", _expires: null, setItem: function (t, r) { e.cookie(this._prefix + t, r, { expires: this._expires }) }, getItem: function (t) { return e.cookie(this._prefix + t) }, removeItem: function (t) { return e.removeCookie(this._prefix + t) }, clear: function () { for (var t in e.cookie()) "" != t && (!this._prefix && -1 === t.indexOf(m) && -1 === t.indexOf(f) || this._prefix && 0 === t.indexOf(this._prefix)) && e.removeCookie(t) }, setExpires: function (e) { return this._expires = e, this } }; window.localStorage || (window.localStorage = e.extend({}, l, { _prefix: m, _expires: 3650 }), window.sessionStorage = e.extend({}, l, { _prefix: f + window.name + "_" })), window.cookieStorage = e.extend({}, l), e.cookieStorage = e.extend({}, c, { _type: "cookieStorage", setExpires: function (e) { return window.cookieStorage.setExpires(e), this } }) } e.initNamespaceStorage = function (e) { return g(e) }, e.localStorage = e.extend({}, c, { _type: "localStorage" }), e.sessionStorage = e.extend({}, c, { _type: "sessionStorage" }), e.namespaceStorages = {}, e.removeAllStorages = function (t) { e.localStorage.removeAll(t), e.sessionStorage.removeAll(t), e.cookieStorage && e.cookieStorage.removeAll(t), t || (e.namespaceStorages = {}) } }(jQuery);
/*Storage API end */

/*easing*/
jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (n, t, i, r, u) { return jQuery.easing[jQuery.easing.def](n, t, i, r, u) }, easeInQuad: function (n, t, i, r, u) { return r * (t /= u) * t + i }, easeOutQuad: function (n, t, i, r, u) { return -r * (t /= u) * (t - 2) + i }, easeInOutQuad: function (n, t, i, r, u) { return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i }, easeInCubic: function (n, t, i, r, u) { return r * (t /= u) * t * t + i }, easeOutCubic: function (n, t, i, r, u) { return r * ((t = t / u - 1) * t * t + 1) + i }, easeInOutCubic: function (n, t, i, r, u) { return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i }, easeInQuart: function (n, t, i, r, u) { return r * (t /= u) * t * t * t + i }, easeOutQuart: function (n, t, i, r, u) { return -r * ((t = t / u - 1) * t * t * t - 1) + i }, easeInOutQuart: function (n, t, i, r, u) { return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i }, easeInQuint: function (n, t, i, r, u) { return r * (t /= u) * t * t * t * t + i }, easeOutQuint: function (n, t, i, r, u) { return r * ((t = t / u - 1) * t * t * t * t + 1) + i }, easeInOutQuint: function (n, t, i, r, u) { return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i }, easeInSine: function (n, t, i, r, u) { return -r * Math.cos(t / u * (Math.PI / 2)) + r + i }, easeOutSine: function (n, t, i, r, u) { return r * Math.sin(t / u * (Math.PI / 2)) + i }, easeInOutSine: function (n, t, i, r, u) { return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i }, easeInExpo: function (n, t, i, r, u) { return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i }, easeOutExpo: function (n, t, i, r, u) { return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i }, easeInOutExpo: function (n, t, i, r, u) { return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i }, easeInCirc: function (n, t, i, r, u) { return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i }, easeOutCirc: function (n, t, i, r, u) { return r * Math.sqrt(1 - (t = t / u - 1) * t) + i }, easeInOutCirc: function (n, t, i, r, u) { return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i }, easeInElastic: function (n, t, i, r, u) { var o = 1.70158, f = 0, e = r; return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i) }, easeOutElastic: function (n, t, i, r, u) { var o = 1.70158, f = 0, e = r; return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i) }, easeInOutElastic: function (n, t, i, r, u) { var o = 1.70158, f = 0, e = r; return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i }, easeInBack: function (n, t, i, r, u, f) { return f == undefined && (f = 1.70158), r * (t /= u) * t * ((f + 1) * t - f) + i }, easeOutBack: function (n, t, i, r, u, f) { return f == undefined && (f = 1.70158), r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i }, easeInOutBack: function (n, t, i, r, u, f) { return (f == undefined && (f = 1.70158), (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i }, easeInBounce: function (n, t, i, r, u) { return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i }, easeOutBounce: function (n, t, i, r, u) { return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i }, easeInOutBounce: function (n, t, i, r, u) { return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i } })
/*end easing*/

sWOResponse = '';
var connection = "offline";
sWOImageLoaded = overrideLoad;
var oPosition = "bottom-right";
var browser;
var storage;

(function ($) {
    storage = $.sessionStorage;

 

    $.wochat = function (element, options) {

        var defaults = {
            debug: false,
            position: "bottom-right",
            enableSound: false,
            offline: 'hidden',
            height: '430',
            width: '540',
            color: "Office",
            layout: "Office365",
            server: 'https://hosted3.whoson.com/newchat/',
            chatfolder: '',
            offlineText: 'Contact Me',
            onlineText: 'Click to Chat Live',
            callbackTitle: 'Call Me Back!',
            offlineformTitle: 'Contact Form',
            chatwindowTitle: 'WhosOn - Live Chat',
            imageInvite: false
        };

        var inline = this;

     

        var $element = $(element),
             element = element;

        inline.init = function () {
            inline.settings = $.extend({}, defaults, options);


            var woHTML = "<div id='wo_chatbox' class='wo-inline' style='visibility: visible;'>" +
                        "<div id='wo_offline' style='display: none;width: 180px;' class='wo-chat-btn wo-online-btn online-color bottom-right'>" +
                        "<div id='wo_offline_arrow' class='wo-title arrowUp'>" +
                        "<span id='wo_offline_msg' class='offlineBtn'>Contact Us</span>" +
                        "</div>" +
                        "</div>" +
                        "<div id='wo_offline_image' style='display: none;width: 224px;' class='wo-chat-btn wo-online-btn wo-image bottom-right'>" +
                        "<img id='wo_offImage' src='#'/></div>" +
                        "<div id='wo_offline_form' data-id='0' class='wo-widget bottom-right' style='display:none;width: 345px;'>" +
                        "<div class='wo-offline'> <div id='wo_chat_header' class='wo-header offline-color'>" +
                        "<div id='wo_contact_arrow' class='wo-title-arrow-down offlineformTitle'>Contact us</div></div>" +
                        "<div id='wo_formholder' class='wo-body wo-form wo-offline-form'></div><div class='embFooter'> " +
                        "<div class='poweredby'> powered by <a href='//livechat.whoson.com' target='_blank'>WhosOn</a></div></div></div></div>" +
                        "<div id='wo_callback_form' data-id='0' class='wo-widget bottom-right' style='display:none;width: 345px;'> <div class='wo-offline'>" +
                        "<div id='wo_chat_header' class='wo-header offline-color'> " +
                        "<div id='wo_call_arrow' class='wo-title-arrow-down callbackTitle'>We can call you</div></div>" +
                        "<div id='wo_callholder' class='wo-body wo-form wo-offline-form'></div><div class='embFooter'>" +
                        "<div class='poweredby'> powered by <a href='//livechat.whoson.com' target='_blank'>WhosOn</a></div></div></div></div>" +
                        "<div id='wo_chat' data-id='0' class='wo-widget bottom-right' style='display:none;width: " + inline.settings.width + "px;'>" +
                        "<div class='wo-offline'> <div id='wo_chat_header' class='wo-header online-color'>" +
                        "<div id='wo_chat_arrow' class='wo-title-arrow-down chatwindowTitle'>Window Title</div></div>" +
                        "<div id='wo_chatholder' class='wo-body wo-form wo-offline-form'></div><div class='embFooter'>" +
                        "<div class='poweredby'> powered by <a href='//livechat.whoson.com' target='_blank'>WhosOn</a></div></div></div></div>" +
                        "<div id='wo_online' style='display: none;width: 180px;' class='wo-chat-btn wo-online-btn online-color bottom-right'>" +
                        "<div id='wo_online_arrow' class='wo-title wo-arrow-up'> <span id='wo_online_msg' class='onlineText'>Test Chat</span> </div></div>" +
                        "<div id='wo_online_image' style='display: none;width: 224px;' class='wo-chat-btn wo-online-btn wo-image bottom-right'>" +
                        "<img id='wo_onImage' src='#'/> </div><div id='wo_invite' class='wo-widget' style='display: none;width: 245px;right: 15px;bottom: 10px;height: 196px;'>" +
                        "<div class='wo-badge-wrapper'> <div class='wo-badge wo-text' style='color:#ffffff;background-color:#333;background-image: url();border-color:transparent;'>" +
                        "<div class='wo-title'>Chat with us</div></div><div class='wo-badge-form'> <form action=''>" +
                        "<a href='javascript:void(0);' class='wo-send' style='color: #ffffff;background: #ff4b26;'>Send</a> " +
                        "<div class='wo-inner-input'> <input type='text' name='' id='' class='wo-type-msg' placeholder='Type your message here'>" +
                        "</div></form> </div></div></div></div>"


            checkbrowser();

            //$('<link type="text/css" rel="stylesheet" href="' + sWOProtocol + '//' + sWOGateway + '/css/wo.inline.css">').appendTo('head');

            $('<link type="text/css" rel="stylesheet" href="' + inline.settings.server + inline.settings.chatfolder + '/css/whoson.inline.min.css">').appendTo('head');
            $('<link type="text/css" rel="stylesheet" href="' + inline.settings.server + inline.settings.chatfolder + '/themes/colors/' + inline.settings.color + '/' + inline.settings.color + '_inline.min.css">').appendTo('head');

            $('body').append(woHTML);

            oPosition = inline.settings.position;

            $('#wo_offImage').attr('src', inline.settings.server + inline.settings.chatfolder + '/themes/colors/' + inline.settings.color + '/' + "wo-offline.png");
            $('#wo_onImage').attr('src', inline.settings.server + inline.settings.chatfolder + '/themes/colors/' + inline.settings.color + '/' + "wo-online.png");

            $('.wo-widget').css('width', inline.settings.width);

            $('.offlineBtn').text(inline.settings.offlineText);
            $('.offlineformTitle').text(inline.settings.offlineformTitle);
            $('.callbackTitle').text(inline.settings.callbackTitle);
            $('.chatwindowTitle').text(inline.settings.chatwindowTitle);
            $('.onlineText').text(inline.settings.onlineText);

            if (storage.get('window') == 'open') {
                var wo_online_pos = $('#wo_online').attr('class').split(' ').pop();
                $('#wo_online').removeClass(wo_online_pos);
                $('#wo_online').addClass(oPosition);
                var wo_online_image_pos = $('#wo_online_image').attr('class').split(' ').pop();
                $('#wo_online_image').removeClass(wo_online_image_pos);
                $('#wo_online_image').addClass(oPosition);
                var wo_offline_pos = $('#wo_offline').attr('class').split(' ').pop();
                $('#wo_offline').removeClass(wo_offline_pos);
                $('#wo_offline').addClass(oPosition);
                var wo_offline_image_pos = $('#wo_offline_image').attr('class').split(' ').pop();
                $('#wo_offline_image').removeClass(wo_offline_pos);
                $('#wo_offline_image').addClass(oPosition);

                if (storage.get('type') == 'chat') {
                    showChat();

                } else if (storage.get('type') == 'callback') {
                    showCallbackForm();
                } else {
                    showOfflineForm();
                }

            }
        };


        inline.online = function () {
            var offline_arrow = $('#wo_offline_arrow').attr('class').split(' ').pop();
            var online_arrow = $('#wo_online_arrow').attr('class').split(' ').pop();

            $('#wo_online_arrow').removeClass(online_arrow);
            $('#wo_offline_arrow').removeClass(offline_arrow);

            if (oPosition == "custom") {
                if (!typeof (woCustomPosition) == "function") {
                    oPosition = "bottom-right";
                }
            };
            setPosition(oPosition);

            if (!inline.settings.imageInvite) {
                var wo_online_pos = $('#wo_online').attr('class').split(' ').pop();
                $('#wo_online').removeClass(wo_online_pos);
                $('#wo_online').addClass(oPosition);
                if (oPosition.substring(0, 3) == "top") {
                    inline.showInvite($('#wo_online'), "bounceInDown");
                } else {
                    inline.showInvite($('#wo_online'), "bounceInUp");
                };



                $('#wo_online').click(function (e) {


                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                        chaturl = inline.settings.server + 'chat.aspx?domain=' + sWODomain + '&t=' + (new Date()).getTime();
                        window.open(chaturl, 'wochatwindow', 'width=460,height=590');
                        return false;

                    } else {
                        e.stopPropagation();
                        showChat();
                    }

                });

            } else {
                var wo_online_image_pos = $('#wo_online_image').attr('class').split(' ').pop();
                $('#wo_online_image').removeClass(wo_online_image_pos);
                $('#wo_online_image').addClass(oPosition);
                if (oPosition.substring(0, 3) == "top") {
                    inline.showInvite($('#wo_online_image'), "bounceInDown");
                } else {
                    inline.showInvite($('#wo_online_image'), "bounceInUp");
                };



                $('#wo_online_image').click(function (e) {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                        chaturl = inline.settings.server + 'chat.aspx?domain=' + sWODomain + '&t=' + (new Date()).getTime();
                        window.open(chaturl, 'wochatwindow', 'width=460,height=590');
                        return false;

                    } else {
                        e.stopPropagation();
                        showChat();
                    }
                });


            };


        };

        inline.offline = function () {
            setPosition(oPosition);

            if (!inline.settings.imageInvite) {
                var offline_arrow = $('#wo_offline_arrow').attr('class').split(' ').pop();
                var online_arrow = $('#wo_online_arrow').attr('class').split(' ').pop();

                $('#wo_online_arrow').removeClass(online_arrow);
                $('#wo_offline_arrow').removeClass(offline_arrow);

                if (oPosition == "custom") {
                    if (!typeof (woCustomPosition) == "function") {
                        oPosition = "bottom-right";
                    }
                };
                setPosition(oPosition);

                if (inline.settings.offline != "hidden") {
                    var wo_offline_pos = $('#wo_offline').attr('class').split(' ').pop();
                    $('#wo_offline').removeClass(wo_offline_pos);
                    $('#wo_offline').addClass(oPosition);

                    if (oPosition.substring(0, 3) == "top") {
                        inline.showInvite($('#wo_offline'), "bounceInDown");
                    } else {
                        inline.showInvite($('#wo_offline'), "bounceInUp");
                    };

                    $('#wo_offline').click(function () {

                        switch (inline.settings.offline) {
                            case 'callback':
                                showCallbackForm();
                                break;
                            case 'form':
                                showOfflineForm();
                                break;
                            default:
                                showOfflineForm();
                                break;

                        }

                    });
                };
            } else {
                var wo_offline_image_pos = $('#wo_offline_image').attr('class').split(' ').pop();
                $('#wo_offline_image').removeClass(wo_offline_pos);
                $('#wo_offline_image').addClass(oPosition);

                if (inline.settings.offline != "hidden") {
                    if (oPosition.substring(0, 3) == "top") {
                        inline.showInvite($('#wo_offline_image'), "bounceInDown");
                    } else {
                        inline.showInvite($('#wo_offline_image'), "bounceInUp");
                    };

                    $('#wo_offline_image').click(function () {

                        switch (inline.settings.offline) {
                            case 'callback':
                                showCallbackForm();
                                break;
                            case 'form':
                                showOfflineForm();
                                break;
                            default:
                                showOfflineForm();
                                break;

                        }

                    });
                };
            };





        };

        inline.showInvite = function (invite, anim) {
            // Play sound
            if (inline.settings.enableSound == true) {
                inline.playSound('wo-invite');
            };
            //Show it
            invite.show();

            // Animate it
            if (browser == 'supported') {
                inline.animateInvite(invite, anim);
            } else {
                invite.animate({
                    opacity: 1
                }, 5000, function () {

                });
            };

            // When CSS animation end
            setTimeout(function () {
                $('.wo-type-msg').focus();
            }, 1000);
        };

        inline.playSound = function (soundName) {
            // Add source into <audio> tag
            function add_source(e, path) {
                $('<source>').attr('src', path).appendTo(e);
            };

            var audio = $('<audio />', {
                autoPlay: 'autoplay'
            });

            add_source(audio, "/sounds/" + soundName + '.mp3');
            add_source(audio, "/sounds/" + soundName + '.ogg');
            add_source(audio, "/sounds/" + soundName + '.wav');

            audio.appendTo('body');
        };

        inline.animateInvite = function (invite, anim) {

            invite.addClass('wo-anim-' + anim + ' wo-anim');
            // Remove CSS animation
            setTimeout(function () {
                invite.removeClass('wo-anim wo-anim-' + anim);

            }, 1500);

        };

        inline.hideInvite = function (invite, anim) {

            // Animate invite on the beginning
            inline.animateInvite(invite, anim);
            setTimeout(function () {
                invite.hide();
            }, 1000);

        };

        var showChat = function () {
            var chat_pos = $('#wo_chat').attr('class').split(' ').pop();
            var chat_arrow = $('#wo_chat_arrow').attr('class').split(' ').pop();
            $('#wo_chat').removeClass(chat_pos);
            $('#wo_chat_arrow').removeClass(chat_arrow);

            if (oPosition == "custom") {
                if (!typeof (woCustomPosition) == "function") {
                    oPosition = "bottom-right";
                    $('#wo_chat').addClass(oPosition);
                } else {
                    $('#wo_chat').addClass(woCustomPositionClass);
                }

            } else {
                $('#wo_chat').addClass(oPosition);
            };

            storage.set('window', 'open');
            storage.set('type', 'chat');
            storage.set('domain', sWODomain);

            if (!inline.settings.imageInvite) {
                animPosition(oPosition, "#wo_online", "#wo_chat", "ChatClick");
            } else {
                animPosition(oPosition, "#wo_online_image", "#wo_chat", "ImageChatClick");
            }


            setFrame(inline.settings.server + inline.settings.chatfolder + "/chat.aspx?domain=" + sWODomain + "&emb=true", "#wo_chatholder");

            $('#wo_chat').click(function () {
                if (oPosition == "custom") {
                    if (!typeof (woCustomPosition) == "function") {
                        oPosition = "bottom-right";
                    }
                };
                if (!inline.settings.imageInvite) {
                    animPosition(oPosition, "#wo_chat", "#wo_online", "HideChatClick");
                } else {
                    animPosition(oPosition, "#wo_chat", "#wo_online_image", "HideChatClick");
                }


                storage.set('window', 'closed');

            });

        };

        var setFrame = function (url, frameid) {

            var woframe = frameid.replace("#", "");

            woframe = woframe + "_wo";

            if ($('#' + woframe).length == 0) {
                var iFrame = "<iframe id='" + woframe + "' class='wo-frame' sandbox='allow-same-origin allow-scripts allow-popups allow-forms' src='" + url + "' style='border: 0; width:100%;'></iframe>";
                $(frameid).append(iFrame);
            };

            setframeSize();

        };

        var setframeSize = function (frameid) {

            $('.wo-frame').css('width', inline.settings.width + "px");
            $('.wo-frame').css('height', inline.settings.height + "px");

        };



        var showCallbackForm = function () {
            var callback_form_pos = $('#wo_callback_form').attr('class').split(' ').pop();
            var callback_form_arrow = $('#wo_chat_arrow').attr('class').split(' ').pop();
            $('#wo_callback_form').removeClass(callback_form_pos);
            $('#wo_callback_form_arrow').removeClass(callback_form_arrow);

            if (oPosition == "custom") {
                if (!typeof (woCustomPosition) == "function") {
                    oPosition = "bottom-right";
                    $('#wo_callback_form').addClass(oPosition);
                } else {
                    $('#wo_callback_form').addClass(woCustomPositionClass);
                };
            } else {
                $('#wo_callback_form').addClass(oPosition);
            };

            storage.set('window', 'open');
            storage.set('domain', sWODomain);
            storage.set('type', 'callback');

            if (!inline.settings.imageInvite) {
                animPosition(oPosition, "#wo_offline", "#wo_callback_form", "CallbackClick");
            } else {
                animPosition(oPosition, "#wo_offline_image", "#wo_callback_form", "CallbackClick");
            };


            setFrame(inline.settings.server + inline.settings.chatfolder + "/callback.htm?domain=" + sWODomain + "&emb=true&color=" + inline.settings.color, "#wo_callholder");

            $('#wo_callback_form').click(function () {
                if (oPosition == "custom") {
                    if (!typeof (woCustomPosition) == "function") {
                        oPosition = "bottom-right";
                    }
                };

                if (!inline.settings.imageInvite) {
                    animPosition(oPosition, "#wo_callback_form", "#wo_offline", "CallbackClick");
                } else {
                    animPosition(oPosition, "#wo_callback_form", "#wo_offline_image", "CallbackClick");
                };

                storage.set('window', 'closed');

            });
        };

        var showOfflineForm = function () {
            var offline_form_pos = $('#wo_offline_form').attr('class').split(' ').pop();
            var offline_form_arrow = $('#wo_chat_arrow').attr('class').split(' ').pop();
            $('#wo_offline_form').removeClass(offline_form_pos);
            $('#wo_offine_form_arrow').removeClass(offline_form_arrow);

            if (oPosition == "custom") {
                if (!typeof (woCustomPosition) == "function") {
                    oPosition = "bottom-right";
                    $('#wo_offline_form').addClass(oPosition);
                } else {
                    $('#wo_offline_form').addClass(woCustomPositionClass);
                };
            } else {
                $('#wo_offline_form').addClass(oPosition);
            };

            storage.set('window', 'open');
            storage.set('domain', sWODomain);
            storage.set('type', 'form');

            if (!inline.settings.imageInvite) {
                animPosition(oPosition, "#wo_offline", "#wo_offline_form", "OfflineClick");
            } else {
                animPosition(oPosition, "#wo_offline_image", "#wo_offline_form", "OfflineClick");
            };


            setFrame(inline.settings.server + inline.settings.chatfolder + "/contactform.htm?domain=" + sWODomain + "&emb=true&color=" + inline.settings.color, "#wo_formholder");

            $('#wo_offline_form').click(function () {
                if (oPosition == "custom") {
                    if (!typeof (woCustomPosition) == "function") {
                        oPosition = "bottom-right";
                    }
                };

                if (!inline.settings.imageInvite) {
                    animPosition(oPosition, "#wo_offline_form", "#wo_offline", "CallbackClick");
                } else {
                    animPosition(oPosition, "#wo_offline_form", "#wo_offline_image", "CallbackClick");
                };

                storage.set('window', 'closed');
            });
        };

        var animPosition = function (position, elementHide, elementShow, custom) {

            switch (position) {
                case "custom":
                    woCustomPosition(custom);
                    break;
                case "top-right":
                case "top-center":
                case "top-left":
                    inline.hideInvite($(elementHide), "bounceOutUp");
                    if (elementShow == "#wo_online" || elementShow == "#wo_offline") {
                        $(elementShow + '_arrow').removeClass('arrowUp');
                        $(elementShow + '_arrow').addClass('arrowDown');
                    } else {
                        $(elementShow + '_arrow').addClass('arrowUp');
                        $("#wo_contact_arrow").removeClass('arrowDown');
                        $("#wo_contact_arrow").addClass('arrowUp');
                        $("#wo_call_arrow").removeClass('arrowDown');
                        $("#wo_call_arrow").addClass('arrowUp');
                    };
                    setTimeout(function () {
                        inline.showInvite($(elementShow), "bounceInDown");
                    }, 400);
                    break;
                case "bottom-left":
                case "bottom-center":
                case "bottom-right":
                    inline.hideInvite($(elementHide), "bounceOutDown");
                    if (elementShow == "#wo_online" || elementShow == "#wo_offline") {
                        $(elementShow + '_arrow').removeClass('arrowDown');
                        $(elementShow + '_arrow').addClass('arrowUp');
                    } else {
                        $("#wo_contact_arrow").removeClass('arrowUp');
                        $("#wo_contact_arrow").addClass('arrowDown');
                        $("#wo_call_arrow").removeClass('arrowup');
                        $("#wo_call_arrow").addClass('arrowDown');
                        $(elementShow + '_arrow').addClass('arrowDown');
                    };
                    setTimeout(function () {
                        inline.showInvite($(elementShow), "bounceInUp");
                    }, 400);
                    break;
            };
        };

        var setPosition = function (position) {
            $('#wo_online_arrow').removeClass('arrowUp');
            $('#wo_offline_arrow').removeClass('arrowUp');
            $('#wo_online_arrow').removeClass('arrowDown');
            $('#wo_offline_arrow').removeClass('arrowDown');
            switch (position) {
                case "custom":
                    woCustomPosition("Load");
                    break;
                case "top-right":
                case "top-left":
                case "top-center":
                    $('#wo_online_arrow').addClass('arrowDown');
                    $('#wo_offline_arrow').addClass('arrowDown');
                    break;
                case "bottom-left":
                case "bottom-right":
                case "bottom-center":
                    $('#wo_online_arrow').addClass('arrowUp');
                    $('#wo_offline_arrow').addClass('arrowUp');
                    break;
            };
        };

        inline.init();

    };

    $.fn.wochat = function (options) {

        return this.each(function () {
            if (undefined == $(this).data('wochat')) {
                var plugin = new $.wochat(this, options);
                $(this).data('wochat', plugin);
            };
        });

    }

})(jQuery);

function overrideLoad() {
    if (typeof ($('body').data('wochat')) == "undefined") {
        $.chatpreloaded = true;
        return;
    }
    if (sWOImage.width <= 1) {

        $('body').data('wochat').offline()
    }
    else {
        if (sWOInline == true) {
            $('body').data('wochat').online()
        }

    };
};

function checkbrowser() {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        var ieversion = new Number(RegExp.$1) // capture x.x portion and store as a number      
        if (ieversion >= 9)
            browser = "notsupported"
    } else {
        browser = "supported";
    }
};

jQuery(document).ready(function ($) {
    $('body').wochat();
    if ($.chatpreloaded) { overrideLoad() }
});