
var data = [];
//将所有图片描述数据用一个很长的字符串存储 
//使用 “<br/>\<br/>\” 和 “<br/>\<br/>\<br/>\”作为正则操作的分割标志
var datastr = '1、分割标志<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
2、陈广宏<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
3、董鹏腾<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
4、曾韬<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
5、何谐<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
6、聂心明<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
7、刘信<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
8、谢志强<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
9、张超<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
10、龙希<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
11、盛世<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
12、李碧强<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
13、李小龙<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
14、赵富强<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
15、黄永康<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
16、韩华<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
17、刘晨旭<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
18、郭旭<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
19、许慎<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
20、杨召成<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
21、吴露云<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
22、万盛道<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
23、郜廷权<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
24、盛佳丽<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
25、刘潇航<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
26、赵志刚<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
27、周祎童<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
28、晏国东<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
29、朱佳萍<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
30、卢慧艳<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
31、郭宁<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
32、周宇翔<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
33、王春琦<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
34、何群芳<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
35、黄诗冰<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
36、黄立棣<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
37、石威<br/>\
<br/>\
分割标志<br/>\
<br/>\
<br/>\
38、祝熠<br/>\
<br/>\
分割标志<br/>\
';

var d = datastr.split("<br/><br/><br/>");
for(var i = 0; i<d.length; i++){
	var c = d[i].split("<br/><br/>");

	data.push({ 
         	img: c[0].replace("、"," ")+".jpg",
         	caption: c[0].split("、")[1],
            //desc: c[1] //当back面是对图片的文字简介时 使用desc输出相应文字数据
         });
	console.log( c[0].replace("、","")+".jpg");	
}