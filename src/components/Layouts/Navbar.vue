<template>
    <header class="bg-gray-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <a href="/">
                <img class="h-8" src="@/assets/logo.png" alt="Workcation">
            </a>
            <div>
                <a href="/" class="text-yellow-200 font-bold ml-2 text-2xl">P-DAMATOS</a>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-1 pb-4 sm:flex mt-1 sm:p-0">
            
            <!-- <router-link 
                v-for="(i,k) in loadUserMenu.menu" 
                :key="k" 
                tag="a"
                :to="i.routeName"
                :class="[ currentPage.includes('dashboard_v1') ? activeClass : '' ,'mt-1 block px-2 py-1 pt-2 text-white font-semibold rounded hover:text-yellow-400 sm:mt-0 sm:ml-2']"
            >{{i.title}}</router-link > -->
            <!-- End of Differential Navbar -->

            <router-link 
                v-if="isUserLoggedIn" 
                tag="a" 
                :to="{name: getAccountPlayBoard}" 
                :class="[ currentPage.includes('results') ? activeClass : '' , 'mt-1 block px-2 py-1 pt-2 text-white font-semibold rounded hover:text-yellow-400 sm:mt-0 sm:ml-2']"
            >Play</router-link>
            <router-link 
                tag="a" 
                :to="{name: 'results'}" 
                :class="[ currentPage.includes('results') ? activeClass : '' ,'mt-1 block px-2 py-1 pt-2 text-white font-semibold rounded hover:text-yellow-400 sm:mt-0 sm:ml-2']"
            >Results</router-link>
            <a 
                href="#" @click="showTicketModal()"
                class="mt-1 block px-2 py-1 pt-2 text-white font-semibold rounded hover:text-yellow-400 sm:mt-0 sm:ml-2 text-green-300"
            ><i class="fa fa-calendar mr-1"></i><sup>{{getTicketsLength}}</sup></a>
        
            <!-- <router-link 
                v-if="isUserLoggedIn" 
                tag="a" 
                :to="{name: 'settings'}" 
                class="hover:cursor-pointer mt-1 block px-2 py-1 pt-2 text-white font-semibold rounded text-yellow-400 sm:mt-0 sm:ml-2 hover:text-red-300"
            ><i class="fa fa-gear"></i> Settings</router-link> -->
           
            <div class="relative  flex justify-end">
                <button v-if="isUserLoggedIn" @click="isOpenS = !isOpenS" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="@/assets/avatar.png">
                </button>
                <button v-show="isOpenS" @click="isOpenS = false" class="h-full w-full fixed inset-0 cursor-default"></button>
                <div v-show="isOpenS" class="absolute w-40 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="javascript:void()" @click="redirect2Dashboard()" class="block px-4 py-2 account-link hover:text-green-500"><i class="fa fa-desktop"></i> Dashboard</a>
                    <!-- <a href="#" class="block px-4 py-2 account-link hover:text-green-500"><i class="fa fa-question-cirle"></i> Support</a> -->
                    <a href="javascript:void()" @click="logoutUserAction()" class="block px-4 py-2 account-link hover:text-green-500"><i class="fa fa-power-off"></i> Sign Out</a>
                </div>
            </div>

            <router-link 
                v-if="isUserLoggedIn == false" 
                tag="a" 
                :to="{name: 'register'}" 
                class="mt-3 block px-2 py-1 bg-yellow-300 mb-3 hover:bg-gray-100 hover:text-yellow-500 font-semibold border border-yellow-200 rounded shadow font-semibold rounded hover:text-white sm:mt-0 sm:ml-2"
            >Create account</router-link>
            <router-link 
                v-if="isUserLoggedIn == false" 
                tag="a" 
                to="/login" 
                class="mt-1 block px-2 py-1 pt-2 text-yellow-500 font-semibold rounded hover:text-yellow-400 sm:mt-0 sm:ml-2"
            ><i class="fa fa-lock"></i> Sign In</router-link>
        </nav>  
    </header>
</template>
<script>
import Call from '../../general-service'
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            isOpenS: false,
            isOpen: false,
            activeClass: 'text-yellow-500',
            roles: {
                1: 'user',
                2: 'cashier',
                3: 'agent',
                4: 'admin'
            },
            menu: {
                admin: {
                    level: 4,
                    menu: [
                        {
                            title: 'Dashboard',
                            routeName: {name: 'lottery_ticket' }
                        },
                        {
                            title: 'Lottery Result',
                            routeName: {name: 'lottery_results' }
                        },
                        {
                            title: 'Users',
                            routeName: {name: 'manage_users' },
                        },
                        {
                            title: 'Agents',
                            routeName: {name: 'manage_agents' },
                        }
                    ]
                },
                agent: {
                    level: 3,
                    menu: [
                        {
                            title: 'Lottery Ticket',
                            routeName: {name: 'lottery_ticket' }
                        }
                    ]
                },
                user: {
                    level: 1,
                    menu: [
                        {
                            title: 'Play Game',
                            routeName: {name: 'play_games' }
                        },
                        {
                            title: 'My Tickets',
                            routeName: {name: 'dashboard_v1' }
                        }
                    ]
                }
            },
            lottery_board: {
                'admin': 'lottery_ticket',
                'agent': 'lottery_ticket',
                'user': 'play_games',
                'guest': 'play_games'
            }
        }
    },
    computed: {
        currentPage() {
            return this.$route.path;
        },
        loadUserMenu() {
            let role = this.roles[this.getUserAuthLevel]
            return this.menu[role] || [];
        },
        ...mapGetters(['getUserAuthLevel', 'getTicketsLength', 'getUserName', 'getGlobalLoadingStatus', 'isUserLoggedIn']),
        getAccountPlayBoard() {
            let role = this.roles[this.getUserAuthLevel]
            return this.lottery_board[role]
        }
    },
    methods: {
        ...mapMutations(['setModalVisibility', 'setGlobalLoadingStatus']),
        showTicketModal() {
            this.setModalVisibility(true)
        },
        logoutUserAction() {
            this.setGlobalLoadingStatus(true)
            Call.logoutUser()
                .then(() => {
                    this.setGlobalLoadingStatus(false)
                    this.$router.push({name: 'login'})
                })
                .catch(err => {
                    this.setGlobalLoadingStatus(false)
                    console.log(err)
                })
        },
        redirect2Dashboard() {
            var prop = localStorage.getItem('_prop')
            prop = JSON.parse(prop)
            // console.log(prop)
            if(prop.level) 
            {
                var level = prop.level
                switch (level) {
                    case "4":
                        this.$router.push({name: "dashboard_v1"})        
                        break;
                    case "3":
                        this.$router.push({name: "dashboard_v1"})
                        break;
                    default:
                        break;
                }
            } else {
                /**
                 * For User Account
                 */
                this.$router.push({name: "dashboard_v1"}) 
            }
        }
    }
}
</script>