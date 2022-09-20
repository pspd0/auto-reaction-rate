const {Builder, By} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        await driver.get('https://simritest.com/reaction');
        await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div[2]/a/button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/form/section/div')).click();
        while(true) {
            let text = await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/form/section/div/div/h1')).getText();
            let i = 0;
            if(i > 5) {
                break;
            }
            if(text == "클릭") {
                await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/form/section/div/div/h1')).click();
                i++
            }
        }
    }catch(e) {
        await console.log(String(e))
    }
})();
