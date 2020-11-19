import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactPageForm;
  submitted: boolean = false;
   
  constructor(private formBuilder: FormBuilder) { 
    this.contactPageForm = this.formBuilder.group(
      {
        name:  ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        areYouHuman: [false, Validators.required],
        message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]],
      }
    )
  }

  ngOnInit(): void {
  }

  sendEmail(){
    this.submitted = true;
    this.contactPageForm.value;
  }

}

