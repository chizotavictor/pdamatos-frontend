<template>
    <div>
        <Loader :is-visible="getGlobalLoadingStatus"></Loader>
        <Navbar/>
        <router-view></router-view>
         <modal v-if="getModalVisibility" @close="setModalVisibility(false)">
            <template v-slot:header>Ticket </template>
            <template v-slot:body>
                <ticket-list :getTickets="getTickets"/>
            </template>
        </modal>
        <!-- <footer class="w-full bg-black text-center text-white text-xs border-t border-black p-4">
            P-Damatos Copyright 2020  
        </footer> -->
    </div>
</template>
<script type="text/babel">
import { mapGetters, mapMutations}  from "vuex"
import TicketList from "./TicketList"
import Navbar from './Navbar';
import Loader from './Loader'
export default {
  components: {
    Navbar,
    TicketList,
    Loader,
  },
  data: () => ({
    isVisible: false
  }),
  computed: {
    ...mapGetters(['getModalVisibility', 'getTickets', 'getGlobalLoadingStatus'])
  },
  methods: {
    ...mapMutations(['setModalVisibility']) 
  }
}
</script>