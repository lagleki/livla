#include "morf_dfa.h"
enum raw_category morf_exitval[] = {
R_UNKNOWN, /* State 0 */
R_CMAVOS, /* State 1 */
R_CMAVOS_END_CY, /* State 2 */
R_CMENE, /* State 3 */
R_CMENE, /* State 4 */
R_UNKNOWN, /* State 5 */
R_CMENE, /* State 6 */
R_CMENE, /* State 7 */
R_CMAVOS, /* State 8 */
R_CMAVOS, /* State 9 */
R_UNKNOWN, /* State 10 */
R_UNKNOWN, /* State 11 */
R_UNKNOWN, /* State 12 */
R_CMENE, /* State 13 */
R_CMAVOS_END_CY, /* State 14 */
R_CMAVOS, /* State 15 */
R_CMAVOS_END_CY, /* State 16 */
R_CMENE, /* State 17 */
R_CMENE, /* State 18 */
R_CMENE, /* State 19 */
R_CMENE, /* State 20 */
R_CMENE, /* State 21 */
R_CMENE, /* State 22 */
R_CMENE, /* State 23 */
R_CMENE, /* State 24 */
R_CMENE, /* State 25 */
R_CMENE, /* State 26 */
R_CMENE, /* State 27 */
R_CMENE, /* State 28 */
R_UNKNOWN, /* State 29 */
R_CMAVOS, /* State 30 */
R_UNKNOWN, /* State 31 */
R_UNKNOWN, /* State 32 */
R_CMENE, /* State 33 */
R_CMENE, /* State 34 */
R_CMENE, /* State 35 */
R_UNKNOWN, /* State 36 */
R_CMAVOS_END_CY, /* State 37 */
R_UNKNOWN, /* State 38 */
R_UNKNOWN, /* State 39 */
R_CMENE, /* State 40 */
R_CMENE, /* State 41 */
R_CMAVOS, /* State 42 */
R_UNKNOWN, /* State 43 */
R_CMENE, /* State 44 */
R_CMENE, /* State 45 */
R_UNKNOWN, /* State 46 */
R_CMENE, /* State 47 */
R_UNKNOWN, /* State 48 */
R_UNKNOWN, /* State 49 */
R_CMENE, /* State 50 */
R_CMENE, /* State 51 */
R_STAGE4_1, /* State 52 */
R_CMENE, /* State 53 */
R_CMENE, /* State 54 */
R_CMENE, /* State 55 */
R_STAGE4_1, /* State 56 */
R_CMENE, /* State 57 */
R_CMENE, /* State 58 */
R_STAGE4_1, /* State 59 */
R_STAGE4_1, /* State 60 */
R_CMENE, /* State 61 */
R_CMENE, /* State 62 */
R_UNKNOWN, /* State 63 */
R_CMAVOS, /* State 64 */
R_CMENE, /* State 65 */
R_CMAVOS_END_CY, /* State 66 */
R_CMENE, /* State 67 */
R_CMENE, /* State 68 */
R_CMENE, /* State 69 */
R_CMENE, /* State 70 */
R_CMENE, /* State 71 */
R_CMENE, /* State 72 */
R_CMENE, /* State 73 */
R_CMENE, /* State 74 */
R_CMENE, /* State 75 */
R_CMENE, /* State 76 */
R_CMENE, /* State 77 */
R_CMENE, /* State 78 */
R_CMENE, /* State 79 */
R_UNKNOWN, /* State 80 */
R_CMENE, /* State 81 */
R_UNKNOWN, /* State 82 */
R_UNKNOWN, /* State 83 */
R_CMENE, /* State 84 */
R_UNKNOWN, /* State 85 */
R_CMENE, /* State 86 */
R_UNKNOWN, /* State 87 */
R_UNKNOWN, /* State 88 */
R_UNKNOWN, /* State 89 */
R_CMENE, /* State 90 */
R_CMENE, /* State 91 */
R_UNKNOWN, /* State 92 */
R_CMENE, /* State 93 */
R_STAGE4_1, /* State 94 */
R_STAGE4_1, /* State 95 */
R_CMENE, /* State 96 */
R_CMENE, /* State 97 */
R_UNKNOWN, /* State 98 */
R_UNKNOWN, /* State 99 */
R_CMENE, /* State 100 */
R_STAGE4_1, /* State 101 */
R_STAGE4_1, /* State 102 */
R_STAGE4_1, /* State 103 */
R_CMENE, /* State 104 */
R_CMENE, /* State 105 */
R_CMENE, /* State 106 */
R_CMENE, /* State 107 */
R_CMENE, /* State 108 */
R_GISMU_1, /* State 109 */
R_UNKNOWN, /* State 110 */
R_CMENE, /* State 111 */
R_CMENE, /* State 112 */
R_CMENE, /* State 113 */
R_CMENE, /* State 114 */
R_CMENE, /* State 115 */
R_GISMU_1, /* State 116 */
R_CMENE, /* State 117 */
R_CMENE, /* State 118 */
R_CMENE, /* State 119 */
R_CMENE, /* State 120 */
R_CMENE, /* State 121 */
R_GISMU_1, /* State 122 */
R_CMENE, /* State 123 */
R_CMENE, /* State 124 */
R_CMENE, /* State 125 */
R_CMENE, /* State 126 */
R_CMENE, /* State 127 */
R_CMENE, /* State 128 */
R_CMENE, /* State 129 */
R_CMENE, /* State 130 */
R_CMENE, /* State 131 */
R_CMENE, /* State 132 */
R_CMENE, /* State 133 */
R_CMENE, /* State 134 */
R_CMENE, /* State 135 */
R_CMENE, /* State 136 */
R_CMENE, /* State 137 */
R_CMENE, /* State 138 */
R_CMENE, /* State 139 */
R_CMENE, /* State 140 */
R_CMENE, /* State 141 */
R_UNKNOWN, /* State 142 */
R_CMENE, /* State 143 */
R_UNKNOWN, /* State 144 */
R_CMENE, /* State 145 */
R_BAD_SLINKUI, /* State 146 */
R_GISMU_0, /* State 147 */
R_UNKNOWN, /* State 148 */
R_CMENE, /* State 149 */
R_CMENE, /* State 150 */
R_CMENE, /* State 151 */
R_CMENE, /* State 152 */
R_CMENE, /* State 153 */
R_CMENE, /* State 154 */
R_UNKNOWN, /* State 155 */
R_CMENE, /* State 156 */
R_STAGE4_0, /* State 157 */
R_CMENE, /* State 158 */
R_CMENE, /* State 159 */
R_UNKNOWN, /* State 160 */
R_CMENE, /* State 161 */
R_CMENE, /* State 162 */
R_CMENE, /* State 163 */
R_CMENE, /* State 164 */
R_STAGE4_1, /* State 165 */
R_CMENE, /* State 166 */
R_CMENE, /* State 167 */
R_CMENE, /* State 168 */
R_CMENE, /* State 169 */
R_CMENE, /* State 170 */
R_CMENE, /* State 171 */
R_CMENE, /* State 172 */
R_CMENE, /* State 173 */
R_STAGE4_1, /* State 174 */
R_UNKNOWN, /* State 175 */
R_CMENE, /* State 176 */
R_CMENE, /* State 177 */
R_UNKNOWN, /* State 178 */
R_UNKNOWN, /* State 179 */
R_CMENE, /* State 180 */
R_LUJVO_1, /* State 181 */
R_UNKNOWN, /* State 182 */
R_CMENE, /* State 183 */
R_CMENE, /* State 184 */
R_CMENE, /* State 185 */
R_CMENE, /* State 186 */
R_CMENE, /* State 187 */
R_LUJVO_1, /* State 188 */
R_STAGE3_1_CVC, /* State 189 */
R_CMENE, /* State 190 */
R_CMENE, /* State 191 */
R_CMENE, /* State 192 */
R_CMENE, /* State 193 */
R_LUJVO_1, /* State 194 */
R_LUJVO_1, /* State 195 */
R_UNKNOWN, /* State 196 */
R_CMENE, /* State 197 */
R_LUJVO_1, /* State 198 */
R_UNKNOWN, /* State 199 */
R_LUJVO_1, /* State 200 */
R_STAGE4_1, /* State 201 */
R_CMENE, /* State 202 */
R_CMENE, /* State 203 */
R_LUJVO_1, /* State 204 */
R_CMENE, /* State 205 */
R_STAGE4_1, /* State 206 */
R_CMENE, /* State 207 */
R_CMENE, /* State 208 */
R_CMENE, /* State 209 */
R_CMENE, /* State 210 */
R_CMENE, /* State 211 */
R_LUJVO_1, /* State 212 */
R_LUJVO_1, /* State 213 */
R_STAGE4_1, /* State 214 */
R_CMENE, /* State 215 */
R_CMENE, /* State 216 */
R_UNKNOWN, /* State 217 */
R_CMENE, /* State 218 */
R_UNKNOWN, /* State 219 */
R_CMENE, /* State 220 */
R_UNKNOWN, /* State 221 */
R_CMENE, /* State 222 */
R_UNKNOWN, /* State 223 */
R_UNKNOWN, /* State 224 */
R_UNKNOWN, /* State 225 */
R_CMENE, /* State 226 */
R_LUJVO_0, /* State 227 */
R_CMENE, /* State 228 */
R_CMENE, /* State 229 */
R_BAD_SLINKUI, /* State 230 */
R_CMENE, /* State 231 */
R_CMENE, /* State 232 */
R_CMENE, /* State 233 */
R_CMENE, /* State 234 */
R_CMENE, /* State 235 */
R_LUJVO_0, /* State 236 */
R_CMENE, /* State 237 */
R_CMENE, /* State 238 */
R_STAGE4_0, /* State 239 */
R_UNKNOWN, /* State 240 */
R_CMENE, /* State 241 */
R_CMENE, /* State 242 */
R_UNKNOWN, /* State 243 */
R_CMENE, /* State 244 */
R_UNKNOWN, /* State 245 */
R_UNKNOWN, /* State 246 */
R_STAGE4_1, /* State 247 */
R_CMENE, /* State 248 */
R_CMENE, /* State 249 */
R_LUJVO_0, /* State 250 */
R_CMENE, /* State 251 */
R_STAGE4_0, /* State 252 */
R_CMENE, /* State 253 */
R_UNKNOWN, /* State 254 */
R_CMENE, /* State 255 */
R_BAD_TOSMABRU, /* State 256 */
R_BAD_TOSMABRU, /* State 257 */
R_LUJVO_1, /* State 258 */
R_UNKNOWN, /* State 259 */
R_CMENE, /* State 260 */
R_LUJVO_1, /* State 261 */
R_UNKNOWN, /* State 262 */
R_CMENE, /* State 263 */
R_CMENE, /* State 264 */
R_CMENE, /* State 265 */
R_CMENE, /* State 266 */
R_CMENE, /* State 267 */
R_UNKNOWN, /* State 268 */
R_STAGE3_1, /* State 269 */
R_CMENE, /* State 270 */
R_CMENE, /* State 271 */
R_CMENE, /* State 272 */
R_UNKNOWN, /* State 273 */
R_CMENE, /* State 274 */
R_STAGE4_1, /* State 275 */
R_UNKNOWN, /* State 276 */
R_CMENE, /* State 277 */
R_CMENE, /* State 278 */
R_CMENE, /* State 279 */
R_CMENE, /* State 280 */
R_CMENE, /* State 281 */
R_CMENE, /* State 282 */
R_CMENE, /* State 283 */
R_CMENE, /* State 284 */
R_CMENE, /* State 285 */
R_CMENE, /* State 286 */
R_CMENE, /* State 287 */
R_CMENE, /* State 288 */
R_CMENE, /* State 289 */
R_UNKNOWN, /* State 290 */
R_CMENE, /* State 291 */
R_STAGE4_1, /* State 292 */
R_UNKNOWN, /* State 293 */
R_CMENE, /* State 294 */
R_UNKNOWN, /* State 295 */
R_UNKNOWN, /* State 296 */
R_CMENE, /* State 297 */
R_UNKNOWN, /* State 298 */
R_STAGE4_1, /* State 299 */
R_CMENE, /* State 300 */
R_CMENE, /* State 301 */
R_CMENE, /* State 302 */
R_CMENE, /* State 303 */
R_CMENE, /* State 304 */
R_CMENE, /* State 305 */
R_CMENE, /* State 306 */
R_CMENE, /* State 307 */
R_LUJVO_0, /* State 308 */
R_UNKNOWN, /* State 309 */
R_CMENE, /* State 310 */
R_CMENE, /* State 311 */
R_CMENE, /* State 312 */
R_CMENE, /* State 313 */
R_UNKNOWN, /* State 314 */
R_CMENE, /* State 315 */
R_UNKNOWN, /* State 316 */
R_CMENE, /* State 317 */
R_BAD_SLINKUI, /* State 318 */
R_BAD_SLINKUI, /* State 319 */
R_STAGE3_0, /* State 320 */
R_CMENE, /* State 321 */
R_CMENE, /* State 322 */
R_CMENE, /* State 323 */
R_UNKNOWN, /* State 324 */
R_CMENE, /* State 325 */
R_BAD_SLINKUI, /* State 326 */
R_CMENE, /* State 327 */
R_CMENE, /* State 328 */
R_CMENE, /* State 329 */
R_CMENE, /* State 330 */
R_CMENE, /* State 331 */
R_CMENE, /* State 332 */
R_CMENE, /* State 333 */
R_UNKNOWN, /* State 334 */
R_CMENE, /* State 335 */
R_STAGE4_1, /* State 336 */
R_STAGE4_1, /* State 337 */
R_UNKNOWN, /* State 338 */
R_CMENE, /* State 339 */
R_STAGE4_1, /* State 340 */
R_UNKNOWN, /* State 341 */
R_UNKNOWN, /* State 342 */
R_CMENE, /* State 343 */
R_CMENE, /* State 344 */
R_CMENE, /* State 345 */
R_UNKNOWN, /* State 346 */
R_UNKNOWN, /* State 347 */
R_UNKNOWN, /* State 348 */
R_CMENE, /* State 349 */
R_UNKNOWN, /* State 350 */
R_CMENE, /* State 351 */
R_LUJVO_1, /* State 352 */
R_CMENE, /* State 353 */
R_CMENE, /* State 354 */
R_CMENE, /* State 355 */
R_CMENE, /* State 356 */
R_CMENE, /* State 357 */
R_CMENE, /* State 358 */
R_CMENE, /* State 359 */
R_CMENE, /* State 360 */
R_LUJVO_1, /* State 361 */
R_UNKNOWN, /* State 362 */
R_CMENE, /* State 363 */
R_CMENE, /* State 364 */
R_CMENE, /* State 365 */
R_LUJVO_1, /* State 366 */
R_CMENE, /* State 367 */
R_LUJVO_1, /* State 368 */
R_STAGE4_1, /* State 369 */
R_CMENE, /* State 370 */
R_LUJVO_1, /* State 371 */
R_CMENE, /* State 372 */
R_CMENE, /* State 373 */
R_LUJVO_0, /* State 374 */
R_CMENE, /* State 375 */
R_STAGE4_0, /* State 376 */
R_CMENE, /* State 377 */
R_STAGE4_0, /* State 378 */
R_CMENE, /* State 379 */
R_CMENE, /* State 380 */
R_STAGE4_0, /* State 381 */
R_CMENE, /* State 382 */
R_CMENE, /* State 383 */
R_CMENE, /* State 384 */
R_CMENE, /* State 385 */
R_CMENE, /* State 386 */
R_CMENE, /* State 387 */
R_CMENE, /* State 388 */
R_CMENE, /* State 389 */
R_UNKNOWN, /* State 390 */
R_CMENE, /* State 391 */
R_CMENE, /* State 392 */
R_CMENE, /* State 393 */
R_CMENE, /* State 394 */
R_CMENE, /* State 395 */
R_CMENE, /* State 396 */
R_CMENE, /* State 397 */
R_CMENE, /* State 398 */
R_CMENE, /* State 399 */
R_LUJVO_0, /* State 400 */
R_UNKNOWN, /* State 401 */
R_CMENE, /* State 402 */
R_CMENE, /* State 403 */
R_CMENE, /* State 404 */
R_CMENE, /* State 405 */
R_CMENE, /* State 406 */
R_CMENE, /* State 407 */
R_CMENE, /* State 408 */
R_STAGE4_0, /* State 409 */
R_CMENE, /* State 410 */
R_CMENE, /* State 411 */
R_UNKNOWN, /* State 412 */
R_CMENE, /* State 413 */
R_LUJVO_0, /* State 414 */
R_LUJVO_0, /* State 415 */
R_CMENE, /* State 416 */
R_CMENE, /* State 417 */
R_UNKNOWN, /* State 418 */
R_CMENE, /* State 419 */
R_CMENE, /* State 420 */
R_CMENE, /* State 421 */
R_CMENE, /* State 422 */
R_UNKNOWN, /* State 423 */
R_CMENE, /* State 424 */
R_CMENE, /* State 425 */
R_CMENE, /* State 426 */
R_CMENE, /* State 427 */
R_CMENE, /* State 428 */
R_CMENE, /* State 429 */
R_CMENE, /* State 430 */
R_CMENE, /* State 431 */
R_CMENE, /* State 432 */
R_CMENE, /* State 433 */
R_CMENE, /* State 434 */
R_CMENE, /* State 435 */
R_CMENE, /* State 436 */
R_UNKNOWN, /* State 437 */
R_CMENE, /* State 438 */
R_UNKNOWN, /* State 439 */
R_CMENE, /* State 440 */
R_CMENE, /* State 441 */
R_CMENE, /* State 442 */
R_BAD_TOSMABRU, /* State 443 */
R_UNKNOWN, /* State 444 */
R_LUJVO_1, /* State 445 */
R_UNKNOWN, /* State 446 */
R_UNKNOWN, /* State 447 */
R_CMENE, /* State 448 */
R_LUJVO_1, /* State 449 */
R_CMENE, /* State 450 */
R_CMENE, /* State 451 */
R_CMENE, /* State 452 */
R_X_STAGE3_1_CVC, /* State 453 */
R_CMENE, /* State 454 */
R_CMENE, /* State 455 */
R_CMENE, /* State 456 */
R_UNKNOWN, /* State 457 */
R_UNKNOWN, /* State 458 */
R_UNKNOWN, /* State 459 */
R_CMENE, /* State 460 */
R_UNKNOWN, /* State 461 */
R_CMENE, /* State 462 */
R_CMENE, /* State 463 */
R_UNKNOWN, /* State 464 */
R_CMENE, /* State 465 */
R_LUJVO_1, /* State 466 */
R_LUJVO_1, /* State 467 */
R_UNKNOWN, /* State 468 */
R_CMENE, /* State 469 */
R_LUJVO_1, /* State 470 */
R_UNKNOWN, /* State 471 */
R_CMENE, /* State 472 */
R_CMENE, /* State 473 */
R_UNKNOWN, /* State 474 */
R_LUJVO_1, /* State 475 */
R_CMENE, /* State 476 */
R_CMENE, /* State 477 */
R_UNKNOWN, /* State 478 */
R_CMENE, /* State 479 */
R_UNKNOWN, /* State 480 */
R_STAGE4_0, /* State 481 */
R_CMENE, /* State 482 */
R_CMENE, /* State 483 */
R_CMENE, /* State 484 */
R_CMENE, /* State 485 */
R_CMENE, /* State 486 */
R_LUJVO_0, /* State 487 */
R_X_STAGE3_0_CVC, /* State 488 */
R_CMENE, /* State 489 */
R_CMENE, /* State 490 */
R_CMENE, /* State 491 */
R_CMENE, /* State 492 */
R_UNKNOWN, /* State 493 */
R_UNKNOWN, /* State 494 */
R_CMENE, /* State 495 */
R_UNKNOWN, /* State 496 */
R_UNKNOWN, /* State 497 */
R_CMENE, /* State 498 */
R_CULTURAL_LUJVO_0, /* State 499 */
R_CULTURAL_LUJVO_0, /* State 500 */
R_UNKNOWN, /* State 501 */
R_UNKNOWN, /* State 502 */
R_CMENE, /* State 503 */
R_CMENE, /* State 504 */
R_UNKNOWN, /* State 505 */
R_UNKNOWN, /* State 506 */
R_CMENE, /* State 507 */
R_BAD_TOSMABRU, /* State 508 */
R_CMENE, /* State 509 */
R_CMENE, /* State 510 */
R_CMENE, /* State 511 */
R_UNKNOWN, /* State 512 */
R_CMENE, /* State 513 */
R_BAD_TOSMABRU, /* State 514 */
R_CMENE, /* State 515 */
R_UNKNOWN, /* State 516 */
R_X_STAGE3_1, /* State 517 */
R_CMENE, /* State 518 */
R_CMENE, /* State 519 */
R_CMENE, /* State 520 */
R_UNKNOWN, /* State 521 */
R_CMENE, /* State 522 */
R_LUJVO_1, /* State 523 */
R_UNKNOWN, /* State 524 */
R_UNKNOWN, /* State 525 */
R_CMENE, /* State 526 */
R_CMENE, /* State 527 */
R_CMENE, /* State 528 */
R_CMENE, /* State 529 */
R_CMENE, /* State 530 */
R_CMENE, /* State 531 */
R_CMENE, /* State 532 */
R_CMENE, /* State 533 */
R_CMENE, /* State 534 */
R_CMENE, /* State 535 */
R_CMENE, /* State 536 */
R_CMENE, /* State 537 */
R_CMENE, /* State 538 */
R_UNKNOWN, /* State 539 */
R_CMENE, /* State 540 */
R_LUJVO_1, /* State 541 */
R_LUJVO_1, /* State 542 */
R_UNKNOWN, /* State 543 */
R_CMENE, /* State 544 */
R_LUJVO_0, /* State 545 */
R_UNKNOWN, /* State 546 */
R_X_STAGE3_0, /* State 547 */
R_CMENE, /* State 548 */
R_CMENE, /* State 549 */
R_CMENE, /* State 550 */
R_UNKNOWN, /* State 551 */
R_CMENE, /* State 552 */
R_STAGE4_0, /* State 553 */
R_UNKNOWN, /* State 554 */
R_CMENE, /* State 555 */
R_LUJVO_0, /* State 556 */
R_CMENE, /* State 557 */
R_CMENE, /* State 558 */
R_UNKNOWN, /* State 559 */
R_CMENE, /* State 560 */
R_CMENE, /* State 561 */
R_CMENE, /* State 562 */
R_UNKNOWN, /* State 563 */
R_UNKNOWN, /* State 564 */
R_UNKNOWN, /* State 565 */
R_UNKNOWN, /* State 566 */
R_UNKNOWN, /* State 567 */
R_UNKNOWN, /* State 568 */
R_CMENE, /* State 569 */
R_CMENE, /* State 570 */
R_CMENE, /* State 571 */
R_CMENE, /* State 572 */
R_UNKNOWN, /* State 573 */
R_CMENE, /* State 574 */
R_CMENE, /* State 575 */
R_UNKNOWN, /* State 576 */
R_UNKNOWN, /* State 577 */
R_LUJVO_1, /* State 578 */
R_UNKNOWN, /* State 579 */
R_UNKNOWN, /* State 580 */
R_UNKNOWN, /* State 581 */
R_UNKNOWN, /* State 582 */
R_CMENE, /* State 583 */
R_UNKNOWN, /* State 584 */
R_CMENE, /* State 585 */
R_CMENE, /* State 586 */
R_CMENE, /* State 587 */
R_CMENE, /* State 588 */
R_LUJVO_1, /* State 589 */
R_CMENE, /* State 590 */
R_CMENE, /* State 591 */
R_CMENE, /* State 592 */
R_UNKNOWN, /* State 593 */
R_UNKNOWN, /* State 594 */
R_CMENE, /* State 595 */
R_CMENE, /* State 596 */
R_CMENE, /* State 597 */
R_LUJVO_0, /* State 598 */
R_UNKNOWN, /* State 599 */
R_CMENE, /* State 600 */
R_CMENE, /* State 601 */
R_CMENE, /* State 602 */
R_UNKNOWN, /* State 603 */
R_CMENE, /* State 604 */
R_CULTURAL_LUJVO_0, /* State 605 */
R_UNKNOWN, /* State 606 */
R_UNKNOWN, /* State 607 */
R_UNKNOWN, /* State 608 */
R_UNKNOWN, /* State 609 */
R_UNKNOWN, /* State 610 */
R_CMENE, /* State 611 */
R_BAD_TOSMABRU, /* State 612 */
R_UNKNOWN, /* State 613 */
R_CMENE, /* State 614 */
R_UNKNOWN, /* State 615 */
R_CMENE, /* State 616 */
R_UNKNOWN, /* State 617 */
R_UNKNOWN, /* State 618 */
R_UNKNOWN, /* State 619 */
R_UNKNOWN, /* State 620 */
R_UNKNOWN, /* State 621 */
R_CMENE, /* State 622 */
R_CULTURAL_LUJVO_1, /* State 623 */
R_CULTURAL_LUJVO_1, /* State 624 */
R_CULTURAL_LUJVO_1, /* State 625 */
R_CMENE, /* State 626 */
R_CMENE, /* State 627 */
R_CMENE, /* State 628 */
R_STAGE4_1, /* State 629 */
R_CMENE, /* State 630 */
R_UNKNOWN, /* State 631 */
R_UNKNOWN, /* State 632 */
R_UNKNOWN, /* State 633 */
R_UNKNOWN, /* State 634 */
R_UNKNOWN, /* State 635 */
R_LUJVO_0, /* State 636 */
R_CMENE, /* State 637 */
R_CMENE, /* State 638 */
R_UNKNOWN, /* State 639 */
R_UNKNOWN, /* State 640 */
R_UNKNOWN, /* State 641 */
R_CMENE, /* State 642 */
R_CULTURAL_LUJVO_0, /* State 643 */
R_CMENE, /* State 644 */
R_UNKNOWN, /* State 645 */
R_UNKNOWN, /* State 646 */
R_UNKNOWN, /* State 647 */
R_UNKNOWN, /* State 648 */
R_UNKNOWN, /* State 649 */
R_UNKNOWN, /* State 650 */
R_UNKNOWN, /* State 651 */
R_CMENE, /* State 652 */
R_CULTURAL_BAD_TOSMABRU, /* State 653 */
R_CULTURAL_BAD_TOSMABRU, /* State 654 */
R_CULTURAL_BAD_TOSMABRU, /* State 655 */
R_UNKNOWN, /* State 656 */
R_UNKNOWN, /* State 657 */
R_UNKNOWN, /* State 658 */
R_CMENE, /* State 659 */
R_UNKNOWN, /* State 660 */
R_STAGE4_1, /* State 661 */
R_CMENE, /* State 662 */
R_CMENE, /* State 663 */
R_UNKNOWN, /* State 664 */
R_LUJVO_0, /* State 665 */
R_UNKNOWN, /* State 666 */
R_UNKNOWN, /* State 667 */
R_UNKNOWN, /* State 668 */
R_UNKNOWN, /* State 669 */
R_UNKNOWN, /* State 670 */
R_UNKNOWN, /* State 671 */
R_UNKNOWN, /* State 672 */
R_UNKNOWN, /* State 673 */
R_BAD_TOSMABRU, /* State 674 */
R_UNKNOWN, /* State 675 */
R_UNKNOWN, /* State 676 */
R_UNKNOWN, /* State 677 */
R_CMENE, /* State 678 */
R_UNKNOWN, /* State 679 */
R_UNKNOWN, /* State 680 */
R_UNKNOWN, /* State 681 */
R_CULTURAL_LUJVO_1, /* State 682 */
R_CMENE, /* State 683 */
R_CULTURAL_LUJVO_1, /* State 684 */
R_CULTURAL_LUJVO_1, /* State 685 */
R_CMENE, /* State 686 */
R_LUJVO_1, /* State 687 */
R_UNKNOWN, /* State 688 */
R_UNKNOWN, /* State 689 */
R_UNKNOWN, /* State 690 */
R_LUJVO_0, /* State 691 */
R_UNKNOWN, /* State 692 */
R_UNKNOWN, /* State 693 */
R_UNKNOWN, /* State 694 */
R_CULTURAL_LUJVO_0, /* State 695 */
R_UNKNOWN, /* State 696 */
R_UNKNOWN, /* State 697 */
R_UNKNOWN, /* State 698 */
R_BAD_TOSMABRU, /* State 699 */
R_UNKNOWN, /* State 700 */
R_UNKNOWN, /* State 701 */
R_UNKNOWN, /* State 702 */
R_CMENE, /* State 703 */
R_CULTURAL_BAD_TOSMABRU, /* State 704 */
R_CULTURAL_BAD_TOSMABRU, /* State 705 */
R_UNKNOWN, /* State 706 */
R_CMENE, /* State 707 */
R_CMENE, /* State 708 */
R_CMENE, /* State 709 */
R_UNKNOWN, /* State 710 */
R_UNKNOWN, /* State 711 */
R_UNKNOWN, /* State 712 */
R_UNKNOWN, /* State 713 */
R_UNKNOWN, /* State 714 */
R_UNKNOWN, /* State 715 */
R_CULTURAL_LUJVO_0, /* State 716 */
R_UNKNOWN, /* State 717 */
R_UNKNOWN, /* State 718 */
R_UNKNOWN, /* State 719 */
R_UNKNOWN, /* State 720 */
R_UNKNOWN, /* State 721 */
R_UNKNOWN, /* State 722 */
R_UNKNOWN, /* State 723 */
R_CULTURAL_BAD_TOSMABRU, /* State 724 */
R_UNKNOWN, /* State 725 */
R_LUJVO_1, /* State 726 */
R_CMENE, /* State 727 */
R_CMENE, /* State 728 */
R_UNKNOWN, /* State 729 */
R_UNKNOWN, /* State 730 */
R_UNKNOWN, /* State 731 */
R_UNKNOWN, /* State 732 */
R_UNKNOWN, /* State 733 */
R_UNKNOWN, /* State 734 */
R_UNKNOWN, /* State 735 */
R_UNKNOWN  /* State 736 */
};

