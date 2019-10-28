<template>
  <div>
    <lunbo></lunbo>
    <p>我是{{}}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import lunbo from './lunbo'
export default {
  name: 'detail',
  created() {
    const id = this.$route.params.id
    console.log(id)
    this.loadData(id)
    console.log(this.list)
  },
  methods: {
    ...mapActions('detail', ['loadData'])
  },
  computed: {
    ...mapState('detail', ['list'])
  },
  components: { lunbo }
}
</script>