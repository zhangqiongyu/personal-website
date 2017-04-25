export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPage () {
      return parseInt(Math.ceil(this.total / this.pageSize))
    },
    pages () {
      let from = this.currentPage - 2
      if (from < 1) {
        from = 1
      }
      let to = from + 4
      if (to >= this.totalPage) {
        to = this.totalPage
      }
      let pages = []
      while (from <= to) {
        pages.push(from)
        from++
      }
      return pages
    }
  },
  methods: {
    pre () {
      if (this.currentPage === 1) {
        return
      }
      this.$emit('current-change', this.currentPage - 1)
    },
    next () {
      if (this.currentPage === this.totalPage) {
        return
      }
      this.$emit('current-change', this.currentPage + 1)
    },
    jump (i) {
      this.$emit('current-change', i)
    }
  },
  render (h) {
    let pages = this.pages.map(item => {
      return <li on-click={ () => this.jump(item) } class={ {active: item === this.currentPage} }>{ item }</li>
    })
    return (
      <div class="adp-pagination">
        <button on-click={ this.pre } class={ {'adp-pagination__pre': true, disabled: this.currentPage === 1} }><i class="fa fa-angle-left" aria-hidden="true"></i></button>
        <ul>
          {
            pages
          }
        </ul>
        <button on-click={ this.next } class={ {'adp-pagination__next': true, disabled: this.currentPage >= this.totalPage} }><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    )
  }
}

import './pagination.css'
