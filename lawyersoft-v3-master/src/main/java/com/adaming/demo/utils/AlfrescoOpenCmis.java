package com.adaming.demo.utils;

import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.chemistry.opencmis.client.api.ItemIterable;
import org.apache.chemistry.opencmis.client.api.QueryResult;
import org.apache.chemistry.opencmis.client.api.Repository;
import org.apache.chemistry.opencmis.client.api.Session;
import org.apache.chemistry.opencmis.client.api.SessionFactory;
import org.apache.chemistry.opencmis.client.runtime.SessionFactoryImpl;
import org.apache.chemistry.opencmis.client.util.FileUtils;
import org.apache.chemistry.opencmis.commons.PropertyIds;
import org.apache.chemistry.opencmis.commons.SessionParameter;
import org.apache.chemistry.opencmis.commons.data.ContentStream;
import org.apache.chemistry.opencmis.commons.enums.BindingType;
import org.apache.chemistry.opencmis.commons.enums.VersioningState;
import org.apache.chemistry.opencmis.commons.impl.dataobjects.ContentStreamImpl;
import org.springframework.web.bind.annotation.CrossOrigin;

public class AlfrescoOpenCmis {
	
	private AlfrescoOpenCmis() {
	}

	private static Session session;

	private static Folder folder;

	/** Point d'accès pour l'instance unique du singleton */
	public static Session getSession() {
		if (session == null) {
			SessionFactory factory = SessionFactoryImpl.newInstance();
			Map<String, String> parameter = new HashMap<String, String>();

			// user credentials
			parameter.put(SessionParameter.USER, "taissa");
			parameter.put(SessionParameter.PASSWORD, "TwNokx!g");

			// connection settings
			parameter.put(SessionParameter.ATOMPUB_URL,
					"http://178.33.168.131:8080/alfresco/api/-default-/public/cmis/versions/1.0/atom");
			parameter.put(SessionParameter.BINDING_TYPE, BindingType.ATOMPUB.value());
			List<Repository> s = factory.getRepositories(parameter);
			// create session
			session = s.get(0).createSession();
		}
		return session;
	}

	public static Folder createCvFolderIfNotExist() {
		if (folder == null) {
			String query = "SELECT cmis:objectId FROM cmis:folder WHERE cmis:name LIKE 'lawyerSoft'";
			ItemIterable<QueryResult> q = getSession().query(query, false);
			if (q != null) {
				for (QueryResult qr : q) {
					folder = FileUtils.getFolder(qr.getPropertyByQueryName("cmis:objectId").getFirstValue().toString(),
							getSession());
					break;
				}
			}

		}
		return folder;
	}

	public static Document createCv(InputStream stream, String name, Long length,String type) {
		Folder cvFolder = createCvFolderIfNotExist();

		Map<String, Object> properties = new HashMap<String, Object>();
		properties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
		properties.put(PropertyIds.NAME, name);

		ContentStream contentStream = new ContentStreamImpl(name, BigInteger.valueOf(length), type,
				stream);


		return cvFolder.createDocument(properties, contentStream, VersioningState.MAJOR);
	}

	public static Document findDocument(String documentId) throws IOException {
		return (Document) FileUtils.getObject(documentId, getSession());
	}



}
