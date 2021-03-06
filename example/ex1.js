var spoken = require('../lib/artificialspoken')

spoken.analysis('小明 和 小英:N 一起吃蘋果。\n')
spoken.analysis('小明有5個蘋果，給了小華3個蘋果，請問他還剩幾個蘋果？\n')
spoken.analysis('黑黑的天，大大的風，爸爸去捕魚，為甚麼 還 不 回 家？\n')
spoken.analysis('John:N 與 Mary=瑪莉:N 是 一 對 戀人。\n')
spoken.analysis('風與日。風日爭，旅人至，脫者勝，風狂吹，人緊衣，風敗，日暖照，人脫衣，日勝。\n')
spoken.analysis('蘋果和牛奶很好吃。蘋果牛奶很好喝。很好喝的蘋果牛奶。')
spoken.analysis('好大的蘋果。')
spoken.analysis('John 和 Mary 一起吃蘋果。\n')
spoken.analysis('祭拜同一位神明， supreme=至高無上:N 的天神《 法拉:N 》。')
spoken.analysis('人造交談語言 (ASL, Artificial Spoken Language) 是一種像程式語言一樣，具有 BNF 語法規則，但ASL是用來交談的語言。')

// spoken.analysis('蘋果 了 了 香蕉 吃 。 ')
// spoken.analysis('蘋果 和 香蕉 吃 。')
// spoken.analysis('吃 蘋果 香蕉 。 吃 蘋果 和 香蕉 。')

/*
spoken.analysis('小明 和 小英:N 一起吃蘋果。')
spoken.analysis('小明有5個蘋果，給了小華3個蘋果，請問他還剩幾個蘋果？')
spoken.analysis('黑黑的天，大大的風，爸爸去捕魚，為甚麼 還 不 回 家？')
spoken.analysis('John:N 與 瑪莉:N 是 一 對 戀人。')
spoken.analysis('風與日。風日爭，旅人至，脫者勝，風狂吹，人緊衣，風敗，日暖照，人脫衣，日勝。')
*/
/*
spoken.analysis('小明 有 5 個 蘋果 ， 給 了 小華 3 個 蘋果 ， 請問 他 還 剩 幾 個 蘋果 ？')
spoken.analysis('小明 和 小華 一起 吃 蘋果 。')
spoken.analysis('黑 黑 的 天 ， 大 大 的 風 ， 爸爸 去 捕 魚 ， 為甚麼 還 不 回 家 ？')
// 全文： https://www.facebook.com/photo.php?fbid=1464494203561879&set=p.1464494203561879&type=3&theater
// parse('聽 狂 風 怒 吼 ，  真 叫 我們 害怕 。 爸爸！爸爸！ 我們 心理 多麼 牽掛 ， 只要 您 早點兒 回家，就是 空 船 也罷 ！')
// parse('我 的 好 孩子 ，  爸爸 回來 啦 ！ 你 看 船艙 裡 ， 裝 滿 魚 和 蝦 ， 努力 就 有 好 收穫 ， 大 風 大 浪 不用 怕 ， 快 去 告訴 媽媽 ， 爸爸 已經 回 家 ！')
spoken.analysis('風 與 日 。 風 日 爭 ， 旅人 至 ， 脫 者 勝 ， 風 狂 吹 ， 人 緊 衣 ， 風 敗 ， 日 暖 照 ， 人 脫 衣 ， 日 勝 。')
spoken.analysis('約翰 與 安妮 是 一 對 戀人 。')
*/
