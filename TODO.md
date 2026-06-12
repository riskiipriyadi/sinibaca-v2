# Sinibaca v2 - Fix Rendering Issues

## Issues Identified:
1. **Route conflict**: Two blog post routes (`[slug].astro` and `[...slug].astro`) causing build warnings
2. **PostCard thumbnail**: Uses `data.thumbnail` but some posts have `heroImage` instead - need fallback
3. **Missing frontmatter**: Some posts lack `category`, `tags`, `thumbnail`, `updatedDate`, `draft` fields
4. **Sidebar/RightPanel**: Should render but need to verify they're properly included in Layout

## Tasks:
- [x] Remove conflicting `[...slug].astro` route
- [ ] Fix PostCard to fallback to `heroImage` when `thumbnail` is missing
- [ ] Update all blog posts with proper frontmatter (thumbnail, category, tags, etc.)
- [ ] Verify Sidebar and RightPanel render correctly in Layout
- [ ] Test build and verify all components render