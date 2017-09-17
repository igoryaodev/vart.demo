# VARTONE 后台系统

### 项目结构

#### 描述

#### 如何运行


下载项目
```
 git clone http://yaoguang@newcode.vart.cc/scm/vart/vart.console.git
```

#### 接口
```
新票务订单状态：
 TicketOrderStatus
        WaitingForPayment = 1,
        // 已付清
        Paid = 2,
        Shipping = 3,
        Completed = 4,
        Refunding = 5,
        Cancelled = 6,
        Refunded = 7,
```
```
老票务订单状态：
	OrderStatus
        All = -1,
        // 待支付
        WaitingForPayment = 0,
        // 已付清
        Paid = 1,
        Shipping = 2,
        Completed = 3,
        Refunding = 4,
        Cancelled = 5,
        Refunded = 6,
        Invalid = 7
```