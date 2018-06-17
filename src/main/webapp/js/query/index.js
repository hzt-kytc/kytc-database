$(function(){
	var mainDiv = $("#database_query_main_div");
	var mainDivList = $("div.list div.data",mainDiv);
	var initGrid1 = function(sql){
		$.ajax({
			url:"/query/column",
			data:{"sql":sql},
			dataType:"json",
			type:"get",
			success:function(data){
				if(data!=null&&data.length>0){
					var columnArr = new Array();
					var columnArr1 = new Array();
					var width = mainDiv.width()-30;
					var _width = width/data.length;
					if(_width<150){
						_width = 150;
					}
					$.each(data,function(index,item){
						var col = {
							"field":item.field,
							"title":item.field,
							"width":_width+"px",
							"align":"center"
						};
						if(item.type=='Date'){
							col.formatter = function(value){
								return $.toDateTime(value, 'yyyy-MM-dd hh:mm:ss');
							};
						}
						columnArr1.push(col);
					});
					columnArr.push(columnArr1);
					initGrid(columnArr);
				}
			}
		});
	};
	var initLine = function(sql){
		$.ajax({
			url:"/query/list",
			data:{"sql":sql},
			dataType:"json",
			type:"get",
			success:function(data){
				Highcharts.chart('container', {
				    chart: {
				        type: 'line'
				    },
				    title: {
				        text: data.title
				    },
				    subtitle: {
				        text: 'Source: '+data.subTitle
				    },
				    xAxis: {
				        categories: data.category,
				        title: {
				            text: data.xTitle
				        }
				    },
				    yAxis: {
				        title: {
				            text: data.yTitle
				        }
				    },
				    plotOptions: {
				        line: {
				            dataLabels: {
				                enabled: true
				            },
				            enableMouseTracking: false
				        }
				    },
				    series: data.series
				});
			}
		});
	};
	var initColumn = function(sql){
		$.ajax({
			url:"/query/list",
			data:{"sql":sql},
			dataType:"json",
			type:"get",
			success:function(data){
				Highcharts.chart('container', {
				    chart: {
				        type: 'column'
				    },
				    title: {
				        text: data.title
				    },
				    subtitle: {
				        text: 'Source: '+data.subTitle
				    },
				    xAxis: {
				    	categories: data.category,
				        title: {
				            text: data.xTitle
				        },
				        crosshair: true
				    },
				    yAxis: {
				    	title: {
				            text: data.yTitle
				        }
				    },
				    tooltip: {
				        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				            '<td style="padding:0"><b>{point.y} </b></td></tr>',
				        footerFormat: '</table>',
				        shared: true,
				        useHTML: true
				    },
				    plotOptions: {
				        column: {
				            pointPadding: 0.2,
				            borderWidth: 0
				        }
				    },
				    series: data.series
				});
			}
		});
	};
	mainDiv.off().on("click","a[name='action']",function(){
		var type = $("input[name='type']:checked",mainDiv).val();
		var sql = $("textarea[name='sql']",mainDiv).val();
		if(type==1){
			$("div.list",mainDiv).show();
			$("#container").hide();
			initGrid1(sql);
		}else if(type==3){
			$("div.list",mainDiv).hide();
			$("#container").show();
			initColumn(sql);
		}else if(type==2){
			$("div.list",mainDiv).hide();
			$("#container").show();
			initLine(sql);
		}
	}).on("change","input[name='type']",function(){
		$("a[name='action']",mainDiv).trigger("click");
	}).on("click","a[name='saveAs']",function(){
		var id = $("input[name='id']",mainDiv).val();
		$.EasyUI.Window({
			url:"/query/query/add",
			data:{"id":id},
			type:"get",
			width:800,
			height:500,
			title:"保存"
		});
	});
	function initGrid(columnArr){
		$("div.list",mainDiv).height(mainDiv.height()-$("div.search_form",mainDiv).height()-42);
		var sql = $("textarea[name='sql']",mainDiv).val();
		var jsonData = {};
		jsonData.sql = sql;
		$.EasyUI.DataGrid({
			gridId:mainDivList,
			url: "/query/list",
			queryParams: jsonData,//鍏抽敭涔嬪
			fitColumns: true,
			collapsible:false,
			nowrap: true,
			singleSelect: true,
			pagination: true,
			remoteSort: true,
			border: true,
			rownumbers: false,
			rowStyler:function(){
				return "height:35px";
			},onDblClickRow :function(rowIndex,rowData){
			},
			columns: columnArr
		});
	}
});