"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return-1==M?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var a=Math.pow(10,r),m=(e*a|0)%a;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["སྔ་དྲོ་","ཕྱི་དྲོ་"],DAY:["གཟའ་ཉི་མ་","གཟའ་ཟླ་བ་","གཟའ་མིག་དམར་","གཟའ་ལྷག་པ་","གཟའ་ཕུར་བུ་","གཟའ་པ་སངས་","གཟའ་སྤེན་པ་"],MONTH:["ཟླ་བ་དང་པོ་","ཟླ་བ་གཉིས་པ་","ཟླ་བ་སུམ་པ་","ཟླ་བ་བཞི་པ་","ཟླ་བ་ལྔ་པ་","ཟླ་བ་དྲུག་པ་","ཟླ་བ་བདུན་པ་","ཟླ་བ་བརྒྱད་པ་","ཟླ་བ་དགུ་པ་","ཟླ་བ་བཅུ་པ་","ཟླ་བ་བཅུ་གཅིག་པ་","ཟླ་བ་བཅུ་གཉིས་པ་"],SHORTDAY:["ཉི་མ་","ཟླ་བ་","མིག་དམར་","ལྷག་པ་","ཕུར་བུ་","པ་སངས་","སྤེན་པ་"],SHORTMONTH:["ཟླ་༡","ཟླ་༢","ཟླ་༣","ཟླ་༤","ཟླ་༥","ཟླ་༦","ཟླ་༧","ཟླ་༨","ཟླ་༩","ཟླ་༡༠","ཟླ་༡༡","ཟླ་༡༢"],fullDate:"y MMMM d, EEEE",longDate:"སྤྱི་ལོ་y MMMMའི་ཙེས་dད",medium:"y ལོ་འི་MMMཙེས་d HH:mm:ss",mediumDate:"y ལོ་འི་MMMཙེས་d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤ -",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"bo-in",pluralCat:function(e,M){var a=0|e,m=n(e,M);return 1==a&&0==m.v?r.ONE:r.OTHER}})}]);