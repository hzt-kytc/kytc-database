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
	@Resource(name="queryQueryServiceImpl")
	private com.kytc.database.service.query.QueryService queryQueryServiceImpl;
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
	public String index(Integer id,Model model){
		if(id!=null){
			model.addAttribute("result", queryQueryServiceImpl.detail(id));
		}
		return ROOT + "index";
	}
	@RequestMapping(value="add",method=RequestMethod.GET)
	public String add(Integer id,Model model){
		if(id!=null){
			model.addAttribute("result", queryQueryServiceImpl.detail(id));
		}
		return ROOT + "add";
	}
}
