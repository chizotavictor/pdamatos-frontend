<template>
    <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 shadow-md" role="alert">
        <div class="flex">
            <div class="py-1">
                <i class="fa fa-warning fill-current h-6 w-6 text-red-500 mr-4"></i>
                <!-- <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg> -->
            </div>
            <div>
            <p class="font-bold">{{heading}}</p>
            <p class="text-sm">{{message}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        heading: {
            type: String,
            default: 'Error Occurred'
        },
        message: {
            type: String,
            default: "Something went wrong while processing your request."
        }
    }
}
</script>