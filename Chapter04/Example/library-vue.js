// example.html
<div id="example">
  <input :value="text" @input="update"/>
  <div v-html="myOwnText"></div>
</div>
// -----------------------------------------------------------------
// example.js
new Vue({
  el: '#example',
  data: {
    text: 'My first framework'
  },
  computed: {
    myOwnText: function () {
      return this.text
    }
  },
  methods: {
    update: function (e) {
      this.text = e.target.value
    }
  }
})
// -----------------------------------------------------------------
// => renders a page with an input field
// => and a div that displays the inputs value
