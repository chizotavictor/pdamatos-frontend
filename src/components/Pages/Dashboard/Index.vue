<template>
    <div class="bg-gray-100 font-family-karla flex overflow-y-hidden h-screen">
        <aside class="relative bg-sidebar w-64 hidden sm:block shadow-xl h-full">
            <div class="p-6">
                <router-link 
                    tag="a"
                    :to="{name: actionButtonText.routeName }"
                    style="color:green"  
                    class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i :class="actionButtonText.icon"></i> {{actionButtonText.text}}
                </router-link>
            </div>
            <nav class="text-white text-base font-semibold pt-3">
                <router-link 
                        v-for="(i,k) in loadUserMenu.menu" 
                        :key="k" 
                        tag="a"
                        :to="i.routeName"
                        :class="['flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item', ( getActivePage == i.routeName.name ) ? 'active-nav-link' : '']"
                    >
                    <i :class="i.icon"></i>
                    {{i.title}}
                </router-link >

                <!-- <a href="blank.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i class="fas fa-sticky-note mr-3"></i>
                    Blank Page
                </a> -->
            </nav>
        </aside>

        <div class="w-full flex flex-col">
            <!-- Mobile Header & Nav -->
            <header  class="w-full bg-sidebar py-5 px-6 sm:hidden">
                <div class="flex items-center justify-between">
                    <button @click="isOpenS = !isOpenS" class="text-white text-3xl focus:outline-none">
                        <i v-show="!isOpenS" class="fas fa-bars"></i>
                        <i v-show="isOpenS" class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Dropdown Nav -->
                <nav :class="isOpenS ? 'flex': 'hidden'" class="flex flex-col pt-4">
                    <router-link 
                        v-for="(i,k) in loadUserMenu.menu" 
                        :key="k" 
                        tag="a"
                        :to="i.routeName"
                        :class="[ currentPage.includes('dashboard_v1') ? activeClass : '' ,'flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item']"
                    >
                    <i :class="i.icon"></i>
                    {{i.title}}</router-link >
                </nav>
            </header>
        
            <div class="w-full overflow-x-hidden border-t flex flex-col bg-white">
                <main class="w-full flex-grow bg-white p-6">
                    <router-view></router-view>
                </main>    
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    .bg-sidebar { background: linear-gradient(#c09f1b, #e6d9a8); }
    .cta-btn { color: #3d68ff; }
    .upgrade-btn { background: #1947ee; }
    .upgrade-btn:hover { background: #0038fd; }
    .active-nav-link { background: #413f11; }
    .nav-item:hover { background: #413f11; }
    .account-link:hover { background: #3d68ff; }
</style>
<script>
import Call from "../../../general-service"
import { mapGetters, mapMutations } from 'vuex'
export default {
    data: () => ({
        isOpenS: false,
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
                        title: 'Lottery Ticket',
                        routeName: {name: 'lottery_ticket' },
                        icon: 'fas fa-hourglass mr-3'
                    },
                    {
                        title: 'Lottery Result',
                        routeName: {name: 'lottery_results' },
                        icon: 'fas fa-bell mr-3'
                    },
                    {
                        title: 'Users',
                        routeName: {name: 'manage_users' },
                        icon: 'fas fa-users mr-3'
                    },
                    {
                        title: 'Agents',
                        routeName: {name: 'manage_agents' },
                        icon: 'fas fa-users mr-3'
                    }
                ]
            },
            // agent: {
            //     level: 3,
            //     menu: [
            //         {
            //             title: 'Lottery Ticket',
            //             routeName: {name: 'lottery_ticket' }
            //         },
            //         {
            //             title: 'Users',
            //             routeName: {name: 'manage_users' },
            //         }
            //     ]
            // },
            user: {
                level: 1,
                menu: [
                    {
                        title: 'Dashboard',
                        routeName: {name: 'dashboard_v1' },
                        icon: 'fas fa-tachometer-alt mr-3'
                    },
                    {
                        title: 'My Tickets',
                        routeName: {name: "my_tickets" },
                        icon: 'fas fa-file mr-3'
                    },
                    // {
                    //     title: 'Settings',
                    //     routeName: {name: "settings" },
                    //     icon: 'fas fa-cog mr-3'
                    // },        
                ]
            },
            agent: {
                level: 3,
                menu: [
                    {
                        title: 'Dashboard',
                        routeName: {name: 'dashboard_v1' },
                        icon: 'fas fa-tachometer-alt mr-3'
                    },
                    {
                        title: 'Processed Tickets',
                        routeName: "",
                        icon: 'fas fa-file mr-3'
                    },
                ]
            }
        }
    }),
    computed: {
        getActivePage() {
            return this.$route.name
        },
        currentPage() {
            return this.$route.path;
        },
        actionButtonText() {
            let btn = {}
            let role = this.roles[this.getUserAuthLevel]
            switch (role) {
                case 'user':
                    btn = {text: 'Play Lottery', icon: 'fas fa-bookmark mr-3', routeName: 'play_games'}
                    break;

                case 'agent':
                    btn = {text: 'Play Lottery', icon: 'fas fa-bookmark mr-3', routeName: 'lottery_ticket'}
                    break;
            
                default:
                    break;
            }
            return btn
        },
        loadUserMenu() {
            let role = this.roles[this.getUserAuthLevel]
            return this.menu[role] || [];
        },
        ...mapGetters(['getUserAuthLevel', 'getTicketsLength', 'getUserName', 'getGlobalLoadingStatus', 'isUserLoggedIn'])
    },
    methods: {
        ...mapMutations(['setModalVisibility', 'setGlobalLoadingStatus']),
        actionButton() {
            let role = this.roles[this.getUserAuthLevel]
            console.log(role)
        },
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
        }
    }
}
</script>
