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
SUCCESS, /* State 8 */
FAILURE, /* State 9 */
SUCCESS, /* State 10 */
SUCCESS, /* State 11 */
SUCCESS, /* State 12 */
SUCCESS, /* State 13 */
SUCCESS, /* State 14 */
SUCCESS, /* State 15 */
SUCCESS, /* State 16 */
SUCCESS, /* State 17 */
SUCCESS, /* State 18 */
SUCCESS, /* State 19 */
SUCCESS, /* State 20 */
SUCCESS, /* State 21 */
SUCCESS, /* State 22 */
FAILURE, /* State 23 */
SUCCESS, /* State 24 */
FAILURE, /* State 25 */
FAILURE, /* State 26 */
SUCCESS, /* State 27 */
SUCCESS, /* State 28 */
SUCCESS, /* State 29 */
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
SUCCESS, /* State 40 */
SUCCESS  /* State 41 */
};

static unsigned char stag_token[] = {
    0,   3,   4,   5,   6,   8,  10,  11,
   14,  16,  17,  19,  20,  21,  22,  23,
   24,   8,  12,   8,   0,   4,  11,  12,
   14,  16,  17,  22,  23,  24,  17,  22,
    5,   4,   8,  11,   0,   4,   5,   6,
   10,  11,  12,  16,  19,  20,  21,   0,
    3,   5,   6,   8,  10,  12,  17,  19,
   20,  21,  22,   3,   5,   6,   8,  10,
   14,  17,  20,  21,  22,  23,  24,   5,
   20,   5,  20,  21,  12,  14,  12,  14,
   23,  19,   3,   8,  12,  14,  17,  22,
   23,  24,   3,   8,  12,  17,  22,  12,
   14,  12,  24,   5,  12,  20,  21,  12,
   19,   0,   3,   4,   8,  11,  16,  12,
   17,  22,  17,  22,   5,  12,  14,  23,
   24,  12,  17,  19,  22,   3,   5,   6,
    8,  10,  21,  21,  12,  12,  12,   5,
   20,  21,  12,  19,  12,  17,  22,   3,
    6,   8,  10,  12,   3,   8,  12,  19,
   12,   3,   8,  19,   3,   8
};

static short stag_nextstate[] = {
      1,     2,     3,     4,     5,     3,     6,     7,
      8,     9,    10,    11,    12,    13,    10,    14,
     15,     3,     2,     3,    -1,    -1,    -1,    16,
     17,    -1,    18,    18,    19,    20,    21,    21,
     22,    -1,    -1,    23,    -1,    -1,    24,    25,
     26,    -1,    27,    -1,    28,    29,    30,     1,
      2,    24,    25,     3,    26,    31,    10,    28,
     29,    30,    10,     2,     4,     5,     3,     6,
     17,    18,    12,    13,    18,    19,    20,    21,
     -1,    21,    -1,    -1,    -1,    10,    -1,     8,
     14,    11,     2,     3,    32,    17,    18,    18,
     19,    20,     2,     3,    33,    18,    18,    -1,
     18,    -1,    -1,    -1,    34,    -1,    -1,    35,
     32,    -1,    -1,    -1,    -1,    -1,    -1,    36,
     -1,    -1,    37,    37,    38,    -1,     8,    14,
     15,    -1,    -1,    -1,    -1,     2,    37,    25,
      3,    26,    30,    -1,    -1,    -1,    -1,    -1,
     -1,    -1,    -1,    32,    -1,    -1,    -1,     2,
     25,     3,    26,    39,     2,     3,    40,    41,
     -1,     2,     3,    41,     2,     3
};

static unsigned short stag_base[] = {
      0,    17,    19,    20,    20,    30,    32,    33,
     36,    47,    48,    59,    71,    73,    76,    78,
     81,    82,    90,    95,    97,    99,   103,   105,
    111,   114,   116,   117,   121,   125,   131,   132,
    133,   134,   135,   138,   140,   143,   148,   152,
    153,   156,   158
};

static short stag_defstate[] = {
     -1,    -1,    -1,    -1,     0,    -1,    -1,     0,
      0,    -1,    -1,    -1,    11,    11,    10,    10,
     11,    -1,    -1,    18,    17,    11,    17,     0,
     10,    -1,    -1,    10,    10,    -1,    29,    10,
     17,    18,    11,    17,    10,    -1,    -1,    37,
     -1,    -1
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
