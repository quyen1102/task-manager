module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.toObject(mongooses)
    } ,
    singleMongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject(mongoose): mongoose 
    }
} 