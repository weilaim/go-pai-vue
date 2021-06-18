<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :xl="6" :lg="7">
      <div class="login-form">
        <h2>weilaim文件管理系统</h2>
        <el-image
          style="width: 180px; height: 180px"
          :src="require('@/assets/weixinlogo.jpg')"
        ></el-image>
        <p>扫码二维码，加微信获取登录密码</p>
      </div>
    </el-col>
    <el-col :span="1"> <el-divider direction="vertical"></el-divider> </el-col>
    <el-col :xl="6" :lg="7">
      <el-form
        label-position="right"
        :rules="rules"
        label-width="80px"
        :model="loginForm"
        ref="loginForm"
      >
        <el-form-item label="用户名" prop="user_name" style="width: 380px">
          <el-input v-model="loginForm.user_name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
          <el-button @click="getPass">获取密码</el-button>
        </el-form-item>
        <el-form-item>
          <a href="/register">没有账号？点击注册</a>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import * as Loginu from "@/api/user/";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user_name: "weilaims",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Loginu.login(this.loginForm)
            .then((res) => {
              console.log(res);
              console.log(res.status);
              if (res.status === 200) {
                this.$notify.success({
                  title: "登录成功",
                  message: res.msg,
                });
                this.$router.push("/index")
              } else {
                this.$notify.error({
                  title: "登录失败",
                  message: res.msg,
                });
              }
            }).catch((error) => {
              this.$notify.error({
                title: "网络错误或者服务器宕机",
                meesage: error,
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getPass() {
      this.$message("请扫描左边的二维码，获取更多资讯");
    },
  },
  created() {},
};
</script>
<style scoped>
.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
.el-row {
  height: 100%;
  background-color: #fafafa;
}
.el-divider {
  height: 200px;
}
.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}
</style>
