<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { getCode } from "@/api/residentHealth";
import { JSEncrypt } from "jsencrypt";
import { ElMessage } from "element-plus";
import type { FormInstance } from "element-plus";
// import router from "@/router";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const ruleFormRef = ref<FormInstance>();

const user = reactive({
  yhzh: "",
  uuid: "",
  password: "",
  code: "",
});
const publicKey = ref("");
const imgUrl = ref("");
//校验
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
};
const validateVerification = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入验证码"));
  } else {
    callback();
  }
};
const rules = reactive({
  password: [{ validator: validatePassword, trigger: "blur" }],
  yhzh: [{ validator: validateAccount, trigger: "blur" }],
  code: [{ validator: validateVerification, trigger: "blur" }],
});
onMounted(() => {
  getImgUrl();
});
//获取验证码
const getImgUrl = async () => {
  try {
    const res = await getCode();
    imgUrl.value = `data:image/jpeg;base64,${res.map.img}`;
    user.uuid = res.map.uuid;
    publicKey.value = res.map.publicKey;
  } catch (error) {
    console.log(error);
  }
};
const changeImage = async () => {
  getImgUrl();
};

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (formEl) {
    formEl.validate(async (valid) => {
      if (valid) {
        user.password = encryptedData(user.password).toString();
        userStore.Login(user).then((res) => {
          const { code, msg } = res;
          if (code === 200) {
            // ElMessage({
            //   message: "登录成功",
            //   type: "success",
            // });
            // router.push("/home");
          } else {
            ElMessage({
              message: msg,
              type: "error",
            });
          }
        });
      } else {
        ElMessage({
          message: "请填写完整信息",
          type: "error",
        });
        return false;
      }
    });
  }
};
const encryptedData = (data: string) => {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey.value);
  return encryptor.encrypt(data);
};
const options = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        // 开启鼠标点击的效果
        enable: true,
        mode: "push",
      },
      onHover: {
        // 开启鼠标悬浮的效果(线条跟着鼠标移动)
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      // 配置动画效果
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      grab: {
        distance: 200,
        duration: 0.4,
      },
      attract: {
        // 鼠标悬浮时，集中于一点，鼠标移开时释放产生涟漪效果
        distance: 200,
        duration: 0.4,
        factor: 5,
      },
    },
  },
  particles: {
    color: {
      value: "#2e5892", // 粒子点的颜色
    },
    links: {
      color: "#2e5892", // 线条颜色
      distance: 150, //线条距离
      enable: true,
      opacity: 0.4, // 不透明度
      width: 1.2, // 线条宽度
    },
    collisions: {
      enable: true,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 0.5, // 移动速度
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80, //粒子数
    },
    opacity: {
      //粒子透明度
      value: 0.7,
    },
    shape: {
      //粒子样式
      type: "star",
    },
    size: {
      //粒子大小
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
</script>

<template>
  <div class="login">
    <Particles id="tsparticles" class="login__particles" :options="options" />
    <div class="loginPart">
      <h2>用户登录</h2>
      <el-form
        ref="ruleFormRef"
        :model="user"
        status-icon
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        style="transform: translate(-30px)"
      >
        <el-form-item label="账号：" prop="yhzh">
          <el-input
            v-model="user.yhzh"
            placeholder="请输入账号"
            maxlength="20"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="user.password"
            type="password"
            placeholder="请输入密码"
            maxlength="20"
            show-password
            clearable
          />
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input
            style="width: 150px"
            v-model="user.code"
            placeholder="请输入验证码"
            maxlength="4"
            clearable
          />
          <img class="verifyCodeImg" :src="imgUrl" @click="changeImage" />
        </el-form-item>
        <el-button class="btn" type="primary" @click="onSubmit(ruleFormRef)"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.login__particles {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("@/assets/images/bg_login.jpg");
  opacity: 0.9;
  position: fixed;
  pointer-events: none;
}
.loginPart {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 50px;
  background: rgba(12, 7, 159, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}
h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
.btn {
  transform: translate(170px);
  width: 80px;
  height: 40px;
  font-size: 15px;
}
:deep(.el-form-item__label) {
  color: #fff;
}
</style>
