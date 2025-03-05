import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminiApi_Key } from "../constants";

const genAI = new GoogleGenerativeAI(geminiApi_Key);

export default genAI;