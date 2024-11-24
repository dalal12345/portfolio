const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    language_name: {
        type:String,
        required:true,
        unique:true
    },
});

const FrameworkSchema = new mongoose.Schema({
    framework_name: {
        type:String,
        required:true,
        unique:true
    },
    language:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Language',
        required:true
    },
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FrameworkType',
        required:true
    },
});

const FrameworkTypeSchema = new mongoose.Schema({
    framework_type: {
        type:String,
        required:true,
        unique:true
    },
});

const Language = mongoose.model('Language', LanguageSchema);
const Framework = mongoose.model('Framework', FrameworkSchema);
const FrameworkType = mongoose.model('FrameworkType', FrameworkTypeSchema);


module.exports = {  Language, Framework, FrameworkType };