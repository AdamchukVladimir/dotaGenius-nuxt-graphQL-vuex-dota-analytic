//Add cookie with token to get access to Stratz
export default ({ app }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgyMDQyNjA4OTUiLCJ1bmlxdWVfbmFtZSI6ImludGVybmV0IG1vbmV58J-mhyIsIlN1YmplY3QiOiJhZTgwOTliYS01NTMzLTQ2ZTEtYjlkMS01ZDI5ZThiNjFmMmQiLCJTdGVhbUlkIjoiMjQzOTk1MTY3IiwibmJmIjoxNjcxNzMzMzQ5LCJleHAiOjE3MDMyNjkzNDksImlhdCI6MTY3MTczMzM0OSwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.APCr9Bvf0fj9NPUclA8FfRDS--ZVfFeYol0YwNiE5Y4'
  app.$cookies.set('apollo-token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}
