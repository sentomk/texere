window.BENCHMARK_DATA = {
  "lastUpdate": 1777469871468,
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
          "id": "0fe7f395eba44d65e0234cb583c7fc1fb441b0da",
          "message": "chore: add code quality config files (#6)",
          "timestamp": "2026-04-29T13:49:20+08:00",
          "tree_id": "ba37227ab4c8860a3b204da4ea58c956c476da51",
          "url": "https://github.com/sentomk/texere/commit/0fe7f395eba44d65e0234cb583c7fc1fb441b0da"
        },
        "date": 1777442006636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20229.178231721624,
            "unit": "ns/iter",
            "extra": "iterations: 34904\ncpu: 20228.62846665139 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24271.810871314043,
            "unit": "ns/iter",
            "extra": "iterations: 28589\ncpu: 24270.321872048688 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4901.756828715919,
            "unit": "ns/iter",
            "extra": "iterations: 143475\ncpu: 4900.829656734623 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10636.4104411944,
            "unit": "ns/iter",
            "extra": "iterations: 65912\ncpu: 10635.65673928875 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21212.04144732843,
            "unit": "ns/iter",
            "extra": "iterations: 33054\ncpu: 21211.373600774506 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1777.2235800818164,
            "unit": "ns/iter",
            "extra": "iterations: 395639\ncpu: 1776.8431575249163 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 52.09299397120034,
            "unit": "ns/iter",
            "extra": "iterations: 13381104\ncpu: 52.0875982280685 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 165.61344220259593,
            "unit": "ns/iter",
            "extra": "iterations: 4218148\ncpu: 165.59816085163445 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.90684828745417,
            "unit": "ns/iter",
            "extra": "iterations: 31750624\ncpu: 21.902716778101755 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18043.96437514545,
            "unit": "ns/iter",
            "extra": "iterations: 38737\ncpu: 18041.580246276193 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.982951219644338,
            "unit": "ns/iter",
            "extra": "iterations: 29208541\ncpu: 23.980746727472653 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.7037542194409823,
            "unit": "ns/iter",
            "extra": "iterations: 996381101\ncpu: 0.7037483170809358 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 535.7819205402036,
            "unit": "ns/iter",
            "extra": "iterations: 1304685\ncpu: 535.7098832285199 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1601.528347687767,
            "unit": "ns/iter",
            "extra": "iterations: 437496\ncpu: 1601.372764550989 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 17240.00302530968,
            "unit": "ns/iter",
            "extra": "iterations: 40657\ncpu: 17238.044026858843 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5820.627073777779,
            "unit": "ns/iter",
            "extra": "iterations: 120131\ncpu: 5819.857796905053 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1592.5197190867661,
            "unit": "ns/iter",
            "extra": "iterations: 438712\ncpu: 1592.4329719724997 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14093.790707484544,
            "unit": "ns/iter",
            "extra": "iterations: 49782\ncpu: 14092.053392792612 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2952.2970778672625,
            "unit": "ns/iter",
            "extra": "iterations: 237224\ncpu: 2952.270916939261 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5340.534727841694,
            "unit": "ns/iter",
            "extra": "iterations: 130990\ncpu: 5339.76362317734 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2952.475109686142,
            "unit": "ns/iter",
            "extra": "iterations: 237040\ncpu: 2952.4480256496845 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9752.602678943842,
            "unit": "ns/iter",
            "extra": "iterations: 71894\ncpu: 9750.023729379349 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 22663.550275637783,
            "unit": "ns/iter",
            "extra": "iterations: 31019\ncpu: 22661.601534543293 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6900.628715365303,
            "unit": "ns/iter",
            "extra": "iterations: 101235\ncpu: 6899.978218995413 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.34873862918864,
            "unit": "ns/iter",
            "extra": "iterations: 28765649\ncpu: 24.346248436807333 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 85.27147044657163,
            "unit": "ns/iter",
            "extra": "iterations: 8221720\ncpu: 85.26588718662242 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.64969876799292,
            "unit": "ns/iter",
            "extra": "iterations: 27109171\ncpu: 25.646302315921098 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1300.7067456133218,
            "unit": "ns/iter",
            "extra": "iterations: 554805\ncpu: 1300.6018042375235 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1184.4498720093516,
            "unit": "ns/iter",
            "extra": "iterations: 590668\ncpu: 1184.343846289286 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1434.1009388129278,
            "unit": "ns/iter",
            "extra": "iterations: 547926\ncpu: 1434.0723437106508 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1662.2798875258097,
            "unit": "ns/iter",
            "extra": "iterations: 421430\ncpu: 1662.0515316897174 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1663.7734120400305,
            "unit": "ns/iter",
            "extra": "iterations: 421311\ncpu: 1663.6138932997242 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4911.659081901374,
            "unit": "ns/iter",
            "extra": "iterations: 141292\ncpu: 4910.980579225996 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3325.3018568572056,
            "unit": "ns/iter",
            "extra": "iterations: 210517\ncpu: 3325.272424554788 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 639.513660987712,
            "unit": "ns/iter",
            "extra": "iterations: 1095565\ncpu: 639.4316156503702 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1910.1548505934993,
            "unit": "ns/iter",
            "extra": "iterations: 366450\ncpu: 1910.053281484511 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3878.323468061082,
            "unit": "ns/iter",
            "extra": "iterations: 180735\ncpu: 3877.787655960388 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 8604.1534193662,
            "unit": "ns/iter",
            "extra": "iterations: 81287\ncpu: 8603.505394466472 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 13141.314693106577,
            "unit": "ns/iter",
            "extra": "iterations: 52950\ncpu: 13140.451199244653 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1697.6895230065309,
            "unit": "ns/iter",
            "extra": "iterations: 412752\ncpu: 1697.2937017870186 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1702.0618431336509,
            "unit": "ns/iter",
            "extra": "iterations: 411994\ncpu: 1701.9024573173413 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 568.9101700120748,
            "unit": "ns/iter",
            "extra": "iterations: 1230736\ncpu: 568.8434733362768 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 603.303819396548,
            "unit": "ns/iter",
            "extra": "iterations: 1159712\ncpu: 603.253196483269 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2548.752911928745,
            "unit": "ns/iter",
            "extra": "iterations: 274732\ncpu: 2548.3546037593223 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 425.89533503263175,
            "unit": "ns/iter",
            "extra": "iterations: 1666957\ncpu: 425.875863024662 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 542.9627095066111,
            "unit": "ns/iter",
            "extra": "iterations: 1292501\ncpu: 542.8740426506446 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2045.2797870381976,
            "unit": "ns/iter",
            "extra": "iterations: 342221\ncpu: 2045.0300478345996 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 286.5122238539329,
            "unit": "ns/iter",
            "extra": "iterations: 2457531\ncpu: 286.4569480507041 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1212.08085306726,
            "unit": "ns/iter",
            "extra": "iterations: 577727\ncpu: 1211.9045985387586 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1884.9325728068225,
            "unit": "ns/iter",
            "extra": "iterations: 371497\ncpu: 1884.6901805398288 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1790.9862235985925,
            "unit": "ns/iter",
            "extra": "iterations: 391031\ncpu: 1790.697722175483 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.45596506419951,
            "unit": "ns/iter",
            "extra": "iterations: 15741331\ncpu: 44.450272343552186 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1022.9707662612908,
            "unit": "ns/iter",
            "extra": "iterations: 685954\ncpu: 1022.8248439399732 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2158.8345964636555,
            "unit": "ns/iter",
            "extra": "iterations: 325646\ncpu: 2158.6926386321165 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1465.4326034175199,
            "unit": "ns/iter",
            "extra": "iterations: 477361\ncpu: 1465.0957011569853 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4278.9423127376285,
            "unit": "ns/iter",
            "extra": "iterations: 163901\ncpu: 4278.612595408188 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 62.00490045017609,
            "unit": "ns/iter",
            "extra": "iterations: 11302431\ncpu: 61.993819559703496 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 356.1262316433631,
            "unit": "ns/iter",
            "extra": "iterations: 1964753\ncpu: 356.097844360078 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 230.86832767537956,
            "unit": "ns/iter",
            "extra": "iterations: 3034662\ncpu: 230.8174089898652 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 244.7251044880459,
            "unit": "ns/iter",
            "extra": "iterations: 2861811\ncpu: 244.70997281092346 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 22.516702073164787,
            "unit": "ns/iter",
            "extra": "iterations: 31088925\ncpu: 22.51443792282951 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 366.2348569554708,
            "unit": "ns/iter",
            "extra": "iterations: 1905875\ncpu: 366.2006280579803 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2452.7784161372624,
            "unit": "ns/iter",
            "extra": "iterations: 324965\ncpu: 2452.2516055575297 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1242.4943096114428,
            "unit": "ns/iter",
            "extra": "iterations: 537661\ncpu: 1242.4622020194909 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 996.2268515421365,
            "unit": "ns/iter",
            "extra": "iterations: 702671\ncpu: 996.0755004831524 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.5016210417297,
            "unit": "ns/iter",
            "extra": "iterations: 3756535\ncpu: 186.46965807585977 ns\nthreads: 1"
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
          "id": "ebf3339bee74ca624fc79af23d70e67e4c586f76",
          "message": "ci: add docs checks workflow (#10)\n\n* ci: add docs checks workflow\n\n* ci: require contribution docs in docs check",
          "timestamp": "2026-04-29T21:23:08+08:00",
          "tree_id": "452793c771b2c65581bb8fb6f98b5796bf48c349",
          "url": "https://github.com/sentomk/texere/commit/ebf3339bee74ca624fc79af23d70e67e4c586f76"
        },
        "date": 1777469175849,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19938.26582897184,
            "unit": "ns/iter",
            "extra": "iterations: 34778\ncpu: 19936.170740123067 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24009.0043858148,
            "unit": "ns/iter",
            "extra": "iterations: 29185\ncpu: 24005.717046427962 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4870.416694056805,
            "unit": "ns/iter",
            "extra": "iterations: 142997\ncpu: 4870.039091729197 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10650.364297094036,
            "unit": "ns/iter",
            "extra": "iterations: 65905\ncpu: 10649.460587208867 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21200.177137816547,
            "unit": "ns/iter",
            "extra": "iterations: 32884\ncpu: 21198.249635080905 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1776.833579164822,
            "unit": "ns/iter",
            "extra": "iterations: 395257\ncpu: 1776.6573647019518 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 53.91481089331391,
            "unit": "ns/iter",
            "extra": "iterations: 12983491\ncpu: 53.91218147723137 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 166.81792632024218,
            "unit": "ns/iter",
            "extra": "iterations: 4198575\ncpu: 166.8008205164847 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.93532315089572,
            "unit": "ns/iter",
            "extra": "iterations: 31862050\ncpu: 21.93239094785176 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18076.366902207217,
            "unit": "ns/iter",
            "extra": "iterations: 38776\ncpu: 18074.040772642886 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.94754341381691,
            "unit": "ns/iter",
            "extra": "iterations: 29243916\ncpu: 23.94485396552226 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.704673517904974,
            "unit": "ns/iter",
            "extra": "iterations: 996235383\ncpu: 0.7045789197792428 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 550.6272477438656,
            "unit": "ns/iter",
            "extra": "iterations: 1300137\ncpu: 550.5858036499233 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1594.9879820141512,
            "unit": "ns/iter",
            "extra": "iterations: 438343\ncpu: 1594.9068400772896 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 17262.24207983051,
            "unit": "ns/iter",
            "extra": "iterations: 40561\ncpu: 17260.982840659748 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5838.214252475842,
            "unit": "ns/iter",
            "extra": "iterations: 120344\ncpu: 5837.5912716878165 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1592.225419015371,
            "unit": "ns/iter",
            "extra": "iterations: 439781\ncpu: 1592.0014029710264 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14092.458717809504,
            "unit": "ns/iter",
            "extra": "iterations: 49743\ncpu: 14090.187342942736 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2952.8226220101574,
            "unit": "ns/iter",
            "extra": "iterations: 237070\ncpu: 2952.519686168654 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5336.007336063404,
            "unit": "ns/iter",
            "extra": "iterations: 131133\ncpu: 5335.100714541721 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2952.5408424924335,
            "unit": "ns/iter",
            "extra": "iterations: 237106\ncpu: 2952.113898425169 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9743.541441692212,
            "unit": "ns/iter",
            "extra": "iterations: 71860\ncpu: 9742.261299749527 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 22637.18145043723,
            "unit": "ns/iter",
            "extra": "iterations: 30901\ncpu: 22634.86068412023 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6921.587998891438,
            "unit": "ns/iter",
            "extra": "iterations: 101024\ncpu: 6920.922978698123 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.644816027585247,
            "unit": "ns/iter",
            "extra": "iterations: 28434073\ncpu: 24.643721003318777 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 85.21015267908041,
            "unit": "ns/iter",
            "extra": "iterations: 8231187\ncpu: 85.19918172190688 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.677553991805755,
            "unit": "ns/iter",
            "extra": "iterations: 27331323\ncpu: 25.674113031410858 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1264.7717448194626,
            "unit": "ns/iter",
            "extra": "iterations: 554086\ncpu: 1264.6115693231764 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1183.7201928735649,
            "unit": "ns/iter",
            "extra": "iterations: 591268\ncpu: 1183.5975699682726 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1265.4082930467637,
            "unit": "ns/iter",
            "extra": "iterations: 554778\ncpu: 1265.2824859673578 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1669.5940268580146,
            "unit": "ns/iter",
            "extra": "iterations: 421922\ncpu: 1669.469454069704 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1660.2753201632438,
            "unit": "ns/iter",
            "extra": "iterations: 419083\ncpu: 1660.1583099290617 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4910.384498832577,
            "unit": "ns/iter",
            "extra": "iterations: 142557\ncpu: 4909.629439452301 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3323.1613329154943,
            "unit": "ns/iter",
            "extra": "iterations: 210546\ncpu: 3322.7794496214547 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 639.6314698049824,
            "unit": "ns/iter",
            "extra": "iterations: 1093213\ncpu: 639.5668977591736 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1910.2156098998673,
            "unit": "ns/iter",
            "extra": "iterations: 367126\ncpu: 1910.0785643076317 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3878.5384406693993,
            "unit": "ns/iter",
            "extra": "iterations: 180616\ncpu: 3878.3200436285038 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 8613.927326972276,
            "unit": "ns/iter",
            "extra": "iterations: 81447\ncpu: 8613.65195771486 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 13208.404017562212,
            "unit": "ns/iter",
            "extra": "iterations: 53067\ncpu: 13205.796559066846 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1698.6221207770923,
            "unit": "ns/iter",
            "extra": "iterations: 412264\ncpu: 1698.365151941466 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1699.5852386991846,
            "unit": "ns/iter",
            "extra": "iterations: 412213\ncpu: 1699.3397345547164 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 572.0670765484417,
            "unit": "ns/iter",
            "extra": "iterations: 1220352\ncpu: 571.9861146619972 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 579.6631881997038,
            "unit": "ns/iter",
            "extra": "iterations: 1153190\ncpu: 579.5889263694626 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2526.659320503794,
            "unit": "ns/iter",
            "extra": "iterations: 278059\ncpu: 2526.342319435805 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 396.7114801062857,
            "unit": "ns/iter",
            "extra": "iterations: 1792074\ncpu: 396.6930628980724 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 542.4282819216793,
            "unit": "ns/iter",
            "extra": "iterations: 1292345\ncpu: 542.3505209522225 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2046.2339074929541,
            "unit": "ns/iter",
            "extra": "iterations: 342007\ncpu: 2046.1604762475727 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 283.66694437885366,
            "unit": "ns/iter",
            "extra": "iterations: 2467783\ncpu: 283.6381266099954 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1214.9724171501189,
            "unit": "ns/iter",
            "extra": "iterations: 577279\ncpu: 1214.8636499855334 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1886.1060484836084,
            "unit": "ns/iter",
            "extra": "iterations: 371217\ncpu: 1885.8663719603446 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1830.9053561166884,
            "unit": "ns/iter",
            "extra": "iterations: 389872\ncpu: 1830.6877513645431 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.51606386213408,
            "unit": "ns/iter",
            "extra": "iterations: 15758259\ncpu: 44.51110449447465 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1022.0638471042411,
            "unit": "ns/iter",
            "extra": "iterations: 685591\ncpu: 1021.9097683604319 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2152.3609545893933,
            "unit": "ns/iter",
            "extra": "iterations: 325124\ncpu: 2152.0409597568823 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1413.5299101932346,
            "unit": "ns/iter",
            "extra": "iterations: 484818\ncpu: 1413.3152523214767 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4222.492381371869,
            "unit": "ns/iter",
            "extra": "iterations: 165581\ncpu: 4221.973547689651 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 61.67540066035851,
            "unit": "ns/iter",
            "extra": "iterations: 11361431\ncpu: 61.669182077504 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 355.97032875478874,
            "unit": "ns/iter",
            "extra": "iterations: 1964899\ncpu: 355.9351014988547 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 231.06736977183323,
            "unit": "ns/iter",
            "extra": "iterations: 3031315\ncpu: 231.0360985248982 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 244.50556814755427,
            "unit": "ns/iter",
            "extra": "iterations: 2849691\ncpu: 244.4904184348417 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 22.52156326953073,
            "unit": "ns/iter",
            "extra": "iterations: 31087563\ncpu: 22.518948461801404 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 363.30636867874813,
            "unit": "ns/iter",
            "extra": "iterations: 1902404\ncpu: 363.2829866842145 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2122.380444234083,
            "unit": "ns/iter",
            "extra": "iterations: 330051\ncpu: 2122.1235748414674 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1244.4748140667834,
            "unit": "ns/iter",
            "extra": "iterations: 563509\ncpu: 1244.359628683829 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 974.7695503767773,
            "unit": "ns/iter",
            "extra": "iterations: 702544\ncpu: 974.6461146917487 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.48293390640455,
            "unit": "ns/iter",
            "extra": "iterations: 3754462\ncpu: 186.45262756687939 ns\nthreads: 1"
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
          "id": "41cd7f05312eedeffe9950f5028847858190657c",
          "message": "ci: add PR branch name validation to CI workflow (#9)\n\nNew branch-name job checks that PR branch names follow the project\nconventions (feat/*, fix/*, bench/*, etc.) and fast-fails on invalid\nnames before spending CI resources on build and test.",
          "timestamp": "2026-04-29T21:24:32+08:00",
          "tree_id": "5b259e6c97b150014e2559462542ed16f86d9a7d",
          "url": "https://github.com/sentomk/texere/commit/41cd7f05312eedeffe9950f5028847858190657c"
        },
        "date": 1777469272458,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20098.254008486863,
            "unit": "ns/iter",
            "extra": "iterations: 35113\ncpu: 20097.42522712386 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24100.465417470616,
            "unit": "ns/iter",
            "extra": "iterations: 29032\ncpu: 24099.93197161753 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4878.2175900325055,
            "unit": "ns/iter",
            "extra": "iterations: 142865\ncpu: 4877.5378294193815 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10632.14801955318,
            "unit": "ns/iter",
            "extra": "iterations: 65667\ncpu: 10631.158039806909 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21189.760603033646,
            "unit": "ns/iter",
            "extra": "iterations: 33033\ncpu: 21188.626010353295 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1770.8167752504446,
            "unit": "ns/iter",
            "extra": "iterations: 395547\ncpu: 1770.770211883797 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 52.20560036095022,
            "unit": "ns/iter",
            "extra": "iterations: 13369174\ncpu: 52.19894362957649 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 165.6643752115448,
            "unit": "ns/iter",
            "extra": "iterations: 4221917\ncpu: 165.66019654104997 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 22.004873756525374,
            "unit": "ns/iter",
            "extra": "iterations: 31849765\ncpu: 22.002553927791944 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18030.12000000003,
            "unit": "ns/iter",
            "extra": "iterations: 38775\ncpu: 18028.62176660218 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 24.196440857444948,
            "unit": "ns/iter",
            "extra": "iterations: 29182422\ncpu: 24.19412175589812 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.7042946685740076,
            "unit": "ns/iter",
            "extra": "iterations: 995843364\ncpu: 0.7041990541396019 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 536.0511791880298,
            "unit": "ns/iter",
            "extra": "iterations: 1305941\ncpu: 536.0253265652882 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1596.3287697120713,
            "unit": "ns/iter",
            "extra": "iterations: 439198\ncpu: 1596.1704834721475 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 17246.20448007075,
            "unit": "ns/iter",
            "extra": "iterations: 40669\ncpu: 17245.347193193815 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5825.0360443236805,
            "unit": "ns/iter",
            "extra": "iterations: 119575\ncpu: 5824.165444281823 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1587.1637966793087,
            "unit": "ns/iter",
            "extra": "iterations: 441175\ncpu: 1586.962241740805 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14079.398118558724,
            "unit": "ns/iter",
            "extra": "iterations: 50068\ncpu: 14077.990512902465 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2952.168707276682,
            "unit": "ns/iter",
            "extra": "iterations: 237429\ncpu: 2951.881488781917 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5337.148516219132,
            "unit": "ns/iter",
            "extra": "iterations: 130309\ncpu: 5336.971889892505 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2948.8224490054677,
            "unit": "ns/iter",
            "extra": "iterations: 236349\ncpu: 2948.629200885123 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9756.172183402627,
            "unit": "ns/iter",
            "extra": "iterations: 71842\ncpu: 9755.653280810671 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 22554.61271230045,
            "unit": "ns/iter",
            "extra": "iterations: 31088\ncpu: 22551.252348172933 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6907.359110347406,
            "unit": "ns/iter",
            "extra": "iterations: 101253\ncpu: 6907.008157782982 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.631475315345916,
            "unit": "ns/iter",
            "extra": "iterations: 28390432\ncpu: 24.628788635551647 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 85.33923483916158,
            "unit": "ns/iter",
            "extra": "iterations: 8216547\ncpu: 85.33100729540037 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.671490368102297,
            "unit": "ns/iter",
            "extra": "iterations: 27261292\ncpu: 25.668618640671983 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1264.1666014113218,
            "unit": "ns/iter",
            "extra": "iterations: 554233\ncpu: 1263.9974198577104 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1185.164783708444,
            "unit": "ns/iter",
            "extra": "iterations: 589852\ncpu: 1185.1183093386173 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1267.3403843892781,
            "unit": "ns/iter",
            "extra": "iterations: 552825\ncpu: 1267.197984895765 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1656.4006856780077,
            "unit": "ns/iter",
            "extra": "iterations: 422064\ncpu: 1656.2642466545324 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1659.6478042002338,
            "unit": "ns/iter",
            "extra": "iterations: 421737\ncpu: 1659.5309019602275 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4912.463580991919,
            "unit": "ns/iter",
            "extra": "iterations: 142508\ncpu: 4911.965279142228 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3324.020093227219,
            "unit": "ns/iter",
            "extra": "iterations: 210668\ncpu: 3323.70997493687 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 641.400643460233,
            "unit": "ns/iter",
            "extra": "iterations: 1095328\ncpu: 641.3549320386214 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1910.282815610799,
            "unit": "ns/iter",
            "extra": "iterations: 366670\ncpu: 1910.0212807156292 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3879.0624337978256,
            "unit": "ns/iter",
            "extra": "iterations: 180319\ncpu: 3878.7838885530737 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 8602.216916628542,
            "unit": "ns/iter",
            "extra": "iterations: 80879\ncpu: 8601.468724885308 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 13209.216908641356,
            "unit": "ns/iter",
            "extra": "iterations: 52967\ncpu: 13208.225159061336 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1694.7698190314643,
            "unit": "ns/iter",
            "extra": "iterations: 412558\ncpu: 1694.6424163390363 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1696.6370987259902,
            "unit": "ns/iter",
            "extra": "iterations: 413184\ncpu: 1696.542218478933 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 569.4682782089792,
            "unit": "ns/iter",
            "extra": "iterations: 1227437\ncpu: 569.4432740743539 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 576.9586841510203,
            "unit": "ns/iter",
            "extra": "iterations: 1154327\ncpu: 576.9064823052774 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2517.6177295794787,
            "unit": "ns/iter",
            "extra": "iterations: 277649\ncpu: 2517.4376857111 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 390.700557205718,
            "unit": "ns/iter",
            "extra": "iterations: 1791080\ncpu: 390.6519038792226 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 540.4726468454602,
            "unit": "ns/iter",
            "extra": "iterations: 1297163\ncpu: 540.4554092276778 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 2049.018460080708,
            "unit": "ns/iter",
            "extra": "iterations: 341927\ncpu: 2048.8824866126474 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 284.2238596139771,
            "unit": "ns/iter",
            "extra": "iterations: 2456142\ncpu: 284.2122975788868 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1212.0840795167378,
            "unit": "ns/iter",
            "extra": "iterations: 577941\ncpu: 1212.0077205112536 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1885.2348860310994,
            "unit": "ns/iter",
            "extra": "iterations: 371461\ncpu: 1885.0412613975668 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1791.24559555289,
            "unit": "ns/iter",
            "extra": "iterations: 391082\ncpu: 1791.0657406886553 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.51397076541491,
            "unit": "ns/iter",
            "extra": "iterations: 15595638\ncpu: 44.50892621385567 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1021.3995400181276,
            "unit": "ns/iter",
            "extra": "iterations: 686114\ncpu: 1021.2639051236436 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2151.927082597131,
            "unit": "ns/iter",
            "extra": "iterations: 325423\ncpu: 2151.6936418138803 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1411.5262021914405,
            "unit": "ns/iter",
            "extra": "iterations: 495283\ncpu: 1411.4373560166644 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4218.948047798207,
            "unit": "ns/iter",
            "extra": "iterations: 165864\ncpu: 4218.405573240728 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 62.0016974553696,
            "unit": "ns/iter",
            "extra": "iterations: 11328722\ncpu: 61.999830519276735 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 358.3508210421331,
            "unit": "ns/iter",
            "extra": "iterations: 1955259\ncpu: 358.31882476950557 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 231.3584422235882,
            "unit": "ns/iter",
            "extra": "iterations: 3030268\ncpu: 231.34872394124855 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 244.99843337560202,
            "unit": "ns/iter",
            "extra": "iterations: 2706456\ncpu: 244.9814022470715 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 22.542755523571508,
            "unit": "ns/iter",
            "extra": "iterations: 31104332\ncpu: 22.54130292847935 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 364.79851637452276,
            "unit": "ns/iter",
            "extra": "iterations: 1905063\ncpu: 364.7722421778169 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2130.8930556775554,
            "unit": "ns/iter",
            "extra": "iterations: 330097\ncpu: 2130.736647106758 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1242.5548853826826,
            "unit": "ns/iter",
            "extra": "iterations: 563702\ncpu: 1242.4140574275127 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 997.3591442151164,
            "unit": "ns/iter",
            "extra": "iterations: 699989\ncpu: 997.2626441272672 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.76580071312617,
            "unit": "ns/iter",
            "extra": "iterations: 3754166\ncpu: 186.7565243518784 ns\nthreads: 1"
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
          "id": "2104464d6c96bd1b31df9b9e6aef62acb7d8afc3",
          "message": "feat: add branch management scripts for multi-branch workflows (#8)\n\n- new-branch.sh: interactive branch creator enforcing naming conventions\n- check-branch.sh: validates branch names against allowed prefixes\n- worktree.sh: create/list/remove isolated git worktrees",
          "timestamp": "2026-04-29T21:30:08+08:00",
          "tree_id": "8ec1162eaa72abdf0fc86780fc5cef246a579120",
          "url": "https://github.com/sentomk/texere/commit/2104464d6c96bd1b31df9b9e6aef62acb7d8afc3"
        },
        "date": 1777469690430,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19088.056692311897,
            "unit": "ns/iter",
            "extra": "iterations: 36654\ncpu: 19086.825366944944 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21210.458886904646,
            "unit": "ns/iter",
            "extra": "iterations: 33043\ncpu: 21209.429954907242 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4779.320411160038,
            "unit": "ns/iter",
            "extra": "iterations: 146415\ncpu: 4778.226554656284 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9348.514513701286,
            "unit": "ns/iter",
            "extra": "iterations: 75067\ncpu: 9348.02848122344 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 18832.482363978223,
            "unit": "ns/iter",
            "extra": "iterations: 37310\ncpu: 18830.333208255164 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1565.946052737477,
            "unit": "ns/iter",
            "extra": "iterations: 447196\ncpu: 1565.6539101423086 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.72080367658147,
            "unit": "ns/iter",
            "extra": "iterations: 14116375\ncpu: 49.714330910024714 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 177.94128433646006,
            "unit": "ns/iter",
            "extra": "iterations: 3931353\ncpu: 177.93295565165485 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 19.803740491988624,
            "unit": "ns/iter",
            "extra": "iterations: 35380426\ncpu: 19.801218362944503 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16497.080221106993,
            "unit": "ns/iter",
            "extra": "iterations: 43056\ncpu: 16495.950459866202 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.40597979850063,
            "unit": "ns/iter",
            "extra": "iterations: 29951143\ncpu: 23.40270710202948 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.6223333048219343,
            "unit": "ns/iter",
            "extra": "iterations: 1125772276\ncpu: 0.6222697875356101 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 473.84576301941524,
            "unit": "ns/iter",
            "extra": "iterations: 1476948\ncpu: 473.7738864198333 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2450.1540287097755,
            "unit": "ns/iter",
            "extra": "iterations: 285687\ncpu: 2449.9029882353757 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15693.865002797946,
            "unit": "ns/iter",
            "extra": "iterations: 44675\ncpu: 15691.474583100156 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5702.270466253779,
            "unit": "ns/iter",
            "extra": "iterations: 122873\ncpu: 5701.855037314947 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2414.9593117541995,
            "unit": "ns/iter",
            "extra": "iterations: 289199\ncpu: 2414.6784394136976 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 12860.971821683917,
            "unit": "ns/iter",
            "extra": "iterations: 54510\ncpu: 12859.882755457695 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3319.250762307136,
            "unit": "ns/iter",
            "extra": "iterations: 210873\ncpu: 3318.9840852076723 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5658.581528203591,
            "unit": "ns/iter",
            "extra": "iterations: 123583\ncpu: 5658.0662631591895 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3324.292938632735,
            "unit": "ns/iter",
            "extra": "iterations: 210894\ncpu: 3324.085554828506 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9370.542910971146,
            "unit": "ns/iter",
            "extra": "iterations: 74841\ncpu: 9369.41403776005 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20738.58520318987,
            "unit": "ns/iter",
            "extra": "iterations: 33737\ncpu: 20734.91083973093 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7097.218749357703,
            "unit": "ns/iter",
            "extra": "iterations: 97326\ncpu: 7096.1927953475615 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.380262390641924,
            "unit": "ns/iter",
            "extra": "iterations: 29959910\ncpu: 23.37771244973706 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 91.23505864717374,
            "unit": "ns/iter",
            "extra": "iterations: 7615542\ncpu: 91.22121104446676 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 22.704615325491737,
            "unit": "ns/iter",
            "extra": "iterations: 30913161\ncpu: 22.703168595408346 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 2000.3701289324565,
            "unit": "ns/iter",
            "extra": "iterations: 346228\ncpu: 2000.1887195720708 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1922.4939878493617,
            "unit": "ns/iter",
            "extra": "iterations: 364096\ncpu: 1922.264677447705 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 2011.4273219246618,
            "unit": "ns/iter",
            "extra": "iterations: 339449\ncpu: 2011.3441400622844 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1594.664161974596,
            "unit": "ns/iter",
            "extra": "iterations: 439575\ncpu: 1594.5113370869565 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1595.2338676091456,
            "unit": "ns/iter",
            "extra": "iterations: 439411\ncpu: 1595.0987230633705 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4435.733634240142,
            "unit": "ns/iter",
            "extra": "iterations: 157967\ncpu: 4435.458830008789 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3036.578779552078,
            "unit": "ns/iter",
            "extra": "iterations: 231456\ncpu: 3036.4273555233017 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 573.0605574071135,
            "unit": "ns/iter",
            "extra": "iterations: 1224491\ncpu: 572.9945512053606 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1736.8852860042555,
            "unit": "ns/iter",
            "extra": "iterations: 403473\ncpu: 1736.7317515670095 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3778.2879941221936,
            "unit": "ns/iter",
            "extra": "iterations: 185101\ncpu: 3777.807721190053 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7660.788764045017,
            "unit": "ns/iter",
            "extra": "iterations: 89445\ncpu: 7660.302688803107 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 11673.031786352534,
            "unit": "ns/iter",
            "extra": "iterations: 59837\ncpu: 11671.690475792584 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1595.6873224096555,
            "unit": "ns/iter",
            "extra": "iterations: 438861\ncpu: 1595.5259888666405 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1603.054024170113,
            "unit": "ns/iter",
            "extra": "iterations: 437730\ncpu: 1602.9370205377627 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 542.434744770219,
            "unit": "ns/iter",
            "extra": "iterations: 1299574\ncpu: 542.3708245932896 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 531.2641019779209,
            "unit": "ns/iter",
            "extra": "iterations: 1316677\ncpu: 531.2208575071946 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2876.5090921800906,
            "unit": "ns/iter",
            "extra": "iterations: 243176\ncpu: 2876.121315425862 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 403.6248735514601,
            "unit": "ns/iter",
            "extra": "iterations: 1735884\ncpu: 403.5881228238754 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 530.815719126519,
            "unit": "ns/iter",
            "extra": "iterations: 1322389\ncpu: 530.7483811495673 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1883.055094506171,
            "unit": "ns/iter",
            "extra": "iterations: 371616\ncpu: 1882.9207918927077 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 286.50539212978896,
            "unit": "ns/iter",
            "extra": "iterations: 2426314\ncpu: 286.4721000661922 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2017.9292251337808,
            "unit": "ns/iter",
            "extra": "iterations: 346705\ncpu: 2017.8094460708564 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3242.5018608699293,
            "unit": "ns/iter",
            "extra": "iterations: 216028\ncpu: 3242.1074073731015 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2938.8463297074704,
            "unit": "ns/iter",
            "extra": "iterations: 238387\ncpu: 2938.651931523106 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 45.2231370127928,
            "unit": "ns/iter",
            "extra": "iterations: 15373039\ncpu: 45.21687403512053 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 986.4934498000691,
            "unit": "ns/iter",
            "extra": "iterations: 710818\ncpu: 986.4084575798533 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2218.0137688181585,
            "unit": "ns/iter",
            "extra": "iterations: 312663\ncpu: 2217.7070520016678 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 2310.9593336130524,
            "unit": "ns/iter",
            "extra": "iterations: 302707\ncpu: 2310.7525461915316 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 8305.2236473325,
            "unit": "ns/iter",
            "extra": "iterations: 84204\ncpu: 8304.526435798805 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 55.35057025383661,
            "unit": "ns/iter",
            "extra": "iterations: 12632883\ncpu: 55.34330801607199 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 359.5428073465468,
            "unit": "ns/iter",
            "extra": "iterations: 1948509\ncpu: 359.5260032157921 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 219.59204020624819,
            "unit": "ns/iter",
            "extra": "iterations: 3155132\ncpu: 219.57218905579865 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 233.65074837208635,
            "unit": "ns/iter",
            "extra": "iterations: 3002918\ncpu: 233.64041542259756 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.520933804178426,
            "unit": "ns/iter",
            "extra": "iterations: 32568113\ncpu: 21.517806634974402 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 324.8486168621967,
            "unit": "ns/iter",
            "extra": "iterations: 2160703\ncpu: 324.8388260672569 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1569.1051172068978,
            "unit": "ns/iter",
            "extra": "iterations: 447158\ncpu: 1568.8634912044454 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 950.2291966477954,
            "unit": "ns/iter",
            "extra": "iterations: 735879\ncpu: 950.1494525594587 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 972.8420158534893,
            "unit": "ns/iter",
            "extra": "iterations: 719338\ncpu: 972.7110940892903 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 165.05453110965405,
            "unit": "ns/iter",
            "extra": "iterations: 4238443\ncpu: 165.04233252635592 ns\nthreads: 1"
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
          "id": "e24990d799924ad3b3c89dcb4500a27739d9a446",
          "message": "build: add CMake presets, install rules, and dev scripts (#7)\n\n* build: add CMakePresets.json for common dev workflows\n\nProvides five configure presets (default/release/ci/coverage/benchmark)\nwith corresponding build and test presets, so developers can run\ncmake --preset <name> instead of spelling out long -D flags.\n\n* build: enable CMake install rules with TEXERE_BUILD_INSTALL option\n\nReplace the if(OFF) guard with an opt-in option so users who need\nfind_package(texere) support can enable installation. Wrap FetchContent\ndependency links in $<BUILD_INTERFACE:> to prevent export-set pollution.\n\n* chore: add developer utility scripts (build/test/format/clean)\n\n- build.sh: one-command build with CMake preset selection\n- test.sh: build + run tests with ctest\n- format.sh: clang-format wrapper with --check/--diff modes\n- clean.sh: remove build artifacts and optional IDE cruft",
          "timestamp": "2026-04-29T21:33:07+08:00",
          "tree_id": "33172117dd3530afc3e67d43e81c2f984b168c9c",
          "url": "https://github.com/sentomk/texere/commit/e24990d799924ad3b3c89dcb4500a27739d9a446"
        },
        "date": 1777469870620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 16428.745820730892,
            "unit": "ns/iter",
            "extra": "iterations: 42651\ncpu: 16427.62305690371 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21533.935078177798,
            "unit": "ns/iter",
            "extra": "iterations: 32362\ncpu: 21531.71361473333 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4267.9796594018,
            "unit": "ns/iter",
            "extra": "iterations: 163712\ncpu: 4267.769515979281 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10980.160480674229,
            "unit": "ns/iter",
            "extra": "iterations: 63827\ncpu: 10979.469879518072 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21204.903294719512,
            "unit": "ns/iter",
            "extra": "iterations: 33235\ncpu: 21204.231683466227 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1689.0072010094605,
            "unit": "ns/iter",
            "extra": "iterations: 413692\ncpu: 1688.837011593165 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 47.27190517393186,
            "unit": "ns/iter",
            "extra": "iterations: 14785217\ncpu: 47.2699725678696 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 170.93468418029448,
            "unit": "ns/iter",
            "extra": "iterations: 4085733\ncpu: 170.92091284476973 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 18.694549549982025,
            "unit": "ns/iter",
            "extra": "iterations: 37482960\ncpu: 18.69461939505312 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 17120.565235464095,
            "unit": "ns/iter",
            "extra": "iterations: 40898\ncpu: 17119.887989632734 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.730247636611104,
            "unit": "ns/iter",
            "extra": "iterations: 30813376\ncpu: 22.730170689508338 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.5826748607862068,
            "unit": "ns/iter",
            "extra": "iterations: 1208305373\ncpu: 0.5826410373828568 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 454.42354133943616,
            "unit": "ns/iter",
            "extra": "iterations: 1542631\ncpu: 454.41970503639556 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1298.696820252618,
            "unit": "ns/iter",
            "extra": "iterations: 539980\ncpu: 1298.5961202266724 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15648.468487488299,
            "unit": "ns/iter",
            "extra": "iterations: 44998\ncpu: 15648.092404106845 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5108.055966609717,
            "unit": "ns/iter",
            "extra": "iterations: 137046\ncpu: 5108.008019205234 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1542.5487417140153,
            "unit": "ns/iter",
            "extra": "iterations: 455739\ncpu: 1542.4141866287491 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 11360.238894132204,
            "unit": "ns/iter",
            "extra": "iterations: 61454\ncpu: 11360.268281966983 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2294.727834740642,
            "unit": "ns/iter",
            "extra": "iterations: 305072\ncpu: 2294.655317433261 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 4665.723006705623,
            "unit": "ns/iter",
            "extra": "iterations: 149426\ncpu: 4665.695682143678 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2298.646774299208,
            "unit": "ns/iter",
            "extra": "iterations: 305360\ncpu: 2298.5589140686393 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 8584.421709577302,
            "unit": "ns/iter",
            "extra": "iterations: 81798\ncpu: 8584.453764150723 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20100.270098322973,
            "unit": "ns/iter",
            "extra": "iterations: 34580\ncpu: 20098.87527472528 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 5866.092095691252,
            "unit": "ns/iter",
            "extra": "iterations: 119593\ncpu: 5865.965382589288 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 22.32003752836869,
            "unit": "ns/iter",
            "extra": "iterations: 31316043\ncpu: 22.31836646794748 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 62.12610211883211,
            "unit": "ns/iter",
            "extra": "iterations: 11239827\ncpu: 62.12396302896828 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 21.65123252050574,
            "unit": "ns/iter",
            "extra": "iterations: 32267739\ncpu: 21.651180239185567 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1477.1413593196537,
            "unit": "ns/iter",
            "extra": "iterations: 467631\ncpu: 1477.0292025122374 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1175.567071197424,
            "unit": "ns/iter",
            "extra": "iterations: 593280\ncpu: 1175.5736043689344 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1259.5557989697834,
            "unit": "ns/iter",
            "extra": "iterations: 549589\ncpu: 1259.4906648422764 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1576.4514051851559,
            "unit": "ns/iter",
            "extra": "iterations: 444461\ncpu: 1576.3994321211524 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1576.2515639285468,
            "unit": "ns/iter",
            "extra": "iterations: 444074\ncpu: 1576.1914298067409 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4365.699024341583,
            "unit": "ns/iter",
            "extra": "iterations: 160302\ncpu: 4365.637833589096 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3065.819942378725,
            "unit": "ns/iter",
            "extra": "iterations: 228388\ncpu: 3065.603543093329 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 527.6872861122492,
            "unit": "ns/iter",
            "extra": "iterations: 1326046\ncpu: 527.6739343884016 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1571.489460348147,
            "unit": "ns/iter",
            "extra": "iterations: 442804\ncpu: 1571.4654632749543 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3823.438363347344,
            "unit": "ns/iter",
            "extra": "iterations: 183081\ncpu: 3823.340963835666 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 6966.553584406016,
            "unit": "ns/iter",
            "extra": "iterations: 100449\ncpu: 6966.568487491229 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 10901.291688009387,
            "unit": "ns/iter",
            "extra": "iterations: 64425\ncpu: 10900.672999611954 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1637.5547507097292,
            "unit": "ns/iter",
            "extra": "iterations: 427273\ncpu: 1637.5360975301494 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1634.0416064174442,
            "unit": "ns/iter",
            "extra": "iterations: 428083\ncpu: 1633.9164040618327 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 469.66432668458555,
            "unit": "ns/iter",
            "extra": "iterations: 1489755\ncpu: 469.65872442113 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 399.9327629109363,
            "unit": "ns/iter",
            "extra": "iterations: 1750165\ncpu: 399.9173975025232 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2284.5588260193113,
            "unit": "ns/iter",
            "extra": "iterations: 307126\ncpu: 2284.5545020610557 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 387.8197492154324,
            "unit": "ns/iter",
            "extra": "iterations: 1805773\ncpu: 387.7991752008706 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 535.0544724547627,
            "unit": "ns/iter",
            "extra": "iterations: 1310589\ncpu: 535.0554910807232 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1735.602905606102,
            "unit": "ns/iter",
            "extra": "iterations: 391106\ncpu: 1735.5187442790427 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 263.28800982838305,
            "unit": "ns/iter",
            "extra": "iterations: 2702380\ncpu: 263.28901449833046 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1189.1202817234782,
            "unit": "ns/iter",
            "extra": "iterations: 608114\ncpu: 1189.0300535754848 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 2906.497011055575,
            "unit": "ns/iter",
            "extra": "iterations: 241055\ncpu: 2906.4042231026197 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1538.1640722558416,
            "unit": "ns/iter",
            "extra": "iterations: 455659\ncpu: 1538.0573433203363 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 41.416214510712486,
            "unit": "ns/iter",
            "extra": "iterations: 16854804\ncpu: 41.41581521802319 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 914.162700042347,
            "unit": "ns/iter",
            "extra": "iterations: 767025\ncpu: 914.1096287604691 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2563.7782444059285,
            "unit": "ns/iter",
            "extra": "iterations: 273594\ncpu: 2563.7066602337723 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1215.6369857645223,
            "unit": "ns/iter",
            "extra": "iterations: 574129\ncpu: 1215.6044303632082 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 5856.377257413867,
            "unit": "ns/iter",
            "extra": "iterations: 120215\ncpu: 5855.965911076007 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 49.26243124982706,
            "unit": "ns/iter",
            "extra": "iterations: 14203419\ncpu: 49.26069744193305 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 275.6378068412317,
            "unit": "ns/iter",
            "extra": "iterations: 2539424\ncpu: 275.62880676877813 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 177.3065856063465,
            "unit": "ns/iter",
            "extra": "iterations: 3949158\ncpu: 177.29859073757018 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 190.0013699079696,
            "unit": "ns/iter",
            "extra": "iterations: 3687109\ncpu: 189.9941167999114 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.721509325739806,
            "unit": "ns/iter",
            "extra": "iterations: 32295401\ncpu: 21.721219656012433 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 303.7618188199867,
            "unit": "ns/iter",
            "extra": "iterations: 2307760\ncpu: 303.7491636911989 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1735.373466814287,
            "unit": "ns/iter",
            "extra": "iterations: 403653\ncpu: 1735.3669314981025 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1034.4730756407193,
            "unit": "ns/iter",
            "extra": "iterations: 674835\ncpu: 1034.4343254276987 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 938.6059440140416,
            "unit": "ns/iter",
            "extra": "iterations: 742293\ncpu: 938.5516137158777 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 161.65344936085143,
            "unit": "ns/iter",
            "extra": "iterations: 4331846\ncpu: 161.64345408400905 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}