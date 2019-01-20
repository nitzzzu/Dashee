<template>
  <div
    class="fixed pin grid gap-spacing w-screen h-screen p-spacing font-normal leading-normal text-default bg-screen"
    :class="mode"
  >
    <slot></slot>
  </div>
</template>

<script>
import saveState from 'vue-save-state';

export default {
    mixins: [saveState],

    data() {
        return {
            mode: 'light-mode'
        };
    },

    methods: {
        getEventHandlers() {
            return {
                'Dashboard.UpdateAppearance': response => {
                    this.mode = response.mode;
                }
            };
        },

        getSaveStateConfig() {
            return {
                cacheKey: `dashboard`
            };
        }
    }
};
</script>
