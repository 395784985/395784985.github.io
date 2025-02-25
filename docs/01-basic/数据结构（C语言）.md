# 数据结构 C语言
数据结构概述
	定义
		我们如何把现实中大量而复杂的问题以特定的数据类型和特定的存储结构
		保存到主存储器（内存）中，以在此基础上为实现某个功能（比如查找某个元素，
		删除某个元素，对所哟元素进行排序）而执行的相应操作，这个相应的操作也叫做算法。
	
		数据结构 = 个体 + 个体的关系  的存储
		算法 = 对存储数据的操作
	算法
		解题的方法和步骤
		
		衡量算法的标准
			1，时间复杂度
				大概程序要执行的次数，而非执行的时间。
			2，空间复杂度
				算法执行过程中大概所占用的最大内存。
			3，难易程度
			
			4，健壮性
			
	数据结构的地位
		数据结构是软件中最核心的课程
		
		程序 = 数据的存储 + 数据的操作 + 可以被计算机执行的语言
	
预备知识

	指针
		指针的重要性：
			指针式C语言额灵魂
		定义
			地址
				地址就是内存单元的编号
				从0开始的非负整数
				范围：0 —— FFFFFFF【0 —— 4G-1】
				每个单元占3个字节
			指针：
				指针就是地址 地址就是指针
				指针变量是存放内存单元的地址的变量
				指针的本质是一个操作受限的非负整数。
		分类
			1，基本类型的指针
			2，指针和数组的关系
			int main(void)
			{
				double * p;
				double x = 66.6;
				p = &x; //x占8个字节 1个字节是8个字节， 1个字节一个地址
				double arr[3] = {1.1, 2.2, 3.3};
				double * q;
				q = &arr[0];
				printf("%p\n", q); //%p实际就是以十六进制输出。
				return 0;
			}
	
	结构体
		为什么会出现结构体
			为了表示一些复杂的数据，而普通的基本类型变量无法满足要求
		什么是结构体
			结构体是用户根据需要自定义一些复合数据类型
		stuct student{
			int id;
			char name[200];
			int age;
		};//分号不能省
		
		如何使用结构体
		int main(void){
			//第一种
			struct Student st = {1000, "zhangsan", 20};
			printf("%d %s ^d\n", st.sid, st.name, st.age);
			//第二种
			st.sid = 99;
			//st.name = "lisi";//error
			strcpy(st.name, "lisi");
			st.age = 22;
			printf("%d %s ^d\n", st.sid, st.name, st.age);
			//第三种
			struct Student * pst;
			
			pst = &st;
			pst->sid = 99; //pst->sid 等价于 (*pst).sid ，而 (*pst).sid 等价于st.id ， 所以pst->sid 等价于st.id;
			
		}
		
		    struct Student st = {1000, "zhangsan", 20};
			struct Student * pst;
			1. st.sid
			2. pst->sid 
			   pst所指向的结构体变量中的sid这个成员
		注意事项
			结构体变量不能加减乘除，但可以相互赋值
			普通结构体变量和结构体指针变量作为函数传参问题。
			普通结构体变量和结构体指针变量作为函数传参问题。
	
	动态内存的分配和释放
		malloc函数可以动态分配内存，在内存不足时分配，内存过剩时进行释放。
