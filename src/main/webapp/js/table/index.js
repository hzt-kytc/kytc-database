/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_table_main_div");
	var mainDivList = $("div.list div.data",mainDiv);
	var columns = mainDiv.data("columns");
	var columnArr = new Array();
	var columnArr1 = new Array();
	var width = mainDiv.width()-30;
	var _width = width/columns.length;
	if(_width<150){
		_width = 150;
	}
	var flag = false;
	var priKey = "";
	$.each(columns,function(index,item){
		if(item.columnKey=="PRI"){
			flag = true;
			priKey = item.columnName;
		}
		var col = {
			"field":item.columnName,
			"title":item.showComment,
			"width":_width+"px",
			"align":"center"
		};
		if(item.dataType=='datetime'){
			col.formatter = function(value){
				return $.toDateTime(value, 'yyyy-MM-dd hh:mm:ss');
			};
		}
		columnArr1.push(col);
	});
	if(!flag){
		$.EasyUI.message("该表没有主键","e");
	}
	columnArr.push(columnArr1);
	mainDiv.on("click","a[name='detail']",function(){
		var jsonData=$("div.search_form",mainDiv).toJSON();
		console.log(jsonData)
		$.EasyUI.Window({
			url:"/table/detail",
			data:jsonData,
			type:"get",
			width:800,
			height:500,
			title:"查看表详情"
		});
	}).on("click","a[name='add']",function(){
		var jsonData=$("div.search_form",mainDiv).toJSON();
		$.EasyUI.Window({
			url:"/table/add",
			data:jsonData,
			type:"get",
			width:800,
			height:500,
			title:"添加表"+jsonData.tableName+"数据"
		});
	}).on("click","a[name='update']",function(){
		var jsonData=$("div.search_form",mainDiv).toJSON();
		$.datagrid.getSelectRow({
			gridId:mainDivList,
			field:priKey,
			success:function(value,row){
				jsonData.priKey = priKey;
				jsonData.priValue = value;
				$.EasyUI.Window({
					url:"/table/update",
					data:jsonData,
					type:"get",
					width:800,
					height:500,
					title:"修改表"+jsonData.tableName+"\""+priKey+"="+value+"\"的"+"数据"
				});
			}
		});
	}).on("click","a[name='delete']",function(){
		var jsonData=$("div.search_form",mainDiv).toJSON();
		$.datagrid.getSelectRow({
			gridId:mainDivList,
			field:priKey,
			success:function(value,row){
				$.EasyUI.message("确定要删除该条数据吗","cf",function(){
					jsonData.priKey = priKey;
					jsonData.priValue = value;
					console.log(jsonData)
					$.ajax({
						url:"/table/delete",
						type:"post",
						data:jsonData,
						dataType:"json",
						success:function(data){
							if(data.status){
								$.EasyUI.message("删除成功","s");
								$("a[name='search']",mainDiv).trigger("click");
							}else{
								$.EasyUI.message(data.error_reason,"e");
							}
						}
					});
				});
			}
		});
	}).on("click","a[name='export']",function(){
		var jsonData=$("div.search_form",mainDiv).toJSON();
		$.ajax({
			url:"/table/export",
			type:"post",
			data:jsonData,
			dataType:"json",
			success:function(data){
				if(data.status){
					$.EasyUI.message("导出成功","s");
				}else{
					$.EasyUI.message(data.error_reason,"e");
				}
			}
		});
	}).on("click","a[name='search']",function(){
		mainDivList.datagrid('reload',$("div.search_form",mainDiv).toJSON());
	}).on("click","a[name='reset']",function(){
		$("div.search_form select",mainDiv).combobox("setValue","");
		$("div.search_form input.easyui-textbox",mainDiv).textbox("setValue","");
		mainDivList.datagrid('reload',$("div.search_form",mainDiv).toJSON());
	});
	initGrid();
	function initGrid(){
		$("div.list",mainDiv).height(mainDiv.height()-
				$("form.search_form",mainDiv).height()-$("div.search_form",mainDiv).height()+4);
		var jsonData=$("div.search_form",mainDiv).toJSON();
		$.EasyUI.DataGrid({
			gridId:mainDivList,
			/*striped:true,*/
			url: "/table/list",
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
				console.log(rowData);
				var jsonData=$("div.search_form",mainDiv).toJSON();
				jsonData.priKey = priKey;
				jsonData.priValue = eval("rowData."+priKey);
				$.EasyUI.Window({
					url:"/table/data",
					data:jsonData,
					type:"get",
					width:800,
					height:500,
					title:"添加表"+jsonData.tableName+"数据"
				});
			},
			columns: columnArr
		});
	}
});