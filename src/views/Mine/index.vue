<template>
    <div id="main">
        <Header title="我的喵喵"/>
        mine
        <TabBar/>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'
name='mine'
export default {
    components: {
        TabBar,
        Header
    }
}
</script>

<style scoped>

</style>