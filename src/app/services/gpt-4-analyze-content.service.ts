import { Inject, Injectable } from '@angular/core';
import { OpenAIApi, Configuration, ChatCompletionRequestMessage, ChatCompletionResponseMessage } from 'openai';
import { Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Gpt4AnalyzeContentService {
  //@Input() states: string[] = []
  //@Input() content: string = '';
  prompts: ChatCompletionRequestMessage[][] = [];

  constructor(){
    
  }

  configuration = new Configuration({
    apiKey: "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"
  })

  openAI = new OpenAIApi(this.configuration);

  buildPrompts(states: string[], content: string):ChatCompletionRequestMessage[][] {
    try {
      states.map(state => {
        const prompt = "Does this content violate any cannabis marketing laws in " + state + ': ' + content;
        let message: ChatCompletionRequestMessage[] = [{
          role: 'user',
          content: prompt
        }]
        this.prompts.push(message);
      });
    } catch (error) {
      console.log(error);
    }
    return this.prompts
  }

  async executePrompts(prompts: ChatCompletionRequestMessage[][]): Promise<ChatCompletionResponseMessage[]> {
    const responses: ChatCompletionResponseMessage[] = [];

    const options:{} = {
      headers:{
      'User-Agent': 'CannaseneIntegrator'
    }};

    const params:{} = {
      model: "gpt-3.5-turbo",
      messages: prompt,
      max_tokens: 1024,
      n: 1,
      stop: '\n'
    };

    try{
    for (const prompt of prompts) {
      const result = await this.openAI.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: prompt,
        max_tokens: 1024,
        n: 1,
        stop: '\n'
      },options);

      const response = result.data.choices[0].message;
      if (response) {
        responses.push(response);
      }
    }}catch(error){
      console.log(error);
    }

    return responses;
  }

}
