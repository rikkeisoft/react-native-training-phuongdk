import SearchStore from '../store/searchStore'
import DetailStore from '../store/detailStore'
import BookmarkStore from '../store/bookmarkStore'

export default {
  // SearchStore: SearchStore
  BookmarkStore: BookmarkStore,
  SearchStore: new SearchStore(),
  DetailStore: new DetailStore()
}
