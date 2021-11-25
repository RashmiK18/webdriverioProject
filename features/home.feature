Feature: The internet website HomePage

 Scenario Outline: As a user i can open the internet website
 
 Given  I open the browser and load the <HomeUrl>
 Then  I should see the header with the <HeaderText>

 Examples: 
     |HomeUrl                             |HeaderText
     |https://the-internet.herokuapp.com/ |welcome to the-internet

