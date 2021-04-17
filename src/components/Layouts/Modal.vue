<template>
    <div>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" style="background:#f8c436;padding:10px;text-align:center;font-weight:bold">
                <slot name="header">
                  Header
                </slot>
                <span class="pull-right" style="font-weight:bold;cursor:pointer" @click="$emit('close')">X</span>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <!-- <div class="modal-footer" style="padding:10px;">
                <slot name="footer">
                  <button class="modal-default-button"  @click="$emit('close')">
                    CLOSE
                  </button>
                </slot>
              </div> -->
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
export default {
    name: 'modal',
    methods: {
        closeModal() {
            this.$showTicketModal = false
        }
    }
}
</script>
<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(215, 218, 38, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #4A5568;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
    padding:10px;
  margin: 20px 0;
  color:white;
  height: 25%;
}

.modal-default-button {
  float: right;
  background: #E9E557;
  padding:4px;
  font-weight:bold;
  font-size: 14px;
  position:absolute;
  bottom:15px;
  width:100px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>