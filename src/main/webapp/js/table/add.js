/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_table_add_main_div");
	mainDiv.off().on("click","a[name='close']",function(){
		$.EasyUI.Window.close(mainDiv);
	}).on("click","a[name='save']",function(){
		var jsonData = mainDiv.toJSON();
		if(mainDiv.form("validate")){
			$.ajax({
				url:"/cmsUser/add",
				type:"post",
				data:jsonData,
				success:function(data){
					if(data.status){
						$.EasyUI.Window.close(mainDiv);
						$.EasyUI.message("添加成功","s");
						$("#cms_base_cms_user_main_div_list").datagrid('reload',$("form[name='search_form']",$("#cms_base_cms_user_main_div")).toJSON());
					}else{
						$.EasyUI.message(data.error_reason,"e");
					}
				}
			})
		}
	});
})