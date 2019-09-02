<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <div id="content">
			<div class="cinema_menu">
				<router-link tag="div" to="/cinema/cinemaList" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link >
				<router-link tag="div" to="/cinema/cinemaBrand" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link >
				<router-link tag="div" to="/cinema/cinemaCharacteristic" class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link >
			</div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'
name='cinema'
export default {
    components: {
        TabBar,
        Header
    }
}
</script>

<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    #content .cinema_menu div { margin-left: 20px; height:100%; line-height: 45px;}
    #content .cinema_menu .city_switch.router-link-active { color: #ef4238; border-bottom: 2px #ef4238 solid;}
    #content .cinema_menu .brand_swtich.router-link-active { color: #ef4238; border-bottom: 2px #ef4238 solid;}
    #content .cinema_menu .feature_switch.router-link-active { color: #ef4238; border-bottom: 2px #ef4238 solid;}
</style>