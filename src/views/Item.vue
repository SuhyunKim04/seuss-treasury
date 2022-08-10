<template>
<div clss="box">
    <div class="title sub">
        <h1>Seuss Treasury</h1> 
    </div>
    <section class="detailBox">
        <div class="detail">
            <img class="one" v-bind:src="book.image" v-bind:alt="book.title">
        </div>
        <div class="article">
            <div class="sub">
                {{book.title}} 
            </div>

            <div class="text">
                    {{book.description}}
            </div>
        </div>
    </section>
</div>

</template>

<script>
export default {
    name: 'books',
    props: ['id'],
    data: function () {
        return {
         book: {
            title:'',
            id: '',
            image: '',
            description: '',
         

         }
        }
    },
    created: function () {
        fetch('https://seussology-api.herokuapp.com/api/books/' + this.id)
        .then(response => response.json())
        .then(json => {
            this.book.title = json.title,
            this.book.id = json.id,
            this.book.image = json.image,
            this.book.description = json.description
        })
    }
            
           
    //     }
    // },
    // created: function () {
    //     fetch('https://seussology-api.herokuapp.com/api/books/')
    //         .then(response => response.json())
           
    //         .then(json => {
                
    //             this.book.title = json.title,
    //             this.book.image = json.image
    //             this.book.id = json.id
    //             // this.book.id = json.id,
    //             // this.book.image = json.image
    //         })
    // }

}
</script>

<style>


</style>