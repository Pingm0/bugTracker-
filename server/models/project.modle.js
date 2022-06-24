const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref: 'User'
    // },
    projectName: {
        type: String,
        required:[true,'Please Provide Project name'],
        
    },
    bugs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bug" }],
},{timestamps:true});




module.exports = mongoose.model('Project', projectSchema); 





