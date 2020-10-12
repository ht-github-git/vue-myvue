<template>
  <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input v-model="heroname" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input v-model="gender" name="sex" value="男" type="radio"> 男
        <input v-model="gender" name="sex" value="女" type="radio"> 女
        <input v-model="gender" name="sex" value="不详" type="radio"> 不详
      </div>
    </div>
    <button @click="add" class="btn btn-primary">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroname: '',
      gender: '男'
    }
  },
  methods: {
    add () {
      if (this.heroname === '') return
      this.$axios.post('/heroes', {
        heroName: this.heroname,
        gender: this.gender,
        cTime: +new Date()
      }).then(res => {
        // console.log(this)

        this.$router.push('/hero')
      })
    }
  }
}
</script>
