# Inventory-Management-Frontend

Purpose

• A successful login system to authenticate registered users. 
• A successful registration system for unregistered users. 
• A product inventory system which allows the users to add product details, and the data is displayed in a list.

UI details

Page1:
•	This Page has username and password validation of the user for logging in and a submit button. 
•	This page has a register button for the users who don’t have an account. By clicking on register it will open page-2. 
•	Once submit button is clicked it will call backend api /validateUser and display success/error message accordingly. When success, it will redirect to page 3.

Page2: 
•	This is a registration page which has text boxes with basic validations for the user to fill and register. 
•	Once submit is being clicked, it will call backend api /submitUser. 
•	It has a login button for the users who are registered.

Page3:
•	This Page calls /getProducts backend api to display the products in list view.
•	On the top right corner addProduct button is available.
•	A search bar is also located.
•	Upon successful submission from page1, page3 also gets loaded.

Page4:
•	This page is loaded when addProducts is being clicked. This page has text boxes for all product details as per above schema with all fields as mandatory validation. Once details filled and click on addProducts button it calls /saveProductDetails backend api.
