$(function(){
	var mainDiv = $("#database_query_add_main_div");
	var parentMainDiv = $("#database_query_main_div");
	var rootPath = "/query/query/";
	var sql = $("textarea[name='sql']",parentMainDiv).val();
	$("div[name='content']",mainDiv).html(sql);
	$("input[name='content']",mainDiv).val(sql);
	mainDiv.off().on("click","a[name='save']",function(){
		if(mainDiv.form('validate')){
			var jsonData = mainDiv.toJSON();
			console.log(jsonData)
			$.ajax({
				url:rootPath+"add",
				type:"post",
				data:jsonData,
				dataType:"json",
				success:function(data){
					if(data.status){
						$.EasyUI.Window.close(mainDiv);
					}else{
						$.EasyUI.message(data.error_reason,"s",null);
						return;
					}
				}
			});
		}
	}).on("click","a[name='close']",function(){
		$.EasyUI.Window.close(mainDiv);
	});
});