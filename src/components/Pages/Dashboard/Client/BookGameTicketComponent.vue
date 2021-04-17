<template>
    <div class="p-0">
        <Loader :is-visible="isLoading"></Loader>
        <div class="grid grid-cols-3 gap-4 m-0">
            <div class="col-span-3 bg-black" >
                <h2 class="p-3 text-white font-bold">Book Game Ticket</h2>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 lg:gap-4">
            <div class="col-span-3 lg:col-span-2 p-5" style="overflow: hidden;">
                <div class="mb-3">
                    <AlertError v-if="loginErrMsg.title" :heading="loginErrMsg.title" :message="loginErrMsg.msg"/>
                </div>
                <div class="">
                    <button class="bg-green-900 text-white p-2 mb-3" @click="newTicket()">New Ticket</button> 
                    <span class="ml-2">OR</span>
                    <input type="text" name="code" autofocus v-model="code_ticket" class="w-1/2 ml-2 p-2 bg-gray-200 font-mono" placeholder="Check your ticket.">
                    <button class="ml-3 p-1 bg-green-700 text-white" @click="browseTicket()"><i class="fa fa-retweet"></i></button>
                </div>
                <div class="space-y-1" style="margin-top:20px;">
                    <label id="listbox-label" class="block text-x leading-5 font-medium text-gray-700">
                        Select Game: <span v-if="name !== '' || name !== undefined" style="font-weight:bold;">{{name}}</span>
                    </label>
                    <div class="row flex">
                        <article 
                            v-for="(i,k) in getAvailableGames" 
                            :key="k" @click="selectGame(i.id, i.game)" 
                            class="mr-2 overflow-hidden hover:shadow-outline selected:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400"
                            :title="i.game">
                            <a href="#">
                                <img alt="Macau" class="block" style="height:5em" :src="i.image"/>
                            </a>
                        </article>
                        <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.game_id}}</div>
                        <!-- 
                        <article class="mr-2 overflow-hidden opacity-50 rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block cursor-not-allowed" src="@/assets/macau.png">
                            </a>
                        </article> 
                        -->
                    </div>
                </div>

                <div class="w-full">
                    <div class="-mx-3 md:flex mb-6" style="margin-top:20px;">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="" class="block text-x mt-5 font-medium">Select Directs:</label>
                            <select 
                                name="game_direct_id" 
                                @change="validate('game_direct_id')"
                                v-model="ticket.game_direct_id" 
                                class="w-full p-3 bg-gray-200 font-mono">
                                    <option v-if="getGameDirects.length == 0" value="">Not available.</option>
                                    <option v-for="(i,k) in getGameDirects" :key="k" :value="i.id">{{i.digit}}D - (₦{{i.cost}})</option>
                            </select>
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.game_direct_id}}</div>
                        </div>

                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="" class="block text-x mt-5 font-medium">Game Time:</label>
                            <select 
                                name="game_slot_id" 
                                @change="validate('game_slot_id')"
                                v-model="ticket.game_slot_id" 
                                class="w-full p-3 bg-gray-200 font-mono">
                                    <option v-if="getGameTime.length == 0" value="">Not available.</option>
                                    <option v-for="(i,k) in getGameTime" :key="k" :value="i.id">{{i.time}}</option>
                            </select>
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.game_slot_id}}</div>
                        </div>

                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="" class="block text-x mt-5 font-medium">Select Points:</label>
                            <select 
                                name="point_option_id" 
                                @change="validate('point_option_id')"
                                v-model="ticket.point_option_id" 
                                class="w-full p-3 bg-gray-200 font-mono">
                                    <option v-if="getGamePoint.length == 0" value="">Not available.</option>
                                    <option v-for="(i,k) in getGamePoint" :key="k" :value="i.id">{{i.name}}</option>
                            </select>
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.point_option_id}}</div>
                        </div>
                    </div>

                    <div class="-mx-3 md:flex mb-6" style="margin-top:20px;">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="" class="block text-x mt-5 font-medium">Against (Date) <small>yyyy-mm-dd</small>:</label>
                            <input 
                                name="against" 
                                type="date"
                                @change="validate('against')"
                                v-model="ticket.against" 
                                class="w-full p-3 bg-gray-200 font-mono"
                            />
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.against}}</div>
                        </div>

                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="" class=" text-x mt-5 font-medium">Enter Predictions:</label>
                            <input 
                                type="text" 
                                name="number"
                                autocomplete="off"
                                v-model="ticket.number" 
                                @keyup="validate('number')"
                                class="w-full rounded-md ml-0 m-1 p-3 bg-yellow-200 text-yellow-900 border-2 border-gray-700 font-medium text-center font-semibold font-mono" 
                                style="font-size:25px;"/>
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.number}}</div>
                        </div>
                    </div>
                    <div class="row" style="margin-top:30px">
                        <button 
                            type="button"
                            @click="postGameTicket"
                            class="w-full text-center bg-green-500 mb-3 hover:bg-green-700 hover:text-white font-semibold py-2 px-4 border border-green-600 text-white rounded shadow">
                                <i class="fa fa-file-o mr-1"></i> Place Game
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="lg:col-span-1 bg-gray-100">
                    <div class="p-5" id="print-area">
                        <ticket-list :getTickets="getTickets"/>
                    </div>
                </div> 
            </div> 
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Call from '../../../../general-service'
import TicketFormSchema from '../../../../validations/ticket'
import Cookies from 'js-cookie'
import TicketList from '../../../Layouts/TicketList'
import AlertError from '../../../Layouts/AlertError'
import Loader from '../../../Layouts/Loader'
export default {
    components: {
        AlertError,
        Loader,
        TicketList
    },
    mounted() {
        this.loadAvailableGames()
        let lt = Cookies.get('last_ticket');
        if(lt) {
            lt = JSON.parse(lt)
            this.callBrowseTicket(lt.ticket_code)
        }
    },
    
    data: () => ({
        isLoading: false,
        name: '',
        loginErrMsg: {
            title: '',
            msg: ''
        },
        code_ticket: '',
        ticket: {
            game_id: null,
            game_direct_id: null,
            game_slot_id: null,
            game_point_id: null,
            against: null
        },
        errors: {
            game_direct_id: '',
            game_slot_id: '',
            game_point_id: '',
            against: ''
        }
    }),
    computed: {
        ...mapGetters(['getModalVisibility', 'getAvailableGames', 'getGameDirects', 'getGameTime', 'getGamePoint', 'getTickets'])
    },
    methods: {
        ...mapMutations(['setModalVisibility', 'setAvailableGames', 'setGameDirect', 'setGameTime', 'setGamePoint', 'setTickets']),
        ...mapActions(['clearTickets']),
        selectGame(id, name) {
            this.ticket = {}
            this.ticket.game_id = id
            this.name = name
            Call.getGameDirects(id)
                .then((data) => {
                    this.setGameDirect(data)
                })
            Call.getGameSlot(id)
                .then((data) => {
                    this.setGameTime(data)
                })
            Call.getGamePoints()
                .then((data) => {
                    this.setGamePoint(data)
                })
        },
        loadAvailableGames() {
            Call.availableGames()
                .then((data) => {
                    this.setAvailableGames(data)
                })
        },
        postGameTicket() {
            TicketFormSchema
                .validate(this.ticket)
                .then((data) => {
                    let tket = Cookies.getJSON('last_ticket');
                    if(tket === null || tket === undefined || tket === '') {
                        this.isLoading = true
                        Call.createGameTicket(data)
                            .then((data) => {
                                if(data.status === 201) {
                                    this.isLoading = false
                                    const rtick = data.data.result
                                    this.setTickets(rtick)
                                    var tk = {ticket_id: rtick.id, id: rtick.id, ticket_code: rtick.code}
                                    Cookies.set('last_ticket', tk, { expires: 1 });
                                }
                            })
                            .catch(err => {
                                this.isLoading = false
                                this.loginErrMsg['msg'] = err.response.data.message
                            });
                    } else {
                        this.ticket = Object.assign(this.ticket, tket)
                        this.isLoading = true
                        Call.updateGameTicket(this.ticket)
                            .then((data) => {
                                this.isLoading = false
                                const rtick = data.data.result
                                this.setTickets(rtick)
                            })
                            .catch(err => {
                                this.isLoading = false
                                this.loginErrMsg['msg'] = err.response.data.message
                            });
                    }
                    let last_selected_game = this.ticket.game_id
                    this.ticket = {}
                    this.ticket['game_id'] = last_selected_game
                })
                .catch(err => {
                    err.inner.forEach(error => {
                        this.errors = { ...this.errors, [error.path]: error.message };
                    });
                });
        },
        validate(field) {
            TicketFormSchema
                .validateAt(field, this.ticket)
                .then(() => {
                    this.errors[field] = "";
                })
                .catch(err => {
                    this.errors[err.path] = err.message;
                });
        },
        money_format(val = 0.00) {
            const formatter = new Intl.NumberFormat()
            return '₦ ' + formatter.format(val)
        },
        newTicket() {
            Cookies.remove('last_ticket')
            this.clearTickets()
            window.location.reload()
        },
        browseTicket() {
            let code = this.code_ticket
            if(code == '') {
                this.loginErrMsg['title'] = 'Something went wrong'
                this.loginErrMsg['msg'] = 'Please enter your ticket code!'
                return;
            }
            this.loginErrMsg = {}
            this.callBrowseTicket(code)
        },
        callBrowseTicket(code) {
            this.isLoading = true
            Call.getGameTicket(code)
                .then((data) => {
                    this.isLoading = false
                    const rtick = data.data.ticket
                    this.setTickets(rtick)
                    if(rtick) {
                        var tk = {ticket_id: rtick.id, id: rtick.id, ticket_code: rtick.code}
                        Cookies.set('last_ticket', tk, { expires: 1 });
                    }
                })
                .catch(err => {
                    this.isLoading = false
                    if(err.response.status === 404) {
                        this.loginErrMsg['title'] = 'Ticket Not Found'
                        this.loginErrMsg['msg'] = 'The request ticket code is not found the system'
                        return;
                    }
                    this.loginErrMsg['title'] = 'Something Went Wrong'
                    this.loginErrMsg['msg'] = 'Requested operation could not be completed. ('+err.response.data.message+')'
                })
        }
        /*
        printTicket(code){
            this.isLoading = true
            Call.PrintGameTicket(code)
                .then((data) => {
                    this.isLoading = false
                    alert('Receipt printing inititated. Processing ...(' + data.data.status + ')')
                })
                .catch(err => {
                    this.isLoading = false
                    alert("Receipt error occurred. " + err.response.data.message)
                })
        }
        */
    }
}
</script>