## Work Day Scheduler

Hi! My name is Jason Smith and this is my work day scheduler app!

# ![Site Screen Shot](/assets/images/screenshot.png)

## About the project
Sometimes we all need a little help organizing our work day so I made a scheduler app! This app allows the user to enter tasks into each hour of the work day in order to keep them on track. The app highlights the hours that have passed in grey, the current hour in red and future hours in green. The app will also auto refresh at the top of each hour so the highlighted hour will be current without the user having to refresh the page.

The project is built using a mix of HTML, CSS, Jquery and Moment. Jquery and Moment were a bit intimidating at first but once I familiarized myself with their documentation the puzzle pieces started to fit together. Jquery almost felt like cheating compared to standard JavaScript. Instead of writing out lines of querySelectors to get the DOM elements I wanted all I needed was a $('element') to grab the element and manipulate it. Definitely a plus to Jquery.

But even with the added help of the Jquery and Moment libraries I still hit a few snags. I decided to start my workflow by creating the page elements in HTML instead of using DOM manipulation which was not a problem until I tried to get their values from localStorage. I tried a for loop to iterate through them but because I had assigned them unique IDs and did not index them there was not a simple way to iterate over them so I ended up writing a getItem line for each of the time blocks to get their localStorage values. Not the most efficient but it works. 

Another issue I spent a good amount of time on was the auto refresh at the top of every hour. I have experimented with having a page refresh every 30 minutes but that would only refresh 30 minutes from when the page was loaded, not exactly what I needed for this project. I eventually found a solution on StackOverflow using the Date() object which I had never used before so I had to dig into how the solution worked. Which basically involved comparing the difference between a future time that had been rounded down to the hour and the current time. This difference was then set as the interval for a timeout function that would reload the page. A nifty function to keep in mind for future projects.

***

The work day scheduler has been published at the following URL:  
[Work-Day-Scheduler](https://jasonpsmith180.github.io/work-day-scheduler/)

## Credits
[Jason Smith](https://github.com/Jasonpsmith180)

## Shoutouts
University of Utah  
Trilogy Education Services  
For teaching me web development!  
And that helpful user from StackOverflow!
