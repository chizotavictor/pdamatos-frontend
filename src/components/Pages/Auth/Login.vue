<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-yellow-200">
            <div class="max-w-md w-full">
                <div>
                    <a href="/">
                        <img class="mx-auto h-24 w-auto" src="@/assets/logo.png" alt="P-Damatos">
                    </a>
                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm leading-5 text-gray-600">
                    Or
                    <router-link tag="a" :to="{name: 'register'}" class="font-medium text-yellow-800 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Create a new account
                    </router-link>
                </p>
                </div>
                <div class="mt-10">
                    <AlertError v-if="loginErrMsg" :heading="loginErrMsg.title" :message="loginErrMsg.msg"/>
                </div>
                <form class="mt-8" >
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm">
                        <div>
                            <input 
                                aria-label="Username" 
                                name="username" 
                                type="text"  
                                v-model="login.username"
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Username" 
                                @keyup="validate('username')" />
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.username}}</div>
                        </div>
                        <div class="-mt-px">
                            <input 
                                aria-label="Password" 
                                name="password" 
                                type="password" 
                                v-model="login.password" 
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" 
                                placeholder="Password" 
                                @keyup="validate('password')" />
                            <div class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.password}}</div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                        <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                            Remember me
                        </label>
                        </div>

                        <div class="text-sm leading-5">
                        <router-link tag="a" :to="{name: 'password_reset'}" class="font-medium text-yellow-900 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            Forgot your password?
                        </router-link>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="button" v-if="!isLoading" @click="loginUser" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:text-yellow-600 bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                        </button>
                        <button-loading v-if="isLoading"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore, mapGetters, mapMutations } from 'vuex'
import Call from '../../../general-service'
import loginFormSchema from '../../../validations/login'
import ButtonLoading from '../../Layouts/ButtonLoading';
import AlertError from '../../Layouts/AlertError';

export default {
  components: {
    ButtonLoading,
    AlertError
  },
  data () {
    return {
        login: {
            username: '',
            password: ''
        },
        errors: {
            username: '',
            password: '',
            message: ''
        },
        isLoading: false,
        loginErrMsg: null
    }
  },
  setup() {
    const store = useStore()
    return {
        store
    }
  },
  computed: {
    ...mapGetters(['loginErrorResponse'])
  },
  methods: { 
    ...mapMutations(['setAuthKey', 'setAuth']),
    loginUser() {
      loginFormSchema
        .validate(this.login)
        .then((data) => {
            this.isLoading = true
            Call.login(data)
                .then((data) => {
                    this.isLoading = false
                    this.loginErrMsg = null
                    this.setAuthKey(data.data.access_token)
                    let user = data.data.user
                    let prop = {id:user.id, username: user.username};
                    if(user.level != "1") { prop['level'] = user.level, this.setAuth(JSON.stringify(prop)) }
                    else { this.setAuth(JSON.stringify(prop)) }
                    let r 
                    const level = Number.parseInt(user.level);
                    if(level === 1) {
                        r = this.$router.resolve({name: 'play_games'})
                        window.location.assign(r.href)
                    } else {
                        // r = this.$router.resolve({name: 'play_games'})
                        r = this.$router.resolve({name: 'lottery_ticket'})
                        window.location.assign(r.href)
                    }                    
                })
                .catch(err => {
                    this.isLoading = false
                    const errData = err.response 
                    if(errData.status) {
                        if(errData.status === 422) 
                        this.loginErrMsg = { title: 'Authentication Error',
                            msg: 'Incorrect login details. Please try again.'}
                    }
                })
        })
        .catch(err => {
          err.inner.forEach(error => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
    },
    validate(field) {
      loginFormSchema
        .validateAt(field, this.login)
        .then(() => {
          this.errors[field] = "";
        })
        .catch(err => {
          this.errors[err.path] = err.message;
        });
    }
  }
}
</script>