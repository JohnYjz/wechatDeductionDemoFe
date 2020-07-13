import moment from 'moment'

export default {
  formatDate (time, type = 'YYYY-MM-DD HH:mm') {
    if (!time) {
      return time
    }
    return moment(time).format(type)
  }
}
