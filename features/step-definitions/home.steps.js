import { Given, Then } from '@cucumber/cucumber'

Given(/^I open the browser and load the (.+)$/, async function (HomeUrl) {
  await browser.url(HomeUrl)
  await browser.maximizeWindow()

});

Then(/^I should see the header with the (.+)$/, async function (HeaderText) {

  const header = await $('h1.heading')
  expect(await header.getText()).toHaveText(HeaderText)

});

