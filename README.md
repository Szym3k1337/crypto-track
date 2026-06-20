## Crypto track
Crypto track is a modern web application that allows you to track actual crypto prices with such technologies and tools:
---
## Technologies

* ** React ** - Js library to build  user interface
* ** Recharts ** - React library for building charts
* ** JavaScript ** - main language (would be Ts in the future)
* ** Tailwindcss ** - CSS framework for styling application
* ** Vite ** - a tool that allows you to create application
* ** Git & GitHub ** - version control system
* 
---

## Features
 * Monitoring the most popular crypto prices
 * Full responsive design
 * Tracking crypto prices with charts

---

## How to run this application

To run Crypto track on your PC do this steps :

### 1. Clone the repository
```bash
git clone [https://github.com/Szym3k1337/crypto-track.git](https://github.com/Szym3k1337/crypto-track.git)
```
### 2 Go to project folder
```bash
cd crypto-track
```
### 3 Install required dependencies
```bash
1 npm install
2 npm install react-treeview react-router-dom
3 npm install recharts
3 For Tailwindcss :
 * npm install tailwindcss @tailwindcss/vite
 * Go to `vite.config.js`, import `tailwindcss`, and add it to the `plugins` array.
 * Import `tailwindcss` at the very top of your `main.css` file.
 ```
### 4 run application
```bash
npm run dev
```
---
## Roadmap
* Adding TypeScript for more control
* Adding a search option

## The free API's problem
Since my app uses a free API, refreshing the app too often will result in a 429 data retrieval error.
This means there is no problem with either the app or your internet connection, but these types of services generate an error if data is retrieved from them too frequently.

