let Config = {}
if (process.env.NODE_ENV === 'production') {
  Config = {
    url: '/cenuon/top/mv?limit=[LIMIT]'
  }
} else {
  Config = {
    url: '/cenuon/top/mv?limit=[LIMIT]',
    login: '/cenuon/login/cellphone?phone=[PHONE]&password=[PASSWORD]',
    fm: '/cenuon/personal_fm'
  }
}

export default Config
