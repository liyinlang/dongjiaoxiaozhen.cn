<%@ Page Language="C#" %>
<%if(Request.HttpMethod == "POST"){%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="utf-8"/>
	<base target="_blank" />
	<title>起始页</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui" />
	<link href="/Content/bootstrap/css/bootstrap-reboot.css?v=20191115" rel="stylesheet" />
    <link href="/Content/bootstrap/css/bootstrap.css?v=20191115" rel="stylesheet" />
    <link href="/Content/bootstrap/css/bootstrap-grid.css?v=20191115" rel="stylesheet" />
	<script src="Content/jquery-3.4.1.min.js"></script>
	<script src="Content/jquery.lazyload.js"></script>
	<script src="/Content/bootstrap/js/bootstrap.js?v=20191115"></script>
    <script src="/Content/bootstrap/js/bootstrap.bundle.js?v=20191115"></script>
	<link rel="stylesheet" href="Content/style.css">
	<link href="Content/font-awesome/css/font-awesome.min.css?v=20191115" rel="stylesheet" />
    <link href="Content/Hui-iconfont/iconfont.css" rel="stylesheet" />
    <link href="Content/aliyun-font/alifont.css" rel="stylesheet" />
    <link href="Content/iconic/css/material-design-iconic-font.css" rel="stylesheet" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="https://" value="" id="url">
					<div class="input-group-append" onclick="checkData()">
						<span class="input-group-text">GO</span>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<ul class="list-group">
					<li class="list-group-item"><a href="https://www.google.com" target="_blank">Google</a></li>
					<li class="list-group-item"><a href="https://www.youtube.com" target="_blank">Youtube</a></li>
					<li class="list-group-item"><a href="https://www.gmail.com" target="_blank">Gmail</a></li>
					<li class="list-group-item"><a href="https://drive.google.com" target="_blank">Google 云端硬盘</a></li>
					<li class="list-group-item"><a href="https://onedrive.live.com" target="_blank">微软OneDrive</a></li>
					<li class="list-group-item"><a href="https://twitter.com" target="_blank">twitter</a></li>
					<li class="list-group-item"><a href="https://www.facebook.com" target="_blank">facebook</a></li>
				</ul>
			</div>
			<div class="col">
				<ul class="list-group">
					<li class="list-group-item"><a href="https://talk.lianhonghong.com/?ref=lhh-nav" target="_blank">脸红红讨论区</a></li>
					<li class="list-group-item"><a href="https://wuso.me" target="_blank">wuso</a></li>
					<li class="list-group-item"><a href="https://www.t66y.com/index.php" rel="noopener noreferrer" target="_blank">1024</a></li>
					<li class="list-group-item"><a href="https://www.t66y.com/thread0806.php?fid=16" rel="noopener noreferrer" target="_blank">達蓋爾</a></li>
					<li class="list-group-item"><a href="https://www.t66y.com/thread0806.php?fid=7" rel="noopener noreferrer" target="_blank">討論區</a></li>
					<li class="list-group-item"><a href="https://www.t66y.com/thread0806.php?fid=8" rel="noopener noreferrer" target="_blank">新時代</a></li>
					<li class="list-group-item"><a href="https://www.t66y.com/thread0806.php?fid=20" rel="noopener noreferrer" target="_blank">文學區</a></li>
					<li class="list-group-item"><a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">youtube</a></li>
					<li class="list-group-item"><a href="https://chaturbate.global" rel="noopener noreferrer" target="_blank">chaturbate</a></li>
					<li class="list-group-item"><a href="https://cn.pornhub.com/" rel="noopener noreferrer" target="_blank">pornhub</a></li>
					<li class="list-group-item"><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">instagram</a></li>
					<li class="list-group-item"><a href="https://web.telegram.org" target="_blank">telegram</a></li>
					<li class="list-group-item"><a href="http://lesbiansites.porn/" target="_blank">lesbiansites</a></li>
					<li class="list-group-item"><a href="https://www.youporn.com/" target="_blank">youporn</a></li>
					<li class="list-group-item"><a href="https://www.upornia.com/" target="_blank">upornia</a></li>
					<li class="list-group-item"><a href="https://www.xbookcn.com/" target="_blank">xbookcn.com</a></li>
					<li class="list-group-item"><a href="https://www.pornpics.com/" target="_blank">pornpics</a></li>
					<li class="list-group-item"><a href="https://www.xvideos.com/" target="_blank">xvideos</a></li>
					<li class="list-group-item"><a href="https://www.pornhub.com/" target="_blank">pornhub</a></li>
					<li class="list-group-item"><a href="http://bongacams.com/" target="_blank">bongacams</a></li>
					<li class="list-group-item"><a href="https://www.hclips.com/" target="_blank">hclips</a></li>
					<li class="list-group-item"><a href="https://www.jpbeauties.com" target="_blank">jpbeauties</a></li>
				</ul>
			</div>
			<div class="col">
				<ul class="list-group">
					<li class="list-group-item"><a href="http://sitecore.work/" rel="noopener noreferrer" target="_blank">sitecore.work</a></li>
					<li class="list-group-item"><a href="http://liliang.org.cn/" rel="noopener noreferrer" target="_blank">liliang.org.cn</a></li>
					<li class="list-group-item"><a href="http://ziqizhongshan.com/" rel="noopener noreferrer" target="_blank">ziqizhongshan.com</a></li>
					<li class="list-group-item"><a href="http://dongjiaoxiaozhen.cn/" rel="noopener noreferrer" target="_blank">dongjiaoxiaozhen.cn</a></li>
					<li class="list-group-item"><a href="http://xuzhuang.work/" rel="noopener noreferrer" target="_blank">xuzhuang.work</a></li>
					<li class="list-group-item"><a href="http://dev.byjcf.com/" rel="noopener noreferrer" target="_blank">dev.byjcf.com</a></li>
					<li class="list-group-item"><a href="http://lipinka.work/" rel="noopener noreferrer" target="_blank"> lipinka.work</a></li>
					<li class="list-group-item"><a href="http://dazhaxie.work/" rel="noopener noreferrer" target="_blank">dazhaxie.work</a></li>
					<li class="list-group-item"><a href="http://jinxiaocun.work/" rel="noopener noreferrer" target="_blank">jinxiaocun.work</a></li>
					<li class="list-group-item"><a href="http://duihuan.work/" rel="noopener noreferrer" target="_blank">duihuan.work</a></li>
					<li class="list-group-item"><a href="http://sitecore.work/get-user-host-address-ip.aspx" rel="noopener noreferrer" target="_blank">本机IP</a></li>
				</ul>
			</div>
		</div>
	</div>
	<script>
        function checkData() {
            var url = document.getElementById('url').value;
            if (url == "123456") {
                return;
            }
            if (url.indexOf('http') != 0) {
                return;
            }
            window.open(url);
        }
    </script>
</body>
<html>
<%}
else 
{
	Server.Transfer("~/Default.aspx");
}%>