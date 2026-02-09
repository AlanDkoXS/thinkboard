import mongoose from "mongoose";

// 1st step: CREATE A SCHEMA

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // createdAt, updatedAt
);

// 2d step: MODEL BASED ON A SCHEMA

const Note = mongoose.model("Note", noteSchema);

export default Note;
