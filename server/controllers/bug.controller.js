const Bug = require('../models/bug.modle');

module.exports  = {

    findAllBugs: async (req,res) => {
        try{
            const allBugs = await Bug.find({})
            console.log(allBugs)
    
            return res.json(allBugs)
          
        }
        catch(err){
            console.log(err)
            return res.json({message:'Something went wrong with finding all Bugs',error:err})
        }
    },

    findProjectBugs:  (async (req,res) => {
        try{
        const projectBugs = await Bug.find({projectId:req.params.id})
        console.log(projectBugs)

        return res.json(projectBugs)
      
    }
    catch(err){
        console.log(err)
        return res.json({message:'Something went wrong with finding all Bugs',error:err})
    }
    }),

    createBug:(async (req,res) => {
        console.log("created Project")
        try{
            const newBug = new Bug(req.body)
            const projectId = req.params.id
            newBug.projectId = projectId

            console.log(newBug)
            const savenewBug = await newBug.save()
            return res.json(savenewBug)
        }
        catch(err){
            res.status(400).json(err)
        }
    }),

    deleteBug: async (req,res) => {
        console.log('pre delete')
        try{
            const deleteBug = await Bug.deleteOne({_id:req.params.id})
            console.log(deleteBug)
            res.json(deleteBug)
        }
        catch(err){
            console.log(err)
            return res.json(err)
        }
    },

    updateBug: async (req,res) => {
        try{
            const updateBug = await Bug.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            console.log(updateBug)
            res.json(updateBug)

        }
            catch(err){
                console.log(err)
                return res.json(err)
            }
    }

    
}