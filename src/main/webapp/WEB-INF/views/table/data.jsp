<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/table/data.js"></script>
<div id="database_table_data_main_div" style="width:100%;height:100%;">
	<table class="d_table">
		<c:forEach items="${columns.rows }" var="item" varStatus="status">
			<c:if test="${status.index%2==0 }">
				<tr>
			</c:if>
			<td title="${item.columnComment }">${item.showComment }:</td>
			<td>
				${result.data.get(item.columnName) }
			</td>
			<c:if test="${status.index%2==1 }">
				</tr>
			</c:if>
		</c:forEach>
		<tr>
			<td colspan="4">
				<div class="btn_div">
					<a name="close" class="easyui-linkbutton" data-options="iconCls:'icon-back'">关闭</a>
				</div>
			</td>
		</tr>
	</table>
</div>