模块一：线性结构【把所有的结点（类似数组元素，单个个体）用一根直线穿起来】
	连续存储[数组]
		1. 什么叫做数组
			元素类型相同，大小相等
			# include <stdio.h>
			//定义了一个书类型，该数据类型的名字叫做struct Arr, 该数据类型含有三哥成员
			struct Arr
			{
				int * pBase; //存储的数组第一个元素的地址
				int len; //数组所能容纳的最大元素的个数
				int cnt; //当前数组有效元素的个数
				int increment; //自动增长因子
			}
			void init_arr(struct Arr * pArr, int len); //初始化
			bool append_arr(struct Arr * pArr, int val); //追加
			bool insert_arr(struct Arr * pArr, int pos, int val); //添加
			bool delete_arr(); //删除
			int get(); //获取
			bool is_empty(struct Arr * pArr); //是否为空
			bool is_full(struct Arr * pArr); //是否满了
			show sort_arr(); //排序
			void show_arr(struct Arr * pArr); //显示数组
			void inversion_arr(); //倒置；
			int main(void){
				struct Arr arr;
				init_arr(&arr, 6);
				printf("%d\n", arr.len);
				show_arr(&arr);
				
				return 0;
			}
			void init_arr(struct Arr * pArr, int len){
				pArr->pBase = (int *)malloc(sizeof(int)*len);
				if(NULL == pArr->pBase){
					printf("动态内存分配失败！\n");
					exit(-1); //终止整个程序
				}else{
					pArr->len = len;
					pArr->cnt = 0;
				}
				return;
			}
			void is_empty(struct Arr * pArr){
				if(0 == pArr->cnt)
					return true;
				else
					return false;
			}
			void show_arr(struct Arr * pArr){
				if(is_empty(pArr)){
					printf("数组为空\n");
				}else{
					for(int i=0; i< pArr->cnt; ++i)
						printf("%d ", pArr->pBase[i]);
					printf("\n");
				}
			}
			bool is_full(struct Arr * pArr)
			{
				if(pArr->cnt == pArr->len)
					return true;
				else
					return false;
			}
			
			bool append_arr(struct Arr * pArr, int val)
			{
				if(is_full(pArr)){
					return false;
				}else //不满时追加{
					pArr->pBase[pArr-cnt] =val;
					(pArr-cnt)++;
				}
					
			}
			
			bool insert_arr(struct Arr * pArr, int pos, int val){
				int i;
				for(i=pArr->cnt-1; i>=pos-1; --i)
					pArr->pBase[i+1] = pArr->pBase[i];
				pArr->pBase[pos-1] = val;
				(pArr->cnt)++;
				return true;
			}
			void inversion_arr(struct Arr * pArr){
				int i=0;
				int j=pArr->cnt-1;
				int t;
				while(i<j){
					t = pArr->pBase[i];
					pArr->pBase[i] = pArr->pBase[j];
					pArr->pBase[j] = t;
					++i;
					--j;
				}
			}
			void sort_arr(struct Arr * pArr){
				int i;
				int j;
				for(i=0;i<pArr->cnt;++i){
					for(j=i+1; j<pArr->cnt; ++j){
						t = pArr->pBase[i];
						pArr->pBase[i] = pArr->pBase[j];
						pArr->pBase[j] = t;
						++i;
						--j;
					}
				}
			}
		2. 数组的优缺点：
	离散存储[链表]
		定义：
			n个节点离散分配
			彼此通过指针相连
			每个节点只有一个前驱节点，且只有一个后驱节点，首节点没有前驱结点，尾节点没有后续节点。
		
			专业术语：
				首节点，
					第一个有效节点
				尾节点，
					最后一个有效节点
				头结点，
					头结点数据类型和首节点类型一样
					第一个有效节点之前的节点
					头节点不存放有效数据
					加头节点目的主要是为了方便链表的操作。
				头指针
					指向头节点的指针变量
				尾指针
					指向尾节点的指针变量
					
			确定一个链表需要几个参数：
				只需要一个参数：头指针。
				因为我们通过头指针可以推算出链表的其他所有信息。
			
			# include <stdio.h>
			typedef struct Node{ //typedef 给某个数据类型起一个别名。
				int data; //数据域
				struct Node * pNext; //指针域
			}NODE, *PNODE; //NODE等价于struct Node, PNODE等价于struct Node *;
			
			int main(void){
				return 0;
			}
		
		分类 ：
			单链表：每个节点只有后一个节点指针域，尾节点指针域为空
			双链表：每个节点有两个指针域，尾节点后下一个节点为空
			循环链表：能通过任何一个节点找到其他所有的节点。
			非循环链表：
		算法：
			遍历
			查找
			清空
			销毁
			求长度
			排序
			删除节点
			插入节点
			
		链表的优缺点：
	线性结构的两种常见应用之一 栈  函数调用，
		定义
			一种可以实现“先进后出”的存储结构。
			栈类似于箱子里，往里面放书。
			栈：静态变量，局部变量放在栈中
			堆：动态变量，存放在堆中。
		
		分类
			静态栈（数组实现）
			动态栈（链表实现）
		
		算法
			出栈 pop
			压栈 push
			
			top  bottom
		应用
			函数调用
			中断
			表达式求值，两个栈编写一个计算器
			内存分配
			缓冲处理
			迷宫
		
	线性结构的两种常见应用之二 队列
		定义：
			一种可以实现“先进先出”的存储结构（比如排队买票）
		分类：
			链式队列（链表实现）
			静态队列（数组实现）
				静态队列通常都必须是循环队列实现的
				循环队列的讲解：
					1，静态队列为什么必须是循环队列
					2，循环队列需要几个参数来确定，及其含义的讲解
						需要两个参数来确定
							front 
							rear
					3，循环队列各个参数的含义
						2个参数不同场合不同的含义
						建议初学者先记住，然后慢慢体会。
							1）.初始化
								front 和 rear的值都是零
							2）. 队列非空
								front代表的是队列的第一个元素
								rear代表的是队列的最后一个有效元素的下一个元素。
							3）. 队列空
							    front和rear的值相等，但不一定是0。
					4，循环队列的入队伪算法
						1）将值存入rear所在的位置
						2）r = (r + 1)%数组长度  //  (n-1)%n = n-1
					5，循环队列的出队伪算法
						1）先把出队的值保存起来（若需要）
						2）f = (f + 1)%数组长度  //  (n-1)%n = n-1
					6，如何判断循环队列是否为空
						若front和rear的值相等，则该队列就一定为空。
					7，如何判断循环队列是否为满
						预备知识：
							front的值可能比near大，
							也完全有可能比near小，
							当然也可以相等。
						两种方式：
							1）.增加一个标识参数，来标识是否满
							2）.队列中少用一个元素【通常使用这种方式】
								if((r+1)%数组长度 == f)
									已满
								else
									不满
		算法：
			出队 
			入队
			
			front     rear
			
		应用：
			所有和时间有关的操作都与队列有关
	专题：递归
		1. 1+2+3+4+....100的和
		2. 求阶乘
		3. 汉诺塔
		4. 总迷宫
