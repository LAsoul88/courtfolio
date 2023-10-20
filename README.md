# courtfolio

I was advised by a more experienced Engineer to start writing about my challenges and how I go about solving them. This will be a dev diary of sorts!

10/13/23
At this point I have already built out basic structure for the various pages in my portfolio (home, about, projects, contact). 

I'm currently working on my contact form. Last session, I was able to set and update my form state for name, email, and message. Each input had an anonymous function that would update it's respective property in the form state.

I have just refactored this approach into a function that can take any of the change in value and update the corresponding input. The resulting code is much easier to read.

Now to style the contact form. To begin, I'm going to aim for something simple like this: (https://sharethis.com/wp-content/uploads/2021/03/Compass.png). I may opt for something sleeker in the future, but first I want to get all elements organized.

10/16/23
Attempting to line up the Message and Name fields on the contact form. This will take more research and I might utilize a css framework to accomplish this task.

Started working on setting up the resume button in the nav. I want the button to download my resume when clicked. While my initial solution of setting an href and download prop on an <a> element, it returns a message of no file available when clicked. I'm thinking this is an issue with the path being accessed when attempting to download.