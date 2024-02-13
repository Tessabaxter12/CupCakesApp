const mongoose = require('mongoose')
const Cupcake = require('./cupcake')
const db = require('../../config/db')

const startCupcakes = [
    { name: 'Vanilla', quanity: 12, purchase: true},
    { name: 'Chocolate Chip', quanity: 10, purchase: true},
    { name: 'Birthday Cake', quanity: 8, purchase: true},
    { name: 'Pink Champage', quanity: 6, purchase: true}
]

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => {
        Cupcake.deleteMany({ owner: null })
            .then(deletedCupcakes => {
                console.log('deleted cupcakes in seed script: ', deletedCupcakes)

                Cupcake.create(startCupcakes)
                    .then(newCupcakes => {
                        console.log('new cupcakes added to db: \n', newCupcakes)
                        // VERY IMPORTANT
                        mongoose.connection.close() 
                    })
                    .catch(error => {
                        console.log('an error has occurred: \n', error)  
                        // VERY IMPORTANT
                        mongoose.connection.close() 
                    })
            })
            .catch(error => {
                console.log('an error has occurred: \n', error)

                // VERY IMPORTANT
                mongoose.connection.close() 
            })
    })
    .catch(error => {
        console.log('an error has occurred: \n', error)

        // VERY IMPORTANT
        mongoose.connection.close() 
    })