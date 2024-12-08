"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const db = {
    coures: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'back-end' },
        { id: 3, title: 'automation qa' },
        { id: 4, title: 'devops' }
    ]
};
app.get('/coures', (req, res) => {
    const foundCourses = db.coures
        .filter(c => c.title.indexOf(req.query.title) > -1);
    res.json(foundCourses);
});
app.get('/coures/:id', (req, res) => {
    const newVar = db.coures.find(c => c.id === +req.params.id);
    if (!newVar) {
        res.sendStatus(404);
        return;
    }
    res.json(newVar);
});
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
