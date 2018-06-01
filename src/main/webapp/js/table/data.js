/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_table_data_main_div");
	mainDiv.off().on("click","a[name='close']",function(){
		$.EasyUI.Window.close(mainDiv);
	});
})