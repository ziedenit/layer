package com.adaming.demo.configuration.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.spi.service.contexts.SecurityContext;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static io.swagger.models.auth.In.HEADER;
import static  java.util.Collections.singletonList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.securitySchemes(singletonList(new ApiKey("JWT", AUTHORIZATION, HEADER.name())))
				.securityContexts(singletonList(
						SecurityContext.builder()
								.securityReferences(
										singletonList(SecurityReference.builder()
												.reference("JWT")
												.scopes(new AuthorizationScope[0])
												.build()
										)
								)
								.build())
				).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).build().apiInfo(metaData());
	}

	
	private ApiInfo metaData() {
		return new ApiInfoBuilder().title("Welcome to Lawyersoft  SAWAGGER REST API")
				.description("This is a documentation of All the REST WS for lawyersoft  project").version("1.0.0")
				.license("Apache License Version 2.0").licenseUrl("https://www.apache.org/licenses/LICENSE-2.0\"")
				.build();
	}
	
	protected void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");

		registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
	}


}
