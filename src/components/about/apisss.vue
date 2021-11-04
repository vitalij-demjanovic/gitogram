<template>
<div>

</div>
</template>

<script>
import * as api from '../../api'

export default {
  name: 'api',
  created () {
    api.trandings.getTrending()
  }
}
</script>
