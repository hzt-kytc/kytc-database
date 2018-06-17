package com.kytc.database.controller.query;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kytc.database.po.QueryPO;
import com.kytc.database.service.query.QueryService;
import com.kytc.dto.DropDTO;
import com.kytc.dto.ResultDTO;

@Controller("queryQueryController")
@RequestMapping("query/query")
public class QueryController {
	@Resource(name="queryQueryServiceImpl")
	private QueryService queryQueryServiceImpl;
	private String ROOT_PATH = "/query/";

	@RequestMapping(value="add",method=RequestMethod.GET)
	public String addGet(Integer id,Model model) {
		if(id!=null){
			model.addAttribute("result", queryQueryServiceImpl.detail(id));
		}
		return ROOT_PATH + "add";
	}

	@RequestMapping(value="add",method=RequestMethod.POST)
	@ResponseBody
	public ResultDTO<String> addPost(QueryPO po) {
		if(po.getId()==null){
			return queryQueryServiceImpl.add(po);
		}else{
			return queryQueryServiceImpl.update(po);
		}
	}

	@RequestMapping(value="update",method=RequestMethod.GET)
	public String updateGet(Integer id,Model model) {
		model.addAttribute("result", queryQueryServiceImpl.detail(id));
		return ROOT_PATH + "update";
	}

	@RequestMapping(value="update",method=RequestMethod.POST)
	@ResponseBody
	public ResultDTO<String> updatePost(QueryPO po) {
		return queryQueryServiceImpl.update(po);
	}

	@RequestMapping(value="detail",method=RequestMethod.GET)
	public String detailGet(Integer id,Model model) {
		model.addAttribute("result", queryQueryServiceImpl.detail(id));
		return ROOT_PATH + "detail";
	}

	@RequestMapping(value="delete",method=RequestMethod.POST)
	@ResponseBody
	public ResultDTO<String> delete(Integer id){
		return queryQueryServiceImpl.delete(id);
	}
	
	@RequestMapping(value="drop",method=RequestMethod.GET)
	@ResponseBody
	public List<DropDTO> drop(){
		return queryQueryServiceImpl.drop();
	}
}
