<template>
  <div class="card bd-0">
    <img class="img-fluid" :src="company.logo" alt="Image">
    <div class="card-body bd bd-t-0">
            <h4>{{company.name}}</h4>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    </div>
    </div>
  
</template>
<script>
export default {
    name:'CompanyCard',
    props:{company:Object}
}
</script>
<style scoped>
    .card{
        height: 350px;
    }
</style>