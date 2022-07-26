<template>
  <div class="login-container">
    <video poster="../../../assets/images/login/video-cover.jpeg" loop autoplay muted>
      <source src="../../../assets/images/login/night.mp4" />
    </video>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          {{ t('login.title') }}
        </h3>
        <!-- <LangSelect :isWhite="true" class="set-language"></LangSelect> -->
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import LangSelect from '@/components/lang_select/langIndex.vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  components: {
    // LangSelect,
  },
  setup() {
    const userNameRef = ref(null);
    const passwordRef = ref(null);
    const loginFormRef = ref(null);
    const { t } = useI18n();
    const state = reactive({
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      loginRules: {
        username: [{ validator: userNameRef, trigger: 'blur' }],
        password: [{ validator: passwordRef, trigger: 'blur' }],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      capsTooltip: false,
      redirect: '',
      otherQuery: {},
    });
    return {
      userNameRef,
      passwordRef,
      loginFormRef,
      ...toRefs(state),
      t,
    };
  },
});
</script>
<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: white;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
