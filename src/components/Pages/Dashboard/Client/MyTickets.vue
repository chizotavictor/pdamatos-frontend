<template>
  <div class="p-0 ">
    <div class="grid grid-cols-3 gap-1 m-0">
      <div class="col-span-3">
          <h1 class="text-3xl text-black pb-1">Ticket List</h1>
      </div>
    </div>
    <div class="row">
      <div class="flex flex-col w-4/4 mx-auto flex p-0 rounded-lg mt-10">
          <div class="-my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Ticket Code
                      </label>
                      <input autofocus class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Type ticket code...">
                     </div>

                    <div class="inline-block relative w-full md:w-1/4 px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Payment Status
                      </label>
                      <select v-model="p_status" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option></option>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 mt-5 mr-5 right-0 flex items-center px-2 text-black">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>

                    <div class="inline-block relative w-full md:w-1/4 px-3" v-if="p_status=='Paid'">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Win Status
                      </label>
                      <select class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option></option>
                        <option>Win</option>
                        <option>Lost</option>
                      </select>
                      <div class="pointer-events-none absolute mt-5 mr-5 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                    <button @click="loadUserTickets" class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10" style="margin-top:25px">
                      <i class="fas fa-search"></i> Search
                    </button>
                  </div>

                  <div v-if="data"  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-gray-100">
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
                                  P. Win
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Result
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  When
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Status
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Approved By
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                              <tr v-for="(i,k) in getBatch" :key="k">
                                  <td class="px-2 py-4 whitespace-nowrap">
                                      <div class="flex items-center">
                                          <div class="flex-shrink-0 h-10 w-10">
                                              <img class="h-10 w-10 rounded-full" src="@/assets/logo.png" alt="">
                                          </div>
                                          <div class="ml-4">
                                              <div class="text-sm font-medium text-gray-900">
                                              {{i.code}}
                                              </div>
                                           </div>
                                      </div>
                                  </td>
                                  <td class="px-2 py-4 whitespace-nowrap"><span class="text-xs font-semibold px-3 bg-green-200 text-green-800 rounded-full whitespace-nowrap">₦ {{new Intl.NumberFormat().format(i.cost)}}</span></td>
                                  <td class="px-2 py-4 whitespace-nowrap"><span class="text-xs font-semibold px-3 bg-teal-200 text-teal-800 rounded-full"> ₦ {{new Intl.NumberFormat().format(i.potential_win) }}</span></td>
                                  <td class="px-1 py-4 whitespace-nowrap">
                                      <!-- <div class="text-gray-900 inline-flex font-semibold rounded-full px-1 bg-red-300" style="font-size:12px">Lost</div> -->
                                      <div class="text-gray-900 inline-flex font-semibold rounded-full px-1 bg-green-300" style="font-size:12px">Win</div>
                                  </td>
                                  <td class="px-3 py-4 whitespace-nowrap">
                                      <div class=" text-gray-900" style="font-size:12px">{{i.initiated_date}}, {{i.initiated_time}}</div>
                                  </td>
                               
                                  <td class="px-3 py-4 whitespace-nowrap">
                                      <span v-if="i.status === 'Pending'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-500">
                                      {{i.status}}
                                      </span>
                                      <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      {{i.status}}
                                      </span>
                                  </td>
                                  <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                      <span v-text="(i.approved_by_id == null) ? 'None' : i.auditor.first_name + ' ' + i.auditor.last_name" ></span>
                                  </td>
                                  <td class="px-3 py-4 whitespace-nowrap text-left text-sm font-medium">
                                      <a :href="'#ex_' + i.id" rel="modal:open" class="text-indigo-600 hover:text-indigo-900"><i class="fas fa-eye"></i></a>
                                  </td>
                                  <div :id="'ex_' + i.id" class="modal">
                                      <p><user-ticket-list :getTickets="i"/></p>
                                      <a href="#" rel="modal:close">Close</a>
                                  </div>
                              </tr>

                              <!-- More rows... -->
                          </tbody>
                      </table>
                  </div>
                  <div v-else class="grid grid-cols-1 place-items-center mt-20 h-60">
                     <img src="@/assets/inbox.png" class=" h-40">
                     <h4 class="text-green-700 font-semibold text-center text-xl">No record return!<br>Please click on the search button to list all records.</h4>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Call from '../../../../general-service'
import { mapMutations, mapGetters } from 'vuex'
import UserTicketList from '../../../Layouts/UserTicketList'
export default {
  components: {
      UserTicketList
  },
  mounted() {
      // this.getUserTickets();  
  },
  data: () => ({
      
      data: false,
      p_status: '',
      t_code: '',
      w_status: ''
  }),
  computed: {
    ...mapGetters(['getBatch', 'getUserName']),
    displayedTickets () {
      return this.paginate(this.getBatch);
    }
  },
  methods: {
    ...mapMutations(['setBatch', 'setGlobalLoadingStatus']),
    loadUserTickets() {
      let query = 'paginate=15&status='+this.p_status+'&ticket_code='+this.t_code+'&win_status='+this.w_status
      this.setGlobalLoadingStatus(true)
        Call.getUserTicketList(query)
            .then((data) => {
                this.data = true
                this.setGlobalLoadingStatus(false)
                this.setBatch(data.data.games)
            })
            .catch(err => {
                console.log(err)
                this.setGlobalLoadingStatus(false)
            })
    },
    setPages () {
      let numberOfPages = Math.ceil(this.getBatch.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (batch) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  batch.slice(from, to);
    }
  }
}
</script>
