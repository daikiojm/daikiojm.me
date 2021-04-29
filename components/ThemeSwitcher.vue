<template>
  <div class="theme-switcher">
    <v-tooltip left>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" fab small v-on="on" @click.prevent="switchTheme">
          <v-icon dark>{{ btnIcon }}</v-icon></v-btn
        >
      </template>
      <span>{{ tooltipMsg }}</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ThemeSwitcher',
  setup() {
    const { $vuetify } = useContext();

    const switchTheme = () => {
      if (!$vuetify.theme.dark) {
        $vuetify.theme.dark = true;
      } else {
        $vuetify.theme.dark = false;
      }
    };
    const btnIcon = computed(() => {
      return $vuetify.theme.dark
        ? 'mdi-white-balance-sunny'
        : 'mdi-moon-waning-crescent';
    });
    const tooltipMsg = computed(() => {
      return $vuetify.theme.dark ? 'Light Mode' : 'Dark Mode';
    });

    return {
      btnIcon,
      tooltipMsg,
      switchTheme,
    };
  },
});
</script>
<style scoped lang="scss">
$position: 24px;

.theme-switcher {
  z-index: 999;
  position: absolute;
  top: $position;
  right: $position;
}
</style>
