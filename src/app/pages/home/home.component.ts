import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service'
import { Moment } from 'src/app/interfaces/Moment'
import { environment } from 'src/enviroments/environment'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	allMoments: Moment[] = []
	moments: Moment[] = []
	baseApiUrl = environment.baseApiUrl

	constructor(private momentService: MomentService) {}

	ngOnInit() {
		this.momentService.getMoments().subscribe((items) => {
			const data = items.data

			data.map((item) => {
				item.created_at = new Date(item.created_at!).toLocaleString('pt-BR')
			})

			this.allMoments = data
			this.moments = data
		})
	}
}
