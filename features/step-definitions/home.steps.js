import {Given, Then} from '@cucumber/cucumber'
//const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^: I open the browser and load the (.+)$/, async function (HomeUrl) {
   await browser.url(HomeUrl)
  await  browser.maximizeWindow()
   
  });

Then(/^: I should see the hearder with the (.+)$/, async function (HeaderText) {
    
const header =await $('h1.heading')
expect(await header.getText()).toHaveText(HeaderText)

  });

