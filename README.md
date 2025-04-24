<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://www.jaggaer.com/" rel="noopener" target="_blank"><img width="350" src="./logo.svg" alt="Jaggaer logo"></a>
</p>

<h2 align="center">Frontend Developer Test</h1>

<div align="center">

In this repository you will find example screenshots of one of our UI designs. To see your style of working and how you solve real-live problems, we have created some requirements for you to solve around this UI design. This will allow us to better evaluate your skills in relation to our requirements, and should also give you an insight on what we are working on.
  

```json
   Please follow the instructions as closely as possible and submit your result within four days
```
</div>

<br/>

## What needs to be done (mandatory)

* Create a functional page using React and [MUI (ex. Material-UI)](https://mui.com/) based on the attached UI designs (see: [screen1-full.png](./screen1-full.png))
* Use as much of the standard MUI components as possible.
* Customize MUI to fulfill the requirements of the design accordingly.
* Create clean and lean code.
* Use the provided JSON [data.json](./resources/data/data.json) file for all the data to be rendered on the page.  
* Use the provided [SVG icons](./resources/icons).
* Deploy code on [Heroku](https://www.heroku.com/).

## Optional / Nice to have / Bells and Whistles ##

* Implement the header bar including the following logic (left title and right menu icons):
  - By default only a grey bottom border is shown ([screen1-full.png](./resources/screens/screen1-full.png)).
  - If the content is higher than the current screen size and a vertical scrollbar is shown, the header has to stay fixed and the content has to scroll under it.
  - Once the user starts scrolling, an additional drop shadow is shown for the header (see: [screen2a-part1.png](./resources/screens/screen2a-part1.png) and [screen2b-part2.png](./resources/screens/screen2b-part2.png)).

* Implement the "add to cart" button including the following logic: 
  - By default the button is shown in the item details next to the image ([screen2a-part1.png](./resources/screens/screen2a-part1.png)).
  - If this section is not visible on the screen anymore, the "add to cart" button has to be displayed in the header bar ([screen2b-part2.png](./resources/screens/screen2b-part2.png)).
  
* Implement a shopping cart animation, after an item is added to the cart:
  - If the user clicks the "add to cart" button the number of items in the shopping cart has to change (in the header).
  - Add an animation for the shopping cart icon and/or the number, to visually indicate the change.
  - Be creative and make everything look as nice as possible.
  
* Do not use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) or similar: 
  - Configure your own [Webpack](https://webpack.js.org/) or similar module bundler.
  - [Babel](https://babeljs.io/) plugins are your friends, try to go out of comfort of "stage-3 plugins" 
  - Custom [ESLint](https://eslint.org/) configurations with code styles are always welcome, feel free to show us your code style.
  
* Responsive

## Expected Outcome

* An HTML page that comes as close as possible to the attached UI designs and works in all major browsers. 

## Questions?

If you have any questions do not hesitate to ask and send an email with subject "Frontend Task Question" to [ststojanovic@jaggaer.com](ststojanovic@jaggaer.com) 

## How to Submit your Result

1. Put your solution in an git repository like [GitHub](https://github.com/) or [BitBucket](https://bitbucket.org/product)
2. Send us an e-mail:
  * **Subject:** Frontend Test Result *firstname lastname*
  * **To:** the person who sent you the original mail
  * **Body:**
    * The link to git repository
    * Any additional information you like to pass to us (e.g. why you solved things in a certain way, etc.)
