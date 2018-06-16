<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/query/index.js"></script>
<div id="database_query_main_div" style="width:100%;height:100%;">
	<div class="search_form" style="width:100%;height:150px;float:left;">
		<div style="float:left;width:80%;">
			<textarea name="sql" rows="5" cols="3" wrap="hard" class="textbox" style="width:100%;height:150px;">select DATE_FORMAT(gmt_create,'%Y-%m-%d') as xTitle,url as category,'日期' as xList,count(1) as value,'全民记仇' as title,'调用次数' as yTitle,'全民记仇数据统计' as subTitle from tb_operate_log where 1=1 and url in ('/match/make','/match/new') GROUP BY DATE_FORMAT(gmt_create,'%Y-%m-%d'),url ORDER BY DATE_FORMAT(gmt_create,'%Y-%m-%d') desc</textarea>
		</div>
		<div style="float:left;margin-left:20px;">
			<br/>
			<a name="action" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px">执行</a>
			<br/>
			<br/>
			<br/>
			<a name="reset" class="easyui-linkbutton" data-options="iconCls:'icon-reload'" style="width:80px">重置</a>
		</div>
	</div>
	<div style="width:100%;text-align:left;float:left;height:40px;">
		<label style="float:left;height:100%;margin-top:10px;display:block;"><input name="type" type="radio" checked="checked" value="1"/>表格报表</label>
		<label style="float:left;height:100%;margin-top:10px;display:block;"><input name="type" type="radio" value="2"/>线性报表</label>
	</div>
	<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto;display:none;"></div>
	<div class="list" style="overflow-y:auto;width:100%;">
		<div class="data" style="width:100%;"></div>
	</div>
</div>