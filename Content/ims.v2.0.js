$(function () {
    if (document.URL.indexOf('/CardInfoRegister') != -1) {
        if ($("#ID").val() != "") {
            $("#CardID").attr("readonly", "readonly");
            $("#CardPwd").attr("readonly", "readonly");
        }
    }
    if (document.URL.indexOf('/GoodGroupInfo/GoodGroupInfoEdit.aspx') != -1) {
        window.setTimeout(function(){
		   window.GoodEndDateChange = function(sender) {
					var rows = $('#dg').datagrid('getSelections');
					for (var i = 0; i < rows.length; i++) {
						$("#EndDate" + rows[i]["ID"]).val($('#EndDate').val());
					}
					window.setTimeout("document.getElementById('EndDate').value = '';", 1000);
				}

		},1000);
    }
})

function pop(url, width, height) {
    var divid = "div" + top.winID;
    if (url.indexOf("?") == -1) {
        url = url + "?divid=" + divid;
    }
    else {
        url = url + "&divid=" + divid;
    }

    url = url + "&guid=" + $('meta[name="guid"]').attr("content");
    top.$('<div class="window-mask" id="'+divid+'bg"></div><div id="' + divid + '" title="' + top.document.title + '" style="margin:0; padding:0;overflow:hidden">'
+ '<iframe width="100%" src="' + url + '" '
+ ' frameborder="0" height="' + (height - 36) + 'px" h="' + height + 'px" marginheight="0" marginwidth="0"></iframe>'
+ '</div>').appendTo('body');
    top.$('#' + divid).window({
        minimizable: false,
        closed: false,
        closable: true,
        maximizable: false,
        collapsible:false,
        width: width,
        height: height,
        modal: false,
        onClose: function () {
            top.$('#' + divid + "bg").remove();
            top.$('#' + divid).find('iframe').attr('src', null);
            //top.$('#' + divid).parent().next().next().remove();
            if (window.CollectGarbage) { window.CollectGarbage(); };
            top.$('#' + divid).parent().next().remove();
            top.$('#' + divid).parent().remove();
        }
    });
    top.winID += 1;

    return divid;
}

$(function(){
	if(document.URL.toLowerCase().indexOf('/pc/') != -1){$('[eysln="eysln"][href="http://www.eysln.com"]').hide();}
	if(document.URL.toLowerCase().indexOf('/phone/') != -1){$('[eysln="eysln"][href="http://www.eysln.com"]').hide();}
	if(document.URL.toLowerCase().indexOf('/viewpage/') != -1){$('a[href="http://www.eysln.com"]').hide();}
	if(document.URL.toLowerCase().indexOf('/pc/') != -1){$('[eysln="eysln"][href="http://eysln.com"]').hide();}
	if(document.URL.toLowerCase().indexOf('/phone/') != -1){$('[eysln="eysln"][href="http://eysln.com"]').hide();}
	if(document.URL.toLowerCase().indexOf('/viewpage/') != -1){$('a[href="http://eysln.com"]').hide();}
})

document.title = document.title.replace(/亦有/g,'');