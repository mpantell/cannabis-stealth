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

  constructor() {

  }

  configuration = new Configuration({
    apiKey: "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"
  })

  openAI = new OpenAIApi(this.configuration);

  buildPrompts(states: string[], content: string): ChatCompletionRequestMessage[][] {
    try {
      states.map(state => {
        const prompt = "Does the content below do any of the following: advertise to minors, make false or misleading claims, make medical or health claims, depict the use of or intoxication by cannabis.  " + content;
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

  /*async executePrompts(prompts: ChatCompletionRequestMessage[][]): Promise<ChatCompletionResponseMessage[]> {
    const responses: ChatCompletionResponseMessage[] = [];

    const options: {} = {
      headers: {
        'User-Agent': 'CannaseneIntegrator'
      }
    };

    const params: {} = {
      model: "gpt-3.5-turbo",
      messages: prompt,
      max_tokens: 1024,
      n: 1,
      stop: '\n'
    };

    try {
      for (const prompt of prompts) {
        const result = await this.openAI.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: prompt,
          max_tokens: 1024,
          n: 1,
          stop: '\n'
        }, options);

        const response = result.data.choices[0].message;
        if (response) {
          responses.push(response);
        }
      }
    } catch (error) {
      console.log(error);
    }

    return responses;
  }*/


  async executePromptsFrontend(prompts: ChatCompletionRequestMessage[][]): Promise<string[]> {
    const responses: string[] = [];

    for (const prompt of prompts) {
      const params: {} = {
        model: "gpt-3.5-turbo",
        messages: prompt,
        max_tokens: 1024,
        n: 1,
        stop: '\n'
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String('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')
        },
        body: JSON.stringify(params)
      };
      try {
        const fetchResponse = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
        const data = await fetchResponse.json();
        responses.push(data.choices[0].message.content.toString());
      } catch (error:any) {
        console.log(error.errorMessage);
      }
    }
    return responses;
  }
}
