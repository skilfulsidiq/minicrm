<template>
    <div class="container">
         <label class="section-title">Comapnies</label>
        <div class="row">
                <div class="col-md-3 mt-5" v-for="item in pageOfItems" :key="item.id">
                    <company-card :company="item"></company-card>
                </div>
            </div>
            <div class=" text-center pb-0 p-5 mt-5">
            <jw-pagination :pageSize="5" :items="allCompanies" @changePage="onChangePage" :styles="customStyles" :labels="customLabels" ></jw-pagination>
        </div>
    </div>
</template>
<script>
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
    name:"Welcome",
        data() {
        return {
            pageOfItems: [],
            customStyles,
            customLabels
        };
    },
    computed:{
        allCompanies(){
            let p =  this.$store.state.general_module.all_companies;
            return p;
        }
    },
    methods:{
        fetchAllCompanies(){
            this.$store.dispatch('allCompaniesAction')
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    },
    created(){
        this.fetchAllCompanies();
        // console.log(this.allCompanies);
    }
}
</script>