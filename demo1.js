// puppeteer 截图demo
const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({
    headless: false  // 配置是否使用headless模式, 这两种模式分别讲解下并讲一下区别
  }); //生成browser实例
  const page = await browser.newPage();     //解析一个新的页面。页面是在默认浏览器上下文创建的
  await page.goto("https://www.baidu.com/");  //跳转到 https://baidu.com/
  await page.screenshot({                   //生成图片
    path: './screenshot/example.png'
  });
  await browser.close();
  console.log('截图成功')
}


main();
