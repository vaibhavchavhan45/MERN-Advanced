import express from "express"
import zod from "zod"
const app = express()

const zodSchema = zod.object({
    name: zod.string().min(3, {message: "name cannot be empty"}),
    email: zod.string().email({message: "Invalid email"}),
    age: zod.number().min(18, {message: "Age is below 18"}).optional()
})

type FinalUserSchema = zod.infer<typeof zodSchema>

app.put("/", (req, res) => {
    const updateBody: FinalUserSchema = req.body
    const parsedBody = zodSchema.safeParse(updateBody)

    if(!parsedBody.success){
        res.status(411).json( {} )
        return
    }

    res.json({
        message: "User updated successfully"
    })
})

app.listen(() => {
    console.log("App listening on port" +3000);
})