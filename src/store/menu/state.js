export default function () {
  return {
    //
    menuCategories: [],
    menuCategory: {},
    comboGroups: [
      {
        id: 1,
        name: 'Combo Group 1',
        menuCategory: 1,
        items: ['Veg Shammi Kebab', 'Paneer Tikka']
      },
      {
        id: 2,
        name: 'Combo Group 2',
        menuCategory: 3,
        items: ['Chiicken Seekh Kebab', 'Achari Chicken Tikka']
      }
    ]
  }
}
