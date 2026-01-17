// controller for creating a new resume

// POST : /api/resumes/create

export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {title} = req.body;

        //create new resume 
        const newResume = await Resume.create({
            userId,
            title
        });
        //return success message
        return res.status(201).json({ message: "Resume created successfully", resume: newResume });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

//controller for deleting a resume
// DELETE : /api/resumes/delete

export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;
        await Resume.findOneAndDelete({ _id: resumeId, userId });

        return  res.status(200).json({ message: "Resume deleted successfully" });
    }catch(error){
        return res.status(400).json({ message: error.message });
    }

   

}

// get user resume by id
// GET : /api/resumes/get

export const getResumesByUserId = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume = await Resume.findOne({ _id: resumeId, userId });

        if(!resume){
            return res.status(404).json({ message: "Resume not found" });
        }
        resume.__v = undefined; 
        resume.createdAt = undefined;
        resume.updatedAt = undefined;
        
        return res.status(200).json({ resume });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}