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
				console.log(data)
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
	}
	mainDiv.off().on("click","a[name='action']",function(){
		var type = $("input[name='type']:checked",mainDiv).val();
		var sql = $("textarea[name='sql']",mainDiv).val();
		if(type==1){
			$("div.list",mainDiv).show();
			$("#container").hide();
			initGrid1(sql);
		}else{
			$("div.list",mainDiv).hide();
			$("#container").show();
			initLine(sql);
		}
	}).on("change","input[name='type']",function(){
		$("a[name='action']",mainDiv).trigger("click");
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