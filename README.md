# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different ##colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

During Developing and Designing this little application, after getting this challenge from frontendmentors, I started redesigning this application in Figma and completed this project in designing.
After designing, the very first challenge was how I should build this application, combo of Vanilla javascript, HTML, and CSS was the very first thought. But I am learning React(Javascript Library) to build UI, so I decided to build this with react.
During the development of this app, many challenges arose, first was how to not display just hard-coded data, instead data should be displayed dynamically. So I try to create a separate component for all related parts. I have not used the best industries' standard approaches to make it, a simple component-based approach was used.
During writing code, I spend most of my time understanding 'props', loops, and custom CSS styles in react. Finally, I was able to understand the concept of props in react and how to transfer data between child and parent nodes.

```js
{
  props.spending.map((spend) => (
    <ChartRow key={spend.id} day={spend.day} amount={spend.amount} />
  ));
}
```

### Useful resources

- [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - The official documentation of Reactjs really help to grasp some concepts.

## Author

- Website - [Naveed](https://naveedtechs.netlify.app/)
- Frontend Mentor - [@@Naveed89-tech](https://www.frontendmentor.io/profile/Naveed89-tech)
- Twitter - [@Naveed_Tech_T](https://twitter.com/Naveed_Tech_T)
