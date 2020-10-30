<template>
    <div>
        <button type="button" class="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-yellow-700 hover:text-yellow-600 bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-yellow-700 transition duration-150 ease-in-out" disabled>
            <!-- <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg> -->
            <i class="fa fa-circle animate-spin mr-3 mt-2 h-1"></i>
            {{message}}
        </button>
    </div>
</template>
<script>
export default {
    // name: 'button-loading',
    props: {
        message: {
            type: String,
            default: 'Processing ...'
        }
    }
}
</script>