import { getPriority } from "os";

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { getRepository } = require('typeorm')

const User = require('../entity/User')

// serializeUser is used to provide some identifying token that can be saved
// in the users session.  We traditionally use the 'ID' for this.
passport.serializeUser((user, done) => {
  console.log(`Serializing user...`, user)
  done(null, user.id)
})

// The counterpart of 'serializeUser'.  Given only a user's ID, we must return
// the user object.  This object is placed on 'req.user'.
passport.deserializeUser(async (id, done) => {
  console.log(`Derserializing user...`, id)
  const user = await getRepository(User).findOneById(id)

  done(null, user)
})

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await getRepository(User).find({ where: { email } })
    console.log('Authenticating user...', user)
    
  } catch (err) {
    console.log('Error: ', err)
    return done(err)
  }

}))