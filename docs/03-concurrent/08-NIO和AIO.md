#08-NIO-AIO

+ 1. 什么是NIO
+ 2. Buffer
+ 3. Channel
+ 4. 网络编程
+ 5. AIO
+ 6. 为什么要了解NIO和AIO

##1. 什么是NIO
- 概念
	NIO简称New I/O的简称，与旧式的基于流的I/O方法相对，从名字上看，它标识一套新的I/O标准，它是在Java 1.4中被纳入到JDK中的，并具有以下特性：
	- NIO是基于块（block）的，它以块为基本单位处理数据
	- 所有原始类型提供Buffer缓存支持
	- 增加通道（Channel）对象，作为新的原始I/O对象
	- 支持锁和内存映射文件的文件访问接口
	- 提供基于Selector的异步网络I/O

- Buffer&Channel

![](./images/buffer&channel.png)
![](./images/bufferclass.png)
![](./images/channelclass.png)

##2. Buffer
- 简单示例
	//获取文件Channel
	FileInputStream fi = new FileInputStream(new File("d:\\temp_buffer.tmp"));
	FileChannel fc = fi.getChannel();
	//从通道读取字节放到字节缓存类
	ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
	fc.read(byteBuffer);
	//关闭通道
	fc.close();
	byteBuffer.flip();
	

- NIO复制文件
	public static void nioCopyFile(String resource, String destination){
	    FileInputStream fis = new FileInputStream(new File(resource));
	    FileOutputStream fos = new FileOutputStream(new File(destination));
	    FileChannel readChannel = fis.getChannel();
	    FileChannle writeChannel = fos.getChannel();
	    ByteBuffer buffer = ByteBuffer.allocate(1024);
	    while(ture){
	    	buffer.clear();
	    	ing len = readChannel.read(buffer);//输入流读入缓存
	    	if(len == -1){
	    		break;//读取完毕
	    	}
	    	buffer.flip();
	    	writeChannel.write(buffer);//写入输出流
	    }		
	    readChannel.close();
	    writeChannel.close();
	}
	1.获取输入流，输出流
	2.获取输入流通道，输出流通道
	3.分配字节缓冲区，输入流放入缓存，输出流取缓存，清空缓存，依次循环，知道读取完成
	4.关闭输入流，输出流
	//NIO Buffer使用步骤说明
	1.将数据写入到 Buffer 中.
	2.调用 Buffer.flip()方法, 将 NIO Buffer 转换为读模式.
	3.从 Buffer 中读取数据
	4.调用 Buffer.clear() 或 Buffer.compact()方法, 将 Buffer 转换为写模式.
	
- Buffer参数介绍	
    Buffer有三个重要参数：位置（position）、容量（capacity）和上限（limit）
    
|参数|写模式|读模式|
|-|-|-|
|位置（position）|当前缓冲区位置，将从position的下一个位置写数据|当前缓冲区读取的位置，将从position此位置后读取数据|
|容量（capacity）|缓存区的总容量上限|缓存区的总容量上限|
|上限（limit）|缓冲区的实际上限，它总是小于等于容量。通常情况下与容量相等|代表可读取的容量，和上次写入的数据量相等|

   三个参数示例
   ByteBuffer b = new ByteBuffer(15);//分配15个字节大小的缓冲区
   System.out.println("limit=" + b.limit() + " capacity=" + b.capacity() + " position=" + b.position());
   for(int i=0; i<10; i++){
   	  b.put((byte)1);
   }
    System.out.println("limit=" + b.limit() + " capacity=" + b.capacity() + " position=" + b.position());
   b.flip();
    System.out.println("limit=" + b.limit() + " capacity=" + b.capacity() + " position=" + b.position());
   for(int i=0; i<10; i++){
   	  b.get();
   }
   System.out.println();
   System.out.println("limit=" + b.limit() + " capacity=" + b.capacity() + " position=" + b.position());
   b.flip();
   System.out.println("limit=" + b.limit() + " capacity=" + b.capacity() + " position=" + b.position());

- buffer缓存区模型
	- 新建
		![](./images/buffer-new.png)
	- 存入10byte
		![](./images/buffer-write10.png)
	- flip
		![](./images/buffer-flip1.png)
	- 5次读取
		![](./images/buffer-read5.png)
	- flip
		![](./images/buffer-flip2.png)

  - public final Buffer rewind():
  	将position置零，并清除标志位（mark）
  - public final Buffer clear():
  	将position置零，同时将limit设置为capacity大小，并清除了标志位（mark）
  - public final Buffer flip()：
  	现将limit设置到position位置，然后将position置零，并清除标志位（mark）;
  	通常在读写转换时候用

  - 文件映射到内存
  	RandomAccessFile raf = new RandomAccessFile("c:\\mapfile.txt", "rw");
  	FileChannel fc = raf.getChannel();
  	//将文件映射到内存中
  	MappedByteBuffer mbb = fc.map(FileChannel.MapMode.READ_WRITE, 0, raf.length());
  	while(mbb.hasRemainning){
  		System.out.println((char)mbb.get());
  	}
  	mbb.put(0, (byte)98); //修改文件
  	raf.close()

##3. Channel

##4. 网络编程
- 多线程网路服务器的一般结构

![](./images/MThreadMode.png)

- 简单的EServer

- 存在问题
	- 为每个客户端使用一个线程，如果客户端出现延迟等异常，线程可能会被占用很长时间。因为数据的准备和读取都在这个线程中。
	- 此时，如果客户端众多，可能会消耗大量的系统资源
- 解决
	- 非阻塞的NIO
	- 数据准备好了在工作
	
- 模拟低效的客户端

- 把数据准备好了再通知我
	Channel有点类似于流，一个Channel可以和文件或者网络Socket对应
	Selector准备好数据后，返回SelectionKey, SelectionKey表示一对Selector和Channel的关系，
	从SelectorKey中可以得到Channel(数据已经备好)，并读取数据
	
  ![](./images/selectorKey.png)
  
- 参考代码

- 总结：
	- NIO会将数据准备好后再由应用进行处理，数据的读取过程依然在线程中完成。
	- 节省数据准备时间（因为Seletor可以复用）
	
##5. AIO
- 读完了在通知我
- 不会加快I/O,只是读完成再进行通知
- 使用回调函数进行处理

- AsynchronousServerSocketChannel

- AsynchronousSocketChannel

![](./images/aSocketChannel.png)