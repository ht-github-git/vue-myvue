<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input v-model="heroObj.heroName" type="text" class="form-control"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input v-model="heroObj.gender" name='sex' type="radio" value="男"> 男
        <input v-model="heroObj.gender" name='sex' type="radio" value="女"> 女
        <input v-model="heroObj.gender" name='sex' type="radio" value="不详"> 不详
      </div>
    </div>
    <button @click="edit" class="btn btn-primary">提交</button>
  </div>
</template>

<script>
export default {
  created () {
    const id = this.$route.params.id
    this.$axios.get(`/heroes/${id}`).then(res => {
      // console.log(res.data)

      this.heroObj = res.data
    })
  },
  data () {
    return {
      heroObj: {
        id: '',
        heroName: '',
        gender: '',
        cTime: ''
      }
    }
  },
  methods: {
    edit () {
      if (this.heroObj.heroName === '') return
      const id = this.$route.params.id
      this.$axios.put(`/heroes/${id}`, this.heroObj).then(res => {
        this.$router.push('/hero')
      })
    }
  }
}
</script>