enum state_attribute morf_attribute[] = {
AT_UNKNOWN, /* State 0 */
AT_UNKNOWN, /* State 1 */
AT_UNKNOWN, /* State 2 */
AT_UNKNOWN, /* State 3 */
AT_UNKNOWN, /* State 4 */
AT_UNKNOWN, /* State 5 */
AT_UNKNOWN, /* State 6 */
AT_UNKNOWN, /* State 7 */
AT_UNKNOWN, /* State 8 */
AT_UNKNOWN, /* State 9 */
AT_UNKNOWN, /* State 10 */
AT_UNKNOWN, /* State 11 */
AT_UNKNOWN, /* State 12 */
AT_UNKNOWN, /* State 13 */
AT_UNKNOWN, /* State 14 */
AT_UNKNOWN, /* State 15 */
AT_UNKNOWN, /* State 16 */
AT_UNKNOWN, /* State 17 */
AT_UNKNOWN, /* State 18 */
AT_UNKNOWN, /* State 19 */
AT_UNKNOWN, /* State 20 */
AT_UNKNOWN, /* State 21 */
AT_UNKNOWN, /* State 22 */
AT_UNKNOWN, /* State 23 */
AT_UNKNOWN, /* State 24 */
AT_UNKNOWN, /* State 25 */
AT_UNKNOWN, /* State 26 */
AT_UNKNOWN, /* State 27 */
AT_UNKNOWN, /* State 28 */
AT_UNKNOWN, /* State 29 */
AT_UNKNOWN, /* State 30 */
AT_UNKNOWN, /* State 31 */
AT_UNKNOWN, /* State 32 */
AT_UNKNOWN, /* State 33 */
AT_UNKNOWN, /* State 34 */
AT_UNKNOWN, /* State 35 */
AT_UNKNOWN, /* State 36 */
AT_UNKNOWN, /* State 37 */
AT_UNKNOWN, /* State 38 */
AT_UNKNOWN, /* State 39 */
AT_UNKNOWN, /* State 40 */
AT_UNKNOWN, /* State 41 */
AT_UNKNOWN, /* State 42 */
AT_UNKNOWN, /* State 43 */
AT_UNKNOWN, /* State 44 */
AT_UNKNOWN, /* State 45 */
AT_UNKNOWN, /* State 46 */
AT_UNKNOWN, /* State 47 */
AT_UNKNOWN, /* State 48 */
AT_UNKNOWN, /* State 49 */
AT_UNKNOWN, /* State 50 */
AT_UNKNOWN, /* State 51 */
AT_UNKNOWN, /* State 52 */
AT_UNKNOWN, /* State 53 */
AT_UNKNOWN, /* State 54 */
AT_UNKNOWN, /* State 55 */
AT_UNKNOWN, /* State 56 */
AT_UNKNOWN, /* State 57 */
AT_UNKNOWN, /* State 58 */
AT_UNKNOWN, /* State 59 */
AT_UNKNOWN, /* State 60 */
AT_UNKNOWN, /* State 61 */
AT_UNKNOWN, /* State 62 */
AT_UNKNOWN, /* State 63 */
AT_UNKNOWN, /* State 64 */
AT_UNKNOWN, /* State 65 */
AT_UNKNOWN, /* State 66 */
AT_UNKNOWN, /* State 67 */
AT_UNKNOWN, /* State 68 */
AT_UNKNOWN, /* State 69 */
AT_UNKNOWN, /* State 70 */
AT_UNKNOWN, /* State 71 */
AT_UNKNOWN, /* State 72 */
AT_UNKNOWN, /* State 73 */
AT_UNKNOWN, /* State 74 */
AT_UNKNOWN, /* State 75 */
AT_UNKNOWN, /* State 76 */
AT_UNKNOWN, /* State 77 */
AT_UNKNOWN, /* State 78 */
AT_UNKNOWN, /* State 79 */
AT_UNKNOWN, /* State 80 */
AT_UNKNOWN, /* State 81 */
AT_UNKNOWN, /* State 82 */
AT_UNKNOWN, /* State 83 */
AT_UNKNOWN, /* State 84 */
AT_UNKNOWN, /* State 85 */
AT_UNKNOWN, /* State 86 */
AT_UNKNOWN, /* State 87 */
AT_UNKNOWN, /* State 88 */
AT_UNKNOWN, /* State 89 */
AT_UNKNOWN, /* State 90 */
AT_UNKNOWN, /* State 91 */
AT_UNKNOWN, /* State 92 */
AT_UNKNOWN, /* State 93 */
AT_UNKNOWN, /* State 94 */
AT_UNKNOWN, /* State 95 */
AT_UNKNOWN, /* State 96 */
AT_UNKNOWN, /* State 97 */
AT_UNKNOWN, /* State 98 */
AT_UNKNOWN, /* State 99 */
AT_UNKNOWN, /* State 100 */
AT_UNKNOWN, /* State 101 */
AT_UNKNOWN, /* State 102 */
AT_UNKNOWN, /* State 103 */
AT_UNKNOWN, /* State 104 */
AT_UNKNOWN, /* State 105 */
AT_UNKNOWN, /* State 106 */
AT_UNKNOWN, /* State 107 */
AT_UNKNOWN, /* State 108 */
AT_UNKNOWN, /* State 109 */
AT_UNKNOWN, /* State 110 */
AT_UNKNOWN, /* State 111 */
AT_UNKNOWN, /* State 112 */
AT_UNKNOWN, /* State 113 */
AT_S3_3, /* State 114 */
AT_S3_3, /* State 115 */
AT_UNKNOWN, /* State 116 */
AT_UNKNOWN, /* State 117 */
AT_UNKNOWN, /* State 118 */
AT_UNKNOWN, /* State 119 */
AT_UNKNOWN, /* State 120 */
AT_S3_3, /* State 121 */
AT_UNKNOWN, /* State 122 */
AT_UNKNOWN, /* State 123 */
AT_UNKNOWN, /* State 124 */
AT_UNKNOWN, /* State 125 */
AT_UNKNOWN, /* State 126 */
AT_UNKNOWN, /* State 127 */
AT_UNKNOWN, /* State 128 */
AT_UNKNOWN, /* State 129 */
AT_UNKNOWN, /* State 130 */
AT_UNKNOWN, /* State 131 */
AT_UNKNOWN, /* State 132 */
AT_UNKNOWN, /* State 133 */
AT_UNKNOWN, /* State 134 */
AT_UNKNOWN, /* State 135 */
AT_UNKNOWN, /* State 136 */
AT_UNKNOWN, /* State 137 */
AT_UNKNOWN, /* State 138 */
AT_UNKNOWN, /* State 139 */
AT_UNKNOWN, /* State 140 */
AT_UNKNOWN, /* State 141 */
AT_UNKNOWN, /* State 142 */
AT_UNKNOWN, /* State 143 */
AT_UNKNOWN, /* State 144 */
AT_UNKNOWN, /* State 145 */
AT_UNKNOWN, /* State 146 */
AT_UNKNOWN, /* State 147 */
AT_UNKNOWN, /* State 148 */
AT_UNKNOWN, /* State 149 */
AT_UNKNOWN, /* State 150 */
AT_UNKNOWN, /* State 151 */
AT_UNKNOWN, /* State 152 */
AT_UNKNOWN, /* State 153 */
AT_UNKNOWN, /* State 154 */
AT_UNKNOWN, /* State 155 */
AT_UNKNOWN, /* State 156 */
AT_UNKNOWN, /* State 157 */
AT_UNKNOWN, /* State 158 */
AT_UNKNOWN, /* State 159 */
AT_UNKNOWN, /* State 160 */
AT_UNKNOWN, /* State 161 */
AT_UNKNOWN, /* State 162 */
AT_UNKNOWN, /* State 163 */
AT_UNKNOWN, /* State 164 */
AT_UNKNOWN, /* State 165 */
AT_UNKNOWN, /* State 166 */
AT_UNKNOWN, /* State 167 */
AT_UNKNOWN, /* State 168 */
AT_UNKNOWN, /* State 169 */
AT_UNKNOWN, /* State 170 */
AT_UNKNOWN, /* State 171 */
AT_UNKNOWN, /* State 172 */
AT_UNKNOWN, /* State 173 */
AT_UNKNOWN, /* State 174 */
AT_UNKNOWN, /* State 175 */
AT_UNKNOWN, /* State 176 */
AT_UNKNOWN, /* State 177 */
AT_UNKNOWN, /* State 178 */
AT_UNKNOWN, /* State 179 */
AT_UNKNOWN, /* State 180 */
AT_UNKNOWN, /* State 181 */
AT_UNKNOWN, /* State 182 */
AT_UNKNOWN, /* State 183 */
AT_UNKNOWN, /* State 184 */
AT_UNKNOWN, /* State 185 */
AT_S3_4, /* State 186 */
AT_S3_4, /* State 187 */
AT_UNKNOWN, /* State 188 */
AT_UNKNOWN, /* State 189 */
AT_UNKNOWN, /* State 190 */
AT_UNKNOWN, /* State 191 */
AT_UNKNOWN, /* State 192 */
AT_UNKNOWN, /* State 193 */
AT_UNKNOWN, /* State 194 */
AT_UNKNOWN, /* State 195 */
AT_UNKNOWN, /* State 196 */
AT_UNKNOWN, /* State 197 */
AT_UNKNOWN, /* State 198 */
AT_UNKNOWN, /* State 199 */
AT_UNKNOWN, /* State 200 */
AT_UNKNOWN, /* State 201 */
AT_UNKNOWN, /* State 202 */
AT_UNKNOWN, /* State 203 */
AT_UNKNOWN, /* State 204 */
AT_UNKNOWN, /* State 205 */
AT_UNKNOWN, /* State 206 */
AT_UNKNOWN, /* State 207 */
AT_UNKNOWN, /* State 208 */
AT_UNKNOWN, /* State 209 */
AT_UNKNOWN, /* State 210 */
AT_UNKNOWN, /* State 211 */
AT_UNKNOWN, /* State 212 */
AT_UNKNOWN, /* State 213 */
AT_UNKNOWN, /* State 214 */
AT_UNKNOWN, /* State 215 */
AT_UNKNOWN, /* State 216 */
AT_UNKNOWN, /* State 217 */
AT_UNKNOWN, /* State 218 */
AT_UNKNOWN, /* State 219 */
AT_UNKNOWN, /* State 220 */
AT_UNKNOWN, /* State 221 */
AT_UNKNOWN, /* State 222 */
AT_UNKNOWN, /* State 223 */
AT_UNKNOWN, /* State 224 */
AT_UNKNOWN, /* State 225 */
AT_UNKNOWN, /* State 226 */
AT_UNKNOWN, /* State 227 */
AT_UNKNOWN, /* State 228 */
AT_UNKNOWN, /* State 229 */
AT_UNKNOWN, /* State 230 */
AT_UNKNOWN, /* State 231 */
AT_UNKNOWN, /* State 232 */
AT_UNKNOWN, /* State 233 */
AT_S3_4, /* State 234 */
AT_S3_4, /* State 235 */
AT_UNKNOWN, /* State 236 */
AT_UNKNOWN, /* State 237 */
AT_UNKNOWN, /* State 238 */
AT_UNKNOWN, /* State 239 */
AT_UNKNOWN, /* State 240 */
AT_UNKNOWN, /* State 241 */
AT_UNKNOWN, /* State 242 */
AT_UNKNOWN, /* State 243 */
AT_UNKNOWN, /* State 244 */
AT_UNKNOWN, /* State 245 */
AT_UNKNOWN, /* State 246 */
AT_UNKNOWN, /* State 247 */
AT_UNKNOWN, /* State 248 */
AT_UNKNOWN, /* State 249 */
AT_UNKNOWN, /* State 250 */
AT_UNKNOWN, /* State 251 */
AT_UNKNOWN, /* State 252 */
AT_UNKNOWN, /* State 253 */
AT_UNKNOWN, /* State 254 */
AT_UNKNOWN, /* State 255 */
AT_UNKNOWN, /* State 256 */
AT_UNKNOWN, /* State 257 */
AT_UNKNOWN, /* State 258 */
AT_UNKNOWN, /* State 259 */
AT_UNKNOWN, /* State 260 */
AT_UNKNOWN, /* State 261 */
AT_UNKNOWN, /* State 262 */
AT_UNKNOWN, /* State 263 */
AT_UNKNOWN, /* State 264 */
AT_UNKNOWN, /* State 265 */
AT_UNKNOWN, /* State 266 */
AT_UNKNOWN, /* State 267 */
AT_UNKNOWN, /* State 268 */
AT_UNKNOWN, /* State 269 */
AT_UNKNOWN, /* State 270 */
AT_UNKNOWN, /* State 271 */
AT_UNKNOWN, /* State 272 */
AT_UNKNOWN, /* State 273 */
AT_UNKNOWN, /* State 274 */
AT_UNKNOWN, /* State 275 */
AT_UNKNOWN, /* State 276 */
AT_UNKNOWN, /* State 277 */
AT_UNKNOWN, /* State 278 */
AT_UNKNOWN, /* State 279 */
AT_UNKNOWN, /* State 280 */
AT_UNKNOWN, /* State 281 */
AT_UNKNOWN, /* State 282 */
AT_UNKNOWN, /* State 283 */
AT_UNKNOWN, /* State 284 */
AT_UNKNOWN, /* State 285 */
AT_UNKNOWN, /* State 286 */
AT_UNKNOWN, /* State 287 */
AT_UNKNOWN, /* State 288 */
AT_UNKNOWN, /* State 289 */
AT_UNKNOWN, /* State 290 */
AT_UNKNOWN, /* State 291 */
AT_UNKNOWN, /* State 292 */
AT_UNKNOWN, /* State 293 */
AT_UNKNOWN, /* State 294 */
AT_UNKNOWN, /* State 295 */
AT_UNKNOWN, /* State 296 */
AT_UNKNOWN, /* State 297 */
AT_UNKNOWN, /* State 298 */
AT_UNKNOWN, /* State 299 */
AT_UNKNOWN, /* State 300 */
AT_UNKNOWN, /* State 301 */
AT_UNKNOWN, /* State 302 */
AT_UNKNOWN, /* State 303 */
AT_UNKNOWN, /* State 304 */
AT_UNKNOWN, /* State 305 */
AT_UNKNOWN, /* State 306 */
AT_UNKNOWN, /* State 307 */
AT_UNKNOWN, /* State 308 */
AT_UNKNOWN, /* State 309 */
AT_UNKNOWN, /* State 310 */
AT_UNKNOWN, /* State 311 */
AT_UNKNOWN, /* State 312 */
AT_UNKNOWN, /* State 313 */
AT_UNKNOWN, /* State 314 */
AT_UNKNOWN, /* State 315 */
AT_UNKNOWN, /* State 316 */
AT_UNKNOWN, /* State 317 */
AT_UNKNOWN, /* State 318 */
AT_UNKNOWN, /* State 319 */
AT_UNKNOWN, /* State 320 */
AT_UNKNOWN, /* State 321 */
AT_UNKNOWN, /* State 322 */
AT_UNKNOWN, /* State 323 */
AT_UNKNOWN, /* State 324 */
AT_UNKNOWN, /* State 325 */
AT_UNKNOWN, /* State 326 */
AT_UNKNOWN, /* State 327 */
AT_UNKNOWN, /* State 328 */
AT_UNKNOWN, /* State 329 */
AT_UNKNOWN, /* State 330 */
AT_UNKNOWN, /* State 331 */
AT_UNKNOWN, /* State 332 */
AT_UNKNOWN, /* State 333 */
AT_UNKNOWN, /* State 334 */
AT_UNKNOWN, /* State 335 */
AT_UNKNOWN, /* State 336 */
AT_UNKNOWN, /* State 337 */
AT_UNKNOWN, /* State 338 */
AT_UNKNOWN, /* State 339 */
AT_UNKNOWN, /* State 340 */
AT_UNKNOWN, /* State 341 */
AT_UNKNOWN, /* State 342 */
AT_UNKNOWN, /* State 343 */
AT_UNKNOWN, /* State 344 */
AT_UNKNOWN, /* State 345 */
AT_UNKNOWN, /* State 346 */
AT_UNKNOWN, /* State 347 */
AT_UNKNOWN, /* State 348 */
AT_UNKNOWN, /* State 349 */
AT_UNKNOWN, /* State 350 */
AT_UNKNOWN, /* State 351 */
AT_UNKNOWN, /* State 352 */
AT_UNKNOWN, /* State 353 */
AT_UNKNOWN, /* State 354 */
AT_XS3_3, /* State 355 */
AT_XS3_3, /* State 356 */
AT_XS3_3, /* State 357 */
AT_UNKNOWN, /* State 358 */
AT_UNKNOWN, /* State 359 */
AT_UNKNOWN, /* State 360 */
AT_UNKNOWN, /* State 361 */
AT_UNKNOWN, /* State 362 */
AT_UNKNOWN, /* State 363 */
AT_UNKNOWN, /* State 364 */
AT_UNKNOWN, /* State 365 */
AT_UNKNOWN, /* State 366 */
AT_UNKNOWN, /* State 367 */
AT_UNKNOWN, /* State 368 */
AT_UNKNOWN, /* State 369 */
AT_UNKNOWN, /* State 370 */
AT_UNKNOWN, /* State 371 */
AT_UNKNOWN, /* State 372 */
AT_UNKNOWN, /* State 373 */
AT_UNKNOWN, /* State 374 */
AT_UNKNOWN, /* State 375 */
AT_UNKNOWN, /* State 376 */
AT_UNKNOWN, /* State 377 */
AT_UNKNOWN, /* State 378 */
AT_UNKNOWN, /* State 379 */
AT_UNKNOWN, /* State 380 */
AT_UNKNOWN, /* State 381 */
AT_UNKNOWN, /* State 382 */
AT_UNKNOWN, /* State 383 */
AT_UNKNOWN, /* State 384 */
AT_UNKNOWN, /* State 385 */
AT_UNKNOWN, /* State 386 */
AT_UNKNOWN, /* State 387 */
AT_UNKNOWN, /* State 388 */
AT_UNKNOWN, /* State 389 */
AT_UNKNOWN, /* State 390 */
AT_UNKNOWN, /* State 391 */
AT_UNKNOWN, /* State 392 */
AT_UNKNOWN, /* State 393 */
AT_XS3_3, /* State 394 */
AT_XS3_3, /* State 395 */
AT_UNKNOWN, /* State 396 */
AT_UNKNOWN, /* State 397 */
AT_UNKNOWN, /* State 398 */
AT_UNKNOWN, /* State 399 */
AT_UNKNOWN, /* State 400 */
AT_UNKNOWN, /* State 401 */
AT_UNKNOWN, /* State 402 */
AT_UNKNOWN, /* State 403 */
AT_UNKNOWN, /* State 404 */
AT_XS3_3, /* State 405 */
AT_XS3_3, /* State 406 */
AT_UNKNOWN, /* State 407 */
AT_XS3_3, /* State 408 */
AT_UNKNOWN, /* State 409 */
AT_UNKNOWN, /* State 410 */
AT_UNKNOWN, /* State 411 */
AT_UNKNOWN, /* State 412 */
AT_UNKNOWN, /* State 413 */
AT_UNKNOWN, /* State 414 */
AT_UNKNOWN, /* State 415 */
AT_UNKNOWN, /* State 416 */
AT_UNKNOWN, /* State 417 */
AT_UNKNOWN, /* State 418 */
AT_UNKNOWN, /* State 419 */
AT_UNKNOWN, /* State 420 */
AT_UNKNOWN, /* State 421 */
AT_UNKNOWN, /* State 422 */
AT_UNKNOWN, /* State 423 */
AT_UNKNOWN, /* State 424 */
AT_UNKNOWN, /* State 425 */
AT_UNKNOWN, /* State 426 */
AT_UNKNOWN, /* State 427 */
AT_UNKNOWN, /* State 428 */
AT_UNKNOWN, /* State 429 */
AT_UNKNOWN, /* State 430 */
AT_UNKNOWN, /* State 431 */
AT_UNKNOWN, /* State 432 */
AT_UNKNOWN, /* State 433 */
AT_UNKNOWN, /* State 434 */
AT_UNKNOWN, /* State 435 */
AT_UNKNOWN, /* State 436 */
AT_UNKNOWN, /* State 437 */
AT_UNKNOWN, /* State 438 */
AT_UNKNOWN, /* State 439 */
AT_UNKNOWN, /* State 440 */
AT_UNKNOWN, /* State 441 */
AT_UNKNOWN, /* State 442 */
AT_UNKNOWN, /* State 443 */
AT_UNKNOWN, /* State 444 */
AT_UNKNOWN, /* State 445 */
AT_UNKNOWN, /* State 446 */
AT_UNKNOWN, /* State 447 */
AT_UNKNOWN, /* State 448 */
AT_UNKNOWN, /* State 449 */
AT_UNKNOWN, /* State 450 */
AT_XS3_4, /* State 451 */
AT_XS3_4, /* State 452 */
AT_UNKNOWN, /* State 453 */
AT_UNKNOWN, /* State 454 */
AT_UNKNOWN, /* State 455 */
AT_UNKNOWN, /* State 456 */
AT_UNKNOWN, /* State 457 */
AT_UNKNOWN, /* State 458 */
AT_UNKNOWN, /* State 459 */
AT_UNKNOWN, /* State 460 */
AT_UNKNOWN, /* State 461 */
AT_UNKNOWN, /* State 462 */
AT_UNKNOWN, /* State 463 */
AT_UNKNOWN, /* State 464 */
AT_UNKNOWN, /* State 465 */
AT_UNKNOWN, /* State 466 */
AT_UNKNOWN, /* State 467 */
AT_UNKNOWN, /* State 468 */
AT_UNKNOWN, /* State 469 */
AT_UNKNOWN, /* State 470 */
AT_UNKNOWN, /* State 471 */
AT_UNKNOWN, /* State 472 */
AT_UNKNOWN, /* State 473 */
AT_UNKNOWN, /* State 474 */
AT_UNKNOWN, /* State 475 */
AT_UNKNOWN, /* State 476 */
AT_UNKNOWN, /* State 477 */
AT_UNKNOWN, /* State 478 */
AT_XS3_4, /* State 479 */
AT_UNKNOWN, /* State 480 */
AT_UNKNOWN, /* State 481 */
AT_UNKNOWN, /* State 482 */
AT_UNKNOWN, /* State 483 */
AT_UNKNOWN, /* State 484 */
AT_XS3_4, /* State 485 */
AT_XS3_4, /* State 486 */
AT_UNKNOWN, /* State 487 */
AT_UNKNOWN, /* State 488 */
AT_UNKNOWN, /* State 489 */
AT_UNKNOWN, /* State 490 */
AT_UNKNOWN, /* State 491 */
AT_UNKNOWN, /* State 492 */
AT_UNKNOWN, /* State 493 */
AT_UNKNOWN, /* State 494 */
AT_UNKNOWN, /* State 495 */
AT_UNKNOWN, /* State 496 */
AT_UNKNOWN, /* State 497 */
AT_UNKNOWN, /* State 498 */
AT_UNKNOWN, /* State 499 */
AT_UNKNOWN, /* State 500 */
AT_UNKNOWN, /* State 501 */
AT_UNKNOWN, /* State 502 */
AT_UNKNOWN, /* State 503 */
AT_UNKNOWN, /* State 504 */
AT_UNKNOWN, /* State 505 */
AT_UNKNOWN, /* State 506 */
AT_UNKNOWN, /* State 507 */
AT_UNKNOWN, /* State 508 */
AT_UNKNOWN, /* State 509 */
AT_UNKNOWN, /* State 510 */
AT_UNKNOWN, /* State 511 */
AT_UNKNOWN, /* State 512 */
AT_UNKNOWN, /* State 513 */
AT_UNKNOWN, /* State 514 */
AT_UNKNOWN, /* State 515 */
AT_UNKNOWN, /* State 516 */
AT_UNKNOWN, /* State 517 */
AT_UNKNOWN, /* State 518 */
AT_UNKNOWN, /* State 519 */
AT_UNKNOWN, /* State 520 */
AT_UNKNOWN, /* State 521 */
AT_UNKNOWN, /* State 522 */
AT_UNKNOWN, /* State 523 */
AT_UNKNOWN, /* State 524 */
AT_UNKNOWN, /* State 525 */
AT_UNKNOWN, /* State 526 */
AT_UNKNOWN, /* State 527 */
AT_UNKNOWN, /* State 528 */
AT_UNKNOWN, /* State 529 */
AT_UNKNOWN, /* State 530 */
AT_UNKNOWN, /* State 531 */
AT_UNKNOWN, /* State 532 */
AT_UNKNOWN, /* State 533 */
AT_UNKNOWN, /* State 534 */
AT_UNKNOWN, /* State 535 */
AT_UNKNOWN, /* State 536 */
AT_UNKNOWN, /* State 537 */
AT_UNKNOWN, /* State 538 */
AT_UNKNOWN, /* State 539 */
AT_UNKNOWN, /* State 540 */
AT_UNKNOWN, /* State 541 */
AT_UNKNOWN, /* State 542 */
AT_UNKNOWN, /* State 543 */
AT_UNKNOWN, /* State 544 */
AT_UNKNOWN, /* State 545 */
AT_UNKNOWN, /* State 546 */
AT_UNKNOWN, /* State 547 */
AT_UNKNOWN, /* State 548 */
AT_UNKNOWN, /* State 549 */
AT_UNKNOWN, /* State 550 */
AT_UNKNOWN, /* State 551 */
AT_UNKNOWN, /* State 552 */
AT_UNKNOWN, /* State 553 */
AT_UNKNOWN, /* State 554 */
AT_UNKNOWN, /* State 555 */
AT_UNKNOWN, /* State 556 */
AT_UNKNOWN, /* State 557 */
AT_UNKNOWN, /* State 558 */
AT_UNKNOWN, /* State 559 */
AT_UNKNOWN, /* State 560 */
AT_UNKNOWN, /* State 561 */
AT_UNKNOWN, /* State 562 */
AT_UNKNOWN, /* State 563 */
AT_UNKNOWN, /* State 564 */
AT_UNKNOWN, /* State 565 */
AT_UNKNOWN, /* State 566 */
AT_UNKNOWN, /* State 567 */
AT_UNKNOWN, /* State 568 */
AT_UNKNOWN, /* State 569 */
AT_UNKNOWN, /* State 570 */
AT_UNKNOWN, /* State 571 */
AT_UNKNOWN, /* State 572 */
AT_UNKNOWN, /* State 573 */
AT_UNKNOWN, /* State 574 */
AT_UNKNOWN, /* State 575 */
AT_UNKNOWN, /* State 576 */
AT_UNKNOWN, /* State 577 */
AT_UNKNOWN, /* State 578 */
AT_UNKNOWN, /* State 579 */
AT_UNKNOWN, /* State 580 */
AT_UNKNOWN, /* State 581 */
AT_UNKNOWN, /* State 582 */
AT_UNKNOWN, /* State 583 */
AT_UNKNOWN, /* State 584 */
AT_UNKNOWN, /* State 585 */
AT_UNKNOWN, /* State 586 */
AT_UNKNOWN, /* State 587 */
AT_UNKNOWN, /* State 588 */
AT_UNKNOWN, /* State 589 */
AT_UNKNOWN, /* State 590 */
AT_UNKNOWN, /* State 591 */
AT_UNKNOWN, /* State 592 */
AT_UNKNOWN, /* State 593 */
AT_UNKNOWN, /* State 594 */
AT_UNKNOWN, /* State 595 */
AT_UNKNOWN, /* State 596 */
AT_UNKNOWN, /* State 597 */
AT_UNKNOWN, /* State 598 */
AT_UNKNOWN, /* State 599 */
AT_UNKNOWN, /* State 600 */
AT_UNKNOWN, /* State 601 */
AT_UNKNOWN, /* State 602 */
AT_UNKNOWN, /* State 603 */
AT_UNKNOWN, /* State 604 */
AT_UNKNOWN, /* State 605 */
AT_UNKNOWN, /* State 606 */
AT_UNKNOWN, /* State 607 */
AT_UNKNOWN, /* State 608 */
AT_UNKNOWN, /* State 609 */
AT_UNKNOWN, /* State 610 */
AT_UNKNOWN, /* State 611 */
AT_UNKNOWN, /* State 612 */
AT_UNKNOWN, /* State 613 */
AT_UNKNOWN, /* State 614 */
AT_UNKNOWN, /* State 615 */
AT_UNKNOWN, /* State 616 */
AT_UNKNOWN, /* State 617 */
AT_UNKNOWN, /* State 618 */
AT_UNKNOWN, /* State 619 */
AT_UNKNOWN, /* State 620 */
AT_UNKNOWN, /* State 621 */
AT_UNKNOWN, /* State 622 */
AT_UNKNOWN, /* State 623 */
AT_UNKNOWN, /* State 624 */
AT_UNKNOWN, /* State 625 */
AT_UNKNOWN, /* State 626 */
AT_UNKNOWN, /* State 627 */
AT_UNKNOWN, /* State 628 */
AT_UNKNOWN, /* State 629 */
AT_UNKNOWN, /* State 630 */
AT_UNKNOWN, /* State 631 */
AT_UNKNOWN, /* State 632 */
AT_UNKNOWN, /* State 633 */
AT_UNKNOWN, /* State 634 */
AT_UNKNOWN, /* State 635 */
AT_UNKNOWN, /* State 636 */
AT_UNKNOWN, /* State 637 */
AT_UNKNOWN, /* State 638 */
AT_UNKNOWN, /* State 639 */
AT_UNKNOWN, /* State 640 */
AT_UNKNOWN, /* State 641 */
AT_UNKNOWN, /* State 642 */
AT_UNKNOWN, /* State 643 */
AT_UNKNOWN, /* State 644 */
AT_UNKNOWN, /* State 645 */
AT_UNKNOWN, /* State 646 */
AT_UNKNOWN, /* State 647 */
AT_UNKNOWN, /* State 648 */
AT_UNKNOWN, /* State 649 */
AT_UNKNOWN, /* State 650 */
AT_UNKNOWN, /* State 651 */
AT_UNKNOWN, /* State 652 */
AT_UNKNOWN, /* State 653 */
AT_UNKNOWN, /* State 654 */
AT_UNKNOWN, /* State 655 */
AT_UNKNOWN, /* State 656 */
AT_UNKNOWN, /* State 657 */
AT_UNKNOWN, /* State 658 */
AT_UNKNOWN, /* State 659 */
AT_UNKNOWN, /* State 660 */
AT_UNKNOWN, /* State 661 */
AT_UNKNOWN, /* State 662 */
AT_UNKNOWN, /* State 663 */
AT_UNKNOWN, /* State 664 */
AT_UNKNOWN, /* State 665 */
AT_UNKNOWN, /* State 666 */
AT_UNKNOWN, /* State 667 */
AT_UNKNOWN, /* State 668 */
AT_UNKNOWN, /* State 669 */
AT_UNKNOWN, /* State 670 */
AT_UNKNOWN, /* State 671 */
AT_UNKNOWN, /* State 672 */
AT_UNKNOWN, /* State 673 */
AT_UNKNOWN, /* State 674 */
AT_UNKNOWN, /* State 675 */
AT_UNKNOWN, /* State 676 */
AT_UNKNOWN, /* State 677 */
AT_UNKNOWN, /* State 678 */
AT_UNKNOWN, /* State 679 */
AT_UNKNOWN, /* State 680 */
AT_UNKNOWN, /* State 681 */
AT_UNKNOWN, /* State 682 */
AT_UNKNOWN, /* State 683 */
AT_UNKNOWN, /* State 684 */
AT_UNKNOWN, /* State 685 */
AT_UNKNOWN, /* State 686 */
AT_UNKNOWN, /* State 687 */
AT_UNKNOWN, /* State 688 */
AT_UNKNOWN, /* State 689 */
AT_UNKNOWN, /* State 690 */
AT_UNKNOWN, /* State 691 */
AT_UNKNOWN, /* State 692 */
AT_UNKNOWN, /* State 693 */
AT_UNKNOWN, /* State 694 */
AT_UNKNOWN, /* State 695 */
AT_UNKNOWN, /* State 696 */
AT_UNKNOWN, /* State 697 */
AT_UNKNOWN, /* State 698 */
AT_UNKNOWN, /* State 699 */
AT_UNKNOWN, /* State 700 */
AT_UNKNOWN, /* State 701 */
AT_UNKNOWN, /* State 702 */
AT_UNKNOWN, /* State 703 */
AT_UNKNOWN, /* State 704 */
AT_UNKNOWN, /* State 705 */
AT_UNKNOWN, /* State 706 */
AT_UNKNOWN, /* State 707 */
AT_UNKNOWN, /* State 708 */
AT_UNKNOWN, /* State 709 */
AT_UNKNOWN, /* State 710 */
AT_UNKNOWN, /* State 711 */
AT_UNKNOWN, /* State 712 */
AT_UNKNOWN, /* State 713 */
AT_UNKNOWN, /* State 714 */
AT_UNKNOWN, /* State 715 */
AT_UNKNOWN, /* State 716 */
AT_UNKNOWN, /* State 717 */
AT_UNKNOWN, /* State 718 */
AT_UNKNOWN, /* State 719 */
AT_UNKNOWN, /* State 720 */
AT_UNKNOWN, /* State 721 */
AT_UNKNOWN, /* State 722 */
AT_UNKNOWN, /* State 723 */
AT_UNKNOWN, /* State 724 */
AT_UNKNOWN, /* State 725 */
AT_UNKNOWN, /* State 726 */
AT_UNKNOWN, /* State 727 */
AT_UNKNOWN, /* State 728 */
AT_UNKNOWN, /* State 729 */
AT_UNKNOWN, /* State 730 */
AT_UNKNOWN, /* State 731 */
AT_UNKNOWN, /* State 732 */
AT_UNKNOWN, /* State 733 */
AT_UNKNOWN, /* State 734 */
AT_UNKNOWN, /* State 735 */
AT_UNKNOWN  /* State 736 */
};

