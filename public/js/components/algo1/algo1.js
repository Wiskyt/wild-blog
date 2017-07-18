angular.module("app").component('algo1', {
   templateUrl: 'js/components/algo1/algo1.html',
   controller: Algo1
})

function Algo1() {
   this.people = ["Ryan", "Olliver", "C18", "John", "Sam", "Mark", "", "R2D2"]
}