package com.example.tutorial.jwt;

import com.example.tutorial.util.SecurityUtil;
import jakarta.servlet.ServletException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

// 유효한 자격증명을 제공하지 않고 접근하려 할때 401 에러 리턴
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        logger.debug("Security Context에 인증 정보가 없습니다.");
        request.getRequestDispatcher("/").forward(request, response);
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}