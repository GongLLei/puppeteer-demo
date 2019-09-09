// 自动化表单提交 登陆demo
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
    headless: false  // 配置是否使用headless模式, 这两种模式分别讲解下并讲一下区别
  }); //生成browser实例
  const page = await browser.newPage();     //解析一个新的页面。页面是在默认浏览器上下文创建的
  await page.goto("https://github.com/login");
  await page.waitFor(1000)   //延迟1秒输入
  await page.type("#login_field", "xxx", {
    delay: 100
  }); //立即输入
  await page.type("#password", "xxx", {
    delay: 100
  }) //模拟用户输入
  await page.click("input[type=submit]"); //点击登录按钮

}


main();

