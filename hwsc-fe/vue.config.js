/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 17:25:55
 * @LastEditTime: 2019-09-24 17:45:52
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    devServer: {
        // 前端程序猿 配置一个代理服务
        // 当 访问 /Product 打头的请求时 转发给 http://localhost:5000
        proxy: {
            '/goods': {
                target: 'http://10.36.149.48:6001',
                ws: true,
                changeOrigin: true
            }
        }
    },
    lintOnSave: false // 关闭 eslint 检查
};
