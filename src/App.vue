<template>
  <Secondary />
  <Primary />
</template>

<script>
import Secondary from './components/fixedComponents/Second';
import Primary from './components/fixedComponents/Primary';

export default {
  name: 'App',
  components: {
    Primary, Secondary
  }
}
</script>
