## PE-IEDA
The website for PE-IDEA industry design company which is established by my friends.

## 开发模式

运行：
``
gulp
``
## 版本迭代

#### 版本：V0.1

完成日期：2017.6.19

说明：按照我个人对需要文件的理解以及实际工作中的优化，将网站结构设置如下：

1. index-首页，首页分为五个模块（对应导航栏的五个链接），此时点击五个导航栏链接对应的是index首页内部五个模块的跳转，不会加载进入二级页面
2. 在index内各个模块内点击可跳转链接，将连接到二级页面，二级页面的导航与index页面的导航不同，将在各个二级页面和index之间相互跳转
3. index首页内案例展示模块点击案例图片，点击进入examle页面，为单独产品的页面，实际属性为案例展示页面的下一级页面（即三级页面）
4. 网站主要使用的框架为bootstrap，其他包括jQuery及插件等，针对移动端进行了适配和优化，理论上应该为响应式页面，兼容PC端、移动端；
5. 原网站加速速度慢的原因：fonts.useso.com(一个在线托管webfont的网站)， 由于对方服务器被限制，导致使用该网站托管字体的站点出现大面积的延缓；
6. 关于字体：需求中要求使用方正细黑简体，产品层面可以使用改字体，但是我认为网站有盈利性质，并且方正细黑简体并非免费开原字体，使用该字体有一定的风险，所以建议谨慎使该字体，目前网站使用的字体为微软雅黑字体，最终字体选择需要需求方决定；
7. 需要提供的素材尺寸：浏览器收藏夹及标题栏图片格式为ioc，尺寸为32*32， 其他大图尺寸均为1920x1080
8. 在线客服功能暂时无法添加；
9. 网站自行维护有一定难度;
10. 网站源码地址：https://github.com/duola8789/PE-IDEA

#### 版本：V0.2

完成日期：2017.6.20

修改内容：
1. 移动端导航栏点击空白收起
2. 移动端导航栏点击在本页跳转后收起
3. 二维码更换为需求方提供的真实二维码
4. 点击导航logo能够返回首页
5. 字体确认使用微软雅黑字体
6. 其余需求待确定

#### 版本：V0.3

完成日期：2017.8.18

修改内容：
1. 根据需求要求对网站整体布局和效果进行重构
2. 增加百度地图的接口
3. 响应式设计优化，适配手机, ipad, ipadmini, pc
4. 字体大小增加rem单位，可以根据需要响应式调整字体大小
5. 增加了案例名称对照表，按照表中对应目录组织案例图片，在增加案例图片时同步完善此表，作为记录和对照
6. 目录文件精简

待做：
1. 实际资料（所有图片、文字资料、联系方式、公司地址等）
2. 完善案例名称对照表
3. 上线后增加分享到微博、微信功能
4. 合作开发流程图片分辨率需要提高

#### 版本：V0.31

完成日期：2017.8.28

修改内容：
1. 页面整体布局由固定宽度改为充满屏幕
2. 修改联系电话、地址等信息
3. 精简版权声明内容
4. 其他根据需求进行的样式更改和优化


#### 版本：V0.32

完成日期：2017.10.27

修改内容：
1. 所有页面固定宽度1200px, 内容区域在PC端栅格使用为100%，调整其他栅格
2. 首页logo图片更换为分辨率更高的PE-logo-all.jpg
3. 首页案例图片分辨率规格更改为400*400，padding值改为0px
4. 页脚上下方向距离增大
5. 联系我们页面的二维码减少为一个（电子名片取消）

TODOs:
1. 首页各模块填色的实际色号
2. 分辨率规格为400*400的首页案例图片
3. 新浪微博SDK
4. 微信分享的二维码图片
5. 所欲真实的案例、文字、图片
5. 案例名称对照表