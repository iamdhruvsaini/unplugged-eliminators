const express=require('express');
const app=express();
const cors=require('cors');
const passport = require('passport');
const session = require('express-session');
const authRoutes=require('./routes/auth');
const projectRoutes=require('./routes/projects');
const userRoutes=require('./routes/user');

const mongoose=require('mongoose');
const seedJs=require('./seed');
mongoose.connect('mongodb://127.0.0.1:27017/hack');
// seedJs();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
const GOOGLE_CLIENT_ID = "932573291552-11cs6icocjsd009svu3u396js4v284nh.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
      }
    )
  );
  passport.serializeUser((user, done) => {
    console.log(user)
    done(null, user);
    
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
app.use(authRoutes);
app.use(projectRoutes);
app.use(userRoutes);
app.listen(8000);
