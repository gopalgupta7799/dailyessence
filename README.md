# dailyessence
MERN stack app

This app is built using React at frontend, node at backend and mongodb as the database.
This is a demo grocery app named DailyEssence which provides options to the customers to chhose their daily needs products and order them.

DailyEssence provides basic functionality of a shopping app that includes browsing products, logging in or signing up, adding items to cart, changing quantity in cart, etc.

All the data(Name, Price, Image, etc.) of products and items is stored in mongodb database using react-file-base64 library in react, so that it will be easy to manage images in our project. 
The react app sends api request to the backend and then the respective data is fetched from database and then respond is sent to react.

Authentication and authorisation is managed using Firebase. 
User need to login for some specific task like adding item to cart.
Other than customer user login, this web-application has admin access provided by developer only to add and remove products from various categories.
The app restricts admin page to admin only so that others cannot access it. 

##########################
# About folder structure #
##########################

Client folder is React frontend part.
app.js being entry point for the backend application
package.json file has dependencies and other information which are required for this project.
You need to create a file named ".env" with mongodb uri for database access

################
# In .env file #
################

mongouri="Your URI(Either localhost or Atlas)"
