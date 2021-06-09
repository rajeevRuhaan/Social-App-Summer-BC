const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../../middlewares/auth');
const User = require('../../models/User');
const { uploadAvatar } = require('../../middlewares/uploadPhotos');
const Post = require('../../models/Post');

const router = express.Router();

//@route    GET api/auth
//@desc     Get user authentication route
//@access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }
});

//@route    GET api/auth
//@desc     update user account
//@access   Public
router.put('/', auth, uploadAvatar, async (req, res) => {
  try {
    if (req.body.password) {
      return res
        .status(500)
        .json({ errors: [{ msg: 'Not Allowed To Change Password' }] });
    }

    if (req.file) {
      req.body.avatar = req.file.filename;
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    //Update user posts
    let updates = {
      $set: {
        name: user.name,
        avatar: user.avatar,
      },
    };
    let options = { multi: true, upsert: true };
    const posts = await Post.updateMany(
      { user: req.user.id },
      updates,
      options
    );

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }
});

//@route    POST api/auth
//@desc     Login user route
//@access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //1)) See if user exists
      let user = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2,
      });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //check matching password
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //4)) return jsonwebtoken
      const payload = {
        user: { id: user.id },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
