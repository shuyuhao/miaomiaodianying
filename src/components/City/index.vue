<template>
  <div class="city_body">
    <div class="city_list">
      <Loading v-if="isLoading" />
      <Scroller v-else ref="city_List">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="(item, index) in hotList" :key="index">{{item.name}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="(items, index) in cityList" :key="index">
              <h2>{{items.index}}</h2>
              <ul>
                <li v-for="(item, index) in items.list" :key="index">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>

    <div class="city_index">
      <ul>
        <li v-for="(item, index) in cityList" :key="index" @click='runToscrollTop(index)'>{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading: true
    };
  },
  mounted() {
    this.getAxios();
  },
  methods: {
    getAxios() {
      this.axios.get("/api/cityList").then(res => {
        let cities;
        // console.log(res);
        if (res.data.msg === "ok") {
          // console.log('111');
          cities = res.data.data.cities;
          // console.log(cities);
          let { cityList, hotList } = this.formatCityList(cities);
          if (cityList && hotList) {
            this.cityList = cityList;
            this.hotList = hotList;
            this.isLoading = false;
          }
        }
      });
    },
    formatCityList(cities) {
      let cityList = [];
      let hotList = [];
      for (let value of cities) {
        let firstLetter = value.py.substring(0, 1).toUpperCase();
        //var firstLetter = cities[i].py.substring(0,1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ id: value.id, name: value.nm }]
          });
        } else {
          for (let oValue of cityList) {
            if (oValue.index === firstLetter) {
              oValue.list.push({ id: value.id, name: value.nm });
            }
          }
        }
      }
      // console.log(cities);

      for (let value of cities) {
        if (value.isHot === 1) {
          hotList.push({ id: value.id, name: value.nm });
        }
      }

      function toCom(firstLetter) {
        for (let value of cityList) {
          if (value.index === firstLetter) {
            return false;
          }
        }
        return true;
      }

      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });

      return {
        cityList,
        hotList
      };
    },
    runToscrollTop(index){
      let h2 = this.$refs.city_sort.getElementsByTagName('h2');
      this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
    }
  }
};
</script>
<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>