const cds = require("@sap/cds");

module.exports = (srv => {
    srv.on("READ", "Products", async (req) => {
        console.log("Products read call is triggered...")
        const db = await cds.connect.to ('Northwind');
        let tx = db.tx();
        try {
            const aProductData = await tx.run(req.query);
            return aProductData;
        } catch (error) {
            console.log(error);
        }
    });
});