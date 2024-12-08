import express from 'express'
const app = express()
const port =3000
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)
const db ={
    coures:[
        {id:1 , title: 'front-end'},
        {id:2 , title: 'back-end'},
        {id:3 , title: 'automation qa'},
        {id:4 , title: 'devops'}
    ]
}
app.get('/coures', (req, res) => {
    let foundCourses = db.coures;
        if(req.query.title){
            foundCourses=foundCourses  .filter(c =>c.title.indexOf(req.query.title as string) > -1)

        }
    res.json(foundCourses)
})
app.get('/coures/:id', (req, res) => {
    const newVar = db.coures.find(c => c.id === +req.params.id)
    if(!newVar){
        res.sendStatus(404);
        return;
    }
    res.json(newVar)
})
app.post('/coures', (req, res) => {
    const createCourse = {
        id: +(new Date()),
        title: req.body.title
    };
    db.coures.push(createCourse)
    res.json(createCourse)
})

app.delete('/coures/:id', (req, res) => {
    db.coures = db.coures.filter(c => c.id !== +req.params.id)
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}` )
})

