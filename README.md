# Guided Project 3 - Meme Generator

This project is a guided project for creating a meme generator. The data for the memes was pulled from the [ImgFlip API](https://imgflip.com/api).

<p align="center">
    <img src="./demo.gif" style="max-width: 500px;"/>
    <small style="text-align: left;">Please note, the cursor works normally, it is not showing up correctly in the gif because of the recording software not capturing it correctly.</small>
</p>

## What I Learned About

- Event Listners
- State
- Conditional Rendering
- Forms
- Side Effects

## Some things to note

- I am not explicitly using the ImgFlip API. I ran the API in the browser, and pulled a list of the top 100 most popular memes, and I just put that data into `src/memeData.js`. I didn't want to deal with actually calling an API in this project, so I figured it would be easier to pull it this way.
- All of the memes being pulled this way are not in the right format for this generator. For this project, the goal was to make a meme generator that can make a meme where it's an image, and text on the top and bottom. See example below. This generator cannot add text to any of the other formats of memes.

<p align="center">
    <img src="https://i.imgflip.com/7thvhb.jpg" title="made at imgflip.com" style="width: 300px"/>
</p>

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
