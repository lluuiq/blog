这里是文章摘要
<!--more-->

## 这是一个测试用的文档，该句是一个二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

接下来的测试内容用二级标题标注

## 分隔符：

接下来加入分隔符

---

这是在分隔符之间的内容

---
这是在分隔符之后的内容

## 加粗：

正常文字中没有加粗文字的效果

vs

正常文字中穿插**加粗文字**的效果

## 斜体：

正常文字中没有斜体文字的效果

vs

正常文字中穿插*斜体文字*的效果

## 删除线：

正常文字中没有删除线字体的效果

vs

正常文字中穿插~~删除线字体~~的效果

## 代码框：

正常文字中没有代码框内文字的效果

vs

正常文字中穿插`代码框内文字`的效果

## 高亮：

正常文字中没有高亮文字的效果

vs

正常文字中穿插==高亮文字==的效果

## 链接：

普通链接：https://www.baidu.com)
文字链接：[百度](https://www.baidu.com)

## 角标：

上角标：写个X的平方+Y的平方  
写法：x\^2\^+y\^2\^  
结果：x^2^+y^2^

下角标：写个H2O  
写法：H\~2\~O  
结果：H~2~O

## 数学公式：

公式写法：  
代码块 \`\`\`AsciiMath \`\`\`中填写内容

```
x^2 + x^2 = 2x 

f(x)=\frac{1}{\sqrt{2\pi\sigma}}exp(-\frac{(x-\mu)^2}{2\sigma^2})
```

效果如下：

```AsciiMath
x^2 + x^2 = 2x

f(x) = \frac{1} {\sqrt{2\pi\sigma}}exp(-\frac{(x-\mu)^2}{2\sigma^2})
```

## 列表：

**有序列表：**

1. 第一行

2. 第二行

    1. 第二行的子行1号

    2. 第二行的子行2号

       穿插无序的行

        1. 有序的行

**无序列表：**

+ 第一行
    + 第一行的子行1号
        + 子行的子行
+ 第二行

## 表格：

|col1|col2|col3|
|---| --- | --- |
|row1|||
|row2||第二行第三列|
|row3|||

## 代码块：

python：

```python
import pandas as pd
import plotly.graph_objs as go
import plotly.offline as py
from plotly import subplots
import random

# 添加isPass列，得分为60及以上的学生设为几个，否则为不及格
df['isPass']=df['score'].apply(lambda x: '及格' if x>=60 else '不及格')
# 将及格的学生赋值给 df_isPass
df_isPass = df[df['isPass'] == '及格']
```

java：

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

## emoji：

我:heart:你，:kiss:

## 引用：

> 引用的内容

## 图片测试：

在图片前面的内容。

![mark](https://cdn.jsdelivr.net/gh/lluuiq/blog_img/img/20200324021616.png)

在图片后面的内容。

## 添加注释：

正常的内容[^注释]
，正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容正常的内容。

[^注释]: 注释内容注释内容注释内容

## 结束

暂时想到了这么多，如有遗漏希望评论留言帮忙补充，感谢。

这一行是markdown文件的末尾，后面的所有东西都是上方添加的注释生成的。
