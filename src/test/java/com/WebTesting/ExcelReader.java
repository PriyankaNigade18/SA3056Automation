package com.WebTesting;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.*;
import org.testng.annotations.Test;

import io.opentelemetry.exporter.logging.SystemOutLogRecordExporter;

public class ExcelReader {
  @Test
  public void fileReadingTest() throws IOException
  {
	  File f1=new File(System.getProperty("user.dir")+"//TestData//Data.xlsx");
	  FileInputStream fs=new FileInputStream(f1);
	  
	  //wb-->sheet-->row-->cell-->value
	  XSSFWorkbook wb=new XSSFWorkbook(fs);
	  
	  //number of rows
	  int rows=wb.getSheet("userdata").getPhysicalNumberOfRows();
	  System.out.println("Number of rows: "+rows);
	  
	  
	  //number of cells
	  int cells=wb.getSheet("userdata").getRow(0).getPhysicalNumberOfCells();	
	  System.out.println("Number of  cells: "+cells);
	  
	  //create array of same size like file contents
	  Object arr[][]=new Object[rows][cells];
	  
	  
	  //read data from file and add it into array
	  for(int i=0;i<rows;i++)
	  {
		  for(int j=0;j<cells;j++)
		  {
			  arr[i][j]=wb.getSheet("userdata").getRow(i).getCell(j).getStringCellValue();
			  System.out.print(arr[i][j]+"   ");
		  }
		  System.out.println();
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  /*
	  //single record from file
	  String value=wb.getSheet("userdata").getRow(1).getCell(0).getStringCellValue();
	  System.out.println(value);
	  
	  /*
	  XSSFSheet sheet1=wb.getSheet("userdata");
	  
	  XSSFRow row1=sheet1.getRow(3);
	 XSSFCell cell= row1.getCell(0);
	 String value=cell.getStringCellValue();
	  System.out.println(value);
	  
	  */
	  
	  
	  
	  
	  
	  
	  
  }
}
