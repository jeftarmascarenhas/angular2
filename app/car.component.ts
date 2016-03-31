import {Component} from 'angular2/core'

interface Car {
	id: number,
	brand: string,
	model: string
}

@Component({

	selector: 'my-car',
	template: `<div class="container">
				<h1>{{title}}</h1>
				<h2>{{car.brand}}</h2>
			   </div> `
})

export class CarComponent{
	public title: string = 'Cadastro de veículos';
	public car: Car = {
		id: 1,
		brand: 'BMW',
		model: 'X6'
	}
}