<template>
  <tile :position="position" no-fade>
    <div class="grid gap-2 justify-items-center h-full" style="grid-template-rows: auto 1fr auto;">
      <div class="markup">
        <h1>{{ message }}</h1>
      </div>
    </div>
  </tile>
</template>

<script>
import Tile from './atoms/Tile';

export default {
    props: {
        position: {
            type: String
        }
    },
    components: {
        Tile
    },
    sockets: {
        'dashboard.message': function(data) {
            this.message = data.message;
        }
    },
    data() {
        return {
            message: ''
        };
    },
    created() {
        this.message = '';
    },

    methods: {}
};
</script>
