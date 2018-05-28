<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/table/detail.js"></script>
<div id="database_table_detail_main_div" style="width:100%;height:100%;">
	<div class="search_form" style="display:none;">
		<input name="database" value="${database }" type="hidden"/>
		<input name="tableName" value="${tableName }" type="hidden"/>
	</div>
	<div class="list" style="overflow-y:auto;">
		<div class="data" style="width:100%;"></div>
	</div>
</div>