static unsigned char morf_token[] = {
    1,   3,   4,   5,   6,   2,   4,   5,
    6,  16,  17,  18,  19,   2,   4,   5,
    6,  20,   1,   3,   7,   8,   9,  10,
   11,  13,  14,   8,   9,   1,   3,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    8,   9,   2,   4,   5,   6,  16,  17,
   18,  19,   2,   4,   5,   6,  16,  17,
   18,  19,   4,   5,   6,   2,   4,   5,
    6,  16,  17,  18,  19,   3,   1,   3,
    7,   8,   9,  10,  11,  13,  14,  20,
    2,   4,   5,   6,  16,  17,  18,  19,
    2,   7,   8,   9,  10,  11,  12,  13,
   14,  15,  19,  20,   1,   8,   9,   1,
    8,   9,   1,   8,   9,   1,   8,   9,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   1,   8,  10,  13,   1,   8,  10,
   13,   1,   8,   9,  10,  13,   1,   8,
    9,   1,   3,   7,   8,   9,  10,  11,
   13,  14,   1,   1,   3,   2,  16,  17,
   18,   4,   5,   6,   1,   3,   3,   3,
    8,   9,   1,   8,   9,  10,  13,   1,
    3,   1,   2,   3,  10,  12,  15,  19,
   20,   1,   3,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   8,   9,   2,   4,
    5,   6,  16,   4,   5,   6,   3,   3,
   15,   2,   4,   5,   6,  16,   1,   2,
    4,   5,   6,  16,   2,   4,   5,   6,
   16,  17,  18,  19,   1,   9,   1,   9,
    2,   4,   5,   6,  16,  17,  18,  19,
    1,   8,   9,  10,  13,   1,   8,   9,
    1,   8,   9,  10,  13,   4,   5,   6,
    1,   7,   9,  11,  14,   1,   7,   9,
   11,  14,   2,   4,   5,   6,  16,   2,
    4,   5,   6,  16,  17,  18,  19,   1,
    7,   9,  11,  14,   1,   8,   9,   1,
    3,   2,   4,   5,   6,  16,  15,   8,
    9,  10,  12,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   1,   3,   7,   8,
    9,  10,  11,  13,  14,   1,   8,   9,
    8,  10,  13,  14,   1,   8,   9,  13,
   14,   1,   8,   9,   1,   8,   9,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    7,   8,   9,   8,   9,   1,   3,   7,
    8,   9,  10,  11,  13,  14,   1,   7,
    8,   9,  10,  13,   1,   8,   9,  10,
   13,   1,   3,   3,   7,   8,   9,  10,
   11,   4,   5,   6,   4,   5,   6,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    1,   3,   1,   3,   7,   8,   9,  10,
   11,  13,  14,   2,   4,   5,   6,  16,
   17,  18,  19,   4,   5,   6,   2,   4,
    5,   6,  16,   9,   1,   1,   3,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    2,   4,   5,   6,  16,   2,   4,   5,
    6,  16,   1,   8,   9,   1,   8,   9,
    1,   3,   1,   3,   7,   8,   9,  10,
   11,   4,   5,   6,   4,   5,   6,   2,
    4,   5,   6,  16,   1,   8,   9,   1,
    8,   9,   1,   7,   8,   9,  10,  11,
    3,  15,   1,   7,   8,   9,  10,  11,
    2,   4,   5,   6,  16,  17,  18,  19,
    7,   8,   9,  10,  11,  12,  13,  14,
   15,   1,   8,   9,  13,  14,   1,   8,
    9,  10,  13,   1,   8,   9,  13,  14,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   8,  10,  13,  14,   4,   5,   6,
   16,   1,   7,   9,  11,  14,   1,   8,
    9,  13,  14,   1,   8,   9,  10,  13,
    1,   7,   9,  11,  14,   8,  10,  13,
    2,   4,   5,   6,  16,  17,  18,  19,
    1,   7,   9,  11,  14,   1,   8,   9,
   13,  14,   1,   8,   9,   1,   8,   9,
    1,   8,   9,   1,   8,   9,   1,   8,
    9,   1,   8,   9,   1,   8,  10,  13,
    1,   1,   1,   1,   8,   9,   1,   8,
    9,  10,  13,   1,   8,   9,   1,   8,
    9,  10,  13,   1,   8,   9,   1,   8,
    9,  10,  13,   1,   8,   9,   1,   2,
    3,  10,  12,  15,  19,  20,   1,   3,
    8,   9,   4,   5,   6,  16,   1,   3,
    8,   9,   2,   4,   5,   6,  16,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   1,   8,  10,  13,  14,   1,   8,
   10,  13,  14,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   1,   3,   8,   9,
    1,   3,   1,   3,   8,   9,  10,  13,
    4,   5,   6,   8,  10,  13,   8,  10,
   13,  14,   2,   4,   5,   6,  16,   3,
    3,   8,  10,  13,   8,  10,  13,   3,
    8,  10,  13,   2,   4,   5,   6,  16,
    1,   3,   8,   9,   1,   3,   1,   8,
    9,   1,   8,   9,  10,  13,  14,   1,
    8,   9,   1,   3,   8,   9,   1,   3,
    8,   9,  10,  13,   1,   3,   8,   9,
   10,  13,   2,   4,   5,   6,  16,   2,
    4,   5,   6,  16,   1,   1,   2,   4,
    5,   6,  16,   1,   3,   1,   3,   7,
    8,   9,  10,  11,  13,  14,   2,   4,
    5,   6,  16,   2,   4,   5,   6,  16,
    1,   8,   9,   1,   8,   9,  15,   1,
    8,   9,  15,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   8,  10,  13,   2,
    4,   5,   6,  16,   2,   4,   5,   6,
   16,  17,  18,  19,   8,  10,  13,   8,
   10,  13,   1,   3,   7,   8,   9,  10,
   11,  13,  14,   2,   4,   5,   6,  16,
    2,   4,   5,   6,  16,   1,   3,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    4,   5,   6,   4,   5,   6,   2,   4,
    5,   6,  16,   2,   4,   5,   6,  16,
    1,   8,   9,  10,  13,   1,   8,   9,
    2,   4,   5,   6,  16,   1,   7,   9,
   11,  14,   1,   7,   9,  11,  14,   1,
    8,   9,   1,   8,   9,  10,  13,   1,
    8,   9,  10,  13,   1,   8,   9,   4,
    5,   6,   2,   4,   5,   6,  16,   1,
    8,   9,  10,  13,   1,   8,   9,   2,
    4,   5,   6,  16,   1,   7,   9,  11,
   14,   2,   4,   5,   6,  16,  15,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    7,   8,   9,  10,  11,  14,   4,   5,
    6,   2,   4,   5,   6,  16,   1,   3,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   4,   5,   6,   1,   8,   9,   1,
    8,   9,  15,   2,   4,   5,   6,  16,
    8,  10,  13,   1,   8,  10,  13,   1,
    8,  10,  13,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   8,  10,  13,   2,
    4,   5,   6,  16,   1,   7,   9,  11,
   14,   1,   7,   9,  11,  14,   2,   4,
    5,   6,  16,   7,   8,   9,  10,  11,
   12,  13,  14,  15,   1,   1,   8,   9,
   10,  13,   1,   3,   3,   7,   8,   9,
   10,  11,   2,   4,   5,   6,  16,   4,
    5,   6,   2,   4,   5,   6,  16,   1,
    8,  10,  13,   1,   8,  10,  13,   2,
    4,   5,   6,  16,   1,   7,   9,  11,
   14,   2,   4,   5,   6,  16,   1,   1,
    3,   1,   3,   7,   8,   9,  10,  11,
   13,  14,   4,   5,   6,   2,   4,   5,
    6,  16,   2,   4,   5,   6,  16,   1,
    3,   3,   7,   8,   9,  10,  11,   4,
    5,   6,   1,   2,   3,  10,  12,  15,
   19,  20,   1,   7,   9,  11,  13,  14,
    1,   7,   8,   9,  11,  14,   1,   8,
    9,  13,  14,   1,   8,   9,  10,  13,
    1,   8,   9,  10,  13,   1,   2,   4,
    5,   6,  16,  17,  18,  19,   8,  10,
   13,   8,  10,  13,   1,   3,   1,   3,
    7,   8,   9,  10,  11,  13,  14,   2,
    4,   5,   6,  16,   1,   3,   1,   7,
    9,  11,  14,   1,   3,   8,   9,   1,
    3,   8,   9,   1,   3,   8,   9,   1,
    3,   8,   9,   1,   7,   8,   9,  10,
   11,   1,   7,   8,   9,  11,  14,   1,
    3,   8,   9,   1,   3,   8,   9,   1,
    3,   8,   9,   1,   3,   8,   9,   1,
    3,   8,   9,  10,  13,   1,   8,   9,
   10,  13,   1,   3,   1,   3,   8,   9,
   10,  13,   4,   5,   6,   1,   3,   7,
    8,   9,  10,  11,   2,   4,   5,   6,
   16,   2,   4,   5,   6,  16,   1,   3,
    7,   8,   9,  10,  11,  13,  14,   2,
    4,   5,   6,  16,   2,   4,   5,   6,
   16,   1,   8,   9,   1,   8,   9,  15,
    1,   8,   9,  15,   1,   3,   7,   8,
    9,  10,  11,  13,  14,  13,  14,  13,
   14,   1,   8,   9,   7,   9,  11,  14,
    4,   5,   6,   1,   2,   3,  10,  12,
   15,  19,  20,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   8,  10,  13,  14,
    8,  10,  13,  14,   1,   8,   9,  10,
   13,   2,   4,   5,   6,  16,   1,   1,
    3,   1,   3,   7,   8,   9,  10,  11,
   13,  14,   4,   5,   6,   4,   5,   6,
    2,   4,   5,   6,  16,  17,  18,  19,
    8,  10,  13,   8,  10,  13,   1,   3,
    1,   3,   7,   9,  11,  14,   4,   5,
    6,   1,   8,  10,  13,   1,   8,   9,
    1,   8,   9,  15,   1,   3,   7,   8,
    9,  10,  11,  13,  14,   1,   7,   8,
    9,  11,  14,   1,   8,   9,  10,  13,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   1,   3,   7,   8,   9,  10,  11,
    4,   5,   6,   4,   5,   6,   1,   3,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   4,   5,   6,   2,   4,   5,   6,
   16,   7,   8,   9,  10,  11,  12,  13,
   14,  15,   1,   3,   8,   9,   1,   3,
    8,   9,   1,   3,   8,   9,   1,   3,
    4,   5,   6,   1,   3,   1,   3,   8,
    9,   4,   5,   6,  15,   1,   8,   9,
   13,  14,   1,   8,   9,  13,  14,   1,
    3,   7,   8,   9,  10,  11,  13,  14,
    8,  10,  13,  14,   8,  10,  13,   1,
    8,   9,   1,   8,   9,   1,   8,   9,
   10,  13,   2,   4,   5,   6,  16,   1,
    3,   1,   7,   9,  11,  14,   1,   3,
    8,   9,  10,  13,   1,   8,  10,  13,
    4,   5,   6,  16,   1,   8,   9,   4,
    5,   6,  16,   4,   5,   6,  16,   1,
    8,   9,  10,  13,   2,   4,   5,   6,
   16,   1,   8,  10,  13,   1,   8,  10,
   13,   2,   4,   5,   6,  16,   1,   7,
    9,  11,  14,   2,   4,   5,   6,  16,
    1,   2,   4,   5,   6,  16,   1,   1,
    8,  10,  13,   4,   5,   6,   3,   8,
   10,  13,   1,   3,   8,   9,   1,   3,
    8,   9,   1,   8,   9,  10,  13,   1,
    3,   8,   9,  10,  13,   1,   3,   8,
    9,   1,   3,   8,   9,   1,   8,   9,
    1,  13,  14,   1,   1,  13,  14,  13,
   14,   1,   3,   8,   9,  13,  14,   1,
    3,   8,   9,  13,  14,   1,   8,   9,
   10,  13,  15,   2,   4,   5,   6,  16,
    7,   8,   9,  10,  11,  12,  13,  14,
   15,   8,  10,  13,  14,   1,   8,  10,
   13,   1,   8,  10,  13,  14,   1,   3,
    7,   8,   9,  10,  11,  13,  14,   8,
   10,  13,  14,   1,   7,   9,  11,  14,
    8,  10,  13,   2,   4,   5,   6,  16,
    1,   1,   8,  10,  13,   1,   3,   3,
    7,   8,   9,  10,  11,   4,   5,   6,
    2,   4,   5,   6,  16,  13,  14,   1,
    8,   9,  10,  13,   1,   3,   1,   7,
    9,  11,  14,  13,  14,   1,  13,  14,
    1,   3,   8,   9,  10,  13,   2,   4,
    5,   6,  16,   1,   1,   8,   9,  10,
   13,   1,   8,   9,  13,  14,   1,   7,
    9,  11,  14,   1,   8,   9,  10,  13,
    1,   8,   9,   3,  13,  14,   1,   3,
   13,  14,   1,   8,   9,  13,  14,   1,
    8,   9,  10,  13,   1,   8,   9,  13,
   14,   1,   8,   9,  13,  14,   1,   3,
    8,   9,  10,  13,   1,   3,   3,   7,
    8,   9,  10,  11,   4,   5,   6,   1,
    8,   9,   1,   8,   9,  15,   1,   8,
    9,  15,   2,   4,   5,   6,  16,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    2,   4,   5,   6,  16,   2,   4,   5,
    6,  16,   7,   8,   9,  10,  11,  12,
   13,  14,  15,   3,   2,   4,   5,   6,
   16,   3,   1,   3,   7,   8,   9,  10,
   11,  13,  14,   8,  10,  13,   2,   4,
    5,   6,  16,  17,  18,  19,   8,  10,
   13,   8,  10,  13,   1,   1,   3,   8,
    9,   4,   5,   6,   1,   8,  10,  13,
    7,   8,   9,  10,  11,  12,  13,  14,
   15,   3,   7,   8,   9,  10,  11,   7,
    9,  11,  14,   1,   3,   3,   7,   8,
    9,  10,  11,   4,   5,   6,   2,   4,
    5,   6,  16,   1,   3,   1,   3,   7,
    8,   9,  10,  11,  13,  14,   4,   5,
    6,   1,   3,   7,   8,   9,  10,  11,
   13,   1,   8,   9,  10,  13,   2,   4,
    5,   6,  16,   2,   4,   5,   6,  16,
    1,   8,   9,   1,   8,   9,  13,  14,
    4,   5,   6,   4,   5,   6,   2,   4,
    5,   6,  16,   1,   1,   8,  10,  13,
    1,   8,   9,  15,   1,   3,   7,   8,
    9,  10,  11,  13,  14,   8,  10,  13,
    2,   4,   5,   6,  16,   2,   4,   5,
    6,  16,  17,  18,  19,   8,  10,  13,
    8,  10,  13,   1,   3,   8,   9,   1,
    3,   4,   5,   6,   1,   8,  10,  13,
    7,   8,   9,  10,  11,  12,  13,  14,
   15,   1,   3,   3,   7,   8,   9,  10,
   11,   4,   5,   6,   2,   4,   5,   6,
   16,   2,   4,   5,   6,  16,   1,   2,
    3,  10,  12,  15,  19,  20,   1,   3,
    8,   9,   1,   1,   1,   3,   3,   7,
    8,   9,  10,  11,   4,   5,   6,   1,
    8,   9,   1,   8,   9,  15,   1,   8,
    9,  15,   1,   3,   3,   4,   5,   6,
    1,   8,   9,  15,   7,   8,   9,  10,
   11,  12,  13,  14,  15,   2,   4,   5,
    6,  16,  17,  18,  19,   8,  10,  13,
    8,  10,  13,   1,   3,   1,   7,   9,
   11,  14,   2,   4,   5,   6,  16,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    3,   1,   8,   9,   1,   8,   9,  15,
    1,   8,   9,  15,   1,   3,   8,   9,
   13,  14,   1,   3,   8,   9,  13,  14,
    1,   3,   8,   9,  10,  13,   1,   8,
    9,  10,  13,   1,   3,   7,   8,   9,
   10,  11,  13,  14,   1,   1,   3,   8,
    9,  10,  13,   1,   3,   8,   9,  13,
   14,   1,   8,   9,   7,   9,  11,  14,
    1,   3,   7,   8,   9,  10,  11,   2,
    4,   5,   6,  16,   2,   4,   5,   6,
   16,   1,   3,   8,   9,   7,   8,   9,
   10,  11,  14,   2,   4,   5,   6,  16,
    1,   2,   4,   5,   6,  16,  17,  18,
   19,   8,  10,  13,   8,  10,  13,   1,
    3,   8,  10,  13,  14,   4,   5,   6,
    1,   3,   1,   7,   9,  11,  14,   2,
    4,   5,   6,  16,   3,   1,   8,   9,
   15,   1,   2,   3,  10,  12,  15,  19,
   20,   1,   3,   8,   9,   1,   3,   8,
    9,  15,   7,   8,   9,  10,  11,  12,
   13,  14,  15,   2,   4,   5,   6,  16,
    2,   4,   5,   6,  16,   1,   2,   3,
   10,  12,  15,  19,  20,   1,   7,   8,
    9,  10,  11,  12,  13,  14,  15,   1,
    3,   8,   9,   1,   8,   9,   1,   8,
    9,  15,   1,   8,   9,  15,   1,   3,
    1,   7,   9,  11,  14,   1,   8,  10,
   13,   1,   3,   7,   8,   9,  10,  11,
    4,   5,   6,   1,   8,   9,  15,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    2,   4,   5,   6,  16,   1,   1,   1,
    8,  10,  13,   1,   7,   9,  11,  14,
    1,   3,   8,   9,  13,  14,   1,   3,
    8,   9,  13,  14,   2,   4,   5,   6,
   16,   1,   3,   8,   9,   1,   7,   8,
    9,  11,  14,   1,   8,   9,  10,  13,
    2,   4,   5,   6,  16,   7,   8,   9,
   10,  11,  12,  13,  14,  15,   1,   3,
    8,   9,  10,  13,   1,   3,   8,   9,
    1,   3,   7,   8,   9,  10,  11,  13,
   14,   2,   4,   5,   6,  16,   1,   3,
    1,   7,   9,  11,  14,   3,   8,  10,
   13,   1,   8,  10,  13,   1,  15,   2,
    4,   5,   6,  16,   1,   3,   4,   5,
    6,   1,   1,   3,   8,   9,   4,   5,
    6,  15,   2,   4,   5,   6,  16,   2,
    4,   5,   6,  16,   1,   1,   1,   8,
   10,  13,  10,  12,   1,   8,   9,  15,
    1,   3,   3,   7,   8,   9,  10,  11,
    4,   5,   6,   2,   4,   5,   6,  16,
    2,   4,   5,   6,  16,   1,   8,   9,
   10,  13,   1,   8,   9,  10,  13,   1,
    7,   9,  11,  14,   2,   4,   5,   6,
   16,   1,   8,   9,   1,   3,   7,   8,
    9,  10,  11,   4,   5,   6,   1,   8,
    9,  15,   2,   4,   5,   6,  16,   1,
    8,  10,  13,   1,   7,   9,  11,  14,
    1,   1,   3,   8,   9,   4,   5,   6,
    1,   8,  10,  13,   2,   4,   5,   6,
   16,   3,   2,   4,   5,   6,  16,   7,
    8,   9,  10,  11,  12,  13,  14,  15,
    3,   1,   1,   3,   8,   9,   4,   5,
    6,   1,   3,   3,   7,   8,   9,  10,
   11,   4,   5,   6,   2,   4,   5,   6,
   16,   2,   4,   5,   6,  16,  15,   2,
    4,   5,   6,  16,   1,   2,   3,  10,
   12,  15,  19,  20,   1,   3,   8,   9,
    1,   3,   8,   9,   2,   4,   5,   6,
   16,   1,   8,   9,  10,  13,   1,   8,
    9,  10,  12,   2,   4,   5,   6,  16,
    7,   8,   9,  10,  11,  12,  13,  14,
   15,   3,   1,   3,   8,   9,   1,   3,
    7,   8,   9,  10,  11,   4,   5,   6,
    1,   8,   9,  15,   2,   4,   5,   6,
   16,   7,   8,   9,  10,  11,  12,  13,
   14,  15,   3,   1,   2,   3,  10,  12,
   15,  19,  20,   1,   3,   8,   9,   1,
    3,   8,   9,   1,   3,   7,   8,   9,
   10,  11,   4,   5,   6,  15,   2,   4,
    5,   6,  16,   3,   7,   8,   9,  10,
   11,   2,   4,   5,   6,  16,  15,   1,
    3,   7,   8,   9,  10,  11,   4,   5,
    6,   1,   8,   9,  15,   7,   8,   9,
   10,  11,  12,  13,  14,  15,   2,   4,
    5,   6,  16,  10,  12,   1,   3,   7,
    8,   9,  10,  11,   4,   5,   6,   1,
    8,   9,  15,   7,   8,   9,  10,  11,
   12,  13,  14,  15,  15,   2,   4,   5,
    6,  16,   2,   4,   5,   6,  16,  10,
   12,   1,   3,   8,   9,   1,   3,   8,
    9,   1,   3,   8,   9,  10,  13,  10,
   12,   1,   8,   9,  15,   1,   3,   7,
    8,   9,  10,  11,   4,   5,   6,  15,
   10,  12,   1,   8,   9,  15,   1,   3,
    7,   8,   9,  10,  11,   4,   5,   6,
   15,   2,   4,   5,   6,  16,   1,   8,
    9,  10,  13,   1,   7,   9,  11,  14,
   15,  10,  12,  15,  10,  12,  15,  15
};

