import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'

import { MomentService } from 'src/app/services/moment.service'
import { Moment } from 'src/app/interfaces/Moment'
import { environment } from 'src/enviroments/environment'

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
	moment?: any
	baseApiUrl = environment.baseApiUrl
	
	faTimes = faTimes
	faEdit = faEdit

	constructor(private momentService: MomentService, private route: ActivatedRoute) {}

	ngOnInit() {
		const id = Number(this.route.snapshot.paramMap.get('id'))

		this.momentService.getMoment(id).subscribe((item) => {
			this.moment = item.data
			console.log(this.moment)
		})
	}
}
