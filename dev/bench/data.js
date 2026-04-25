window.BENCHMARK_DATA = {
  "lastUpdate": 1777145218873,
  "repoUrl": "https://github.com/sentomk/texere",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "115908952+sentomk@users.noreply.github.com",
            "name": "Yingfan Guo",
            "username": "sentomk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "defc6fc09f662ac816d4a41a82056d22d60b658f",
          "message": "Merge pull request #2 from sentomk/copilot/fix-gh-pages-deployment-error",
          "timestamp": "2026-04-26T03:24:12+08:00",
          "tree_id": "522d6f67cfd18797be626e194f3bbeddbc4a8421",
          "url": "https://github.com/sentomk/texere/commit/defc6fc09f662ac816d4a41a82056d22d60b658f"
        },
        "date": 1777145218482,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 55.69785228330642,
            "unit": "ns/iter",
            "extra": "iterations: 12724723\ncpu: 55.69290671396148 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 346.6431764011481,
            "unit": "ns/iter",
            "extra": "iterations: 1994131\ncpu: 346.5943069938735 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_ASCII",
            "value": 18888.926428113162,
            "unit": "ns/iter",
            "extra": "iterations: 37392\ncpu: 18885.828038083004 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 20931.90423773829,
            "unit": "ns/iter",
            "extra": "iterations: 33886\ncpu: 20927.299710795018 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4571.769951624359,
            "unit": "ns/iter",
            "extra": "iterations: 151316\ncpu: 4571.017546062547 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9491.220578497074,
            "unit": "ns/iter",
            "extra": "iterations: 75506\ncpu: 9489.352846131438 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 18755.032296938825,
            "unit": "ns/iter",
            "extra": "iterations: 37341\ncpu: 18754.19830749042 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1546.9063004038603,
            "unit": "ns/iter",
            "extra": "iterations: 460034\ncpu: 1546.8099575248775 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.351840586688795,
            "unit": "ns/iter",
            "extra": "iterations: 14209654\ncpu: 49.34981492160188 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 175.9145699353173,
            "unit": "ns/iter",
            "extra": "iterations: 3956277\ncpu: 175.90082140355662 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 19.760248018485836,
            "unit": "ns/iter",
            "extra": "iterations: 35547189\ncpu: 19.75953389732166 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16204.345312356689,
            "unit": "ns/iter",
            "extra": "iterations: 43604\ncpu: 16202.745803137326 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.580310047634548,
            "unit": "ns/iter",
            "extra": "iterations: 31174113\ncpu: 22.579943493500505 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.6108883626439352,
            "unit": "ns/iter",
            "extra": "iterations: 1123457787\ncpu: 0.6108541691028392 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 477.22941495894077,
            "unit": "ns/iter",
            "extra": "iterations: 1476922\ncpu: 477.23055110560995 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2558.3981170936895,
            "unit": "ns/iter",
            "extra": "iterations: 270433\ncpu: 2558.181608753366 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15513.876001141047,
            "unit": "ns/iter",
            "extra": "iterations: 45573\ncpu: 15513.101024729573 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 6068.920361353643,
            "unit": "ns/iter",
            "extra": "iterations: 116451\ncpu: 6068.658319808343 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2534.1684480516055,
            "unit": "ns/iter",
            "extra": "iterations: 275254\ncpu: 2534.0038873186236 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 13059.685498320456,
            "unit": "ns/iter",
            "extra": "iterations: 53580\ncpu: 13058.920735348978 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3317.9650361261515,
            "unit": "ns/iter",
            "extra": "iterations: 210789\ncpu: 3317.718362912688 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5525.716896546321,
            "unit": "ns/iter",
            "extra": "iterations: 128038\ncpu: 5525.6822193411335 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3316.0521560555735,
            "unit": "ns/iter",
            "extra": "iterations: 210848\ncpu: 3315.817190582786 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9361.241226653881,
            "unit": "ns/iter",
            "extra": "iterations: 74316\ncpu: 9361.261558749125 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20113.985936067824,
            "unit": "ns/iter",
            "extra": "iterations: 34912\ncpu: 20112.16882447301 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7277.853631447367,
            "unit": "ns/iter",
            "extra": "iterations: 96339\ncpu: 7277.6751367566885 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1606.2891186448642,
            "unit": "ns/iter",
            "extra": "iterations: 433310\ncpu: 1606.1902425515211 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1606.2596832771032,
            "unit": "ns/iter",
            "extra": "iterations: 433944\ncpu: 1606.182850782592 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4435.908239878649,
            "unit": "ns/iter",
            "extra": "iterations: 157563\ncpu: 4435.689203683609 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3040.8957013476615,
            "unit": "ns/iter",
            "extra": "iterations: 230770\ncpu: 3040.8124192919413 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 482.1207743218153,
            "unit": "ns/iter",
            "extra": "iterations: 1454589\ncpu: 482.0835136248116 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 2044.195483106866,
            "unit": "ns/iter",
            "extra": "iterations: 342802\ncpu: 2044.1851243575036 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 4082.5050365926886,
            "unit": "ns/iter",
            "extra": "iterations: 171346\ncpu: 4082.155556593081 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7027.765380636212,
            "unit": "ns/iter",
            "extra": "iterations: 99557\ncpu: 7027.605110640108 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 11021.43416481972,
            "unit": "ns/iter",
            "extra": "iterations: 63621\ncpu: 11021.069992612509 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1610.1760837091012,
            "unit": "ns/iter",
            "extra": "iterations: 433788\ncpu: 1610.1350682822076 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1622.398643955172,
            "unit": "ns/iter",
            "extra": "iterations: 433319\ncpu: 1622.3669467528564 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 480.600290738659,
            "unit": "ns/iter",
            "extra": "iterations: 1454227\ncpu: 480.58528826654765 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 522.2608629373617,
            "unit": "ns/iter",
            "extra": "iterations: 1298866\ncpu: 522.2455595881327 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2549.536624371665,
            "unit": "ns/iter",
            "extra": "iterations: 275131\ncpu: 2549.386979293491 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 399.9082704132476,
            "unit": "ns/iter",
            "extra": "iterations: 1740965\ncpu: 399.90552480951357 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 815.8122821914677,
            "unit": "ns/iter",
            "extra": "iterations: 859700\ncpu: 815.7156810515264 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1868.1494071598856,
            "unit": "ns/iter",
            "extra": "iterations: 384252\ncpu: 1868.1380994763845 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 286.90057335947193,
            "unit": "ns/iter",
            "extra": "iterations: 2436168\ncpu: 286.87789799389844 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2027.4682335424222,
            "unit": "ns/iter",
            "extra": "iterations: 343869\ncpu: 2027.4725200585117 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3262.9702201283326,
            "unit": "ns/iter",
            "extra": "iterations: 215011\ncpu: 3262.651250401149 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2934.1436708621886,
            "unit": "ns/iter",
            "extra": "iterations: 238587\ncpu: 2934.152376282035 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 58.05227860027119,
            "unit": "ns/iter",
            "extra": "iterations: 12265688\ncpu: 58.04530581570284 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}