# kissmaho.github.io
Markdown 及扩展
Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。 —— [ 维基百科 ]

使用简单的符号标识不同的标题，将某些文字标记为粗体或者斜体，创建一个链接等，详细语法参考帮助？。

本编辑器支持 Markdown Extra , 　扩展了很多好用的功能。具体请参考Github.

表格
Markdown　Extra　表格语法：

项目	价格
Computer	$1600
Phone	$12
Pipe	$1
写法：

项目     | 价格
---------|------
Computer | $1600
Phone    | $12
Pipe     | $1
可以使用冒号来定义对齐方式：

项目	价格	数量
Computer	1600 元	5
Phone	12 元	12
Pipe	1 元	234
写法：

| 项目      |   价格  |  数量 |
|:--------- |--------:|:----:|
| Computer  | 1600 元 |  5   |
| Phone     |   12 元 |  12  |
| Pipe      |    1 元 | 234  |
插入图片
格式一：

 ![picture-name](http://xxx.com/xxx.png)
格式二：(方便设置图片尺寸)

<img src="http://xxx.com/xxx.png" alt="download-failed" width="XXXpx"  height="XXXpx">
定义列表
Markdown Extra 定义列表语法：

项目１
项目２
定义 A
定义 a
定义 B
项目３
定义 C
定义 D

定义 E

写法：

- 项目１
- 项目２
  - 定义 A
    - 定义 a
  - 定义 B

项目３
:   定义 C

:   定义 D

	> 定义 E
代码块
代码块语法遵循标准markdown代码，例如：

python:

@requires_authorization
def somefunc(param1='', param2=0):
    '''A docstring'''
    if param1 > param2: # interesting
        print 'Greater'
    return (param2 - param1 + 1) or None
class SomeClass:
    pass
>>> message = '''interpreter
... prompt'''
c语言:

#include <stdio.h>
int main()
{
	printf("Hello world!");
}
脚注
生成一个脚注[^footnote]. [^footnote]: 这里是 脚注 的 内容.

写法：

生成一个脚注[^footnote].
  [^footnote]: 这里是 **脚注** 的 *内容*.
数学公式
使用 MathJax 渲染 LaTex 数学公式，详见 math.stackexchange.com.

行内公式
数学公式为：$ \Gamma(n) = (n-1)!\quad\forall n\in\mathbb N $。

写法：

数学公式为：$ \Gamma(n) = (n-1)!\quad\forall n\in\mathbb N $。
块级公式：
\[x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]
写法：

$$ x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
更多LaTex语法请参考 这里.

浏览器兼容
目前，本编辑器对 Chrome 浏览器支持最为完整。建议大家使用较新版本的 Chrome。
IE9 以下不支持
IE9，10，11 存在以下问题
不支持离线功能
IE9 不支持文件导入导出
IE10 不支持拖拽文件导入
常用 Markdown 编辑器推荐
Markdownpad： 详情请点击 官网。 （貌似专业版需要收取一定dollars$，需要序列号自行baidu。）
Markpad：详情前往 官网。 （推荐使用，Microsoft Store也有，完全免费，支持及时效果浏览。）
CSDN博客编辑器：CSDN网站内置编辑器。（这篇文件就是这样写出来的-_-)

Harropad: 官网

Retext: 简单强大的文本编辑器，可控制输出格式：pdf, html等，仅支持Linux（推荐）.下载
