<template>
    <div>
      <div class="row">
        <div class="col-3">
          <q-tabs
            v-model="category"
            vertical
            class="text-primary"
          >
            <q-tab :name="category.name" :label="category.name" v-for="(category, i) in categories" :key="i" />
          </q-tabs>
        </div>
        <div class="col-9">
          <q-tab-panels
            v-model="category"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel :name="category" class="menu-tabs">
              <div class="row">
                <div class="col-4 q-pa-sm" v-for="item in getCategoryProducts[0].items" :key="item.name">
                  <card :cardType="'menu-item'" :item="item"/>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
</template>
<script>
import card from '../components/card.vue';

export default {
    components: {
      card
    },
    computed: {
      getCategoryProducts() {
        return this.categories.filter(cat => {
          if(cat.name === this.category) {
            return cat
          }
        })
      }
    },
    data() {
      return {
        category: 'Most Ordered',
        categories: [
          {
            id: 1,
            name: 'Most Ordered',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 2,
            name: 'Veg Starters',
            items: [
              {
                id: 1,
                name: 'Paneer Tikka',
                price: '150'
              },
              {
                id: 2,
                name: 'Malai Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Dahi ke Kebab',
                price: '140'
              },
              {
                id: 4,
                name: 'Paneer 65',
                price: '120'
              }
            ]
          },
          {
            id: 3,
            name: 'Non-veg Starters',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 4,
            name: 'Veg Main Course',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 4,
            name: 'Non-veg Main Course',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 5,
            name: 'Indian Breads',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 6,
            name: 'Rice & Biryani',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          },
          {
            id: 7,
            name: 'Desserts',
            items: [
              {
                id: 1,
                name: 'Dal Makhani',
                price: '120'
              },
              {
                id: 2,
                name: 'Tandoori Chaap',
                price: '90'
              },
              {
                id: 3,
                name: 'Butter Chicken',
                price: '200'
              },
              {
                id: 4,
                name: 'Kadai Paneer',
                price: '170'
              }
            ]
          }
        ]
      }
    }
}
</script>
<style lang="stylus" scoped>
.menu-tabs
  padding: 0 16px;
</style>