import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Moment } from 'src/app/interfaces/Moment'
import { MomentService } from 'src/app/services/moment.service'
import { MessagesService } from 'src/app/services/messages.service'


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
	btnText = 'Compartilhar!'

	constructor(private momentService: MomentService, private messagesService: MessagesService, private router: Router) {}

	async createHandler(moment: Moment) {
		const formData = new FormData()

		formData.append("title", moment.title)
		formData.append("description", moment.description)

		if (moment.image) {
			formData.append("image", moment.image)
		}

		await this.momentService.createMoment(formData).subscribe()

		this.messagesService.add('Momento adicionado com sucesso')

		this.router.navigate(['/'])

	}
}
