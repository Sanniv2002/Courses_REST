import express from "express"
import courses from "./courses"

const app = express()
const PORT = process.env.PORT || 3000


app.get("/", (_, res) => {
    res.json({
        message: "Server is healthy"
    })
})

app.get("/courses", (_, res) => {
    res.send(courses)
})

app.get("/courses/:id", (req, res) => {
    try{
        res.send(courses.filter((course) => parseInt(req.params.id)===course.id))
    }
    catch(e){
        res.status(500).json({
            message: "Internal server Error"
        })
    }
})

app.put("/courses/like", (req,res) => {
    try{
        const idx = courses.findIndex((course) => parseInt(req.query.id as string)===course.id)
        courses[idx].likes++
        res.status(200).json(courses[idx])
    }
    catch(e){
        res.send(e)
    }
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))