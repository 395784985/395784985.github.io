

# java 虚拟机官方介绍

	http://docs.oracle.com/javase/8/

```
-- jvm参数

-Djava.awt.headless=true   无键盘，显示器模式
-Djava.net.preferIPv4Stack=true   java网络编程调用ip地址使用IPv4

-server -Xmx2g -Xms2g -Xmn256m 服务器模式启动 最大堆空间， 年轻代大小
-XX:PermSize=128m xmn永久区 class类静态字面量类越多，越大
-Xss256k 每个线程占内存大小
-XX:+DisableExplicitGC 禁用system.gc，使其调用无效，防止手动调用，导致无法进行 full gc
-XX:+UseConcMarkSweepGC 使用标记清理收集器
-XX:+CMSParallelRemarkEnabled 降低标记停顿
-XX:+UseCMSCompactAtFullCollection  在FULL GC的时候， 对年老代的压缩
-XX:LargePageSizeInBytes=128m  内存页的大小不可设置过大， 会影响Perm的大小
-XX:+UseFastAccessorMethods 原始类型的快速优化
-XX:+UseCMSInitiatingOccupancyOnly 使用手动定义初始化定义开始CMS收集
-XX:CMSInitiatingOccupancyFraction=70 使用cms作为垃圾回收使用70％后开始CMS收集

```
	
About Java SE 8
	What's New (Features and Enhancements)
	Commercial Features icon: link opens in a new window
	Compatibility Guide
	Known Issues 

Download and Install
	Certified System Configurations
	Download and Installation Instructions 

Write Your First Application
	Get Started with Java
	Get Started with JavaFX 

Learn the Language
	Java Tutorials Learning Paths 

Monitor and Troubleshoot
	Java Mission Control icon: link opens in a new window
	Java Flight Recorder icon: link opens in a new window
	Troubleshooting Guide
	
HotSpot Virtual Machine
	Java Platform, Standard Edition HotSpot Virtual Machine Garbage Collection Tuning Guide
		java平台，标准版本hotspot虚拟机垃圾回收协调指南：http://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html
	JRockit to HotSpot Migration Guide 
		
Deploy
	Deployment Guide 
	
Reference
	Java SE API Documentation
	JavaFX API Documentation
	HotSpot Serviceability Agent API Documentation
	Developer Guides
	Java Language and Virtual Machine Specifications
	Java SE Tools Reference for UNIX
	Java SE Tools Reference for Windows 

Release Notes
	Java SE Release Notes 

java 官方提供所有书籍
	http://docs.oracle.com/javase/8/javase-books.htm

Java SE
	API Documentation
	Developer Guides
	Deployment Guide
	Troubleshooting Guide
	Installation Guide
	Java Mission Control Release Notes
	Java SE Release Notes
	Specifications
	The Java Tutorials
	Tools Reference for UNIX Platforms
	Tools Reference for Windows Platforms 
	HotSpot Serviceability Agent API Documentation
	HotSpot Virtual Machine Garbage Collection Tuning Guide
	JRockit to HotSpot Migration Guide 

JavaFX
	Adding HTML Content to JavaFX Applications
	Getting Started with JavaFX
	Handling Events
	Incorporating Media Assets Into JavaFX Applications
	Interoperability
	JavaFX API Documentation
	Mastering FXML
	Properties and Binding Tutorial
	Sample Applications for Tutorials
	Transformations, Animations, and Visual Effects
	Using JavaFX Collections
	Working with JavaFX Graphics
	Working with JavaFX UI Components
	Working with Layouts in JavaFX
	Working with the JavaFX Scene Graph 

Oracle Java SE Embedded
	Developer's Guide
	Release Notes, Release 8u6
	Release Notes, Release 8.0
	JDK for ARM Release Notes, Release 8u6 

JavaFX Scene Builder 2
	Getting Started with JavaFX Scene Builder
	Installing JavaFX Scene Builder
	Release Notes
	User Guide
	Using JavaFX Scene Builder with Java IDEs 


