<template>
	<div id="vallet">
		<com-header
			:title='navaInfo.navaTitle'
			:is-have-jump='navaInfo.haveJump'
			:right-link='navaInfo.rightLink'
			:link-text='navaInfo.rightLink'
			></com-header>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Header from '../components/Header'
export default {
  data () {
    return {
    };
  },
  computed: {
	...mapState('rechargeData',[
		'navaInfo'
  	])
  },
  mounted:function(){},
  methods: {
	...mapActions('rechargeData',[
		'updateNavaInfoBy'
	]),
  },
  components: {
	  'com-header': Header
  }
}

</script>
<style scoped>
</style>