const classmaate = ["철수","영희","훈이"]
// undefined
classmaate.length
// 3
const classMates = classmaate
// undefined
classMates
// (3) ['철수', '영희', '훈이']
classMates[0]
// '철수'
classMates.includes('훈이');
// true
classMates.includes('맹구');
// false
classMates.push('맹구');
// 4
classMates.length
// 4
classMates
// (4) ['철수', '영희', '훈이', '맹구']
classMates.includes('맹구');
// true
classMates.pop(4)
// '맹구'
classMates.length
// 3
classMates.push('맹구');
// 4
classMates.pop()
// '맹구'
classMates.push('맹구');
// 4
classMates.push('영국');
// 5
classMates.pop()
// '영국'
classMates.length
// 4