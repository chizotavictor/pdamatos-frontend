<template>
    <div>
        <div class="ticket" style="margin-left:20px;margin-top:10px;">
            <center><img src="@/assets/logo.png" style="width:100px;" alt="Logo"></center>
            <p class="centered"><span style="font-size:24px;">P-DAMATOS</span>
                <br>Code: {{result.code}}
                <br>Agent: {{result.auditor.first_name}} {{result.auditor.last_name}}</p>
            <table>
                <thead>
                    <tr v-for="(i,k) in result.ticketgame" :key="k">
                        <th class="description" colspan="4">
                            <span>Game: </span> {{i.game.name}} ({{i.slot.time}}) - #{{i.cost}}<br>
                            <span>Direct: </span> {{i.direct.digit}}D, Point: {{i.ptoption.name}} <br>
                            <span>Prediction: </span> {{i.number}}<br>
                            <span>Against (Date): </span> {{i.against}}<br>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="description">
                            <br>
                            <span style="font-weight: bold">Stake: </span> ₦ {{new Intl.NumberFormat().format(result.cost)}} <br>
                            <span style="font-weight: bold">Pot. Win:</span> ₦ {{new Intl.NumberFormat().format(result.potential_win)}}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="centered" style="margin-top:20px;">**CUSTOMER COPY**
                <br>www.pdamatos.ltd</p>

            <br>
            <center><button id="btnPrint" class="hidden-print centered" style="text-decoration:underline">Print</button></center>
        </div>
        <center></center>
    </div>
</template>

<script>
import Call from "../../general-service";
export default {
    created() {
        let code = this.$route.params.code;
        Call.PrintGameTicketReport(code)
            .then((data) => {
                this.result = data.data.records
            })
            .catch(() => {
                alert('Error occured while printing document. Please try again or contact support!')

            })
    },
    mounted() {
        const $btnPrint = document.querySelector("#btnPrint");
        $btnPrint.addEventListener("click", () => {
            window.print();
        });
    },
    data: () => ({
        code: '',
        result: {}
    })
}
</script>

<style scoped>

@media print {
  body {
    width: 230px; /*width of index card*/
    height: auto; /*height of index card*/
  }
  /* etc */
}

* {
    font-size: 12px;
    font-family: 'courier';
}

td,
th,
tr,
table {
    border-top: 1px solid black;
    border-collapse: collapse;
}

td.description,
th.description {
    width: 225px;
    text-align: left;
    /* max-width: 75px; */
}

td.quantity,
th.quantity {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

td.price,
th.price {
    width: 40px;
    max-width: 40px;
    word-break: break-all;
}

.centered {
    text-align: center;
    align-content: center;
}

.ticket {
    width: 155px;
    max-width: 155px;
}

img {
    max-width: inherit;
    width: inherit;
}

@media print {
    .hidden-print,
    .hidden-print * {
        display: none !important;
    }
}
</style>