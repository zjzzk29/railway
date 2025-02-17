const express = require('express'); // 引入 express

const app = express();              // 初始化 express 应用
const PORT = process.env.PORT || 3000; // 监听的端口

// 定义一个简单的路由
app.get('/', (req, res) => {
    res.send('Hello, Railway! 🌟'); // 返回一段测试文本
});

// 启动服务
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
