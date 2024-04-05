if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Importing libraries
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt"); // Importing bcrypt package
const passport = require("passport");
const initializePassport = require("./passport-config.js");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

initializePassport(
    passport,
    (email) => users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id)
);

const users = [];

app.use(express.urlencoded({ extended: false}));
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false, // we won't resave the session variable if nothing is changed
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Enable CORS
app.use(cors());
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('views'))


//I removed checkNotAuthenticated
app.get("/", (req, res) => {
    return res.render("index.ejs");
});

// Configuring the login post functionality - I removed checkNotAuthenticated
app.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
    failureFlash: true,
}));

// Configuring the register post functionality - I removed checkNotAuthenticated,
app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        console.log(users); // Display newly registered users in the console
        res.redirect("/login");
    } catch (e) {
        console.log(e);
        res.redirect("/register");
    }
});

// Routes fist and last is checkNotAuthenticated, 

app.get("/", (req, res) => {
    return res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs", { name: req.user.name });
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/logout", (req, res) => {
    req.logout(); // Passport.js method to log out the user
    res.redirect("/login");
});

// Serve static files from directories
app.use(express.static(__dirname + "/public"));


//Prevent going back to login page
// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect("/login");
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect("/login");
//     }
//     next();
// }

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});