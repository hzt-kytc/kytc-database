<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/query/index.js"></script>
<div id="database_query_main_div" style="width:100%;height:100%;">
	<div class="search_form" style="width:100%;height:150px;">
		<div style="float:left;width:80%;">
			<textarea name="sql" rows="5" cols="3" class="textbox" style="width:100%;height:150px;">
				select DATE_FORMAT(gmt_create,'%Y-%m-%d') as category,url as title,count(1) as value from tb_operate_log where 1=1 GROUP BY DATE_FORMAT(gmt_create,'%Y-%m-%d')
			</textarea>
		</div>
		<div style="float:left;">
			<br/>
			<a name="action1" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px">执行</a>
			<br/>
			<br/>
			<br/>
			<a name="reset" class="easyui-linkbutton" data-options="iconCls:'icon-reload'" style="width:80px">重置</a>
		</div>
	</div>
	<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
<!-- 	<div class="list" style="overflow-y:auto;width:100%;"> -->
<!-- 		<div class="data" style="width:100%;"></div> -->
<!-- 	</div> -->
</div>