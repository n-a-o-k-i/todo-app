Vue.component('hello-comp', {
	template: '<p>Hello</p>'
})

var app = new Vue({
	el: '#app',
	data: {
		list: ['apple','banana','ice']
	}
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

var app7 = new Vue({
	el: '#app7',
	data: {
		message: 'Hello Vue.js!'
	}
})

var app8 = new Vue({
	el: '#app8',
	data: {
		user: {
			firstName: 'Naoki',
			lastName: 'Terauchi',
			age: 20
		}
	}
})

var app9 = new Vue({
	el: '#app9',
	data: {
		now: ''
	},
	methods: {
		onclick: function() {
			this.now = new Date().toLocaleString();
		}
	}
})

var app10 = new Vue ({
	el: "#app10",
	data: {
		message: 'HELLO'
	}
})