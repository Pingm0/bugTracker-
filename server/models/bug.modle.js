const mongoose = require('mongoose');

const BugsSchema = new mongoose.Schema({
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'Project'
        },
        description:{
            type: String
        } ,
        severity: {
            type: String,
            enum:['High','Medium','Low','Blocker'],    
        },

        release: {
            type: String
        },
        reportedBy: {
            type: String
        },
        reportedDate : {
            type: Date
        },
        bugType: {
            type: String,
            enum:['Enhancement','Bug'],    
        },
        bugStatus: {
            type: String,
            enum:['Fixed','Reported','inprogress'],    

        },
        stepsToReproduce: {
            type: String
        }
},{timestamps:true})

module.exports = mongoose.model('Bug', BugsSchema); 
