import React, {useState, useEffect} from 'react';
import {Timer, Award, RefreshCw, Check, X} from 'lucide-react';

// ===== DATA COMMON - Clone và chỉnh sửa để tạo bài kiểm tra mới =====
const LEARNED_VOCABULARY = [
    'ほん', 'えんぴつ', 'けしゴム', 'つくえ', 'いす',
    'かばん', 'ノート', 'ペン', 'がっこう', 'せんせい',
    'がくせい', 'きょうしつ', 'とけい', 'まど', 'ドア'
];

const quizTemplates = {
    quiz1: {
        title: "Bài kiểm tra 1: Từ vựng cơ bản",
        description: "Các từ vựng về đồ dùng học tập",
        exercises: {
            exercise1: [
                {
                    question: "Từ 'ほん' có nghĩa là gì?",
                    options: ["Quyển sách", "Bút chì", "Cục tẩy", "Cặp sách"],
                    correct: 0
                },
                {
                    question: "Từ 'えんぴつ' có nghĩa là gì?",
                    options: ["Quyển sách", "Bút chì", "Cục tẩy", "Bàn học"],
                    correct: 1
                },
                {
                    question: "Từ 'がっこう' có nghĩa là gì?",
                    options: ["Giáo viên", "Học sinh", "Trường học", "Lớp học"],
                    correct: 2
                }
            ],
            exercise2: {
                columnA: [
                    {id: 1, text: "これは なんですか。"},
                    {id: 2, text: "それは ほんですか。"},
                    {id: 3, text: "あれは だれですか。"}
                ],
                columnB: [
                    {id: 1, text: "ほんです。"},
                    {id: 2, text: "いいえ、ノートです。"},
                    {id: 3, text: "せんせいです。"}
                ]
            },
            exercise3: [
                {
                    words: [
                        "ほん",
                        "ノート",
                        "かばん"
                    ],
                    correctAnswer: "ん",
                    hint: "Chữ cái này xuất hiện ở cuối nhiều từ tiếng Nhật"
                },
                {
                    words: [
                        "ねこ",
                        "いぬ",
                        "さかな"
                    ],
                    correctAnswer: "な",
                    hint: "Chữ cái trong bảng Hiragana, hàng 'な'"
                }
            ],
            exercise4: [
                {
                    words: [
                        ["T ", " e ", " ?"],
                        ["? ", " い ", " ?"],
                        ["? ", " 2 ", " 3"]
                    ],
                    correctSequence: ["Tet", "あいう", "123"]
                }
            ],
            exercise5: [
                {vietnamese: "Quyển sách", japanese: "ほん"},
                {vietnamese: "Bút chì", japanese: "えんぴつ"},
                {vietnamese: "Cục tẩy", japanese: "けしゴム"}
            ],
            exercise6: [
                {
                    sentence: "これは _____ です。",
                    options: ["ほん", "ほんが", "ほんを", "ほんに"],
                    correct: 0
                },
                {
                    sentence: "わたしは がくせい _____ 。",
                    options: ["が", "を", "です", "に"],
                    correct: 2
                }
            ]
        }
    },
    quiz2: {
        title: "Bài kiểm tra 2: Ngữ pháp cơ bản",
        description: "Luyện tập ngữ pháp và câu mẫu",
        exercises: {
            exercise1: [
                {
                    question: "Trợ từ nào dùng để chỉ chủ ngữ?",
                    options: ["を", "は", "に", "で"],
                    correct: 1
                },
                {
                    question: "'です' có nghĩa là gì?",
                    options: ["Là/Thì", "Có", "Không", "Làm"],
                    correct: 0
                }
            ],
            exercise2: {
                columnA: [
                    {id: 1, text: "ありがとう"},
                    {id: 2, text: "おはよう"}
                ],
                columnB: [
                    {id: 1, text: "ございます"},
                    {id: 2, text: "ございます"}
                ]
            },
            exercise3: [
                {
                    words: ["_んぴつ", "_す", "_ばん"],
                    correctLetter: "え",
                    hint: "Chữ cái trong bảng Hiragana, hàng 'あ'"
                }
            ],
            exercise4: [
                {words: ["えんぴつ", "つくえ", "えき"], sequence: ["えんぴつ", "つくえ", "えき"]}
            ],
            exercise5: [
                {vietnamese: "Trường học", japanese: "がっこう"},
                {vietnamese: "Giáo viên", japanese: "せんせい"}
            ],
            exercise6: [
                {
                    sentence: "せんせい _____ がっこうに います。",
                    options: ["は", "を", "が", "の"],
                    correct: 0
                }
            ]
        }
    }
};

