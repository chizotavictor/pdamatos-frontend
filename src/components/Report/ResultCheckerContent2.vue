<template>
    <div>
    <div
      class="row overflow-y-scroll w-full"
      style="padding:0px;margin:0px;"
    >

      <table class="table-auto w-full" style="margin-top: 20px;">
        <tbody>
          <tr>
            <td
              class="border px-4 py-2 text-gray-900 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Tickets
            </td>
            <td
              class="border px-4 py-2 text-gray-900 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Stake
            </td>
            <td
              class="border px-4 py-2 text-gray-900 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Position
            </td>
            <td
              class="border px-4 py-2 text-gray-900 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Is Result Ready?.
            </td>
            <td
              class="border px-4 py-2 text-gray-900 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Order cashout
            </td>
          </tr>
          <tr v-for="(i, k) in data" :key="k">
            <td
              class="border px-4 py-2 text-red-800 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              {{i.ticket.ticket_code}} // {{i.ticket.number}}
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="3"
              style="font-size:25px"
            >
              ₦ {{new Intl.NumberFormat().format(i.ticket.cost) }}
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="2"
              style="font-size:25px"
            >
              {{i.position}}
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="3"
              style="font-size:25px"
            >
              {{i.is_result_ready }}
            </td>
            <td
              class="border px-4 py-2 text-green-800 font-bold"
              colspan="8"
              style="font-size:17px"
            >
              {{ (paid_off) ? "yes" : "No" }} <small class="text-yellow-700"><a href="#"><i class="fas fa-coins"></i> Process Cashout</a></small>
            </td>
          </tr>
          <tr>
            <td
              class="border px-4 py-2 text-red-600 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Stack
            </td>
            <td
              class="border px-4 py-2 text-red-600 font-bold"
              colspan="8"
              style="font-size:17px"
            >
              ₦ {{new Intl.NumberFormat().format(stake)}}
            </td>
          </tr>
          <tr>
            <td
              class="border px-4 py-2 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Cash Out
            </td>
            <td
              class="border px-4 py-2  font-bold"
              colspan="8"
              style="font-size:17px"
            >
              ₦ {{new Intl.NumberFormat().format(cashout)}}
            </td>
          </tr>
          <tr>
            <td
              class="border px-4 py-2 text-green-800 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              Balance
            </td>
            <td
              class="border px-4 py-2 text-green-800 font-bold"
              colspan="8"
              style="font-size:17px"
            >
              ₦ {{new Intl.NumberFormat().format(balance)}}
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>
<script>
export default {
    props: {
        data: null,
        stake: null,
        potential_win: null,
        balance: null,
        cashout: null
    }
}
</script>