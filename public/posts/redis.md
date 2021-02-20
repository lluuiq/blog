---
title: 标题 
date: 2020-02-23 09:09:25
categories: 数据库

---

<!--more-->
[toc]
## 安装


先编写一个redis的配置文件，可以从官网下载 http://download.redis.io/redis-stable/redis.conf

`redis.conf`中几个常用的

```shell
# 注释这一行来允许外网IP访问
#bind 127.0.0.1
# 关闭保护模式, 如果开启的话即使注释了bind 外网也无法访问
protected-mode no

# docker安装一定要将守护进程模式设置为no, 否则容器一直为stop状态
daemonize no

# 日志级别
# debug (a lot of information, useful for development/testing)
# verbose (many rarely useful info, but not a mess like the debug level)
# notice (moderately verbose, what you want in production probably)
# warning (only very important / critical messages are logged)
loglevel notice
# 日志存放路径
logfile "/data/redis.log"
# 数据库个数
databases 16

# requirepass foobared
# 设置密码, 用户名默认为root
requirepass 密码

# 开启持久化
appendonly yes
```

通过docker安装

```
docker pull redis
```

```
docker run -id --name redis -p 6379:6379 -v /home/dockerlib/redis/redis.conf:/etc/redis/redis.conf -v /home/dockerlib/redis/data:/data --privileged=true redis redis-server /etc/redis/redis.conf --appendonly yes
```

- --name `redis`

  容器名字为redis

- -p `6379`:6379

  端口映射

- -v `/宿主机配置文件父路径/redis.conf`:/etc/redis/redis.conf

  将配置文件进行挂载,**宿主机配置文件改为自己的路径**

- --privileged=`true`

  给予容器root权限

- redis redis-server `/etc/redis/redis.conf`

  以指定的配置文件启动

- --appendonly `yes`

  开启持久化

云服务器开放端口

![image-20201209144610294](redis.assets/image-20201209144610294.png)

测试redis

```shell
docker exec -it redis redis-cli
```

![image-20201209145101408](redis.assets/image-20201209145101408.png)

```
auth "密码"
```

![image-20201209145135127](redis.assets/image-20201209145135127.png)

我的配合文件配置了log的路径在`data/redis.log`，打开可以看到redis的执行日志

![image-20201209145443108](redis.assets/image-20201209145443108.png)

## SpringBoot整合Redis

创建项目时，记得在插件地方勾选`NoSql`中的`Redis`

或者手动添加依赖

```xml
<!--test-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

springboot2.X以后，原本的底层jedis换成了lettuce

jedis：采用的直连，多个线程操作的话不安全，想要安全则需要开启连接池，更像 BIO模式

lettuce：采用netty，实例可以在多个线程中共享 ，不存在线程不安全的情况 更像 NIO模式

修改配置文件

`application.yaml`

```yaml
# test
spring:
  redis:
    host: IP地址 (localhost、127.0.0.1、服务器IP等等)
    port: 6379
    // 如果没有设置密码, 则不设置password
    password: 密码
```

测试

```java
@Autowired
private RedisTemplate redisTemplate;

@Test
void contextLoads() {
    redisTemplate.opsForValue().set("mykey", "myvalue");
    Object mykey = redisTemplate.opsForValue().get("mykey");
    System.out.println((String) mykey);
}
```

![image-20201209151424967](redis.assets/image-20201209151424967.png)
