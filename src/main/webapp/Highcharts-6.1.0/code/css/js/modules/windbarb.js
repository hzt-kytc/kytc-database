/*
  Highcharts JS v6.1.0 (2018-04-13)
 Wind barb series module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){var A=function(f){var k=f.each,r=f.defined,t=f.seriesTypes,d=f.stableSort;return{getPlotBox:function(){return f.Series.prototype.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)},translate:function(){t.column.prototype.translate.apply(this);var c=this.options,e=this.chart,b=this.points,a=b.length-1,g,f,h=c.onSeries,h=h&&e.get(h),c=c.onKey||"y",z=h&&h.options.step,p=
h&&h.points,m=p&&p.length,v=e.inverted,n=this.xAxis,w=this.yAxis,x=0,l,y,q,u;if(h&&h.visible&&m)for(x=(h.pointXOffset||0)+(h.barW||0)/2,g=h.currentDataGrouping,y=p[m-1].x+(g?g.totalRange:0),d(b,function(b,a){return b.x-a.x}),c="plot"+c[0].toUpperCase()+c.substr(1);m--&&b[a]&&!(l=p[m],g=b[a],g.y=l.y,l.x<=g.x&&void 0!==l[c]&&(g.x<=y&&(g.plotY=l[c],l.x<g.x&&!z&&(q=p[m+1])&&void 0!==q[c]&&(u=(g.x-l.x)/(q.x-l.x),g.plotY+=u*(q[c]-l[c]),g.y+=u*(q.y-l.y))),a--,m++,0>a)););k(b,function(a,c){var d;a.plotX+=
x;if(void 0===a.plotY||v)0<=a.plotX&&a.plotX<=n.len?v?(a.plotY=n.translate(a.x,0,1,0,1),a.plotX=r(a.y)?w.translate(a.y,0,0,0,1):0):a.plotY=e.chartHeight-n.bottom-(n.opposite?n.height:0)+n.offset-w.top:a.shapeArgs={};(f=b[c-1])&&f.plotX===a.plotX&&(void 0===f.stackIndex&&(f.stackIndex=0),d=f.stackIndex+1);a.stackIndex=d});this.onSeries=h}}}(k);(function(f,k){var r=f.each,t=f.seriesType;t("windbarb","column",{lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.value}\x3c/b\x3e ({point.beaufort})\x3cbr/\x3e'},
vectorLength:20,yOffset:-20,xOffset:0},{pointArrayMap:["value","direction"],parallelArrays:["x","value","direction"],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],trackerGroups:["markerGroup"],pointAttribs:function(d,c){var e=this.options;d=d.color||this.color;var b=this.options.lineWidth;c&&(d=e.states[c].color||
d,b=(e.states[c].lineWidth||b)+(e.states[c].lineWidthPlus||0));return{stroke:d,"stroke-width":b}},markerAttribs:function(){},getPlotBox:k.getPlotBox,windArrow:function(d){var c=1.943844*d.value,e,b=this.options.vectorLength/20,a=-10;if(d.isNull)return[];if(0===d.beaufortLevel)return this.chart.renderer.symbols.circle(-10*b,-10*b,20*b,20*b);d=["M",0,7*b,"L",-1.5*b,7*b,0,10*b,1.5*b,7*b,0,7*b,0,-10*b];e=(c-c%50)/50;if(0<e)for(;e--;)d.push(-10===a?"L":"M",0,a*b,"L",5*b,a*b+2,"L",0,a*b+4),c-=50,a+=7;e=
(c-c%10)/10;if(0<e)for(;e--;)d.push(-10===a?"L":"M",0,a*b,"L",7*b,a*b),c-=10,a+=3;e=(c-c%5)/5;if(0<e)for(;e--;)d.push(-10===a?"L":"M",0,a*b,"L",4*b,a*b),c-=5,a+=3;return d},translate:function(){var d=this.beaufortFloor,c=this.beaufortName;k.translate.call(this);r(this.points,function(e){for(var b=0;b<d.length&&!(d[b]>e.value);b++);e.beaufortLevel=b-1;e.beaufort=c[b-1]})},drawPoints:function(){var d=this.chart,c=this.yAxis,e=d.inverted,b=this.options.vectorLength/2;r(this.points,function(a){var g=
a.plotX,f=a.plotY;d.isInsidePlot(g,0,!1)?(a.graphic||(a.graphic=this.chart.renderer.path().add(this.markerGroup)),a.graphic.attr({d:this.windArrow(a),translateX:g+this.options.xOffset,translateY:f+this.options.yOffset,rotation:a.direction}).attr(this.pointAttribs(a))):a.graphic&&(a.graphic=a.graphic.destroy());a.tooltipPos=[g+this.options.xOffset+(e&&!this.onSeries?b:0),f+this.options.yOffset-(e?0:b+c.pos-d.plotTop)]},this)},animate:function(d){d?this.markerGroup.attr({opacity:.01}):(this.markerGroup.animate({opacity:1},
f.animObject(this.options.animation)),this.animate=null)},invertGroups:f.noop},{isValid:function(){return f.isNumber(this.value)&&0<=this.value}})})(k,A)});
