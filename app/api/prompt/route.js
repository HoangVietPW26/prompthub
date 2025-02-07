import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const GET = async (req, res) => {

    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator')
        console.log(prompts)
        return new Response(JSON.stringify(prompts), {status: 201})
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch new prompt", {status: 500})
    }
}