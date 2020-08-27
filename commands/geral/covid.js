exports.run = async (client, message) => {
    const covid = require('jhucsse.covid')
    covid.all().then(cobid =>{
        cobid(console.log)
    })
}
module.exports.config = {
    name: "covid19",
    aliases: ["covid-19"]
}    