<%@ Page Language="C#" %>
<%=Request.UserHostAddress %>;<%=Request.Headers["X-Forwarded-For"] %>