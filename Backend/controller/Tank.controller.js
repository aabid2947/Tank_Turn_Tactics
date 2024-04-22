import Tank from '../models/Tank.model.js'

export const createTank = async (req,res)=>{
    try{
        const Tank = await Tank.create(req.body)
        res.status(200).json(Tank)
    }
    catch(e){
        res.status(500).json({ message: e.message })
        console.log(e)
    }
}

export const updateLife =async (req,res)=>{
    try{
        const {id} = req.params
        const {life} = req.query

        // Check if the 'energy' query parameter exists and is a valid number
        if(!life && isNaN(Number(life))){
            res.status(400).json({message:"Invalid life"})
        }

        // Update the Tank document with the specified 'id' to only modify the 'life' field
        const updatedTank = await Tank.findByIdAndUpdate(id,{$set:{life}}, req.body)

        // Check if the Tank document was found and updated
        if (!Tank){
            res.status(500).json({message:"Tank not found"})
            return
        }

        // Send the updated Tank document in the response
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const updateEnergy =async (req,res)=>{
    try{

        const { id } = req.params;
        const { energy } = req.query; // Assuming the energy value is passed as a query parameter named 'energy'
    
        // Check if the 'energy' query parameter exists and is a valid number
        if (!energy || isNaN(Number(energy))) {
            res.status(400).json({ message: "Invalid 'energy' value" });
            return;
        }
    
        // Update the Tank document with the specified 'id' to only modify the 'energy' field
        const updatedTank = await Tank.findByIdAndUpdate(id, { $set: { energy } }, { new: true });
    
        // Check if the Tank document was found and updated
        if (!updatedTank) {
            res.status(404).json({ message: "Tank not found" });
            return;
        }
    
        // Send the updated Tank document in the response
        res.status(200).json(updatedTank);
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const updateRange =async (req,res)=>{
    try{
        const {id} = req.params
        const {range} = req.query

        // Check if the 'energy' query parameter exists and is a valid number
        if(!range && isNaN(Number(range))){
            res.status(400).json({message:"Invalid range"})
        }

        // Update the Tank document with the specified 'id' to only modify the 'energy' field
        const updatedTank = await Tank.findByIdAndUpdate(id,{$set:{range}}, req.body)

        // Check if the Tank document was found and updated
        if (!Tank){
            res.status(500).json({message:"Tank not found"})
            return
        }

        // Send the updated Tank document in the response
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const updatexCoordinate =async (req,res)=>{
    try{
        const {id} = req.params
        const {xCoordinate} = req.query

        // Check if the 'energy' query parameter exists and is a valid number
        if(!xCoordinate && isNaN(Number(xCoordinate))){
            res.status(400).json({message:"Invalid xCoordinate"})
        }

        // Update the Tank document with the specified 'id' to only modify the 'xcor' field
        const updatedTank = await Tank.findByIdAndUpdate(id,{$set:{xCoordinate}}, req.body)

        // Check if the Tank document was found and updated
        if (!Tank){
            res.status(500).json({message:"Tank not found"})
            return
        }

        // Send the updated Tank document in the response
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const updateyCoordinate =async (req,res)=>{
    try{
        const {id} = req.params
        const {yCoordinate} = req.query

        // Check if the 'energy' query parameter exists and is a valid number
        if(!yCoordinate && isNaN(Number(yCoordinate))){
            res.status(400).json({message:"Invalid yCoordinate"})
        }

        // Update the Tank document with the specified 'id' to only modify the 'ycor' field
        const updatedTank = await Tank.findByIdAndUpdate(id,{$set:{yCoordinate}}, req.body)

        // Check if the Tank document was found and updated
        if (!Tank){
            res.status(500).json({message:"Tank not found"})
            return
        }

        // Send the updated Tank document in the response
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}

export const updateColor =async (req,res)=>{
    try{
        const {id} = req.params
        const {color} = req.query

        if(!color && isHex(color)){
            req.status(400).json({message:"Wrong hex value"})
        }

        const updatedTank = await Tank.findByIdAndUpdate(id,{$set:{color}}, req.body)
        if (!Tank){
            res.status(500).json({message:"Tank not found"})
            return
        }
        res.status(200).json(updatedProduct)
    }
    catch(e){
        res.status(500).json({ message: e.message })
    }
}