static short morf_nextstate[] = {
      1,     2,     3,     3,     4,     5,     6,     6,
      7,     8,     9,    10,    11,    12,    13,    13,
     13,    14,    15,    16,    17,    18,    18,    17,
     17,    13,    13,    19,    20,     8,    11,    15,
     16,    21,    22,    23,    24,    21,    25,    26,
     27,    28,    29,     6,     6,     7,    30,    31,
     31,    11,    32,    33,    33,    34,    31,    31,
     31,    11,    35,    35,    35,    36,    13,    13,
     13,    11,    11,    11,    11,    37,    11,    38,
     13,    13,    13,    13,    13,    13,    13,    14,
     39,    40,    40,    41,    42,    43,    43,    11,
     36,    44,    44,    44,    45,    44,    44,    44,
     44,    44,    11,    38,    46,    47,    47,    48,
     47,    47,    49,    50,    51,    49,    47,    47,
     52,    38,    26,    53,    54,    55,    26,    55,
     26,    56,    57,    58,    58,    56,    57,    58,
     58,    59,    58,    26,    58,    58,    59,    55,
     26,    60,    38,    26,    61,    62,    58,    26,
     58,    26,    60,    30,    11,    63,    64,    11,
     11,    35,    35,    35,    31,    11,    38,    38,
     27,    28,    11,    25,    26,    25,    25,    11,
     11,    -1,    36,    -1,    65,    13,    13,    11,
     38,    42,    11,    15,    66,    67,    68,    69,
     70,    67,    25,    71,    72,    73,    63,    74,
     75,    76,    64,    77,    78,    79,    16,    16,
     13,    80,    81,    81,    81,    82,    83,    80,
     84,    84,    84,    82,    85,    86,    86,    86,
     87,    88,    88,    11,    89,    90,    89,    91,
     92,    93,    93,    93,    94,    59,    59,    11,
     95,    25,    26,    25,    25,    95,    55,    26,
     59,    25,    26,    25,    25,    96,    96,    96,
     95,    97,    97,    97,    97,    59,    97,    97,
     97,    97,    98,    55,    55,    55,    59,    99,
    100,   100,   100,   101,   102,   102,    11,   103,
     97,   104,    97,    97,   103,    55,   105,    64,
     11,    63,     3,     3,     4,    64,    13,   106,
    106,   107,   108,   109,   110,   111,   112,   113,
     55,   111,   114,   115,   116,   110,   111,   117,
    118,    58,   111,    58,   111,   116,   119,   118,
    120,    58,    58,   111,    59,    55,    26,   114,
    121,   122,   123,   124,   122,   119,   118,    15,
     16,   125,   126,   127,   128,   129,    25,    26,
    130,   131,   132,   133,   134,    11,    38,   135,
    136,   137,   138,   135,    25,    26,    11,   139,
    140,   141,    25,    25,    11,   140,   141,    25,
     25,    82,    11,   142,   143,   143,   143,   143,
    143,    17,    17,    17,   143,   143,   143,   144,
    142,   143,   145,   145,   143,   143,    13,    13,
    146,    11,   147,   148,   149,   150,   151,   152,
    149,   153,   154,   155,   156,   156,   156,   157,
    157,   157,    11,   158,   158,   158,   155,   159,
    159,   159,    88,    91,   160,    94,    11,    59,
    142,   161,   162,   161,   162,   161,    25,    26,
     98,   163,   163,   163,    59,    98,   164,   164,
    164,    59,   165,   166,   167,    11,    55,    26,
     59,    11,   101,    11,   168,   169,   170,   171,
    168,   172,   172,   172,   158,   158,   158,   155,
    173,   173,   173,   102,    11,    55,   105,   174,
     55,    26,   175,    13,   176,   176,    13,    13,
     16,   177,   178,    13,   177,   177,    13,    13,
    179,   180,   180,   180,   181,   182,   182,    11,
    183,   183,   183,   184,   183,   183,   185,   183,
    183,    59,    55,    26,   186,   187,   188,    25,
     26,    25,    25,   188,    55,    26,   186,   187,
    189,    38,   190,   191,   190,   191,   190,   191,
    190,   192,   192,   186,   187,   193,   193,   193,
    194,   195,    97,    97,    97,    97,   195,    55,
     26,   186,   187,   195,    25,    26,    25,    25,
    188,    97,    97,    97,    97,   192,   192,   192,
    196,   197,   197,   197,   198,   199,   199,    11,
    200,    97,   104,    97,    97,   200,    55,   105,
    186,   187,   201,   202,   203,   204,   205,   203,
    204,   202,   203,   206,   207,   208,   206,   209,
    208,   206,   210,   211,   212,    57,    58,    58,
    212,   213,   213,   214,   215,   216,   217,   218,
    216,    58,    58,   217,   215,   216,   214,   218,
    216,    58,    58,   214,    55,    26,   219,    58,
     26,    58,    58,   219,    55,    26,    -1,    36,
     -1,   220,    17,    13,    11,    38,    46,   221,
     47,    47,   222,   222,   222,   223,   224,   221,
     47,    47,   225,   226,   226,   226,   227,   228,
    228,   228,   229,   228,   228,    13,    13,    13,
    230,   221,   231,   232,   233,   158,   231,   234,
    235,   236,   237,   238,   238,   231,   236,   237,
    238,   238,   231,   157,    38,   231,   238,   231,
    238,   231,   238,   231,   157,    38,   158,   231,
    157,    11,   239,   240,   241,   233,   153,   153,
    158,   158,   158,   153,   153,   153,   241,   153,
    153,   231,   155,   158,   158,   158,    88,   221,
    221,    57,    58,    58,   242,    25,    25,   221,
    242,    25,    25,   243,   244,   244,   244,   245,
    246,   221,    57,    54,   246,   221,   247,   248,
    249,   250,   251,   249,   238,   238,   231,   250,
    248,   249,   247,   221,   251,   249,   252,   240,
    253,   249,   153,   153,   247,   221,   253,   249,
    153,   153,   155,   158,   158,   158,   102,   254,
    255,   255,   255,   256,   257,   258,   259,   260,
    260,   260,   261,   194,    11,    59,   262,   263,
    264,   263,   264,   263,    25,   265,    98,   266,
    266,   266,    59,    98,   267,   267,   267,    59,
    178,   177,   177,   178,   177,   177,   177,   178,
    177,   177,   268,   269,    38,   270,   271,   270,
    271,   270,   271,   270,   272,   272,   272,   273,
    274,   274,   274,   275,   276,   192,   192,   192,
    189,   189,   189,    11,   192,   192,   192,   277,
    277,   277,   165,   262,   278,   279,   280,   281,
    278,    25,    26,    98,   282,   282,   282,    59,
    273,   283,   283,   283,   275,   198,    11,   147,
    148,   284,   285,   286,   287,   284,   153,   154,
    288,   288,   288,   289,   289,   289,   290,   291,
    291,   291,   292,   293,   294,   294,   294,   295,
    296,    25,    26,    25,    25,   296,    55,    26,
    293,   297,   297,   297,   295,   296,    97,    97,
     97,    97,   298,    97,    97,    97,    97,   298,
     55,    26,   298,    25,    26,    25,    25,   299,
     25,    26,    25,    25,   299,    55,    26,    96,
     96,    96,   243,   300,   300,   300,   182,   182,
     25,    26,    25,    25,   182,    55,    26,   243,
    300,   300,   300,   182,   182,    97,    97,    97,
     97,    98,    55,    55,    55,    59,    47,    17,
     17,    17,   301,    17,    17,   302,    17,    17,
    303,   304,   303,   304,   303,   305,   306,   306,
    306,    80,   307,   307,   307,    82,   308,    11,
    157,   309,   310,   311,   310,   311,   310,   153,
    312,   313,   313,   313,   314,   315,   315,   314,
    315,   315,   315,   316,   317,   317,   317,   318,
    158,   158,   158,   319,   153,   153,   153,   319,
    158,   158,   158,   320,    38,   321,   322,   321,
    322,   321,   322,   321,   323,   323,   323,   324,
    325,   325,   325,   326,   319,   327,   327,   327,
    327,   157,   327,   327,   327,   327,   316,   317,
    317,   317,   318,   328,   328,   328,   329,   328,
    328,    13,    13,    13,   319,    95,    58,    26,
     58,    58,   182,    11,    38,   330,   331,   330,
    331,   330,    98,   332,   332,   332,    59,   333,
    333,   333,   334,   335,   335,   335,   336,   337,
    153,   153,   153,   337,   158,   158,   158,   338,
    339,   339,   339,   340,   337,   327,   327,   327,
    327,   334,   335,   335,   335,   336,   337,   256,
     11,   341,   342,   343,   344,   344,   343,   343,
     13,    13,   345,   345,   345,   346,   343,   343,
    343,   347,   348,   349,   349,   349,   350,   261,
     11,   262,   349,   349,   349,   349,   349,   183,
    183,   183,    -1,    36,    -1,   351,   183,    13,
     11,    38,   352,   353,   354,   353,   355,   356,
    352,   353,   120,   354,   353,   353,    59,    55,
     26,   355,   357,   206,   358,   359,    25,    25,
    214,   360,   216,    25,    25,   361,   362,   272,
    272,   272,   269,   269,   269,    11,   272,   272,
    272,   363,   363,   363,   275,    11,   352,   110,
    353,   358,   354,    25,   353,    25,   353,    98,
    364,   364,   364,    59,   189,    11,   189,   365,
    365,   365,   365,   366,   110,   119,   367,   368,
    110,   117,   367,   368,   110,   119,   367,   366,
    110,   117,   367,   369,    26,   370,   367,    25,
     26,   366,    26,   370,   367,    26,    26,   371,
    110,   372,   373,   374,   110,   375,   373,   374,
    110,   372,   373,   371,   110,   375,   373,   376,
    240,   377,   373,   153,   153,   378,   379,   380,
    153,   153,   381,    11,   371,   110,   377,   373,
    153,   153,   382,   382,   382,   295,    11,   383,
    384,   383,   384,   383,    98,   385,   385,   385,
     59,    98,   386,   386,   386,    59,   165,   142,
    383,   387,   388,   384,   383,    25,    26,   273,
    274,   274,   274,   275,   273,   389,   389,   389,
    275,    59,   138,   135,    46,    47,    47,    47,
     46,    47,    47,   390,   144,    38,   391,   392,
    393,    13,   391,   394,   395,    13,   391,   394,
    394,   144,   392,   392,   396,   397,   396,   391,
    398,   398,   398,    -1,    36,    -1,   399,   228,
     13,    11,    38,   400,   401,   402,   403,   404,
    158,   402,   405,   406,   407,   238,   238,   402,
    158,   158,   405,   408,   409,   410,   411,   153,
    153,   412,   413,   413,   413,   414,   415,   318,
     11,   157,   142,   416,   152,   416,   152,   416,
    153,   231,   417,   417,   417,   159,   159,   159,
    418,   323,   323,   323,   320,   320,   320,    11,
    323,   323,   323,   419,   419,   419,   326,    11,
    400,   401,   420,   421,   420,   402,   422,   422,
    422,    11,   158,   158,   158,   423,   424,   424,
    423,   424,   424,   424,   165,    38,   353,   425,
    426,    55,   353,   355,   356,   165,   353,   427,
    426,   353,   353,   165,   428,   429,    25,    25,
    165,   142,   430,   166,   431,   162,   430,    25,
    353,   336,    11,   432,   171,   432,   171,   432,
    433,   433,   433,   173,   173,   173,   340,    11,
    400,   401,   434,   169,   435,   171,   434,   153,
    402,   436,   436,   436,   437,   438,   438,   438,
    439,   440,   440,   440,   441,   442,   183,    13,
     13,    13,   443,   444,   176,   176,   445,   444,
    176,   176,   446,   447,   176,   176,   347,    11,
    448,   448,   448,   350,    11,   449,   110,   177,
    177,   450,   450,   450,   177,    59,    55,    26,
    451,   452,   188,    55,    26,   451,   452,   453,
     38,   454,   455,   454,   455,   454,   455,   454,
    456,   456,   451,   452,   456,   456,   456,   188,
     58,    26,   188,    55,    26,   182,    58,    26,
     58,    58,   457,   458,   458,   458,   459,   269,
     11,   269,   460,   460,   460,   460,    59,   461,
     25,    26,    25,    25,    11,   192,   192,   192,
    462,   462,   462,   194,   195,    55,    26,   463,
    463,   463,   194,   462,   462,   462,   194,   195,
     58,    26,    58,    58,   464,   465,   465,   465,
    466,   467,   153,   153,   153,   467,   158,   158,
    158,   468,   469,   469,   469,   470,   467,   327,
    327,   327,   327,   464,   465,   465,   465,   466,
    467,   471,   472,   472,   472,   199,   199,   199,
    158,   158,   158,   382,   382,   382,   461,   153,
    153,   153,   201,   221,   202,   203,   201,   221,
    205,   203,   201,   473,   203,    25,    25,   201,
    221,   473,   203,    25,    25,   474,   221,   205,
    203,   474,   221,   202,   203,   475,   476,   477,
    478,   479,   479,   480,   480,   479,   479,   479,
    479,    46,   221,    47,    47,   479,   479,   224,
    221,    47,    47,   479,   479,   481,   482,   483,
    153,   153,   315,   225,   226,   226,   226,   227,
    228,   228,   228,   229,   228,   228,   484,   228,
    228,   158,   158,   485,   486,   487,   153,   153,
    153,   487,   158,   158,   485,   486,   488,    38,
    489,   490,   489,   490,   489,   490,   489,   491,
    491,   485,   486,   487,   327,   327,   327,   327,
    491,   491,   491,   225,   226,   226,   226,   227,
    487,   487,   158,   158,   158,   414,    11,   309,
    492,   492,   492,   492,   492,   228,   228,   228,
    493,   492,   492,   492,   494,   158,   231,   239,
    241,   233,   153,   153,   320,    11,   320,   495,
    495,   495,   495,   485,   486,   236,   485,   486,
    239,   496,   241,   233,   153,   153,   497,   498,
    498,   498,   499,   500,   501,    25,    26,    25,
     25,   501,    55,    26,   451,   452,   501,    97,
     97,    97,    97,   501,    58,    26,    58,    58,
    501,    55,    26,   221,   451,   452,   246,   221,
    451,   452,   247,   248,   249,   158,   231,   252,
    253,   249,   153,   153,   247,   248,   249,   485,
    486,   250,   248,   249,   485,   486,   252,   496,
    253,   249,   153,   153,   439,    11,   502,   503,
    503,   503,   503,   503,   440,   440,   440,   341,
    504,   504,   341,   504,   504,   177,   341,   504,
    504,   505,   506,   507,   507,   507,   508,   509,
    509,   509,   510,   509,   509,   511,   509,   509,
    512,   513,   513,   513,   514,   506,   507,   507,
    507,   508,   440,   440,   440,   515,   442,   440,
     13,    13,    13,   516,   259,   260,   260,   260,
    261,   461,   517,    38,   518,   519,   518,   519,
    518,   519,   518,   520,   520,   520,   521,   456,
    456,   456,   453,   453,   453,    11,   456,   456,
    456,   522,   522,   522,   459,   523,   524,   268,
    268,   525,   525,   525,    11,   272,   272,   272,
    526,   526,   526,   527,   526,   526,   528,   526,
    526,   262,   278,   281,   278,   281,   278,   529,
    530,   529,   353,   466,    11,   262,   531,   287,
    531,   287,   531,   532,   532,   532,   290,   291,
    291,   291,   381,   470,    11,   400,   401,   533,
    285,   534,   287,   533,   153,   402,   535,   535,
    535,   199,    11,   536,   537,   536,   537,   536,
    153,   296,    58,    26,    58,    58,   293,   538,
    538,   538,   295,   539,   540,   540,   540,   541,
    542,    58,    26,   542,    55,    26,   451,   452,
    543,   543,   543,   304,   304,   304,   225,   544,
    544,   544,   308,   545,   545,   158,   158,   158,
    314,   315,   315,   546,   547,    38,   548,   549,
    548,   549,   548,   549,   548,   550,   550,   550,
    551,   552,   552,   552,   553,   554,   491,   491,
    491,   488,   488,   488,    11,   491,   491,   491,
    555,   555,   555,   556,   401,   315,   315,   494,
     11,   557,   557,   557,    11,   323,   323,   323,
    328,   328,   328,   329,   328,   328,   558,   328,
    328,   499,    11,   559,   560,   560,   560,   560,
    560,   328,   328,   328,   493,   560,   560,   560,
    494,    98,   561,   561,   561,    59,    -1,    36,
     -1,   562,   440,    13,    11,    38,   341,   563,
    504,   504,   564,   565,   508,    11,   566,   343,
    343,   343,   343,   343,   509,   509,   509,   446,
    176,   176,   446,   176,   176,   176,   446,   176,
    176,   567,   514,    11,   568,   569,   569,   569,
    341,   504,   504,   504,   570,   570,   570,   571,
    570,   570,   572,   570,   570,   573,   520,   520,
    520,   517,   517,   517,    11,   520,   520,   520,
    574,   574,   574,   453,    11,   453,   575,   575,
    575,   575,   576,   577,   577,   577,   578,   579,
    579,   579,   580,   579,   579,   580,   579,   579,
    581,   582,   583,   583,   582,   583,   583,   583,
    582,   583,   583,   584,   366,   110,   119,   367,
    451,   452,   368,   110,   119,   367,   451,   452,
    371,   110,   372,   373,   158,   158,   376,   377,
    373,   153,   153,   371,   110,   231,   372,   373,
    158,   231,   485,   486,   374,   376,   496,   377,
    373,   153,   153,   378,    38,   585,   380,   158,
    231,   378,   586,   380,   587,   588,   587,   353,
    589,    11,   590,   591,   590,   591,   590,    98,
    592,   592,   592,    59,   273,   389,   389,   389,
    275,   593,   594,   390,   390,   595,   596,   595,
    596,   595,   231,   551,   597,   597,   597,   553,
    598,   599,   550,   550,   550,   547,   547,   547,
     11,   550,   550,   550,   600,   600,   600,   553,
     11,   410,   153,   153,   402,   601,   601,   601,
    488,    11,   488,   602,   602,   602,   602,   412,
    413,   413,   413,   414,   496,   423,   424,   424,
    603,    -1,    36,    -1,   604,   328,    13,    11,
     38,   605,   496,   424,   424,   165,    38,   428,
    426,   504,   440,   440,   440,   515,   440,   440,
    442,   440,   440,   606,   503,   503,   503,   607,
    608,   609,   609,   609,   610,    -1,    36,    -1,
    611,   509,    13,    11,    38,   612,   440,   440,
    440,   441,   440,   183,   442,   440,   440,   446,
    563,   176,   176,   613,   614,   614,   613,   614,
    614,   614,   613,   614,   614,   615,   517,    11,
    517,   616,   616,   616,   616,    11,   456,   456,
    456,   578,   617,   458,   458,   458,   458,   458,
    579,   579,   579,   618,   268,   268,   268,   619,
    619,   619,   620,   619,   619,   620,   619,   619,
    621,   622,   622,   622,   623,   624,   625,   199,
    153,   153,   153,   199,   327,   327,   327,   327,
    201,   221,   202,   203,   451,   452,   474,   221,
    202,   203,   451,   452,    98,   626,   626,   626,
     59,   475,   110,   627,   477,   475,   353,   628,
    477,   353,   353,   629,   476,   630,    25,    25,
    631,   632,   632,   632,   633,   634,   634,   634,
    635,   634,   634,   635,   634,   634,   636,   401,
    637,   483,   158,   158,   636,   401,   638,   483,
    636,   401,   231,   482,   483,   153,   231,   153,
    231,   639,   640,   640,   640,   641,   547,    11,
    547,   642,   642,   642,   642,   496,   153,   153,
    153,    11,   491,   491,   491,   643,   424,   497,
    498,   498,   498,   499,   607,    11,   644,   644,
    644,   610,   645,   646,   505,   505,   647,   647,
    647,   176,   648,   649,   649,   649,   650,   651,
    652,   652,   652,   653,   654,   655,    11,   520,
    520,   520,   656,   579,   657,   584,   584,   584,
    623,    11,   658,   659,   659,   659,   659,   659,
    526,   526,   526,   348,   659,   659,   659,   350,
    457,   660,   660,   660,   459,   661,   662,   663,
     25,    25,   542,    25,    26,    25,    25,   542,
     97,    97,    97,    97,   539,   540,   540,   540,
    541,   542,    55,    26,   633,   664,   543,   543,
    543,   543,   543,   634,   634,   634,   593,   390,
    390,   390,   225,   544,   544,   544,   308,   545,
    153,   153,   153,   545,   327,   327,   327,   327,
    641,   665,   666,   546,   546,   667,   667,   667,
     11,   550,   550,   550,   639,   668,   668,   668,
    641,   563,   669,   670,   670,   670,   671,   672,
    672,   672,   673,   672,   672,   673,   672,   672,
    646,   650,   674,   675,   567,   567,   676,   676,
    676,   653,    11,   677,   678,   678,   678,   678,
    678,   570,   570,   570,   346,   678,   678,   678,
    347,   648,   679,   679,   679,   650,   268,   680,
    681,   681,   681,   682,    -1,    36,    -1,   683,
    526,    13,    11,    38,   684,   461,   583,   583,
    685,   581,   584,   584,   539,   686,   686,   686,
    589,   687,    58,    26,    58,    58,   687,    55,
     26,   688,   634,   689,   690,   690,   690,   691,
    692,   692,   692,   693,   692,   692,   693,   692,
    692,   694,   695,   694,   603,   603,   671,   696,
    609,   609,   609,   609,   609,   672,   672,   672,
    645,   505,   505,   505,   697,   698,   698,   698,
    699,   700,   700,   700,   701,   700,   700,   701,
    700,   700,   702,    -1,    36,    -1,   703,   570,
     13,    11,    38,   704,   516,   614,   614,   705,
    702,   615,   615,   682,   706,   660,   660,   660,
    660,   660,   619,   619,   619,   583,   621,   622,
    622,   622,   623,   262,   707,   708,   707,   708,
    707,   273,   709,   709,   709,   275,   390,   691,
    710,   640,   640,   640,   640,   640,   692,   692,
    692,   711,   546,   546,   546,   712,   712,   712,
    713,   712,   712,   713,   712,   712,   714,   715,
    715,   715,   716,   717,   672,   699,   718,   649,
    649,   649,   649,   649,   700,   700,   700,   719,
    567,   567,   567,   720,   720,   720,   721,   720,
    720,   721,   720,   720,   614,   651,   652,   652,
    652,   653,   722,   723,   723,   723,   724,   725,
    619,   726,   110,   727,   663,   726,   110,   728,
    663,   726,   110,   662,   663,    25,    25,   729,
    692,   730,   603,   603,   603,   716,   731,   668,
    668,   668,   668,   668,   712,   712,   712,   505,
    732,   700,   733,   615,   615,   615,   724,   734,
    679,   679,   679,   679,   679,   720,   720,   720,
    584,   539,   686,   686,   686,   589,   687,    25,
     26,    25,    25,   687,    97,    97,    97,    97,
    546,   735,   712,   567,   736,   720,   603,   615
};

