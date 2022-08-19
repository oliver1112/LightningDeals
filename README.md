

# OnlineOrder
This is an online food order system. The backend is based on Spring and Hibernate. The frontend is based on Javascript and React. 

## Website Demo 
The complete project is running on AWS EC2. You can visit this website: http://54.82.200.161/ 

Sometimes the free tier on AWS EC2 is not stable. Watch this gif demo instead:

![demo](https://github.com/oliver1112/OnlineOrder/blob/main/assets/onlineorder-demo.gif)
### Getting Started
1. Signup and login your account.
2. Add the restaurant and food you like into the cart.
3. Checkout the order.


## Backend
The backend complete code can be seen in the [backend folder](https://github.com/oliver1112/OnlineOrder/tree/main/backend).

### Spring framework
Spring framework is an open-source development framework for Enterprise Java. The Spring Web MVC framework structure in this project is as follows:

<img src="https://github.com/oliver1112/OnlineOrder/blob/main/assets/project%20structure.png" alt="structure" width="550"/>


This Spring framework has two advantage:
- **Modularity**: Dependency Injection helps in reducing dependency and increasing the modularity within the code.
- **End to End Development**:  Spring supports all aspects of application development, Web aspects, Business aspects, Persistence aspects, etc, making it easier to develop a complete application.


### Database ERD
The Entity Relationship Diagram (ERD) of this project is as follows:
<img src="https://github.com/oliver1112/OnlineOrder/blob/main/assets/erd.png" alt="ERD" width="700"/>

I use Hibernate to store and manage restaurant food and order items data. Hibernate is an object-relational mapping tool for Java. It provides a framework for mapping an object-oriented domain model to a relational database.

The Hibernate APIs such as Session and Transaction make it easier to connect, get and add data into the database.


### Spring Security
To process the user access function, I implement a session-based authentication with Spring Security.
1. A user enters their login credentials (username + password).
2. The server verifies the credentials are correct and creates a session which is then stored in a database.
3. Client-side stores the session ID returned from server
4. On subsequent requests, the session ID is verified against the database and if valid the request is processed.
5. Once a user logs out of the app, the session is destroyed on the server side.


## Frontend
Visit [my website](http://54.82.200.161/) or watch the website demo for specific website frontend implementation.


The complete code of the frontend can be seen in the [frontend folder](https://github.com/oliver1112/OnlineOrder/tree/main/frontend).
I use React and JavaScript in this project. Some components are imported from Ant Design for efficient design. There are 4 main components under the App.js: SignupForm, LoginForm, FoodList, MyCart.
- SignupForm: displays signup form and sends signup response to backend
- LoginForm: displays login form and checks user identity and gets user data from backend database.
- FoodList: displays restaurant food data in the card list. Users can add food they like into their cart.
- MyCart: displays order items and total price in the cart. Users can checkout and empty their cart.

## Ideas for Future Work
- Add restaurant owner function to helper owner manage restaurant order or modify menu.
- Add real checkout function with paypal API
- Improve UI to attract more users.
