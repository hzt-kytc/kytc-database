<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/query/add.js"></script>
<div id="database_query_add_main_div" style="width:100%;height:100%;">
	<table class="s_table">
		<tr>
			<td style="width:30%;">查询语句:</td>
			<td style="width:70%;">
				<div name="content"></div>
				<input name="content" type="hidden"/>
				<input name="id" value='<c:if test="${result!=null and result.status }">${result.data.id }</c:if>' type="hidden"/>
			</td>
		</tr>
		<tr>
			<td>标题:</td>
			<td>
				<input name="title" class="easyui-textbox" value='<c:if test="${result!=null and result.status }">${result.data.title }</c:if>'/>
			</td>
		</tr>
		<tr>
			<td>排序号:</td>
			<td>
				<input class="easyui-numberbox" name="sortNum" value='<c:if test="${result!=null and result.status }">${result.data.sortNum }</c:if>' data-options="min:1,required:true">
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<div class="btn_div">
					<a name="save" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a>
					<a name="close" class="easyui-linkbutton" data-options="iconCls:'icon-close'">关闭</a>
				</div>
			</td>
		</tr>
	</table>
</div>