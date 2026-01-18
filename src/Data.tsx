const dataQuizTemplates = {
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
                        ["?"," か"],
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