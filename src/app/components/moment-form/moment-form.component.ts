import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Moment } from 'src/app/interfaces/Moment'

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
	@Input() btnText!: string
	@Input() momentData: Moment | null = null
	@Output() onSubmit = new EventEmitter<Moment>()

	momentForm!: FormGroup

	constructor() {}

	ngOnInit() {
		this.momentForm = new FormGroup({
			id: new FormControl(''),
			title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
			description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),
			image: new FormControl('')
		})
	}

	get title() {
		return this.momentForm.get('title')!
	}

	get description() {
		return this.momentForm.get('description')!
	}

	onFileSelected(event: any) {
		const file: File = event.target.files[0]

		this.momentForm.patchValue({ image: file })
	}

	submit() {
		if ( this.momentForm.invalid ) {
			return
		}

		this.onSubmit.emit(this.momentForm.value)
	}
}
