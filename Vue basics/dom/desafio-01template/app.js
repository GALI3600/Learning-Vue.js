new Vue({
    el: '#desafio',
    dados: {
        nome: 'Gabriel',
        idade: 20,
        imagem: ''
    },

    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },

        numAleatório(){
            return Math.random() * 1
        }
    }


})