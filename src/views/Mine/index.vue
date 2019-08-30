<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div class="content" >
            <Login/>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'
import Login from '@/components/Login'
name='mine'
export default {
    components: {
        TabBar,
        Header,
        Login
    }
}
</script>

<style scoped>

</style>