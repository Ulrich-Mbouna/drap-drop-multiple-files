import {connect } from 'mongoose'
export default defineNitroPlugin(_nitroApp => {
    connect(useRuntimeConfig().MONGO_URI)
    console.log("Connected to MogoDB");
    
})