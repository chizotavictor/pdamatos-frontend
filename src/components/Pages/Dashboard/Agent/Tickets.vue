<template>
  <div class="p-0">
    <Loader :is-visible="isLoading"></Loader>
    <div class="grid grid-cols-3 gap-4 m-0">
      <div class="col-span-3">
        <h1 class="text-gray-800 text-xl font-medium">Registered Tickets</h1>
      </div>
    </div>
    <div id="panels">
      <div class="panel-2 tab-content py-5">
        <div class="r">
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
                  Against Date
                </label>
                <input
                  type="date"
                  v-model="ticket.against"
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
              <button
                @click="exploreTicketList()"
                class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10"
                title="Browse"
                style="margin-top:25px"
              >
                <i class="fas fa-search"></i>
              </button>
              <button
                @click="resetDate()"
                class="ml-2 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded h-10"
                title="Cancel"
                style="margin-top:25px"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-12">
            <DataTable
              :value="getAdminTickets"
              :paginator="true"
              class="p-datatable-customers"
              :rows="5"
              dataKey="id"
              :rowHover="true"
              v-model:selection="selectedCustomers"
              v-model:filters="filters"
              filterDisplay="menu"
              :loading="loading"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 25, 50]"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              :globalFilterFields="[
                'formatted_time',
                'code',
                'player.username',
                'cost',
                'potential_win',
                'status'
              ]"
              responsiveLayout="scroll"
            >
              <template #header>
                <div class="flex flex-nowrap p-jc-between p-ai-center">
                  <h5 class="p-m-0 mr-10 mt-2" style="font-size:18px">
                    Tickets
                  </h5>
                  <span class=" p-input-icon-left ">
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
                selectionMode="multiple"
                headerStyle="width: 3rem"
              ></Column>
              <Column
                field="formatted_time"
                header="Date"
                sortable
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  {{ data.formatted_time }}
                </template>
                <template #filter="{filterModel}">
                  <InputText
                    type="text"
                    v-model="filterModel.value"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column
                field="player.username"
                header="Player"
                sortable
                style="min-width: 10rem"
              >
                <template #body="{data}">
                  <span class="text-bold">{{
                    data.player.username ? data.player.username : "No Player"
                  }}</span>
                </template>
                <template #filter="{filterModel}">
                  <InputText
                    type="text"
                    v-model="filterModel.value"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>

              <Column
                field="code"
                header="Code"
                sortable
                filterMatchMode="contains"
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  <span class="image-text">{{ data.code }}</span>
                </template>
                <template #filter="{filterModel}">
                  <InputText
                    type="text"
                    v-model="filterModel.value"
                    class="p-column-filter"
                    placeholder="Enter code..."
                  />
                </template>
              </Column>
              <Column
                field="cost"
                header="Stake"
                sortable
                dataType="numeric"
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  {{ formatCurrency(data.cost) }}
                </template>
              </Column>
              <Column
                field="potential_win"
                header="Potential Win"
                sortable
                dataType="numeric"
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  {{ formatCurrency(data.potential_win) }}
                </template>
              </Column>
              <Column
                field="paid"
                header="Paid?"
                sortable
                dataType="numeric"
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  <span
                    v-if="data.status == 'Pending'"
                    class="text-red-900 font-medium"
                    >Pending</span
                  >
                  <span v-else class="text-green-900 font-medium">{{
                    data.status
                  }}</span>
                </template>
              </Column>
              <Column
                field="win_status"
                header="Win Status"
                sortable
                dataType="numeric"
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  <span class="text-green-900 font-medium">{{
                    data.win_status_record
                  }}</span>
                </template>
              </Column>
              <Column
                field="games"
                header="Games"
                sortable
                style="min-width: 8rem"
              >
                <template #body="{data}">
                  <div>
                    <a
                      :href="'#ex_' + data.id"
                      rel="modal:open"
                      class="text-indigo-600 hover:text-indigo-900"
                      ><i class="fas fa-eye"></i
                    ></a>
                    <div :id="'ex_' + data.id" class="modal">
                      <p><full-user-ticket-list :getTickets="data" /></p>
                      <a href="#" rel="modal:close">Close</a>
                    </div>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Call from "../../../../general-service";
import AlertError from "../../../Layouts/AlertError";
import Loader from "../../../Layouts/Loader";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import FullUserTicketList from "../../../Layouts/FullUserTicketList";

export default {
  components: {
    AlertError,
    Loader,
    FullUserTicketList
  },
  mounted() {
    this.loading = false;
  },
  data: () => ({
    isLoading: false,
    name: "",
    loginErrMsg: {
      title: "",
      msg: ""
    },
    code_ticket: "",
    ticket: {
      against: null
    },
    getActiveTab: localStorage.getItem("lactiveTab") || 0,
    customers: null,
    selectedCustomers: null,
    filters: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      "player.username": {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      "status": {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      },
      code: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      formatted_time: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
      }
    },
    loading: true
  }),
  computed: {
    ...mapGetters([
      "getModalVisibility",
      "getAvailableGames",
      "getGameDirects",
      "getGameTime",
      "getGamePoint",
      "getAdminTickets"
    ])
  },
  methods: {
    setActiveTab(val) {
      this.getActiveTab = val;
      localStorage.setItem("lactiveTab", val);
    },
    ...mapMutations([
      "setModalVisibility",
      "setAvailableGames",
      "setGameDirect",
      "setGameTime",
      "setGamePoint",
      "setAdminTickets"
    ]),
    selectGame(id, name) {
      this.ticket = {};
      this.ticket.game_id = id;
      this.name = name;
      Call.getGameDirects(id).then(data => {
        this.setGameDirect(data);
      });
      Call.getGameSlot(id).then(data => {
        this.setGameTime(data);
      });
      Call.getGamePoints().then(data => {
        this.setGamePoint(data);
      });
      createToast("You have selected " + this.name);
    },
    loadAvailableGames() {
      Call.availableGames().then(data => {
        this.setAvailableGames(data);
      });
    },
    loadAllLotteryTickets(date = "") {
      this.isLoading = true;
      (this.loginErrMsg.title = ""), (this.loginErrMsg.msg = "");
      Call.getAgentTickets(date)
        .then(data => {
          this.isLoading = false;
          this.setAdminTickets(data.data.records);
        })
        .catch(() => {
          this.isLoading = false;
          this.loginErrMsg.title = "Request Error";
          this.loginErrMsg.msg =
            "Request error occurred while in communication with server. Please check your fields or contact support.";
        });
    },
    exploreTicketList() {
      if (this.ticket.against) {
        this.loadAllLotteryTickets(this.ticket.against);
      } else {
        this.loadAllLotteryTickets();
      }
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat();
      return "₦ " + formatter.format(value);
    },
    resetDate() {
      this.ticket.against = null;
    }
  }
};
</script>
<style scoped>
::v-deep(.p-paginator) .p-paginator-current {
  margin-left: auto;
}
::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;
}
::v-deep(.p-progressbar) .p-progressbar-value {
  background-color: #607d8b;
}
::v-deep(.p-datepicker) {
  min-width: 25rem;
}
::v-deep(.p-datepicker) td {
  font-weight: 400;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-header {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
}
::v-deep(.p-datatable.p-datatable-customers) .p-paginator {
  padding: 1rem;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-thead > tr > th {
  text-align: left;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-tbody > tr > td {
  cursor: auto;
}
::v-deep(.p-datatable.p-datatable-customers)
  .p-dropdown-label:not(.p-placeholder) {
  text-transform: uppercase;
}
::-webkit-scrollbar {
  height: 1px;
}
</style>
