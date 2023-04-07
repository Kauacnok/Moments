import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'

import { MomentService } from 'src/app/services/moment.service'
import { MessagesService } from 'src/app/services/messages.service'
import { Moment } from 'src/app/interfaces/Moment'
import { environment } from 'src/enviroments/environment'

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
	moment?: Moment
	baseApiUrl = environment.baseApiUrl
	
	faTimes = faTimes
	faEdit = faEdit

	constructor(private momentService: MomentService, private route: ActivatedRoute, private messagesService: MessagesService, private router: Router) {}

	ngOnInit() {
		const id = Number(this.route.snapshot.paramMap.get('id'))

		this.momentService.getMoment(id).subscribe((item) => {
			this.moment = item.data
		})
	}

	async removeHandler(id: number) {
		await this.momentService.deleteMoment(id).subscribe()

		this.messagesService.add('Momento excluído com sucesso!')
		this.router.navigate(['/'])
	}
}
