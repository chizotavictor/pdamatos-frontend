<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-4 p-2 mt-3">
      <div class="inline-block relative w-full md:w-3/5 pr-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Ticket code
        </label>
        <input
          class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10"
        style="margin-top:25px"
      >
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckTicketResult"
};
</script>
