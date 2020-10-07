axios({
    method: "请求方式",  // get/post/put/patch/delete
    url: "请求地址",
    data: '参数对象', // 这个参数对象会在请求体中进行提交  post/put/patch
    params: "参数对象", // 这个参数对象会在地址栏中拼接提交 get/delete   
  }).then("成功的函数").catch("失败的函数")