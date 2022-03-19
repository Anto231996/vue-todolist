let itemsSquare = "";

    for (let i = 0; i < 11; i++){
        itemsSquare += `<div class="square"></div>`
}

const squareElement = document.querySelector("#square-wrapper").innerHTML = itemsSquare

const app = new Vue({
    el: '#app',


    data:{
        toDoList:[
/*             {
                text:'',
                done:''
            } */
        ],

        newToDoContent:''
    },


    methods:{
        addToDoElement(toDoContent){
            if (toDoContent.trim() !== '') {
                this.toDoList.push(toDoContent.trim())
                this.newToDoContent = ''
            } else {
                console.warn('')
            }
        },

        removeToDoElement(toDoIndex){
            if (this.toDoList[toDoIndex] !== undefined) {
                this.toDoList.splice(toDoIndex, 1)
            } else {
                console.warn('')
            }
        }
    }
});