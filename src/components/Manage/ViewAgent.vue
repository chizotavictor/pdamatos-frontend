<template>
  <div class="p-0">
    <Loader :is-visible="isLoading"></Loader>
    <div class="row">
      <AlertError
        v-if="loginErrMsg.title"
        :heading="loginErrMsg.title"
        :message="loginErrMsg.msg"
      />
    </div>
    <div class="row">
      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-6 pt-5 pb-5">
          <div class="inline-block relative w-full md:w-1/3 pr-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Agent Name:
            </label>
            <input
              v-model="agent.name"
              class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
           <button
                class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10"
                style="margin-top:25px"
                @click="loadAgentList()"
                >
                <i class="fas fa-search"></i>
            </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-12">
          <DataTable
            :value="getResults"
            :paginator="true"
            class="p-datatable-customers"
            :rows="28"
            dataKey="id"
            :rowHover="true"
            v-model:selection="selectedResult"
            v-model:filters="filters"
            filterDisplay="menu"
            :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[28, 50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :globalFilterFields="[
              'usernmae',
              'first_name',
              'last_name',
              'email',
              'phone_number',
              'location.address',
              'location.town',
              'location.lga',
              'location.state',
              'location.country'
            ]"
            responsiveLayout="scroll"
          >
            <template #header>
              <div class="flex flex-nowrap p-jc-between p-ai-center">
                <h5 class="p-m-0 mr-10 mt-2" style="font-size:18px">
                  Agent Record
                </h5>
                <span class=" p-input-icon-left" style="margin-left: auto;">
                  <i class="pi pi-search" />
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Keyword Search"
                  />
                </span>
              </div>
            </template>
            <template #empty>
              No result found.
            </template>
            <template #loading>
              Loading lottery result data. Please wait.
            </template>

            <Column
              field="username"
              header="Username"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  {{data.username}}
                </div>
              </template>
            </Column>

            <Column
              field="first_name"
              header="First Name"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.first_name}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="last_name"
              header="Last Name"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                 <span>{{data.last_name}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="email"
              header="Email"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.email}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="phone_number"
              header="Phone number"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.phone_number}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="address"
              header="Address"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.location.address}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="town"
              header="Town"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.location.town}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="lga"
              header="LGA"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.location.lga}}</span>
                </div>
              </template>
            </Column>


            <Column
              field="state"
              header="State"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.location.state}}</span>
                </div>
              </template>
            </Column>

            <Column
              field="country"
              header="Country"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <span>{{data.location.country}}</span>
                </div>
              </template>
            </Column>
          
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Call from "../../general-service";
import Loader from "../Layouts/Loader.vue";
export default {
  name: "ViewAgent",
  components: {
    Loader,
  },
  data: () => ({
    isLoading: false,
    agent: {
      name: ""
    },
    loginErrMsg: {},
    selectedResult: [],
    getResults: [],
    filters: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      "username": {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      "first_name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      "last_name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      'email': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      'phone_number': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      'location.address': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      'location.town': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      'location.lga': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      'location.state': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      'location.country': {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      }
    }
  }),
  methods: {
    loadAgentList() {
      this.isLoading = true;
      this.getResults = []
      Call.listAgent()
        .then(data => {
          this.isLoading = false;
          let dt = data.data;
          if(dt.success) {
            this.getResults = dt.users;
          }
          console.log(dt.users)
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>
