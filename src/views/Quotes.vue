<template>
<div class="title">
    <h1>Seuss Treasury</h1>
</div>
<div class="random">
    <div  v-for=" (quote,index) in quotes"
        :key="index"> 
        <div class="outside">
            <div class="Qtext">
                {{quote.text}}
            </div>
            <div class="Qsub">
                <em> &#45; Dr. Seuss in </em> <strong>{{quote.book.title}}</strong>
            </div>
        </div>
    </div>
    

</div>
</template>

<script>
export default {
    name: 'Quotes',
      data: function () {
        return {
            quotes: []
        }
    },
    created: function () {
        fetch('https://seussology-api.herokuapp.com/api/quotes/random/10')
            .then(response => response.json())
            .then(json => {this.quotes = json})
    }
}
</script>