#!/usr/bin/env node
import 'dotenv/config'
import { ChatGPTAPI } from 'chatgpt'

if (process.version.match(/^v(\d+\.\d+)/)[1] < 18)
  throw new Error('Requirement node in version >= 18')

/**
 * @param {string} question The message
 */
async function simple(question) {
  const chatgpt = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const res = await chatgpt.sendMessage(question)
  console.log(res.text)
}

simple(process.argv.slice(2).join(' '))
