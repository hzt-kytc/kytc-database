/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_table_detail_main_div");
	mainDiv.height(460)
	var mainDivList = $("div.list div.data",mainDiv);
	initGrid();
	function initGrid(){
		console.log(mainDiv.height())
		$("div.list",mainDiv).height(mainDiv.height());
		var jsonData=$("div.search_form",mainDiv).toJSON();
		console.log(jsonData)
		$.EasyUI.DataGrid({
			gridId:mainDivList,
			/*striped:true,*/
			url: "/table/column",
			queryParams: jsonData,
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
				console.log(rowIndex,rowData)
			},
			columns: [[{
				"field":"ordinalPosition",
				"title":"列标识号",
				"width":"80px",
				"align":"center"
			},{
				"field":"columnName",
				"title":"字段名称",
				"width":"150px",
				"align":"center"
			},{
				"field":"columnKey",
				"title":"索引",
				"width":"80px",
				"align":"center"
			},{
				"field":"columnDefault",
				"title":"默认值",
				"width":"80px",
				"align":"center"
			},{
				"field":"nullable",
				"title":"是否可空",
				"width":"80px",
				"align":"center"
			},{
				"field":"dataType",
				"title":"数据类型",
				"width":"100px",
				"align":"center"
			},{
				"field":"characterMaximumLength",
				"title":"最大长度(字符)",
				"width":"100px",
				"align":"center"
			},{
				"field":"characterOctetLength",
				"title":"最大长度(字节)",
				"width":"100px",
				"align":"center"
			},{
				"field":"characterSetName",
				"title":"字符集",
				"width":"80px",
				"align":"center"
			},{
				"field":"collationName",
				"title":"字段排序",
				"width":"100px",
				"align":"center"
			},{
				"field":"columnComment",
				"title":"字段备注",
				"width":"150px",
				"align":"center"
			}]]
		});
	}
})