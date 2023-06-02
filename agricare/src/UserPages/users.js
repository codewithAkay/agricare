const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const db = require("./db");

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Please enter your full name").trim().notEmpty(),
    check("email", "Please enter a valid email address")
      .trim()
      .isEmail()
      .normalizeEmail(),
    check("password", "Password must be at least 6 characters long")
      .trim()
      .isLength({ min: 6 }),
    check("accountType", "Please select an account type").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, accountType } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    db.query(
      "INSERT INTO farmer (name, email, password, accountType) VALUES (?, ?, ?, ?)",
      [name, email, hash, accountType],
      (error, results, fields) => {
        if (error) {
          if (error.code === "ER_DUP_ENTRY") {
            return res
              .status(400)
              .json({ errors: [{ msg: "Email already in use" }] });
          }
          console.log(error);
          return res.status(500).json({ errors: [{ msg: "Server error" }] });
        }

        return res.status(200).json({ msg: "User registered successfully" });
      }
    );
  }
);

module.exports = router;