模块二：非线性结构
	树
	
	图
	
模块三：查找和排序
	折半查找
	
	排序：
		冒泡
		插入
		快速排序
		归并排序

Java中容器和数据结构的相关知识。
	Iterator接口
	Map
		哈希表
	



计算机科学中的树
	二叉树	
		▪ 二叉树	▪ 二叉查找树	▪ 笛卡尔树	▪ Top tree
		▪ T树			
	自平衡二叉查找树	
		▪ AA树	▪ AVL树	▪ 红黑树	▪ 伸展树
		▪ 树堆	▪ 节点大小平衡树		
	B树	
		▪ B树	▪ B+树	▪ B*树	▪ Bx树
		▪ UB树	▪ 2-3树	▪ 2-3-4树	▪ (a,b)-树
		▪ Dancing tree	▪ H树		
	Trie	
		▪ 前缀树	▪ 后缀树	▪ 基数树	
	空间划分树	
		▪ 四叉树	▪ 八叉树	▪ k-d树	▪ vp-树
		▪ R树	▪ R*树	▪ R+树	▪ X树
		▪ M树	▪ 线段树	▪ 希尔伯特R树	▪ 优先R树
	非二叉树	
		▪ Exponential tree	▪ Fusion tree	▪ 区间树	▪ PQ tree
		▪ Range tree	▪ SPQR tree	▪ Van Emde Boas tree	
	其他类型	
		▪ 堆	▪ 散列树	▪ Finger tree	▪ Metric tree
		▪ Cover tree	▪ BK-tree	▪ Doubly-chained tree	▪ iDistance
		▪ Link-cut tree	▪ 树状数组