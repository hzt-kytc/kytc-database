/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_table_add_main_div");
	var parentMainDiv = $("#database_table_main_div");
	mainDiv.off().on("click","a[name='close']",function(){
		$.EasyUI.Window.close(mainDiv);
	}).on("click","a[name='save']",function(){
		var jsonData = mainDiv.toJSON();
		console.log(jsonData)
		if(mainDiv.form("validate")){
			$.ajax({
				url:"/table/add",
				type:"post",
				data:jsonData,
				success:function(data){
					if(data.status){
						$.EasyUI.Window.close(mainDiv);
						$.EasyUI.message("添加成功","s");
						$("a[name='search']",parentMainDiv).trigger("click");
					}else{
						$.EasyUI.message(data.error_reason,"e");
					}
				}
			})
		}
	});
})