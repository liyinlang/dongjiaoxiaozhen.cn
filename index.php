<?php
header("Cache-Control: max-age=-1");
header("Expires: " . date("Y-m-d", strtotime("-1 year")));

$host = $_SERVER['HTTP_HOST'];
if (strpos($host, "www.") === 0) {
    $host = substr($host, 4);
}
$fileName = "/" . str_replace(".", "_", $host) . ".html";
if (file_exists($_SERVER['DOCUMENT_ROOT'] . $fileName)) {
    include $_SERVER['DOCUMENT_ROOT'] . $fileName;
} else {
    $pageTitle = $host;
}
?>
<!DOCTYPE html>
<html>
<head runat="server">
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,minimal-ui" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
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
    <form id="form1" runat="server">
        <div class="form-group">
            <label>域名：</label>
			<input type="text" value="<?php echo $_SERVER['HTTP_HOST']; ?>" class="form-control" />
        </div>
        <div class="form-group">
            <label>访问地址：</label>
			<input type="text" value="" class="form-control" />
        </div>
        <div class="form-group">
            <label>IP地址：</label>
			<input type="text" value="" class="form-control" />
        </div>
        <div class="form-group">
            <label>UserAgent：</label>
			<input type="text" value="" class="form-control" />
        </div>
        <div class="form-group">
            <label>语言：</label>
			<input type="text" value="" class="form-control" />
        </div>
    </form>
	</div>
</body>
</html>
