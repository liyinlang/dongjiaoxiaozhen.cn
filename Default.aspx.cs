using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.AddHeader("Cache-Control", "max-age=-1");
        Response.AddHeader("Expires", DateTime.Now.AddYears(-1).ToString("yyyy-MM-dd"));

        string host = Request.Url.Host;
        if (host.StartsWith("www."))
        {
            host = host.Substring(4);
        }
        string fileName = "~/" + host.Replace(".", "_") + ".html";
        if (System.IO.File.Exists(Server.MapPath(fileName)))
        {
            Server.Transfer(fileName);
        }
        else
        {
            Page.Title = host;
        }
    }
}