"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return-1==a?0:e.length-a-1}function r(e,r){var n=r;void 0===n&&(n=Math.min(a(e),3));var u=Math.pow(10,n),m=(e*u|0)%u;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["domingu","llunes","martes","miércoles","xueves","vienres","sábadu"],MONTH:["de xineru","de febreru","de marzu","d’abril","de mayu","de xunu","de xunetu","d’agostu","de setiembre","d’ochobre","de payares","d’avientu"],SHORTDAY:["dom","llu","mar","mie","xue","vie","sab"],SHORTMONTH:["xin","feb","mar","abr","may","xun","xnt","ago","set","och","pay","avi"],fullDate:"EEEE, d MMMM 'de' y",longDate:"d MMMM 'de' y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/yy HH:mm",shortDate:"d/M/yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ast-es",pluralCat:function(e,a){var u=0|e,m=r(e,a);return 1==u&&0==m.v?n.ONE:n.OTHER}})}]);