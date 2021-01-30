import * as mongoose from "mongoose"

export const TodoSchema = new mongoose.Schema({
    name: String,
    isComplete: Boolean
})
