<%@ Page Language="C#" %>
<script runat="server">
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);
        Response.ContentType = "text/plain";
		string ip = System.Web.HttpContext.Current.Request.UserHostAddress;
        if (Request["method"] == "SET")
        {
			Application["ClientIP"] = ip;
			aliyunDomain.Program.UpdateIP(Server.MapPath(@"~/App_Data/liliang.org.xml"), ip);
            Application["Windows10ClientIP"] = @"# http://luckhut.com/Content/IP.aspx?method=GET
# http://116.196.114.221:30003/IP.aspx?method=GET
# Update Time:" + DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") + @"
" + ip+ " luckhut" + @"
" + ip + " app.liliang.org" + @"
" + ip + " sitecore.liliang.org";
        }
        else if (Request["method"] == "GET")
        {
            Response.Write(Application["Windows10ClientIP"]);
        }
    }
</script>


<%if (Request["method"] == "GET") {%>
#<%=System.IO.File.ReadAllText(@"C:\inetpub\Sitecore.MySites\App_Data\lilinyi.html", Encoding.UTF8).Replace("\n"," ").Replace("\r"," ")%>
#<%=System.IO.File.ReadAllText(@"C:\inetpub\canjianapp.cn\App_Data\session_id.json", Encoding.UTF8).Replace("\n"," ").Replace("\r"," ")%>
<%}%>