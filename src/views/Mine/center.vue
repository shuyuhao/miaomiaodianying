<template>
    <div>
        <div>个人中心：</div>
        <div>当前用户：{{ $store.state.user.name }} <a href="javascript:;" @touchstart="handleToLogout">退出</a></div>
        <div v-if="$store.state.user.isAdmin">用户身份：管理员 <a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
        <div>
            <input type="file" name="file" value="上传头像" @change="handleToUpload">
            <img class="userHead" :src="$store.state.user.userHead">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { messageBox } from '@/components/JS';
export default {
    name : 'center',
    methods : {
        handleToLogout(){

        },
        handleToUpload(ev){

        }
    },
    beforeRouteEnter (to, from, next) {
        next('/mine/login');
    }
}
</script>

<style scoped>
.userHead{ width:100px; height:100px; border-radius: 50%; overflow: hidden;}
</style>
