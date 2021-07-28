<template>
  <div class="p-0">
    <div class="grid grid-cols-3 gap-4 m-0">
      <div class="col-span-3">
        <h1 class="text-gray-800 text-xl font-medium">Lottery Result</h1>
      </div>
    </div>
    <did class="row">
      <div class="bg-gray-100 mt-10">
        <nav class="tabs flex flex-col sm:flex-row">
          <button
            data-target="panel-1"
            @click="setActiveTab(0)"
            :class="[
              'tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ',
              getActiveTab == 0
                ? 'active text-blue-500 border-b-2 font-medium border-blue-500'
                : ''
            ]"
          >
            Record Result
          </button>
          <button
            data-target="panel-2"
            @click="setActiveTab(1)"
            :class="[
              'tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ',
              getActiveTab == 1
                ? 'active text-blue-500 border-b-2 font-medium border-blue-500'
                : ''
            ]"
          >
            Browse Lottery Result
          </button>
          <button
            data-target="panel-3"
            @click="setActiveTab(2)"
            :class="[
              'tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ',
              getActiveTab == 2
                ? 'active text-blue-500 border-b-2 font-medium border-blue-500'
                : ''
            ]"
          >
            Check Ticket W. Status
          </button>
          <button
            data-target="panel-4"
            @click="setActiveTab(3)"
            :class="[
              'tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ',
              getActiveTab == 3
                ? 'active text-blue-500 border-b-2 font-medium border-blue-500'
                : ''
            ]"
          >
            Lottery Cashout
          </button>
        </nav>
      </div>
    </did>

    <div id="panels">
      <div class="panel-1 tab-content active py-5">
        <record-ticket-result />
      </div>
      <div class="panel-2 tab-content py-5">
        <browse-ticket-result />
      </div>
      <div class="panel-3 tab-content">
        <check-ticket-result />
      </div>
      <div class="panel-4 tab-content">
        <cashout />
      </div>
    </div>
  </div>
</template>
<script>
import RecordTicketResult from "../../../Forms/RecordTicketResult.vue";
import BrowseTicketResult from "../../../Report/BrowseTicketResult.vue";
import CheckTicketResult from "../../../Report/CheckTicketResult.vue";
import Cashout from "../../../Report/Cashout.vue";
export default {
  components: {
    RecordTicketResult,
    BrowseTicketResult,
    CheckTicketResult,
    Cashout
  },
  mounted() {
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".tab-content");
    function onTabClick(event) {
      // deactivate existing active tabs and panel
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
      }

      for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
      }
      // activate new tabs and panel
      event.target.classList.add("active");
      let classString = event.target.getAttribute("data-target");
      document
        .getElementById("panels")
        .getElementsByClassName(classString)[0]
        .classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", onTabClick, false);
    }
    this.getActiveTab = 0;
    localStorage.setItem("lactiveTab", 0);
  },
  data: () => ({
    isLoading: false,
    getActiveTab: localStorage.getItem("lactiveTab") || 0
  }),
  methods: {
    setActiveTab(val) {
      this.getActiveTab = val;
      localStorage.setItem("lactiveTab", val);
    },
    formatDate(value) {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    },
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }
  }
};
</script>
<style scoped>
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
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
</style>
