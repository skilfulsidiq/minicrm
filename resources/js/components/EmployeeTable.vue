<template>
<div class="row">
   <div class="col-12">
         <div class="card">


            <div class="card-body">

            <h4 class="header-title">{{company.name}} Employees</h4>
                <p class="text-muted font-13 mb-4">
                </p>
                <div class="table-responsive pr-3">
                <table class="table table-bordered table-condensed table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th> # </th>
                            <th>Company</th>
                            <th>Name</th>
                            <th>Email</th>
                            <!-- <th class="text-center text-danger"><i class="fa fa-bolt"> </i></th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in employees" :key="employee.id">
                            <td>{{index+1}}</td>
                            <td>{{company.name}}</td>
                            <td>{{employee.name}}</td>
                            <td>{{employee.email}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div>
   </div>
</div>
</template>
<script>
export default {
    name:"EmployeeTable",
    props:["employees","company"],
    created(){
        console.log(this.employees)
    }
}
</script>