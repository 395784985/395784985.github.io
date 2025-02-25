[javase 1.5](http://docs.oracle.com/javase/1.5.0/docs/index.html)
[javase 6](http://docs.oracle.com/javase/6/docs/index.html)

[参考文章](https://www.cnblogs.com/langtianya/p/4208135.html)

## 一、JDK命令分类
```
   1、基本编译、运行命令
      java、javaw、javac、javadoc、javah、javap、jar、jdb、apt、extcheck
   3、安全工具
      keytool、jarsigner、policytool、kinit、klist、ktab
   2、监测，管理命令
      jconsole、jsp、jstat、jstatd、jvisualvm
   3、调优、故障分析命令
      jinfo、jsadebugd、jmap、jstack
   4、国际化工具
      native2ascii
   5、远程方法调用(RMI)工具
      rmic,rmiregistry,rmid,serialver
   6、Java IDL和RMI-IIOP工具
      tnameserv,idlj,orbd,servertool
   7、Java部署工具
      pack200,unpack200
   8、Java插件工具
      htmlconverter
   9、Java Web Start tools（javaws）
```
## 二、JDK执行命令使用

### 1、java：运行java程序（类和jar）
      用法：java [-options] class [args...] 或 java [-options] -jar jarfile [args...]
          
```
          -d32	  使用 32 位数据模型 (如果可用)
          -d64	  使用 64 位数据模型 (如果可用)
          -server	  选择 "server" VM
                        默认 VM 是 server,
                        因为您是在服务器类计算机上运行。
          -cp <目录和 zip/jar 文件的类搜索路径>
          -classpath <目录和 zip/jar 文件的类搜索路径>
                        用 : 分隔的目录, JAR 档案
                        和 ZIP 档案列表, 用于搜索类文件。
          -D<名称>=<值>
                        设置系统属性
          -verbose:[class|gc|jni]
                        启用详细输出
          -version      输出产品版本并退出
          -version:<值>
                        警告: 此功能已过时, 将在
                        未来发行版中删除。
                        需要指定的版本才能运行
          -showversion  输出产品版本并继续
          -jre-restrict-search | -no-jre-restrict-search
                        警告: 此功能已过时, 将在
                        未来发行版中删除。
                        在版本搜索中包括/排除用户专用 JRE
          -? -help      输出此帮助消息
          -X            输出非标准选项的帮助
```
###  2、javac：编译程序
    用法: javac <options> <source files>
```
        
          -g                         生成所有调试信息
          -g:none                    不生成任何调试信息
          -g:{lines,vars,source}     只生成某些调试信息
          -nowarn                    不生成任何警告
          -verbose                   输出有关编译器正在执行的操作的消息
          -deprecation               输出使用已过时的 API 的源位置
          -classpath <路径>            指定查找用户类文件和注释处理程序的位置
          -cp <路径>                   指定查找用户类文件和注释处理程序的位置
          -sourcepath <路径>           指定查找输入源文件的位置
          -bootclasspath <路径>        覆盖引导类文件的位置
          -extdirs <目录>              覆盖所安装扩展的位置
          -endorseddirs <目录>         覆盖签名的标准路径的位置
          -proc:{none,only}          控制是否执行注释处理和/或编译。
          -processor <class1>[,<class2>,<class3>...] 要运行的注释处理程序的名称; 绕过默认的搜索进程
          -processorpath <路径>        指定查找注释处理程序的位置
          -parameters                生成元数据以用于方法参数的反射
          -d <目录>                    指定放置生成的类文件的位置
          -s <目录>                    指定放置生成的源文件的位置
          -h <目录>                    指定放置生成的本机标头文件的位置
          -implicit:{none,class}     指定是否为隐式引用文件生成类文件
          -encoding <编码>             指定源文件使用的字符编码
          -source <发行版>              提供与指定发行版的源兼容性
          -target <发行版>              生成特定 VM 版本的类文件
          -profile <配置文件>            请确保使用的 API 在指定的配置文件中可用
```
### 3、javaw：大多用来运行GUI程序
    用法: javaw [-options] class [args...]
### 4、javah：
    C 头文件和 Stub 文件生成器，使 Java 和 C 代码可进行交互。
```
          -o <file>                输出文件 (只能使用 -d 或 -o 之一)
          -d <dir>                 输出目录
          -v  -verbose             启用详细输出
          -h  --help  -?           输出此消息
          -version                 输出版本信息
          -jni                     生成 JNI 样式的标头文件 (默认值)
          -force                   始终写入输出文件
          -classpath <path>        从中加载类的路径
          -cp <path>               从中加载类的路径
          -bootclasspath <path>    从中加载引导类的路径
```
### 5、javap：Java 类文件解析器
         -version                 版本信息
         -v  -verbose             输出附加信息
         -l                       输出行号和本地变量表
         -public                  仅显示公共类和成员
         -protected               显示受保护的/公共类和成员
         -package                 显示程序包/受保护的/公共类
                                  和成员 (默认)
         -p  -private             显示所有类和成员
         -c                       对代码进行反汇编
         -s                       输出内部类型签名
         -sysinfo                 显示正在处理的类的
                                  系统信息 (路径, 大小, 日期, MD5 散列)
         -constants               显示最终常量
         -classpath <path>        指定查找用户类文件的位置
         -cp <path>               指定查找用户类文件的位置
         -bootclasspath <path>    覆盖引导类文件的位置

### 6、jdb：Java的一个命令行调试环境，既可在本地，也可在与远程的解释器的一次对话中执行
        -attach <address>
                          使用标准连接器附加到指定地址处正在运行的 VM
        -listen <address>
                          等待正在运行的 VM 使用标准连接器在指定地址处连接
        -listenany
                          等待正在运行的 VM 使用标准连接器在任何可用地址处连接
        -launch
                          立即启动 VM 而不是等待 'run' 命令

   7、javaws
   8、jconsole
   9、jps
   10、jstat
   11、jstatd
   12-14、kinit.exe,klist.exe,ktab.exe
   15、native2ascii
   16、ordb
   17、idlj
   18、servertool
   19、tnameserv
   20、rmic
   21、rmid
   22、rmiregistry
   23、pack200
   24、unpack200
   25、packager
   26、policytool
   27、serialver
   28、jarsigner
   29、keytool
   30、appletviewer
   31、extcheck
   32、jar
   33、javadoc


### 三、JDK内置调优工具使用
	http://blog.csdn.net/fenglibing/article/details/6411924
	一、javah命令(C Header and Stub File Generator)：javah是用于根据JAVA本地方法，生成对应的c语言头文件及相应的stub文件的命令
	二、jps命令(Java Virtual Machine Process Status Tool)：jps 查看具有访问权限的java进程具体状态(进程id,启动路径，启动参数),若未制定hostid,只显示本地环境中所有进程（监控远程服务需要开启jstatd服务）。
	三、jstack命令(Java Stack Trace): jstack [-l] pid
		jstack 用于打印给定java进程id或core file 或远程调试服务的Java堆栈信息, 如果是在64位机器上，制定选项"-J-64", 
		Java崩溃生成core file（jstack获得java stack 和 native stack信息，从而找出问题）
		附属到正在运行的程序中（监控 java stack 和native stack信息，优化程序）
	四、jstat命令(Java Virtual Machine Statistics Monitoring Tool)
		Jstat用于监控基于HotSpot的JVM，对其堆的使用情况进行实时的命令行的统计，使用jstat我们可以对指定的JVM做如下监控：
		- 类的加载及卸载情况
		- 查看新生代、老生代及持久代的容量及使用情况
		- 查看新生代、老生代及持久代的垃圾收集情况，包括垃圾回收的次数及垃圾回收所占用的时间
		- 查看新生代中Eden区及Survior区中容量及分配情况等
		jstat工具特别强大，它有众多的可选项，通过提供多种不同的监控维度，使我们可以从不同的维度来了解到当前JVM堆的使用情况。详细查看堆内各个部分的使用量，使用的时候必须加上待统计的Java进程号，可选的不同维度参数以及可选的统计频率参数。
	五、jmap命令(Java Memory Map)
		打印出某个java进程内的所有对象情况，（如：产生哪些对象，及其数量）。
		输出内存中所有对象的工具，甚至将VM中的heap，以二进制输出成文本。使用方法（jmap -histo pid）。jmap -histo pid > a.log 。文本对比工具jmap -dump:format=b,file=outfile 2044 ,进程输出到文件。
		Memery Analysis Tool 分析工具进行使用。 64位（jmap -J-d64 -heap pid）
	六、jinfo命令(Java Configuration Info)
		jinfo可以输出并修改运行时Java进程的opts。用处比较简单，用于输出Java系统参数及命令参数。用法是jinfo -flag <opt> pid。
		例如：NewRatio|SurvivorRatio|PermSize 这些参数可以调整（jinfo -flag [NewRatio|SurvivorRatio|PermSize] pid）
	七、jconsole命令(Java Monitoring and Management Console)
		一个gui监视工具，可以以图表化形式显示各种数据。并且可以远程监视服务器VM。
	八、jvisualvm命令(Java Virtual Machine Monitoring, Troubleshooting, and Profiling Tool)
	九、jhat命令(Java Heap Analyse Tool)
	十、Jdb命令(The Java Debugger)
	十一、Jstatd命令(Java Statistics Monitoring Daemon)

1、jvm性能调优工具
	http://blog.csdn.net/wisgood/article/details/25343845
	JDK本身集成很多性能调优工具，除了VisualVM和Jconsole外，还有jps，jstack, jmap, jhat, jstat等小巧工具。
	在企业开发中会遇到一些问题：
		OutOfMemoryError, 内存不足;
		内存泄漏;
		线程死锁;
		锁争用（Lock Contention）;
		Java进程消耗CPU过高;
		突然宕机...
	在日常开发中这些问题可能被忽视，（有些人遇到以上问题只是重启服务器或是调大内存，而不会深究问题根源），但解决这些问题是Java架构师必备要求。
1）、jps(java Virtual Machine Process Status Tool):输出运行JVM中运行的进程状态信息。

	命令：jps Java Virtual Machine Process Status Tool	
	语法模式：jps [ options ] [ hostid ]
	
（1）OPTIONS(一些选项修改输出)：
	-q 不输出类名、Jar名和传入main方法的参数2
	-m 输出传入main方法的参数
	-l 输出main类或Jar的全限名
	-v 输出传入JVM的参数
	
（2）HOSTID( HOST IDENTIFIER主机标识):
	[protocol:][[//]hostname][:port][/servername]
（3）EXAMPLES:

   jps
   18027 Java2Demo.JAR
   18032 jps
   18005 jstat
   
   
   远程输出需要启动jstatd服务，启动后，远程机器可以通过rmi协议获取服务器上java程序运行状态。
```
   Listing the instrumented JVMs on a remote host:
   This example assumes that the jstat server and either the its internal RMI registry or a separate external rmiregistry process are running on the remote host on the
   default  port  (port  1099).  It also assumes that the local host has appropriate permissions to access the remote host. This example also includes the -l option to
   output the long form of the class names or JAR file names.
   
   jps -l remote.domain
   3002 /opt/jdk1.7.0/demo/jfc/Java2D/Java2Demo.JAR
   2857 sun.tools.jstatd.jstatd
   Listing the instrumented JVMs on a remote host with a non-default port for the RMI registry
   This example assumes that the jstatd server, with an internal RMI registry bound to port 2002, is running on the remote host. This example also uses the  -m  option
   to include the arguments passed to the main method of each of the listed Java applications.

   jps -m remote.domain:2002
   3002 /opt/jdk1.7.0/demo/jfc/Java2D/Java2Demo.JAR
   3102 sun.tools.jstatd.jstatd -p 2002

   [root@AY131218130632Z ~]# jps -mlv
16912 org.apache.catalina.startup.Bootstrap start -Djava.util.logging.config.file=/alidata/server/tomcat-8090/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Xms128m -Xmx128m -XX:PermSize=64M -XX:MaxPermSize=64m -Djava.endorsed.dirs=/alidata/server/tomcat-8090/endorsed -Dcatalina.base=/alidata/server/tomcat-8090 -Dcatalina.home=/alidata/server/tomcat-8090 -Djava.io.tmpdir=/alidata/server/tomcat-8090/temp
31900 sun.tools.jps.Jps -mlv -Dapplication.home=/alidata/server/jdk1.7.0_09 -Xms8m
2044 org.apache.catalina.startup.Bootstrap start -Djava.util.logging.config.file=/alidata/server/tomcat-8080/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Xms128m -Xmx128m -XX:PermSize=64M -XX:MaxPermSize=64m -Djava.endorsed.dirs=/alidata/server/tomcat-8080/endorsed -Dcatalina.base=/alidata/server/tomcat-8080 -Dcatalina.home=/alidata/server/tomcat-8080 -Djava.io.tmpdir=/alidata/server/tomcat-8080/temp
```
```

2）、jinfo 输出并修改java进程运行时的opt参数
```
	jinfo [option] <pid>
        (to connect to running process)
    jinfo [option] <executable <core>
        (to connect to a core file)
    jinfo [option] [server_id@]<remote server IP or hostname>
        (to connect to remote debug server)
		
	where <option> is one of:
    -flag <name>         to print the value of the named VM flag
    -flag [+|-]<name>    to enable or disable the named VM flag
    -flag <name>=<value> to set the named VM flag to the given value
    -flags               to print VM flags
    -sysprops            to print Java system properties
    <no option>          to print both of the above
    -h | -help           to print this help message
```

```
	[root@AY131218130632Z dump]# jinfo 2044
	Attaching to process ID 2044, please wait...
	Debugger attached successfully.
	Server compiler detected.
	JVM version is 24.60-b09
	Java System Properties:

	java.runtime.name = Java(TM) SE Runtime Environment
	java.vm.version = 24.60-b09
	sun.boot.library.path = /alidata/server/jdk1.7.0_09/jre/lib/amd64
	shared.loader = 
	java.vendor.url = http://java.oracle.com/
	java.vm.vendor = Oracle Corporation
	path.separator = :
	file.encoding.pkg = sun.io
	java.vm.name = Java HotSpot(TM) 64-Bit Server VM
	java.util.logging.config.file = /alidata/server/tomcat-8080/conf/logging.properties
	tomcat.util.buf.StringCache.byte.enabled = true
	sun.os.patch.level = unknown
	sun.java.launcher = SUN_STANDARD
	user.country = US
	user.dir = /root
	java.vm.specification.name = Java Virtual Machine Specification
	java.runtime.version = 1.7.0_60-b19
	org.apache.catalina.startup.TldConfig.jarsToSkip = tomcat7-websocket.jar
	java.awt.graphicsenv = sun.awt.X11GraphicsEnvironment
	os.arch = amd64
	java.endorsed.dirs = /alidata/server/tomcat-8080/endorsed
	line.separator = 

	java.io.tmpdir = /alidata/server/tomcat-8080/temp
	java.vm.specification.vendor = Oracle Corporation
	java.util.logging.manager = org.apache.juli.ClassLoaderLogManager
	java.naming.factory.url.pkgs = org.apache.naming
	os.name = Linux
	sun.jnu.encoding = UTF-8
	java.library.path = /usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib
	tomcat.util.scan.DefaultJarScanner.jarsToSkip = bootstrap.jar,commons-daemon.jar,tomcat-juli.jar,annotations-api.jar,el-api.jar,jsp-api.jar,servlet-api.jar,websocket-api.jar,catalina.jar,catalina-ant.jar,catalina-ha.jar,catalina-tribes.jar,jasper.jar,jasper-el.jar,ecj-*.jar,tomcat-api.jar,tomcat-util.jar,tomcat-coyote.jar,tomcat-dbcp.jar,tomcat-jni.jar,tomcat-spdy.jar,tomcat-i18n-en.jar,tomcat-i18n-es.jar,tomcat-i18n-fr.jar,tomcat-i18n-ja.jar,tomcat-juli-adapters.jar,catalina-jmx-remote.jar,catalina-ws.jar,tomcat-jdbc.jar,tools.jar,commons-beanutils*.jar,commons-codec*.jar,commons-collections*.jar,commons-dbcp*.jar,commons-digester*.jar,commons-fileupload*.jar,commons-httpclient*.jar,commons-io*.jar,commons-lang*.jar,commons-logging*.jar,commons-math*.jar,commons-pool*.jar,jstl.jar,geronimo-spec-jaxrpc*.jar,wsdl4j*.jar,ant.jar,ant-junit*.jar,aspectj*.jar,jmx.jar,h2*.jar,hibernate*.jar,httpclient*.jar,jmx-tools.jar,jta*.jar,log4j.jar,log4j-1*.jar,mail*.jar,slf4j*.jar,xercesImpl.jar,xmlParserAPIs.jar,xml-apis.jar,junit.jar,junit-*.jar,hamcrest*.jar,org.hamcrest*.jar,ant-launcher.jar,cobertura-*.jar,asm-*.jar,dom4j-*.jar,icu4j-*.jar,jaxen-*.jar,jdom-*.jar,jetty-*.jar,oro-*.jar,servlet-api-*.jar,tagsoup-*.jar,xmlParserAPIs-*.jar,xom-*.jar
	java.class.version = 51.0   Java Class Version 研究 http://blog.csdn.net/antswallow/article/details/5599787
	java.specification.name = Java Platform API Specification
	sun.management.compiler = HotSpot 64-Bit Tiered Compilers
	os.version = 2.6.32-358.6.2.el6.x86_64
	user.home = /root
	org.apache.catalina.startup.ContextConfig.jarsToSkip = 
	user.timezone = Asia/Shanghai
	catalina.useNaming = true
	java.awt.printerjob = sun.print.PSPrinterJob
	file.encoding = UTF-8
	java.specification.version = 1.7
	catalina.home = /alidata/server/tomcat-8080
	user.name = root
	java.class.path = /alidata/server/tomcat-8080/bin/bootstrap.jar:/alidata/server/tomcat-8080/bin/tomcat-juli.jar
	java.naming.factory.initial = org.apache.naming.java.javaURLContextFactory
	package.definition = sun.,java.,org.apache.catalina.,org.apache.coyote.,org.apache.tomcat.,org.apache.jasper.
	java.vm.specification.version = 1.7
	sun.arch.data.model = 64
	sun.java.command = org.apache.catalina.startup.Bootstrap start
	java.home = /alidata/server/jdk1.7.0_09/jre
	user.language = en
	java.specification.vendor = Oracle Corporation
	awt.toolkit = sun.awt.X11.XToolkit
	java.vm.info = mixed mode
	java.version = 1.7.0_60
	java.ext.dirs = /alidata/server/jdk1.7.0_09/jre/lib/ext:/usr/java/packages/lib/ext
	sun.boot.class.path = /alidata/server/jdk1.7.0_09/jre/lib/resources.jar:/alidata/server/jdk1.7.0_09/jre/lib/rt.jar:/alidata/server/jdk1.7.0_09/jre/lib/sunrsasign.jar:/alidata/server/jdk1.7.0_09/jre/lib/jsse.jar:/alidata/server/jdk1.7.0_09/jre/lib/jce.jar:/alidata/server/jdk1.7.0_09/jre/lib/charsets.jar:/alidata/server/jdk1.7.0_09/jre/lib/jfr.jar:/alidata/server/jdk1.7.0_09/jre/classes
	server.loader = 
	java.vendor = Oracle Corporation
	catalina.base = /alidata/server/tomcat-8080
	file.separator = /
	java.vendor.url.bug = http://bugreport.sun.com/bugreport/
	common.loader = ${catalina.base}/lib,${catalina.base}/lib/*.jar,${catalina.home}/lib,${catalina.home}/lib/*.jar
	sun.io.unicode.encoding = UnicodeLittle
	sun.cpu.endian = little
	package.access = sun.,org.apache.catalina.,org.apache.coyote.,org.apache.tomcat.,org.apache.jasper.
	sun.cpu.isalist = 

	VM Flags:

	-Djava.util.logging.config.file=/alidata/server/tomcat-8080/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Xms128m -Xmx128m -XX:PermSize=64M -XX:MaxPermSize=64m -Djava.endorsed.dirs=/alidata/server/tomcat-8080/endorsed -Dcatalina.base=/alidata/server/tomcat-8080 -Dcatalina.home=/alidata/server/tomcat-8080 -Djava.io.tmpdir=/alidata/server/tomcat-8080/temp
```

2）、jstack 主要用来查看某个java进程内的线程堆栈信息。
（1）jstack [option] pid
	 jstack [option] executable core
	 jstack [option] [server-id@]remote-hostname-or-ip
（2）jstack 用于打印给定java进程id或core file 或远程调试服务的Java堆栈信息, 如果是在64位机器上，制定选项"-J-64", 
		Java崩溃生成core file（jstack获得java stack 和 native stack信息，从而找出问题）
		附属到正在运行的程序中（监控 java stack 和native stack信息，优化程序）
	
（3）实例：jstack可以定位到线程堆栈，根据堆栈信息我们可以定位到具体代码，所以它在JVM性能调优中使用得非常多。
	下面我们来一个实例找出某个Java进程中最耗费CPU的Java线程并定位堆栈信息，用到的命令有ps、top、printf、jstack、grep
	
```
	[root@AY131218130632Z log]# jstack -J-d64 2044
	2017-04-11 17:48:27
	Full thread dump Java HotSpot(TM) 64-Bit Server VM (24.60-b09 mixed mode):

	"Attach Listener" daemon prio=10 tid=0x00007f6288003000 nid=0x56c waiting on condition [0x0000000000000000]
	   java.lang.Thread.State: RUNNABLE

	"http-bio-8080-exec-10" daemon prio=10 tid=0x00007f6294014000 nid=0x1dc4 waiting on condition [0x00007f62a8385000]
	   java.lang.Thread.State: WAITING (parking)
		at sun.misc.Unsafe.park(Native Method)
		- parking to wait for  <0x00000000fb037b20> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)
		at java.util.concurrent.locks.LockSupport.park(LockSupport.java:186)
		at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2043)
		at java.util.concurrent.LinkedBlockingQueue.take(LinkedBlockingQueue.java:442)
		at org.apache.tomcat.util.threads.TaskQueue.take(TaskQueue.java:104)
		at org.apache.tomcat.util.threads.TaskQueue.take(TaskQueue.java:32)
		at java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1068)
		at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)
		at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:615)
		at java.lang.Thread.run(Thread.java:745)
	
	"main" prio=10 tid=0x00007f62a4009000 nid=0x7fd runnable [0x00007f62ad565000]
	   java.lang.Thread.State: RUNNABLE
		at java.net.PlainSocketImpl.socketAccept(Native Method)
		at java.net.AbstractPlainSocketImpl.accept(AbstractPlainSocketImpl.java:398)
		at java.net.ServerSocket.implAccept(ServerSocket.java:530)
		at java.net.ServerSocket.accept(ServerSocket.java:498)
		at org.apache.catalina.core.StandardServer.await(StandardServer.java:452)
		at org.apache.catalina.startup.Catalina.await(Catalina.java:778)
		at org.apache.catalina.startup.Catalina.start(Catalina.java:724)
		at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
		at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)
		at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
		at java.lang.reflect.Method.invoke(Method.java:606)
		at org.apache.catalina.startup.Bootstrap.start(Bootstrap.java:322)
		at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:456)

	"VM Thread" prio=10 tid=0x00007f62a405f000 nid=0x7fe runnable 
	"VM Periodic Task Thread" prio=10 tid=0x00007f62a4096000 nid=0x805 waiting on condition 
	JNI global references: 237
```	
  jstack输出解读：  http://blog.csdn.net/zxh87/article/details/52137335
	"main": 线程名称
	prio: 线程优先级
	tid: 线程id
	nid: 操作系统映射的线程id, 非常关键，后面再使用jstack时补充；
	java.lang.Thread.State（线程的状态）：
		New: 线程对象创建时存在的状态, 此时线程不能可能执行；
		Runnable: 当调用thread.start()后, 线程变为Runnable状态。只要得到CPU，就可以执行；
		Running: 线程正在执行；
		WAITING: 执行thread.join()或者在锁对象调用obj.wait()等情况会进入该状态，表明正在处于等待某个资源或条件发生来唤醒自己; 
		TIMED_WAITING: 执行thread.sleep(long)、thread.join(long)、obj.wait(log)，进入该状态，与Waiting区别是，有指定时间限制；
		Blocked: 如果进入同步方法或同步块代码, 没有获取到锁，则会进入该状态;
		Dead: 线程执行完毕，或者抛出了未捕获的异常，会进入dead状态，表示线程执行结束;
		
	  new Thread(new Runnable(){
	  		public void run(){
	  			 
	  		}
	  }).start();
	  
		
	jstack日志主要关注以下信息：
		Deadlock: 表示有死锁
		Waiting on condition: 等待某个资源或条件来唤醒自己。具体根据jstacktrace来分析，比如线程正在sleep, 或网络读取繁忙而等待。
		Blocked：阻塞
		Waiting on monitor entry: 在等待获取锁。
		in Object.wait(): 获取锁后又执行obj.wait放弃锁。
		Monitor是 Java中用以实现线程之间的互斥与协作的主要手段，它可以看成是对象或者 Class的锁。每一个对象都有，也仅有一个 monitor。从下图中可以看出，每个 Monitor在某个时刻，只能被一个线程拥有，该线程就是 "Active Thread"，而其它线程都是 "Waiting Thread"，分别在两个队列 " Entry
 Set"和 "Wait Set"里面等候。在 "Entry Set"中等待的线程状态是 "Waiting for monitor entry"，而在 "Wait Set"中等待的线程状态是 "in Object.wait()"
	
	参考：https://blog.csdn.net/dongyansheng_max/article/details/23922059	
	
3）、jmap(Memory Map)和jhat(Java Heap Analysis Tool) jmap 主要用来查看堆内存使用状况，一般结合jhat使用。
	jmap [option] pid
	jmap [option] executable core
	jmap [option] [server-id@]remote-hostname-or-ip
	
	内存分析：https://blog.csdn.net/pengyonglu/article/details/51741081

（1）jmap -permstat pid 
  打印进程的类加载器和类加载器加载的持久代对象信息，输出：类加载器名称、对象是否存活（不可靠）、对象地址、父类加载器、已加载的类大小等信息。
   root@ubuntu:/#jmap -permstat pid.
   
（2）jmap -heap pid
  使用jmap -heap pid查看进程堆内存使用情况，包括使用的GC算法、堆配置参数和各代中堆内存使用情况。
  [root@AY131218130632Z dump]# jmap -heap 2044
	Attaching to process ID 2044, please wait...
	Debugger attached successfully.
	Server compiler detected.
	JVM version is 24.60-b09

	using thread-local object allocation.
	Mark Sweep Compact GC

	Heap Configuration:
	   MinHeapFreeRatio = 40   //最小剩余对空间小于40% 就会增大堆内存直到最大Xmx
	   MaxHeapFreeRatio = 70   //最大剩余堆空间大于70%，就会缩小堆内存直到最小Xms
	   MaxHeapSize      = 134217728 (128.0MB)
	   NewSize          = 1310720 (1.25MB)
	   MaxNewSize       = 17592186044415 MB
	   OldSize          = 5439488 (5.1875MB)
	   NewRatio         = 2
	   SurvivorRatio    = 8
	   PermSize         = 67108864 (64.0MB)
	   MaxPermSize      = 67108864 (64.0MB)
	   G1HeapRegionSize = 0 (0.0MB)

	Heap Usage:
	New Generation (Eden + 1 Survivor Space):
	   capacity = 40239104 (38.375MB)
	   used     = 19944312 (19.02037811279297MB)
	   free     = 20294792 (19.35462188720703MB)
	   49.56450322551914% used
	Eden Space:
	   capacity = 35782656 (34.125MB)
	   used     = 19670296 (18.759056091308594MB)
	   free     = 16112360 (15.365943908691406MB)
	   54.97159294156364% used
	From Space:
	   capacity = 4456448 (4.25MB)
	   used     = 274016 (0.261322021484375MB)
	   free     = 4182432 (3.988677978515625MB)
	   6.148753446691177% used
	To Space:
	   capacity = 4456448 (4.25MB)
	   used     = 0 (0.0MB)
	   free     = 4456448 (4.25MB)
	   0.0% used
	tenured generation:
	   capacity = 89522176 (85.375MB)
	   used     = 78100648 (74.48258209228516MB)
	   free     = 11421528 (10.892417907714844MB)
	   87.24167741409681% used
	Perm Generation:
	   capacity = 67108864 (64.0MB)
	   used     = 25657440 (24.468841552734375MB)
	   free     = 41451424 (39.531158447265625MB)
	   38.23256492614746% used

	13907 interned Strings occupying 1814464 bytes.
	
	
	NewRatio = 2, tenured:New+From = 2:1;
	SurvivorRatio = 8, Eden:From:To = 8:1:1;
  
（3）jmap -histo[:live] pid
 使用jmap -histo[:live] pid查看堆内存中的对象数目、大小统计直方图，如果带上live则只统计活对象。
	 [root@AY131218130632Z dump]# jmap -histo:live 2044 | more
	 num     #instances         #bytes  class name
	----------------------------------------------
	   1:         70377       11598832  [C
	   2:         14091       10295008  [B
	   3:         45921        6530544  <constMethodKlass>
	   4:         45921        5888864  <methodKlass>
	   5:          4317        4901728  <constantPoolKlass>
	   6:          3372        4564008  [I
	   7:          4317        3046056  <instanceKlassKlass>
	   8:          3651        2796000  <constantPoolCacheKlass>
	   9:         68647        1647528  java.lang.String
	  10:         22773         910920  java.util.LinkedHashMap$Entry
	  11:         26288         841216  java.util.HashMap$Entry
	  12:          1071         639584  <methodDataKlass>
	  13:          1808         596536  [Ljava.util.HashMap$Entry;

 
（4）jmap -dump:format=b,file=dumpFileName
 用jmap把进程内存使用情况dump到文件中，再用jhat分析查看。
  dump出来的文件可以用MAT、VisualVM等工具查看，这里用jhat查看：
  jhat -port 9998 /tmp/dump.dat
  然后就可以在浏览器中输入主机地址:9998查看了：
  [root@AY131218130632Z dump]# jmap -dump:format=b,file=a.dump 2044
	Dumping heap to /alidata/server/tomcat-8080/dump/a.dump ...
	Heap dump file created
	[root@AY131218130632Z dump]# ll
	total 47160
	-rw------- 1 root root 48285011 May  3 18:29 a.dump

（5）jhat 是分析java堆的工具，可以将堆中信息已html形式展示出来，包括对象的数量，大小等等。并支持对象查询语言（oql）。
     1.jmap -demp:format=b,file=a.map 2044
	 2.jhat a.map (jhat -port 8080 a.map)  有时你dump出来的堆很大，在启动时会报堆空间不足的错误，可以使用如下参数：  jhat -J-Xmx512m <heap dump file>
	 3.就可以在浏览器输入主题查看地址了。
	   1）显示出堆中包含所有类
	   2）从根基能引用到的对象
	   3）显示平台所包含所有实例数量
	   4）堆实例分布表
	   5）执行对象
	   
	[root@AY131218130632Z dump]# jhat -port 8070 a.dump
	Reading from a.dump...
	Dump file created Wed May 03 18:29:12 CST 2017
	Snapshot read, resolving...
	Resolving 358221 objects...
	Chasing references, expect 71 dots.......................................................................
	Eliminating duplicate references.......................................................................
	Snapshot resolved.
	Started HTTP server on port 8070
	Server is ready.

  
5）、jstat（JVM统计监测工具）
jstat [ generalOption | outputOptions vmid [interval[s|ms] [count]] ]
vmid是虚拟机ID，在Linux/Unix系统上一般就是进程ID。interval是采样时间间隔。count是采样数目。比如下面输出的是GC信息，采样时间间隔为250ms，采样数为4：
	不同维度统计 jps -v
	2044 Bootstrap -Djava.util.logging.config.file=/alidata/server/tomcat-8080/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Xms128m -Xmx128m -XX:PermSize=64M -XX:MaxPermSize=64m -Djava.endorsed.dirs=/alidata/server/tomcat-8080/endorsed -Dcatalina.base=/alidata/server/tomcat-8080 -Dcatalina.home=/alidata/server/tomcat-8080 -Djava.io.tmpdir=/alidata/server/tomcat-8080/temp
	（1）查看类统计
		[root@AY131218130632Z ~]# jstat -class 2044
		Loaded  Bytes  Unloaded  Bytes     Time   
		  4322  8485.4        0     0.0      11.44
	（2）HotSpot即时编译器编译情况统计
		[root@AY131218130632Z ~]# jstat -compiler 2044
		Compiled Failed Invalid   Time   FailedType FailedMethod
			 715      1       0    67.32          1 org/apache/catalina/loader/WebappClassLoader findResourceInternal
	（3）JVM堆中垃圾收集情况统计 (各个内存区域大小以及垃圾收集次数)
		[root@AY131218130632Z ~]# jstat -gc 2044
		 S0C    S1C    S0U    S1U      EC       EU        OC         OU       PC     PU    YGC     YGCT    FGC    FGCT     GCT   
		4352.0 4352.0  0.0   266.9  34944.0  14019.1   87424.0    76268.6   65536.0 25054.9    386    2.460   1      0.416    2.876
	（4）新生代、老年代、持久代储存容量情况
		[root@AY131218130632Z ~]# jstat -gccapacity 2044
		 NGCMN    NGCMX     NGC     S0C   S1C       EC      OGCMN      OGCMX       OGC         OC      PGCMN    PGCMX     PGC       PC     YGC    FGC 
		 43648.0  43648.0  43648.0 4352.0 4352.0  34944.0    87424.0    87424.0    87424.0    87424.0  65536.0  65536.0  65536.0  65536.0    386     1
	（5）垃圾收集原因（上一次，当次）
		[root@AY131218130632Z ~]# jstat -gccause 2044
		  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT    LGCC                 GCC                 
		  0.00   6.13  68.20  87.24  38.23    386    2.460     1    0.416    2.876 Allocation Failure   No GC  
	（6）新生代垃圾收集情况
		[root@AY131218130632Z ~]# jstat -gcnew 2044
		 S0C    S1C    S0U    S1U   TT MTT  DSS      EC       EU     YGC     YGCT  
		4352.0 4352.0    0.0  266.9 15  15 2176.0  34944.0  25935.4    386    2.460
	（7）新生代存储容量情况
		[root@AY131218130632Z ~]# jstat -gcnewcapacity 2044
		NGCMN      NGCMX       NGC      S0CMX     S0C     S1CMX     S1C       ECMX        EC      YGC   FGC 
		43648.0    43648.0    43648.0   4352.0   4352.0   4352.0   4352.0    34944.0    34944.0   386     1
	（8）老年代与持久代GC情况
		[root@AY131218130632Z ~]# jstat -gcold 2044
		   PC       PU        OC          OU       YGC    FGC    FGCT     GCT   
		65536.0  25054.9     87424.0     76268.6    386     1    0.416    2.876
	（9）老年代存储容量情况
		  OGCMN       OGCMX        OGC         OC       YGC   FGC    FGCT     GCT   
		87424.0     87424.0     87424.0     87424.0   386     1    0.416    2.876
	（10）持久代存储容量情况
		[root@AY131218130632Z ~]# jstat -gcpermcapacity 2044
		PGCMN      PGCMX       PGC         PC      YGC   FGC    FGCT     GCT   
	   65536.0    65536.0    65536.0    65536.0   386     1    0.416    2.876
	（11）新生代、老年代及持久代垃圾回收情况
		[root@AY131218130632Z ~]# jstat -gcutil 2044
		  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT   
		  0.00   6.13  98.29  87.24  38.23    386    2.460     1    0.416    2.876
	（12）HotSpot编译方法统计
		[root@AY131218130632Z ~]# jstat -printcompilation 2044
		 Compiled  Size  Type Method
		 715    403    1 java/io/UnixFileSystem parentOrNull
	
	其他例子：
	root@ubuntu:/# jstat -gc 21711 250 4
	 S0C    S1C    S0U    S1U      EC       EU        OC         OU       PC     PU    YGC     YGCT    FGC    FGCT     GCT   
	192.0  192.0   64.0   0.0    6144.0   1854.9   32000.0     4111.6   55296.0 25472.7    702    0.431   3      0.218    0.649
	192.0  192.0   64.0   0.0    6144.0   1972.2   32000.0     4111.6   55296.0 25472.7    702    0.431   3      0.218    0.649
	192.0  192.0   64.0   0.0    6144.0   1972.2   32000.0     4111.6   55296.0 25472.7    702    0.431   3      0.218    0.649
	192.0  192.0   64.0   0.0    6144.0   2109.7   32000.0     4111.6   55296.0 25472.7    702    0.431   3      0.218    0.649
	  
	可以看出：
	总内存 = 永久代 + 堆内存
	堆内存 = 年轻代 + 年老代 
	年轻代 = Eden区 + 两个Survivor区（From和To）

	现在来解释各列含义：
	S0C、S1C、S0U、S1U：Survivor 0/1区容量（Capacity）和使用量（Used）
	EC、EU：Eden区容量和使用量
	OC、OU：年老代容量和使用量
	PC、PU：永久代容量和使用量
	YGC、YGT：年轻代GC次数和GC耗时
	FGC、FGCT：Full GC次数和Full GC耗时
	GCT：GC总耗时




附录1、远程监控服务器JVM程序运行信息：http://blog.csdn.net/coslay/article/details/44802497
   
   在服务器端启动 jstatd 服务后, 远程的机器可以通过 rmi 协议获取服务器上 Java 程序的运行状态.

	在服务器上创建 jstatd 的授权文件, 假设文件路径为/etc/jstatd.all.policy, 内容如下:
grant codebase "file:/usr/local/java/lib/tools.jar" {
	permission java.security.AllPermission;
};
	
	grant codebase "file:${java.home}/../lib/tools.jar" {
	    permission java.security.AllPermission;
	};

	如果你的JAVA_HOME目录不是/usr/local/java的话, 请改为正确的值.
	接下来通过以下命令启动 jstatd 服务:
	jstatd -J-Djava.security.policy=/etc/jstatd.all.policy -p 8109
	
	./jstatd -J-Djava.security.policy=jstatd.all.policy -J-Djava.rmi.server.hostname=192.168.0.23

	需要注意的地方有:
	授权文件的路径需要改成你自己的, 最好使用绝对路径.
	-p参数指定 jstatd 服务监听的端口. 如果不指定的话, 默认的端口为 1009. 不过从我自己的实践来看, 最好还是设定一个比1024大的端口号.
	远程使用jps, jstat命令

	在服务器上启动 jstatd 服务之后, 就可以在自己的机器上查看服务器上运行的 Java 进程了. 假设服务器的IP为 192.168.2.37, jstatd 服务监听的端口号为 12345.

	首先通过 jps 命令获取服务器上运行的 Java 进程列表:
	jps -l rmi://192.168.2.37:12345

	拿到 Java 进程的 pid 列表之后, 可以通过 jstat 命令获取某个进程的 GC 信息:
	jstat -gcutil rmi://39939@192.168.2.37:12345 1000 1000

	其中 39939 表示 Java 进程的pid.
	
	
附录2、class name是对象类型，说明如下：
	B  byte
	C  char
	D  double
	F  float
	I  int
	J  long
	Z  boolean
	[  数组，如[I表示int[]
	[L+类名 其他对象
	
附录3、JVM性能调优参考资料
《Java虚拟机规范》
《Java Performance》
《Trouble Shooting Guide for JavaSE 6 with HotSpot VM》: http://www.oracle.com/technetwork/java/javase/tsg-vm-149989.pdf 
《Effective Java》

VisualVM: http://docs.oracle.com/javase/7/docs/technotes/guides/visualvm/
jConsole: http://docs.oracle.com/javase/1.5.0/docs/guide/management/jconsole.html
Monitoring and Managing JavaSE 6 Applications: http://www.oracle.com/technetwork/articles/javase/monitoring-141801.html

附录4、printf 输出八进制、十六进制

	int PrintVal = 9;
	/*按整型输出，默认右对齐*/
	printf("%d\n",PrintVal);
	/*按整型输出，补齐4位的宽度，补齐位为空格，默认右对齐*/
	printf("%4d\n",PrintVal);
	/*按整形输出，补齐4位的宽度，补齐位为0，默认右对齐*/
	printf("%04d\n",PrintVal);

	/*按16进制输出，默认右对齐*/   
	printf("%x\n",PrintVal);
	/*按16进制输出，补齐4位的宽度，补齐位为空格，默认右对齐*/
	printf("%4x\n",PrintVal);
	/*按照16进制输出，补齐4位的宽度，补齐位为0，默认右对齐*/
	printf("%04x\n",PrintVal);

	/*按8进制输出，默认右对齐*/
	printf("%o\n",PrintVal);
	/*按8进制输出，补齐4位的宽度，补齐位为空格，默认右对齐*/
	printf("%4o\n",PrintVal);
	/*按照8进制输出，补齐4位的宽度，补齐位为0，默认右对齐*/
	printf("%04o\n",PrintVal);

	