const dataQuizTemplates = {
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
                {vietnamese: "Tôi thức dậy vào lúc 5h30", japanese: "わたしはごじはんにおきます"},
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