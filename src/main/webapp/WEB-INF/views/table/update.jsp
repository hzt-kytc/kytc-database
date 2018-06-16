<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/table/update.js"></script>
<div id="database_table_update_main_div" style="width:100%;height:100%;">
	<input name="database" type="hidden" value="${database }"/>
	<input name="tableName" type="hidden" value="${tableName }"/>
	<input name="_pri_key_" type="hidden" value="${_pri_key_ }"/>
	<input name="_pri_value_" type="hidden" value="${_pri_value_ }"/>
	<table class="d_table">
		<c:set var="index" value="0"></c:set>
		<c:forEach items="${column.rows }" var="item" varStatus="status">
			<c:if test="${item.extra!='auto_increment' and item.columnName!='is_deleted' and item.columnName!='operator' and item.columnName!='gmt_create' and item.columnName!='gmt_modified'  }">
				<c:if test="${index%2==0 }">
					<tr>
				</c:if>
				<td>${item.showComment }:</td>
				<td>
					<c:if test="${item.dataType=='date' }">
						<input name="${item.columnName }" class="easyui-datebox" />
					</c:if>
					<c:if test="${item.dataType=='datetime' or item.dataType=='timestamp' }">
						<input name="${item.columnName }" class="easyui-datetimebox" value="${result.data.get(item.columnName) }"/>
					</c:if>
					<c:if test="${item.columnName=='sort_num' }">
						<input class="easyui-numberspinner" value="1" data-options="increment:1" name="${item.columnName }"  value="${result.data.get(item.columnName) }"></input>
					</c:if>
					<c:if test="${item.dataType!='date' and item.dataType!='datetime' and item.dataType!='timestamp' and item.columnName!='sort_num'}">
						<input name="${item.columnName }" class="easyui-textbox"  value="${result.data.get(item.columnName) }"/>
					</c:if>
				</td>
				<c:if test="${index%2==1 }">
					</tr>
				</c:if>
				<c:set var="index" value="${index+1 }"></c:set>
			</c:if>
		</c:forEach>
		<tr>
			<td colspan="4">
				<div class="btn_div">
					<a name="save" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a>
					<a name="close" class="easyui-linkbutton" data-options="iconCls:'icon-back'">关闭</a>
				</div>
			</td>
		</tr>
	</table>
</div>