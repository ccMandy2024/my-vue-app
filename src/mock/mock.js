// src/mock/mock.ts
import Mock from 'mockjs';

// 設定模擬的 API 請求
Mock.mock('/api/user', 'get', {
  code: 200,
  message: 'Success',
  data: {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com'
  }
});
