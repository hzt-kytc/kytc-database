<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<ul class="easyui-tree" name="database_tree">
	<c:forEach items="${database.data }" var="item">
		<li data-options="state:'closed'">
			<span>${item }</span>
			<ul data-name="${item }">
				<li data-options="state:'closed'">
					<span>表</span>
				</li>
				<li data-options="state:'closed'">视图</li>
				<li data-options="state:'closed'">函数</li>
				<li data-options="state:'closed'">事件</li>
			</ul>
		</li>
	</c:forEach>
</ul>