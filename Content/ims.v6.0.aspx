<%@ Page Language="C#" %>
<%if(Request.QueryString["appkey"] == "9D72A22C-5542-456F-9631-8EAC5D151C1F"){%>
$(function(){
	if(location.pathname == "/Manage/CardInfo/CardInfoStatus01.aspx") {
		$("#CGroupID").parent().hide();
		$("#CSelNum").parent().hide();
		$("#CUserID").parent().hide();
		$("#CDeptID").parent().hide();
		$("#CStartDate").parent().hide();
		$("#CEndDate").parent().hide();
		$("#CSaleID").parent().hide();
		$("#form1").removeClass("e-eidtform").width('50%');
	}
})
<%}%>