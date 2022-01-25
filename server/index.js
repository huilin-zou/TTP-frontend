const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(express.json());
app.use(cors());
app.use("/auth", require("./routes/jwtAuth"));

//Create a Subscription

app.post("/subscription" , async(req,res) => {
    try {
        const { sub_name, plan, price, duedate, user_id_fk } = req.body;
        const newSubscription = await pool.query(
            "INSERT INTO subscription_details (sub_name, plan, price, duedate, user_id_fk) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [sub_name, plan, price, duedate, user_id_fk]
        );

        res.json(newSubscription.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

//Get all Subscriptions

app.get("/subscription" , async (req, res) => {
    try {
        const allSubscription = await pool.query("SELECT * FROM subscription_details");
        res.json(allSubscription.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//Get a Subscription

app.get("/subscription/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const subscription = await pool.query("SELECT * FROM subscription_details WHERE sub_id = $1", [id]);
        
        res.json(subscription.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//Update a Subscription 

app.put("/subscription/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { sub_name, plan, price, duedate } = req.body;
        const updateSubscription = await pool.query(
            "UPDATE subscription_details SET sub_name = $1, plan = $2, price = $3, duedate = $4 WHERE sub_id = $5",
            [sub_name, plan, price, duedate, id]
        );

        res.json("Subscription was updated!");
    } catch (err) {
        console.error(err.message)
    }
});

//Delete a Subscription

app.delete("/subscription/:id", async (req, res) => {
    try {
        const { id } = req .params;
        const deleteSubscription = await pool.query("DELETE FROM subscription_details WHERE sub_id = $1",[id]);
        
        res.json("Subscription was deleted");
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});