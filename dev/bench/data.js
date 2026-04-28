window.BENCHMARK_DATA = {
  "lastUpdate": 1777389769595,
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
          "id": "3b9743141b779ff5e23f907a3fac7e40b713288b",
          "message": "Merge pull request #3 from sentomk/feat/comparison-dashboard\n\nfeat: add cross-scenario comparison dashboard and naive baselines",
          "timestamp": "2026-04-28T19:43:14+08:00",
          "tree_id": "c91a97db1b52c43111a52a6f3fd2359a972f57f7",
          "url": "https://github.com/sentomk/texere/commit/3b9743141b779ff5e23f907a3fac7e40b713288b"
        },
        "date": 1777376814366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20297.075532775303,
            "unit": "ns/iter",
            "extra": "iterations: 33363\ncpu: 20291.630518838236 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 23841.815556021025,
            "unit": "ns/iter",
            "extra": "iterations: 28632\ncpu: 23838.607117910025 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4872.4260974965455,
            "unit": "ns/iter",
            "extra": "iterations: 143554\ncpu: 4872.244409769148 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10700.528252618884,
            "unit": "ns/iter",
            "extra": "iterations: 65870\ncpu: 10699.001578867472 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21182.98677706007,
            "unit": "ns/iter",
            "extra": "iterations: 32973\ncpu: 21181.077245018663 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1770.0804401101118,
            "unit": "ns/iter",
            "extra": "iterations: 395810\ncpu: 1769.6702736161274 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 52.12033910559775,
            "unit": "ns/iter",
            "extra": "iterations: 13388042\ncpu: 52.108577490270804 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 165.65137284430043,
            "unit": "ns/iter",
            "extra": "iterations: 4208671\ncpu: 165.61864588607662 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.953639958686473,
            "unit": "ns/iter",
            "extra": "iterations: 31823548\ncpu: 21.950163382159662 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18040.575442301677,
            "unit": "ns/iter",
            "extra": "iterations: 38831\ncpu: 18037.23262341944 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 24.06017309058446,
            "unit": "ns/iter",
            "extra": "iterations: 29225622\ncpu: 24.056970216065896 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.7036869671485703,
            "unit": "ns/iter",
            "extra": "iterations: 994755351\ncpu: 0.7036418635962682 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 535.9785426596508,
            "unit": "ns/iter",
            "extra": "iterations: 1307711\ncpu: 535.8966392421569 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1592.813296045517,
            "unit": "ns/iter",
            "extra": "iterations: 440537\ncpu: 1592.7058385561265 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 17233.869318042056,
            "unit": "ns/iter",
            "extra": "iterations: 40633\ncpu: 17232.75674944011 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5828.700798500917,
            "unit": "ns/iter",
            "extra": "iterations: 116343\ncpu: 5827.959602210703 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1588.8125504200978,
            "unit": "ns/iter",
            "extra": "iterations: 441292\ncpu: 1588.6913653544595 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 13723.37324828242,
            "unit": "ns/iter",
            "extra": "iterations: 50950\ncpu: 13721.036781158 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2951.523223888211,
            "unit": "ns/iter",
            "extra": "iterations: 237105\ncpu: 2951.2501592121653 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5338.825920871081,
            "unit": "ns/iter",
            "extra": "iterations: 131153\ncpu: 5337.934991955962 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2947.3689919934777,
            "unit": "ns/iter",
            "extra": "iterations: 237558\ncpu: 2947.042023421652 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9758.705091967351,
            "unit": "ns/iter",
            "extra": "iterations: 71819\ncpu: 9757.58898063187 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 22668.635381498734,
            "unit": "ns/iter",
            "extra": "iterations: 31101\ncpu: 22665.135333269096 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6918.629491724155,
            "unit": "ns/iter",
            "extra": "iterations: 100713\ncpu: 6917.667530507476 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.64474060203444,
            "unit": "ns/iter",
            "extra": "iterations: 28391491\ncpu: 24.6416609821584 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 85.07967199645093,
            "unit": "ns/iter",
            "extra": "iterations: 8229667\ncpu: 85.07578945782352 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.626226952624403,
            "unit": "ns/iter",
            "extra": "iterations: 27248709\ncpu: 25.62307781260389 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1263.5158077671294,
            "unit": "ns/iter",
            "extra": "iterations: 551248\ncpu: 1263.4439598873807 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1191.210727373702,
            "unit": "ns/iter",
            "extra": "iterations: 585325\ncpu: 1191.0173852133419 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1267.7130149558507,
            "unit": "ns/iter",
            "extra": "iterations: 552426\ncpu: 1267.5702519432498 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1655.7464963882308,
            "unit": "ns/iter",
            "extra": "iterations: 420566\ncpu: 1655.527634188212 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1656.4803509794535,
            "unit": "ns/iter",
            "extra": "iterations: 422133\ncpu: 1656.1928089014668 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4911.50699295784,
            "unit": "ns/iter",
            "extra": "iterations: 142572\ncpu: 4910.688571388476 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3327.071440108746,
            "unit": "ns/iter",
            "extra": "iterations: 210498\ncpu: 3326.7950289313912 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 639.4547399331112,
            "unit": "ns/iter",
            "extra": "iterations: 1093834\ncpu: 639.3719238933872 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1905.178473034059,
            "unit": "ns/iter",
            "extra": "iterations: 366963\ncpu: 1904.9857424317995 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3875.5375842233125,
            "unit": "ns/iter",
            "extra": "iterations: 180621\ncpu: 3875.236899363839 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 8597.804315375264,
            "unit": "ns/iter",
            "extra": "iterations: 81059\ncpu: 8596.446033136437 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 13096.304499962158,
            "unit": "ns/iter",
            "extra": "iterations: 53156\ncpu: 13095.28858454368 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1693.9746599396533,
            "unit": "ns/iter",
            "extra": "iterations: 413456\ncpu: 1693.6738758174936 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1695.6605026664895,
            "unit": "ns/iter",
            "extra": "iterations: 412719\ncpu: 1695.530372965619 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 569.2386046590976,
            "unit": "ns/iter",
            "extra": "iterations: 1231183\ncpu: 569.1709096048285 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 602.9248611674695,
            "unit": "ns/iter",
            "extra": "iterations: 1160931\ncpu: 602.8409423126794 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2551.320546828587,
            "unit": "ns/iter",
            "extra": "iterations: 274821\ncpu: 2550.9898115500664 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 419.4159610871151,
            "unit": "ns/iter",
            "extra": "iterations: 1668959\ncpu: 419.3828781893372 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 541.4248959445501,
            "unit": "ns/iter",
            "extra": "iterations: 1292580\ncpu: 541.3766598585796 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2197.781668577169,
            "unit": "ns/iter",
            "extra": "iterations: 318415\ncpu: 2197.5424210542806 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 284.5560326898762,
            "unit": "ns/iter",
            "extra": "iterations: 2457030\ncpu: 284.53945088175703 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1211.9312934823902,
            "unit": "ns/iter",
            "extra": "iterations: 577820\ncpu: 1211.7258956076375 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1882.8154593402046,
            "unit": "ns/iter",
            "extra": "iterations: 371620\ncpu: 1882.712841074223 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1791.5718215010268,
            "unit": "ns/iter",
            "extra": "iterations: 390837\ncpu: 1791.316963337651 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.48126283532818,
            "unit": "ns/iter",
            "extra": "iterations: 14915864\ncpu: 44.47941708237631 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1021.9826368477547,
            "unit": "ns/iter",
            "extra": "iterations: 683862\ncpu: 1021.7898552632058 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2150.3233766114063,
            "unit": "ns/iter",
            "extra": "iterations: 325107\ncpu: 2150.151826936982 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1412.168245241102,
            "unit": "ns/iter",
            "extra": "iterations: 495806\ncpu: 1411.9049003037474 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4250.9846655535675,
            "unit": "ns/iter",
            "extra": "iterations: 165901\ncpu: 4250.636873798227 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 61.297227233248364,
            "unit": "ns/iter",
            "extra": "iterations: 11423139\ncpu: 61.28459287766686 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 356.6396435099413,
            "unit": "ns/iter",
            "extra": "iterations: 1964599\ncpu: 356.6239624472983 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 231.33806112372136,
            "unit": "ns/iter",
            "extra": "iterations: 3027630\ncpu: 231.30879929185562 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 244.71235716370927,
            "unit": "ns/iter",
            "extra": "iterations: 2863068\ncpu: 244.6986184051529 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 22.544329902623154,
            "unit": "ns/iter",
            "extra": "iterations: 31021566\ncpu: 22.54178248125835 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 364.65708806142595,
            "unit": "ns/iter",
            "extra": "iterations: 1909951\ncpu: 364.62109708573763 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2122.0538233245634,
            "unit": "ns/iter",
            "extra": "iterations: 330210\ncpu: 2121.6657460403953 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1243.3425582946738,
            "unit": "ns/iter",
            "extra": "iterations: 563688\ncpu: 1243.1963976526054 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 1025.8304712846696,
            "unit": "ns/iter",
            "extra": "iterations: 702760\ncpu: 1025.6701619329465 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.62197273618602,
            "unit": "ns/iter",
            "extra": "iterations: 3755454\ncpu: 186.59637583099277 ns\nthreads: 1"
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
          "id": "eb88e39b7d9fb21251dc922d4b35eb6a8d945d2e",
          "message": "docs: add pull request template #4",
          "timestamp": "2026-04-28T20:35:10+08:00",
          "tree_id": "8e080b207b562cea8f15848138a8f2a64ecdaa2a",
          "url": "https://github.com/sentomk/texere/commit/eb88e39b7d9fb21251dc922d4b35eb6a8d945d2e"
        },
        "date": 1777379901624,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20091.887049099903,
            "unit": "ns/iter",
            "extra": "iterations: 34847\ncpu: 20089.36809481448 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24021.441399356372,
            "unit": "ns/iter",
            "extra": "iterations: 28899\ncpu: 24020.283470016264 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 5014.4424999999155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5012.2508400000015 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10635.764455098768,
            "unit": "ns/iter",
            "extra": "iterations: 65911\ncpu: 10634.528970884985 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21209.38885694364,
            "unit": "ns/iter",
            "extra": "iterations: 33043\ncpu: 21208.238658717422 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1770.339634415995,
            "unit": "ns/iter",
            "extra": "iterations: 395805\ncpu: 1770.1538889099431 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 54.21772306523253,
            "unit": "ns/iter",
            "extra": "iterations: 12980407\ncpu: 54.21678711615128 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 166.5753277208019,
            "unit": "ns/iter",
            "extra": "iterations: 4057112\ncpu: 166.55437118817508 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.928804784438224,
            "unit": "ns/iter",
            "extra": "iterations: 31934365\ncpu: 21.925852385040375 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18034.362898864096,
            "unit": "ns/iter",
            "extra": "iterations: 38829\ncpu: 18032.700507352776 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.941137299157443,
            "unit": "ns/iter",
            "extra": "iterations: 29137382\ncpu: 23.939448334788626 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.7058627427149309,
            "unit": "ns/iter",
            "extra": "iterations: 995842967\ncpu: 0.7058582811681391 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 536.1204853422073,
            "unit": "ns/iter",
            "extra": "iterations: 1305553\ncpu: 535.9744920351757 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1589.1314089578593,
            "unit": "ns/iter",
            "extra": "iterations: 439346\ncpu: 1589.062850236487 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 17266.488461252822,
            "unit": "ns/iter",
            "extra": "iterations: 40429\ncpu: 17265.09463503924 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5822.425404667986,
            "unit": "ns/iter",
            "extra": "iterations: 120222\ncpu: 5822.122273793489 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1585.660635886543,
            "unit": "ns/iter",
            "extra": "iterations: 440739\ncpu: 1585.6046844050559 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14076.553904241353,
            "unit": "ns/iter",
            "extra": "iterations: 49792\ncpu: 14074.912034061692 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2953.4970808831563,
            "unit": "ns/iter",
            "extra": "iterations: 237058\ncpu: 2953.355322326184 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5338.235597225459,
            "unit": "ns/iter",
            "extra": "iterations: 131190\ncpu: 5337.320039637165 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2949.7891588612006,
            "unit": "ns/iter",
            "extra": "iterations: 237226\ncpu: 2949.512861153507 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9747.759499484942,
            "unit": "ns/iter",
            "extra": "iterations: 71846\ncpu: 9746.920719316322 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 22673.275453344726,
            "unit": "ns/iter",
            "extra": "iterations: 31047\ncpu: 22672.126099140034 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6911.983399865705,
            "unit": "ns/iter",
            "extra": "iterations: 101204\ncpu: 6911.43941939055 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.499192870944942,
            "unit": "ns/iter",
            "extra": "iterations: 28815714\ncpu: 24.496995562907113 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 85.1855430350562,
            "unit": "ns/iter",
            "extra": "iterations: 8240886\ncpu: 85.18463488027842 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.706808306342865,
            "unit": "ns/iter",
            "extra": "iterations: 27248862\ncpu: 25.704801470241186 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1263.0665819577416,
            "unit": "ns/iter",
            "extra": "iterations: 554054\ncpu: 1263.030184783429 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1183.9885793565322,
            "unit": "ns/iter",
            "extra": "iterations: 591035\ncpu: 1183.7679815916156 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1273.138482722311,
            "unit": "ns/iter",
            "extra": "iterations: 554849\ncpu: 1273.034777029423 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1706.13535451745,
            "unit": "ns/iter",
            "extra": "iterations: 353819\ncpu: 1705.85978141366 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1657.5345402303253,
            "unit": "ns/iter",
            "extra": "iterations: 406497\ncpu: 1657.273709277072 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4913.134651296675,
            "unit": "ns/iter",
            "extra": "iterations: 142442\ncpu: 4912.733575771184 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3326.489369182775,
            "unit": "ns/iter",
            "extra": "iterations: 210473\ncpu: 3326.195207936424 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 640.0235751335572,
            "unit": "ns/iter",
            "extra": "iterations: 1093313\ncpu: 639.9667917604554 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1907.9360716508656,
            "unit": "ns/iter",
            "extra": "iterations: 366332\ncpu: 1907.5730184641247 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3876.9189357088935,
            "unit": "ns/iter",
            "extra": "iterations: 180289\ncpu: 3876.447686769579 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 8603.73195305581,
            "unit": "ns/iter",
            "extra": "iterations: 81288\ncpu: 8602.363866745452 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 13188.831078528156,
            "unit": "ns/iter",
            "extra": "iterations: 52924\ncpu: 13188.606435643624 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1697.1195593019218,
            "unit": "ns/iter",
            "extra": "iterations: 413435\ncpu: 1696.8936011706844 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1699.1050567469779,
            "unit": "ns/iter",
            "extra": "iterations: 411035\ncpu: 1698.9279282786026 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 569.5235936877662,
            "unit": "ns/iter",
            "extra": "iterations: 1229990\ncpu: 569.4496158505332 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 602.9683728481151,
            "unit": "ns/iter",
            "extra": "iterations: 1151890\ncpu: 602.884360485815 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2521.94709362165,
            "unit": "ns/iter",
            "extra": "iterations: 277906\ncpu: 2521.792965966917 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 390.4924029680592,
            "unit": "ns/iter",
            "extra": "iterations: 1791884\ncpu: 390.4839543184743 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 544.1415180378766,
            "unit": "ns/iter",
            "extra": "iterations: 1289454\ncpu: 544.107626949077 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2046.1656209651553,
            "unit": "ns/iter",
            "extra": "iterations: 341557\ncpu: 2045.9645622838982 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 283.9229225904391,
            "unit": "ns/iter",
            "extra": "iterations: 2465703\ncpu: 283.8935581454856 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1211.7903329670871,
            "unit": "ns/iter",
            "extra": "iterations: 576123\ncpu: 1211.6829062543861 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1885.2132377090616,
            "unit": "ns/iter",
            "extra": "iterations: 371454\ncpu: 1885.1968615225592 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1797.6676189696416,
            "unit": "ns/iter",
            "extra": "iterations: 390982\ncpu: 1797.4632694088127 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.65082812475115,
            "unit": "ns/iter",
            "extra": "iterations: 15658933\ncpu: 44.64939686503551 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1023.2698784838684,
            "unit": "ns/iter",
            "extra": "iterations: 685012\ncpu: 1023.1657897963785 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2149.5588426987483,
            "unit": "ns/iter",
            "extra": "iterations: 325274\ncpu: 2149.4237473637777 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1463.97410354814,
            "unit": "ns/iter",
            "extra": "iterations: 477633\ncpu: 1463.853889911301 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4276.669147158122,
            "unit": "ns/iter",
            "extra": "iterations: 163946\ncpu: 4276.155124248255 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 61.27608291546645,
            "unit": "ns/iter",
            "extra": "iterations: 11447177\ncpu: 61.27219706657801 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 356.553309769902,
            "unit": "ns/iter",
            "extra": "iterations: 1963777\ncpu: 356.53806822261095 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 230.90452765566428,
            "unit": "ns/iter",
            "extra": "iterations: 3015512\ncpu: 230.8737401807723 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 249.9266080461656,
            "unit": "ns/iter",
            "extra": "iterations: 2862480\ncpu: 249.92281587993733 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 22.51770397206754,
            "unit": "ns/iter",
            "extra": "iterations: 31093559\ncpu: 22.51623678717514 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 367.5880655260661,
            "unit": "ns/iter",
            "extra": "iterations: 1924425\ncpu: 367.5863990542634 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2119.2770125979423,
            "unit": "ns/iter",
            "extra": "iterations: 330133\ncpu: 2119.1601081988183 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1254.0045728501584,
            "unit": "ns/iter",
            "extra": "iterations: 561138\ncpu: 1253.9055508627157 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 999.7667650936221,
            "unit": "ns/iter",
            "extra": "iterations: 702382\ncpu: 999.6605792859195 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.4630224172076,
            "unit": "ns/iter",
            "extra": "iterations: 3752652\ncpu: 186.44833840174968 ns\nthreads: 1"
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
          "id": "cd9a9f92616dc45c1e55d8669cb2b6d68f6d85b2",
          "message": "docs: add contribution guidelines (#5)",
          "timestamp": "2026-04-28T23:19:11+08:00",
          "tree_id": "736fb6d48a9829d495da21ea88f145c949c82c5c",
          "url": "https://github.com/sentomk/texere/commit/cd9a9f92616dc45c1e55d8669cb2b6d68f6d85b2"
        },
        "date": 1777389769248,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19163.481670929013,
            "unit": "ns/iter",
            "extra": "iterations: 36363\ncpu: 19163.18301570278 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21240.71674914227,
            "unit": "ns/iter",
            "extra": "iterations: 32939\ncpu: 21235.062539846385 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4787.73788008346,
            "unit": "ns/iter",
            "extra": "iterations: 146185\ncpu: 4787.526155214283 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9359.060006417827,
            "unit": "ns/iter",
            "extra": "iterations: 74792\ncpu: 9357.866175526799 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 18824.040986032658,
            "unit": "ns/iter",
            "extra": "iterations: 37159\ncpu: 18822.263570063784 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1567.226314669886,
            "unit": "ns/iter",
            "extra": "iterations: 446595\ncpu: 1567.0010412118347 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.690867185106804,
            "unit": "ns/iter",
            "extra": "iterations: 14157727\ncpu: 49.687458163305486 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 178.61027945180578,
            "unit": "ns/iter",
            "extra": "iterations: 3922680\ncpu: 178.57905641041333 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 19.83380587933082,
            "unit": "ns/iter",
            "extra": "iterations: 35383857\ncpu: 19.83199782318816 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16318.455906628144,
            "unit": "ns/iter",
            "extra": "iterations: 43011\ncpu: 16317.255446281162 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.42736560479767,
            "unit": "ns/iter",
            "extra": "iterations: 29449340\ncpu: 23.425987305657785 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.6257935397461174,
            "unit": "ns/iter",
            "extra": "iterations: 1118954664\ncpu: 0.6257503646278196 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 474.55894398954945,
            "unit": "ns/iter",
            "extra": "iterations: 1474493\ncpu: 474.5356139364513 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2457.1079583054325,
            "unit": "ns/iter",
            "extra": "iterations: 285601\ncpu: 2456.78289641843 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15783.815117926317,
            "unit": "ns/iter",
            "extra": "iterations: 44477\ncpu: 15782.123726870064 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5741.083629805596,
            "unit": "ns/iter",
            "extra": "iterations: 121990\ncpu: 5741.068956471842 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2421.8156187909212,
            "unit": "ns/iter",
            "extra": "iterations: 289395\ncpu: 2421.6538433628816 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 12899.186147425102,
            "unit": "ns/iter",
            "extra": "iterations: 54387\ncpu: 12898.073602147597 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3322.3649435238044,
            "unit": "ns/iter",
            "extra": "iterations: 210797\ncpu: 3322.0024051575792 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5702.994880726654,
            "unit": "ns/iter",
            "extra": "iterations: 122869\ncpu: 5702.620701722978 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3327.8380934295974,
            "unit": "ns/iter",
            "extra": "iterations: 210640\ncpu: 3327.2290400683646 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9638.761672577048,
            "unit": "ns/iter",
            "extra": "iterations: 74448\ncpu: 9637.98968407479 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20813.0012602393,
            "unit": "ns/iter",
            "extra": "iterations: 33327\ncpu: 20810.480721337084 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7127.644684057377,
            "unit": "ns/iter",
            "extra": "iterations: 98214\ncpu: 7127.41559248173 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.429919693120276,
            "unit": "ns/iter",
            "extra": "iterations: 29886356\ncpu: 23.427724711570743 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 91.28203585692467,
            "unit": "ns/iter",
            "extra": "iterations: 7684764\ncpu: 91.2767548879835 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 22.681218643080705,
            "unit": "ns/iter",
            "extra": "iterations: 30927185\ncpu: 22.68116991572308 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1999.5819795876112,
            "unit": "ns/iter",
            "extra": "iterations: 348416\ncpu: 1999.407004844787 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1933.5875402112988,
            "unit": "ns/iter",
            "extra": "iterations: 363393\ncpu: 1933.4680635014895 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 2008.3701440908976,
            "unit": "ns/iter",
            "extra": "iterations: 347489\ncpu: 2008.0872862162587 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1594.182103309245,
            "unit": "ns/iter",
            "extra": "iterations: 437444\ncpu: 1594.0965540732072 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1596.5981570037554,
            "unit": "ns/iter",
            "extra": "iterations: 438308\ncpu: 1596.420088157185 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4434.5020452946865,
            "unit": "ns/iter",
            "extra": "iterations: 157679\ncpu: 4434.311899491998 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3032.152615416659,
            "unit": "ns/iter",
            "extra": "iterations: 230881\ncpu: 3031.6687990783184 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 573.8751078395605,
            "unit": "ns/iter",
            "extra": "iterations: 1219404\ncpu: 573.8328273484419 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1736.2897952506435,
            "unit": "ns/iter",
            "extra": "iterations: 397315\ncpu: 1736.0809710179524 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3789.3958236180943,
            "unit": "ns/iter",
            "extra": "iterations: 184418\ncpu: 3789.173654415517 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7667.727490851571,
            "unit": "ns/iter",
            "extra": "iterations: 91274\ncpu: 7667.177892937742 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 11698.13169568419,
            "unit": "ns/iter",
            "extra": "iterations: 59964\ncpu: 11696.962344073103 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1597.0205673435764,
            "unit": "ns/iter",
            "extra": "iterations: 439240\ncpu: 1596.9163987797047 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1598.596318247788,
            "unit": "ns/iter",
            "extra": "iterations: 437835\ncpu: 1598.422965272306 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 542.4354067689659,
            "unit": "ns/iter",
            "extra": "iterations: 1291544\ncpu: 542.4135546291895 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 544.5691355267774,
            "unit": "ns/iter",
            "extra": "iterations: 1303071\ncpu: 544.5294354643786 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2898.0453470586667,
            "unit": "ns/iter",
            "extra": "iterations: 241890\ncpu: 2897.8524866674993 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 413.19092138886094,
            "unit": "ns/iter",
            "extra": "iterations: 1671379\ncpu: 413.1316362117755 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 530.5459430442245,
            "unit": "ns/iter",
            "extra": "iterations: 1320744\ncpu: 530.50592696238 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2012.708811424152,
            "unit": "ns/iter",
            "extra": "iterations: 348173\ncpu: 2012.5788271922263 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 286.5421861278647,
            "unit": "ns/iter",
            "extra": "iterations: 2443718\ncpu: 286.52738245574864 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2021.690394723934,
            "unit": "ns/iter",
            "extra": "iterations: 346622\ncpu: 2021.5575439527827 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3252.7885468071718,
            "unit": "ns/iter",
            "extra": "iterations: 215608\ncpu: 3252.641001261537 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2940.20225346905,
            "unit": "ns/iter",
            "extra": "iterations: 238033\ncpu: 2939.915184029077 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 45.261738281779785,
            "unit": "ns/iter",
            "extra": "iterations: 15452581\ncpu: 45.25932806953079 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 986.0180490367046,
            "unit": "ns/iter",
            "extra": "iterations: 710121\ncpu: 985.9406073049546 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2221.3962806590434,
            "unit": "ns/iter",
            "extra": "iterations: 315486\ncpu: 2221.2465370888035 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 2109.78936589273,
            "unit": "ns/iter",
            "extra": "iterations: 331537\ncpu: 2109.6479035522384 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 8069.347244485008,
            "unit": "ns/iter",
            "extra": "iterations: 86717\ncpu: 8068.738609499934 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 54.73656452603438,
            "unit": "ns/iter",
            "extra": "iterations: 12821375\ncpu: 54.73319367072563 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 359.78335300210995,
            "unit": "ns/iter",
            "extra": "iterations: 1943858\ncpu: 359.73777611327716 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 219.12289276069617,
            "unit": "ns/iter",
            "extra": "iterations: 3191498\ncpu: 219.12271322119062 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 233.28031952409006,
            "unit": "ns/iter",
            "extra": "iterations: 3000212\ncpu: 233.23283854607604 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.626994528924666,
            "unit": "ns/iter",
            "extra": "iterations: 32433661\ncpu: 21.62580829219363 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 325.6824952981805,
            "unit": "ns/iter",
            "extra": "iterations: 2150765\ncpu: 325.614889120848 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1632.9204625190207,
            "unit": "ns/iter",
            "extra": "iterations: 443225\ncpu: 1632.8941102149022 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1107.3359709420429,
            "unit": "ns/iter",
            "extra": "iterations: 632391\ncpu: 1107.224033865125 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 974.1173277080392,
            "unit": "ns/iter",
            "extra": "iterations: 718185\ncpu: 974.0326573236714 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 165.26073178702478,
            "unit": "ns/iter",
            "extra": "iterations: 4240906\ncpu: 165.2537672374721 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}