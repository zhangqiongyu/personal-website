import axios from 'axios'

// 钩子函数，根据指定url获取信息，并存在Promise中
export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })
}

// 获取blog封面信息
export function fetchCoverInfo () {
  return fetch(`/api/articles`)
}

// 根据id获取对应文章内容
export function fetchArticleById (id) {
  return fetch(`/api/articles/${id}`)
}
