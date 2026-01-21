//controller for enhancing  a resume's professional summary
// POST : /api/openai/enhance-professional-summary

import Resume from "../models/Resume.model.js";
import openai from "../configs/openai.js";

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL_NAME,
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume writer specializing in professional summaries. Your task is to create compelling, ATS-friendly professional summaries that are 1-2 sentences long. Highlight key skills, years of experience, and career objectives. Make it impactful and tailored to the user's field. Return only the summary text, no explanations or additional formatting.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for enhancing a resume's job description
// POST : /api/openai/enhance-job-description

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL_NAME,
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume writer specializing in job descriptions. Your task is to create compelling, ATS-friendly job descriptions that are 1-2 sentences long. Highlight key responsibilities, achievements, and skills relevant to the position. Make it impactful and tailored to the user's field. Return only the job description text, no explanations or additional formatting.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for uploading a  resume to the database
// POST : /api/openai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt =
      "You are an expert AI agent that extracts data from resume";

  const userPrompt = `Extract data from this resume : ${resumeText}
        
        Provide the data in the following JSON format with no additional explanations or text.
        IMPORTANT: Convert all dates to YYYY-MM format. For example:
        - "June 2023" should be "2023-06"
        - "January 2024" should be "2024-01"
        - "Dec 2022" should be "2022-12"
        If end_date is "Present" or "Current", set is_current to true and leave end_date as empty string.

      professional_summary: {
      type: String,
      default: "",
    },

    skills: [{ type: String }],

    languages: [
      {
        name: { type: String },
        proficiency: {
          type: String,
          enum: ["Native", "Fluent", "Professional", "Conversational", "Basic"],
          default: "Fluent",
        },
      },
    ],

    personal_info: {
      image: { type: String, default: "" },
      full_name: { type: String, default: "" },
      profession: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      website: { type: String, default: "" },
      github: { type: String, default: "" },
      location: { type: String, default: "" },
    },

    experience: [
      {
        company: { type: String, default: "" },
        position: { type: String, default: "" },
        start_date: { type: String, default: "" },
        end_date: { type: String, default: "" },
        is_current: { type: Boolean, default: false },
        description: { type: String, default: "" },
      },
    ],

    project: [
      {
        name: { type: String, default: "" },
        description: { type: String, default: "" },
        link: { type: String, default: "" },
      },
    ],

    education: [
      {
        institution: { type: String, default: "" },
        degree: { type: String, default: "" },
        field: { type: String, default: "" },
        graduation_date: { type: String, default: "" },
        score_type: {
          type: String,
          enum: ["percentage", "cgpa"],
          default: "percentage",
        },
        score: { type: String, default: "" },
      },
    ]
        
        `;

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL_NAME,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: { type: "json_object" },
    });
    const extractedData = response.choices[0].message.content;
    const parsedData = JSON.parse(extractedData);
    const newResume = await Resume.create({
      userId,
      title,
      ...parsedData,
    });
    res.json({ resume : newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
