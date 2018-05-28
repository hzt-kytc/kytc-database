package com.kytc.database.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kytc.database.service.DatabaseService;

@Controller(value="indexController")
@RequestMapping(value="")
public class IndexController {
	@Resource(name="databaseServiceImpl")
	private DatabaseService databaseServiceImpl;
	@RequestMapping(value={"","index"})
	public String index(Model model){
		model.addAttribute("database", databaseServiceImpl.list());
		return "index";
	}
}
