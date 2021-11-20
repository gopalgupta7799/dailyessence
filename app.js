const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors())

const itemSchema = mongoose.Schema({
    id: String,
    itemname: String,
    price: String,
    image: String
})


const getfruits = async (req, res) => {
    const Item = mongoose.model('fruitimages', itemSchema);
    console.log('get items')
    try {
        const item = await Item.find()

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

const createfruit = async (req, res) => {
    const Item = mongoose.model('fruitimages', itemSchema);
    console.log('createitem', req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {

    }
}


const deletefruit = async (req, res) => {
    const Item = mongoose.model('fruitimages', itemSchema);
    try {
        await Item.findByIdAndRemove({ _id: req.params._id }, (err, business) => {
            if (err) res.json(err);
            else res.status(201).json('Successfully removed');
        });
    } catch (error) { }
}
const getgrainsoils = async (req, res) => {
    const Item = mongoose.model('grainsoilimages', itemSchema);
    console.log('get items')
    try {
        const item = await Item.find()

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

const creategrainsoil = async (req, res) => {
    const Item = mongoose.model('grainsoilimages', itemSchema);
    console.log('createitem', req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {

    }
}
const deletegrainsoil = async (req, res) => {
    const Item = mongoose.model('grainsoilimages', itemSchema);
    try {
        await Item.findByIdAndRemove({ _id: req.params._id }, (err, business) => {
            if (err) res.json(err);
            else res.status(201).json('Successfully removed');
        });
    } catch (error) { }
}
const getmilkproducts = async (req, res) => {
    const Item = mongoose.model('milkproductimages', itemSchema);
    console.log('get items')
    try {
        const item = await Item.find()

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

const createmilkproduct = async (req, res) => {
    const Item = mongoose.model('milkproductimages', itemSchema);
    console.log('createitem', req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {

    }
}
const deletemilkproduct = async (req, res) => {
    const Item = mongoose.model('milkproductimages', itemSchema);
    try {
        await Item.findByIdAndRemove({ _id: req.params._id }, (err, business) => {
            if (err) res.json(err);
            else res.status(201).json('Successfully removed');
        });
    } catch (error) { }
}
const getvegetables = async (req, res) => {
    const Item = mongoose.model('vegetableimages', itemSchema);
    console.log('get items')
    try {
        const item = await Item.find()

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

const createvegetable = async (req, res) => {
    const Item = mongoose.model('vegetableimages', itemSchema);

    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {

    }
}
const deletevegetable = async (req, res) => {
    const Item = mongoose.model('vegetableimages', itemSchema);
    try {
        await Item.findByIdAndRemove({ _id: req.params._id }, (err, business) => {
            if (err) res.json(err);
            else res.status(201).json('Successfully removed');
        });
    } catch (error) { }
}

app.get('/getfruits', getfruits)
app.post('/addfruit', createfruit);
app.get('/deletefruit/:_id', deletefruit)
app.get('/getvegetables', getvegetables)
app.post('/addvegetable', createvegetable);
app.get('/deletevegetable/:_id', deletevegetable)
app.get('/getmilkproducts', getmilkproducts)
app.post('/addmilkproduct', createmilkproduct);
app.get('/deletemilkproduct/:_id', deletemilkproduct)
app.get('/getgrainsoils', getgrainsoils)
app.post('/addgrainsoil', creategrainsoil);
app.get('/deletegrainsoil/:_id', deletegrainsoil)



const mongodb = process.env.mongouri;
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, '/client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Hello')
    })
}
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then().catch(err => console.log(err));
app.listen(PORT, console.log(`Server running on ${PORT}`))

