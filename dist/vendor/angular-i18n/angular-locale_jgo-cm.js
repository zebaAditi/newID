"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return-1==n?0:a.length-n-1}function s(a,s){var P=s;void 0===P&&(P=Math.min(n(a),3));var m=Math.pow(10,P),t=(a*m|0)%m;return{v:P,f:t}}var P={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["mbaꞌmbaꞌ","ŋka mbɔ́t nji"],DAY:["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],MONTH:["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá"],SHORTDAY:["Sɔ́ndi","Mɔ́ndi","Ápta Mɔ́ndi","Wɛ́nɛsɛdɛ","Tɔ́sɛdɛ","Fɛlâyɛdɛ","Sásidɛ"],SHORTMONTH:["Nduŋmbi Saŋ","Pɛsaŋ Pɛ́pá","Pɛsaŋ Pɛ́tát","Pɛsaŋ Pɛ́nɛ́kwa","Pɛsaŋ Pataa","Pɛsaŋ Pɛ́nɛ́ntúkú","Pɛsaŋ Saambá","Pɛsaŋ Pɛ́nɛ́fɔm","Pɛsaŋ Pɛ́nɛ́pfúꞋú","Pɛsaŋ Nɛgɛ́m","Pɛsaŋ Ntsɔ̌pmɔ́","Pɛsaŋ Ntsɔ̌ppá"],fullDate:"EEEE, y MMMM dd",longDate:"y MMMM d",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"jgo-cm",pluralCat:function(a,n){var m=0|a,t=s(a,n);return 1==m&&0==t.v?P.ONE:P.OTHER}})}]);