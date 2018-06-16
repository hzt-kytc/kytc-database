<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<title>数据库管理首页</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/easyui/easyloader.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/easyui/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/Highcharts-6.1.0/code/highcharts.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/Highcharts-6.1.0/code/modules/series-label.js"></script>
	<script src="${pageContext.request.contextPath}/Highcharts-6.1.0/code/modules/exporting.js"></script>
	<script src="${pageContext.request.contextPath}/Highcharts-6.1.0/code/modules/export-data.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/common.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/index.js"></script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyui/themes/bootstrap/easyui.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyui/themes/icon.css">
	<link href="${pageContext.request.contextPath}/css/common.css" rel="stylesheet" type="text/css" />
</head>
	<body class="easyui-layout" id="database_main_div">
		<div data-options="region:'north',border:false" style="height:60px;background:#B3DFDA;padding:0px;text-align:center;">
			<div style="height:60px;text-align:center;">
				<div style="position:absolute;left:50%;margin-left:-65px;">
					<img style="width:60px;float:left;" alt="" src="${pageContext.request.contextPath}/image/database.png">
					<span style="float:left;display:block;height:60px;line-height:60px;">数据库管理</span>
				</div>
			</div>
		</div>
		<div data-options="region:'west',split:true,title:'数据库'" style="width:250px;">
			<jsp:include page="menu.jsp"></jsp:include>
		</div>
		<div data-options="region:'south',border:false" style="height:30px;background:#A9FACD;padding:0px;">south region</div>
		<div data-options="region:'center',title:'首页'" class="main_content"></div>
	</body>
</html>
