# A platform for students to explore, buy and sell used products within the campus.

The purpose of this project is to build connectivity within the campus where students can buy or sell used products from peers instead of relying on a third party producer/consumer.

- By building an internal marketplace, students can save money and utilize the old products.
- It also enhances the connectivity in the student community.
- It is safer and more trustworthy for students to buy/sell from peers, than from outsiders.

#### Tools: ReactJS, NodeJS, MongoDB, JWT Web tokens, Mongoose

## How to run the app on your local machine

- Clone the repository.
- Install NodeJS and mongoDB in your machine.
- Install the node modules inside the client and the server folder
- Create .env file inside your client folder that will contain the base url of the application (basically "REACT_APP_BASEURL=http://localhost:5000" this link)
- Now, create a new .env file inside your server folder, whose structure will be like:

    - ATLAS_KEY=mongodb://localhost:27017/buynbye
    - PORT=5000
    - BASE_URL=http://localhost:3000/
    - SALT=10
    - JWTPRIVATEKEY=.......(Your need to create one)
    - JWTREFRESHPRIVATEKEY=.......(Your need to create one)
    - EMAIL_HOST=smtp.gmail.com
    - EMAIL_PORT=465
    - EMAIL_SECURE=true
    - USER=user@gmail.com     // Your gmail through which the verification email will be sent
    - PASS=google app password     // Your google app password for gmail(create one if you don't have, use web to see how to create)

- Now, start mongoDB locally in your machine.
- Start the server with the "npm start" command.
- Run the client(front-end) with the "npm start" command.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Registration Process
- Make sure to use your kgpian email id for signup process
- Make sure your password is of atleast 8 length

