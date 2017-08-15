let Config = {}
if (process.env.NODE_ENV === 'production') {
  Config = {
    url: '/cenuon/top/mv?limit=[LIMIT]'
  }
} else {
  Config = {
    url: '/cenuon/top/mv?limit=[LIMIT]'
  }
}

export default Config
