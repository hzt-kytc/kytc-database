package com.kytc.database.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kytc.database.service.QueryService;
import com.kytc.dto.PageDTO;

@Controller("queryController")
@RequestMapping("query")
public class QueryController {
	private String ROOT = "/query/";
	@Resource(name="queryServiceImpl")
	private QueryService queryServiceImpl;
	@RequestMapping(value="list",method=RequestMethod.POST)
	@ResponseBody
	public PageDTO<Map<String,Object>> list(String sql,Integer page,Integer rows){
		return queryServiceImpl.list(sql, page, rows);
	}
	@RequestMapping(value="list",method=RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> list(String sql){
		return queryServiceImpl.listReport(sql);
	}
	@RequestMapping(value="column",method=RequestMethod.GET)
	@ResponseBody
	public List<Map<String, Object>> column(String sql){
		return queryServiceImpl.listOne(sql);
	}
	@RequestMapping(value="index")
	public String index(String database, String tableName, Model model){
		return ROOT + "index";
	}
}
