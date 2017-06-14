var data = { 
	title: "小巷的空间" ,
	menuOpen: false
}
var vm = new Vue({
  el: '#body-wrapper',
  data: data,
  methods:{
  	clickmenu: function(){
  		console.log(this.menuOpen)
  		this.menuOpen = !this.menuOpen;
  	}
  }
})
