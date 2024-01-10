const express = require('express');
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

router.get('/booking', (req, res) => {
    res.render('booking');
});

exports.search = async (req, res) => {
    try {
        const { airportdepart, airportArrival, date, firstName, familyName, age, nationality, numPass,
            firstName2, familyName2, age2, nationality2, numPass2,
            fisrtName3, familyName3, age3, nationality3, numPass3,
            firstName4, familyName4, age4, nationality4, numPass4
        } = req.body;

        if (!airportdepart || !airportArrival || !date) {
            return res.status(400).render('search', {
                msg: 'Please enter airportdepart, airportArrival, and date',
                msg_type: 'error'
            });
        }

        db.query('SELECT * FROM flights WHERE airportdepart=? AND airportArrival=? AND date=?', [airportdepart, airportArrival, date], async (error, flights) => {
            if (error) {
                console.log(error);
                return res.status(500).render('search', {
                    msg: 'Internal server error',
                    msg_type: 'error'
                });
            }

            if (flights.length <= 0) {
                return res.status(401).render('search', {
                    msg: 'No flights found',
                    msg_type: 'error'
                });
            } else {
                const seatTable = flights[0].seatTable; 
                db.query('SELECT seat, state FROM seatTable', [seatTable], async (error, seatsResult) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).render('search', {
                            msg: 'Internal server error',
                            msg_type: 'error'
                        });
                    }

                    if (seatsResult.length <= 0) {
                        return res.status(401).render('search', {
                            msg: 'No seats found for the specified flight',
                            msg_type: 'error'
                        });
                    } else {
                        console.log(seatsResult);
                        res.render('search', { flights, seats: seatsResult });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).render('search', {
            msg: 'Internal server error',
            msg_type: 'error'
        });
    }
};
exports.reserve = async (req, res) => {
    try {
        const { firstName, familyName, age, nationality, numPass } = req.body;

        if (!firstName || !familyName || !age || !nationality || !numPass) {
            return res.status(400).render('booking', {
                msg: 'Please enter all passenger details',
                msg_type: 'error'
            });
        }

        const { id_flight } = req.body;

        db.query('INSERT INTO passagers (firstName, familyName, age, nationality, numPass, id_flights) VALUES (?, ?, ?, ?, ?, ?)', [firstName, familyName, age, nationality, numPass, id_flight], (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).render('booking', {
                    msg: 'Internal server error while reserving',
                    msg_type: 'error'
                });
            }

            return res.render('search');
        });
    } catch (error) {
        console.log(error);
        res.status(500).render('booking', {
            msg: 'Internal server error',
            msg_type: 'error'
        });
    }
};

module.exports = router;
