import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
        >
          <path
            d="M30 11h-5v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2.002 2.002 0 0 0-2-2zm-3 5v-3h3l.001 3z"
            fill="currentColor"
          ></path>
          <path d="M10 13h2v8h2v-8h2v-2h-6v2z" fill="currentColor"></path>
          <path d="M23 11h-6v2h2v8h2v-8h2v-2z" fill="currentColor"></path>
          <path d="M6 11v4H3v-4H1v10h2v-4h3v4h2V11H6z" fill="currentColor"></path>
        </svg>
      )
    }
  }
})
