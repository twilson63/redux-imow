/* global fetch */
const api = process.env.API || 'https://api.vet-support.xyz'
export default {
  name: 'extra-args',
  getExtraArgs: store => {
    return {
      apiFetch: (urlPath, options = { method: 'GET' }) =>
        fetch(api + urlPath, options)
          .then(res => res.json())
          .catch(err => {
            throw err
          })
    }
  }
}