// Component chính
export default function JapaneseQuizApp() {
    const [screen, setScreen] = useState('name'); // name, quiz, result
    const [studentName, setStudentName] = useState('');
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentExercise, setCurrentExercise] = useState(1);
    const [answers, setAnswers] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [results, setResults] = useState(null);
    const [selectedKey, setSelectedKey] = useState('');

    // Timer
    useEffect(() => {
        if (screen === 'quiz' && startTime) {
            const interval = setInterval(() => {
                setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [screen, startTime]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const startQuiz = (quizKey) => {
        setSelectedQuiz(quizKey);
        setCurrentExercise(1);
        setAnswers({});
        setStartTime(Date.now());
        setElapsedTime(0);
        setScreen('quiz');
    };

    const checkAllAnswered = () => {
        const quiz = quizTemplates[selectedQuiz];
        return [1, 2, 3, 4, 5, 6].every(ex => answers[`exercise${ex}`]);
    };

    const submitQuiz = () => {
        const quiz = quizTemplates[selectedQuiz];
        const exerciseResults = {};
        let totalCorrect = 0;
        let totalQuestions = 0;

        // Chấm bài 1
        const ex1Answers = answers.exercise1 || [];
        const ex1Data = quiz.exercises.exercise1;
        exerciseResults.exercise1 = ex1Data.map((q, i) => ({
            question: q.question,
            userAnswer: q.options[ex1Answers[i]],
            correctAnswer: q.options[q.correct],
            isCorrect: ex1Answers[i] === q.correct,
            explanation: ex1Answers[i] === q.correct ? "Chính xác!" : `Đáp án đúng là: ${q.options[q.correct]}`
        }));
        totalCorrect += exerciseResults.exercise1.filter(r => r.isCorrect).length;
        totalQuestions += ex1Data.length;

        // Chấm bài 2
        const ex2Answers = answers.exercise2 || [];
        exerciseResults.exercise2 = ex2Answers.map((pair, i) => ({
            columnA: quiz.exercises.exercise2.columnA[pair.a]?.text,
            columnB: quiz.exercises.exercise2.columnB[pair.b]?.text,
            isCorrect: pair.a === pair.b,
            explanation: pair.a === pair.b ? "Ghép đúng!" : "Ghép chưa đúng"
        }));
        totalCorrect += exerciseResults.exercise2.filter(r => r.isCorrect).length;
        totalQuestions += ex2Answers.length;

        // Chấm bài 3
        const ex3Answers = answers.exercise3 || [];
        const ex3Data = quiz.exercises.exercise3;
        exerciseResults.exercise3 = ex3Data.map((q, i) => {
            const userAnswer = ex3Answers[i] || '';
            const isCorrect = userAnswer === q.correctAnswer;
            return {
                words: q.words.join(', '),
                userAnswer: userAnswer,
                correctAnswer: q.correctAnswer,
                isCorrect,
                explanation: isCorrect ? "Đúng rồi!" : `Đáp án đúng là: ${q.correctAnswer}`
            };
        });
        totalCorrect += exerciseResults.exercise3.filter(r => r.isCorrect).length;
        totalQuestions += ex3Data.length;

        // Chấm bài 4 - CẬP NHẬT LẠI
        const ex4Answers = answers.exercise4 || [];
        const ex4Data = quiz.exercises.exercise4;
        exerciseResults.exercise4 = ex4Data.map((question, qIdx) => {
            const userAnswerObj = ex4Answers[qIdx] || {};
            const userWords = question.words.map((wordArray, wIdx) => {
                return wordArray.map((char, cIdx) => {
                    if (char === '?') {
                        return userAnswerObj[`${wIdx}-${cIdx}`] || '';
                    }
                    return char;
                }).join('');
            });

            const isCorrect = JSON.stringify(userWords) === JSON.stringify(question.correctSequence);
            return {
                correctSequence: question.correctSequence.join(' → '),
                userSequence: userWords.join(' → '),
                isCorrect,
                explanation: isCorrect ? "Nối đúng!" : `Thứ tự đúng: ${question.correctSequence.join(' → ')}`
            };
        });
        totalCorrect += exerciseResults.exercise4.filter(r => r.isCorrect).length;
        totalQuestions += ex4Data.length;

        // Chấm bài 5
        const ex5Answers = answers.exercise5 || [];
        const ex5Data = quiz.exercises.exercise5;
        exerciseResults.exercise5 = ex5Data.map((q, i) => ({
            vietnamese: q.vietnamese,
            userAnswer: ex5Answers[i],
            correctAnswer: q.japanese,
            isCorrect: ex5Answers[i] === q.japanese,
            explanation: ex5Answers[i] === q.japanese ? "Chính xác!" : `Đáp án đúng: ${q.japanese}`
        }));
        totalCorrect += exerciseResults.exercise5.filter(r => r.isCorrect).length;
        totalQuestions += ex5Data.length;

        // Chấm bài 6
        const ex6Answers = answers.exercise6 || [];
        const ex6Data = quiz.exercises.exercise6;
        exerciseResults.exercise6 = ex6Data.map((q, i) => ({
            sentence: q.sentence,
            userAnswer: q.options[ex6Answers[i]],
            correctAnswer: q.options[q.correct],
            isCorrect: ex6Answers[i] === q.correct,
            explanation: ex6Answers[i] === q.correct ? "Đúng!" : `Đáp án đúng: ${q.options[q.correct]}`
        }));
        totalCorrect += exerciseResults.exercise6.filter(r => r.isCorrect).length;
        totalQuestions += ex6Data.length;

        setResults({
            exerciseResults,
            totalCorrect,
            totalQuestions,
            percentage: Math.round((totalCorrect / totalQuestions) * 100),
            timeTaken: elapsedTime
        });
        setScreen('result');
    };

    const restart = () => {
        setStudentName('');
        setSelectedQuiz(null);
        setCurrentExercise(1);
        setAnswers({});
        setStartTime(null);
        setElapsedTime(0);
        setResults(null);
        setScreen('name');
    };

    // Screen 1: Nhập tên và chọn bài
    if (screen === 'name') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-4 border-yellow-300">
                        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Kiểm tra Tiếng Nhật
                        </h1>

                        <div className="mb-8">
                            <label className="block text-xl font-semibold text-purple-700 mb-3">
                                👤 Tên của bạn:
                            </label>
                            <input
                                type="text"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                className="w-full px-6 py-4 text-xl border-4 border-purple-300 rounded-2xl focus:outline-none focus:border-purple-500 transition"
                                placeholder="Nhập tên của bạn..."
                            />
                        </div>

                        {(
                            <div className="space-y-4 animate-fadeIn">
                                <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                                    ✨ Chọn bài kiểm tra ✨
                                </h2>
                                {/*{Object.keys(quizTemplates).map((key) => (*/}
                                {/*    <button*/}
                                {/*        key={key}*/}
                                {/*        onClick={() => startQuiz(key)}*/}
                                {/*        className="w-full bg-gradient-to-r from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400 text-purple-800 font-bold py-6 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition border-4 border-orange-400"*/}
                                {/*    >*/}
                                {/*        <div className="text-left">*/}
                                {/*            <div className="text-2xl mb-1">{quizTemplates[key].title}</div>*/}
                                {/*            <div className="text-sm opacity-80">{quizTemplates[key].description}</div>*/}
                                {/*        </div>*/}
                                {/*    </button>*/}
                                {/*))}*/}
                                <div className="w-full space-y-6">
                                    {/* Dropdown */}
                                    <select
                                        value={selectedKey}
                                        onChange={(e) => setSelectedKey(e.target.value)}
                                        className="w-full
            bg-gradient-to-r from-yellow-300 to-orange-300
            text-purple-800
            font-bold
            text-2xl
            py-6
            px-6
            rounded-2xl
            shadow-lg
            border-4 border-orange-400
            focus:outline-none focus:ring-4 focus:ring-orange-300
            cursor-pointer
        "
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="bg-yellow-100 text-purple-500 font-semibold"
                                        >
                                            -- Vui lòng chọn --
                                        </option>

                                        {Object.keys(quizTemplates).map((key) => (
                                            <option
                                                key={key}
                                                value={key}
                                                className="bg-yellow-100 text-purple-800 font-semibold"
                                            >
                                                {quizTemplates[key].title}
                                            </option>
                                        ))}
                                    </select>

                                    {/*/!* Description *!/*/}
                                    {/*{selectedKey && (*/}
                                    {/*    <div*/}
                                    {/*        className="p-5 rounded-2xl bg-yellow-100 border-4 border-orange-300 shadow">*/}
                                    {/*        <div className="text-xl font-bold text-purple-800 mb-1">*/}
                                    {/*            {quizTemplates[selectedKey].title}*/}
                                    {/*        </div>*/}
                                    {/*        <div className="text-sm text-purple-700 opacity-80">*/}
                                    {/*            {quizTemplates[selectedKey].description}*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*)}*/}

                                    {/* Action Button */}
                                    <button
                                        disabled={!studentName || !selectedKey}
                                        onClick={() => startQuiz(selectedKey)}
                                        className={`
            w-full
            py-6
            px-8
            rounded-2xl
            text-2xl
            font-bold
            transition
            shadow-lg
            border-4

            ${
                                            studentName && selectedKey
                                                ? 'bg-gradient-to-r from-yellow-300 to-orange-300 text-purple-800 border-orange-400 hover:from-yellow-400 hover:to-orange-400 hover:scale-105'
                                                : 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed'
                                        }
        `}
                                    >
                                        Bắt đầu làm bài
                                    </button>

                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Screen 2: Làm bài tập
    if (screen === 'quiz') {
        const quiz = quizTemplates[selectedQuiz];

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 mb-6 border-4 border-blue-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-purple-700">👋 {studentName}</h2>
                                <p className="text-gray-600">{quiz.title}</p>
                            </div>
                            <div
                                className="flex items-center gap-2 bg-yellow-100 px-6 py-3 rounded-2xl border-3 border-yellow-400">
                                <Timer className="text-orange-500"/>
                                <span className="text-2xl font-bold text-orange-600">{formatTime(elapsedTime)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Exercise Navigation */}
                    <div className="grid grid-cols-6 gap-3 mb-6">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentExercise(num)}
                                className={`py-4 rounded-2xl font-bold text-lg transition transform hover:scale-105 border-4 ${
                                    currentExercise === num
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-600 scale-105'
                                        : answers[`exercise${num}`]
                                            ? 'bg-green-200 text-green-800 border-green-400'
                                            : 'bg-white text-gray-600 border-gray-300'
                                }`}
                            >
                                Bài {num}
                            </button>
                        ))}
                    </div>

                    {/* Exercise Content */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-purple-300">
                        <ExerciseContent
                            exerciseNum={currentExercise}
                            quiz={quiz}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={submitQuiz}
                            disabled={!checkAllAnswered()}
                            className={`px-12 py-5 rounded-2xl font-bold text-2xl shadow-xl transition transform border-4 ${
                                checkAllAnswered()
                                    ? 'bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white border-green-500 hover:scale-105'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-400'
                            }`}
                        >
                            {checkAllAnswered() ? '🎉 Nộp bài' : '⚠️ Làm hết tất cả bài tập mới nộp được nhé!'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Screen 3: Kết quả
    if (screen === 'result') {
        const quiz = quizTemplates[selectedQuiz];

        return (
            <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-4 border-green-400">
                        <div className="text-center mb-8">
                            <Award className="w-24 h-24 mx-auto text-yellow-500 mb-4"/>
                            <h1 className="text-5xl font-bold text-purple-700 mb-2">
                                {results.percentage >= 80 ? '🎉 Tuyệt vời!' : results.percentage >= 60 ? '👍 Khá tốt!' : '💪 Cố gắng lên!'}
                            </h1>
                            <p className="text-2xl text-gray-700">{studentName}</p>
                            <p className="text-xl text-gray-600 mt-2">{quiz.title}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="bg-blue-100 rounded-2xl p-6 text-center border-3 border-blue-300">
                                <div
                                    className="text-4xl font-bold text-blue-600">{results.totalCorrect}/{results.totalQuestions}</div>
                                <div className="text-gray-600 mt-2">Câu đúng</div>
                            </div>
                            <div className="bg-purple-100 rounded-2xl p-6 text-center border-3 border-purple-300">
                                <div className="text-4xl font-bold text-purple-600">{results.percentage}%</div>
                                <div className="text-gray-600 mt-2">Điểm số</div>
                            </div>
                            <div className="bg-orange-100 rounded-2xl p-6 text-center border-3 border-orange-300">
                                <div
                                    className="text-4xl font-bold text-orange-600">{formatTime(results.timeTaken)}</div>
                                <div className="text-gray-600 mt-2">Thời gian</div>
                            </div>
                        </div>

                        {/* Chi tiết từng bài */}
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <ExerciseResult key={num} exerciseNum={num}
                                                results={results.exerciseResults[`exercise${num}`]}/>
                            ))}
                        </div>

                        <button
                            onClick={restart}
                            className="w-full mt-8 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-5 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition flex items-center justify-center gap-3 text-2xl border-4 border-purple-500"
                        >
                            <RefreshCw/> Làm lại
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component hiển thị nội dung bài tập
function ExerciseContent({exerciseNum, quiz, answers, setAnswers}) {
    const exerciseKey = `exercise${exerciseNum}`;
    const exerciseData = quiz.exercises[exerciseKey];

    // Bài 1: Trắc nghiệm
    if (exerciseNum === 1) {
        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">📝 Bài 1: Chọn từ vựng đúng nghĩa</h3>
                <div className="space-y-6">
                    {exerciseData.map((q, qIndex) => (
                        <div key={qIndex} className="bg-purple-50 rounded-2xl p-6 border-3 border-purple-200">
                            <p className="text-xl font-semibold mb-4 text-gray-800">Câu {qIndex + 1}: {q.question}</p>
                            <div className="space-y-3">
                                {q.options.map((opt, oIndex) => (
                                    <button
                                        key={oIndex}
                                        onClick={() => {
                                            const newAnswers = [...(answers[exerciseKey] || [])];
                                            newAnswers[qIndex] = oIndex;
                                            setAnswers({...answers, [exerciseKey]: newAnswers});
                                        }}
                                        className={`w-full text-left px-6 py-4 rounded-xl transition transform hover:scale-105 border-3 ${
                                            (answers[exerciseKey] || [])[qIndex] === oIndex
                                                ? 'bg-purple-500 text-white border-purple-600 font-bold'
                                                : 'bg-white hover:bg-purple-100 border-gray-300'
                                        }`}
                                    >
                                        {String.fromCharCode(65 + oIndex)}. {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Bài 2: Ghép cột
    if (exerciseNum === 2) {
        const [selectedA, setSelectedA] = useState(null);
        const paired = answers[exerciseKey] || [];

        const handleSelect = (column, index) => {
            if (column === 'A') {
                setSelectedA(index);
            } else {
                if (selectedA !== null) {
                    // Kiểm tra xem cặp này đã tồn tại chưa
                    const existingPairIndex = paired.findIndex(p => p.a === selectedA && p.b === index);

                    if (existingPairIndex >= 0) {
                        // Nếu đã tồn tại, xóa cặp này
                        const newPaired = paired.filter((_, i) => i !== existingPairIndex);
                        setAnswers({...answers, [exerciseKey]: newPaired});
                    } else {
                        // Xóa các cặp cũ có chứa A hoặc B này
                        const newPaired = paired.filter(p => p.a !== selectedA && p.b !== index);
                        // Thêm cặp mới
                        setAnswers({
                            ...answers,
                            [exerciseKey]: [...newPaired, {a: selectedA, b: index}]
                        });
                    }
                    setSelectedA(null);
                }
            }
        };

        const handleRemovePair = (pairIndex) => {
            const newPaired = paired.filter((_, i) => i !== pairIndex);
            setAnswers({...answers, [exerciseKey]: newPaired});
        };

        const isPairedA = (index) => {
            return paired.some(p => p.a === index);
        };

        const isPairedB = (index) => {
            return paired.some(p => p.b === index);
        };

        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">🔗 Bài 2: Ghép câu hỏi và câu trả lời</h3>
                <p className="text-gray-600 mb-6 text-lg">Chọn một câu ở cột A, sau đó chọn câu phù hợp ở cột B. Click
                    vào cặp đã ghép để thay đổi.</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-pink-600">Cột A</h4>
                        <div className="space-y-3">
                            {exerciseData.columnA.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelect('A', index)}
                                    className={`w-full text-left px-6 py-4 rounded-xl transition transform border-3 ${
                                        selectedA === index
                                            ? 'bg-pink-500 text-white border-pink-600 scale-105 font-bold'
                                            : isPairedA(index)
                                                ? 'bg-pink-100 text-pink-800 border-pink-300 hover:bg-pink-200'
                                                : 'bg-white hover:bg-pink-100 hover:scale-105 border-pink-300'
                                    }`}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl mb-4 text-blue-600">Cột B</h4>
                        <div className="space-y-3">
                            {exerciseData.columnB.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelect('B', index)}
                                    className={`w-full text-left px-6 py-4 rounded-xl transition transform border-3 ${
                                        isPairedB(index)
                                            ? 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200'
                                            : 'bg-white hover:bg-blue-100 hover:scale-105 border-blue-300'
                                    }`}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {paired.length > 0 && (
                    <div className="bg-green-50 rounded-2xl p-6 border-3 border-green-300">
                        <h4 className="font-bold text-xl mb-4 text-green-700">✅ Các cặp đã ghép (Click để xóa và ghép
                            lại):</h4>
                        <div className="space-y-2">
                            {paired.map((p, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleRemovePair(i)}
                                    className="w-full flex items-center gap-4 text-lg hover:bg-green-100 p-3 rounded-xl transition border-2 border-transparent hover:border-green-400"
                                >
                  <span className="bg-pink-200 px-4 py-2 rounded-lg border-2 border-pink-300 flex-1 text-left">
                    {exerciseData.columnA[p.a].text}
                  </span>
                                    <span className="text-2xl">→</span>
                                    <span
                                        className="bg-blue-200 px-4 py-2 rounded-lg border-2 border-blue-300 flex-1 text-left">
                    {exerciseData.columnB[p.b].text}
                  </span>
                                    <X className="text-red-500 w-6 h-6 flex-shrink-0"/>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Bài 3: Tìm chữ cái chung
    if (exerciseNum === 3) {
        const userAnswers = answers[exerciseKey] || [];

        const handleCommonInput = (qIndex, value) => {
            const newAnswers = [...userAnswers];
            newAnswers[qIndex] = value;
            setAnswers({...answers, [exerciseKey]: newAnswers});
        };

        const renderWordBoxes = (word, correctAnswer) => {
            return word.split('').map((char, i) => {
                const isCommon = char === correctAnswer;
                return (
                    <div
                        key={i}
                        className={`flex items-center justify-center w-12 h-12 text-2xl font-bold rounded-lg border-3 transition-all ${
                            isCommon
                                ? 'bg-orange-400 text-white border-orange-500 shadow-lg'
                                : 'bg-white text-purple-700 border-purple-300'
                        }`}
                    >
                        {isCommon ? '?' : char}
                    </div>
                );
            });
        };

        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">🔍 Bài 3: Tìm chữ cái chung</h3>
                <p className="text-gray-600 mb-6 text-lg">Tìm chữ cái chung giữa các từ vựng (vị trí dấu ?)</p>

                <div className="space-y-8">
                    {exerciseData.map((q, qIndex) => {
                        const commonInput = userAnswers[qIndex] || '';

                        return (
                            <div key={qIndex}
                                 className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-3 border-purple-300 shadow-lg">
                                <p className="text-xl font-bold mb-4 text-purple-800 text-center">Câu
                                    đố {qIndex + 1}</p>

                                {/* Hiển thị các từ vựng trên một hàng */}
                                <div className="flex gap-4 justify-center items-center mb-6 flex-wrap">
                                    {q.words.map((word, wIndex) => (
                                        <div key={wIndex}
                                             className="bg-white rounded-xl p-4 border-3 border-pink-300 shadow-md">
                                            <div className="flex gap-1">
                                                {renderWordBoxes(word, q.correctAnswer)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Ô nhập chữ cái chung */}
                                <div className="bg-yellow-50 rounded-xl p-4 border-3 border-yellow-300 mb-3">
                                    <label className="block text-lg font-bold mb-3 text-gray-800 text-center">
                                        ✏️ Chữ cái chung là:
                                    </label>
                                    <div className="flex justify-center">
                                        <input
                                            type="text"
                                            maxLength="1"
                                            value={commonInput}
                                            onChange={(e) => handleCommonInput(qIndex, e.target.value)}
                                            className="w-20 h-20 text-4xl font-bold text-center border-4 border-yellow-500 rounded-xl focus:outline-none focus:border-orange-500 bg-white shadow-lg"
                                            placeholder="?"
                                        />
                                    </div>
                                </div>

                                {/* Gợi ý */}
                                <details className="bg-blue-50 rounded-xl p-3 border-2 border-blue-300">
                                    <summary
                                        className="cursor-pointer text-blue-700 font-semibold text-base hover:text-blue-900">
                                        💡 Xem gợi ý
                                    </summary>
                                    <p className="mt-2 text-gray-700">{q.hint}</p>
                                </details>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Bài 4: Nối từ
    if (exerciseNum === 4) {
        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">🔗 Bài 4: Nối từ (cuối từ này = đầu từ kia)</h3>
                <p className="text-gray-600 mb-6 text-lg">Nhập từ vựng sao cho chữ cuối của từ trước là chữ đầu của từ
                    sau</p>
                <div className="space-y-8">
                    {exerciseData.map((q, qIndex) => (
                        <div key={qIndex} className="bg-green-50 rounded-2xl p-6 border-3 border-green-300">
                            <p className="text-xl font-semibold mb-4 text-gray-800">Câu {qIndex + 1}:
                                Nối {q.words.length} từ</p>
                            <div className="flex gap-4 items-center flex-wrap justify-center">
                                {q.words.map((word, wIndex) => (
                                    <React.Fragment key={wIndex}>
                                        <div className="flex flex-col items-center gap-3">
                                            <label className="text-4xl font-bold text-green-700">
                                                {word}
                                            </label>
                                            <input
                                                type="text"
                                                value={(answers[exerciseKey] || [])[qIndex]?.[wIndex] || ''}
                                                onChange={(e) => {
                                                    const newAnswers = [...(answers[exerciseKey] || [])];
                                                    if (!newAnswers[qIndex]) newAnswers[qIndex] = [];
                                                    newAnswers[qIndex][wIndex] = e.target.value;
                                                    setAnswers({...answers, [exerciseKey]: newAnswers});
                                                }}
                                                placeholder={`Nhập từ ${wIndex + 1}`}
                                                className="w-48 px-6 py-4 text-2xl text-center border-4 border-green-400 rounded-xl focus:outline-none focus:border-green-600"
                                            />
                                        </div>
                                        {wIndex < q.words.length - 1 && (
                                            <span className="text-3xl text-green-600 font-bold">→</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-4 text-center">
                                ⚠️ Chỉ nhập từ vựng trong danh sách đã học
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Bài 5: Dịch sang Nhật
    if (exerciseNum === 5) {
        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">🇯🇵 Bài 5: Nhập từ vựng sang tiếng Nhật</h3>
                <div className="space-y-6">
                    {exerciseData.map((q, qIndex) => (
                        <div key={qIndex} className="bg-blue-50 rounded-2xl p-6 border-3 border-blue-200">
                            <p className="text-xl font-semibold mb-4 text-gray-800">
                                Câu {qIndex + 1}: "{q.vietnamese}" → Tiếng Nhật:
                            </p>
                            <input
                                type="text"
                                value={(answers[exerciseKey] || [])[qIndex] || ''}
                                onChange={(e) => {
                                    const newAnswers = [...(answers[exerciseKey] || [])];
                                    newAnswers[qIndex] = e.target.value;
                                    setAnswers({...answers, [exerciseKey]: newAnswers});
                                }}
                                className="w-full px-6 py-4 text-2xl border-4 border-blue-400 rounded-xl focus:outline-none focus:border-blue-600"
                                placeholder="Nhập tiếng Nhật..."
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Bài 6: Điền từ vào câu
    if (exerciseNum === 6) {
        return (
            <div>
                <h3 className="text-3xl font-bold text-purple-700 mb-6">✏️ Bài 6: Chọn từ đúng để hoàn thành câu</h3>
                <div className="space-y-6">
                    {exerciseData.map((q, qIndex) => (
                        <div key={qIndex} className="bg-pink-50 rounded-2xl p-6 border-3 border-pink-200">
                            <p className="text-xl font-semibold mb-4 text-gray-800">
                                Câu {qIndex + 1}: {q.sentence}
                            </p>
                            <div className="space-y-3">
                                {q.options.map((opt, oIndex) => (
                                    <button
                                        key={oIndex}
                                        onClick={() => {
                                            const newAnswers = [...(answers[exerciseKey] || [])];
                                            newAnswers[qIndex] = oIndex;
                                            setAnswers({...answers, [exerciseKey]: newAnswers});
                                        }}
                                        className={`w-full text-left px-6 py-4 rounded-xl transition transform hover:scale-105 border-3 ${
                                            (answers[exerciseKey] || [])[qIndex] === oIndex
                                                ? 'bg-pink-500 text-white border-pink-600 font-bold'
                                                : 'bg-white hover:bg-pink-100 border-gray-300'
                                        }`}
                                    >
                                        {String.fromCharCode(65 + oIndex)}. {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
}

// Component hiển thị kết quả từng bài
function ExerciseResult({exerciseNum, results}) {
    if (!results || results.length === 0) return null;

    const titles = {
        1: "📝 Bài 1: Chọn từ vựng đúng nghĩa",
        2: "🔗 Bài 2: Ghép câu hỏi và trả lời",
        3: "🔍 Bài 3: Tìm chữ cái chung",
        4: "🔗 Bài 4: Nối từ",
        5: "🇯🇵 Bài 5: Dịch sang tiếng Nhật",
        6: "✏️ Bài 6: Điền từ vào câu"
    };

    const correctCount = results.filter(r => r.isCorrect).length;
    const totalCount = results.length;

    return (
        <div className="bg-gray-50 rounded-2xl p-6 border-3 border-gray-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center justify-between">
                <span>{titles[exerciseNum]}</span>
                <span className={`text-xl ${correctCount === totalCount ? 'text-green-600' : 'text-orange-600'}`}>
          {correctCount}/{totalCount} đúng
        </span>
            </h3>

            <div className="space-y-4">
                {results.map((r, i) => (
                    <div key={i}
                         className={`p-4 rounded-xl border-3 ${r.isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                                {r.isCorrect ? (
                                    <Check className="w-6 h-6 text-green-600"/>
                                ) : (
                                    <X className="w-6 h-6 text-red-600"/>
                                )}
                            </div>
                            <div className="flex-1">
                                {exerciseNum === 1 || exerciseNum === 6 ? (
                                    <>
                                        <p className="font-semibold text-gray-800">{r.question || r.sentence}</p>
                                        <p className="text-gray-700">
                                            Bạn chọn: <span
                                            className={r.isCorrect ? 'text-green-700 font-bold' : 'text-red-700'}>{r.userAnswer}</span>
                                        </p>
                                        {!r.isCorrect && (
                                            <p className="text-gray-700">
                                                Đáp án đúng: <span
                                                className="text-green-700 font-bold">{r.correctAnswer}</span>
                                            </p>
                                        )}
                                    </>
                                ) : exerciseNum === 2 ? (
                                    <>
                                        <p className="text-gray-700">{r.columnA} → {r.columnB}</p>
                                    </>
                                ) : exerciseNum === 3 ? (
                                    <>
                                        <p className="font-semibold text-gray-800">Các từ: {r.words}</p>
                                        <p className="text-gray-700">
                                            Chữ cái chung bạn nhập: <span
                                            className={r.isCorrect ? 'text-green-700 font-bold' : 'text-red-700'}>{r.userAnswer || '(chưa nhập)'}</span>
                                        </p>
                                        {!r.isCorrect && (
                                            <p className="text-gray-700">
                                                Đáp án đúng: <span
                                                className="text-green-700 font-bold">{r.correctAnswer}</span>
                                            </p>
                                        )}
                                    </>
                                ) : exerciseNum === 4 ? (
                                    <>
                                        <p className="text-gray-700">
                                            Bạn nhập: <span
                                            className={r.isCorrect ? 'text-green-700 font-bold' : 'text-red-700'}>{r.userSequence || '(chưa nhập)'}</span>
                                        </p>
                                        {!r.isCorrect && (
                                            <p className="text-gray-700">
                                                Đáp án đúng: <span
                                                className="text-green-700 font-bold">{r.correctSequence}</span>
                                            </p>
                                        )}
                                    </>
                                ) : exerciseNum === 5 ? (
                                    <>
                                        <p className="font-semibold text-gray-800">{r.vietnamese}</p>
                                        <p className="text-gray-700">
                                            Bạn nhập: <span
                                            className={r.isCorrect ? 'text-green-700 font-bold' : 'text-red-700'}>{r.userAnswer || '(chưa nhập)'}</span>
                                        </p>
                                        {!r.isCorrect && (
                                            <p className="text-gray-700">
                                                Đáp án đúng: <span
                                                className="text-green-700 font-bold">{r.correctAnswer}</span>
                                            </p>
                                        )}
                                    </>
                                ) : null}
                                <p className="text-sm text-gray-600 mt-1 italic">{r.explanation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}