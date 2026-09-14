/* 객실 공지사항 오프라인 뷰어 (PDF / GitHub 저장소 기반) */

const STORAGE_KEYS = {
  owner: 'cn_gh_owner',
  repo: 'cn_gh_repo',
  branch: 'cn_gh_branch',
  path: 'cn_gh_path',
  notices: 'cn_notices_cache',
  lastSync: 'cn_last_sync'
};

const RUNTIME_CACHE = 'cn-runtime';

const el = (id) => document.getElementById(id);

const state = {
  notices: [],
  activeCategory: '전체',
  query: '',
  current: null
};

/* ---------------- Filename → title ---------------- */
function titleFromFilename(name) {
  return name.replace(/\.pdf$/i, '').trim();
}

const CATEGORY_ORDER = ['Safety&Security',
