// cli.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('=== 命令行工具 ===\n');

rl.question('请输入您的姓名：', (name) => {
    console.log(`\n你好，${name}！欢迎使用命令行工具。`);
    rl.close();
});