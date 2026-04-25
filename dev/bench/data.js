window.BENCHMARK_DATA = {
  "lastUpdate": 1777146384845,
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
      },
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
          "id": "816e768e33cc3d2650fc8d79d8312a14196c120a",
          "message": "docs: update benchmark dashboard url.",
          "timestamp": "2026-04-26T03:43:10+08:00",
          "tree_id": "50c88473cd0084ac136c813d895b947123ce95b9",
          "url": "https://github.com/sentomk/texere/commit/816e768e33cc3d2650fc8d79d8312a14196c120a"
        },
        "date": 1777146384221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 56.01626351303574,
            "unit": "ns/iter",
            "extra": "iterations: 12627899\ncpu: 56.012816383786415 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 353.9412623128332,
            "unit": "ns/iter",
            "extra": "iterations: 1970098\ncpu: 353.91627675374525 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_ASCII",
            "value": 19067.413246979446,
            "unit": "ns/iter",
            "extra": "iterations: 36748\ncpu: 19066.14308261674 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 20922.841752545643,
            "unit": "ns/iter",
            "extra": "iterations: 33574\ncpu: 20921.74852564485 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4693.346971584602,
            "unit": "ns/iter",
            "extra": "iterations: 149286\ncpu: 4693.030123387322 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9368.367691791898,
            "unit": "ns/iter",
            "extra": "iterations: 74625\ncpu: 9367.568482412056 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 18965.82076212595,
            "unit": "ns/iter",
            "extra": "iterations: 36923\ncpu: 18964.081764753675 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1580.1501356945082,
            "unit": "ns/iter",
            "extra": "iterations: 446223\ncpu: 1580.0419005743756 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.54677440660177,
            "unit": "ns/iter",
            "extra": "iterations: 14058297\ncpu: 49.54454177486785 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 179.35730186948166,
            "unit": "ns/iter",
            "extra": "iterations: 3906705\ncpu: 179.3478670644442 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 19.83503660235864,
            "unit": "ns/iter",
            "extra": "iterations: 35281469\ncpu: 19.83414678680185 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16259.166577583317,
            "unit": "ns/iter",
            "extra": "iterations: 43031\ncpu: 16257.879180125945 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.79400249590745,
            "unit": "ns/iter",
            "extra": "iterations: 30756761\ncpu: 22.79192646455848 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.6256260509887559,
            "unit": "ns/iter",
            "extra": "iterations: 1116787031\ncpu: 0.6255754701721651 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 473.7589934349083,
            "unit": "ns/iter",
            "extra": "iterations: 1475076\ncpu: 473.72332679807715 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2612.3730827321124,
            "unit": "ns/iter",
            "extra": "iterations: 268155\ncpu: 2612.253282616399 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15517.610316080973,
            "unit": "ns/iter",
            "extra": "iterations: 44862\ncpu: 15515.992554946333 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 6016.2149736474275,
            "unit": "ns/iter",
            "extra": "iterations: 116498\ncpu: 6015.524189256487 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2545.5714348012616,
            "unit": "ns/iter",
            "extra": "iterations: 275181\ncpu: 2545.2236782335895 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 13086.90990603931,
            "unit": "ns/iter",
            "extra": "iterations: 53533\ncpu: 13085.579549063199 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3319.674235741555,
            "unit": "ns/iter",
            "extra": "iterations: 210858\ncpu: 3319.298613284777 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5529.520327638536,
            "unit": "ns/iter",
            "extra": "iterations: 126847\ncpu: 5529.25470842828 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3322.179909334048,
            "unit": "ns/iter",
            "extra": "iterations: 210884\ncpu: 3321.8870658750798 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9399.098324037364,
            "unit": "ns/iter",
            "extra": "iterations: 74763\ncpu: 9398.521875794167 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20140.35159528554,
            "unit": "ns/iter",
            "extra": "iterations: 34790\ncpu: 20139.46116700202 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7278.485101435063,
            "unit": "ns/iter",
            "extra": "iterations: 96318\ncpu: 7278.0175148985445 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1610.5157902967808,
            "unit": "ns/iter",
            "extra": "iterations: 434824\ncpu: 1610.303336522368 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1610.3967260460615,
            "unit": "ns/iter",
            "extra": "iterations: 434887\ncpu: 1610.1520073030433 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4446.412770230192,
            "unit": "ns/iter",
            "extra": "iterations: 157366\ncpu: 4446.095617859008 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3044.4498398077512,
            "unit": "ns/iter",
            "extra": "iterations: 229724\ncpu: 3044.277110793833 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 481.79397980597207,
            "unit": "ns/iter",
            "extra": "iterations: 1452013\ncpu: 481.7641488058296 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 2044.1524581872998,
            "unit": "ns/iter",
            "extra": "iterations: 342061\ncpu: 2044.0558292234416 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 4095.8567010609154,
            "unit": "ns/iter",
            "extra": "iterations: 171055\ncpu: 4095.7183128233733 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7033.9693064833045,
            "unit": "ns/iter",
            "extra": "iterations: 99565\ncpu: 7033.531331291092 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 11028.829884080034,
            "unit": "ns/iter",
            "extra": "iterations: 63492\ncpu: 11027.976705726767 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1611.1051621582894,
            "unit": "ns/iter",
            "extra": "iterations: 434082\ncpu: 1610.9765804617527 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1611.3166842855412,
            "unit": "ns/iter",
            "extra": "iterations: 435140\ncpu: 1611.1466033920142 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 481.95814572233536,
            "unit": "ns/iter",
            "extra": "iterations: 1453806\ncpu: 481.9180660968483 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 523.4616225847835,
            "unit": "ns/iter",
            "extra": "iterations: 1336867\ncpu: 523.4279094330276 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2556.7470175438243,
            "unit": "ns/iter",
            "extra": "iterations: 273600\ncpu: 2556.463929093547 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 397.7959146042728,
            "unit": "ns/iter",
            "extra": "iterations: 1784258\ncpu: 397.7581913602176 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 816.9266778020772,
            "unit": "ns/iter",
            "extra": "iterations: 840564\ncpu: 816.8767494206342 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1883.186934837982,
            "unit": "ns/iter",
            "extra": "iterations: 372349\ncpu: 1883.0770245119543 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 288.0017074877013,
            "unit": "ns/iter",
            "extra": "iterations: 2432814\ncpu: 287.98498898806287 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2030.6477151030651,
            "unit": "ns/iter",
            "extra": "iterations: 346427\ncpu: 2030.5085140592453 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3262.4606629802347,
            "unit": "ns/iter",
            "extra": "iterations: 214124\ncpu: 3262.28646018196 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2933.7615181261554,
            "unit": "ns/iter",
            "extra": "iterations: 238689\ncpu: 2933.6739397290894 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 58.567593271130015,
            "unit": "ns/iter",
            "extra": "iterations: 12189919\ncpu: 58.56524649589561 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}