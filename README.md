# Blogger
Application features:
- Displays blog posts queried from https://jsonplaceholder.typicode.com/posts
- Search for blog posts by keyword. Posts will be displayed if contains __exact match__ of entered key word
- "Prev" and "Next" buttons to navigate between pages of posts available
- Buttons are enabled/disabled depending on whether posts are avialable before/after current page

### To install
Clone this repo with 
```
git clone https://github.com/bcfchen/blogpost
```
cd into the __blogpost/client__ folder and install npm packages by:
```
npm install
```

### To run
Check that you're in the __weatherman/client__ folder and run the project by:
```
npm start
```
The page should automatically open up in your browser at __localhost:3000__

### To use
Navigate to localhost:3000 (if not there already) to view all available posts
![alt text](https://s8.postimg.cc/dovz9n54l/Screen_Shot_2018-07-03_at_2.03.57_AM.png "Nighttime Screenshot")


Start typing in the textbox on the upper right to search for posts by keywords


![alt text](https://s8.postimg.cc/5w5bhnjpx/Screen_Shot_2018-07-03_at_2.04.31_AM.png "Daytime Screenshot")

Click "Prev" or "Next" to navigate to previous/next pages

### Main libraries & services used
- __React/Redux__
- __Material-ui__ for components and typography
- __axios__ for xhr requests
