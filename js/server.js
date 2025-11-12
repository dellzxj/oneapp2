const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
// 获取 token 的接口
app.post('/api/login', async (req, res) => {
  try {
    const response = await axios.post('http://api.farm.0531yun.cn/api/v2.0/entrance/user/userLogin', req.body);
    res.json(response.data); // 返回获取的 token
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '获取 token 失败' });
  }
});
// 控制阀门的接口
app.get('/api/control-valve', async (req, res) => {
  const { token, deviceAddr, factorId, mode } = req.query;
  try {
    const response = await axios.get('http://api.farm.0531yun.cn/api/v2.0/irrigation/valveOperatingMode/manualControlValve', {
      headers: {
        'token': token
      },
      params: {
        deviceAddr,
        factorId,
        mode
      }
    });
    res.json(response.data); // 返回控制阀门的结果
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '控制阀门失败' });
  }
});
// 启动服务器
app.listen(PORT, () => {
  console.log(`代理服务器正在运行，访问地址: http://localhost:${PORT}`);
});
