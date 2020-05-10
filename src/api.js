const axios = require('axios')
const express = require('express')

const router = express.Router()

//跨域代理
router.post('/proxy', async (req, res) => {
    try{
        const response = await axios(req.body.req)
        res.status(response.status).send(response.data)
    }catch(err){
        if(err.response){
            res.status(err.response.status).send(err.response.data)
        }else{
            res.status(500).send({error: err})
        }
    }
})

module.exports = router