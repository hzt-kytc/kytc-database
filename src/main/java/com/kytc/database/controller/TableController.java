package com.kytc.database.controller;

import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kytc.database.dto.ColumnDTO;
import com.kytc.database.service.ColumnService;
import com.kytc.database.service.TableService;
import com.kytc.database.utils.DatabaseUtils;
import com.kytc.database.vo.TableVO;
import com.kytc.dto.PageDTO;
import com.kytc.dto.ResultDTO;
import com.kytc.utils.common.JsonUtils;

@Controller("tableController")
@RequestMapping("table")
public class TableController {
	private String ROOT = "/table/";
	@Resource(name="tableServiceImpl")
	private TableService tableServiceImpl;
	@Resource(name="columnServiceImpl")
	private ColumnService columnServiceImpl;
	@RequestMapping(value="list",method=RequestMethod.GET)
	@ResponseBody
	public ResultDTO<List<String>> list(String database){
		return tableServiceImpl.list(database);
	}
	@RequestMapping(value="index")
	public String index(String database, String tableName, Model model){
		model.addAttribute("table", tableServiceImpl.detail(database, tableName));
		PageDTO<ColumnDTO> page = columnServiceImpl.list(database, tableName);
		DatabaseUtils.init(page, tableName);
		model.addAttribute("columns", page);
		model.addAttribute("column", JsonUtils.toJSON(page.getRows()));
		return ROOT + "index";
	}
	@RequestMapping(value="list",method=RequestMethod.POST)
	@ResponseBody
	public PageDTO<Map<String, Object>> list(TableVO vo){
		return tableServiceImpl.dataList(vo);
	}
	@RequestMapping(value="detail",method=RequestMethod.GET)
	public String detail(String database, String tableName, Model model){
		System.out.println(database+"   "+tableName);
		model.addAttribute("database", database);
		model.addAttribute("tableName", tableName);
		return ROOT + "detail";
	}
	@RequestMapping(value="data",method=RequestMethod.GET)
	public String data(String database, String tableName, String priKey,String priValue, Model model){
		System.out.println(database+"   "+tableName);
		model.addAttribute("database", database);
		model.addAttribute("tableName", tableName);
		PageDTO<ColumnDTO> page = columnServiceImpl.list(database, tableName);
		DatabaseUtils.init(page, tableName);
		model.addAttribute("columns", page);
		model.addAttribute("result", tableServiceImpl.dataDetail(database, tableName, priKey, priValue));
		return ROOT + "data";
	}
	@RequestMapping(value="add",method=RequestMethod.GET)
	public String addGet(String database, String tableName, Model model){
		System.out.println(database+"   "+tableName);
		model.addAttribute("database", database);
		model.addAttribute("tableName", tableName);
		PageDTO<ColumnDTO> page = columnServiceImpl.list(database, tableName);
		DatabaseUtils.init(page, tableName);
		model.addAttribute("result", page);
		return ROOT + "add";
	}
	private Map<String,Object> getRequestMap(HttpServletRequest request){
		Enumeration<String> keyEnum = request.getParameterNames();
		Map<String,Object> map = new HashMap<String,Object>();
		while(keyEnum.hasMoreElements()){
			String key = keyEnum.nextElement();
			map.put(key, request.getParameter(key));
		}
		return map;
	}
	@RequestMapping(value="add",method=RequestMethod.POST)
	@ResponseBody
	public ResultDTO<String> addPost(HttpServletRequest request){
		Map<String,Object> map = getRequestMap(request);
		PageDTO<ColumnDTO> page = columnServiceImpl.list(""+map.get("database"), ""+map.get("tableName"));
		for(ColumnDTO dto:page.getRows()){
			if(dto.getColumnName().trim().equals("is_deleted")){
				map.put("is_deleted", 0);
			}
			if(dto.getColumnName().trim().equals("gmt_create")||dto.getColumnName().trim().equals("gmt_modified")){
				map.put(dto.getColumnName(), new Date());
			}
		}
		return tableServiceImpl.addData(map);
	}
	@RequestMapping(value="column",method=RequestMethod.POST)
	@ResponseBody
	public PageDTO<ColumnDTO> column(String database, String tableName){
		return columnServiceImpl.list(database, tableName);
	}
	@RequestMapping(value="export",method=RequestMethod.POST)
	@ResponseBody
	public ResultDTO<String> export(String database, String tableName){
		return tableServiceImpl.export(database, tableName);
	}
}
