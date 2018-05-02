import { types } from 'mobx-state-tree'

// MOBX STATE-TREE-CODE
const Bookmark = types.model('Bookmark', {
  id: types.optional(types.string, ''),
  title: types.optional(types.string, '')
})

const Bookmarks = types.model('Bookmarks', {
  bookmarks: types.array(Bookmark)
})
  .actions(self => {
    function listBookMark (obj) {
      if (obj === null) {
        return
      }
      self.bookmarks.push(obj)
      return self.bookmarks
    }
    return { listBookMark }
  })

const bookmarkStore = Bookmarks.create({
  bookmarks: []
})
export default bookmarkStore
