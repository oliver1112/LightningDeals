

# OnlineOrder
This is an online food order system. The backend is based on Spring and Hibernate. The frontend is based on Javascript and React. 

## Website Demo 
The complete code is running on AWS EC2. You can visit this website: http://54.82.200.161/ 

Sometimes the free tier on AWS EC2 is not stable. Watch this gif demo instead:

![demo](https://github.com/oliver1112/OnlineOrder/blob/main/assets/onlineorder-demo.gif)
### Getting Started
1. Signup and login your account.
2. Add the restaurant and food you like into the cart.
3. Checkout the order.


## Backend
The backend complete code can be seen in the [backend folder](https://github.com/oliver1112/OnlineOrder/tree/main/backend).

### Spring framework
Spring framework is an open-source development framework for Enterprise Java. The Spring Web MVC framework  structrue in this project is as follows:


![structure](https://github.com/oliver1112/OnlineOrder/blob/main/assets/project%20structure.png)


This Spring framework has two advandage:
- **Modularity**: Dependency Injection helps in reducing dependency and increasing the modularity within the code.
- **End to End Development**:  Spring supports all aspects of application development, Web aspects, Business aspects, Persistence aspects, etc, makes it easiler to develop a complete application.


### Database ERD
The Entity Relationship Diagram (ERD) of this project is as follows:
![ERD](https://github.com/oliver1112/OnlineOrder/blob/main/assets/erd.png)

I use Hibernate to store and manage restaurants food and order items data. Hibernate is an object-relational mapping tool for the Java. It provides a framework for mapping an object-oriented domain model to a relational database.

The Hibernate APIs such as Session and Transaction make it easier to connect, get and add data into the database.


### Spring Security
To process user access function, I implement a session-based authentication with Spring Security.
1. A user enters their login credentials (username + password).
2. The server verifies the credentials are correct and creates a session which is then stored in a database.
3. Client-side stores the session ID returned from server
4. On subsequent requests, the session ID is verified against the database and if valid the request is processed.
5. Once a user logs out of the app, the session is destroyed on the server side.


## Frontend
visit [my website](http://54.82.200.161/) or watch website demo for specific website frontend implementation.


The complete code of frontend can be seen in the [frontend folder](https://github.com/oliver1112/OnlineOrder/tree/main/frontend).
I use React and JavaScript in this project. Some components are imported from Ant Design for efficient design. There are 4 main components under the App.js: SignupForm, LoginForm, FoodList, MyCart.
- SignupForm: displays signup form and sent signup response to backend
- LoginForm: display login form and checks user identity and get user data from backend database.
- FoodList: displays restaurant food data in the card list. Users can add food they like into their cart.
- MyCart: displays order items and total price in the cart. User can checkout and empty their cart.

## Ideas for Future Work
- Add restaurant owner function to helper owner manage restaurant order or modify menu.
- Add real checkout function with paypal API
- Improve UI to attract more users.
- Improve AWS tier to get HTTP response quickly.
