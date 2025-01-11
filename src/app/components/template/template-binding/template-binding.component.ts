import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Fernando Rodrigues";
  public age = 32;
  public isDisabled = true;
  public srcValue =
  'data:image/webp;base64,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';

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';



  public sum(){
    return this.age++;
  }

  public sub(){
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }
  public onMouseMove(event: any) {
    return console.log(event);

  }

}
