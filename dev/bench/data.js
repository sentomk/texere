window.BENCHMARK_DATA = {
  "lastUpdate": 1787072219567,
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
          "id": "3b6941040087a5e08c55ad2666791d419b689387",
          "message": "fix: validate UTF-8 in _ts literal instead of silently passing through (#11)\n\n* build: bump doctest to v2.4.12 for CMake >= 4 compatibility\n\n* fix: validate UTF-8 in _ts literal instead of silently passing through\n\nThe old implementation called validate_utf8() but ignored its result:\nboth branches of the if returned the bytes unchecked, so ill-formed\nliterals silently violated the 'storage is always valid UTF-8' class\ninvariant (and the README's consteval claim was never true).\n\nThe literal now uses from_utf8_lossy() semantics: ill-formed sequences\nbecome U+FFFD, keeping the invariant at runtime. Compile-time rejection\nwould need string-literal-operator templates (N3599), which no\nmainstream compiler implements (verified on GCC 13, Clang 20 including\nclang-cl, per docs/design_rationale.md).\n\nTests: empty/emoji/boundary-codepoint literals, plus ill-formed\nliterals (stray continuation, overlong) degrading to U+FFFD.",
          "timestamp": "2026-08-17T16:45:42+08:00",
          "tree_id": "79c6b89231c7bd1a7ca6bb966dbed9ed97c21864",
          "url": "https://github.com/sentomk/texere/commit/3b6941040087a5e08c55ad2666791d419b689387"
        },
        "date": 1786956536479,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19122.26407174063,
            "unit": "ns/iter",
            "extra": "iterations: 36687\ncpu: 19122.294981873692 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21179.951263812294,
            "unit": "ns/iter",
            "extra": "iterations: 33035\ncpu: 21178.374148630242 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4780.660849072572,
            "unit": "ns/iter",
            "extra": "iterations: 146395\ncpu: 4780.394002527408 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9353.79450685692,
            "unit": "ns/iter",
            "extra": "iterations: 75039\ncpu: 9352.966857234236 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 18776.916951845476,
            "unit": "ns/iter",
            "extra": "iterations: 37111\ncpu: 18776.7125111153 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1567.9182508827232,
            "unit": "ns/iter",
            "extra": "iterations: 447014\ncpu: 1567.7812864921464 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.39890687466317,
            "unit": "ns/iter",
            "extra": "iterations: 13878555\ncpu: 49.35722580628886 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 180.61310460830427,
            "unit": "ns/iter",
            "extra": "iterations: 3876270\ncpu: 180.59537751498226 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 19.836506267562093,
            "unit": "ns/iter",
            "extra": "iterations: 35405871\ncpu: 19.835582861384786 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16252.378938314188,
            "unit": "ns/iter",
            "extra": "iterations: 43007\ncpu: 16251.114865021967 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.39834788822985,
            "unit": "ns/iter",
            "extra": "iterations: 29906088\ncpu: 23.39584298019853 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.6225804744233175,
            "unit": "ns/iter",
            "extra": "iterations: 1119560649\ncpu: 0.622580026033052 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 473.631435045776,
            "unit": "ns/iter",
            "extra": "iterations: 1476155\ncpu: 473.59658098234956 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2468.168353611073,
            "unit": "ns/iter",
            "extra": "iterations: 282661\ncpu: 2468.1322892086328 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15692.02497866074,
            "unit": "ns/iter",
            "extra": "iterations: 44518\ncpu: 15689.539826586975 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5708.206156299653,
            "unit": "ns/iter",
            "extra": "iterations: 122931\ncpu: 5708.055901277947 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2419.561793119873,
            "unit": "ns/iter",
            "extra": "iterations: 288592\ncpu: 2419.346880717411 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 12893.34546992502,
            "unit": "ns/iter",
            "extra": "iterations: 54381\ncpu: 12893.341700226189 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3329.044462070785,
            "unit": "ns/iter",
            "extra": "iterations: 208020\ncpu: 3328.7248053071894 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5710.37065238594,
            "unit": "ns/iter",
            "extra": "iterations: 123056\ncpu: 5709.793988102965 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3322.796022190566,
            "unit": "ns/iter",
            "extra": "iterations: 210719\ncpu: 3322.5512697004156 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9365.569007684468,
            "unit": "ns/iter",
            "extra": "iterations: 74825\ncpu: 9364.992783160666 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20579.542537248246,
            "unit": "ns/iter",
            "extra": "iterations: 34029\ncpu: 20578.987393105966 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7106.174129554211,
            "unit": "ns/iter",
            "extra": "iterations: 98800\ncpu: 7105.603248987855 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.373159848751577,
            "unit": "ns/iter",
            "extra": "iterations: 29918125\ncpu: 23.373155035618062 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 92.91927018255136,
            "unit": "ns/iter",
            "extra": "iterations: 7547038\ncpu: 92.91244459084488 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 22.647690410425955,
            "unit": "ns/iter",
            "extra": "iterations: 30953032\ncpu: 22.64768656589123 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 2000.5134839205402,
            "unit": "ns/iter",
            "extra": "iterations: 345226\ncpu: 2000.3719997914416 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1931.4651515740593,
            "unit": "ns/iter",
            "extra": "iterations: 359758\ncpu: 1931.3929891760563 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1999.8260252329887,
            "unit": "ns/iter",
            "extra": "iterations: 349384\ncpu: 1999.690071668989 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1598.783331619918,
            "unit": "ns/iter",
            "extra": "iterations: 437715\ncpu: 1598.684582433774 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1597.640361553825,
            "unit": "ns/iter",
            "extra": "iterations: 435454\ncpu: 1597.5345432582967 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4432.054303746141,
            "unit": "ns/iter",
            "extra": "iterations: 157816\ncpu: 4431.743448066097 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3051.868342105009,
            "unit": "ns/iter",
            "extra": "iterations: 230666\ncpu: 3051.69535172067 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 572.3738958432142,
            "unit": "ns/iter",
            "extra": "iterations: 1222426\ncpu: 572.345598833791 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1734.7386172969952,
            "unit": "ns/iter",
            "extra": "iterations: 403485\ncpu: 1734.6875522014461 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3782.6647197781513,
            "unit": "ns/iter",
            "extra": "iterations: 184568\ncpu: 3782.353896666808 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7665.962627492643,
            "unit": "ns/iter",
            "extra": "iterations: 91083\ncpu: 7665.803860215468 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 12166.314793905434,
            "unit": "ns/iter",
            "extra": "iterations: 57571\ncpu: 12165.023049799333 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1593.6270685647116,
            "unit": "ns/iter",
            "extra": "iterations: 439979\ncpu: 1593.5157609794996 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1595.6776973764968,
            "unit": "ns/iter",
            "extra": "iterations: 439047\ncpu: 1595.5334463052975 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 540.1788905866761,
            "unit": "ns/iter",
            "extra": "iterations: 1295820\ncpu: 540.1383980799816 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 530.7617763014938,
            "unit": "ns/iter",
            "extra": "iterations: 1307796\ncpu: 530.7495450360765 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2871.1486733440893,
            "unit": "ns/iter",
            "extra": "iterations: 243507\ncpu: 2870.9869326138396 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 403.26677176388,
            "unit": "ns/iter",
            "extra": "iterations: 1735536\ncpu: 403.2537878787888 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 532.9184986599623,
            "unit": "ns/iter",
            "extra": "iterations: 1313733\ncpu: 532.8718392550085 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1891.32888134311,
            "unit": "ns/iter",
            "extra": "iterations: 370471\ncpu: 1891.2307549038753 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 288.27433415616997,
            "unit": "ns/iter",
            "extra": "iterations: 2429774\ncpu: 288.239162983883 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2028.4576211279234,
            "unit": "ns/iter",
            "extra": "iterations: 345172\ncpu: 2028.3609678652947 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3241.398896811862,
            "unit": "ns/iter",
            "extra": "iterations: 216101\ncpu: 3241.0042989157882 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2943.1032919615996,
            "unit": "ns/iter",
            "extra": "iterations: 238247\ncpu: 2942.8699249098795 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 46.17509360716039,
            "unit": "ns/iter",
            "extra": "iterations: 15171382\ncpu: 46.17103471522886 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 994.9096794562945,
            "unit": "ns/iter",
            "extra": "iterations: 703118\ncpu: 994.8349167564992 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2220.1938654545384,
            "unit": "ns/iter",
            "extra": "iterations: 315492\ncpu: 2219.772260469367 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 2098.2606152857174,
            "unit": "ns/iter",
            "extra": "iterations: 333081\ncpu: 2098.0406717885417 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 8047.113882200892,
            "unit": "ns/iter",
            "extra": "iterations: 86809\ncpu: 8046.165017452077 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 54.97550945760032,
            "unit": "ns/iter",
            "extra": "iterations: 12701842\ncpu: 54.97267774233084 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 360.7067986114697,
            "unit": "ns/iter",
            "extra": "iterations: 1941014\ncpu: 360.6820352661009 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 219.62880444335906,
            "unit": "ns/iter",
            "extra": "iterations: 3184960\ncpu: 219.61877354817608 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 233.1772195731653,
            "unit": "ns/iter",
            "extra": "iterations: 3000453\ncpu: 233.15444801168266 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.521778964384374,
            "unit": "ns/iter",
            "extra": "iterations: 32525238\ncpu: 21.52054143308633 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 324.3913628646217,
            "unit": "ns/iter",
            "extra": "iterations: 2173290\ncpu: 324.353985432227 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1565.9632210677619,
            "unit": "ns/iter",
            "extra": "iterations: 446560\ncpu: 1565.721611877462 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 950.3154112080872,
            "unit": "ns/iter",
            "extra": "iterations: 732707\ncpu: 950.2759138373201 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 974.1863803463297,
            "unit": "ns/iter",
            "extra": "iterations: 720312\ncpu: 974.0052130187978 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 165.05038547871644,
            "unit": "ns/iter",
            "extra": "iterations: 4239793\ncpu: 165.04391888943658 ns\nthreads: 1"
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
          "id": "6fb56c8fdbc5e00b2cbf8772b207e9be0d237fe6",
          "message": "feat: add mutation API, implement find/substr, add std::hash support (#12)\n\n* feat: add mutation API, implement find/substr, add std::hash support\n\nMutation API completes the writable half of txt::string:\n\n- operator+ (move-aware, left operand by value), operator+=, append\n  — infallible, operands are valid UTF-8 by construction\n- insert/erase/replace — positional edits via opaque Index +\n  grapheme-cluster counts, returning expected<void, error>:\n  errc::invalid_index (out of range) and errc::not_grapheme_boundary\n  (offset lands mid-cluster, O(1) continuation-byte check catches\n  cross-string Index misuse); counts clamp at end of string\n- append/replace are aliasing-safe (copy when the argument view\n  points into this string's storage)\n\nPreviously declared-but-unimplemented APIs are now real (they were\nlinker landmines): string::substr/find, string_view::substr/find and\nthe string_view(const string&) conversion constructor.\n\nexpected gains a value-less expected<void, E> specialisation; errc\ngains invalid_index / not_grapheme_boundary.\n\nstd::hash specialisations for txt::string and txt::string_view\n(consistent byte-level hashing) enable unordered container keys.\n\n38 new test cases: concatenation, SSO growth, self-referencing views,\nZWJ-family integrity across insert/erase, boundary error paths,\nsubstr/find semantics, unordered_map usage. 248/248 pass.\n\n* fix: substr refuses an Index that cuts through a grapheme cluster\n\nstring::substr and string_view::substr accepted any byte offset, so a\nforeign mid-cluster Index (the classic cross-string misuse that\ninsert/erase/replace already reject with errc::not_grapheme_boundary)\nsilently produced an ill-formed UTF-8 substring, violating the class\ninvariant. Both now check is_grapheme_start() and return an empty\nresult instead of corrupting.\n\n* test: cover string_view find/substr, erase/replace invalid_index, expected<void> paths\n\nCloses the coverage gaps flagged by codecov/patch: string_view::find\n(hit/miss/empty needle), string_view::substr success + end/zero-count\npaths, erase/replace invalid_index rejection, and expected<void,E>\nunexpect-tag construction plus copy/move assignment.\n\n---------\n\nCo-authored-by: guoyingfan.io <guoyingfan.io@bytedance.com>",
          "timestamp": "2026-08-18T14:53:03+08:00",
          "tree_id": "290ecde5571da93979a5e8e934dccedc747c2bf8",
          "url": "https://github.com/sentomk/texere/commit/6fb56c8fdbc5e00b2cbf8772b207e9be0d237fe6"
        },
        "date": 1787036178529,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20284.956622124948,
            "unit": "ns/iter",
            "extra": "iterations: 34649\ncpu: 20282.440705359466 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 25088.075314549642,
            "unit": "ns/iter",
            "extra": "iterations: 28215\ncpu: 25085.093035619357 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 5026.405270000396,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5024.9784199999995 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10667.171999268672,
            "unit": "ns/iter",
            "extra": "iterations: 65634\ncpu: 10665.788219520367 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21326.42937473276,
            "unit": "ns/iter",
            "extra": "iterations: 32722\ncpu: 21323.739502475386 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1769.3349653709372,
            "unit": "ns/iter",
            "extra": "iterations: 395620\ncpu: 1769.1252034780844 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 51.91848556435437,
            "unit": "ns/iter",
            "extra": "iterations: 13525408\ncpu: 51.913558910755214 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 168.49103952129653,
            "unit": "ns/iter",
            "extra": "iterations: 4160213\ncpu: 168.46817482662541 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 23.02766209246189,
            "unit": "ns/iter",
            "extra": "iterations: 30235999\ncpu: 23.024171716634868 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 17990.76618972975,
            "unit": "ns/iter",
            "extra": "iterations: 38929\ncpu: 17987.01870071155 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.92747005968287,
            "unit": "ns/iter",
            "extra": "iterations: 29179467\ncpu: 23.92380306329793 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.5047473007539405,
            "unit": "ns/iter",
            "extra": "iterations: 1388104913\ncpu: 0.5047041750510689 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 535.852845244989,
            "unit": "ns/iter",
            "extra": "iterations: 1293509\ncpu: 535.7447022015318 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2295.3282066068155,
            "unit": "ns/iter",
            "extra": "iterations: 305198\ncpu: 2295.0962031205945 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15836.176439909415,
            "unit": "ns/iter",
            "extra": "iterations: 44100\ncpu: 15833.426190476215 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5825.820111490092,
            "unit": "ns/iter",
            "extra": "iterations: 120369\ncpu: 5824.636002625254 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1587.3955466248967,
            "unit": "ns/iter",
            "extra": "iterations: 440924\ncpu: 1587.179083016573 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14692.81268950796,
            "unit": "ns/iter",
            "extra": "iterations: 48481\ncpu: 14689.468472184983 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2951.7872431053906,
            "unit": "ns/iter",
            "extra": "iterations: 237111\ncpu: 2951.4860381846493 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5338.470901686056,
            "unit": "ns/iter",
            "extra": "iterations: 131365\ncpu: 5337.840223803914 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2950.787478307862,
            "unit": "ns/iter",
            "extra": "iterations: 236837\ncpu: 2950.635314583439 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9796.121290125442,
            "unit": "ns/iter",
            "extra": "iterations: 71869\ncpu: 9793.314280148596 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20856.364009640318,
            "unit": "ns/iter",
            "extra": "iterations: 33609\ncpu: 20853.698860424323 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7355.137292559649,
            "unit": "ns/iter",
            "extra": "iterations: 94244\ncpu: 7354.282766011631 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 24.456904125087334,
            "unit": "ns/iter",
            "extra": "iterations: 28643948\ncpu: 24.453892563972023 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 84.41231220632721,
            "unit": "ns/iter",
            "extra": "iterations: 8302330\ncpu: 84.39744902936926 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.70432276695072,
            "unit": "ns/iter",
            "extra": "iterations: 27283636\ncpu: 25.699672177124896 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1260.9253399884255,
            "unit": "ns/iter",
            "extra": "iterations: 552960\ncpu: 1260.7989474826404 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1185.0019866384723,
            "unit": "ns/iter",
            "extra": "iterations: 590948\ncpu: 1184.8501272531591 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1267.8739999567463,
            "unit": "ns/iter",
            "extra": "iterations: 554976\ncpu: 1267.5415747708012 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1658.3995398501502,
            "unit": "ns/iter",
            "extra": "iterations: 422471\ncpu: 1658.1501049776198 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1659.3846658535629,
            "unit": "ns/iter",
            "extra": "iterations: 422195\ncpu: 1659.1387936853832 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4713.425172952006,
            "unit": "ns/iter",
            "extra": "iterations: 148596\ncpu: 4712.195106193986 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3227.526817216208,
            "unit": "ns/iter",
            "extra": "iterations: 216540\ncpu: 3227.1148286690627 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 570.4817321176167,
            "unit": "ns/iter",
            "extra": "iterations: 1231533\ncpu: 570.4164752385839 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1941.5800468669345,
            "unit": "ns/iter",
            "extra": "iterations: 360595\ncpu: 1941.2578377404022 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3883.8873182529287,
            "unit": "ns/iter",
            "extra": "iterations: 180677\ncpu: 3883.318717933068 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7109.510148986967,
            "unit": "ns/iter",
            "extra": "iterations: 98532\ncpu: 7108.035531603967 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 12065.319430509067,
            "unit": "ns/iter",
            "extra": "iterations: 57806\ncpu: 12063.383610697845 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1721.1440475137172,
            "unit": "ns/iter",
            "extra": "iterations: 406956\ncpu: 1720.913430444561 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1723.6199719030687,
            "unit": "ns/iter",
            "extra": "iterations: 407162\ncpu: 1723.4690393504306 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 605.5923744714954,
            "unit": "ns/iter",
            "extra": "iterations: 1153284\ncpu: 605.5089882457396 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 579.8212106246597,
            "unit": "ns/iter",
            "extra": "iterations: 1208847\ncpu: 579.7611947583139 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2524.5577481033247,
            "unit": "ns/iter",
            "extra": "iterations: 277455\ncpu: 2524.1766809031956 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 398.1235637559237,
            "unit": "ns/iter",
            "extra": "iterations: 1758841\ncpu: 398.08569961696605 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 549.7246425167251,
            "unit": "ns/iter",
            "extra": "iterations: 1294746\ncpu: 549.6320892283143 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1714.010038287374,
            "unit": "ns/iter",
            "extra": "iterations: 411624\ncpu: 1713.6722883019345 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 274.4244637921339,
            "unit": "ns/iter",
            "extra": "iterations: 2539034\ncpu: 274.3817152507597 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1213.1206702359937,
            "unit": "ns/iter",
            "extra": "iterations: 576215\ncpu: 1212.8426438048252 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1884.1505078559226,
            "unit": "ns/iter",
            "extra": "iterations: 371562\ncpu: 1883.9325711455817 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1789.8193827646935,
            "unit": "ns/iter",
            "extra": "iterations: 391358\ncpu: 1789.6107936978494 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.568674998262594,
            "unit": "ns/iter",
            "extra": "iterations: 15698719\ncpu: 44.562159371092825 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1041.280485478869,
            "unit": "ns/iter",
            "extra": "iterations: 686827\ncpu: 1041.1576437734718 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2154.6445617111153,
            "unit": "ns/iter",
            "extra": "iterations: 319310\ncpu: 2154.487673420798 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1373.7965422716484,
            "unit": "ns/iter",
            "extra": "iterations: 509988\ncpu: 1373.5574503713788 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4215.1428920922135,
            "unit": "ns/iter",
            "extra": "iterations: 159414\ncpu: 4214.789761250616 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 62.97357849182714,
            "unit": "ns/iter",
            "extra": "iterations: 11349882\ncpu: 62.95873437274518 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 357.79729008728054,
            "unit": "ns/iter",
            "extra": "iterations: 1956742\ncpu: 357.75709623445437 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 232.95508155383723,
            "unit": "ns/iter",
            "extra": "iterations: 3023524\ncpu: 232.9170471277878 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 246.30878820282229,
            "unit": "ns/iter",
            "extra": "iterations: 2844882\ncpu: 246.2609008036176 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 23.33228325401485,
            "unit": "ns/iter",
            "extra": "iterations: 30134549\ncpu: 23.328642582306458 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 376.55277010633034,
            "unit": "ns/iter",
            "extra": "iterations: 1919818\ncpu: 376.5203675556723 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2122.7184183948293,
            "unit": "ns/iter",
            "extra": "iterations: 353489\ncpu: 2122.3820882686555 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1244.9223952452767,
            "unit": "ns/iter",
            "extra": "iterations: 563316\ncpu: 1244.8057733137334 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 1052.5717947470232,
            "unit": "ns/iter",
            "extra": "iterations: 657374\ncpu: 1052.4564311944252 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 187.36736853637657,
            "unit": "ns/iter",
            "extra": "iterations: 3733409\ncpu: 187.32013636866404 ns\nthreads: 1"
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
          "id": "16413b8c450730069b89c16ff81e44c59fd699a6",
          "message": "feat: add mutation API, implement find/substr, add std::hash support (#12)\n\n* feat: add mutation API, implement find/substr, add std::hash support\n\nMutation API completes the writable half of txt::string:\n\n- operator+ (move-aware, left operand by value), operator+=, append\n  — infallible, operands are valid UTF-8 by construction\n- insert/erase/replace — positional edits via opaque Index +\n  grapheme-cluster counts, returning expected<void, error>:\n  errc::invalid_index (out of range) and errc::not_grapheme_boundary\n  (offset lands mid-cluster, O(1) continuation-byte check catches\n  cross-string Index misuse); counts clamp at end of string\n- append/replace are aliasing-safe (copy when the argument view\n  points into this string's storage)\n\nPreviously declared-but-unimplemented APIs are now real (they were\nlinker landmines): string::substr/find, string_view::substr/find and\nthe string_view(const string&) conversion constructor.\n\nexpected gains a value-less expected<void, E> specialisation; errc\ngains invalid_index / not_grapheme_boundary.\n\nstd::hash specialisations for txt::string and txt::string_view\n(consistent byte-level hashing) enable unordered container keys.\n\n38 new test cases: concatenation, SSO growth, self-referencing views,\nZWJ-family integrity across insert/erase, boundary error paths,\nsubstr/find semantics, unordered_map usage. 248/248 pass.\n\n* fix: substr refuses an Index that cuts through a grapheme cluster\n\nstring::substr and string_view::substr accepted any byte offset, so a\nforeign mid-cluster Index (the classic cross-string misuse that\ninsert/erase/replace already reject with errc::not_grapheme_boundary)\nsilently produced an ill-formed UTF-8 substring, violating the class\ninvariant. Both now check is_grapheme_start() and return an empty\nresult instead of corrupting.\n\n* test: cover string_view find/substr, erase/replace invalid_index, expected<void> paths\n\nCloses the coverage gaps flagged by codecov/patch: string_view::find\n(hit/miss/empty needle), string_view::substr success + end/zero-count\npaths, erase/replace invalid_index rejection, and expected<void,E>\nunexpect-tag construction plus copy/move assignment.\n\n---------",
          "timestamp": "2026-08-18T14:53:03+08:00",
          "tree_id": "290ecde5571da93979a5e8e934dccedc747c2bf8",
          "url": "https://github.com/sentomk/texere/commit/16413b8c450730069b89c16ff81e44c59fd699a6"
        },
        "date": 1787036914126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 17746.962645639247,
            "unit": "ns/iter",
            "extra": "iterations: 39567\ncpu: 17745.17423610585 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 22503.294031466998,
            "unit": "ns/iter",
            "extra": "iterations: 31398\ncpu: 22497.926078094148 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4570.491443272373,
            "unit": "ns/iter",
            "extra": "iterations: 150817\ncpu: 4569.5869828998075 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9799.255695058333,
            "unit": "ns/iter",
            "extra": "iterations: 70807\ncpu: 9787.041083508697 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 19438.974083317353,
            "unit": "ns/iter",
            "extra": "iterations: 36463\ncpu: 19436.926884787314 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1598.0393299560715,
            "unit": "ns/iter",
            "extra": "iterations: 438419\ncpu: 1597.7100581863472 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 43.35343286604458,
            "unit": "ns/iter",
            "extra": "iterations: 16197690\ncpu: 43.35329895806134 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 170.71085056049594,
            "unit": "ns/iter",
            "extra": "iterations: 4113852\ncpu: 170.7045136772056 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 20.446540485704418,
            "unit": "ns/iter",
            "extra": "iterations: 34154809\ncpu: 20.44573102429 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16025.90964848023,
            "unit": "ns/iter",
            "extra": "iterations: 43696\ncpu: 16025.383536250449 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.733641467452717,
            "unit": "ns/iter",
            "extra": "iterations: 30771449\ncpu: 22.733081727805498 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.33030629835536135,
            "unit": "ns/iter",
            "extra": "iterations: 2131103444\ncpu: 0.330287285200408 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 515.0298761658585,
            "unit": "ns/iter",
            "extra": "iterations: 1366909\ncpu: 514.9933558122734 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2078.305406400286,
            "unit": "ns/iter",
            "extra": "iterations: 328703\ncpu: 2078.3000885297656 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 14752.190781554913,
            "unit": "ns/iter",
            "extra": "iterations: 48186\ncpu: 14750.719939401471 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 4969.391435248576,
            "unit": "ns/iter",
            "extra": "iterations: 142491\ncpu: 4969.468654160604 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1491.6721589733754,
            "unit": "ns/iter",
            "extra": "iterations: 468959\ncpu: 1491.5786326736466 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 11129.033649326691,
            "unit": "ns/iter",
            "extra": "iterations: 62765\ncpu: 11129.051143153012 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2498.040540252679,
            "unit": "ns/iter",
            "extra": "iterations: 281646\ncpu: 2497.739374960059 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 4649.1535278817755,
            "unit": "ns/iter",
            "extra": "iterations: 150331\ncpu: 4649.098116822227 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2471.3522289935004,
            "unit": "ns/iter",
            "extra": "iterations: 283222\ncpu: 2471.1496917612367 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 8670.527452867449,
            "unit": "ns/iter",
            "extra": "iterations: 81048\ncpu: 8670.618633402402 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20167.667368241113,
            "unit": "ns/iter",
            "extra": "iterations: 35159\ncpu: 20166.187690207385 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 6318.920347835302,
            "unit": "ns/iter",
            "extra": "iterations: 113732\ncpu: 6319.232485140508 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.039145328443613,
            "unit": "ns/iter",
            "extra": "iterations: 30269078\ncpu: 23.03845759689144 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 70.4733934049948,
            "unit": "ns/iter",
            "extra": "iterations: 9897734\ncpu: 70.47087262599699 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 23.923455310398435,
            "unit": "ns/iter",
            "extra": "iterations: 29656832\ncpu: 23.924073144427577 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1029.529991461883,
            "unit": "ns/iter",
            "extra": "iterations: 680477\ncpu: 1029.463148644259 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 910.2766798418885,
            "unit": "ns/iter",
            "extra": "iterations: 768614\ncpu: 910.2725321162503 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1021.3059382869546,
            "unit": "ns/iter",
            "extra": "iterations: 680634\ncpu: 1021.2552267444764 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1518.7406994039616,
            "unit": "ns/iter",
            "extra": "iterations: 463223\ncpu: 1518.7584770186293 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1522.053049597608,
            "unit": "ns/iter",
            "extra": "iterations: 457421\ncpu: 1521.9529383215897 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4143.715384434322,
            "unit": "ns/iter",
            "extra": "iterations: 169938\ncpu: 4143.812502206693 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 2921.525969226903,
            "unit": "ns/iter",
            "extra": "iterations: 239495\ncpu: 2921.461834276282 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 568.0674487779612,
            "unit": "ns/iter",
            "extra": "iterations: 1321892\ncpu: 568.0452994647045 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1356.1232323270444,
            "unit": "ns/iter",
            "extra": "iterations: 531914\ncpu: 1355.3913000973841 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3424.248791381415,
            "unit": "ns/iter",
            "extra": "iterations: 203745\ncpu: 3424.1340695477084 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 5664.744021879432,
            "unit": "ns/iter",
            "extra": "iterations: 123952\ncpu: 5664.667330902296 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 12211.589414777867,
            "unit": "ns/iter",
            "extra": "iterations: 57004\ncpu: 12210.616465511168 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1582.1670135334546,
            "unit": "ns/iter",
            "extra": "iterations: 442533\ncpu: 1582.136471178415 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1581.7725543785139,
            "unit": "ns/iter",
            "extra": "iterations: 442730\ncpu: 1581.7062950330871 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 620.414674371363,
            "unit": "ns/iter",
            "extra": "iterations: 1122951\ncpu: 620.4199435238041 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 437.2068065084013,
            "unit": "ns/iter",
            "extra": "iterations: 1600762\ncpu: 437.19448300247007 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2269.40495496223,
            "unit": "ns/iter",
            "extra": "iterations: 309185\ncpu: 2269.416032472467 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 437.929692018079,
            "unit": "ns/iter",
            "extra": "iterations: 1599477\ncpu: 437.902476246922 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 475.57998666444223,
            "unit": "ns/iter",
            "extra": "iterations: 1480253\ncpu: 475.5759934281493 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1598.7703703201514,
            "unit": "ns/iter",
            "extra": "iterations: 442482\ncpu: 1598.5987701194622 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 272.79369951760737,
            "unit": "ns/iter",
            "extra": "iterations: 2569708\ncpu: 272.7980712205424 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 888.6653164209773,
            "unit": "ns/iter",
            "extra": "iterations: 787511\ncpu: 888.6432164122185 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1453.061180668639,
            "unit": "ns/iter",
            "extra": "iterations: 482015\ncpu: 1453.07443959213 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1363.461965909266,
            "unit": "ns/iter",
            "extra": "iterations: 509464\ncpu: 1363.3670622458076 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 42.640310719245065,
            "unit": "ns/iter",
            "extra": "iterations: 16467213\ncpu: 42.639395142335154 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 775.2826936526669,
            "unit": "ns/iter",
            "extra": "iterations: 905061\ncpu: 775.2658450645915 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 1808.8379120523136,
            "unit": "ns/iter",
            "extra": "iterations: 386025\ncpu: 1808.740672236247 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 941.0421868606406,
            "unit": "ns/iter",
            "extra": "iterations: 738026\ncpu: 941.0365271684237 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 3323.5357960492483,
            "unit": "ns/iter",
            "extra": "iterations: 209227\ncpu: 3323.2619547190293 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 47.82881989336577,
            "unit": "ns/iter",
            "extra": "iterations: 14605231\ncpu: 47.827675714269404 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 277.9731507057302,
            "unit": "ns/iter",
            "extra": "iterations: 2503455\ncpu: 277.95592131674067 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 174.1052916914535,
            "unit": "ns/iter",
            "extra": "iterations: 4008208\ncpu: 174.10261817749918 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 185.1930725180994,
            "unit": "ns/iter",
            "extra": "iterations: 3804788\ncpu: 185.17945835615458 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.95574543348495,
            "unit": "ns/iter",
            "extra": "iterations: 32080260\ncpu: 21.956007837841806 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 352.79983996930366,
            "unit": "ns/iter",
            "extra": "iterations: 2022112\ncpu: 352.782468033423 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 2538.82422098298,
            "unit": "ns/iter",
            "extra": "iterations: 278139\ncpu: 2538.8425355667546 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1173.4352090667069,
            "unit": "ns/iter",
            "extra": "iterations: 582350\ncpu: 1173.3420297072228 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 1106.0906846495589,
            "unit": "ns/iter",
            "extra": "iterations: 677237\ncpu: 1106.0725019454098 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 183.60913090698952,
            "unit": "ns/iter",
            "extra": "iterations: 3640646\ncpu: 183.6083615380347 ns\nthreads: 1"
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
          "id": "d6bae2a8d5d38e55efa1de3cb2179dd8b327d6ff",
          "message": "feat: add txt tool with wc subcommand (honest text statistics) (#13)\n\nFirst product of the txt tool family, powered by texere itself.\n\n  $ printf 'I <family-emoji> CJK <nihongo> e<acute>\\n' > demo.txt\n  $ txt wc demo.txt\n  1 14 21 46          # lines graphemes codepoints bytes\n  $ wc -m demo.txt\n  46                  # system wc reports bytes as 'chars'\n\n- txt wc [-l|-m|-g|-c] [file...]: fixed column order, multiple files\n  with totals, wc-compatible exit codes; reads stdin when no file given\n- Counting core is a static lib (txt_tool_core) so the doctest suite\n  covers it without linking the executable: 19 new cases (CJK,\n  combining marks, ZWJ family, flag sequence, invalid-input\n  degradation) - 267/267 pass\n- Subcommand dispatch in main.cpp leaves room for align/fold\n- Performance note: grapheme counting is ~360ns/cluster (linear; the\n  grapheme iterator rebuilds its backend view per cluster - future\n  perf item), 19MB CJK counted in 2.6s",
          "timestamp": "2026-08-18T23:46:34+08:00",
          "tree_id": "7f6b6abc5d9031ab49122372f632a1baa8fc3a9e",
          "url": "https://github.com/sentomk/texere/commit/d6bae2a8d5d38e55efa1de3cb2179dd8b327d6ff"
        },
        "date": 1787068205383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20100.98777385954,
            "unit": "ns/iter",
            "extra": "iterations: 34598\ncpu: 20096.643534308343 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24452.27819548792,
            "unit": "ns/iter",
            "extra": "iterations: 28329\ncpu: 24441.74898513891 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4887.031393605557,
            "unit": "ns/iter",
            "extra": "iterations: 143405\ncpu: 4885.32911683693 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10831.972967612835,
            "unit": "ns/iter",
            "extra": "iterations: 65551\ncpu: 10830.405867187383 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21323.876996562372,
            "unit": "ns/iter",
            "extra": "iterations: 32869\ncpu: 21322.345583984894 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1769.6631208455512,
            "unit": "ns/iter",
            "extra": "iterations: 395207\ncpu: 1769.4483574430633 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 52.259708044578126,
            "unit": "ns/iter",
            "extra": "iterations: 13401772\ncpu: 52.252692330536604 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 166.78938180136095,
            "unit": "ns/iter",
            "extra": "iterations: 4203293\ncpu: 166.777371931959 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.951547691058828,
            "unit": "ns/iter",
            "extra": "iterations: 31932988\ncpu: 21.948414692668244 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 17985.894518380086,
            "unit": "ns/iter",
            "extra": "iterations: 38547\ncpu: 17984.876073364972 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.95734585732609,
            "unit": "ns/iter",
            "extra": "iterations: 29248179\ncpu: 23.95343956285279 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.5049343660904292,
            "unit": "ns/iter",
            "extra": "iterations: 1385788544\ncpu: 0.504903333938947 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 535.7458375404432,
            "unit": "ns/iter",
            "extra": "iterations: 1308301\ncpu: 535.6810695703828 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2293.8348972963418,
            "unit": "ns/iter",
            "extra": "iterations: 305101\ncpu: 2293.7372968295763 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 18398.59652814281,
            "unit": "ns/iter",
            "extra": "iterations: 38020\ncpu: 18397.324460810076 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5832.082172504913,
            "unit": "ns/iter",
            "extra": "iterations: 120101\ncpu: 5831.293461336706 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1591.6252318342024,
            "unit": "ns/iter",
            "extra": "iterations: 435117\ncpu: 1591.4727647965965 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14070.61661072156,
            "unit": "ns/iter",
            "extra": "iterations: 49751\ncpu: 14068.657152620084 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2952.367154873484,
            "unit": "ns/iter",
            "extra": "iterations: 237058\ncpu: 2952.1336761467587 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5377.61121892335,
            "unit": "ns/iter",
            "extra": "iterations: 130886\ncpu: 5376.68708647221 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2956.5139792020627,
            "unit": "ns/iter",
            "extra": "iterations: 237138\ncpu: 2956.1253911224717 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9765.928636192475,
            "unit": "ns/iter",
            "extra": "iterations: 71689\ncpu: 9764.893470406914 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20870.693583015254,
            "unit": "ns/iter",
            "extra": "iterations: 33536\ncpu: 20869.153476860687 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7330.796455141176,
            "unit": "ns/iter",
            "extra": "iterations: 94898\ncpu: 7330.431147126391 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.947030283549665,
            "unit": "ns/iter",
            "extra": "iterations: 29239273\ncpu: 23.944003429907447 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 84.43355270535899,
            "unit": "ns/iter",
            "extra": "iterations: 8302031\ncpu: 84.42619077187274 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.675320203153575,
            "unit": "ns/iter",
            "extra": "iterations: 27349512\ncpu: 25.671397281238484 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1263.828001616842,
            "unit": "ns/iter",
            "extra": "iterations: 554168\ncpu: 1263.7140560263313 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1185.0503406785426,
            "unit": "ns/iter",
            "extra": "iterations: 591907\ncpu: 1184.888178379377 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1264.4946048768074,
            "unit": "ns/iter",
            "extra": "iterations: 555409\ncpu: 1264.3601562092035 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1659.7956900684956,
            "unit": "ns/iter",
            "extra": "iterations: 421306\ncpu: 1659.686842817329 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1661.0308570832135,
            "unit": "ns/iter",
            "extra": "iterations: 421686\ncpu: 1660.743861546271 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4712.503632042723,
            "unit": "ns/iter",
            "extra": "iterations: 148539\ncpu: 4711.963316031485 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3227.071085104694,
            "unit": "ns/iter",
            "extra": "iterations: 216698\ncpu: 3226.7168409491546 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 568.8031731925603,
            "unit": "ns/iter",
            "extra": "iterations: 1226525\ncpu: 568.7745761399091 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1919.2219809418816,
            "unit": "ns/iter",
            "extra": "iterations: 366563\ncpu: 1918.997997615695 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3877.8219960375254,
            "unit": "ns/iter",
            "extra": "iterations: 180187\ncpu: 3877.549590147987 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7104.740845671078,
            "unit": "ns/iter",
            "extra": "iterations: 98478\ncpu: 7103.624078474334 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 12162.212430925045,
            "unit": "ns/iter",
            "extra": "iterations: 57727\ncpu: 12160.656157430758 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1702.0893352844057,
            "unit": "ns/iter",
            "extra": "iterations: 411394\ncpu: 1701.755895807914 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1702.0304967107077,
            "unit": "ns/iter",
            "extra": "iterations: 411487\ncpu: 1701.8839112778683 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 602.8454765315493,
            "unit": "ns/iter",
            "extra": "iterations: 1160238\ncpu: 602.8044616707951 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 582.0306064602778,
            "unit": "ns/iter",
            "extra": "iterations: 1204811\ncpu: 581.969180228272 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2525.4827069025414,
            "unit": "ns/iter",
            "extra": "iterations: 277365\ncpu: 2525.2970165666065 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 397.7717152002294,
            "unit": "ns/iter",
            "extra": "iterations: 1757375\ncpu: 397.73752158759186 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 542.7527521043737,
            "unit": "ns/iter",
            "extra": "iterations: 1292193\ncpu: 542.6988615477751 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1735.1356658689497,
            "unit": "ns/iter",
            "extra": "iterations: 404081\ncpu: 1734.8672345396037 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 313.06469465334493,
            "unit": "ns/iter",
            "extra": "iterations: 2238423\ncpu: 313.0316924013012 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1214.9739290612563,
            "unit": "ns/iter",
            "extra": "iterations: 573819\ncpu: 1214.806062538884 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1889.4956336287623,
            "unit": "ns/iter",
            "extra": "iterations: 371361\ncpu: 1889.3554035022548 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1789.9982968574861,
            "unit": "ns/iter",
            "extra": "iterations: 391629\ncpu: 1789.686310257937 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.625074177126706,
            "unit": "ns/iter",
            "extra": "iterations: 15703965\ncpu: 44.62046814291778 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1023.4744736838212,
            "unit": "ns/iter",
            "extra": "iterations: 683667\ncpu: 1023.3668525758917 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2150.8533985591603,
            "unit": "ns/iter",
            "extra": "iterations: 325638\ncpu: 2150.647157272801 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1374.1977975058983,
            "unit": "ns/iter",
            "extra": "iterations: 508242\ncpu: 1374.064756552982 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4227.209463410535,
            "unit": "ns/iter",
            "extra": "iterations: 165881\ncpu: 4226.742363501532 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 62.10299434960147,
            "unit": "ns/iter",
            "extra": "iterations: 11290532\ncpu: 62.09810272890633 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 357.6774290166794,
            "unit": "ns/iter",
            "extra": "iterations: 1956481\ncpu: 357.6614380614997 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 231.31373201723446,
            "unit": "ns/iter",
            "extra": "iterations: 3025120\ncpu: 231.2935648833771 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 246.1226588888701,
            "unit": "ns/iter",
            "extra": "iterations: 2843308\ncpu: 246.10114802898633 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 23.21584219859527,
            "unit": "ns/iter",
            "extra": "iterations: 30123382\ncpu: 23.21227872089522 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 366.0673408690416,
            "unit": "ns/iter",
            "extra": "iterations: 1915152\ncpu: 366.0333299915631 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1767.8252053699796,
            "unit": "ns/iter",
            "extra": "iterations: 395384\ncpu: 1767.6665166015723 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1244.8858322398828,
            "unit": "ns/iter",
            "extra": "iterations: 650858\ncpu: 1244.7045546033091 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 1065.8751906437342,
            "unit": "ns/iter",
            "extra": "iterations: 656329\ncpu: 1065.8121795623845 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.20673066315751,
            "unit": "ns/iter",
            "extra": "iterations: 3761977\ncpu: 186.17162997009171 ns\nthreads: 1"
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
          "id": "b54fafca62c55aedaa8650c10822f255e29d46b7",
          "message": "docs: add project ROADMAP (#14)\n\nPhased plan derived from current state (post #13):\n- Phase 1: width module (first own algorithm, UCD generator + UTS #51\n  rules) -> txt wc -w -> txt align (flagship) -> fold/elide\n- Phase 2: algorithm layer (trim/split/join/caseless, UAX #29)\n- Phase 3: grapheme iterator perf rework (360ns -> <=100ns/cluster\n  target), fuzzing, tools smoke job\n- Phase 4: vcpkg/conan, v0.1.0 tag, launch article, ftxui/notcurses\n  outreach\n- Phase 5: minimal-backend branch decision, UCD cadence, SG16, C++20\n  NTTP literal track\nPlus explicit non-goals (no ICU parity, no rendering, no encoding zoo,\nno dependency purism) to keep scope honest.",
          "timestamp": "2026-08-18T23:51:56+08:00",
          "tree_id": "7ebe7e542239a211b6198210d469c411aace7571",
          "url": "https://github.com/sentomk/texere/commit/b54fafca62c55aedaa8650c10822f255e29d46b7"
        },
        "date": 1787068506650,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 15081.577525303162,
            "unit": "ns/iter",
            "extra": "iterations: 45153\ncpu: 15080.869178127701 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 18559.96799014258,
            "unit": "ns/iter",
            "extra": "iterations: 36520\ncpu: 18559.311692223444 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 3196.595498959429,
            "unit": "ns/iter",
            "extra": "iterations: 217683\ncpu: 3196.433037949679 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 7374.081032274354,
            "unit": "ns/iter",
            "extra": "iterations: 95246\ncpu: 7372.823415156539 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 14282.183740141962,
            "unit": "ns/iter",
            "extra": "iterations: 48057\ncpu: 14279.608506565131 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1132.3493194629136,
            "unit": "ns/iter",
            "extra": "iterations: 640597\ncpu: 1132.227169343596 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 31.542012236868544,
            "unit": "ns/iter",
            "extra": "iterations: 22169398\ncpu: 31.53870262963388 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 111.32843792629649,
            "unit": "ns/iter",
            "extra": "iterations: 6327019\ncpu: 111.31699414842903 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 15.182875193293887,
            "unit": "ns/iter",
            "extra": "iterations: 46184241\ncpu: 15.18106604804872 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 11843.86253236971,
            "unit": "ns/iter",
            "extra": "iterations: 59083\ncpu: 11843.179087047036 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 15.635954535193715,
            "unit": "ns/iter",
            "extra": "iterations: 46713495\ncpu: 15.635097802037691 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.24036412451982325,
            "unit": "ns/iter",
            "extra": "iterations: 2903105126\ncpu: 0.24035750608915407 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 270.7005344123093,
            "unit": "ns/iter",
            "extra": "iterations: 2480856\ncpu: 270.68816247295246 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 1046.9349149491675,
            "unit": "ns/iter",
            "extra": "iterations: 668894\ncpu: 1046.8555047586005 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 10689.532304767377,
            "unit": "ns/iter",
            "extra": "iterations: 68380\ncpu: 10688.538446914295 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 3322.12694076508,
            "unit": "ns/iter",
            "extra": "iterations: 210484\ncpu: 3321.834709526617 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1052.2494679285799,
            "unit": "ns/iter",
            "extra": "iterations: 669553\ncpu: 1052.198735574331 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 7613.771875446499,
            "unit": "ns/iter",
            "extra": "iterations: 90981\ncpu: 7613.326584671519 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 1757.3868512544836,
            "unit": "ns/iter",
            "extra": "iterations: 398365\ncpu: 1757.2505365682152 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 3365.2401419104795,
            "unit": "ns/iter",
            "extra": "iterations: 208864\ncpu: 3364.91033878503 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 1764.2057982263796,
            "unit": "ns/iter",
            "extra": "iterations: 396811\ncpu: 1764.1078347122425 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 6527.2690469101235,
            "unit": "ns/iter",
            "extra": "iterations: 120912\ncpu: 6526.975320894535 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 13143.700896936174,
            "unit": "ns/iter",
            "extra": "iterations: 53627\ncpu: 13142.488447983267 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 3853.257945472928,
            "unit": "ns/iter",
            "extra": "iterations: 182368\ncpu: 3853.1653853746234 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 17.321087567944765,
            "unit": "ns/iter",
            "extra": "iterations: 38877902\ncpu: 17.319378808043776 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 50.94713977845193,
            "unit": "ns/iter",
            "extra": "iterations: 11837597\ncpu: 50.944689027680084 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 17.797283960805846,
            "unit": "ns/iter",
            "extra": "iterations: 39211658\ncpu: 17.796151057932786 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 800.1581381510999,
            "unit": "ns/iter",
            "extra": "iterations: 931053\ncpu: 800.085100418559 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 673.5878837971101,
            "unit": "ns/iter",
            "extra": "iterations: 1038081\ncpu: 673.5632884139097 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 752.4268107058493,
            "unit": "ns/iter",
            "extra": "iterations: 925026\ncpu: 752.3748262211008 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1119.8034404266025,
            "unit": "ns/iter",
            "extra": "iterations: 630852\ncpu: 1119.7030603057456 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1112.2075769846797,
            "unit": "ns/iter",
            "extra": "iterations: 630937\ncpu: 1112.1358962939241 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 2918.1670006289705,
            "unit": "ns/iter",
            "extra": "iterations: 240047\ncpu: 2917.990818464719 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 2038.2663130297858,
            "unit": "ns/iter",
            "extra": "iterations: 343667\ncpu: 2038.1215158860193 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 293.4959987395961,
            "unit": "ns/iter",
            "extra": "iterations: 2519831\ncpu: 293.48085050148296 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 921.6271971192161,
            "unit": "ns/iter",
            "extra": "iterations: 757014\ncpu: 921.5681717907469 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 2446.503155693747,
            "unit": "ns/iter",
            "extra": "iterations: 285991\ncpu: 2446.129783804399 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 3607.061380797752,
            "unit": "ns/iter",
            "extra": "iterations: 194279\ncpu: 3606.7621976642045 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 7905.200491053293,
            "unit": "ns/iter",
            "extra": "iterations: 89196\ncpu: 7904.6389636306 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1139.0501757608747,
            "unit": "ns/iter",
            "extra": "iterations: 610773\ncpu: 1139.0092063663546 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1132.6666348379058,
            "unit": "ns/iter",
            "extra": "iterations: 617890\ncpu: 1132.5943452718059 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 273.70709031291983,
            "unit": "ns/iter",
            "extra": "iterations: 2560564\ncpu: 273.6864733707087 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 317.462879150222,
            "unit": "ns/iter",
            "extra": "iterations: 2205755\ncpu: 317.44285063391084 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 1618.140606905677,
            "unit": "ns/iter",
            "extra": "iterations: 431764\ncpu: 1618.030430976186 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 273.4529236434664,
            "unit": "ns/iter",
            "extra": "iterations: 2560213\ncpu: 273.4334944006604 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 346.001026888623,
            "unit": "ns/iter",
            "extra": "iterations: 1878490\ncpu: 345.9786786195294 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1227.9406230593559,
            "unit": "ns/iter",
            "extra": "iterations: 624788\ncpu: 1227.8404162692007 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 203.83074386488917,
            "unit": "ns/iter",
            "extra": "iterations: 3534123\ncpu: 203.81261461471357 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 698.6027477875209,
            "unit": "ns/iter",
            "extra": "iterations: 971982\ncpu: 698.5598694214474 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1234.858719063316,
            "unit": "ns/iter",
            "extra": "iterations: 559934\ncpu: 1234.7900949040406 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1091.8403969865026,
            "unit": "ns/iter",
            "extra": "iterations: 612313\ncpu: 1091.818060371093 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 29.04671783519614,
            "unit": "ns/iter",
            "extra": "iterations: 24046812\ncpu: 29.04559905903548 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 564.3332971299645,
            "unit": "ns/iter",
            "extra": "iterations: 1252186\ncpu: 564.28814888523 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 1525.7038892765852,
            "unit": "ns/iter",
            "extra": "iterations: 429900\ncpu: 1525.5129658059977 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 807.6506091124103,
            "unit": "ns/iter",
            "extra": "iterations: 789099\ncpu: 807.5834971277409 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 2434.8656693055846,
            "unit": "ns/iter",
            "extra": "iterations: 287492\ncpu: 2434.721912261916 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 31.173208878637737,
            "unit": "ns/iter",
            "extra": "iterations: 22440830\ncpu: 31.170095892174967 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 205.56965279140323,
            "unit": "ns/iter",
            "extra": "iterations: 3399311\ncpu: 205.56372217781765 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 126.26862979825883,
            "unit": "ns/iter",
            "extra": "iterations: 5542505\ncpu: 126.26281004708184 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 139.99410582743823,
            "unit": "ns/iter",
            "extra": "iterations: 4938946\ncpu: 139.98538473593254 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 16.851865743306476,
            "unit": "ns/iter",
            "extra": "iterations: 41304369\ncpu: 16.851471596140353 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 270.86251598422314,
            "unit": "ns/iter",
            "extra": "iterations: 2787124\ncpu: 270.8507766428767 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1094.6123360692434,
            "unit": "ns/iter",
            "extra": "iterations: 639523\ncpu: 1094.572181141262 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 685.3617799254646,
            "unit": "ns/iter",
            "extra": "iterations: 1022290\ncpu: 685.3188742920354 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 745.1435747956073,
            "unit": "ns/iter",
            "extra": "iterations: 942756\ncpu: 745.0945101383559 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 129.99278630148666,
            "unit": "ns/iter",
            "extra": "iterations: 5389607\ncpu: 129.98756050302003 ns\nthreads: 1"
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
          "id": "a2667ead03f778ea31524bf51f55a2d8a52cabc8",
          "message": "docs: replace M1-M4 milestone codes with named sections (#15)\n\nNumbered codes make readers hop back and forth; the phase/section\ntitles alone now carry the meaning. Cross-references updated\n('the width generator' instead of 'the M1 generator').",
          "timestamp": "2026-08-19T00:39:33+08:00",
          "tree_id": "faec35fb8d355737d50ca84889ddabc9df6012a4",
          "url": "https://github.com/sentomk/texere/commit/a2667ead03f778ea31524bf51f55a2d8a52cabc8"
        },
        "date": 1787071373142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19107.65546403089,
            "unit": "ns/iter",
            "extra": "iterations: 36420\ncpu: 19103.655271828666 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21452.773632221266,
            "unit": "ns/iter",
            "extra": "iterations: 32699\ncpu: 21447.993333129452 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4786.566131262557,
            "unit": "ns/iter",
            "extra": "iterations: 141015\ncpu: 4785.872914228981 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9593.964077221857,
            "unit": "ns/iter",
            "extra": "iterations: 73658\ncpu: 9593.562966683865 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 19488.136953955418,
            "unit": "ns/iter",
            "extra": "iterations: 36421\ncpu: 19486.664836220854 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1876.8333454015833,
            "unit": "ns/iter",
            "extra": "iterations: 372879\ncpu: 1876.752933257168 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 48.98033943605533,
            "unit": "ns/iter",
            "extra": "iterations: 14282042\ncpu: 48.978453781328994 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 186.21106799608205,
            "unit": "ns/iter",
            "extra": "iterations: 3759452\ncpu: 186.20002995117392 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 20.225426380388424,
            "unit": "ns/iter",
            "extra": "iterations: 34630521\ncpu: 20.224407192718836 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16264.103497186492,
            "unit": "ns/iter",
            "extra": "iterations: 43006\ncpu: 16263.57450123237 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.81685559690552,
            "unit": "ns/iter",
            "extra": "iterations: 30741682\ncpu: 22.81589003490443 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.41503474290617526,
            "unit": "ns/iter",
            "extra": "iterations: 1687271632\ncpu: 0.4150087547966314 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 473.5444217237213,
            "unit": "ns/iter",
            "extra": "iterations: 1478826\ncpu: 473.5065403232022 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2676.587253518748,
            "unit": "ns/iter",
            "extra": "iterations: 261531\ncpu: 2676.337917875894 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15229.054289689837,
            "unit": "ns/iter",
            "extra": "iterations: 45994\ncpu: 15228.486041657587 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5703.2589060079945,
            "unit": "ns/iter",
            "extra": "iterations: 122670\ncpu: 5703.0970734490875 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2501.892211891374,
            "unit": "ns/iter",
            "extra": "iterations: 280068\ncpu: 2501.7927431909434 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 12736.071884373943,
            "unit": "ns/iter",
            "extra": "iterations: 55005\ncpu: 12735.648486501192 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3319.575362463065,
            "unit": "ns/iter",
            "extra": "iterations: 210987\ncpu: 3319.423940811511 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5650.021162573599,
            "unit": "ns/iter",
            "extra": "iterations: 124276\ncpu: 5649.703064147525 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3348.980283779545,
            "unit": "ns/iter",
            "extra": "iterations: 208965\ncpu: 3348.81954394276 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9371.801044106713,
            "unit": "ns/iter",
            "extra": "iterations: 74705\ncpu: 9371.539575664274 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 20007.55272706496,
            "unit": "ns/iter",
            "extra": "iterations: 35001\ncpu: 20005.122625067783 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7213.845976562024,
            "unit": "ns/iter",
            "extra": "iterations: 97193\ncpu: 7213.18959184304 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.086014295757195,
            "unit": "ns/iter",
            "extra": "iterations: 30347746\ncpu: 23.084620452537088 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 95.15284972290668,
            "unit": "ns/iter",
            "extra": "iterations: 7329853\ncpu: 95.149027954585 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 22.547675075434537,
            "unit": "ns/iter",
            "extra": "iterations: 31044104\ncpu: 22.547245364208248 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 2013.5380594952917,
            "unit": "ns/iter",
            "extra": "iterations: 347456\ncpu: 2013.485437004974 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1932.5420812076422,
            "unit": "ns/iter",
            "extra": "iterations: 357725\ncpu: 1932.4367181494192 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 2012.114737988777,
            "unit": "ns/iter",
            "extra": "iterations: 347008\ncpu: 2011.9460214173757 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1619.9079382325226,
            "unit": "ns/iter",
            "extra": "iterations: 432590\ncpu: 1619.8000115582854 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1616.3736391007071,
            "unit": "ns/iter",
            "extra": "iterations: 433445\ncpu: 1616.2343549931336 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4423.32556360069,
            "unit": "ns/iter",
            "extra": "iterations: 158135\ncpu: 4423.212046668998 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3033.1722609027297,
            "unit": "ns/iter",
            "extra": "iterations: 230952\ncpu: 3033.0310194325994 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 511.6969354945758,
            "unit": "ns/iter",
            "extra": "iterations: 1370629\ncpu: 511.65924914765316 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1745.8212178703486,
            "unit": "ns/iter",
            "extra": "iterations: 394262\ncpu: 1745.7119580380704 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3803.3784697798164,
            "unit": "ns/iter",
            "extra": "iterations: 184810\ncpu: 3803.130929062256 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 6732.796329905194,
            "unit": "ns/iter",
            "extra": "iterations: 104139\ncpu: 6732.39880352225 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 10736.887890045737,
            "unit": "ns/iter",
            "extra": "iterations: 65409\ncpu: 10736.506138298952 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1647.8612049258522,
            "unit": "ns/iter",
            "extra": "iterations: 425188\ncpu: 1647.8350282698523 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1644.2837988879312,
            "unit": "ns/iter",
            "extra": "iterations: 425872\ncpu: 1644.2073651238031 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 571.5171942792169,
            "unit": "ns/iter",
            "extra": "iterations: 1224099\ncpu: 571.4968250117023 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 532.5021420303974,
            "unit": "ns/iter",
            "extra": "iterations: 1313240\ncpu: 532.4776476500857 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2567.3286544064154,
            "unit": "ns/iter",
            "extra": "iterations: 273567\ncpu: 2567.2193685642 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 402.79752044970553,
            "unit": "ns/iter",
            "extra": "iterations: 1739267\ncpu: 402.7785164669957 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 535.8230477465787,
            "unit": "ns/iter",
            "extra": "iterations: 1311382\ncpu: 535.7775766328966 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1894.3178757889452,
            "unit": "ns/iter",
            "extra": "iterations: 370434\ncpu: 1894.2344304248502 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 292.20911116270827,
            "unit": "ns/iter",
            "extra": "iterations: 2403162\ncpu: 292.1979292282435 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2040.2781068006257,
            "unit": "ns/iter",
            "extra": "iterations: 344792\ncpu: 2040.1842966194117 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3259.232034808936,
            "unit": "ns/iter",
            "extra": "iterations: 215347\ncpu: 3259.1544623328855 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2941.213081693326,
            "unit": "ns/iter",
            "extra": "iterations: 238012\ncpu: 2941.107301312544 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 45.86194864244711,
            "unit": "ns/iter",
            "extra": "iterations: 15276974\ncpu: 45.859242740087424 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 993.1938259353269,
            "unit": "ns/iter",
            "extra": "iterations: 705370\ncpu: 993.1177367906179 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 1909.4960378881012,
            "unit": "ns/iter",
            "extra": "iterations: 366976\ncpu: 1909.4536318451178 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 2169.1379004469113,
            "unit": "ns/iter",
            "extra": "iterations: 322421\ncpu: 2169.0353574984283 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 8024.861029302438,
            "unit": "ns/iter",
            "extra": "iterations: 87263\ncpu: 8024.513814560604 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 55.22307505277165,
            "unit": "ns/iter",
            "extra": "iterations: 12725206\ncpu: 55.21837736850815 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 360.8963637914626,
            "unit": "ns/iter",
            "extra": "iterations: 1934295\ncpu: 360.86405848125673 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 218.90451536854934,
            "unit": "ns/iter",
            "extra": "iterations: 3194933\ncpu: 218.89807110195983 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 232.30392510691044,
            "unit": "ns/iter",
            "extra": "iterations: 3014644\ncpu: 232.2896063349435 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.822471899677982,
            "unit": "ns/iter",
            "extra": "iterations: 32090024\ncpu: 21.8217228506904 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 321.4444886147705,
            "unit": "ns/iter",
            "extra": "iterations: 2178436\ncpu: 321.4217507422775 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1575.142688164118,
            "unit": "ns/iter",
            "extra": "iterations: 446379\ncpu: 1575.100049509488 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 951.4405831469469,
            "unit": "ns/iter",
            "extra": "iterations: 736281\ncpu: 951.3793184938916 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 974.6852672457305,
            "unit": "ns/iter",
            "extra": "iterations: 719207\ncpu: 974.6464939857399 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 166.21587643035272,
            "unit": "ns/iter",
            "extra": "iterations: 4246156\ncpu: 166.2146937135622 ns\nthreads: 1"
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
          "id": "a2667ead03f778ea31524bf51f55a2d8a52cabc8",
          "message": "docs: replace M1-M4 milestone codes with named sections (#15)\n\nNumbered codes make readers hop back and forth; the phase/section\ntitles alone now carry the meaning. Cross-references updated\n('the width generator' instead of 'the M1 generator').",
          "timestamp": "2026-08-19T00:39:33+08:00",
          "tree_id": "faec35fb8d355737d50ca84889ddabc9df6012a4",
          "url": "https://github.com/sentomk/texere/commit/a2667ead03f778ea31524bf51f55a2d8a52cabc8"
        },
        "date": 1787071639018,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 19216.82518930126,
            "unit": "ns/iter",
            "extra": "iterations: 36714\ncpu: 19213.55559187231 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 21598.41086150328,
            "unit": "ns/iter",
            "extra": "iterations: 32629\ncpu: 21594.054154279944 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4785.571724265056,
            "unit": "ns/iter",
            "extra": "iterations: 146387\ncpu: 4785.234788608279 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 9511.675655105022,
            "unit": "ns/iter",
            "extra": "iterations: 73576\ncpu: 9507.527794389474 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 19306.920282293482,
            "unit": "ns/iter",
            "extra": "iterations: 36416\ncpu: 19302.387851493833 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1876.9755797728228,
            "unit": "ns/iter",
            "extra": "iterations: 373379\ncpu: 1876.6107360081846 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 49.034883934740655,
            "unit": "ns/iter",
            "extra": "iterations: 14248622\ncpu: 49.0291215529474 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 186.16070540079457,
            "unit": "ns/iter",
            "extra": "iterations: 3758374\ncpu: 186.1331698229074 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 20.20779105451296,
            "unit": "ns/iter",
            "extra": "iterations: 34649918\ncpu: 20.205631222561596 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 16255.614358307845,
            "unit": "ns/iter",
            "extra": "iterations: 43097\ncpu: 16253.621040907712 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 22.796042878534237,
            "unit": "ns/iter",
            "extra": "iterations: 30783235\ncpu: 22.794736842960138 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.4155998517721655,
            "unit": "ns/iter",
            "extra": "iterations: 1686951747\ncpu: 0.4155562630920948 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 474.35754887000166,
            "unit": "ns/iter",
            "extra": "iterations: 1441017\ncpu: 474.3107596926342 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2678.1576414787423,
            "unit": "ns/iter",
            "extra": "iterations: 261435\ncpu: 2677.8273069787942 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15156.19129982448,
            "unit": "ns/iter",
            "extra": "iterations: 46137\ncpu: 15155.403970782676 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5699.663953175977,
            "unit": "ns/iter",
            "extra": "iterations: 122843\ncpu: 5698.868441832246 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 2498.5448214692556,
            "unit": "ns/iter",
            "extra": "iterations: 280736\ncpu: 2498.3337334720145 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 13050.50409629551,
            "unit": "ns/iter",
            "extra": "iterations: 53585\ncpu: 13049.842194643992 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 3328.1641148051776,
            "unit": "ns/iter",
            "extra": "iterations: 210304\ncpu: 3328.1486086807618 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5629.450156709272,
            "unit": "ns/iter",
            "extra": "iterations: 123477\ncpu: 5629.062141127515 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 3348.145064059633,
            "unit": "ns/iter",
            "extra": "iterations: 210507\ncpu: 3347.982114609006 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9366.09896821229,
            "unit": "ns/iter",
            "extra": "iterations: 74337\ncpu: 9365.494249162608 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 19947.90322303383,
            "unit": "ns/iter",
            "extra": "iterations: 34905\ncpu: 19945.097665090976 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7203.343280043611,
            "unit": "ns/iter",
            "extra": "iterations: 97017\ncpu: 7203.064803075759 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.07251931227901,
            "unit": "ns/iter",
            "extra": "iterations: 30342483\ncpu: 23.069383477944147 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 94.0656028196606,
            "unit": "ns/iter",
            "extra": "iterations: 7516933\ncpu: 94.0599273666531 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 22.572047941088403,
            "unit": "ns/iter",
            "extra": "iterations: 30966506\ncpu: 22.570686922186173 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 2010.43305197048,
            "unit": "ns/iter",
            "extra": "iterations: 347120\ncpu: 2010.382441230697 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1932.3355601262099,
            "unit": "ns/iter",
            "extra": "iterations: 358812\ncpu: 1932.2114115469954 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 2006.992894317464,
            "unit": "ns/iter",
            "extra": "iterations: 344513\ncpu: 2006.7941616136336 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1615.2914588687308,
            "unit": "ns/iter",
            "extra": "iterations: 431910\ncpu: 1615.1392929082413 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1617.2899214704928,
            "unit": "ns/iter",
            "extra": "iterations: 432831\ncpu: 1617.0418916389945 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4432.618479277787,
            "unit": "ns/iter",
            "extra": "iterations: 158188\ncpu: 4432.334298429728 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3037.952143150764,
            "unit": "ns/iter",
            "extra": "iterations: 228682\ncpu: 3037.6949344504596 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 509.38039112035796,
            "unit": "ns/iter",
            "extra": "iterations: 1377172\ncpu: 509.33699494325975 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1741.4583511023213,
            "unit": "ns/iter",
            "extra": "iterations: 403324\ncpu: 1741.2109767829188 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3786.3996301122957,
            "unit": "ns/iter",
            "extra": "iterations: 184921\ncpu: 3786.03424164916 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 6867.100369961041,
            "unit": "ns/iter",
            "extra": "iterations: 104065\ncpu: 6866.185422572407 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 10728.036199923848,
            "unit": "ns/iter",
            "extra": "iterations: 65525\ncpu: 10727.50617321633 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1651.9886747055782,
            "unit": "ns/iter",
            "extra": "iterations: 425596\ncpu: 1651.6869918890168 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1645.8406786505013,
            "unit": "ns/iter",
            "extra": "iterations: 425963\ncpu: 1645.7733559018045 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 569.8312344681786,
            "unit": "ns/iter",
            "extra": "iterations: 1228124\ncpu: 569.7783440434367 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 531.9830710178231,
            "unit": "ns/iter",
            "extra": "iterations: 1315909\ncpu: 531.9149720839329 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2560.483950382822,
            "unit": "ns/iter",
            "extra": "iterations: 273776\ncpu: 2560.336757056859 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 403.8755566330201,
            "unit": "ns/iter",
            "extra": "iterations: 1724206\ncpu: 403.8296050471904 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 535.9360495419908,
            "unit": "ns/iter",
            "extra": "iterations: 1308466\ncpu: 535.9182623010481 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1892.001752132679,
            "unit": "ns/iter",
            "extra": "iterations: 369835\ncpu: 1891.8198169453942 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 288.51618006302476,
            "unit": "ns/iter",
            "extra": "iterations: 2431171\ncpu: 288.4930965366074 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 2037.6506276881576,
            "unit": "ns/iter",
            "extra": "iterations: 343642\ncpu: 2037.4307855267923 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 3261.7081426797017,
            "unit": "ns/iter",
            "extra": "iterations: 214831\ncpu: 3261.5377855151282 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 2948.049181430999,
            "unit": "ns/iter",
            "extra": "iterations: 237793\ncpu: 2947.596203420629 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 45.92622427940698,
            "unit": "ns/iter",
            "extra": "iterations: 15262284\ncpu: 45.92143535004307 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 994.154654298563,
            "unit": "ns/iter",
            "extra": "iterations: 704177\ncpu: 993.9766564372342 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 1908.8478228879464,
            "unit": "ns/iter",
            "extra": "iterations: 366954\ncpu: 1908.7466875957234 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 2167.199281544719,
            "unit": "ns/iter",
            "extra": "iterations: 322915\ncpu: 2166.9884241983286 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 8019.015657189875,
            "unit": "ns/iter",
            "extra": "iterations: 87372\ncpu: 8018.61559767432 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 55.798834219981075,
            "unit": "ns/iter",
            "extra": "iterations: 12767932\ncpu: 55.79575854570682 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 360.8592881205542,
            "unit": "ns/iter",
            "extra": "iterations: 1937491\ncpu: 360.84641373817925 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 219.46006603624852,
            "unit": "ns/iter",
            "extra": "iterations: 3183706\ncpu: 219.4554613397077 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 233.53512501637368,
            "unit": "ns/iter",
            "extra": "iterations: 2992568\ncpu: 233.5110814524517 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 21.818787229049356,
            "unit": "ns/iter",
            "extra": "iterations: 31980235\ncpu: 21.817921162868384 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 323.40036408126815,
            "unit": "ns/iter",
            "extra": "iterations: 2154464\ncpu: 323.36879567261093 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1568.0754146628315,
            "unit": "ns/iter",
            "extra": "iterations: 445603\ncpu: 1567.9457611371474 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 951.5331445768537,
            "unit": "ns/iter",
            "extra": "iterations: 735339\ncpu: 951.3911012471856 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 974.1894931488413,
            "unit": "ns/iter",
            "extra": "iterations: 718712\ncpu: 974.1634688164363 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 165.36710853449367,
            "unit": "ns/iter",
            "extra": "iterations: 4240182\ncpu: 165.34411046506858 ns\nthreads: 1"
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
          "id": "614f48b0b6f19ba5e08344bb0c7711bef46bdc31",
          "message": "ci: stop failing main on benchmark alerts (#16)\n\nHosted runners mix CPU generations (observed: identical code measured\n2.5x slower across two consecutive runs, each internally reproducible\nto <0.1%). Cross-run gating on such hosts is a coin flip, not signal:\nthe benchmark action itself pushed the slow data, then failed the run\nagainst the fast-machine baseline.\n\nKeep the dashboard and alert comments (directional signal), raise the\nthreshold to 300%, and stop blocking main. Revisit with a self-hosted\nor pinned-hardware runner if per-commit gating is ever needed.",
          "timestamp": "2026-08-19T00:53:44+08:00",
          "tree_id": "2c9746547c08726ab518e8461f33408cc342cfd7",
          "url": "https://github.com/sentomk/texere/commit/614f48b0b6f19ba5e08344bb0c7711bef46bdc31"
        },
        "date": 1787072218409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_Length_ASCII",
            "value": 20321.461098300268,
            "unit": "ns/iter",
            "extra": "iterations: 35127\ncpu: 20307.283058615878 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_CJK",
            "value": 24081.264180399216,
            "unit": "ns/iter",
            "extra": "iterations: 28825\ncpu: 24077.562220294883 ns\nthreads: 1"
          },
          {
            "name": "BM_Length_Emoji_ZWJ",
            "value": 4815.053931871108,
            "unit": "ns/iter",
            "extra": "iterations: 141790\ncpu: 4814.393737217012 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Middle_CJK",
            "value": 10854.893335986197,
            "unit": "ns/iter",
            "extra": "iterations: 65336\ncpu: 10853.736102608054 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeIteration_CJK",
            "value": 21287.96839220482,
            "unit": "ns/iter",
            "extra": "iterations: 32840\ncpu: 21286.12883678442 ns\nthreads: 1"
          },
          {
            "name": "BM_CodepointIteration_CJK",
            "value": 1771.4283949962667,
            "unit": "ns/iter",
            "extra": "iterations: 395943\ncpu: 1771.2601207749597 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_ASCII",
            "value": 52.16251644000176,
            "unit": "ns/iter",
            "extra": "iterations: 13517334\ncpu: 52.16044650520587 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8Lossy_WithInvalidBytes",
            "value": 168.28156864662188,
            "unit": "ns/iter",
            "extra": "iterations: 4172922\ncpu: 168.25769760374143 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_Begin_ASCII",
            "value": 21.922876560790005,
            "unit": "ns/iter",
            "extra": "iterations: 31941755\ncpu: 21.92154069179982 ns\nthreads: 1"
          },
          {
            "name": "BM_GraphemeAt_End_ASCII",
            "value": 18000.834083369704,
            "unit": "ns/iter",
            "extra": "iterations: 38887\ncpu: 17998.540411962873 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdString",
            "value": 23.94850588410985,
            "unit": "ns/iter",
            "extra": "iterations: 29210619\ncpu: 23.94669678174225 ns\nthreads: 1"
          },
          {
            "name": "BM_ToStdStringView",
            "value": 0.5050554521109873,
            "unit": "ns/iter",
            "extra": "iterations: 1380479005\ncpu: 0.5050063003312378 ns\nthreads: 1"
          },
          {
            "name": "BM_ByteIteration_CJK",
            "value": 541.6158712309228,
            "unit": "ns/iter",
            "extra": "iterations: 1289440\ncpu: 541.5668305621048 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_ASCII",
            "value": 2291.338911887246,
            "unit": "ns/iter",
            "extra": "iterations: 305336\ncpu: 2291.164792228889 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_NFD_to_NFC",
            "value": 15845.45637659816,
            "unit": "ns/iter",
            "extra": "iterations: 44185\ncpu: 15844.503292972717 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFC_CJK",
            "value": 5847.565020514413,
            "unit": "ns/iter",
            "extra": "iterations: 119916\ncpu: 5847.2970746188985 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_ASCII",
            "value": 1589.891813375702,
            "unit": "ns/iter",
            "extra": "iterations: 441293\ncpu: 1589.686040793756 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFD_NFC_to_NFD",
            "value": 14435.948020874337,
            "unit": "ns/iter",
            "extra": "iterations: 48481\ncpu: 14434.139353561173 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_ASCII",
            "value": 2949.7421814313593,
            "unit": "ns/iter",
            "extra": "iterations: 236872\ncpu: 2949.381484514854 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKC_Mixed",
            "value": 5359.583338423939,
            "unit": "ns/iter",
            "extra": "iterations: 130960\ncpu: 5358.509460904077 ns\nthreads: 1"
          },
          {
            "name": "BM_Normalize_NFKD_ASCII",
            "value": 2952.887109957602,
            "unit": "ns/iter",
            "extra": "iterations: 237346\ncpu: 2952.3892671458584 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFC",
            "value": 9754.844569914978,
            "unit": "ns/iter",
            "extra": "iterations: 71730\ncpu: 9753.373246898112 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_Equal_NFD_to_NFC",
            "value": 21113.00944669365,
            "unit": "ns/iter",
            "extra": "iterations: 33345\ncpu: 21111.13189383714 ns\nthreads: 1"
          },
          {
            "name": "BM_EqualsNormalized_NotEqual",
            "value": 7407.1111425339495,
            "unit": "ns/iter",
            "extra": "iterations: 95472\ncpu: 7406.683666415279 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_ASCII",
            "value": 23.87515965498809,
            "unit": "ns/iter",
            "extra": "iterations: 29222388\ncpu: 23.874238340822828 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_Normalize_NFC_NFD_to_NFC",
            "value": 84.47552164618972,
            "unit": "ns/iter",
            "extra": "iterations: 8284830\ncpu: 84.4637513382896 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_EqualsNormalized_Equal_NFC",
            "value": 25.690413088626475,
            "unit": "ns/iter",
            "extra": "iterations: 27206583\ncpu: 25.685853971445063 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_Lower",
            "value": 1260.9237589490574,
            "unit": "ns/iter",
            "extra": "iterations: 550058\ncpu: 1260.7660737594956 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToUpper_ASCII_AlreadyUpper",
            "value": 1186.143339034518,
            "unit": "ns/iter",
            "extra": "iterations: 589937\ncpu: 1185.9887021834488 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToLower_ASCII_Upper",
            "value": 1262.1427543580842,
            "unit": "ns/iter",
            "extra": "iterations: 553167\ncpu: 1262.013232893502 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_Lower",
            "value": 1656.6623867641995,
            "unit": "ns/iter",
            "extra": "iterations: 422128\ncpu: 1656.4728944775002 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_ASCII_AlreadyUpper",
            "value": 1656.3843854567097,
            "unit": "ns/iter",
            "extra": "iterations: 422875\ncpu: 1656.3314501921404 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_CJK",
            "value": 4717.004673432118,
            "unit": "ns/iter",
            "extra": "iterations: 148499\ncpu: 4716.409699728622 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Mixed",
            "value": 3236.1510034748576,
            "unit": "ns/iter",
            "extra": "iterations: 216697\ncpu: 3235.724057093543 ns\nthreads: 1"
          },
          {
            "name": "BM_ToUpper_Eszett",
            "value": 569.1267504602406,
            "unit": "ns/iter",
            "extra": "iterations: 1228177\ncpu: 569.0894634893814 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_ASCII_Upper",
            "value": 1911.0468508960366,
            "unit": "ns/iter",
            "extra": "iterations: 367549\ncpu: 1911.0183240873935 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLower_CJK",
            "value": 3881.925328332294,
            "unit": "ns/iter",
            "extra": "iterations: 180229\ncpu: 3881.6016623295864 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_ASCII_Lower",
            "value": 7076.028436641295,
            "unit": "ns/iter",
            "extra": "iterations: 98992\ncpu: 7075.491403345671 ns\nthreads: 1"
          },
          {
            "name": "BM_ToTitle_Mixed",
            "value": 12105.540993520397,
            "unit": "ns/iter",
            "extra": "iterations: 57875\ncpu: 12103.877425485885 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Lower",
            "value": 1697.9979528376489,
            "unit": "ns/iter",
            "extra": "iterations: 412278\ncpu: 1697.6799853496916 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_ASCII_Mixed",
            "value": 1699.5398600382518,
            "unit": "ns/iter",
            "extra": "iterations: 412970\ncpu: 1699.2589752282304 ns\nthreads: 1"
          },
          {
            "name": "BM_CaseFold_Eszett",
            "value": 603.9016673994928,
            "unit": "ns/iter",
            "extra": "iterations: 1159890\ncpu: 603.7757468380618 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_ASCII",
            "value": 579.8755991016571,
            "unit": "ns/iter",
            "extra": "iterations: 1215570\ncpu: 579.8583972950945 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_CJK",
            "value": 2523.4711349271365,
            "unit": "ns/iter",
            "extra": "iterations: 277498\ncpu: 2523.237951264513 ns\nthreads: 1"
          },
          {
            "name": "BM_ToWString_Emoji",
            "value": 398.06243757380287,
            "unit": "ns/iter",
            "extra": "iterations: 1758076\ncpu: 398.04102154855735 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_ASCII",
            "value": 542.3695471908977,
            "unit": "ns/iter",
            "extra": "iterations: 1293989\ncpu: 542.3190653088969 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_CJK",
            "value": 1716.902403052844,
            "unit": "ns/iter",
            "extra": "iterations: 410894\ncpu: 1716.6740984292865 ns\nthreads: 1"
          },
          {
            "name": "BM_FromWString_Emoji",
            "value": 277.6126552232805,
            "unit": "ns/iter",
            "extra": "iterations: 2524428\ncpu: 277.5602148288637 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_ASCII",
            "value": 1251.9034398108456,
            "unit": "ns/iter",
            "extra": "iterations: 561339\ncpu: 1249.5994381291857 ns\nthreads: 1"
          },
          {
            "name": "BM_FromLatin1_FullLatin1",
            "value": 1883.9087127763419,
            "unit": "ns/iter",
            "extra": "iterations: 371202\ncpu: 1883.7056589134722 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_ASCII",
            "value": 1799.9310984395624,
            "unit": "ns/iter",
            "extra": "iterations: 391428\ncpu: 1799.7972883902155 ns\nthreads: 1"
          },
          {
            "name": "BM_ToLatin1_CJK_Fails",
            "value": 44.62411697672063,
            "unit": "ns/iter",
            "extra": "iterations: 15709382\ncpu: 44.61829064949837 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_ASCII",
            "value": 1025.283036316312,
            "unit": "ns/iter",
            "extra": "iterations: 686661\ncpu: 1025.1193558393447 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_ToWString_CJK",
            "value": 2149.8690103103227,
            "unit": "ns/iter",
            "extra": "iterations: 325789\ncpu: 2149.660706776468 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_ASCII",
            "value": 1376.9509420352676,
            "unit": "ns/iter",
            "extra": "iterations: 510172\ncpu: 1376.8143371255294 ns\nthreads: 1"
          },
          {
            "name": "BM_Naive_FromWString_CJK",
            "value": 4221.344447653793,
            "unit": "ns/iter",
            "extra": "iterations: 166182\ncpu: 4220.873963485814 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_ASCII",
            "value": 62.17120574033161,
            "unit": "ns/iter",
            "extra": "iterations: 11287986\ncpu: 62.16636634737142 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_CJK",
            "value": 357.32553857813815,
            "unit": "ns/iter",
            "extra": "iterations: 1958026\ncpu: 357.30927015269356 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Mixed",
            "value": 231.75906412767807,
            "unit": "ns/iter",
            "extra": "iterations: 3026353\ncpu: 231.741946825106 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Emoji",
            "value": 250.86098379809715,
            "unit": "ns/iter",
            "extra": "iterations: 2844913\ncpu: 250.84610285094823 ns\nthreads: 1"
          },
          {
            "name": "BM_FromUtf8_Invalid",
            "value": 23.234504656851666,
            "unit": "ns/iter",
            "extra": "iterations: 30151704\ncpu: 23.231750450986077 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_ASCII",
            "value": 366.2801927024237,
            "unit": "ns/iter",
            "extra": "iterations: 1907812\ncpu: 366.26158028149337 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_CJK",
            "value": 1769.4943117653193,
            "unit": "ns/iter",
            "extra": "iterations: 395817\ncpu: 1769.31660085343 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Mixed",
            "value": 1117.6716936577234,
            "unit": "ns/iter",
            "extra": "iterations: 656390\ncpu: 1117.61563552156 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Emoji",
            "value": 1065.3611836910782,
            "unit": "ns/iter",
            "extra": "iterations: 654833\ncpu: 1065.2278580951229 ns\nthreads: 1"
          },
          {
            "name": "BM_NaiveValidate_Invalid",
            "value": 186.50114042060974,
            "unit": "ns/iter",
            "extra": "iterations: 3764839\ncpu: 186.48839591812572 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}