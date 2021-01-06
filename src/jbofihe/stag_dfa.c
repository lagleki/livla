#define SUCCESS 1
#define FAILURE 0
#include "stag_dfa.h"
int stag_exitval[] = {
FAILURE, /* State 0 */
SUCCESS, /* State 1 */
SUCCESS, /* State 2 */
SUCCESS, /* State 3 */
SUCCESS, /* State 4 */
FAILURE, /* State 5 */
FAILURE, /* State 6 */
FAILURE, /* State 7 */
FAILURE, /* State 8 */
SUCCESS, /* State 9 */
FAILURE, /* State 10 */
SUCCESS, /* State 11 */
SUCCESS, /* State 12 */
SUCCESS, /* State 13 */
SUCCESS, /* State 14 */
SUCCESS, /* State 15 */
SUCCESS, /* State 16 */
SUCCESS, /* State 17 */
FAILURE, /* State 18 */
SUCCESS, /* State 19 */
SUCCESS, /* State 20 */
SUCCESS, /* State 21 */
SUCCESS, /* State 22 */
FAILURE, /* State 23 */
SUCCESS, /* State 24 */
SUCCESS, /* State 25 */
FAILURE, /* State 26 */
SUCCESS, /* State 27 */
FAILURE, /* State 28 */
FAILURE, /* State 29 */
SUCCESS, /* State 30 */
SUCCESS, /* State 31 */
SUCCESS, /* State 32 */
SUCCESS, /* State 33 */
SUCCESS, /* State 34 */
SUCCESS, /* State 35 */
SUCCESS, /* State 36 */
SUCCESS, /* State 37 */
SUCCESS, /* State 38 */
SUCCESS, /* State 39 */
FAILURE, /* State 40 */
SUCCESS, /* State 41 */
SUCCESS, /* State 42 */
SUCCESS, /* State 43 */
SUCCESS, /* State 44 */
SUCCESS  /* State 45 */
};

static unsigned char stag_token[] = {
    0,   3,   4,   5,   6,   8,  10,  11,
   13,  14,  16,  17,  19,  20,  21,  22,
   23,  24,   8,  12,   8,   0,   4,  11,
   12,  13,  14,  16,  17,  22,  23,  24,
   13,  17,  22,   5,   4,   8,  11,   1,
    2,   7,   9,  13,  15,  18,   0,   4,
    5,   6,  10,  11,  12,  16,  19,  20,
   21,   0,   3,   5,   6,   8,  10,  12,
   13,  17,  19,  20,  21,  22,   3,   5,
    6,   8,  10,  13,  14,  17,  20,  21,
   22,  23,  24,   5,  20,   5,  20,  21,
   12,  14,  12,  14,  23,  19,   1,   2,
    7,   9,  13,  15,  18,   5,   6,  10,
   12,  20,  21,   3,   8,  12,  13,  17,
   22,  12,  14,  12,  14,  23,   1,   2,
    7,   9,  13,  15,  18,   5,  12,  20,
   21,  12,  14,  19,  23,  24,   0,   3,
    4,   8,  11,  16,  12,  13,  17,  22,
   13,  17,  22,   5,  12,  14,  23,  24,
    3,   5,   6,   8,  10,  20,  21,   5,
   20,   3,   5,   6,   8,  10,  12,   5,
    6,  10,  20,  21,  12,   5,  20,  21,
    5,   6,  10,  19,  20,  21,  19,   1,
    2,   7,   9,  13,  15,  18,   5,  12,
    3,   8,  12,  19,   5,   3,   8,  19,
    3,   8
};

static short stag_nextstate[] = {
      1,     2,     3,     4,     5,     3,     6,     7,
      8,     9,    10,    11,    12,    13,    14,    11,
     15,    16,     3,     2,     3,    -1,    -1,    -1,
     17,    18,    19,    -1,    20,    20,    21,    22,
     23,    24,    24,    25,    -1,    -1,    26,     8,
      8,     8,     8,     8,    11,     8,    -1,    -1,
     27,    28,    29,    -1,    30,    -1,    31,    32,
     33,     1,     2,    27,    28,     3,    29,    34,
      8,    11,    31,    32,    33,    11,     2,     4,
      5,     3,     6,    18,    19,    20,    13,    14,
     20,    21,    22,    24,    -1,    24,    -1,    -1,
     -1,    11,    -1,     9,    15,    12,    18,    18,
     18,    18,    18,    20,    18,    -1,    -1,    -1,
     35,    -1,    -1,     2,     3,    36,    18,    20,
     20,    -1,    20,    -1,    19,    21,    23,    23,
     23,    23,    23,    24,    23,    -1,    37,    -1,
     -1,    38,    19,    35,    21,    22,    -1,    -1,
     -1,    -1,    -1,    -1,    39,    -1,    -1,    -1,
     40,    41,    41,    42,    -1,     9,    15,    16,
      2,    27,    28,     3,    29,    32,    33,    41,
     -1,     2,    41,    28,     3,    29,    -1,    -1,
     -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     -1,    -1,    -1,    35,    -1,    -1,    31,    40,
     40,    40,    40,    40,    41,    40,    -1,    43,
      2,     3,    44,    45,    -1,     2,     3,    45,
      2,     3
};

static unsigned short stag_base[] = {
      0,    18,    20,    21,    21,    32,    35,    36,
     39,    46,    57,    58,    70,    83,    85,    88,
     90,    93,    94,   101,   107,   113,   115,   118,
    125,   129,   134,   140,   144,   147,   148,   152,
    159,   161,   166,   167,   172,   173,   176,   182,
    183,   190,   192,   196,   197,   200,   202
};

static short stag_defstate[] = {
     -1,    -1,    -1,    -1,     0,    -1,    -1,     0,
     -1,     0,    -1,    -1,    -1,    12,    12,    11,
     11,    12,    -1,    12,    -1,    20,    20,    -1,
     12,    20,     0,    11,    -1,    -1,    11,    -1,
     31,    -1,    11,    12,    20,    12,    12,    31,
     -1,    33,    -1,    33,    -1,    -1
};

int stag_next_state(int current_state, int next_token) {
int h, l, m, xm;
while (current_state >= 0) {
  l = stag_base[current_state], h = stag_base[current_state+1];
  while (h > l) {
    m = (h + l) >> 1; xm = stag_token[m];
    if (xm == next_token) goto done;
    if (m == l) break;
    if (xm > next_token) h = m;
    else                 l = m;
  }
  current_state = stag_defstate[current_state];
}
return -1;
done:
return stag_nextstate[m];
}
