enum result bad_cmene_exitval[] = {
BC_NOT_COMPLETE, /* State 0 */
BC_NOT_COMPLETE, /* State 1 */
BC_NOT_COMPLETE, /* State 2 */
BC_CMENE_OK, /* State 3 */
BC_CMENE_OK, /* State 4 */
BC_CMENE_OK, /* State 5 */
BC_NOT_COMPLETE, /* State 6 */
BC_CMENE_OK, /* State 7 */
BC_CMENE_OK, /* State 8 */
BC_NOT_COMPLETE, /* State 9 */
BC_NOT_COMPLETE, /* State 10 */
BC_NOT_COMPLETE, /* State 11 */
BC_NOT_COMPLETE, /* State 12 */
BC_NOT_COMPLETE, /* State 13 */
BC_NOT_COMPLETE, /* State 14 */
BC_CMENE_BAD_SPLIT, /* State 15 */
BC_CMENE_BAD_SPLIT, /* State 16 */
BC_NOT_COMPLETE, /* State 17 */
BC_CMENE_BAD_NOSPLIT, /* State 18 */
BC_CMENE_BAD_NOSPLIT  /* State 19 */
};

enum attribute bad_cmene_attribute[] = {
ATTR_NONE, /* State 0 */
ATTR_NONE, /* State 1 */
ATTR_NONE, /* State 2 */
ATTR_SEEN_LD, /* State 3 */
ATTR_SEEN_LD, /* State 4 */
ATTR_NONE, /* State 5 */
ATTR_NONE, /* State 6 */
ATTR_SEEN_LD, /* State 7 */
ATTR_SEEN_LD, /* State 8 */
ATTR_NONE, /* State 9 */
ATTR_NONE, /* State 10 */
ATTR_NONE, /* State 11 */
ATTR_NONE, /* State 12 */
ATTR_NONE, /* State 13 */
ATTR_NONE, /* State 14 */
ATTR_SEEN_LD, /* State 15 */
ATTR_NONE, /* State 16 */
ATTR_NONE, /* State 17 */
ATTR_SEEN_LD, /* State 18 */
ATTR_NONE  /* State 19 */
};

static unsigned char bad_cmene_token[] = {
    0,   1,   2,   3,   4,   5,   6,   7,
    8,   5,   9,  10,   6,   7,   8,   9,
   10,   3,   6,   7,  10,   0,   6,   7,
   10,   6,   7,  10,   0,   1,   2,   3,
    4,   5,   3,   6,   7,  10,   0,   6,
    7,  10,   2,   5,   9,  10,   6,   7,
    8,   2,   6,   7,   8,   9,  10,   2,
    5,   9,  10,   2,   6,   7,   8,   9,
   10,   6,   7,   8,   9,  10,   6,   7,
    8,   9,  10
};

static short bad_cmene_nextstate[] = {
      1,     1,     1,     1,     1,     2,     3,     4,
      5,     1,     6,     6,     7,     8,     5,     6,
      6,     9,     5,     5,    10,    11,     5,     5,
     10,     5,     5,    10,     1,     1,     1,     1,
      1,     1,    12,     5,     5,    10,    13,     5,
      5,    10,    14,     1,     6,     6,     5,     5,
      5,    14,    15,    15,    16,    16,    16,    17,
      1,     6,     6,    17,    18,    18,    19,    19,
     19,    15,    15,    16,    16,    16,    18,    18,
     19,    19,    19
};

static unsigned short bad_cmene_base[] = {
      0,     9,    12,    17,    21,    25,    28,    34,
     38,    42,    46,    49,    55,    59,    65,    70,
     70,    70,    75,    75,    75
};

static short bad_cmene_defstate[] = {
     -1,     0,    -1,     0,     0,     0,    -1,     0,
      0,     0,    -1,     6,     0,     6,     6,    -1,
     -1,     6,    -1,    -1
};

int bad_cmene_next_state(int current_state, int next_token) {
int h, l, m, xm;
while (current_state >= 0) {
  l = bad_cmene_base[current_state], h = bad_cmene_base[current_state+1];
  while (h > l) {
    m = (h + l) >> 1; xm = bad_cmene_token[m];
    if (xm == next_token) goto done;
    if (m == l) break;
    if (xm > next_token) h = m;
    else                 l = m;
  }
  current_state = bad_cmene_defstate[current_state];
}
return -1;
done:
return bad_cmene_nextstate[m];
}
