// import something here
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'bottom',
  timeout: 2500,
  textColor: 'white',
  actions: [{ icon: 'close', color: 'white' }]
})
// "async" is optional
export default async ({ /* app, router, Vue, ... */ }) => {
  // something to do
}
