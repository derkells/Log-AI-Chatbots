import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
//Log put your API key here, use this website: https://aistudio.google.com/app/apikey
const API_KEY = '';
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    //These requests are text only
    //Specify which model you're using here:
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const promptTextBox = document.querySelector('.prompt-textbox');
  const geminiTextBox = document.querySelector('.gemini-textbox');
  const container = document.querySelector('.container');

  document.querySelector('.submit-button').addEventListener('click', async () => {
    const prompt = promptTextBox.value;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    geminiTextBox.value = text;
    const lineHeight = parseInt(window.getComputedStyle(geminiTextBox).lineHeight);
    const contentHeight = geminiTextBox.scrollHeight;

    const rows = Math.max(Math.floor(contentHeight / lineHeight), 2);
    geminiTextBox.rows = rows;

    container.style.height = `${geminiTextBox.scrollHeight}px`;
  });
}
run();
