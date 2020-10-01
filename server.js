const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const server = next({ dev })
const handle = server.getRequestHandler()
const PORT = process.env.PORT || 3000;
    
server.prepare()
.then(() => {
    const app = express()
        
    app.get('/api/', (req, res) => {
        res.json({
            message: "Vincent is a douche"
        });
    });

    app.get('*', (req, res) => {
        return handle(req, res)
    })
        
    app.listen(PORT, (err) => {
        if (err) throw err
        console.log(`Listening on port ${PORT}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})