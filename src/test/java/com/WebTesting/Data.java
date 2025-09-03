package com.WebTesting;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.annotations.DataProvider;

public class Data 
{
	@DataProvider(name="exceldata")
	public Object[][] testData()
	{
		File f1=new File(System.getProperty("user.dir")+"//TestData//Data.xlsx");
		  FileInputStream fs;
		  Object arr[][]=null;
		try {
			fs = new FileInputStream(f1);
			 //wb-->sheet-->row-->cell-->value
			  XSSFWorkbook wb=new XSSFWorkbook(fs);
			  
			  //number of rows
			  int rows=wb.getSheet("userdata").getPhysicalNumberOfRows();
			  System.out.println("Number of rows: "+rows);
			  
			  
			  //number of cells
			  int cells=wb.getSheet("userdata").getRow(0).getPhysicalNumberOfCells();	
			  System.out.println("Number of  cells: "+cells);
			  
			  //create array of same size like file contents
			  arr=new Object[rows][cells];
			  
			  
			  //read data from file and add it into array
			  for(int i=0;i<rows;i++)
			  {
				  for(int j=0;j<cells;j++)
				  {
					  arr[i][j]=wb.getSheet("userdata").getRow(i).getCell(j).getStringCellValue();
					 
				  }
				  
			  }
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  
		 return arr;
	}

}
