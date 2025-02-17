const express = require('express'); // 引入 express

const app = express();              // 初始化 express 应用
const PORT = process.env.PORT || 3000; // 监听的端口

// 定义一个简单的路由
app.get('/', (req, res) => {
    res.send('Hello, Railway! 🌟'); // 返回一段测试文本
});

// 启动服务
app.listen(PORT, () => {
    // 输出正确的访问 URL，当代码部署到 Railway 后显示的是公开 URL
    console.log(`Server is running on http://localhost:${PORT}`); // 本地开发时
    console.log(`Public URL: https://your-project-name.up.railway.app`); // Railway 部署时显示正确的公开链接
});
