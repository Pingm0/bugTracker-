const Project = require('../models/project.modle');




module.exports  = {
    findAllProjects:  (async (req,res) => {
        try{
        const findProjects = await Project.find({})
        console.log(findProjects)

        return res.json(findProjects)
      
    }
    catch(err){
        console.log(err)
        return res.json({message:'Something went wrong with finding all Projects',error:err})
    }
    }),

    createProject:(async (req,res) => {
        console.log("created Project")
        try{
            const newProject = new Project(req.body)
            console.log(req.body , 'This is the console for req.body')
            // const decodedJWT = jwt.decode(req.cookies.usertoken,{complete:true})
            // console.log(decodedJWT)
            // newProject.createdBy = decodedJWT.payload.id
            console.log(newProject,'this is my body objext')

            const saveProject = await newProject.save()
            console.log('Project Added',saveProject)
            return res.json(saveProject)
        }
        catch(err){
            res.status(400).json(err)
        }
    }),

    deleteProject: async (req,res) => {
        console.log('pre delete')
        try{
            const deleteProject = await Project.deleteOne({_id:req.params.id})
            console.log(deleteProject)
            res.json(deleteProject)
        }
        catch(err){
            console.log(err)
            return res.json(err)
        }
    },

    updateProject: async (req,res) => {
        try{
            const updateProject = await Project.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            console.log(updateProject)
            res.json(updateProject)

        }
            catch(err){
                console.log(err)
                return res.json(err)
            }
    }

    // deleteBug: async (req,res) => {
    //     try{
            
    //         // const deleteABug = await Project.updateOne({},{"$pull": {bugs: {_id:req.params.id}} } )
    //         // const deleteABug = await Project.deleteOne({bugs:{_id:body.params.id}})
    //            const deleteABugb =  await Project.updateOne( {_id:req.params.projid}, { $pull: { bugs: { _id: req.params.id } } } )
    //             console.log("deleted")
    //             return res.json(deleteABugb)

    //     }catch(err){
    //         console.log("Deleted")
    //         return res.json(err)
    //     }
    // } ,

    
}