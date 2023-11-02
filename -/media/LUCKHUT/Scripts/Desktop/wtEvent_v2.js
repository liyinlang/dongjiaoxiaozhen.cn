/*$.get('/weather-api?r=' + new Date(),function(r){
    r = $.parseJSON(r);
    r = r.weatherinfo;
    console.log(r);
    $('.big-ico').html(`<img src="/Content/weather/b_${r.img2.substring(1)}" style="vertical-align: middle;" />`);
    $('.sk-date').html(r.ptime + ' ' + r.weather);
    $('.w-wd').html(r.temp1 + '~' + r.temp2);
    $('.w-sd').html(r.city);
})*/

$.post('/weather-xml',function(r){
    var njXml = $(r).find('[pyName="nanjing"]');
	//$('.big-ico').html(njXml.attr('stateDetailed'));
	$('.big-ico').html(`<img src="/Content/weather/0.gif" style="vertical-align: middle;" />`);
    $('.sk-date').html(njXml.attr('tem1') + ' ' + njXml.attr('tem2'));
    $('.w-sd').html(njXml.attr('windState'));
})

if(location.protocol == 'http:')
	location.href = 'https://' + location.host + location.pathname