function CircleTimer(t,e){this.init(t,e)}$(function(){var i=["b/e6bq","b/e6bq?price=4.6","b/e6bq?price=9.2","b/e6bq?price=14"],a=.5;function r(t){return"$"+parseFloat(t).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}$("a[data-pay]").each(function(){var t=parseInt($(this).attr("data-pay"));$(this).attr("href","https://e-learn.shop/"+i[t])}).promise().done(function(){$.getJSON("https://e-pay.marketing/request/domain/",function(e){$("a[data-pay]").each(function(){var t=parseInt($(this).attr("data-pay"));$(this).attr("href",e.buy_domain+"/"+i[t])})})}),$("section[id^=page]").append($(".appenSection").html());var e=$("#countdown").countdown360({radius:100,strokeStyle:"#c0392b",strokeWidth:20,fillStyle:"#ecf0f1",fontColor:"#2c3e50",fontFamily:"Montserrat",fontSize:60,fontWeight:900,autostart:!1,seconds:15,label:["sec","secs"],smooth:!0,onComplete:function(){window.location.hash="#page-gift";var t=Math.abs(parseFloat($("#nowPrice").attr("data-price"))-parseFloat($("#fixPrice").attr("data-price"))).toFixed(2);n(0+parseFloat(t))}});function t(e){if($(e).has(".overflow")){$(e+" .overflow").css("display","block");var i=0,s=$(e+" .overflow ul li").length,n=setInterval(function(){var t=$(e+" .overflow ul li").eq(i).text();$(e+" .overflow .text i").text(t),i<s?i+=1:($(e+" .overflow").fadeOut(),clearInterval(n))},7e3)}}function s(t,e){return parseFloat((Math.random()*(e-t+1)+t).toFixed(2))}function n(t){var e=parseFloat(localStorage.getItem("balance"));$("[data-balance]").each(function(){localStorage.setItem("balance",e+t),$(this).text(r(e+t))})}window.addEventListener("hashchange",function(){setTimeout(function(){window.scrollTo(0,0)},1),$("section[id^=page]").not(window.location.hash).fadeOut(function(){t(window.location.hash),$(window.location.hash).fadeIn()})},!1),window.location.hash?$(window.location.hash).fadeIn(function(){$("section[id^=page]").not(window.location.hash).fadeOut(),t(window.location.hash)}):(localStorage.setItem("balance",0),window.location.hash="#page-index"),$("[data-balance]").each(function(){var t=parseFloat(localStorage.getItem("balance"));$(this).text(r(t.toFixed(2)))}),localStorage.getItem("balance")?$("[data-balance]").text(r(localStorage.getItem("balance"))):localStorage.setItem("balance","0"),$(document).on("click",".winBlock .choiseCase .imgSuperCase",function(){$(".winBlock .choiseCase .inner span").each(function(){$(this).text(r(s(100,500)))});var t=s(1e4,2e4);n(0+t),$(this).parents(".inner").find("span").text(r(t)).fadeIn(),$(".winBlock .choiseCase .inner span").fadeIn(),$(this).addClass("tada"),$(".winBlock span[data-balance]").addClass("pulse"),$(".winBlock .choiseCase").delay(7e3).queue(function(t){window.location.hash="#page-pay",t()})}),$(document).on("click",".winBlock .choiseCase .imgCase",function(){$(".winBlock .choiseCase img").removeClass("imgCase"),$(".winBlock .choiseCase .inner span").each(function(){$(this).text(r(s(100,500)))});var t=s(10,20);n(0+t),$(this).addClass("tada"),$(this).parents(".inner").find("span").text(r(t)).fadeIn(),$(".winBlock .choiseCase .inner span").fadeIn(),$(".winBlock .choiseCase").delay(3e3).animate({opacity:0},function(){parseInt($("#countCase").text())<2?$(".winBlock .choiseCase img").removeClass("tada").addClass("imgCase"):$(".winBlock .choiseCase img").removeClass("tada").addClass("imgSuperCase"),$(".winBlock .choiseCase .inner span").text("").fadeOut()}).delay(500).animate({opacity:1},function(){$("#countCase").text(parseInt($("#countCase").text())+1)})});setInterval(function(){var t=Math.random(),e=parseFloat(Math.random().toFixed(2))+4,i=$("#nowPrice"),s=parseFloat(i.attr("data-price"));if(a<t){var n=s+e;i.text(r(n)),i.attr("data-price",n.toFixed(2)),i.parents(".priceBlock").removeClass("priceMinus").addClass("pricePlus")}else{n=s-e;i.text(r(n)),i.attr("data-price",n.toFixed(2)),i.parents(".priceBlock").removeClass("pricePlus").addClass("priceMinus")}},1e3);$(".rateVote").on("click",function(){"plus"==$(this).attr("data-type")?($("#forecast").text("the course will go up"),a=.25):"minus"==$(this).attr("data-type")&&($("#forecast").text("the course will go down"),a=.85);var t=$("#nowPrice").attr("data-price");return $("#fixPrice").text(r(t)),$("#fixPrice").attr("data-price",t),$(".rateButton").fadeOut(function(){$(".voteInfo").fadeIn(function(){e.start()})}),!1}),$(".formBlock").submit(function(){var e=$(this).find("input[type=text]").val(),i=$(this).find("textarea").val();return function(t,e){if(t[0].files&&t[0].files[0]){var i=new FileReader;i.onload=function(t){e(t.target.result)},i.readAsDataURL(t[0].files[0])}}($(this).find("input[type=file]"),function(t){$(".reviewBlock").append('<div class="item"><img src="'+t+'"><div class="review"><b>'+e+"</b><p>"+i+"</p></div></div>")}),$(".formBlock input, .formBlock textarea").val(""),!1})}),function(t){if("function"==typeof define&&define.amd)define(["jquery"],t);else if("object"==typeof module&&module.exports){var e=require("jquery");t(e),module.exports=e}else t(jQuery)}(function(f){function r(t){this.init(t)}r.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:r,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){f.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=f("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),1<window.devicePixelRatio){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=f("<canvas>")[0];t.width=i.size,t.height=i.size,t.getContext("2d").drawImage(e,0,0,a,a),i.arcFill=i.ctx.createPattern(t,"no-repeat"),i.drawFrame(i.lastFrameValue)}var e,i=this,s=this.fill,n=this.ctx,a=this.size;if(!s)throw Error("The fill is not specified!");if("string"==typeof s&&(s={color:s}),s.color&&(this.arcFill=s.color),s.gradient){var r=s.gradient;if(1==r.length)this.arcFill=r[0];else if(1<r.length){for(var o=s.gradientAngle||0,l=s.gradientDirection||[a/2*(1-Math.cos(o)),a/2*(1+Math.sin(o)),a/2*(1+Math.cos(o)),a/2*(1-Math.sin(o))],h=n.createLinearGradient.apply(n,l),c=0;c<r.length;c++){var d=r[c],u=c/(r.length-1);f.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}s.image&&(s.image instanceof Image?e=s.image:(e=new Image).src=s.image,e.complete?t():e.onload=t)},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(t){this.lastFrameValue=t,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(t),this.drawArc(t)},drawArc:function(t){if(0!==t){var e=this.ctx,i=this.radius,s=this.getThickness(),n=this.startAngle;e.save(),e.beginPath(),this.reverse?e.arc(i,i,i-s/2,n-2*Math.PI*t,n):e.arc(i,i,i-s/2,n,n+2*Math.PI*t),e.lineWidth=s,e.lineCap=this.lineCap,e.strokeStyle=this.arcFill,e.stroke(),e.restore()}},drawEmptyArc:function(t){var e=this.ctx,i=this.radius,s=this.getThickness(),n=this.startAngle;t<1&&(e.save(),e.beginPath(),t<=0?e.arc(i,i,i-s/2,0,2*Math.PI):this.reverse?e.arc(i,i,i-s/2,n,n-2*Math.PI*t):e.arc(i,i,i-s/2,n+2*Math.PI*t,n),e.lineWidth=s,e.strokeStyle=this.emptyFill,e.stroke(),e.restore())},drawAnimated:function(i){var s=this,n=this.el,t=f(this.canvas);t.stop(!0,!1),n.trigger("circle-animation-start"),t.css({animationProgress:0}).animate({animationProgress:1},f.extend({},this.animation,{step:function(t){var e=s.animationStartValue*(1-t)+i*t;s.drawFrame(e),n.trigger("circle-animation-progress",[t,e])}})).promise().always(function(){n.trigger("circle-animation-end")})},getThickness:function(){return f.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(t){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=t,this.draw()}},f.circleProgress={defaults:r.prototype},f.easing.circleProgressEasing=function(t){return t<.5?.5*(t*=2)*t*t:1-.5*(t=2-2*t)*t*t},f.fn.circleProgress=function(n,t){var a="circle-progress",e=this.data(a);if("widget"==n){if(!e)throw Error('Calling "widget" method on not initialized instance is forbidden');return e.canvas}if("value"!=n)return this.each(function(){var t=f(this),e=t.data(a),i=f.isPlainObject(n)?n:{};if(e)e.init(i);else{var s=f.extend({},t.data());"string"==typeof s.fill&&(s.fill=JSON.parse(s.fill)),"string"==typeof s.animation&&(s.animation=JSON.parse(s.animation)),(i=f.extend(s,i)).el=t,e=new r(i),t.data(a,e)}});if(!e)throw Error('Calling "value" method on not initialized instance is forbidden');if(void 0===t)return e.getValue();var i=t;return this.each(function(){f(this).data(a).setValue(i)})}}),CircleTimer.prototype={config:null,cp_config:null,cp_config_defaults:{startAngle:1.5*Math.PI,value:0},duration:60,progressInterval:null,$target:null,timer:null,init:function(t,e){if(this.config=t,this.$target=$(t.target),0==this.$target.length)return!1;this.duration=t.duration||60,this.progressInterval=parseFloat(100/this.duration/100).toFixed(3),this.cp_config=$.extend({},this.cp_config_defaults,e),this.$target.circleProgress(this.cp_config),this.timer=this.$target.data("circleProgress")},start:function(){var t=this.timer,e=this.$target,i=this.config.onFinished,s=parseFloat(this.progressInterval),n=setInterval(function(){t.value=parseFloat(parseFloat(t.value+s).toFixed(3)),1<=t.value&&(t.value=1,clearInterval(n),"function"==typeof i&&i(e)),t.draw()},1e3);e.data("timerIntervalId",n)},stop:function(){clearInterval(this.$target.data("timerIntervalId"))}},function(i,t,e,s){function n(t,e){this.element=t,this.settings=i.extend({},r,e),this.settings.fontSize||(this.settings.fontSize=this.settings.radius/1.2),this.settings.strokeWidth||(this.settings.strokeWidth=this.settings.radius/4),this._defaults=r,this._name=a,this._init()}var a="countdown360",r={radius:15.5,strokeStyle:"#477050",strokeWidth:void 0,fillStyle:"#8ac575",fontColor:"#477050",fontFamily:"sans-serif",fontSize:void 0,fontWeight:700,autostart:!0,seconds:10,label:["second","seconds"],startOverAfterAdding:!0,smooth:!1,onComplete:function(){}};n.prototype={getTimeRemaining:function(){return this._secondsLeft(this.getElapsedTime())},getElapsedTime:function(){return Math.round(((new Date).getTime()-this.startedAt.getTime())/1e3)},extendTimer:function(t){var e=parseInt(t),i=Math.round(((new Date).getTime()-this.startedAt.getTime())/1e3);this._secondsLeft(i)+e<=this.settings.seconds&&this.startedAt.setSeconds(this.startedAt.getSeconds()+parseInt(t))},addSeconds:function(t){var e=Math.round(((new Date).getTime()-this.startedAt.getTime())/1e3);this.settings.startOverAfterAdding?(this.settings.seconds=this._secondsLeft(e)+parseInt(t),this.start()):this.settings.seconds+=parseInt(t)},start:function(){this.startedAt=new Date,this._drawCountdownShape(3.5*Math.PI,!0),this._drawCountdownLabel(0);var t=1e3;this.settings.smooth&&(t=16),this.interval=setInterval(jQuery.proxy(this._draw,this),t)},stop:function(t){clearInterval(this.interval),t&&t()},_init:function(){this.settings.width=2*this.settings.radius+2*this.settings.strokeWidth,this.settings.height=this.settings.width,this.settings.arcX=this.settings.radius+this.settings.strokeWidth,this.settings.arcY=this.settings.arcX,this._initPen(this._getCanvas()),this.settings.autostart&&this.start()},_getCanvas:function(){var t=i('<canvas id="countdown360_'+i(this.element).attr("id")+'" width="'+this.settings.width+'" height="'+this.settings.height+'"><span id="countdown-text" role="status" aria-live="assertive"></span></canvas>');return i(this.element).prepend(t[0]),t[0]},_initPen:function(t){this.pen=t.getContext("2d"),this.pen.lineWidth=this.settings.strokeWidth,this.pen.strokeStyle=this.settings.strokeStyle,this.pen.fillStyle=this.settings.fillStyle,this.pen.textAlign="center",this.pen.textBaseline="middle",this.ariaText=i(t).children("#countdown-text"),this._clearRect()},_clearRect:function(){this.pen.clearRect(0,0,this.settings.width,this.settings.height)},_secondsLeft:function(t){return this.settings.seconds-t},_drawCountdownLabel:function(t){this.ariaText.text(e),this.pen.font=this.settings.fontWeight+" "+this.settings.fontSize+"px "+this.settings.fontFamily;var e=this._secondsLeft(t),i=1===e?this.settings.label[0]:this.settings.label[1],s=this.settings.label&&2===this.settings.label.length,n=this.settings.width/2;y=s?this.settings.height/2-this.settings.fontSize/6.2:this.settings.height/2,this.pen.fillStyle=this.settings.fillStyle,this.pen.fillText(e+1,n,y),this.pen.fillStyle=this.settings.fontColor,this.pen.fillText(e,n,y),s&&(this.pen.font="normal small-caps "+this.settings.fontSize/3+"px "+this.settings.fontFamily,this.pen.fillText(i,this.settings.width/2,this.settings.height/2+this.settings.fontSize/2.2))},_drawCountdownShape:function(t,e){this.pen.fillStyle=this.settings.fillStyle,this.pen.beginPath(),this.pen.arc(this.settings.arcX,this.settings.arcY,this.settings.radius,1.5*Math.PI,t,!1),this.pen.fill(),e&&this.pen.stroke()},_draw:function(){var t,e;t=(new Date).getTime()-this.startedAt.getTime(),e=Math.floor(t/1e3),endAngle=3.5*Math.PI-2*Math.PI/(1e3*this.settings.seconds)*t,this._clearRect(),this._drawCountdownShape(3.5*Math.PI,!1),e<this.settings.seconds?(this._drawCountdownShape(endAngle,!0),this._drawCountdownLabel(e)):(this._drawCountdownLabel(this.settings.seconds),this.stop(),this.settings.onComplete())}},i.fn[a]=function(t){var e;return this.each(function(){(e=i.data(this,"plugin_"+a))||(e=new n(this,t),i.data(this,"plugin_"+a,e))}),e}}(jQuery,window,document);