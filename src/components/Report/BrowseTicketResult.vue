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
              Game Date
            </label>
            <input
              type="date"
              v-model="ticket.against"
              @change="loadTicketResults($event)"
              class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            />
            <div
              class="pointer-events-none absolute mt-5 mr-5 inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
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
              'time',
              'slot.time',
              'game.name',
              'direct.digit'
            ]"
            responsiveLayout="scroll"
          >
            <template #header>
              <div class="flex flex-nowrap p-jc-between p-ai-center">
                <h5 class="p-m-0 mr-10 mt-2" style="font-size:18px">
                  Ticket Results
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
              field="game"
              header="Game"
              sortable
              style="min-width: 10rem"
            >
              <template #body="{data}">
                <div class="flex gap-2">
                  <img
                    class="flex-initial block mr-5"
                    style="height:2em"
                    :src="data.game_image"
                  />
                  <!-- <a href="" class="flex-initial underline font-bold">{{
                    data.game.name
                  }}</a> -->
                  <a
                    :href="'#ex_' + data.id"
                    rel="modal:open"
                    class="flex-initial underline font-bold text-indigo-600 hover:text-indigo-900"
                    >{{ data.game.name }} <i class="fas fa-eye"></i
                  ></a>
                  <div :id="'ex_' + data.id" class="modal">
                    <div>
                      <result-content :data="data" />
                    </div>
                    <a href="#" rel="modal:close">Close</a>
                  </div>
                </div>
              </template>
            </Column>

            <Column field="time" header="Date" sortable style="min-width: 8rem">
              <template #body="{data}">
                <a href="#" class="underline text-blue-800">{{ data.time }}</a>
              </template>
            </Column>
            <Column field="slot" header="Slot" sortable style="min-width: 8rem">
              <template #body="{data}">
                <span class="image-text font-medium">{{ data.slot.time }}</span>
              </template>
            </Column>

            <Column
              field="direct"
              header="Direct"
              sortable
              style="min-width: 8rem"
            >
              <template #body="{data}">
                <span class="image-text font-medium">{{
                  data.direct.digit + "D"
                }}</span>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Call from "../../general-service";
import Loader from "../Layouts/Loader.vue";
import ResultContent from "./ResultContent.vue";
export default {
  name: "BrowseTicketResult",
  components: {
    Loader,
    ResultContent
  },
  data: () => ({
    isLoading: false,
    ticket: {
      against: ""
    },
    loginErrMsg: {},
    selectedResult: [],
    filters: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      "direct.digit": {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      "game.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      "slot.time": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      time: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      }
    }
  }),
  computed: {
    ...mapGetters(["getResults"])
  },
  methods: {
    ...mapMutations(["setResults"]),
    ...mapActions(["clearTickets"]),
    loadTicketResults(event) {
      let date = "against=" + event.target.value;
      this.isLoading = true;
      if (this.ticket.against) {
        Call.getLotteryResult(date)
          .then(data => {
            this.isLoading = false;
            this.clearTickets();
            this.setResults(data.data.records);
          })
          .catch(() => {
            this.isLoading = false;
          });
      }
    }
  }
};
</script>
