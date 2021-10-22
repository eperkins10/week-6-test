import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can place a piece', async () => {

    let placePiece = await(await driver).findElement(By.xpath('//*[@id="cell-0"]'))
    await placePiece.click()
    await driver.sleep(5000)
    
})

test('I can place another piece', async () => {

    let anotherPiece = await(await driver).findElement(By.xpath('//*[@id="cell-3"]'))
    await anotherPiece.click()
    await driver.sleep(5000)
})

test('I can win da game', async () => {

    let finalMove = await(await driver).findElement(By.xpath('//*[@id="cell-6"]'))
    await finalMove.click()
    await driver.sleep(5000)
})

test('I can refresh the game', async () => {
    
    driver.get("http://127.0.0.1:5500/tictacjs.html")
    driver.navigate().refresh()
    await driver.sleep(5000)
})
