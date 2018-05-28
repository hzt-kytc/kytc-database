/**
 * ��ҳjs
 */
$(function(){
	var mainDiv = $("#database_main_div");
	var getType = function( text ){
		if(text == "表"){
			return "table";
		}else if(text == "视图"){
			return "view";
		}else if(text == "函数"){
			return "function";
		}else{
			return "event";
		}
	}
	$("ul[name='database_tree']",mainDiv).tree({  
        onClick:function(node){  
        	var isLeaf = $("ul[name='database_tree']",mainDiv).tree('isLeaf', node.target);
        	if( isLeaf ){
        		var nodeParent = $("ul[name='database_tree']",mainDiv).tree('getParent',node.target);
        		var type = getType( nodeParent.text );
        		var root = $("ul[name='database_tree']",mainDiv).tree('getParent',nodeParent.target);
        		var database = root.text;
        		var tableName = node.text;
        		$.ajax({
        			type:"get",
        			url:"/"+type+"/index",
        			data:{"database":database,"tableName":tableName},
        			dataType:"html",
        			success:function(data){
        				var title = nodeParent.text +" \""+tableName + "\" 详情";
        				$("div.main_content",mainDiv).closest("div.layout-panel-center").find("div.panel-header div.panel-title").html(title)
        				$("div.main_content",mainDiv).html(data);
        				$.parser.parse($("div.main_content",mainDiv))
        			}
        		})
        	}
        },
        onExpand:function(node){
        },onBeforeExpand:function(node,param){
        	if(!$(node.target).closest("ul").hasClass("tree")){
        		var database = $(node.target).closest("ul").closest("li").find("div:eq(0) span.tree-title").html();
        		var type = getType( node.text );
        		if(!$(node.target).closest("li").find("ul").is(":hidden")){
        			$.ajax({
            			url:"/"+type+"/list",
            			type:"get",
            			data:{"database":database},
            			dataType:"json",
            			success:function(data){
            				if(data.code=="00000"){
            					var dataArr = new Array();
            					$.each(data.data,function(index,item){
            						var data_ = {};
            						data_.id = index;
            						data_.text = item;
            						dataArr.push(data_)
            					})
            					$(node.target).closest("li").find("ul").show()
            					$("ul[name='database_tree']",mainDiv).tree('append', {
            						parent:node.target,
            						data:dataArr
            					});
            				}
            			}
            		})
        		}
        	}else{
        	}
        }
    });  
})