<template>
  <div>
    <div
      class="row overflow-y-scroll w-full"
      style="padding:0px;margin:0px;height: 70vh;"
    >
      <div class="flex">
        <div class="flex-grow">
          <br />
          <span
            class="font-bold text-yellow-900"
            style="margin-top: 20px;font-size:17px;"
            >{{ data.game.name }}</span
          >
        </div>
        <div class="flex-grow-0">
          <img src="@/assets/logo.png" style="width: 70px;" alt="" srcset="" />
        </div>
        <div class="flex-grow">
          <span
            class="font-bold"
            style="float: right; font-size:15px;margin-top: 20px;"
            >{{ data.time }}</span
          >
        </div>
      </div>
      <table class="table-auto w-full" style="margin-top: 20px;">
        <tbody>
          <tr>
            <td
              class="border px-4 py-2 text-red-600 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              1st Prize
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="1"
              style="font-size:25px"
            >
              {{ data.first_position }}
            </td>
          </tr>
          <tr>
            <td
              class="border px-4 py-2 text-red-600 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              2nd Prize
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="1"
              style="font-size:25px"
            >
              {{ data.second_position ?? "--" }}
            </td>
          </tr>
          <tr>
            <td
              class="border px-4 py-2 text-red-600 font-medium"
              colspan="3"
              style="font-size:17px"
            >
              3rd Prize
            </td>
            <td
              class="border px-4 py-2 font-bold"
              colspan="1"
              style="font-size:25px"
            >
              {{ data.third_position ?? "--" }}
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full" style="margin-top: 10px;">
        <caption style="background: #515151;color: white">
          4th Prize
        </caption>
        <tbody style="margin-top: 10px;">
          <tr>
            <td
              class="border px-4 py-2 font-medium"
              colspan="4"
              style="font-size:17px; text-align: center"
            >
              {{ data.fourth_position ?? "--" }}
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full" style="margin-top: 10px;">
        <caption style="background: #515151;color: white">
          5th Prize
        </caption>
        <tbody style="margin-top: 10px;">
          <tr>
            <td
              class="border px-4 py-2 font-medium"
              colspan="4"
              style="font-size:17px; text-align: center"
            >
              {{ data.fifth_position ?? "--" }}
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
    data: {
      type: Object,
      default: null
    }
  }
};
</script>