static unsigned short morf_base[] = {
      0,     5,    13,    18,    27,    29,    31,    40,
     42,    50,    58,    61,    69,    70,    79,    80,
     88,   100,   103,   106,   109,   112,   121,   125,
    126,   129,   134,   137,   146,   147,   149,   153,
    156,   158,   159,   162,   167,   169,   169,   177,
    179,   188,   190,   195,   198,   199,   201,   206,
    207,   212,   220,   222,   224,   232,   237,   240,
    245,   248,   253,   258,   263,   271,   276,   279,
    281,   286,   287,   291,   300,   309,   312,   316,
    321,   324,   327,   336,   339,   341,   350,   356,
    361,   363,   369,   372,   375,   384,   386,   395,
    403,   406,   411,   412,   413,   415,   424,   429,
    434,   437,   440,   442,   444,   449,   452,   455,
    460,   463,   466,   472,   474,   480,   488,   497,
    502,   507,   512,   521,   525,   529,   534,   539,
    544,   549,   552,   560,   565,   570,   573,   576,
    579,   582,   585,   588,   592,   593,   594,   595,
    598,   603,   606,   611,   614,   619,   622,   630,
    634,   638,   642,   642,   647,   656,   665,   670,
    671,   675,   684,   688,   690,   696,   699,   702,
    706,   711,   712,   716,   719,   723,   728,   732,
    734,   737,   743,   746,   750,   756,   762,   767,
    772,   773,   774,   779,   781,   790,   795,   800,
    803,   807,   811,   820,   823,   828,   836,   839,
    842,   842,   851,   856,   861,   863,   872,   875,
    878,   883,   888,   893,   896,   901,   906,   906,
    911,   914,   919,   924,   927,   930,   930,   935,
    940,   943,   948,   953,   958,   959,   968,   974,
    977,   982,   984,   993,   996,   999,  1003,  1008,
   1011,  1015,  1019,  1028,  1031,  1036,  1041,  1046,
   1051,  1060,  1061,  1066,  1068,  1074,  1079,  1082,
   1087,  1091,  1095,  1100,  1105,  1110,  1111,  1113,
   1122,  1125,  1130,  1135,  1137,  1143,  1146,  1154,
   1160,  1166,  1171,  1176,  1181,  1182,  1190,  1193,
   1196,  1196,  1198,  1207,  1212,  1214,  1219,  1223,
   1227,  1231,  1235,  1241,  1247,  1251,  1255,  1259,
   1263,  1269,  1274,  1276,  1282,  1285,  1287,  1292,
   1297,  1302,  1311,  1316,  1321,  1324,  1328,  1332,
   1341,  1343,  1345,  1348,  1352,  1355,  1363,  1372,
   1376,  1380,  1385,  1390,  1391,  1393,  1402,  1405,
   1408,  1416,  1419,  1422,  1422,  1424,  1430,  1433,
   1437,  1440,  1444,  1453,  1459,  1464,  1473,  1475,
   1480,  1483,  1486,  1488,  1497,  1500,  1505,  1514,
   1518,  1522,  1526,  1528,  1531,  1533,  1537,  1540,
   1541,  1541,  1546,  1551,  1560,  1564,  1567,  1570,
   1573,  1578,  1583,  1585,  1590,  1596,  1600,  1604,
   1607,  1611,  1615,  1620,  1625,  1629,  1633,  1638,
   1643,  1648,  1649,  1654,  1655,  1659,  1662,  1666,
   1670,  1674,  1679,  1685,  1689,  1693,  1696,  1697,
   1699,  1700,  1703,  1703,  1705,  1711,  1717,  1722,
   1723,  1728,  1737,  1741,  1745,  1750,  1759,  1763,
   1768,  1771,  1776,  1777,  1781,  1783,  1789,  1792,
   1797,  1799,  1804,  1806,  1811,  1813,  1816,  1822,
   1827,  1828,  1833,  1838,  1843,  1848,  1851,  1854,
   1858,  1863,  1868,  1873,  1878,  1884,  1886,  1892,
   1895,  1898,  1902,  1906,  1911,  1920,  1925,  1930,
   1939,  1940,  1945,  1946,  1955,  1958,  1966,  1969,
   1972,  1972,  1973,  1977,  1980,  1984,  1993,  1999,
   2003,  2005,  2011,  2014,  2019,  2021,  2030,  2033,
   2035,  2041,  2046,  2051,  2056,  2059,  2064,  2067,
   2067,  2070,  2075,  2076,  2080,  2084,  2093,  2096,
   2101,  2109,  2112,  2115,  2115,  2119,  2121,  2124,
   2128,  2137,  2139,  2145,  2148,  2153,  2158,  2166,
   2170,  2171,  2172,  2174,  2180,  2183,  2186,  2190,
   2194,  2196,  2197,  2200,  2204,  2213,  2221,  2224,
   2227,  2227,  2229,  2234,  2239,  2248,  2249,  2252,
   2256,  2260,  2266,  2272,  2278,  2283,  2292,  2293,
   2299,  2305,  2308,  2312,  2314,  2319,  2324,  2329,
   2333,  2339,  2344,  2345,  2353,  2356,  2359,  2359,
   2361,  2365,  2368,  2370,  2375,  2380,  2381,  2385,
   2393,  2397,  2401,  2402,  2411,  2416,  2421,  2429,
   2430,  2439,  2443,  2446,  2450,  2454,  2456,  2461,
   2465,  2466,  2472,  2475,  2478,  2479,  2488,  2493,
   2494,  2495,  2499,  2504,  2510,  2516,  2521,  2525,
   2531,  2536,  2541,  2550,  2556,  2560,  2569,  2574,
   2576,  2581,  2585,  2589,  2590,  2591,  2596,  2598,
   2601,  2602,  2606,  2609,  2610,  2615,  2620,  2621,
   2622,  2626,  2628,  2628,  2631,  2632,  2634,  2640,
   2643,  2648,  2653,  2658,  2663,  2668,  2673,  2676,
   2677,  2683,  2686,  2689,  2690,  2695,  2699,  2704,
   2705,  2709,  2712,  2716,  2721,  2722,  2727,  2736,
   2737,  2738,  2742,  2745,  2747,  2753,  2756,  2761,
   2766,  2767,  2772,  2780,  2784,  2788,  2793,  2798,
   2801,  2803,  2808,  2817,  2818,  2822,  2823,  2829,
   2832,  2835,  2836,  2841,  2850,  2851,  2859,  2863,
   2867,  2868,  2874,  2877,  2878,  2883,  2883,  2889,
   2894,  2895,  2896,  2902,  2905,  2908,  2909,  2918,
   2923,  2925,  2926,  2932,  2935,  2938,  2939,  2948,
   2949,  2954,  2959,  2961,  2965,  2969,  2975,  2977,
   2977,  2980,  2981,  2982,  2988,  2991,  2992,  2994,
   2994,  2997,  2998,  2999,  3005,  3008,  3009,  3014,
   3019,  3024,  3025,  3025,  3027,  3028,  3028,  3030,
   3031,  3032
};

