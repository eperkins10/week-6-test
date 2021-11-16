import {By, WebDriver} from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome'
/**
* @param {WebDriver} driver - The Driver being used in your test file
* @param {string} searchTerm - The string that you want to search on Google
*/
export async function  checkBox (driver: WebDriver) {
    await driver.findElement(By.xpath('//*[@id="cell-0"]')).click()

    let restultsText = await driver.findElement(By.id('//*[@id="cell-0"]')).getText()
    expect(restultsText.toLowerCase()).toContain('x')
}