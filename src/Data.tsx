const dataQuizTemplates = {
    quiz3: {
        title: "Bài test 15",
        description: "Các từ vựng địa điểm",
        exercises: {
            exercise1: [
                {
                    question: "Từ 'いえ' có nghĩa là gì?",
                    options: ["Trường học", "Nhà", "Công ty", "Bệnh viện"],
                    correct: 1
                },
                {
                    question: "Từ 'がっこう' có nghĩa là gì?",
                    options: ["Lớp học", "Thư viện", "Trường học", "Công ty"],
                    correct: 2
                },
                {
                    question: "Từ 'きょうしつ' có nghĩa là gì?",
                    options: ["Trường học", "Công viên", "Công ty", "Lớp học"],
                    correct: 3
                },
                {
                    question: "Từ 'としょかん' có nghĩa là gì?",
                    options: ["Thư viện", "Nhà ga", "Siêu thị", "Nhà hàng"],
                    correct: 0
                },
                {
                    question: "Từ 'かいしゃ' có nghĩa là gì?",
                    options: ["Bệnh viện", "Ngân hàng", "Nhà ga", "Công ty"],
                    correct: 3
                },
                {
                    question: "Từ 'びょういん' có nghĩa là gì?",
                    options: ["Công ty", "Bệnh viện", "Ngân hàng", "Nhà hàng"],
                    correct: 1
                },
                {
                    question: 'Từ \'えき\' có nghĩa là gì?',
                    options: ["Nhà ga", "Công viên", "Nhà hàng", "Siêu thị"],
                    correct: 0
                },
                {
                    question: "Từ 'ぎんこう' có nghĩa là gì?",
                    options: ["Siêu thị", "Nhà ga", "Ngân hàng", "Công viên"],
                    correct: 2
                },
                {
                    question: "Từ 'スーパー' có nghĩa là gì?",
                    options: ["Nhà hàng", "Công viên", "Siêu thị", "Nhà ga"],
                    correct: 2
                },
                {
                    question: "Từ 'こうえん' có nghĩa là gì?",
                    options: ["Siêu thị", "Nhà hàng", "Nhà ga", "Công viên"],
                    correct: 3
                },
                {
                    question: "Từ 'レストラン' có nghĩa là gì?",
                    options: ["Công viên", "Nhà hàng", "Siêu thị", "Nhà ga"],
                    correct: 1
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Cây'?",
                    options: ["くさ", "かさ", "き", "こえ"],
                    correct: 2
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Cỏ'?",
                    options: ["き", "くさ", "かさ", "あし"],
                    correct: 1
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Cái ô'?",
                    options: ["こえ", "かお", "き", "かさ"],
                    correct: 3
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Giọng nói'?",
                    options: ["こえ", "あし", "かお", "いす"],
                    correct: 0
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Cái chân'?",
                    options: ["かお", "いす", "あし", "すいか"],
                    correct: 2
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Khuôn mặt'?",
                    options: ["あし", "かお", "うし", "しお"],
                    correct: 1
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Cái ghế'?",
                    options: ["すいか", "うし", "いす", "しお"],
                    correct: 2
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Dưa hấu'?",
                    options: ["いす", "しお", "うし", "すいか"],
                    correct: 3
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Muối'?",
                    options: ["しお", "すいか", "うし", "かお"],
                    correct: 0
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Con bò'?",
                    options: ["すいか", "うし", "しお", "いす"],
                    correct: 1
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Thế giới'?",
                    options: ["おかし", "あお", "あか", "せかい"],
                    correct: 3
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Kẹo bánh'?",
                    options: ["あお", "せかい", "おかし", "あか"],
                    correct: 2
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Màu xanh'?",
                    options: ["あか", "せかい", "あお", "おかし"],
                    correct: 2
                },
                {
                    question: "Từ tiếng Nhật nào có nghĩa là 'Màu đỏ'?",
                    options: ["あお", "あか", "おかし", "せかい"],
                    correct: 1
                }
            ],
            exercise2: {
                "columnA": [
                    { "id": 1, "text": "かぞくは　なんにんですか" },
                    { "id": 2, "text": "ここは　がっこうですか" },
                    { "id": 3, "text": "Lanさんは　どこですか" },
                    { "id": 4, "text": "スーパーは　どこですか" },
                    { "id": 5, "text": "おなまえは　なんですか" },
                    { "id": 6, "text": "おしごとは　なんですか" },
                    { "id": 7, "text": "あなたは　なんさいですか" },
                    { "id": 8, "text": "なんじに　ねますか" },
                    { "id": 9, "text": "なんじに　おきますか" }
                ],
                "columnB": [
                    { "id": 1, "text": "じゅうじに　ねます" },
                    { "id": 2, "text": "いいえ、ぎんこうです" },
                    { "id": 3, "text": "ちゅうがくせいです" },
                    { "id": 4, "text": "じゅうにさいです" },
                    { "id": 5, "text": "あそこです" },
                    { "id": 6, "text": "ごじに　おきます" },
                    { "id": 7, "text": "ぎんこうです" },
                    { "id": 8, "text": "かぞくは　ごにんです" },
                    { "id": 9, "text": "Lanです" }
                ],
                "correct": [
                    [6, 3], [3, 4], [0, 7], [1, 1],
                    [7, 0], [5, 2], [8, 5], [4, 8], [2, 6]
                ]
            },
            exercise3: [
                {
                    words: [
                        "かぞく",
                        "すいか",
                        "せかい"
                    ],
                    correctAnswer: "か",
                    hint: "có một từ vựng liên quan tới trái cây"
                },
                {
                    words: [
                        "スーパー",
                        "パパイヤ",
                        "パイナップル "
                    ],
                    correctAnswer: "パ",
                    hint: "Có một từ là tên một loại trái cây"
                },
                {
                    words: [
                        "こうこうせい",
                        "ぎんこう",
                        "たいこ"
                    ],
                    correctAnswer: "こ",
                    hint: "Có một từ chỉ địa điểm"
                },
                {
                    words: [
                        "ひと",
                        "せいと",
                        "としょかん"
                    ],
                    correctAnswer: "と",
                    hint: "Có một từ liên quan tới học sinh"
                }
                ,
                {
                    words: [
                        "レストラン",
                        "ラオス",
                        "フランス"
                    ],
                    correctAnswer: "ス",
                    hint: "Có một từ liên quan đến quốc gia"
                }
            ],
            exercise4: [
                {
                    words: [
                        ["が ", " っ ", " こ"," ?"],
                        ["? "," ?"],
                        ["? "," ゃ"," し"," ん"]
                    ],
                    correctSequence: ["がっこう", "うし", "しゃしん"]
                },
                {
                    words: [
                        ["か "," ?"],
                        ["? "," っ "," ?"],
                        ["?"," しゅ"]
                    ],
                    correctSequence: ["かさ", "さっか", "かしゅ"]
                },
                {
                    words: [
                        ["きょう "," し"," ?"],
                        ["?"," く"," "],
                        ["? "," き"],
                    ],
                    correctSequence: ["きょうしつ", "つくえ", "えき"]
                },
                {
                    words: [
                        ["が ", " ?"],
                        ["?"," ?"],
                        ["? "," お"," い"],
                    ],
                    correctSequence: ["がか", "かお", "おおい"]
                },
                {
                    words: [
                        ["い ", " ?"],
                        ["?"," い"," よ"," う"," ?"],
                        ["? "," ょ"," う"," い"," ん"],
                    ],
                    correctSequence: ["いす", "すいようび", "びょういん"]
                }
            ],
            exercise5: [
                {vietnamese: "Ở đây là công viên", japanese: "ここはこうえんです"},
                {vietnamese: "Tôi thức dậy vào lúc 10h20", japanese: "わたしはじゅうじにじゅっぷんにおきます"},
                {vietnamese: "Tôi ngủ lúc 10h15", japanese: "わたしはじゅうじじゅうごふんにねます"},
                {vietnamese: "gia đình có 4 người", japanese: "かぞくはよにんです"},
                {vietnamese: "lớp học có bao nhiêu người", japanese: "クラスはなんにんですか"},
                {vietnamese: "Bạn Lan ở đâu", japanese: "Lanさんはどこですか"},
            ],
            exercise6: [
                {
                    sentence: "クラスは　_____ ですか。",
                    options: ["なにん", "なんひと", "なにじん", "なんにん"],
                    correct: 3
                },
                {
                    sentence: "Lanさんは _____ です。",
                    options: ["ちゅうがくせい", "さくら", "かぞく", "アメリカ"],
                    correct: 0
                },
                {
                    sentence: "Lanさんは _____ ねますか。",
                    options: ["なにじ", "なんようび", "どこ", "なんじ"],
                    correct: 2
                },
                {
                    sentence: "おしごとは _____ ですか。",
                    options: ["なに", "なん", "なにじん", "なんじ"],
                    correct: 1
                },
                {
                    sentence: "Lanさんは _____ ですか。",
                    options: ["なにじん", "なん", "にほん", "なんようび"],
                    correct: 0
                }
            ]
        }
    },
    quiz2: {
        title: "Bài test 14",
        description: "Các từ vựng về đồ dùng học tập",
        exercises: {
            exercise1: [
                {
                    question: "Từ 'タイ' có nghĩa là gì?",
                    options: ["Lào", "Thái Lan", "Campuchia", "Mỹ"],
                    correct: 1
                },
                {
                    question: "Từ 'ラオス' có nghĩa là gì?",
                    options: ["Thái Lan", "Pháp", "Lào", "Campuchia"],
                    correct: 2
                },
                {
                    question: "Từ 'カンボジア' có nghĩa là gì?",
                    options: ["Mỹ", "Thái Lan", "Lào", "Campuchia"],
                    correct: 3
                },
                {
                    question: "Từ 'アメリカ' có nghĩa là gì?",
                    options: ["Mỹ", "Pháp", "Thái Lan", "Lào"],
                    correct: 0
                },
                {
                    question: "Từ 'フランス' có nghĩa là gì?",
                    options: ["Campuchia", "Mỹ", "Pháp", "Thái Lan"],
                    correct: 2
                },
                {
                    question: "Từ 'かぞく' có nghĩa là gì?",
                    options: ["Lớp học", "Gia đình", "Học sinh tiểu học", "Học sinh trung học cơ sở"],
                    correct: 1
                },
                {
                    question: "Từ 'クラス' có nghĩa là gì?",
                    options: ["Gia đình", "Học sinh tiểu học", "Lớp học", "Học sinh trung học phổ thông"],
                    correct: 2
                },
                {
                    question: "Từ 'しょうがくせい' có nghĩa là gì?",
                    options: ["Học sinh tiểu học", "Học sinh trung học cơ sở", "Học sinh trung học phổ thông", "Lớp học"],
                    correct: 0
                },
                {
                    question: "Từ 'ちゅうがくせい' có nghĩa là gì?",
                    options: ["Học sinh tiểu học", "Gia đình", "Học sinh trung học cơ sở", "Học sinh trung học phổ thông"],
                    correct: 2
                },
                {
                    question: "Từ 'こうこうせい' có nghĩa là gì?",
                    options: ["Học sinh trung học cơ sở", "Học sinh trung học phổ thông", "Học sinh tiểu học", "Lớp học"],
                    correct: 1
                },
                {
                    question: "Từ 'おきます' có nghĩa là gì?",
                    options: ["Ngủ", "Thức dậy", "Gia đình", "Lớp học"],
                    correct: 1
                },
                {
                    question: "Từ 'ねます' có nghĩa là gì?",
                    options: ["Thức dậy", "Lớp học", "Ngủ", "Gia đình"],
                    correct: 2
                }
            ],
            exercise2: {
                columnA: [
                    {id: 1, text: "あなたは　なんじに　ねますか"},
                    {id: 2, text: "ろくじ　おきますか"},
                    {id: 3, text: "おしごとは　なんですか"},
                    {id: 4, text: "あなたも　じゅうにさいですか"},
                    {id: 5, text: "おなまえは　なんですか"},
                    {id: 6, text: "なにが　すきですか"}
                ],
                columnB: [
                    {id: 1, text: "はい、そうです"},
                    {id: 2, text: "わたしは　Lanです"},
                    {id: 3, text: "くじはんに　ねます"},
                    {id: 4, text: "ほんと　まんがが　すきです"},
                    {id: 5, text: "いいえ、ごじに　おきます"},
                    {id: 6, text: "わたしは　ちゅうがくせいです"}
                ],
                correct: [
                    [0, 2],  // あなたはなんじにねますか → くじはんにねます
                    [1, 4],  // ろくじおきますか → いいえ、ごじにおきます
                    [2, 5],  // おしごとはなんですか → わたしはちゅうがくせいです
                    [3, 0],  // あなたもじゅうにさいですか → はい、そうです
                    [4, 1],  // おなまえはなんですか → わたしはLanです
                    [5, 3]   // なにがすきですか → ほんとまんががすきです
                ]
            },
            exercise3: [
                {
                    words: [
                        "カフェ",
                        "ハイフォン",
                        "フォー"
                    ],
                    correctAnswer: "フ",
                    hint: "có một từ vựng liên quan tới món ăn"
                },
                {
                    words: [
                        "ジュース",
                        "マンゴスチン",
                        "アイスクリーム "
                    ],
                    correctAnswer: "ス",
                    hint: "Có một từ là đồ uống"
                },
                {
                    words: [
                        "かいしゃいん",
                        "いしゃ",
                        "かしゅ"
                    ],
                    correctAnswer: "し",
                    hint: "Có một từ chỉ nghề nghiệp"
                },
                {
                    words: [
                        "コーヒー",
                        "ビール ",
                        "ヨーグルト "
                    ],
                    correctAnswer: "ー",
                    hint: "Có một từ liên quan tới đồ uống có cồn"
                }
                ,
                {
                    words: [
                        "ひる",
                        "さる",
                        "よる"
                    ],
                    correctAnswer: "る",
                    hint: "Có một từ liên quan đến thời gian trong ngày"
                }
            ],
            exercise4: [
                {
                    words: [
                        ["や ", " す ", " ?"],
                        ["? "," ?"],
                        ["? "," ち"],
                    ],
                    correctSequence: ["やすみ", "みみ", "みち"]
                },
                {
                    words: [
                        ["く ", " す", " り"," ?"],
                        ["? ","お"," ?"],
                        ["?"," す", " み"]
                    ],
                    correctSequence: ["くすりや", "やおや", "やすみ"]
                },
                {
                    words: [
                        ["し "," ?"],
                        ["?"," ?"],
                        ["? "," ち"],
                    ],
                    correctSequence: ["しろ", "ろく", "くち"]
                },
                {
                    words: [
                        ["す "," い", " ?"],
                        ["?"," ぞ"," ?"],
                        ["? "," ろ"],
                    ],
                    correctSequence: ["すいか", "かぞく", "くろ"]
                },
                {
                    words: [
                        ["か ", " ?"],
                        ["?"," く"," ?"],
                        ["? "," ん"],
                    ],
                    correctSequence: ["かさ", "さくら", "らん"]
                }
            ],
            exercise5: [
                {vietnamese: "Tôi thích bánh kem", japanese: "わたしはケーキがすきです"},
                {vietnamese: "Tôi thức dậy vào lúc 5h20", japanese: "わたしはごじにじゅっぷんにおきます"},
                {vietnamese: "Tôi ngủ lúc 10h15", japanese: "わたしはじゅうじじゅうごふんにねます"},
                {vietnamese: "đây là kem", japanese: "これはアイスクリームです"},
                {vietnamese: "Tôi cũng không phải người Mỹ", japanese: "わたしもアメリカじんではありません"}
            ],
            exercise6: [
                {
                    sentence: "Lanさんは　_____ ですか。",
                    options: ["にじ", "なんじ", "なにじん", "なんじん"],
                    correct: 2
                },
                {
                    sentence: "わたしは _____ です。",
                    options: ["ちゅうごく", "さくら", "かぞく", "にほんじん"],
                    correct: 3
                },
                {
                    sentence: "あなたは _____ ねますか。",
                    options: ["なにじ", "なんようび", "なんさい", "なんじ"],
                    correct: 3
                },
                {
                    sentence: "おしごとは _____ ですか。",
                    options: ["なに", "なん", "なにじん", "なんじ"],
                    correct: 1
                },
                {
                    sentence: "おなまえは _____ ですか。",
                    options: ["なに", "なん", "にほん", "なんようび"],
                    correct: 1
                }
            ]
        }
    },
    quiz1: {
        title: "Bài test 13",
        description: "Các từ vựng về đồ dùng học tập",
        exercises: {
            exercise1: [
                {
                    question: "Từ 'さくら' có nghĩa là gì?",
                    options: ["hoa anh đào", "con kiến", "con khỉ", "buổi trưa"],
                    correct: 0
                },
                {
                    question: "Từ 'あり' có nghĩa là gì?",
                    options: ["bạn trai", "con kiến", "tiệm thuốc", "hoa anh đào"],
                    correct: 1
                },
                {
                    question: "Từ 'さる' có nghĩa là gì?",
                    options: ["buổi trưa", "hoa anh đào", "con khỉ", "con kiến"],
                    correct: 2
                },
                {
                    question: "Từ 'かれ' có nghĩa là gì?",
                    options: ["con kiến", "tiệm thuốc", "hoa anh đào", "bạn trai"],
                    correct: 3
                },
                {
                    question: "Từ 'ひる' có nghĩa là gì?",
                    options: ["buổi trưa", "con khỉ", "tiệm thuốc", "bạn trai"],
                    correct: 0
                },
                {
                    question: "Từ 'くすりや' có nghĩa là gì?",
                    options: ["con kiến", "tiệm thuốc", "hoa anh đào", "buổi trưa"],
                    correct: 1
                },
                {
                    question: "Từ 'màu đen' trong tiếng Nhật là gì?",
                    options: ["くろ", "かわ", "わたし", "にほん"],
                    correct: 0
                },
                {
                    question: "Từ 'đơn giản' trong tiếng Nhật là gì?",
                    options: ["やおや", "かんたん", "くろ", "ベトナム"],
                    correct: 1
                },
                {
                    question: "Từ 'con sông' trong tiếng Nhật là gì?",
                    options: ["わたし", "にほん", "かわ", "ちゅうごく"],
                    correct: 2
                },
                {
                    question: "Từ 'tôi' trong tiếng Nhật là gì?",
                    options: ["くろ", "かんたん", "やおや", "わたし"],
                    correct: 3
                },
                {
                    question: "Từ 'tiệm rau' trong tiếng Nhật là gì?",
                    options: ["やおや", "ベトナム", "かわ", "にほん"],
                    correct: 0
                },
                {
                    question: "Từ 'Nhật Bản' trong tiếng Nhật là gì?",
                    options: ["ちゅうごく", "にほん", "くろ", "わたし"],
                    correct: 1
                },
                {
                    question: "Từ 'Trung Quốc' trong tiếng Nhật là gì?",
                    options: ["かんたん", "やおや", "ちゅうごく", "ベトナム"],
                    correct: 2
                },
                {
                    question: "Từ 'Việt Nam' trong tiếng Nhật là gì?",
                    options: ["にほん", "かわ", "くろ", "ベトナム"],
                    correct: 3
                }
            ],
            exercise2: {
                columnA: [
                    {id: 1, text: "いま　なんじ　ですか"},
                    {id: 2, text: "せんせいは　なにじん　ですか？"},
                    {id: 3, text: "いま　にじ　ですか"},
                    {id: 4, text: "Lanさんも　ほんが　すき　ですか"},
                    {id: 5, text: "せんせいは　ベトナムじん　ですか。"}
                ],
                columnB: [
                    {id: 1, text: "いいえ、にほんじん　です"},
                    {id: 2, text: "いま　さんじ　です"},
                    {id: 3, text: "はい、そう　です"},
                    {id: 4, text: "にほんじん　です"},
                    {id: 5, text: "いいえ、いま　さんじ　です"}
                ],
                correct: [[0,1], [1,3], [2,4], [3,2], [4,0]]
            },
            exercise3: [
                {
                    words: [
                        "ぼうし",
                        "れんしゅう",
                        "じてんしゃ"
                    ],
                    correctAnswer: "し",
                    hint: "có một từ vựng liên quan tới phương tiện giao thông"
                },
                {
                    words: [
                        "えんぴつ",
                        "つくえ",
                        "えき"
                    ],
                    correctAnswer: "え",
                    hint: "Có một từ là đồ vật trong nhà"
                },
                {
                    words: [
                        "あし",
                        "むし",
                        "しろ"
                    ],
                    correctAnswer: "し",
                    hint: "Có một từ chỉ màu sắc"
                },
                {
                    words: [
                        "つき",
                        "き",
                        "にっき"
                    ],
                    correctAnswer: "き",
                    hint: "Có một từ liên quan tới ghi chép"
                }
                ,
                {
                    words: [
                        "らん",
                        "かんたん",
                        "ごはん"
                    ],
                    correctAnswer: "ん",
                    hint: "Có một từ liên quan đến hoa"
                }
            ],
            exercise4: [
                {
                    words: [
                        ["つ ", " く ", " ?"],
                        ["? "," ?"],
                        ["?"]
                    ],
                    correctSequence: ["つくえ", "えき", "き"]
                },
                {
                    words: [
                        ["ぶ ", " ?"],
                        ["? ","い"," ?"],
                        ["?"," え"]
                    ],
                    correctSequence: ["ぶた", "たいこ", "こえ"]
                },
                {
                    words: [
                        ["は "," ?"],
                        ["?"," ?"],
                        ["? "," わ"],
                    ],
                    correctSequence: ["はな", "なか", "かわ"]
                }
            ],
            exercise5: [
                {vietnamese: "Đây là quyển sách", japanese: "これはほんです"},
                {vietnamese: "Đó là cái gì", japanese: "それはなんですか"},
                {vietnamese: "Tôi 12 tuổi", japanese: "わたしはじゅうにさいです"},
                {vietnamese: "Tôi không phải người Trung Quốc", japanese: "わたしはちゅうごくじんではありません"},
                {vietnamese: "Bây giờ là 4 giờ", japanese: "いまよじです"}
            ],
            exercise6: [
                {
                    sentence: "いま _____ です。",
                    options: ["にじ", "げつようび", "ほん", "ごはん"],
                    correct: 0
                },
                {
                    sentence: "わたしは _____ です。",
                    options: ["き", "かようび", "いっさい", "にほん"],
                    correct: 2
                },
                {
                    sentence: "これは _____ ですか。",
                    options: ["なにじん", "なん", "いっさい", "なんじ"],
                    correct: 1
                }

            ]
        }
    }
};
export default  dataQuizTemplates;