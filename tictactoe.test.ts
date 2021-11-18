import { Builder, Capabilities, By } from "selenium-webdriver"
const {checkBox} = require('./expect.ts')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/tictacjs.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

});
it('I make a move', async () => {
    await checkBox(driver)
    // let makeMove = await(await driver).findElement(By.xpath('//*[@id="cell-0"]'))
    // await makeMove.click()
    await driver.sleep(2000)
})
it('I make a second move', async () => {

    let makeMove = await(await driver).findElement(By.xpath('//*[@id="cell-4"]'))
    await makeMove.click()
    await driver.sleep(2000)
})
it('I make win a game', async () => {

    let makeMove = await(await driver).findElement(By.xpath('//*[@id="cell-8"]'))
    await makeMove.click()
    await driver.sleep(2000)
})
it('I can restart a game', async () => {

    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh();
    await driver.sleep(2000)
    
});