const Mock = require('mockjs')

const data = Mock.mock({
  'items|8': [{
    id: '@id',
    title: '@cparagraph(1)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@cname',
    display_time: '@datetime',
    pageviews: '第@integer(1, 10)章'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
