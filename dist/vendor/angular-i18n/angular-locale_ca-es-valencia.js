"use strict";angular.module("ngLocale",[],["$provide",function(e){function r(e){e+="";var r=e.indexOf(".");return-1==r?0:e.length-r-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(r(e),3));var m=Math.pow(10,n),i=(e*m|0)%m;return{v:n,f:i}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["a. m.","p. m."],DAY:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],MONTH:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],SHORTDAY:["dg.","dl.","dt.","dc.","dj.","dv.","ds."],SHORTMONTH:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],fullDate:"EEEE, d MMMM 'de' y",longDate:"d MMMM 'de' y",medium:"d MMM y H:mm:ss",mediumDate:"d MMM y",mediumTime:"H:mm:ss","short":"d/M/yy H:mm",shortDate:"d/M/yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ca-es-valencia",pluralCat:function(e,r){var m=0|e,i=a(e,r);return 1==m&&0==i.v?n.ONE:n.OTHER}})}]);