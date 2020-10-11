<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" v-model="heroObj.heroName" class="form-control"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" v-model="heroObj.gender" value="男"> 男
        <input type="radio" v-model="heroObj.gender" value="女"> 女
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

<style>

</style>
