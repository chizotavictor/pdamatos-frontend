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
                  class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
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
                  class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                >
                  <img src="@/assets/balance.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Win Balance Account
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    ₦ {{captions.win_balance_account}}
                  </p>
                </div>
              </div>
              <!-- Card -->
              <div
                class="flex items-center shadow-lg p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
              >
                <div
                  class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                >
                  <img src="@/assets/won.png" class="w-8">
                </div>
                <div>
                  <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    Won Games
                  </p>
                  <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                  >
                    {{captions.won_games}}
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
                    {{captions.lost_games}}
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div v-if="current_games"  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-gray-100">
                      <h2 class="py-2 px-4 font-semibold text-lg">Current Game Tickets</h2>
                      <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Ticket
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Stack
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Prediction
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Against
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Is Result Out?
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                              <tr v-for="(i,k) in current_games" :key="k" :style="(i.status == 'Paid') ? 'background: #FFD700': ''">
                                  <td class="px-2 py-4 whitespace-nowrap">
                                      <div class="flex items-center">
                                          <div class="flex-shrink-0 h-10 w-10">
                                              <img class="h-10 w-10 rounded-full" src="@/assets/logo.png" alt="">
                                          </div>
                                          <div class="ml-4">
                                              <div class="text-sm font-medium text-gray-900">
                                              {{i.ticket.code}} / <span class="text-red-800">{{i.game.name}}</span>
                                              </div>
                                           </div>
                                      </div>
                                  </td>
                                  <td class="px-2 py-4 whitespace-nowrap"><span class="text-sm font-semibold px-3  text-green-800  whitespace-nowrap">₦ {{new Intl.NumberFormat().format(i.cost)}}</span></td>
                                  <td class="px-2 py-4 whitespace-nowrap"><span class="text-sm font-semibold px-3  text-teal-800 ">{{i.number }}</span></td>
                                  <td class="px-3 py-4 whitespace-nowrap">
                                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-green-500">
                                      {{i.against}} ({{i.slot.time}})
                                      </span>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                      <span v-text="(i.is_result_ready == 0) ? 'No' : 'Yes'" class="font-semibold"></span>
                                  </td>
                              </tr>
                              <!-- More rows... -->
                          </tbody>
                      </table>
                  </div>
                  <div v-else class="grid grid-cols-1 place-items-center mt-20 h-60">
                     <img src="@/assets/inbox.png" class=" h-40">
                     <h4 class="text-green-700 font-semibold text-center text-xl">No record found.</h4>
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
      this.loadCurrentTicket()
    },
    data: () => ({
      captions: {
        total_tickets: 0,
        win_balance_account: 0.00,
        won_games: 0,
        lost_games: 0
      },
      current_games: []
    }),
    computed: {
      ...mapGetters(['getUserName'])
    },
    methods: {
      ...mapMutations([ 'setGlobalLoadingStatus']),
      loadAnalytics() {
        Call.getUserDashboardAnalytics()
        .then((data) => {
          this.captions['total_tickets'] = data.data.all_tickets
          this.captions['won_games'] = data.data.won_games
          this.captions['lost_games'] = data.data.lost_games
          this.captions['win_balance_account'] = data.data.win_balance_account
        })
      },
      loadCurrentTicket() {
        Call.getUserDashboardCurrentTickets()
        .then((data) => {
          this.current_games = data.data.games
        })
      }
    }
}
</script>