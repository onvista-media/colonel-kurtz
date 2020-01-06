export default {
  create(type, position, parent, content) {
    return { type, position, parent, content }
  },

  destroy(id) {
    return id
  },

  update(id, content) {
    // valueOf() allows blocks to be passed, it will return
    // the id
    return { id: id.valueOf(), content }
  },

  set(id, path, value) {
    return { id: id.valueOf(), path, value }
  },

  move(block, distance) {
    return { block, distance }
  }
}
