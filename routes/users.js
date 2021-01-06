const express = require('express');
const router = express.Router();


const { check, validationResult } = require('express-validator');
// const normalize = require('normalize-url');


const User = require('../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
    '/',
    [
        check('firstName', 'Name is required').not().isEmpty(),
        check('lastName', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),

    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName, email, phone, dateOfBirth, investmentType, amount } = req.body;
        console.log(firstName)
        try {
            let user = await User.findOne({ email });

            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'User already exists' }] });
            }


            //const avatar = "123"
            user = new User({
                firstName,
                lastName,
                email,
                phone,
                dateOfBirth,
                investmentType,
                amount

            });





            await user.save();
            res.send("Added Successful")


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)

    } catch (err) {
        console.error(err.message)
        res.status(500).send(err.message)
    }
})

module.exports = router;