static short morf_defstate[] = {
     -1,    -1,    -1,    -1,     3,    -1,    -1,     6,
     -1,    -1,     9,    -1,    -1,    -1,    -1,    -1,
     -1,    13,    13,    13,    13,    -1,    21,    21,
     21,    21,    21,    -1,    21,    -1,     8,    11,
     -1,     6,     6,    21,    -1,    -1,    13,    -1,
     -1,    40,    11,    11,    13,    13,    11,    13,
     11,    -1,    13,    13,    -1,    21,    21,    21,
     52,    13,    13,    52,    -1,    13,    21,    -1,
     11,    13,    16,    -1,    -1,    67,    67,    21,
     68,    67,    -1,     6,     6,    -1,    27,    27,
     -1,    13,    11,    11,    -1,    -1,    -1,    -1,
     87,    49,    13,    13,    -1,    -1,    52,    52,
     93,    21,    -1,    -1,    86,    87,    87,    60,
     21,    21,     3,    13,     3,    -1,    16,    21,
     21,    21,    -1,   114,   109,    13,    21,    21,
     13,   114,    -1,    13,    21,    21,    27,    21,
     27,    21,    21,    21,    21,    27,    21,    21,
     21,    21,    21,    21,    21,    21,    13,    13,
     11,    13,    87,   122,    16,    -1,   149,   149,
    149,    -1,   149,    -1,   153,    87,   153,   149,
     49,    21,    21,    21,    21,   109,    27,    21,
    149,   149,   149,   153,   153,   153,    60,    11,
     13,    13,    11,    -1,    -1,    52,    52,    13,
     13,    13,    -1,   186,    52,    -1,   114,   114,
    114,    -1,    52,    52,    -1,    -1,    87,    87,
     60,   109,    21,    21,   109,    13,   109,    13,
     21,    21,    21,    21,    52,    60,   109,    21,
     21,   109,    13,    52,    13,    16,    13,    11,
     11,    -1,    -1,    87,    13,    13,    87,   153,
    153,   153,    -1,   234,    87,    13,    13,    87,
     16,   153,    21,    -1,   180,    52,    52,    87,
    153,   153,    87,    13,    87,   153,    -1,    -1,
     11,    11,    11,    -1,    13,    11,    13,    67,
     68,    21,    21,    21,    -1,    -1,   186,   186,
    186,    -1,    -1,    52,    -1,    13,    21,    27,
     21,    27,    77,   274,   149,   153,   149,   153,
    153,   153,    -1,   153,    87,    -1,    93,    52,
     52,    -1,    52,    52,    77,    13,    13,    -1,
    303,    13,    13,    84,    87,    13,    -1,   310,
    153,   153,    11,    13,    -1,    -1,    87,    87,
     -1,   234,   234,   234,    -1,    86,    87,   153,
     13,    13,    -1,    27,    21,    -1,    -1,   317,
     87,    87,    -1,    -1,    87,    11,    16,    13,
     13,    13,    -1,    11,    -1,    13,    11,    13,
    109,    21,    21,    -1,   355,   355,    27,    21,
     21,    -1,    -1,    13,    27,   114,   109,    21,
    109,   109,    21,   122,   153,   153,   122,    13,
    122,   153,   122,   153,   153,    87,   153,    21,
     27,    21,    21,    27,    21,   274,    -1,    13,
     13,    13,    13,    13,    13,    13,   153,    13,
    122,    16,   153,   153,   153,    -1,   405,    13,
    405,   122,   153,   153,    -1,    13,    11,    11,
    149,   153,    -1,    13,   149,   149,   153,    11,
     13,    21,    21,    13,    21,    21,    21,    21,
    149,   153,   149,   149,   153,    -1,    13,    11,
     13,    13,    13,    11,    16,    11,    11,    16,
     13,    11,    13,    -1,   451,    -1,   355,   355,
    355,    -1,    -1,    -1,   186,    16,    93,   193,
     -1,   317,    87,    87,    -1,    -1,    87,    -1,
    153,    21,   109,    52,    27,    21,    -1,    13,
     11,   122,   153,   153,    13,    -1,   485,    87,
     -1,   405,   405,   405,    13,    -1,    11,   234,
     16,    -1,    13,    11,    11,    52,    13,    13,
     13,    -1,    -1,    13,    11,    13,    13,    13,
     -1,   255,    11,    13,    16,    -1,   451,   451,
    451,    -1,    13,    -1,    -1,    -1,    13,    13,
     13,    21,    21,   153,   153,    -1,   533,   153,
    149,   153,   297,    -1,   180,    52,    52,    -1,
    226,    87,    -1,    -1,   485,   485,   485,    -1,
    310,    87,    -1,    13,    11,    13,    13,    13,
     13,   274,    13,    16,    11,    -1,    13,    -1,
     16,    13,    13,    13,    13,    -1,    13,   355,
     -1,    -1,    -1,    -1,   579,    -1,    11,    13,
     -1,   153,    13,    21,    21,    52,   330,    68,
     21,    -1,    -1,   153,   153,    -1,    -1,    -1,
     13,   153,   405,    -1,    13,    11,    -1,    11,
     -1,    -1,    -1,    13,    -1,    11,    13,    -1,
    451,    -1,   523,    -1,   619,    -1,    13,    11,
     11,    -1,    21,    21,    13,    52,    21,    -1,
     -1,    -1,    -1,   634,   122,   153,    13,    -1,
     -1,    -1,   485,    -1,    13,    -1,    -1,    -1,
     -1,    -1,    -1,    -1,    13,    11,    11,    -1,
     -1,    -1,    13,    13,    -1,    52,    21,    21,
     -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     -1,   672,    -1,    -1,    -1,    13,    13,    -1,
     -1,    -1,    -1,    13,    11,   657,    93,    52,
     -1,    -1,    -1,    -1,    -1,   692,    -1,    -1,
     -1,    -1,    -1,    -1,    -1,   700,    -1,    13,
     11,    -1,    -1,    21,    27,    21,    -1,   665,
     -1,   712,    -1,    -1,    -1,    -1,    -1,   674,
     -1,   720,    -1,    -1,    -1,    -1,    52,    21,
     13,    -1,   695,    -1,    -1,   705,    -1,    -1,
     -1
};

int morf_next_state(int current_state, int next_token) {
int h, l, m, xm;
while (current_state >= 0) {
  l = morf_base[current_state], h = morf_base[current_state+1];
  while (h > l) {
    m = (h + l) >> 1; xm = morf_token[m];
    if (xm == next_token) goto done;
    if (m == l) break;
    if (xm > next_token) h = m;
    else                 l = m;
  }
  current_state = morf_defstate[current_state];
}
return -1;
done:
return morf_nextstate[m];
}
