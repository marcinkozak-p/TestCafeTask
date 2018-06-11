# Technical Task for AQA with JS
Welcome!
This project contains solution to a task of creating tests using TestCafe, following instructions listed below.

### Task instructions:
1.  success scenario:
    
    1.  go to [https://duckduckgo.com/](https://duckduckgo.com/)
        
    2.  check if logo and input are on the page
        
    3.  open 'Privacy. simplified' dropdown menu in upper right corner
        
    4.  select 'Start Using Bangs' option
        
    5.  check if new page URL contains '/bang'
        
    6.  enter 'StackOverflow' into Search input on this page
        
    7.  check if more than 1 result showed
        
    8.  check if result item with '!stackoverflow' text showed up
        
2.  failure scenario
    
    1.  go to [https://duckduckgo.com/](https://duckduckgo.com/)
        
    2.  check if logo and input are on the page
        
    3.  enter 'what is the ultimate question of life the universe and everything' into search input
        
    4.  take screenshot of the entire page with results of the search
        
    5.  expect any result item not to contain '42'
        
    6.  test assertion should fail the test
        

Required to pass the task:

-   tests must work and perform all specified actions
    
-   one test must end with success
    
-   one test must end with failure

In addition you can:

-   use the Page Object pattern
    
-   provide scripts in package.json to run tests in different browsers and modes (chrome, firefox, headless chrome, headless firefox)
    
-   provide short instruction in `README.md` file
    

If you really want to shine do some of these:

-   use static code analysis with set of rules you prefer
    
-   implement git hook to check your code before each push to remote repository
    
-   write some additional scenarios

## About solution:
To run test - assuming you have npm and TestCafe installed -  you can either use default TestCafe commands in command prompt, e.g.:

    testcafe chrome testTask.js -s .
Or use one of scripts  provided <b>package.json</b> file to use with <b>npm</b>, e.g.:

    npm run chrome
The above line will run tests on chrome. Other options are <i><b>firefox</b></i>, <i><b>firefoxH</b></i> and <i><b>chromeH</b></i> for firefox, headless firefox and headless chrome respectively.


> <b>testTask.js </b> is the entry point, other two files are page models


## Notes: 
- There seemed to be the problem with instruction 2.5 & 2.6 - expecting any result item not to contain '42' and assertion failing. I understood it the way that every single item in search results would have to contain '42' for this assertion to fail. However there were several results that had it not. In order to fail this assertion I decided to add checking for whitespace (every result had it) in order to fail it.
- While www.duckduckgo.com opening for the first time (it counts as first time every time tests were ran) a prompt window appears on the top of 'Privacy, simplified'. Additionaly, 'Privacy' button only appears when window has width of at least 1080px. I resolved both issues. 
