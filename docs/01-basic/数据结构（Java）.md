# Java数据结构研究

* 计算机界数据结构

* java语言中数据结构
  [参考链接](http://blog.csdn.net/u010947402/article/details/51878166)
  java常用数据结构主要为Collection接口和Map接口，只提供接口，具体使用继承接口的类
  -Collection
    - List 特定顺序的集合
    - Set 不可重复的集合
    - Queue保持一个（FIFO）的队列
  -Map 一组成对的"键值对"对象
  
  - Collection: 每个位置只能一个元素对象
  - Map保存的是“键值对”，小型数据库，通过键找到值
  
  Iterator 接口，所有集合都有遍历。
  
  - Collection接口  方法：add remove get contains iterator
    - Set
      - HashSet 基于HashMap实现，无容量限制；非线程安全的。
        - LinkedHashSet
      - SortSet
        - TreeSet 基于TreeMap实现，支持排序；非线程安全的。
    - List
      - Arrays
      - AbstractList
        - ArrayList 基于动态数组实现，无容量限制，添加元素会扩容，删除元素时不会缩小容量，trimtoSize方法缩小。非线程安全的
        - Vector 基于Synchronized实现的线程安全的ArrayList。syn(add,get)可用过capacityIncreament来控制容量扩充。
        - Stack 基于Vector实现，支持LIFO(后进先出)， 入栈 push(addElement),出栈 pop, 栈顶元素peak。
      - LinkedList 双向链表机制实现，插入对象，新建entry对象，切换相邻元素的相互引用；查找或删除元素时，需遍历链表，找到进行操作。非线程安全的。
  
  - Map接口 put get remove containKey keySet
    - HashMap 采用数组方式存储key、value构成的Entry对象，无容量限制，非线程安全。
    - TreeMap 基于红黑树实现，无容量限制；TreeMap是非线程安全的。
    - LinkedHashMap
    - ConcurrentHashMap 线程安全，分段segment 加锁。
    - HashTable 线程安全，弃用，效率低下
    
    
  - 并发包concurrent 以下都是现成安全的包
    - ConcurrentHashMap 分段segment加锁
    - CopyOnWriteArrayList Reentrantlock  add remove
    - CopyOnWriteArraySet 基于CopyOnWriteArrayList 实现
    - ArrayBlockingQueue基于数组，先进先出，现成安全集合类  Condition
    - AtomicInteger 无锁，基于CAS（Compare and Swap），比synchronized 高2.8倍
    - ThreadPoolExecutor  
    - Executors 创建线程池，单个线程，固定数量线程池，弹性线程池。
    - FutureTask 异步获取执行结果 Runnable & Callable ,
    - semaphore 控制共享资源同时被访问的个数的类。连接池中控制连接的个数。
    - CountDownLatch 多线程同时执行某些动作，减计数方式latch.await后的代码执行。
    - CylicBarrier 与CountDownLatch相反，当await数量到达设定的数量后，才继续执行。
    - ReenTrantlock
    - Condition 
    - ReenTrantReadWriteLock
  
* java中数据结构与计算机中有什么不同


* final 关键字： 修饰类、方法和变量（包括成员变量和局部变量）
  final 表示不可变，修饰常量
  
  final 修饰类：受保护，不可被继承；final修饰的类，不可在赋值其他类，但是类的内容是可变的。
  final 方法：锁定方法，不让子类调用。
  final 变量：一旦赋值，就不能再赋值了；
            成员变量必须在定义时，或构造器中初始化;
            局部变量必须在使用之前进行初始化。
            方法参数必须在使用之前进行初始化。
            但如果是集合，集合内可以变；

##1、计算机界数据结构

数组，链表，树，图