# Semantic search

* + Scrap DwE dictionary and add z-glosses to the english dump
* + or put them into .json
* + db: add z field
* search: for the query
  * + embeddings: find first 100 sem-neighbors for the query
  * + construct the regexp/array from them
  * + limit them to z,g fields
    * @todo: d,n fields too
  * + and concatenate normal cnano search
    * +or combine the sql query into one, union+distinct?
  * + filter them in sqlite via zgloss-fields
  * + sort according to them in zgloss-fields
    * + distance 1 for z, the for g then other z, other g
    * @todo: alternative: not max distance but average or "minus average error": for query we find embwords. for each embword we find zglossed defs. correct semDistance distance if several z props are found in embwords 
    * + find semmatches by glosses
    * @todo: consider definition too. nothing else
    * @todo: consider notes too. nothing else
* Check for sem prop in def and
  * @todo: show it,
  * @todo: hilite it
* @todo: alert widget: if en and cnano then show buttons and disclaimer
* 

# Checks

firefox working?
firefox working offline?
firefox: what happens when you open the app in incognito?
chrome working?
chrome working offline?
chrome: what happens when you open the app in incognito?

# Issues

- get rid of all innerHTML
- first entry should have https:f//chinese.yabla.com/ example usage
- integrate uncll:
  - each section is dict_entry
  - refs to words as refs to en-cll entries
  - refs to sections as refs to en-cll_text entries
  - en-cll is index, links go to sutysisku, en-cll_text language
  - en-cll_text is sections content
  - dumping: switch saying the content is raw html but preprocessing might be necessary
- force update index.html from network, not from browser cache
- Feedback
  - disable in offline mode
  - tags?
- compress index.html
- compress index.css
- extract template.js configs to separate json files
- add lojban todo list
- add the text of LearnLojban
- lujvo with xN only mustnt have voynich pipes
- prioritization when regexp search too.
- ipfs
- save arrows settings in cookies
- if no caches show error
- muplis must show G-tagged sentences first
- dont show audio icons when offline and failed to download
- GA working?
- "opened!" sev time when {se}
- forward button doesnt work
- 2002 as a new language

## minor issues

- show error when coop is false?
- show error when no navigator?
