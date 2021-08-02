<template>
    <div class="p-0">
        <div class="grid grid-cols-3 gap-1 m-0">
            <div class="col-span-3">
                <h1 class="text-3xl text-black pb-6">Hey, <span class="text-green-600">{{getUserName}}!</span></h1>
            </div>
        </div>
        
        <div class="row">
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                >
                  <img src="@/assets/ticket.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total Tickets
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.total_tickets}}
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                >
                  <img src="@/assets/ticket.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Paid Tickets
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.paid_tickets}}
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                >
                  <img src="@/assets/ticket.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Unpaid Tickets
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.unpaid_tickets}}
                  </p>
                </div>
              </div>
             
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                >
                  <img src="@/assets/lost.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Lost Games
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.total_loses}}
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div class="row">
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                >
                  <img src="@/assets/won.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total Wins
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.total_wins}}
                  </p>
                </div>
              </div>
              <!-- Card -->
              <!-- <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                >
                  <img src="@/assets/balance.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total <b>Win Pay-offs</b>
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    ₦ {{captions.win_balance}}
                  </p>
                </div>
              </div> -->
              <!-- Card -->
              <!-- <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                >
                  <img src="@/assets/balance.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total <b>Losses Pay-offs</b>
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    ₦ {{captions.lost_balance}}
                  </p>
                </div>
              </div> -->
              <!-- Card -->
              <!-- <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                >
                  <img src="@/assets/lost.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Total <b class="text-green-500">Revenue</b>
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    ₦ {{captions.revenue}}
                  </p>
                </div>
              </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import Call from '../../../../general-service'
import { mapMutations, mapGetters } from 'vuex'
export default {
    components: {
    },
    mounted() {
        this.loadAnalytics()
    },
    data: () => ({
      captions: {
        total_tickets: 0,
        paid_tickets: 0,
        unpaid_tickets: 0,
        total_wins: 0,
        total_loses: 0
      }
    }),
    computed: {
      ...mapGetters(['getUserName'])
    },
    methods: {
      ...mapMutations([ 'setGlobalLoadingStatus']),
      loadAnalytics() {
        Call.getAgentDashboardAnalytics()
        .then((data) => {
          this.captions = data.data
        })
      }
    }
}
</script>