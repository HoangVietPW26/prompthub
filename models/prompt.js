import { Schema, model, models } from "mongoose";


const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required']
    }, 
    tag: {
        type: String,
        required: [true, 'Tag is required']
    }
    
  });

// const User = model("User", UserSchema) // server always run

// export default User


const Prompt = models.Prompt || model("Prompt", PromptSchema) // for next js
export default Prompt