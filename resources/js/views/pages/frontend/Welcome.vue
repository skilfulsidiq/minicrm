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

import {paginationMixin} from '../../../mixins/paginationMixin'
export default {
    name:"Welcome",
       mixins:[paginationMixin],
        data() {
        return {
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
    },
    created(){
        this.fetchAllCompanies();
        // console.log(this.allCompanies);
    }
}
</script>