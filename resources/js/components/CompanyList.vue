<template>
    <div>
        <div class="row">
            <div class="col-md-3 mt-5" v-for="item in pageOfItems" :key="item.id">
                <company-card :company="item"></company-card>
            </div>
        </div>
        <div class=" text-center pb-0 p-5 mt-5">
         <jw-pagination :pageSize="5" :items="companies" @changePage="onChangePage" :styles="customStyles" :labels="customLabels" ></jw-pagination>
        </div>
    </div>
   
</template>
<script>
import CompanyCard from './CompanyCard.vue';
const customStyles = {
    ul: {
        // border: '2px solid red'
    },
    li: {
        display: 'inline-block',
        // width:'100px'
        
        // border: '2px dotted green'
    },
    a: {
        color: 'blue',
        // width:'100%;'
    },
  
};
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name:'CompanyList',
    props:{companies:Array},
       data() {
        return {
            pageOfItems: [],
            customStyles,
            customLabels
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>
<style scoped>
      .page-link{
        width:80px;
    }
</style>