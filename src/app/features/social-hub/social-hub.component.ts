import { Component } from '@angular/core';
import { AnalyzeContentService } from 'src/app/services/analyze-content.service';

@Component({
  selector: 'app-social-hub',
  templateUrl: './social-hub.component.html',
  styleUrls: ['./social-hub.component.scss']
})
export class SocialHubComponent {  
  
  imageSrc: string | ArrayBuffer | undefined | null;
  postText: string = '';
  hashtags: string[] | undefined
  contentEditorActive: boolean = false;
  stateResults: { state: string, status: string, violations: { code: string, description: string }[] }[] = [];

  constructor(private analyzeContentService: AnalyzeContentService){}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
  }

  onSubmit(): void {
    // You can implement your own logic here to submit the post
    // For this example, we will just log the image and text to the console
    console.log('Image:', this.imageSrc);
    console.log('Text:', this.postText);
    // Reset the form
    this.imageSrc = null;
    this.postText = '';
  }

  onInput(event:any){
    this.contentEditorActive = true;
    if(event.target.id === 'postText'){
      this.postText = event.target.value;
    }else{
      this.hashtags = this.splitHashtags(event.target.value);
    }
    this.analyzePost();
  }

  splitHashtags(hashtagText:string){
    return hashtagText.split(' ');
  }

  setStateResults(event: { state: string; status: string; violations: { code: string; description: string; }[] }[]) {
    this.stateResults = event;
    this.contentEditorActive = true;
  }


  async analyzePost() {
    try {
      const analysisResult = await this.analyzeContentService.analyzeContent(this.postText);
      this.stateResults = analysisResult;     
    }catch(error){
      console.log(error);
    }

  }


  
}
