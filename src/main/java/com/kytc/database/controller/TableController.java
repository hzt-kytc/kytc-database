package com.kytc.database.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kytc.database.dto.ColumnDTO;
import com.kytc.database.service.ColumnService;
import com.kytc.database.service.TableService;
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
