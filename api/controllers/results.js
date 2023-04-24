import { db } from '../connect.js';

export const insertValue = (req, res) => {
    const q = "INSERT INTO results (`twod`,`set`,`value`,`open_time`) VALUE (?)";
    const data = [
        req.body.twod,
        req.body.set,
        req.body.value,
        req.body.open_time
    ]
    db.query(q,[data],(err, data) => {
        if(err) return res.status(404).json(err);
        res.status(200).json("Live data is inserting.");
    });
}