
require('dotenv').config();


//-------------------------Pure logic for handling requests...-----------------------//


//------------------------------Get pokemon by Type-----------------------------//
const getPokemonByType = (req, res, next) => {
    res.send(process.env.EXAMPLE);
};//end of getPokemonByType




//this is where you would export the logic getPokemonById, getPokemonByType, etc
module.exports = {
    getPokemonByType
};