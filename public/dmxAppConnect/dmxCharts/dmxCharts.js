/*!
 DMXzone Charts
 Version: 1.1.5
 (c) 2021 DMXzone.com
 @build 2021-11-23 15:20:57
 */
dmx.Component("chart",{attributes:{width:{type:Number,default:800},height:{type:Number,default:600},responsive:{type:Boolean,default:!1},type:{type:String,default:"line"},colors:{type:[String,Array],default:"default"},legend:{type:String,default:""},data:{type:Array,default:[]},labels:{type:String,default:""},nogrid:{type:Boolean,default:!1},points:{type:Boolean,default:!1},"point-style":{type:String,default:"circle"},"point-size":{type:String,default:3},smooth:{type:Boolean,default:!1},thickness:{type:Number,default:1},dashed:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1},multicolor:{type:Boolean,default:!1},cutout:{type:Number,default:50},noanimation:{type:Boolean,default:!1},fullbar:{type:Boolean,default:!1},"label-x":{type:String,default:"$value"},"label-y":{type:String,default:"$value"}},colors:{default:["#1c9f8d","#d94712","#2d81b9","#1aa042","#ad1999","#d89515","#d83148","#7e2dad","#828280","#ad312f","#1c9f8d","#d94712","#2d81b9","#1aa042","#ad1999","#d89515","#d83148","#7e2dad","#828280","#ad312f"],colors1:["#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854","#4D4D4D","#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854","#4D4D4D"],colors2:["#5cbae6","#b6d957","#fac364","#d998cb","#f2d249","#93b9c6","#ccc5a8","#52bacc","#98aafb","#5cbae6","#b6d957","#fac364","#d998cb","#f2d249","#93b9c6","#ccc5a8","#52bacc","#98aafb"],colors3:["#3678b3","#f47d0d","#479f2f","#ca2227","#9068bc","#87564b","#da77c1","#7f7f7f","#bbbc26","#4bbfcf","#3678b3","#f47d0d","#479f2f","#ca2227","#9068bc","#87564b","#da77c1","#7f7f7f","#bbbc26","#4bbfcf"],colors4:["#b1c7e8","#f8b978","#a2df8b","#f69795","#c3b0d5","#bf9b94","#f1b5d2","#c7c7c7","#dbda8e","#a6dae5","#b1c7e8","#f8b978","#a2df8b","#f69795","#c3b0d5","#bf9b94","#f1b5d2","#c7c7c7","#dbda8e","#a6dae5"],colors5:["#3a3d79","#66793a","#886c32","#7e3c39","#764273","#4383bd","#db520a","#4ba355","#746cb0","#636363","#3a3d79","#66793a","#886c32","#7e3c39","#764273","#4383bd","#db520a","#4ba355","#746cb0","#636363"],colors6:["#5356a2","#8ea153","#b99d3b","#a5484a","#9e5293","#76afd6","#f38b3c","#80c377","#9e9ac8","#969696","#5356a2","#8ea153","#b99d3b","#a5484a","#9e5293","#76afd6","#f38b3c","#80c377","#9e9ac8","#969696"],colors7:["#6c70ce","#b8ce6c","#e2b853","#cc606b","#c66ebc","#a4cae1","#f5ac6b","#a8d99b","#bcbddc","#bdbdbd","#6c70ce","#b8ce6c","#e2b853","#cc606b","#c66ebc","#a4cae1","#f5ac6b","#a8d99b","#bcbddc","#bdbdbd"],colors8:["#9c9fde","#cfda9c","#e4ca94","#df959b","#d89ed5","#c9dbef","#f8cfa2","#cbe9c0","#dadaeb","#d9d9d9","#9c9fde","#cfda9c","#e4ca94","#df959b","#d89ed5","#c9dbef","#f8cfa2","#cbe9c0","#dadaeb","#d9d9d9"],colors9:["#f44336","#8bc34a","#03a9f4","#ffc107","#e91e63","#cddc39","#00bcd4","#ff9800","#9c27b0","#009688","#f44336","#8bc34a","#03a9f4","#ffc107","#e91e63","#cddc39","#00bcd4","#ff9800","#9c27b0","#009688"]},render:function(t){this.$node=document.createElement("canvas"),this.$node.setAttribute("width",this.props.width),this.$node.setAttribute("height",this.props.height),this.$node.id=this.name,dmx.dom.replace(t,this.$node),"string"==typeof this.props.colors&&(this.props.colors=this.colors[this.props.colors]||this.colors.default),this.datasets=this.getDatasets(t),this.update({})},update:function(t){var o=this,r=this.props.type,s={type:"area"==r?"line":r,options:{responsive:this.props.responsive,layout:{padding:5},legend:{display:!1},tooltips:{callbacks:{label:function(t,s){var a=s.datasets[t.datasetIndex];if(a.tooltipExpression)return dmx.parse(a.tooltipExpression,new dmx.DataScope({$label:a.label,$value:a.data[t.index]},this));if("doughnut"!=r&&"pie"!=r)return"palarArea"==r?s.labels[t.index]+": "+t.yLabel:((e=a.label||"")&&(e+=": "),e+=null!=(o=t.value)?o:t.yLabel);var e=s.labels[t.index],o=": "+a.data[t.index];return Array.isArray(e)?(e=e.slice())[0]+=o:e+=o,e}}}}};if("string"==typeof this.props.colors&&(this.props.colors=this.colors[this.props.colors]||this.colors.default),this.props.noanimation&&(s.options.animation={duration:0},s.options.hover={animationDuration:0}),this.props.legend&&(s.options.legend.display=!0,s.options.legend.position=this.props.legend),"line"!=this.props.type&&"area"!=this.props.type||(s.options.scales={xAxes:[{gridLines:{display:!this.props.nogrid},ticks:{callback:function(t,s,a){var e=dmx.parse(o.props["label-x"],new dmx.DataScope({$value:t},o));return null!=e?e:t}}}],yAxes:[{gridLines:{display:!this.props.nogrid},stacked:this.props.stacked,ticks:{beginAtZero:!0,callback:function(t,s,a){var e=dmx.parse(o.props["label-y"],new dmx.DataScope({$value:t},o));return null!=e?e:t}}}]},this.datasets.forEach(function(t,s){var a=this.props.colors[s];Object.assign(t,{fill:"area"==this.props.type,lineTension:this.props.smooth?.4:0,backgroundColor:Color(a).alpha(.5).rgbaString(),borderWidth:+this.props.thickness,borderColor:a,borderDash:this.props.dashed?[5,5]:[],pointStyle:this.props["point-style"],pointBackgroundColor:a,pointBorderColor:a,pointBorderWidth:1,pointHitRadius:10,pointRadius:this.props.points?+this.props["point-size"]:0,pointHoverRadius:+this.props["point-size"]})},this)),"bar"!=this.props.type&&"horizontalBar"!=this.props.type||(s.options.scales={xAxes:[{gridLines:{display:!this.props.nogrid},stacked:this.props.stacked,ticks:{beginAtZero:!0,callback:function(t,s,a){var e=dmx.parse(o.props["label-x"],new dmx.DataScope({$value:t},o));return null!=e?e:t}}}],yAxes:[{gridLines:{display:!this.props.nogrid},stacked:this.props.stacked,ticks:{beginAtZero:!0,callback:function(t,s,a){var e=dmx.parse(o.props["label-y"],new dmx.DataScope({$value:t},o));return null!=e?e:t}}}]},this.datasets.forEach(function(t,s){var a=this.props.colors[s];Object.assign(t,{backgroundColor:this.props.multicolor?this.props.colors.map(function(t){return Color(t).alpha(.5).rgbaString()}):Color(a).alpha(.5).rgbaString(),borderColor:this.props.multicolor?this.props.colors:a,borderDash:this.props.dashed?[5,5]:[],borderWidth:+this.props.thickness,barPercentage:this.props.fullbar?1:.9,categoryPercentage:this.props.fullbar?1:.8})},this)),"polarArea"!=this.props.type&&"radar"!=this.props.type||(s.options.scale={gridLines:{display:!this.props.nogrid},ticks:{beginAtZero:!0}},this.datasets.forEach(function(t,s){var a=this.props.colors[s];Object.assign(t,{fill:!0,lineTension:this.props.smooth?.4:0,borderWidth:+this.props.thickness,borderDash:this.props.dashed?[5,5]:[],borderColor:"polarArea"==this.props.type?this.props.colors:a,backgroundColor:"polarArea"==this.props.type?this.props.colors.map(function(t){return Color(t).alpha(.3).rgbaString()}):Color(a).alpha(.3).rgbaString(),pointStyle:this.props["point-style"],pointBackgroundColor:"polarArea"==this.props.type?this.props.colors:a,pointBorderColor:"polarArea"==this.props.type?this.props.colors:a,pointBorderWidth:1,pointHitRadius:10,pointRadius:this.props.points?+this.props["point-size"]:0,pointHoverRadius:+this.props["point-size"]})},this)),"pie"!=this.props.type&&"doughnut"!=this.props.type||this.datasets.forEach(function(t,s){this.props.colors[s];Object.assign(t,{backgroundColor:this.props.colors.map(function(t){return Color(t).alpha(.5).rgbaString()}),borderColor:this.props.colors,borderWidth:+this.props.thickness})},this),"doughnut"==this.props.type&&(s.options.cutoutPercentage=this.props.cutout),JSON.stringify(s)!=JSON.stringify(this.options))this.props.type&&(this.options=dmx.clone(s),s.data=this.getData(),this.chart&&this.chart.destroy(),this.chart=new Chart(this.$node,dmx.clone(s)));else if(this.chart){var a=this.getData(),e=!1;JSON.stringify(this.chart.data.labels)!=JSON.stringify(a.labels)&&(this.chart.data.labels=a.labels,e=!0),a.datasets.length!=this.chart.data.datasets.length?(this.chart.data.datasets=a.datasets,e=!0):a.datasets.forEach(function(s,a){["label","backgroundColor","borderColor","borderWidth","dataExpression","tooltipExpression","data"].forEach(function(t){JSON.stringify(this.chart.data.datasets[a][t])!=JSON.stringify(s[t])&&(this.chart.data.datasets[a][t]=s[t],e=!0)},this)},this),e&&this.chart.update()}},getDatasets:function(t){for(var s=[],a=1;a<=20;a++)t.hasAttribute("dataset-"+a+":value")&&s.push({label:t.hasAttribute("dataset-"+a+":label")?t.getAttribute("dataset-"+a+":label"):"dataset "+a,backgroundColor:this.props.colors.map(function(t){return Color(t).alpha(.5).rgbaString()}),borderColor:this.props.colors,borderWidth:1,dataExpression:t.getAttribute("dataset-"+a+":value"),tooltipExpression:t.getAttribute("dataset-"+a+":tooltip"),data:[]});return s},getData:function(){return this.datasets.map(function(s){var t=dmx.repeatItems(this.props.data);return s.data=t.map(function(t){return+dmx.parse(s.dataExpression,new dmx.DataScope(t,this))},this),[]},this),{labels:this.getLabels(),datasets:this.datasets}},getLabels:function(){return dmx.repeatItems(this.props.data).map(function(t,s){return this.props.labels?dmx.parse(this.props.labels,new dmx.DataScope(t,this)):"value "+(s+1)},this)}});
//# sourceMappingURL=../maps/dmxCharts.js.map
