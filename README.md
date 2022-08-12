

# OnlineOrder
This is an online food order system. The backend is based on Spring and Hibernate. The frontend is based on Javascript and React. 

## Website Demo
The complete code is running on AWS EC2. You can visit this website: http://54.82.200.161/ 

Sometimes the free tier on AWS EC2 is not stable. Watch this gif demo instead:

![demo](https://github.com/oliver1112/OnlineOrder/blob/main/assets/onlineorder-demo.gif)



## Backend
### Spring framework
Spring framework is an open-source development framework for Enterprise Java. The Spring Web MVC framework  structrue in this project is as follows:


![structure](https://github.com/oliver1112/OnlineOrder/blob/main/assets/project%20structure.png)


This Spring framework has two advandage:
- **Modularity**: Dependency Injection helps in reducing dependency and increasing the modularity within the code.
- **End to End Development**:  Spring supports all aspects of application development, Web aspects, Business aspects, Persistence aspects, etc, makes it easiler to develop a complete application.


### Database ERD
Hibernate is an object-relational mapping tool for the Java. It provides a framework for mapping an object-oriented domain model to a relational database.
The Entity Relationship Diagram (ERD) of this project is as follows:
![ERD](https://github.com/oliver1112/OnlineOrder/blob/main/assets/erd.png)


I use Hibernate to store and manage restaurants food and order items data.

## Frontend
