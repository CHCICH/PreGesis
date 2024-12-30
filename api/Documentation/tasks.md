# api desgin Login part

## 3 roles

1) Administrator
2) Math Mod
3) User 

### 1) Admin:
this role has access to a get post patch delete and more requests and can see the activity of any user on the platform. This role can also access the Math Model and other incoming models and will have access to everything. Moreover, the Admin role have access to a panel where is will be able to modify and edit informations on the platform

## 2) Math Mod
this role has acces to a get post patch and delete request the math branch of the platform this role manages and tests the math problems and assures that everything is working this role also have the option unlike the admin role to see the POV of a User and understand what is happening in the user side

## 3) User
the User is the User 😂. main page and can access the generator as well as the community posts 

## 4) Moderator

# API structure

/ => redirects automatically to the login and signup page once the user is successfully logged in a key is sent and then the front end calls a get request with this special key to access the 
content reserved for the users
additionnally if the user have the admin role or the math mod role the user will have access to the admin/ math mod menu a page restricted to a user 
/login
takes in the body of the request the credentials and sends the data to the api which will hash the data and compare it with the data in the DB of course there will be error
handling but the error handling should be multithreaded in other words it should accomodate for all errors present not an error after the other

/signp is the same but it should ask for extra informations like the users Name 

/generator will give the access to the previous questions generator 
/generator/:topic will give access to the generator of the topic's questions the model can be tuned and filter certain questions depending on the diffuclity and the 
topic needed in other words the model should be perfectly accomodated

/generator/:topic/filter takes in the filter option inside the req.body


