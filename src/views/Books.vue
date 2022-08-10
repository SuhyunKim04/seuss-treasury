<template>
    <div class="title">
        <h1>Seuss Treasury</h1>
    </div>
<ul class="assemble">
    
    <li
        v-for=" (book,index) in books"
        :key="index">  
        <router-link :to="`/book/${book.id}`" class="title">
            <img :src="book.image" :alt="book.title" />
        </router-link>
            
    </li>
   
</ul>
</template>

<script>
export default {
    name: 'Book',
    data: function () {
        return {
            books: []
        }
    },
    created: function () {
        fetch('https://seussology-api.herokuapp.com/api/books')
            .then(response => response.json())
            .then(json => {this.books = json})
    }
}
</script>

<style></style>