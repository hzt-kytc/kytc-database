package com.kytc.database.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kytc.database.service.ViewService;
import com.kytc.dto.ResultDTO;

@Controller("viewController")
@RequestMapping("view")
public class ViewController {
	@Resource(name="viewServiceImpl")
	private ViewService viewServiceImpl;
	@RequestMapping(value="list")
	@ResponseBody
	public ResultDTO<List<String>> list(String database){
		return viewServiceImpl.list(database);
	}
}
