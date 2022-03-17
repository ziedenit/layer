package com.adaming.demo.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.util.StringUtils;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.Files;



import org.springframework.web.multipart.MultipartFile;

public class Utilitaire {

	public static String addFileAlfresco(MultipartFile file,String dossier,String documentId) {
		FileInputStream fileInputStream = null;
		try {
			String fileName = StringUtils.cleanPath(file.getOriginalFilename());
			int num = 1;
			String fileNameWithoutExtension = fileName.replaceFirst("[.][^.]+$", "");
			String extension = fileName.substring(fileName.lastIndexOf(".") + 1);
			Path path = null;
		/*	if (dossier.equals("null")) {
				//path = Paths.get("/opt/apache-tomcat-9099/archive/" + documentId).toAbsolutePath().normalize();
				path = Paths.get("/opt/tomcat-8085/archive/" + documentId).toAbsolutePath().normalize();
			} else {
				//path = Paths.get("/opt/apache-tomcat-9099/archive/" + dossier).toAbsolutePath().normalize();
				path = Paths.get("/opt/tomcat-8085/archive/" + dossier).toAbsolutePath().normalize();
					
				Files.createDirectories(path);
			}*/
			Path targetLocation = path.resolve(fileName);
			while (Files.exists(targetLocation) && !Files.isDirectory(targetLocation)) {
				fileName = fileNameWithoutExtension + " (" + num + ")" + "." + extension;
				targetLocation = path.resolve(fileName);
				num++;
			}
			System.out.println("passed2");
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
			String realPath = path.toString() + File.separator + fileName;
			fileInputStream = new FileInputStream(realPath);
			org.apache.chemistry.opencmis.client.api.Document cvAlfresco = AlfrescoOpenCmis
					.createCv(fileInputStream, fileName, fileInputStream.getChannel().size(),extension);
			return cvAlfresco.getId();
		} catch (Exception e) {
			return null;
		} finally {
			if (fileInputStream != null)
				try {
					fileInputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
		}
	}

}
