<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/table/index.js"></script>
<style type="text/css">
.search_form{width:100%;}
.search_form table{width:100%;}
.search_form table tr{height:30px;}
.search_form table tr td:nth-child(even){width:18%;}
.search_form table tr td:nth-child(odd){width:15%;}
</style>
<div id="database_table_main_div" style="width:100%;height:100%;" data-columns='${column }'>
	<form class="search_form">
		<table>
			<tr>
				<td>表类型</td>
				<td>${table.data.tableType }
					<a name="detail">详情</a>
					<a name="export">导出</a>
				</td>
				<td>数据库引擎</td>
				<td>${table.data.engine }</td>
				<td>版本</td>
				<td>${table.data.version }</td>
			</tr>
			<tr>
				<td>行格式</td>
				<td>${table.data.rowFormat }</td>
				<td>数据数</td>
				<td>${table.data.tableRows }</td>
				<td>平均行长度</td>
				<td>${table.data.avgRowLength }</td>
			</tr>
			<tr>
				<td>数据长度</td>
				<td>${table.data.dataLength }</td>
				<td>最大数据长度</td>
				<td>${table.data.maxDataLength }</td>
				<td>索引长度</td>
				<td>${table.data.indexLength }</td>
			</tr>
			<tr>
				<td>空间碎片</td>
				<td>${table.data.dataFree }</td>
				<td>自增当前值</td>
				<td>${table.data.autoIncrement }</td>
				<td>创建时间</td>
				<td>
					<fmt:formatDate value="${table.data.createTime }" pattern="yyyy-MM-dd hh:mm:ss"/>
				</td>
			</tr>
			<tr>
				<td>更新时间</td>
				<td>
					<fmt:formatDate value="${table.data.updateTime }" pattern="yyyy-MM-dd hh:mm:ss"/>
				</td>
				<td>检查时间</td>
				<td>
					<fmt:formatDate value="${table.data.checkTime }" pattern="yyyy-MM-dd hh:mm:ss"/>
				</td>
				<td>字符编码</td>
				<td>${table.data.tableCollation }</td>
			</tr>
			<tr>
				<td>校验和</td>
				<td>${table.data.checksum }</td>
				<td>创建选项</td>
				<td>${table.data.createOptions }</td>
				<td>注释</td>
				<td>${table.data.tableComment }</td>
			</tr>
		</table>
	</form>
	<div class="search_form">
		<select class="easyui-combobox" name="columnName" style="width:200px;" data-options="
				panelHeight:'200px'
			">
			<option value="">--请选择--</option>
			<c:forEach items="${columns.rows }" var="item">
				<option value="${item.columnName }">${item.columnName }</option>
			</c:forEach>
		</select>
		<input name="database" value="${table.data.tableSchema }" type="hidden"/>
		<input name="tableName" value="${table.data.tableName }" type="hidden"/>
		<input class="easyui-textbox" style="width:200px;height:32px" name="columnValue"/>
		<a name="search" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px">查询</a>
		<a name="reset" class="easyui-linkbutton" data-options="iconCls:'icon-reload'" style="width:80px">重置</a>
		<a name="add" class="easyui-linkbutton" data-options="iconCls:'icon-add'" style="width:80px">添加</a>
		<a name="update" class="easyui-linkbutton" data-options="iconCls:'icon-edit'" style="width:80px">修改</a>
	</div>
	<div class="list" style="overflow-y:auto;">
		<div class="data" style="width:100%;"></div>
	</div>
</div>