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

10/20/23
Finally got the pdf download working. I was missing two things that prevented proper functioning:
1. Webpack configuration for reading pdfs. A simple add of 'pdf' to the regex for the 'file-loader' test.
2. A module declaration for '*.pdf' in a separate typing file as well as a "typeRoots" entry in the tsconfig.json file like this:
{
  "compilerOptions": {
    "typeRoots": ["src/types"],
  }
}

10/25/23
Today I followed a tutorial on how to create a typewriter effect for text on my homepage (https://blog.logrocket.com/3-ways-implement-typing-animation-react/#:~:text=One%20of%20the%20ways%20to,create%20a%20component%20called%20Typewriter.).

So far, it is operating as expected. Now, I am going to work on some logic to rotate which text displays. For instance, the first thing typed might say "Full Stack Developer," then it will erase and type out "Front End Engineer", etc.

My thought is to create an array of text messages and have the Home component cycle them every 10 seconds or so. That length of time may be reduced depending on how this function actually plays out.

2/1/24
Took some time away from the portfolio to work on other projects in more of a team setting. Coming back to continue making progress and honing my design abilities. 

Today, I fixed the spacing between components on the home page. I was having trouble with the text spacing itself away from other text in strange ways. Also, my social media links were moving position when the typewriter would erase text.

Was able to simply the approach to all homepage text and set a min-height for the entire section to prevent the social media links from moving.