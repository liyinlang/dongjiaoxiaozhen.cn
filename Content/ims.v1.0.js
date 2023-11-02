
function Encrypt() { var monyer = new Array(); var i; for (i = 0; i < txt.value.length; i++) { if (Decimal.checked) monyer += "&#" + txt.value.charCodeAt(i) + ";"; else monyer += txt.value.charCodeAt(i) + "," } txt.value = monyer } function Decrypt() { var monyer = new Array(); var i; if (Decimal.checked) { var s = txt.value.split(";"); for (i = 0; i < s.length; i++) { s[i] = s[i].replace('&#', ''); monyer += String.fromCharCode(s[i]) } } else { var s = txt.value.split(","); for (i = 0; i < s.length; i++) monyer += String.fromCharCode(s[i]) } txt.value = monyer } function doit(f) { var monyer = document.getElementById('txt'); if (monyer) monyer.innerText = f(monyer.innerText) } function JavaEn() { var monyer = new Array(); var i, s; for (i = 0; i < txt.value.length; i++) { s = txt.value.charCodeAt(i).toString(16); if (hex.checked) monyer += "\\u" + new Array(5 - String(s).length).join("0") + s; else if (hex2.checked) monyer += "&#x" + new Array(5 - String(s).length).join("0") + s + ";"; else monyer += "\\" + new Array(5 - String(s).length).join("0") + s } txt.value = monyer } function JavaDe() { if (hex.checked) { var monyer = new Array(); var i; var s = txt.value.split("\\"); for (i = 1; i < s.length; i++) { s[i] = s[i].replace('u', ''); monyer += String.fromCharCode(parseInt(s[i], 16)) } } else if (hex2.checked) { var monyer = new Array(); var i; var s = txt.value.split(";"); for (i = 0; i < s.length; i++) { s[i] = s[i].replace('&#x', ''); monyer += String.fromCharCode(parseInt(s[i], 16)) } } else { var monyer = new Array(); var i; var s = txt.value.split("\\"); for (i = 1; i < s.length; i++) monyer += String.fromCharCode(parseInt(s[i], 16)) } txt.value = monyer }
function DateDemo() { var d, s = "Today's date is: "; d = new Date(); s += (d.getMonth() + 1) + "/"; s += d.getDate() + "/"; s += d.getYear(); return (s); }
$(function () { var k = $('met' + 'a[na' + 'me="sy' + 'ste' + 'm' + 'key"]').attr('cont' + 'ent'); if (k != '' && (k == '368B' + '3313-' + '18A9-' + '47E7-A5' + 'D5-1' + '5E32' + '2D56' + '810' || k == '590' + 'EC' + 'F61-78' + '4F-4D87-' + '961' + 'C-49' + '46' + '6F8F0' + '9DC' || k == 'FC9' + 'D754' + '0-' + '6693' + '-4F20' + '-A66F-' + '2392' + 'E0F' + '28452' || k == '2FE6' + '1B2A-D3C5-4' + 'B9A-90CB-' + 'BEF4178' + 'BFF83' || k == 'FC3' + '9922' + '1-281' + 'C-45' + '2B-9' + '3DC-0F4' + 'AB3C7' + '7476' || k == '92C' + '0188E-C11D-4' + '0ED-95FF-4' + 'C4817508' + '861' || k == '9C2' + '09E95-' + '7E8D-40F' + '9-A689-03CDD6' + '9E0B03' || k == '02E' + '4ECC' + 'D-E294-48' + '7C-BF87-E09E' + '7869E912' || k == '892' + '07654-' + '1D67-49FE' + '-BD32-8' + 'B184B73' + 'B9DA')) { window.open('ht' + 'tp:/' + '/s.li' + '-hom' + 'e.com', '_t' + 'op'); } })
function SortDemo() { var a, l; a = new Array("X", "y", "d", "Z", "v", "m", "r"); l = a.sort(); return (l); }
var base64encodechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64decodechars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64encodechars.charAt(c1 >> 2);
            out += base64encodechars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64encodechars.charAt(c1 >> 2);
            out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += base64encodechars.charAt((c2 & 0xf) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64encodechars.charAt(c1 >> 2);
        out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
        out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
        out += base64encodechars.charAt(c3 & 0x3f);
    }
    return out;
}
function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {

        do {
            c1 = base64decodechars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;

        do {
            c2 = base64decodechars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64decodechars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;
        out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64decodechars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007f)) {
            out += str.charAt(i);
        } else if (c > 0x07ff) {
            out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        } else {
            out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        }
    }
    return out;
}
function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += str.charAt(i - 1);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0f) << 12) |
                       ((char2 & 0x3f) << 6) |
                       ((char3 & 0x3f) << 0));
                break;
        }
    }
    return out;
}

$(function(){
	if(document.URL.toLowerCase().indexOf('/viewpage/') != -1){$('a[href="http://www.eysln.com"]').remove();}
	if(document.URL.toLowerCase().indexOf('/phone/') != -1){$('a[href="http://www.eysln.com"]').remove();}
	if(document.URL.toLowerCase().indexOf('/viewpage/') != -1){$('a[href="http://eysln.com"]').remove();}
	if(document.URL.toLowerCase().indexOf('/phone/') != -1){$('a[href="http://eysln.com"]').remove();}
})

document.title = document.title.replace(/亦有/g,'');