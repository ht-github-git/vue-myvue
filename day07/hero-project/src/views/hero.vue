<template>
  <div class="hero">
    <p><a @click="$router.push('/hero-add')" href="javascript:;" class="btn btn-primary">添加英雄</a></p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in herolist' :key='item.id'>
          <td>{{item.id}}</td>
          <td>{{item.heroName}}</td>
          <td>{{item.gender}}</td>
          <td>{{ item.cTime | time}}</td>
          <td>
            <button @click="goEdit(item.id)" class="btn btn-success">编辑</button>
            &nbsp;
            <button @click="del(item.id)" class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      herolist: []
    }
  },
  methods: {
    getList () {
      this.$axios.get(' /heroes').then(res => {
        this.herolist = res.data
      })
    },
    del (id) {
      const flag = confirm('你确定要删除？')
      if (flag) {
        this.$axios.delete(`/heroes/${id}`).then(res => { this.getList() })
      }
    },
    goEdit (id) {
      this.$router.push(`/hero-edit/${id}`)
    }
  },
  created () {
    this.$axios.get('/heroes').then(res => {
      this.herolist = res.data
      // console.log(this.herolist)
    })
  }
}
</script>
