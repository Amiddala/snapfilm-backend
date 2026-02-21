const mongoose = require("mongoose");

const sceneSchema = new mongoose.Schema({
  index:    { type: Number },
  text:     { type: String },
  imageUrl: { type: String, default: null }, // imagen generada por DALL-E
  clipUrl:  { type: String, default: null }, // videoclip animado por Runway/Kling
  duration: { type: Number, default: null }, // duración en segundos
  startMs:  { type: Number, default: null }, // inicio en milisegundos
  endMs:    { type: Number, default: null }, // fin en milisegundos
});

const projectSchema = new mongoose.Schema(
  {
    // ─── MATERIAL DE ORIGEN ───────────────────────────────
    // "text" → usuario escribió una idea
    // "audio" → usuario subió un audio
    inputType: {
      type: String,
      enum: ["text", "audio"],
      required: true,
    },

    // Llega solo si inputType es "text"
    prompt: {
      type: String,
      default: null,
    },

    // Llega solo si inputType es "audio"
    inputAudioUrl: {
      type: String,
      default: null,
    },

    format: {
      type: String,
      enum: ["youtube", "tiktok"],
      required: true,
    },

    duration: {
      type: Number,
      min: 10,
      max: 300,
      default: 60,
    },

    includeSubtitles: { type: Boolean, default: false },
    includeIntro:     { type: Boolean, default: false },
    includeOutro:     { type: Boolean, default: false },

    thumbnailIdea:     { type: String, default: null },
    thumbnailImageUrl: { type: String, default: null },

    //propio de back
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },

    // Guión generado por GPT (solo cuando inputType es "text")
    script: { type: String, default: null },

    // Escenas construidas por el backend
    scenes: { type: [sceneSchema], default: [] },

    // Audio final — puede ser TTS generado o el que subió el usuario
    audioUrl: { type: String, default: null },

    // Video final renderizado
    videoUrl: { type: String, default: null },

    // Miniatura final (si llegó thumbnailIdea o thumbnailImageUrl)
    thumbnailUrl: { type: String, default: null },

    // Si algo falla guardamos el error aquí
    errorMessage: { type: String, default: null },

    // Referencia al job de BullMQ
    jobId: { type: String, default: null },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automático
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;