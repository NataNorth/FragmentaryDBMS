package com.example.db.controller;

import com.example.db.dto.table.TableDto;
import com.example.db.services.DBService;
import com.example.db.services.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PageController {

    private final TableService tableService;
    private final DBService dbService;

    @Autowired
    public PageController(TableService tableService, DBService dbService) {
        this.tableService = tableService;
        this.dbService = dbService;
    }

    @GetMapping(value = "/")
    public String index(Model model) {
        System.out.println("controller");
        dbService.getByName("Test");
        TableDto table = tableService.getOne("Books");
        System.out.println(table);
        System.out.println("END");
        model.addAttribute("columns", table.getColumns());
        model.addAttribute("rows", table.getRows());
        model.addAttribute("tables", tableService.getAll("Test"));
        return "index";
    }

//    @GetMapping(value = "/db/{dbName}/table/{tableName}/get")
//    public String index(Model model, @PathVariable String tableName, @PathVariable String dbName) {
//        System.out.println("controller");
//        System.out.println(dbName);
//        System.out.println(tableName);
//        dbService.getByName(dbName);
//        TableDto table = tableService.getOne(tableName);
//        System.out.println(table);
//        System.out.println("END");
//        model.addAttribute("columns", table.getColumns());
//        model.addAttribute("rows", table.getRows());
//        model.addAttribute("tables", tableService.getAll(dbName));
//        return "index";
//    }
}
