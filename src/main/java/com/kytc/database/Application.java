package com.kytc.database;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
@MapperScan("com.kytc.database.dao")
@Component
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
